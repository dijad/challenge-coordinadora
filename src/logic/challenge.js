class Challenge {
    constructor() { }

    async average(a, b) {
        try {
            const response = (a + b) / 2;
            return response;
        } catch (e) {
            throw new TypeError("Ha ocurrido un error con este reto");
        }
    }

    manipulateString(stringIn) {
        return stringIn.substring(stringIn.length - 1) == "!" ?
            stringIn.substring(0, stringIn.length - 1) : stringIn;
    }

    sumArray(matrix) {
        var totalSum = 0;
        var sumPositives = 0;
        var sumPairs = 0;
        var sumOdds = 0;
        if (matrix.length > 0) {
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    totalSum += matrix[i][j]
                    if (matrix[i][j] > 0) sumPositives += matrix[i][j];
                    if (matrix[i][j] % 2 == 0) {
                        sumPairs += matrix[i][j];
                    } else {
                        sumOdds += matrix[i][j];
                    }

                }
            }
        }
        return { sumaTotal: totalSum, sumaPOsitivos: sumPositives, sumaPares: sumPairs, sumaImpares: sumOdds };
    }

    transformArray(matrix, order) {
        var numbers = []
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (Number.isInteger(matrix[i][j])) {
                    numbers.push(matrix[i][j])
                } else if (matrix[i][j].constructor === String) {
                    for (let k = 0; k < matrix[i][j].length; k++) {
                        if (Number.isInteger(Number(matrix[i][j].charAt(k)))) {
                            numbers.push(Number(matrix[i][j].charAt(k)))
                        }
                    }
                }

            }
        }

        return order == "ASC" ? numbers.sort() : numbers.sort(function (a, b) { return b - a })
    }
    countMyCows(n) {
        const table = Array.from({ length: n }, () => this.getWeakData())
        this.getBestCowPerDay(table)
        return {
            totalPerday: this.calculateMilkPerDay(table),
            lowerProductionDay: this.calculateLowerProductionDay(this.calculateMilkPerDay(table)),
            highestProductionDay: this.calculateHighestProductionDay(this.calculateMilkPerDay(table)),
            bestCowPerDay: this.getBestCowPerDay(table)
        }
    }

    getWeakData() {
        return Array.from({ length: 7 }, () => Math.random() * 11.9)
    }

    calculateMilkPerDay(table) {
        var totalPerDay = []
        var totalday = 0
        for (let i = 0; i < table[0].length; i++) {//dia
            for (let j = 0; j < table.length; j++) {//vaca
                totalday += table[j][i]
            }
            totalPerDay.push(totalday)
            totalday = 0
        }
        return totalPerDay
    }

    calculateLowerProductionDay(totalPerDay) {
        return totalPerDay.indexOf(Math.min.apply(Math, totalPerDay))
    }

    calculateHighestProductionDay(totalPerDay) {
        return totalPerDay.indexOf(Math.max.apply(Math, totalPerDay))
    }

    getBestCowPerDay(table) {
        var bestCowPerDay = []
        for (let i = 0; i < table[0].length; i++) { // cada dia
            var vacasPerday = []
            for (let j = 0; j < table.length; j++) {// cada vaca
                vacasPerday.push(table[j][i])
            }
            bestCowPerDay.push(Number(vacasPerday.indexOf(Math.max.apply(Math, vacasPerday))) + 1)
        }
        return bestCowPerDay
    }
    tracking(guide, checkpoints, code) {
        if (code.length == 11) {
            const data = guide.data.guias.find(element => element.codigo_remision == code)
            return {
                isError: guide.isError,
                status: guide.status,
                data: {
                    codigo_remision: data.codigo_remision,
                    nombre_destinatario: data.nombre_destinatario,
                    dir_destinatario: data.dir_destinatario,
                },
                unidades: this.getUnits(data.unidades, checkpoints)
            }
        }
        else if (code.length == 15) {
            const data = this.getGuidePerCodeTag(code, guide)
            return {
                isError: guide.isError,
                status: guide.status,
                data: {
                    etiqueta: code,
                    informacion_guia: {
                        codigo_remision: data.codigo_remision,
                        nombre_destinatario: data.nombre_destinatario,
                        dir_destinatario: data.dir_destinatario,
                    },
                    cantidad_checkpoints: this.getCheckpointsBerTagId(code, checkpoints),
                    tracking: this.getTrackingPerTag(code, checkpoints)
                }
            }
        }
    }
    getGuidePerCodeTag(code, guide) {
        var guias = guide.data.guias
        for (let i = 0; i < guias.length; i++) {
            var units = guias[i].unidades
            for (let j = 0; j < units.length; j++) {
                if (units[j].etiqueta1d == code) {
                    return guias[i];
                }
            }
        }
    }

    getUnits(units, checkpoints) {
        const unitsOut = []
        for (let i = 0; i < units.length; i++) {
            var unit = {
                etiqueta1d: units[i].etiqueta1d,
                cantidad_checkpoints: this.getCheckpointsBerTagId(units[i].etiqueta1d, checkpoints),
                tracking: this.getTrackingPerTag(units[i].etiqueta1d, checkpoints)
            }
            unitsOut.push(unit)
        }
        return unitsOut
    }

    getCheckpointsBerTagId(tag, checkpoints) {
        var checkPointsOut = []
        for (let i = 0; i < checkpoints.data.length; i++) {
            if (checkpoints.data[i].etiqueta1d == tag) {
                checkPointsOut.push(checkpoints.data[i])
            }
        }
        return checkPointsOut.length
    }

    getTrackingPerTag(tag, checkpoints) {
        var tracking = []
        for (let i = 0; i < checkpoints.data.length; i++) {
            if (checkpoints.data[i].etiqueta1d == tag) {
                tracking.push({
                    checkpoint: checkpoints.data[i].checkpoint,
                    tipo: checkpoints.data[i].tipo
                })
            }
        }
        return tracking
    }
    scoreArray(input) {
        var score = 0
        var arrayNums = input.split(',')
        arrayNums.forEach(element => {
            if (element % 2 == 0 || element == 0) {
                score += 1
            } else if (element % 2 != 0 && element != 5) {
                score += 3
            } else if (element == 5) {
                score += 5
            }
        })
        return score
    }
}

module.exports = Challenge;