const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('data/db.json');
const db = low(adapter);
const uuid = require("uuid/v1")


const getRecords = (req, res) => {
    const records = db.get('records').value()
    res.status(200).send(records);
}

const getRecordAddForm = (req, res) => {
    res.send(`
        <form action="/api/records/" method="POST" autocomplete="off">
            <input name="title" type="text">
            <button type="submit">Add record</button>
        </form>
    `)
}

const addRecord = (req, res) => {
    let record = req.body;
    record.id = uuid()

    // add the record to the DB
    db.get('records')
    .push(record)
    .write()

    res.status(200).send(record);
}


module.exports = { getRecordAddForm, getRecords, addRecord }