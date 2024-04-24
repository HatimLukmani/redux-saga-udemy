import { applyMiddleware, combineReducers, createStore } from "redux";
import { actionFunction } from "../reducers/entries.reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import modalFunction from "../reducers/modals.reducers";
import createSagaMiddleware from "redux-saga";
import { count, testSaga } from "../sagas/testSaga";
// import { testSaga } from "../sagas/testSaga";
import { initSagas } from "../sagas/index.js";
const sagaMiddleware = createSagaMiddleware();
// const middlewares = [sagaMiddleware];
let cReducer = combineReducers({
  entries: actionFunction,
  modals: modalFunction,
});
const configStore = createStore(cReducer, applyMiddleware(sagaMiddleware));
initSagas(sagaMiddleware);
export default configStore;
