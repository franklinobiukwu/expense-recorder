import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2020, 7, 14)
	},
	{
		id: 'e2',
		title: 'New TV',
		amount: 799.49,
		date: new Date(2021, 2, 12)
	},
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 29.67,
		date: new Date(2022, 2, 28)
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2023, 7, 5)
	},
];
const App = () => {

	const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

	const newFormDataHandler = (formData) => {
		setExpenses(prevExpenses => {
			return [formData, ...prevExpenses]
		});
	};

  return (
    <>
	<NewExpense onNewFormData={newFormDataHandler}/>
	<Expenses data = {expenses}/>
    </>
  )
}

export default App
