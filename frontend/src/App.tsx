import { FC } from "react";
import { Container } from "@mverissimoo/emotion-grid";
import { FaMagento } from "react-icons/fa";

import {
  Nav,
  Items,
  Item,
  ItemAnchor,
  Brand,
  Actions,
  Button,
  ActionAnchor,
} from "./styles/Navbar";
import { Button as Primary } from "./styles/Button";

const App: FC = () => (
  <Container>
    <Nav>
      <Brand>
        <FaMagento />
      </Brand>
      <Items>
        <Item>
          <ItemAnchor>Home</ItemAnchor>
        </Item>
        <Item>
          <ItemAnchor>About</ItemAnchor>
        </Item>
        <Item>
          <ItemAnchor>Contact</ItemAnchor>
        </Item>
      </Items>
      <Actions>
        <ActionAnchor>Sign in</ActionAnchor>
        <Button>
          <Primary>Sign up</Primary>
        </Button>
      </Actions>
    </Nav>
  </Container>
);

export default App;
