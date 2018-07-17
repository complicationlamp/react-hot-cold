import React from 'react';
import {shallow} from 'enzyme';

import AuralStatus from './aural-status';

describe ('<AuralStatus />', () => {
	it('renders without crashing', () => {
		shallow(<AuralStatus />)
	} );

	it('Should render some class', () => {
		let wrapper = shallow(<AuralStatus/>);
		expect(wrapper.hasClass("visuallyhidden")).toEqual(true);

	});

	// it ('should have a status', () => {
	// 	let TEST_STATUS = 'this is the status';

	// 	let wrapper = shallow(<AuralStatus auralSatus={TEST_STATUS} />);
	// 	expect(wrapper.contains(TEST_STATUS)).toEqual(true)
	// });
});