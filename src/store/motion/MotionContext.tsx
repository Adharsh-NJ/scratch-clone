import React, { createContext, ReactNode, useContext, useState } from "react";
import { IMotionContextType, IPosition } from "../../types/Motions";

const MotionContext = createContext<IMotionContextType | undefined>(undefined);

export const useMotion = (): IMotionContextType => {
  const context = useContext(MotionContext);
  if (!context) {
    throw new Error("useMotion must be used within a MotionProvider");
  }
  return context;
};

export const MotionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [position, setPosition] = useState<IPosition>({ x: 100, y: 100 });
  const [isAnimating, setIsAnimating] = useState(false);

  const move = (steps: number) => {
    if (isAnimating) return;
    setPosition((prevPosition) => ({
      x: prevPosition.x + steps,
      y: prevPosition.y,
    }));
  };

  const turn = (degrees: number) => {
    // Implement rotation logic here
  };

  const goTo = (newPosition: IPosition) => {
    if (isAnimating) return;
    setPosition(newPosition);
  };

  const glideTo = (x: number, y: number, seconds: number) => {
    setIsAnimating(true);
    const start = performance.now();
    const initialPosition = { ...position };

    const animate = (time: number) => {
      const elapsed = (time - start) / (seconds * 1000);
      const progress = Math.min(elapsed, 1);

      setPosition({
        x: initialPosition.x + (x - initialPosition.x) * progress,
        y: initialPosition.y + (y - initialPosition.y) * progress,
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <MotionContext.Provider
      value={{ position, move, turn, goTo, glideTo, isAnimating }}
    >
      {children}
    </MotionContext.Provider>
  );
};
