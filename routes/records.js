const express = require('express');
const router = express.Router();
const { getRecords, getRecordAddForm, addRecord } = require('../controllers/recordsController');


/**
 * GET all records
 */
router.get('/', getRecords);

/**
 * GET record add form
 */
router.get('/add', getRecordAddForm);


/**
* POST a record
 */
router.post('/', addRecord);

module.exports = router;
