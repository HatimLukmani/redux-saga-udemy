import { Segment, Grid, GridColumn, GridRow } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";
export default function DisplayBalances({ data }) {
  let incomeData = data
    .filter((dat) => !dat.isExpense)
    .reduce((acc, dat) => acc + Number.parseInt(dat.amount), 0);
  let expenseData = data
    .filter((dat) => dat.isExpense)
    .reduce((acc, dat) => acc + Number.parseInt(dat.amount), 0);
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <GridRow>
          <GridColumn>
            <DisplayBalance
              size={"tiny"}
              color={"green"}
              textAlign={"center"}
              labels={"Income"}
              value={incomeData}
            ></DisplayBalance>
          </GridColumn>
          <GridColumn>
            <DisplayBalance
              size={"tiny"}
              color={"red"}
              textAlign={"center"}
              labels={"Expense"}
              value={expenseData}
            ></DisplayBalance>
          </GridColumn>
        </GridRow>
      </Grid>
    </Segment>
  );
}
