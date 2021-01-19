import React from 'react';
import Home from '../components/Home';
import { shallow } from './setup/test-setup';

// const mockStore = configureStore();
// // const mockDispatchfn = jest.fn(() => new Promise(resolve => resolve('')));
// const mockDispatchfn = jest.fn();

describe('<Home />', () => {
    // let props: any;
    // beforeEach (()=> {
    //     props = {
    //         dispatch: jest.fn()
    //     }
    // })
    
  let wrapper=shallow(
      <Home />
  );

  it('defines the component', () => {
    // console.log('wrapper is', wrapper.debug());
    expect(wrapper).toBeDefined();
  });

  it('renders component', () => {
      expect(wrapper.find("h2").text()).toBe("Create Your Todo List")
  });
});
