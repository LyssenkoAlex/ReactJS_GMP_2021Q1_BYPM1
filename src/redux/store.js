import { createStore, applyMiddleware } from "redux";
import rootReducer from "../redux/reducers/reducers";
import apiMiddleware from "./middleware.js";

const store = createStore(rootReducer, applyMiddleware(apiMiddleware));
window.store = store;
export default store;
