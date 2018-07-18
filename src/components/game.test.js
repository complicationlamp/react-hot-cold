import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game/>', () => {
	it('Renders without crashing', () => {
		shallow(<Game  />)
	});

	it('Should hav an empty array to hold guesses', () => {
		const wrapper = shallow(<Game/>);
		wrapper.simulate('click');
		expect(wrapper.state('guesses')).toEqual([]);
		expect(wrapper.state('feedback')).toEqual('Make your guess!');
		expect(wrapper.state('correctAnswer')).toBeGreaterThan(0);
		expect(wrapper.state('correctAnswer')).toBeLessThan(100);
	});

	it('should be able to make guesses', () => {
		const wrapper = shallow(<Game/>);
		wrapper.setState({
			correctAnswer: 79
		});

		wrapper.instance().makeGuess(11);
		expect(wrapper.state('guesses')).toEqual([11]);
		expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...')
	

		wrapper.instance().makeGuess(30);
		expect(wrapper.state('guesses')).toEqual([11, 30]);
		expect(wrapper.state('feedback')).toEqual('You\'re Cold...');


		wrapper.instance().makeGuess(70);
		expect(wrapper.state('guesses')).toEqual([11, 30, 70]);
		expect(wrapper.state('feedback')).toEqual('You\'re Hot!');


		wrapper.instance().makeGuess(66);
		expect(wrapper.state('guesses')).toEqual([11, 30, 70, 66]);
		expect(wrapper.state('feedback')).toEqual('You\'re Warm.');

		wrapper.instance().makeGuess(79);
		expect(wrapper.state('guesses')).toEqual([11, 30, 70, 66, 79]);
		expect(wrapper.state('feedback')).toEqual('You got it!');

	});
}); 