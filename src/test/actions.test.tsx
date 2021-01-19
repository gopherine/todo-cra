import configureStore from "redux-mock-store";
import { addItem, removeItem } from "../app/itemSlice";

describe("add Item redux", () => {
  const mockStore = configureStore();
  const reduxStore = mockStore();

  beforeEach(() => {
    reduxStore.clearActions();
  });

  //refer redux/toolkit to understand:: type:item/addItem
  describe("add item action", () => {
    it("should dispatch the add item action", () => {
      const expectedActions = [
        {
          payload: "What",
          type: "item/addItem",
        },
      ];
      reduxStore.dispatch(addItem("What"));

      expect(reduxStore.getActions()).toEqual(expectedActions);
    });
  });
});

describe("remove Item redux", () => {
  const mockStore = configureStore();
  const reduxStore = mockStore();

  beforeEach(() => {
    reduxStore.clearActions();
  });

  describe("remove item action", () => {
    it("should dispatch the remove item action", () => {
      const expectedActions = [
        {
          payload: "hello",
          type: "item/removeItem",
        },
      ];
      reduxStore.dispatch(removeItem("hello"));

      expect(reduxStore.getActions()).toEqual(expectedActions);
    });
  });
});
