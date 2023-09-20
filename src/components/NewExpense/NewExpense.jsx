import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
	const [toggle, setToggle] = useState(false)

	const saveExpenseFormHandler = (expenseData) => {
		const newData = {
			...expenseData,
			id: Math.random().toString()
		};

		props.onNewFormData(newData);
	};

	const cancelHandler = () => {
		setToggle(false)
	}

	return (
		<div className='new-expense'>
			{toggle && <ExpenseForm onSaveExpenseForm={saveExpenseFormHandler} cancel={cancelHandler}/>}
			{ !toggle && <button onClick={()=> setToggle(true)}>Add New Expense</button>}

		</div>
	);
};

export default NewExpense;
