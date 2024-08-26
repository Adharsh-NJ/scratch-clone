import React, { useState } from "react";
import { useMotion } from "../../store/motion/MotionContext";
import Button from "../common/Button";
import { IPosition } from "../../types/Motions";
import NumberInput from "../common/NumberInput";

const Actions = () => {
  const { move, goTo, glideTo } = useMotion();
  const [gotoPosition, setGotoPosition] = useState<IPosition>({ x: 0, y: 0 });
  const [glideToPosition, setGlideToPosition] = useState<IPosition>({
    x: 0,
    y: 0,
  });

  return (
    <div className="flex-1 p-4 gap-5">
      <Button onClick={() => move(10)}>Move 10 steps</Button>

      <Button onClick={() => goTo({ x: gotoPosition.x, y: gotoPosition.y })}>
        <NumberInput
          value={gotoPosition.x}
          label="x:"
          onChange={(e: any) =>
            setGotoPosition((prev) => ({
              x: Number.parseInt(e.target.value),
              y: prev.y,
            }))
          }
        />
        <NumberInput
          value={gotoPosition.y}
          label="y:"
          onChange={(e: any) =>
            setGotoPosition((prev) => ({
              x: prev.x,
              y: Number.parseInt(e.target.value),
            }))
          }
        />
      </Button>

      <Button onClick={() => glideTo(glideToPosition.x, glideToPosition.y, 2)}>
        <h1 className=" w-full"> Glide to </h1>
        <NumberInput
          value={glideToPosition.x}
          label="x:"
          onChange={(e: any) =>
            setGlideToPosition((prev) => ({
              x: Number.parseInt(e.target.value),
              y: prev.y,
            }))
          }
        />
        <NumberInput
          value={glideToPosition.y}
          label="y:"
          onChange={(e: any) =>
            setGlideToPosition((prev) => ({
              x: prev.x,
              y: Number.parseInt(e.target.value),
            }))
          }
        />
      </Button>
    </div>
  );
};

export default Actions;
