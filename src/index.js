const { MyWorker, WORKERS } = require('./lib/worker-module')
const { ConfigurationService } = require('./services');
const startServer = require('./lib/server');

(async () => {
	// Environment Load
	ConfigurationService.loadConfiguration();

	// Start Server
	// startServer();


	const Worker1 = new MyWorker(WORKERS.CLUSTER_PROCESS);
	Worker1.onMessage(msg => {
		console.log('Message in Parent - ', JSON.stringify(msg.getAsObject()));
	});
	Worker1.sendMessage('Ping from Worker-1!');

})();



