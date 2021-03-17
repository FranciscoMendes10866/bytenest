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
} from "./navbar.styles";
import { PrimaryButton, DangerButton } from "../buttons/styles";

const Navbar: FC = () => {
  return (
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
        </Items>
        <Actions>
        <Button>
            <DangerButton>Sign in</DangerButton>
          </Button>
          <Button>
            <PrimaryButton>Sign up</PrimaryButton>
          </Button>
        </Actions>
      </Nav>
    </Container>
  );
};

export default Navbar;
