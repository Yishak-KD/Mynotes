import counterReducer from './counter/counterReducer';
const createStore = require('redux').createStore;

const store = createStore(counterReducer);

export default store;