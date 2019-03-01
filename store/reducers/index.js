import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form'

const globalReducers = combineReducers({
    form: formReducer
});

export default globalReducers;