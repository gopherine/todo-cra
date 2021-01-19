import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, todoList } from "../app/itemSlice";

const Search: FC = () => {
  const [input, setInput] = useState("");
  let items = useSelector(todoList);
  const dispatch = useDispatch();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterText = event.target.value;
    setInput(filterText);
  };

  return (
    <div>
      <div className="flex justify-center">
      <input
        onChange={(e) => onChangeHandler(e)}
        id="search-input"
        className="p-4 border-pink-300  border-2 rounded-lg w-96 focus:outline-none  placeholder-gray-500 placeholder-opacity-75 md:placeholder-opacity-50 "
        placeholder="Search or Add Todo"
      ></input>
      <button
        className="uppercase p-5 m-2 flex items-center border border-pink-600 text-pink-600 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12"
        onClick={() => dispatch(addItem(input))}
      >
          +
      </button>
      </div>
      {items &&
        items
          .filter((item) => {
            //remove item which is not a similar match to input
            return item.toLowerCase().indexOf(input.toLowerCase()) >= 0;
          })
          .map((data, idx) => (
            <div key={idx} className="relative shadow flex justify-center rounded-lg p-10 my-5 mx-96">
              <span className="inset-0 absolute">
                <button
                  className="border p-3 rounded-lg shadow-sm items-center"
                  onClick={() => dispatch(removeItem(data))}
                >
                  X
                </button>
              </span>
              <p>
                {idx + 1}. {data}
              </p>
            </div>
          ))}
    </div>
  );
};

export default Search;
