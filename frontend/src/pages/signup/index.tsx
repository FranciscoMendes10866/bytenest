import { FC } from "react";

import { Input, Card, Wrap, CardTitle, SubmitButton } from "./styles";

const SignUp: FC = () => {
  return (
    <Wrap>
      <Card>
        <CardTitle>New Account.</CardTitle>
        <Input placeholder="Username" type="text" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <SubmitButton>Sign up</SubmitButton>
      </Card>
    </Wrap>
  );
};

export default SignUp;
