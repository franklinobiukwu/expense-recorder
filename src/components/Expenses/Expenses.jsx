import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
	const [filterYear, setFilterYear] = useState('2020')
//	const [filteredData, setFilteredData] = useState(props.data)

//	var filtered = props.data
	const filterChangeHandler = (val) => {
		setFilterYear(val)
	}
	const filtered = props.data.filter(item => {
		return item.date.getFullYear().toString() == filterYear
	})




	return (
		<>
			<Card className = 'expenses'>		
				<ExpensesFilter 
					selected = {filterYear} 
					onChangeFilter = {filterChangeHandler}
				/>
				<ExpensesChart filteredExpenses={filtered}/>
				<ExpenseList data = {filtered} />
			</Card>
		</>
	);
}

export default Expenses;
