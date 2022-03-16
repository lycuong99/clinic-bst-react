import { combineReducers } from "redux";
import customizationReducer from './cutomizationReducer';
import sidebarReducer from './sidebarReducer';

const reducers = combineReducers({
    customization: customizationReducer,
    sidebar: sidebarReducer
});
export default reducers;

export type RootState = ReturnType<typeof reducers>;