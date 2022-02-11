import nengi from 'nengi';

const config = {
  UPDATE_RATE: 20,
  USE_HISTORIAN: true,
  ID_BINARY_TYPE: nengi.UInt16,
  TYPE_BINARY_TYPE: nengi.UInt8,
  ID_PROPERTY_NAME: 'nid',
  TYPE_PROPERTY_NAME: 'ntype',
  protocols: {
    entities: [],
    localMessages: [],
    messages: [],
    commands: [],
    basics: [],
  },
};

export default config;
