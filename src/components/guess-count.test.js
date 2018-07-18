import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
	it('renders without crashing', () => {
		shallow(<GuessCount />);
	});

	it('Sould be able to count the guesses', () => {
		const value = 3;
		const wrapper = shallow(<GuessCount guessCount={value} />);
		expect(wrapper.text()).toEqual(`You\'ve made ${value} guesses!`);
	})
});