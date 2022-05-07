import React from "react";
import Header from "./Header";
import { Container } from "semantic-ui-react";
 
const Layout = (props) => {
  return (
      <Container>
          <Header/>
          {props.children}
          <h1> Im a footer</h1>
      </Container>

  );
};
export default Layout;