import { FC } from "react";

import { useStore } from '../../store'

const Panel: FC = () => {
  const username = useStore(state => state.username)
  return (
    <>
      <h1>Dashboard</h1>
      <p>{username} is logged in</p>
    </>
  );
};

export default Panel;
