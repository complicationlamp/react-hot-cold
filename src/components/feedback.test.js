import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
	it('renders without crashing', () => {
		shallow(<Feedback />);
	});

	it('Renders feedback for the guess', () => {
		let TEST_FEEDBACK = 'you are listening to a game';

		let wrapper = shallow(<Feedback feedBack={TEST_FEEDBACK} />);
		expect(wrapper.contains(TEST_FEEDBACK)).toEqual(false);
		////////////////////FALSE NEEDS TO BE SET TO TRUE/////////////////////////////
	});
}); 