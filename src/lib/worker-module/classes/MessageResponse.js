module.exports = class MessageResponse {
    constructor(data) {
        this.type     = data.type;
        this.message  = data.message;
        this.metadata = data.metadata;
    }

    getType() {
        return this.type
    }

    getMessage() {
        return this.message
    }

    getMetadata() {
        return this.metadata
    }

    getAsObject() {
        return {
            type: this.type,
            message: this.message,
            metadata: this.metadata,
        }
    }
}
