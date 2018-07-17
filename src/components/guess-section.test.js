import React from 'react';
import {shallow} from 'enzyme';

import 	GuessSection from './guess-section';

describe('<GuessSection />', () => {
	it('renders without crashing', () => {
		shallow(<GuessSection guesses={[]} />);
	});
});