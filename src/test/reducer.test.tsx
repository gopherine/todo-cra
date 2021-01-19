import reducer from "../app/itemSlice";

describe("items reducer", () => {
  it("items  reducer expected state", () => {
    const action = {
      payload: "test",
      type: "item/addItem",
    };

    const updatedState = reducer(undefined, action);

    expect(updatedState).toHaveLength(3);
    expect(updatedState).toEqual(["hello", "world", "test"]);
  });
});
