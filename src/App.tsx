import Canvas from "./components/canvas/Canvas";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { MotionProvider } from "./store/motion/MotionContext";

function App() {
  return (
    <div className=" h-screen w-screen flex flex-wrap overflow-hidden">
      <MotionProvider>
        <Navbar />
        <Sidebar />
        <Canvas />
      </MotionProvider>
    </div>
  );
}

export default App;
