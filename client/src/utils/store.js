//import from Redux
import { createStore } from 'redux';
import reducer from './reducers';

//create and export store from reducer
const store = createStore(reducer);
export default store; 