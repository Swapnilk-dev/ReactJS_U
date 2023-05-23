import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    { title: "Pg rent", amount: 8000, date: new Date(2023, 2, 8) },
    { title: "Food ", amount: 4000, date: new Date(2023, 2, 10) },
    { title: "Chai", amount: 1400, date: new Date(2023, 2, 1) },
  ];
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
    </div>
  );
  //asdasdasd
}

export default App;
