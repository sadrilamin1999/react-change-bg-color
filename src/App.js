import { useRef } from "react";

const App = () => {
  const bgRef = useRef(null);

  const changHandler = () => {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    const a = Math.round(Math.random() * 255);
    bgRef.current.style.backgroundColor = `rgba(${r},${g},${b},${a})`;
  };
  return (
    <div ref={bgRef} className="background">
      <div>
        <button onClick={changHandler} id="btn">
          Change Color
        </button>
      </div>
    </div>
  );
};

export default App;
