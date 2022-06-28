import React  from 'react';
import { mockData } from '../mock-data';
import Event from '../Event';
import { shallow } from 'enzyme';

describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
    
});

  test('render event', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('render event summary', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });

  // test('render event start-time', () => {
  //   expect(EventWrapper.find('.start-time')).toHaveLength(1);
  // });

  test('render event location', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });
    
  test('render button for details', () => {
    expect(EventWrapper.find(".show-details")).toHaveLength(1);
  });
  

  test('expand details on clicked button', () => {
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find('.show-details').simulate('click');
    EventWrapper.find('.event-description').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
  });

  test('hide details after clicked button', () => {
    EventWrapper.setState({
      collapsed: false,
    });
    EventWrapper.find('.hide-details').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(true);
  });

  
});



  
