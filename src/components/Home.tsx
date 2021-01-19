import React, { FC } from "react";
import Search from "./Search";

const Home: FC = () => {
  return (
    <div>
      <h2 className="text-xl flex justify-center p-16">
        Create Your Todo List
      </h2>
      <Search />
    </div>
  );
};

export default Home;
