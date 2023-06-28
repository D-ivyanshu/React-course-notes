import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 5, category: "Groceries" },
    { id: 2, description: "Eggs", amount: 10, category: "Groceries" },
    { id: 3, description: "Electricity", amount: 100, category: "Utilites" },
    { id: 4, description: "Movies", amount: 15, category: "Entertainment" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const deleteId = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <>
      <div className="mb-3">
        <h1>Expense Tracker</h1>
      </div>
      <div className="mb-5">
        <ExpenseForm onSubmit= {expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])}/>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={deleteId} />
    </>
  );
}

export default App;
