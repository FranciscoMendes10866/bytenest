import { FC } from "react";

import { Input, Card, Wrap, CardTitle, SubmitButton } from "./styles";

const SignIn: FC = () => {
  return (
    <Wrap>
      <Card>
        <CardTitle>Welcome back.</CardTitle>
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <SubmitButton>Sign in</SubmitButton>
      </Card>
    </Wrap>
  );
};

export default SignIn;
