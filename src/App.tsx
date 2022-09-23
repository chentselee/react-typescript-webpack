import { lazy, Suspense } from "react";
import "./App.css";

const Counter = lazy(() => import("./components/Counter"));

const App = () => {
  return (
    <Suspense>
      <div className="container">
        <div>it works</div>
        <Counter />
      </div>
    </Suspense>
  );
};

export default App;
