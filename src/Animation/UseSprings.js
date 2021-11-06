import React from "react";
import { animated, useSprings } from "react-spring";
import styled from "styled-components";

//useSprings multiple animations

const items = [
  { text: "foo", opacity: 0.3, id: 1 },
  { text: "bar", opacity: 0.6, id: 2 },
  { text: "baz", opacity: 0.9, id: 3 },
];

export default function UseSprings() {
  const springs = useSprings(
    items.length,
    items.map((item) => ({ opacity: item.opacity, from: { opacity: 0 } }))
  );
  return (
    <>
      {springs.map((props, i) => (
        <Box style={props} key={i}>
          {items[i].text}
        </Box>
      ))}
    </>
  );
}

const Box = styled(animated.div)`
  width: 80px;
  height: 80px;
  background-color: #46e891;
  border-radius: 16px;
  
`;
