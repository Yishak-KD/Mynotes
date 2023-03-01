import cakeReducer from './cakes/cakeReducer';
const createStore = require('redux').createStore;

const store = createStore(cakeReducer);

export default store;