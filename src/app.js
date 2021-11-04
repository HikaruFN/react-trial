import ExpenseItem from "./components/expense-item";
import Form from "./components/new-expense";
import "./app.css";
import NewExpense from "./components/new-expense";
import { useState } from "react";

function App() {
  const [expensesArray, setExpensesArray] = useState([
    {
      id: 1,
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021 - 2 - 12),
    },
    {
      id: 2,
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021 - 2 - 12),
    },
    {
      id: 3,
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021 - 2 - 12),
    },
    {
      id: 4,
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021 - 2 - 12),
    },
  ]);

  const storeDataHandler = (datas) => {
    setExpensesArray(expensesArray.push(datas));
    console.log(expensesArray);
  };

  return (
    <div className="App">
      <NewExpense collectData={storeDataHandler} />
      <ExpenseItem
        title={expensesArray[0].title}
        amount={expensesArray[0].amount}
        date={expensesArray[0].date.toTimeString()}
      />
      <ExpenseItem
        title={expensesArray[1].title}
        amount={expensesArray[1].amount}
        date={expensesArray[1].date.toTimeString()}
      />
      <ExpenseItem
        title={expensesArray[2].title}
        amount={expensesArray[2].amount}
        date={expensesArray[2].date.toTimeString()}
      />
      <ExpenseItem
        title={expensesArray[3].title}
        amount={expensesArray[3].amount}
        date={expensesArray[3].date.toTimeString()}
      />
    </div>
  );
}
export default App;
