import React from 'react';
import { shallow } from 'enzyme';

import ExpenseDashboardPage from '../../components/ExpenseDashboard';
import ExpenseList from '../../components/ExpenseList';
import ExpenseListFilters from '../../components/ExpenseListFilters';

test('should render ExpenseDashboard component', () => {
	const wrapper = shallow(<ExpenseDashboardPage />);

	expect(wrapper).toMatchSnapshot();
});