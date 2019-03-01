import { createStore } from 'redux';

import globalReducers from '../reducers/index';

// creation du store
const store = createStore(
    globalReducers,
);

export default store;
