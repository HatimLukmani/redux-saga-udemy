import { devToolsEnhancer } from "redux-devtools-extension";
import {
  take,
  delay,
  put,
  fork,
  takeEvery,
  cancel,
  cancelled,
  takeLatest,
} from "redux-saga/effects";
// export function* testSaga() {
//   while (true) {
//     console.log("starting......");
//     yield take("WAIT_FOR_DISPATCH");
//     console.log("ending......");
//   }
// }
function* doNothing1() {
  console.log("i have been called1");
  yield delay(1000);
  console.log("i have completed1");
}
function* doNothing2() {
  console.log("i have been called2");
  yield delay(1000);
  console.log("i have completed2");
}
export function* testFork() {
  while (true) {
    yield take("WAIT_FOR_DISPATCH2");
    yield fork(doNothing1);
    yield fork(doNothing1);
  }
}
function* takeEveryTester({ payload }) {
  console.log("tester start of", payload);
  yield delay(5000);
  console.log("tester end of", payload);
}
export function* testTakeEvery() {
  yield takeEvery("WAIT_FOR_DISPATCH3", takeEveryTester);
}
function* infiniteSaga() {
  let index = 0;
  console.log("saga chalu");
  while (true) {
    index = index + 1;
    try {
      console.log("chalu hai ", index);
      yield delay(1000);
    } finally {
      console.log("khatam hua?", yield cancelled());
    }
  }
}
export function* testSagaCancelled() {
  yield take("WAIT_FOR_DISPATCH4");
  const handelCancel = yield fork(infiniteSaga);
  yield delay(3000);
  yield cancel(handelCancel);
}
export function* latestTester() {
  yield takeLatest("WAIT_FOR_DISPATCH5", infiniteSaga);
}
export function* dispatch() {
  let index = 0;
  // console.log("dispatching 4");
  // yield put({ type: "WAIT_FOR_DISPATCH4", payload: index });
  // while (true) {
  //   yield delay(500);
  //   yield put({ type: "WAIT_FOR_DISPATCH4", payload: index });
  //   index = index + 1;
  // }
  while (true) {
    yield delay(5000);
    yield put({ type: "WAIT_FOR_DISPATCH5", payload: index });
  }

  // index = index + 1;
}
