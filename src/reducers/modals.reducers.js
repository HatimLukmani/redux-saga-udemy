export default function modalFunction(
  state = { modal: false, id: null },
  action
) {
  let newState;
  // console.log("initial", state);
  // console.log("id=", action.id);
  switch (action.type) {
    case "OPEN_MODAL":
      newState = { ...state, modal: true, id: action.id };
      console.log(newState);
      return newState;
    case "CLOSE_MODAL":
      newState = { ...state, modal: false };
      console.log(newState);
      return newState;
    default:
      return state;
  }
}
