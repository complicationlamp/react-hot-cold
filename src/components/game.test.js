import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game/>', () => {
	it('Renders without crashing', () => {
		shallow(<Game  />)
	});

	it('Should hav an empty array to hold guesses', () => {
		let wrapper = shallow(<Game/>);
		wrapper.simulate('click');
		expect(wrapper.state('guesses')).toEqual([]);
	});
});