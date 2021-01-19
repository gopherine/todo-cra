import React, { Fragment } from "react";
import Layout from "./layout";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "tailwindcss/tailwind.css";

const App = () => {
  return (
    <Fragment>
      <Layout title="Todo App">
        <Provider store={store}>
          <Routes />
        </Provider>
      </Layout>
    </Fragment>
  );
};

export default App;
