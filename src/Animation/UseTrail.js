import React, { useState } from "react";
import { animated, useTrail } from "react-spring";
import styled from "styled-components";

// useTrail lets us create an effect similar to both useSpring and useSprings, 
// it will allow us to attach an animation to multiple items but instead of being 
// executed at the same time, they will be executed one after the other. It just 
// takes a number for how many we want and the style object.

export default function UseTrail() {
  const [on, toggle] = useState(false);

  const springs = useTrail(5, {
    to: { opacity: on ? 1 : 0 },
    config: { duration: 500 },
  });

  return (
    <div>
      {springs.map((animation, index) => (
        <Box style={animation} key={index} />
      ))}

      <button onClick={() => toggle(!on)}>Change</button>
    </div>
  );
}

const Box = styled(animated.div)`
  width: 80px;
  height: 80px;
  background-color: #46e891;
  border-radius: 16px;
`;