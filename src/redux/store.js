import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/reducers";
import apiMiddleware from "./middleware";

const store = createStore(rootReducer, applyMiddleware(apiMiddleware));
window.store = store;
export default store;
