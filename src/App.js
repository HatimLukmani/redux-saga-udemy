import logo from "./logo.svg";
import "./App.css";
import EntryLine from "./components/EntryLine";
import DisplayBalance from "./components/DisplayBalance";
import {
  Button,
  Container,
  Form,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Icon,
  Segment,
  Statistic,
  StatisticLabel,
} from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalances from "./components/DisplayBalances";
import { useEffect, useState } from "react";
import EntryLines from "./components/EntryLines";
import { createStore, combineReducers } from "redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { get_all_entry } from "./actions/entries.actions";
import incomeExpense from "./Helper/incomeExpense";
function App() {
  let dispatch = useDispatch();
  let initialData = [
    { id: 1, des: "salary credited", amount: "100000", isExpense: false },
    { id: 2, des: "milk", amount: "100000", isExpense: true },
    { id: 3, des: "part", amount: "100000", isExpense: true },
  ];
  // async function fetchInitialData() {
  //   let data = await axios.get("http://localhost:3000/entries");
  //   console.log(data.data);
  // }
  useEffect(() => {
    // fetchInitialData();
    dispatch(get_all_entry());
  }, []);
  const entriesRedux = useSelector((state) => state.entries);
  const modalRedux = useSelector((state) => state.modals);
  let ieData = incomeExpense(entriesRedux);
  console.log("iedata", ieData);
  let remainingBalance = ieData.incomeData - ieData.expenseData;
  const [data, setData] = useState(entriesRedux);
  // function actionFunction(state = initialData, action) {
  //   switch (action.type) {
  //     case "ADD_ENTRIES":
  //       return [...state, action.payload];
  //     case "REMOVE_ENTRIES":
  //       let updatedEntries = state.filter(
  //         (entry) => entry.id !== action.payload.id
  //       );
  //       return updatedEntries;
  //     default:
  //       break;
  //   }
  //   return state;
  // }
  // let cReducer = combineReducers({
  //   entries: actionFunction,
  // });
  // const store = createStore(cReducer);
  // console.log("before", store.getState());

  // let payload_add = {
  //   id: 4,
  //   des: "salary credited",
  //   amount: "150000",
  //   isExpense: true,
  // };
  // let payload_remove = {
  //   id: 1,
  // };
  // store.subscribe(() => {
  //   console.log("after", store.getState());
  // });
  // function add_entry(payload) {
  //   return { type: "ADD_ENTRIES", payload: payload };
  // }
  // function remove_enrty(id) {
  //   return { type: "REMOVE_ENTRIES", payload: { id } };
  // }
  // store.dispatch(add_entry(payload_add));
  // store.dispatch(remove_enrty(1));
  // store.dispatch(remove_enrty(2));

  return (
    <Container>
      <MainHeader title="Budget"></MainHeader>

      <DisplayBalance
        size={"small"}
        color={"black"}
        textAlign={"left"}
        labels={"Your Balance"}
        value={remainingBalance}
      ></DisplayBalance>
      <DisplayBalances data={entriesRedux}></DisplayBalances>
      <MainHeader title="History" type="h3"></MainHeader>
      <EntryLines
        datas={entriesRedux}
        data={entriesRedux}
        setData={setData}
      ></EntryLines>

      <MainHeader title={"Submit Form"} type="h3"></MainHeader>
      <NewEntryForm></NewEntryForm>
    </Container>
  );
}

export default App;
