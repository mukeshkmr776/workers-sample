const path = require('path');
const dotenv = require('dotenv');

const ENV_FILEPATH = path.join(process.cwd(), '.env');

module.exports = {
    loadConfiguration: function (filePath) {
        // load environment configuration
        if (!!filePath) {
            dotenv.config(filePath);
        } else {
            dotenv.config(path.join(process.cwd(), '.env'));
        }
    }
}