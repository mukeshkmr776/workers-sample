const { MyWorker } = require('./classes')
const WORKERS = require('./workers');

module.exports = {
    MyWorker: MyWorker,
    WORKERS: WORKERS
}