import { Grid, GridColumn, GridRow, Icon, Segment } from "semantic-ui-react";
import ModalExample from "./ModalExample";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { remove_enrty, update_entry } from "../actions/entries.actions";
import { useSelector } from "react-redux";
import { open_modal } from "../actions/modals.actions";
export default function EntryLine({
  id,
  isExpense,
  des,
  amount,
  data,
  setData,
}) {
  let dispatch = useDispatch();

  const modalRedux = useSelector((state) => state.modals.modal);
  const modalId = useSelector((state) => state.modals.modal);

  // function handelClick() {
  //   let index = data.findIndex((dat) => dat.id === id);
  //   console.log(index);
  //   setData((prevData) => {
  //     let updatedData = [...prevData];
  //     updatedData.splice(index, 1);
  //     return updatedData;
  //   });
  // }
  function handelClickEdit() {
    console.log("click editor");
    dispatch(open_modal(id));
  }
  //isExpense,des,amount,data,setData,

  return (
    <>
      {modalRedux && modalId == id && (
        <ModalExample
          id={id}
          isExpense={isExpense}
          des={des}
          amount={amount}
        ></ModalExample>
      )}
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="center">
          <GridRow>
            <GridColumn width={10}>{des}</GridColumn>
            <GridColumn width={3}>{amount}</GridColumn>
            <GridColumn width={3}>
              <Icon name="edit" onClick={handelClickEdit} bordered></Icon>
              <Icon
                name="trash"
                onClick={() => dispatch(remove_enrty(id))}
                bordered
              ></Icon>
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>
    </>
  );
}
