import React from 'react';
import { mockData } from '../mock-data';
import Event from '../Event';
import { shallow } from 'enzyme';

describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
    
});

  test('render event', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('render title', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });
  test('render time of event', () => {
    expect(EventWrapper.find('.event-time')).toHaveLength(1);
  });
    
});



  
