import React, { useState } from "react";
import styled from "styled-components";
import { a, useTransition } from "react-spring";

export default function MultipleAnimation() {
  const [Item, setItem] = useState([]);
  const transition = useTransition(Item, {
    from: { x: -50, y: 400, opacity: 0 },
    enter: (i) => async (next) => {
      await next({ y: i.y, opacity: 1, delay: i.delay });
      await next({ x: 0});
    },
    leave: { x: 100, y: 400, opacity: 0 },
    // config: { duration: 1000 },
  });
  return (
    <div>
      {/* the more you set {} the more Box will show */}
      <button
        onClick={() =>
          setItem((Item) =>
            Item.length
              ? []
              : [
                  { y: -100, delay: 200 },
                  { y: -50, delay: 400 },
                  { y: 0, delay: 600 },
                ]
          )
        }
      >
        mount
      </button>
      {transition((style, item) => (item ? <Box style={style} /> : ""))}
    </div>
  );
}

const Box = styled(a.div)`
  width: 80px;
  height: 80px;
  background-color: #46e891;
  border-radius: 16px;
  /* margin: 20px; */
`;
