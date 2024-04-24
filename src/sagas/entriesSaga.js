import {
  take,
  delay,
  put,
  call,
  fork,
  join,
  takeLatest,
  takeEvery,
} from "redux-saga/effects";
import axios from "axios";
import { populate_entries } from "../actions/entries.actions";
import { add_entry } from "../actions/entries.actions";
import { remove_enrty } from "../actions/entries.actions";
function* forkEntries() {
  let { data } = yield call(axios, "http://localhost:3000/entries");
  console.log("entries(saga)", data);
  return data;
}
function* forkValues() {
  let { data } = yield call(axios, "http://localhost:3000/values");
  console.log("values", data);
  return data;
}
export function* getAllEntries() {
  yield take("GET_ENTRIES");
  // yield take("entries/getApiData");
  console.log("GET ALL ENTRIES..");
  // let { data } = yield call(axios, "http://localhost:3000/entries");
  // console.log(data);
  let data = [];
  const valuesTask = yield fork(forkValues);
  const entriesTask = yield fork(forkEntries);

  // Wait for both tasks to complete and get their results
  const values = yield join(valuesTask);
  const entries = yield join(entriesTask);
  console.log("values(gae)", values);
  console.log("entries(gae)", entries);
  data = entries.map((d1) => {
    let mathingdata = values.find((d2) => d1.id === d2.id);
    return { ...d1, ...mathingdata };
  });
  console.log("data(gae)", data);
  yield put(populate_entries(data));
}
export function* deleteEntry() {
  while (true) {
    let { payload } = yield take("REMOVE_ENTRIES");
    let id = payload.id;
    console.log("redux -saga id", id);
    yield call(axios.delete, "http://localhost:3000/values/" + id);
    yield call(axios.delete, "http://localhost:3000/entries/" + id);
    yield delay(30000);
    yield put(remove_enrty(id));
  }
}
async function addEntrys({ id, des }) {
  await axios.post("http://localhost:3000/entries/", { id: id, des: des });
}
async function addValues({ id, amount, isExpense }) {
  await axios.post("http://localhost:3000/values/", {
    id: id,
    amount: amount,
    isExpense: isExpense,
  });
}
function* handelEntries({ payload }) {
  let { id, des, amount, isExpense } = payload;
  yield call(addEntrys, { id, des });
  yield call(addValues, { id, amount, isExpense });
}
export function* addEntry() {
  yield takeLatest("ADD_ENTRIES", handelEntries);
}
