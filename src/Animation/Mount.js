import React, { useState } from "react";
import styled from "styled-components";
import { a, useTransition } from "react-spring";

export default function Mount() {
  const [Visible, setVisible] = useState(false);
  const transition = useTransition(Visible, {
    from: { x: -50, y: 400, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 100, y: 400, opacity: 0 },
    config: { duration: 1000 },
  });
  return (
    <div>
      <button onClick={() => setVisible(!Visible)}>
        {Visible ? "un-mount" : "mount"}
      </button>
      {transition((style, item) => (item ? <Box style={style}/> : ""))}
    </div>
  );
}

const Box = styled(a.div)`
  width: 80px;
  height: 80px;
  background-color: #46e891;
  border-radius: 16px;
`;
