import { Form } from "semantic-ui-react";
import ButtonSaveorCancel from "./ButtonSaveorCancel";
import { forwardRef } from "react";
import { add_entry } from "../actions/entries.actions";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { useRef } from "react";
// { des: "salary credited", amount: "100000", isExpense: false },
export default function NewEntryForm() {
  let des = useRef();
  let dispatch = useDispatch();
  function setDataFunction(e) {
    e.preventDefault();
    let formdata = new FormData(e.target);

    let newData = {
      id: v4(),
      isExpense: formdata.has("isExpense"),
      des: formdata.get("des"),
      amount: formdata.get("amount"),
    };
    // console.log("formdatas", formdata.set());
    console.log("rese");
    console.log("refdes", des);
    // console.log("rese", formdata.get("amount"));
    dispatch(add_entry(newData));
  }
  const CustomFormInput = forwardRef((props, ref) => (
    <Form.Input {...props} ref={ref} />
  ));
  return (
    <Form onSubmit={setDataFunction}>
      <Form.Group>
        <CustomFormInput
          width={12}
          label="Description"
          icon="tags"
          name="des"
          ref={des}
        ></CustomFormInput>
        <CustomFormInput
          width={4}
          label="Amount"
          icon="dollar"
          name="amount"
          iconPosition="left"
        ></CustomFormInput>
      </Form.Group>
      <Form.Checkbox label="Expense" name="isExpense" />
      <ButtonSaveorCancel></ButtonSaveorCancel>
    </Form>
  );
}
