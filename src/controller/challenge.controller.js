const challCtrl = {}
const Challenge = require("../logic/challenge");
const axios = require("axios");
const path = require("path");

const chall = new Challenge();

challCtrl.average = (req, res) => {
    const { a, b } = req.body;
    var average = chall.average(a, b);
    average.then((response) => res.status(200).json({ response }));
}

challCtrl.manipulateString = (req, res) => {
    var newString = chall.manipulateString(req.body.string);
    res.status(200).json({ response: newString });
}

challCtrl.sumArray = (req, res) => {
    const { matrix } = req.body
    res.status(200).json({ response: chall.sumArray(matrix) });
}

challCtrl.transformArray = (req, res) => {
    const { matrix, orden } = req.body
    res.status(200).json({ response: chall.transformArray(matrix, orden) });
}

challCtrl.countMyCows = (req, res) => {
    const { n } = req.body
    if (n < 3 || n > 50) {
        res.status(400).json({ message: 'Cantidad de vacas(n) inválido, ingrese una cantidad entre 3 y 50 (3-50)' })
    } else {
        res.status(200).json({ response: chall.countMyCows(n) });
    }
}
challCtrl.tracking = async (req, res) => {
    const { code } = req.params
    const urlGuides = "https://api.coordinadora.com/cm-model-testing/api/v1/talentos/"
    const urlCheckpoints = "https://api.coordinadora.com/cm-model-testing/api/v1/talentos/checkpoint"
    const reqGuide = axios.get(urlGuides)
    const reqCheckpoints = axios.get(urlCheckpoints)
    var guides;
    var checkpoints;
    await axios.all([reqGuide, reqCheckpoints]).then(axios.spread((...responses) => {
        guides = responses[0].data
        checkpoints = responses[1].data
    }))
    res.status(200).json({ response: chall.tracking(guides, checkpoints, code) });
}

challCtrl.scoreArray = (req, res) => {
    const { input } = req.query
    res.status(200).json({ response: chall.scoreArray(input) });
}

challCtrl.showDocs = (req, res) => {
    res.sendFile(path.join(__dirname + '/../../coordinadoraAPI.yaml'));
}

challCtrl.displayUi = (req, res) => {
    res.sendFile(path.join(__dirname + '/../../public/index.html'));
}


module.exports = challCtrl