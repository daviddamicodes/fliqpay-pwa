import { combineReducers } from "redux";
import { detailsReducer } from "./detailsReducer";

const reducers = combineReducers({
    details: detailsReducer
})

export default reducers;