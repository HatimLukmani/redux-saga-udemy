import store from "../store/configureStore";

let payload_add = {
  id: 4,
  des: "salary credited",
  amount: "150000",
  isExpense: true,
};
export function add_entry(payload) {
  return { type: "ADD_ENTRIES", payload: payload };
}
export function remove_enrty(id) {
  return { type: "REMOVE_ENTRIES", payload: { id } };
}
export function update_entry(index, data) {
  return { type: "UPDATE_ENTRIES", payload: { index, data } };
}
export function get_all_entry() {
  return { type: "GET_ENTRIES" };
}
export function populate_entries(data) {
  return { type: "POPULATE_ENTRIES", payload: { data } };
}
