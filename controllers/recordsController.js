const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('data/db.json');
const db = low(adapter);
const uuid = require("uuid/v1")


exports.getRecords = (req, res, next) => {
    const records = db.get('records').value()
    res.status(200).send(records);
}


exports.addRecord = (req, res, next) => {
    let record = req.body;
    record.id = uuid()
    db.get('records')
    .push(record)
    .write()

    res.status(200).send(record);
}
