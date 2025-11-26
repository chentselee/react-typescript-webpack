import { lazy, Suspense, useState } from "react";
import "./App.css";

const Counter = lazy(() => import("./components/Counter"));

const App = () => {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="container">
      <div>it works</div>
      <button onClick={() => setLoaded(prev => !prev)}>toggle counter</button>
      <Suspense fallback={<div>Loading...</div>}>
        {loaded && <Counter />}
      </Suspense>
    </div>
  );
};

export default App;
