import { FC, useState, ChangeEvent, MouseEvent } from "react";
import { useHistory } from "react-router-dom";

import { Input, Card, Wrap, CardTitle, SubmitButton } from "./styles";
import axios from "../../utils/axios";
import { useStore } from '../../store'

const SignIn: FC = () => {
  const history = useHistory();
  const { setUsername } = useStore()
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSignIn = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await axios
      .post("/users/sign_in", state)
      .then(({ data }) => {
        if (data.username) {
          setUsername(data.username);
          history.push("/panel");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Wrap>
      <Card>
        <CardTitle>Welcome back.</CardTitle>
        <Input
          value={state.email}
          onChange={handleOnChange}
          name="email"
          placeholder="Email"
          type="email"
        />
        <Input
          value={state.password}
          onChange={handleOnChange}
          name="password"
          placeholder="Password"
          type="password"
        />
        <SubmitButton onClick={handleSignIn}>Sign in</SubmitButton>
      </Card>
    </Wrap>
  );
};

export default SignIn;
