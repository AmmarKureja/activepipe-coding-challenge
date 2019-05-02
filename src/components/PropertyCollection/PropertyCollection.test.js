import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import properties from '../../consts/data/properties.json';

import PropertyCollection from './PropertyCollection';
import ImageHolder from '../ImageHolder/ImageHolder';

configure({adapter: new Adapter()});

describe('<PropertyCollection />', () => {
    it('should render 20 <ImageHolder /> elements if retrieve data is not null', () => {
        const wrapper = shallow(<PropertyCollection data = {[...properties]} />);
        expect(wrapper.find(ImageHolder)).toHaveLength(20);
    });

    it('should render 0 <ImageHolder /> elements if retrieve data is null', () => {
        const wrapper = shallow(<PropertyCollection data = {[]} />);
        expect(wrapper.find(ImageHolder)).toHaveLength(0);
    });
});