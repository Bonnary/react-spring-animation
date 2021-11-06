import React, { useState } from "react";
import { animated, useSpring, useTrail, useChain, useSpringRef } from "react-spring";
import styled from "styled-components";

export default function UseChain() {
  const [on, toggle] = useState(false);

  const springRef = useSpringRef();
  const spring = useSpring({
    ref: springRef,
    from: { scale: 0.5 },
    to: { scale: on ? 1 : 0.5 },
    config: { tension: 250 },
  });

  const MoveRef = useSpringRef();
  const trail = useTrail(1, {
    ref: MoveRef,
    from: { x:0 },
    to: { x: on ? 200 : 0 },
  });

  useChain(on ? [springRef, MoveRef] : [MoveRef, springRef]);

  return (
    <div>
      {trail.map((animation, index) => (
        <Box style={{ ...animation, ...spring }} key={index}/>        
      ))}

      <button onClick={() => toggle(!on)}>Change</button>
    </div>
  );
}

const Box = styled(animated.div)`
  width: 80px;
  height: 80px;
  background-color: hotpink;
  border-radius: 16px;
`;
