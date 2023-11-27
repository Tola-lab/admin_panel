import { configureStore } from '@reduxjs/toolkit';

import heroes from '../reducers/heroes';
import filters from '../reducers/filters';

const stringMiddleware = () => (dispatch) => (action) => {
    if (typeof action === 'string') {
        return dispatch ({
            type: action
        })
    }
    return dispatch(action)
}

const store = configureStore({
    reducer: {heroes, filters},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
    
})

export default store;