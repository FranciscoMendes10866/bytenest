import { FC, ChangeEvent, MouseEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import { Input, Card, Wrap, CardTitle, SubmitButton } from "./styles";
import axios from "../../utils/axios";

const SignUp: FC = () => {
  const history = useHistory();
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSignUp = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await axios
      .post("/users/sign_up", state)
      .then(() => {
        history.push("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Wrap>
      <Card>
        <CardTitle>New Account.</CardTitle>
        <Input
          value={state.username}
          onChange={handleOnChange}
          name="username"
          placeholder="Username"
          type="text"
        />
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
        <SubmitButton onClick={handleSignUp}>Sign up</SubmitButton>
      </Card>
    </Wrap>
  );
};

export default SignUp;
