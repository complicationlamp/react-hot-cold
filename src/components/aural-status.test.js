import React from 'react';
import {shallow} from 'enzyme';

import AuralStatus from './aural-status';

describe ('<AuralSstatus />', () => {
	it('renders without crashing', () => {
		shallow(<AuralStatus />)
	} );

	// it('Renders an aural status update', () => {
	// 	let TEST_STATUS = 'You are listening to a game!';

	// 	let wrapper = shallow(<AuralStatus auralStatus={TEST_STATUS}/>);
	// 	expect(wrapper.contains(TEST_STATUS)).toEqual(true);
	// });
});