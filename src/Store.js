import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import boardReduser from '././Redusers/mainBoard-reduser';
import listReduser from '././Redusers/list-redusers'

let redusers = combineReducers({
    form: formReducer,
    boardsData: boardReduser,
    listsData: listReduser
})


const store = createStore(redusers);

window.store = store;

console.log(store.getState())

export default store;