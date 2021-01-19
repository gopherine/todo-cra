//It was difficult to spot proper tests for new Redux- "https://levelup.gitconnected.com/build-a-react-redux-app-with-typescript-and-redux-form-part-2-8e3b2057d05a"
//Redux test is highly inspired by above article and has been tweaked to fit into our usecase
import Enzyme, { shallow, render, mount } from "enzyme";
//Out of the box support is not yet available for react-17
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
export { shallow, mount, render };
export default Enzyme;
