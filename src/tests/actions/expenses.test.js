import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expenses action object', () => {
	const action = removeExpense({ id: '123abc' });
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test('should setup edit expense action object', () => {
	const action = editExpense('1a2b3c', {description: 'This is a new description'});
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '1a2b3c',
		updates: {
			description: 'This is a new description'
		}
	});
});

test('should setup add expense action object', () => {
	const expenseData = {
        description: 'Rent', 
        amount: 109500, 
        createdAt: 1000,
        note: 'Last months rest' 
	};
	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any(String)
		}
	});
});

test('should setup add expense action object with default values', () => {
	const action = addExpense();
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			description: '', 
			amount: 0, 
			createdAt: 0,
			note: '', 
			id: expect.any(String)
		}
	});
});