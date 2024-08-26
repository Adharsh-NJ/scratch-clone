interface IPosition {
  x: number;
  y: number;
}

interface IMotionContextType {
  position: IPosition;
  move: (steps: number) => void;
  turn: (degrees: number) => void;
  goTo: (position: IPosition) => void;
  glideTo: (x: number, y: number, seconds: number) => void;
  isAnimating: boolean;
  rotation: number;
  rotate: () => void;
}

export type { IPosition, IMotionContextType };
