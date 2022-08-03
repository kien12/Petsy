import ModalReducer from "./modal_reducer";
import { combineReducers } from "redux";

const uiReducer = combineReducers({
  modal: ModalReducer
});

export default uiReducer;