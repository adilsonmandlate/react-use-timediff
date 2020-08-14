import React from "react";
import { useTimeDiff } from "react-use-timediff";

const App = () => {
  const example = useTimeDiff(+new Date(2021, 3, 17, 9, 0), {
    startDate: +new Date(2021, 3, 16, 9, 0),
    live: true,
  });
  return <div>{JSON.stringify(example)}</div>;
};
export default App;
