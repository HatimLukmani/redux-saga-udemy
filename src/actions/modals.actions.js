export function open_modal(id) {
  return { type: "OPEN_MODAL", id: id };
}
export function close_modal() {
  return { type: "CLOSE_MODAL" };
}
