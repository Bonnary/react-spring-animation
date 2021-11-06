import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import React, { useState } from "react";

export default function OnClick() {
  const [Click, setClick] = useState(false);
  const props = useSpring({
    marginTop: Click ? 0 : -500,
  });
  return (
    <>
      <Box style={props} />
      <Button onClick={() => setClick(!Click)}>Click Here</Button>
    </>
  );
}

const Box = styled(animated.div)`
  width: 80px;
  height: 80px;
  background-color: #46e891;
  border-radius: 16px;
`;

const Button = styled.button`
  position: absolute;
  bottom: 100px;
`;
