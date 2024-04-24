import * as entriesSagas from "./entriesSaga.js";
import * as testSagas from "./testSaga.js";

export function initSagas(sagaMiddleware) {
  // console.log("valuesd==", Object.values(entriesSagas));
  Object.values(entriesSagas).forEach(sagaMiddleware.run.bind());
  // Object.values(testSagas).forEach(sagaMiddleware.run.bind());
}
