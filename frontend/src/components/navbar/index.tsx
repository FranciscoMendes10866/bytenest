import { FC, MouseEvent } from "react";
import { Container } from "@mverissimoo/emotion-grid";
import { FaMagento } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";

import { useStore } from "../../store";
import axios from "../../utils/axios";

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
  const history = useHistory();
  const username = useStore((state) => state.username);
  const { setUsername } = useStore();
  const handleLogout = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await axios
      .post("/users/logout")
      .then(() => {
        setUsername("");
        history.push("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <Nav>
        <Brand>
          {!username ? (
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
              <FaMagento />
            </Link>
          ) : (
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/panel"
            >
              <FaMagento />
            </Link>
          )}
        </Brand>
        {!username ? (
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
        ) : null}
        <Actions>
          {!username ? (
            <>
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
            </>
          ) : (
            <Button>
              <PrimaryButton onClick={handleLogout}>Logout</PrimaryButton>
            </Button>
          )}
        </Actions>
      </Nav>
    </Container>
  );
};

export default Navbar;
