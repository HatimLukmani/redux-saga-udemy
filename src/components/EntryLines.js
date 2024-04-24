import EntryLine from "./EntryLine";
export default function EntryLines({ datas, data, setData }) {
  console.log("entrylines data", datas);
  return datas.map((dat) => {
    return (
      <EntryLine
        id={dat.id}
        des={dat.des}
        isExpense={dat.isExpense}
        amount={dat.amount}
        data={data}
        setData={setData}
      ></EntryLine>
    );
  });
}
