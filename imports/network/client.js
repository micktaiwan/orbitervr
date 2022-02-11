import nengi from 'nengi';
import config from './common';

// construct the client
const client = new nengi.Client(config, 100);

// connection callback
client.onConnect((res) => {
  console.log('onConnect response:', res);
});

// connection closed callback
client.onClose(() => {
  console.log('connection closed');
});

// connect to a server
client.connect('ws://127.0.0.1:8080', {});

// send commands to the server
// client.addCommand(command);
// client.update(); // flushes commands, sending them to the server

// read data from the server
const network = client.readNetwork();

network.entities.forEach((snapshot) => {
  snapshot.createEntities.forEach((entity) => {
    console.log('create a new entity', entity);
  });

  snapshot.updateEntities.forEach((update) => {
    console.log('update something about an existing entity', update);
  });

  snapshot.deleteEntities.forEach((id) => {
    console.log('delete an entity', id);
  });
});

network.messages.forEach((message) => {
  console.log('message', message);
});

network.localMessages.forEach((localMessage) => {
  console.log('localMessage', localMessage);
});
