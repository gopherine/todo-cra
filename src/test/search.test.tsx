//This is a very basic test redux test:: use only for reference
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Search from "../components/Search";
import { mount } from "./setup/test-setup";

//using to mock store for react
const mockStore = configureStore();
// const mockDispatchfn = jest.fn(() => new Promise(resolve => resolve('')));
const mockDispatchfn = jest.fn();

describe("<Search />", () => {
  const props: any = {};

  //Need to mount shallow does not work- shallow only represents function not component
  let wrapper = mount(
    <Provider store={mockStore()}>
      <Search {...props} dispatch={mockDispatchfn} />
    </Provider>
  );

  it("defines the component", () => {
    // console.log('wrapper is', wrapper.debug());
    expect(wrapper).toBeDefined();
  });

  it("renders component", () => {
      expect(wrapper.find("input").props().placeholder).toBe("Search or Add Todo");
  });
});
