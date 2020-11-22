const { v4: uuidv4 } = require('uuid');

module.exports = {
    createRequestMessage: function (message) {
        return {
            type: 'message', // message or binary. For future use.
            message: message,
            metadata: {
                created_date: new Date().toISOString(),
                request_id: uuidv4()
            }
        }
    }
}