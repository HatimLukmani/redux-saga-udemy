import React, { useState } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import NewEntryForm from "./NewEntryForm";
import { close_modal } from "../actions/modals.actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { update_entry } from "../actions/entries.actions";
const ModalExample = ({
  id,
  isExpense,
  des,
  amount,
  data,
  setData,
  setModalOpen,
}) => {
  let dispatch = useDispatch();
  const modalRedux = useSelector((state) => state.modals);
  console.log(modalRedux);
  const datas = useSelector((state) => state.entries);
  console.log("redux data ", datas);
  let reqDataIndex = datas.findIndex((data) => data.id === modalRedux.id);
  let reqData = datas[reqDataIndex];
  console.log("the data", datas[reqData]);
  console.log("datat", datas);
  const [open, setOpen] = useState(true);
  console.log(open);
  function handelClose() {
    dispatch(close_modal());
  }
  function submitHandeler(e) {
    e.preventDefault();
    console.log("edit modal submitter");
    const formData = new FormData(e.target);
    let desForm = formData.get("des");
    let amountForm = formData.get("amount");
    let isExpenseForm = formData.has("isExpense");
    console.log("modal submit handeler ");
    let index = datas.findIndex((dat) => dat.id === id);
    console.log(index);
    // setData((prevData) => {
    //   let updatedData = [...prevData];
    //   updatedData[index] = {
    //     ...updatedData[index],
    //     des: desForm,
    //     amount: amountForm,
    //     isExpense: isExpenseForm,
    //   };
    //   return updatedData;
    // });
    dispatch(
      update_entry(reqDataIndex, {
        des: desForm,
        amount: amountForm,
        isExpense: isExpenseForm,
      })
    );
    dispatch(close_modal());
  }
  return (
    <Modal open={modalRedux} trigger={<Button>Show Modal</Button>}>
      <Modal.Header>Modal Header</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form onSubmit={submitHandeler}>
            <Form.Group>
              <Form.Input
                width={12}
                label="Description"
                icon="tags"
                name="des"
                defaultValue={reqData.des}
              ></Form.Input>
              <Form.Input
                width={4}
                label="Amount"
                icon="dollar"
                name="amount"
                iconPosition="left"
                defaultValue={reqData.amount}
              ></Form.Input>
            </Form.Group>
            <Form.Checkbox
              label="Expense"
              name="isExpense"
              defaultValue={reqData.isExpense}
            />
            <Button.Group style={{ marginTop: 20 }}>
              <Button onClick={handelClose}>Close</Button>
              <Button.Or></Button.Or>
              <Button type="submit">Save</Button>
            </Button.Group>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default ModalExample;
