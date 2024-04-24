let initialData = [
  { id: 1, des: "salary credited(redux)", amount: "100000", isExpense: false },
  { id: 2, des: "milk(redux)", amount: "100000", isExpense: true },
  { id: 3, des: "part(redux)", amount: "100000", isExpense: true },
];
export function actionFunction(state = [], action) {
  switch (action.type) {
    case "ADD_ENTRIES":
      return [...state, action.payload];
    case "REMOVE_ENTRIES":
      let updatedEntries = state.filter(
        (entry) => entry.id !== action.payload.id
      );
      return updatedEntries;
    case "UPDATE_ENTRIES":
      let newData = [...state];
      // let index = newData.findIndex((ele) => ele.id === action.payload.id);
      newData[action.payload.index] = {
        ...newData[action.payload.index],
        ...action.payload.data,
      };
      return newData;
    case "POPULATE_ENTRIES":
      console.log(action);
      console.log("populate action entries", action.data);
      let newDataAdd = [...state, ...action.payload.data];
      console.log("populated new data", newDataAdd);
      return newDataAdd;
    default:
      break;
  }
  return state;
}
