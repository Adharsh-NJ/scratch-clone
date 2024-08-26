import { Image, KonvaNodeEvents, StageProps } from "react-konva";
import useImage from "use-image";
import { useMotion } from "../../store/motion/MotionContext";
import { useEffect, useRef } from "react";

interface CatImageProps extends StageProps, KonvaNodeEvents {}

const CatImage: React.FC<CatImageProps> = (props) => {
  const [image] = useImage("/cat.png");
  const { position, goTo, rotation } = useMotion();

  return (
    <Image
      image={image}
      {...props}
      draggable
      x={position.x}
      y={position.y}
      onDragEnd={(e) => goTo({ x: e.target.attrs.x, y: e.target.attrs.y })}
      rotationDeg={rotation}
    />
  );
};

export default CatImage;
