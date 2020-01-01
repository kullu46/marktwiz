import { combineReducers } from 'redux';
import MainReducer from "./main";
const reducers = combineReducers({
    main: MainReducer
});
export default reducers;