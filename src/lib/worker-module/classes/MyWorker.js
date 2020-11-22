const { Worker } = require('worker_threads');
const { v4: uuidv4 } = require('uuid');

const MessageResponse = require('./MessageResponse')
const { UtilityService } = require('../../../services');

module.exports = class MyWorker {

    worker_id = null;
    worker = null;
    initial_data = null;
    count_messages_proccessing = 0;

    isDestroyed = false;

    constructor(filename, options = {}) {
        this.initial_data = options.workerData || null;
        this.worker_id = uuidv4();
        this.count_messages_proccessing = 0;
        this.worker = new Worker(filename, options);
    }

    sendMessage(message) {
        if (this.isDestroyed) {
            return;
        }
        this.count_messages_proccessing += 1;
        this.worker.postMessage(UtilityService.createRequestMessage(message));
        return this;
    }

    countMessagesProcessing() {
        return this.count_messages_proccessing;
    }

    onMessage(callback) {
        this.worker.on('message', (arg) => {
            let message = new MessageResponse(arg);
            callback(message);

            if (this.count_messages_proccessing > 0) {
                this.count_messages_proccessing -= 1;
            }
        });
        return this;
    }

    onExit(callback) {
        this.worker.on('exit', callback);
        return this;
    }

    onError(callback) {
        this.worker.on('error', callback);
        return this;
    }

    destroy() {
        if (this.isDestroyed) {
            return;
        }
        this.isDestroyed = true;
        this.worker.unref();
    }
}
