import { FC } from "react";
import { Container } from "@mverissimoo/emotion-grid";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  Nav,
  Items,
  Item,
  ItemAnchor,
  Brand,
  Actions,
  Button,
  ItemLink,
} from "./styles";
import { PrimaryButton, DangerButton } from "../buttons/styles";

const Navbar: FC = () => {
  return (
    <Container>
      <Nav>
        <Brand>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            <FaMagento />
          </Link>
        </Brand>
        <Items>
          <Item>
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
              <ItemLink>Home</ItemLink>
            </Link>
          </Item>
          <Item>
            <ItemAnchor href="#why">Why</ItemAnchor>
          </Item>
          <Item>
            <ItemAnchor href="#security">Security</ItemAnchor>
          </Item>
          <Item>
            <ItemAnchor href="#privacy">Privacy</ItemAnchor>
          </Item>
          <Item>
            <ItemAnchor href="#pricing">Pricing</ItemAnchor>
          </Item>
        </Items>
        <Actions>
          <Button>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/signin"
            >
              <DangerButton>Sign In</DangerButton>
            </Link>
          </Button>
          <Button>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/signup"
            >
              <PrimaryButton>Sign up</PrimaryButton>
            </Link>
          </Button>
        </Actions>
      </Nav>
    </Container>
  );
};

export default Navbar;
