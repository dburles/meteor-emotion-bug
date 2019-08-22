/** @jsx jsx */
// Importing `styled` first results in jsx being erroneously transformed into `React.createElement`.
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

const StyledComponent = styled.span`
  color: red;
`;

const Child = styled.div`
  color: red;
`;

// The reference to `Child` only works with `babel-plugin-emotion`.
const Parent = styled.div`
  ${Child} {
    color: green;
  }
`;

const App = () => {
  return (
    <div>
      <h1 css={{ color: "blue" }}>I should be blue</h1>
      <Parent>
        <Child>green</Child>
      </Parent>
      <Child>red</Child>
    </div>
  );
};

export default App;
