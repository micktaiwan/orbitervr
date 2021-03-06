import nengi from 'nengi';
import config from './common';

const instance = new nengi.Instance(config, { port: 8080 });
instance.onConnect((client, clientData, callback) => {
  console.log('onConnect', client.id, clientData);
  callback({ accepted: true, text: 'Welcome!' });
});
instance.onDisconnect(client => {
  console.log('onDisconnect', client.id);
});

// instance.addEntity(entity);
// instance.removeEntity(entity);
// instance.addLocalMessage(localMessage);
// instance.sendMessage(message, clientOrClients);
// instance.getNextCommand();
// instance.update();
