const path = require('path');

function getWorkerFullPath(filename) {
    return path.join(__dirname, filename);
}

module.exports = {
    CLUSTER_PROCESS: getWorkerFullPath('cluster_info_worker.js'),
    EVENTS_PROCESS: getWorkerFullPath('events_process.js')
}
