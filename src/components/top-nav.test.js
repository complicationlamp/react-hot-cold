import React from 'react';
import {shallow, mount} from 'enzyme';

import 	TopNav from './top-nav';

describe('<TopNav />', () => {
	it('renders without crashing', () => {
		shallow(<TopNav />);
	});

	it('should start a new game', () => {
		const callback = jest.fn();
		const wrapper = shallow(<TopNav onRestartGame={callback}/>);
		const link = wrapper.find('.new');
		link.simulate('click', {
			preventDefault() {}
		});
		expect(callback).toHaveBeenCalled();
	});

	it('Should call the Aural update when the state-of-game link is clicked', () => {
		const callback = jest.fn();
		const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback}/>);
		const link = wrapper.find('.status-link');
			link.simulate('click', {
				preventDefault() {},
			});
		expect(callback).toHaveBeenCalled();
	})
});