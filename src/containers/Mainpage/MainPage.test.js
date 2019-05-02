
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {MainPage} from './MainPage';
import PropertyCollection from '../../components/PropertyCollection/PropertyCollection';


configure({adapter: new Adapter()});

describe('<MainPage />', () => {
    let wrapper;
beforeEach(() => {
    wrapper = shallow(<MainPage />)
})

it('It should have only one property collection component', () => {
    expect(wrapper.find(PropertyCollection)).toHaveLength(1);
})
})