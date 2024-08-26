import { useEffect, useRef, useState } from "react";
import { Layer, Stage } from "react-konva";
import CatImage from "./CatImage";

const Canvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stageSize, setStageSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight / 2, // Adjust to match red area's height
  });
  const [isCanvasLoading, setIsCanvasLoading] = useState(true);

  useEffect(() => {
    const updateSize = () => {
      setIsCanvasLoading(true);
      if (containerRef.current) {
        const containerHeight = window.innerHeight - 100;
        setStageSize({
          width: containerRef.current.offsetWidth,
          height: containerHeight,
        });
      }
      setIsCanvasLoading(false);
    };
    setTimeout(() => {
      setIsCanvasLoading(false);
    }, 100);
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div ref={containerRef} className=" flex-1 ">
      {isCanvasLoading ? (
        <>
          <h1>Loading....</h1>
        </>
      ) : (
        <Stage width={stageSize.width} height={stageSize.height}>
          <Layer>
            <CatImage x={stageSize.width / 3} y={stageSize.height / 3} />
          </Layer>
        </Stage>
      )}
    </div>
  );
};

export default Canvas;
