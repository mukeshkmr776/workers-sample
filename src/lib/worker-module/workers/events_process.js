const { workerData, parentPort } = require('worker_threads');
const { UtilityService } = require('../../../services')
const { MessageResponse } = require('../classes')

const initial_data = workerData;

function onMessage(response) {
    console.log('Message in Worker - ', JSON.stringify(response.getAsObject()));
    sentToParent('Pong! from events_process');
}

function sentToParent(message) {
    parentPort.postMessage(UtilityService.createRequestMessage(message));
}

parentPort.on('message', (response) => {
    let data = new MessageResponse(response);
    onMessage(data);
});


