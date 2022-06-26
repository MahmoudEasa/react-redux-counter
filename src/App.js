import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

// Actions
import { increase, decrease } from "./store/CounterSlice";
import { toggle } from "./store/AuthSlice";

function App() {
  // Get all state
  const globalState = useSelector((state) => state);

  const dispatch = useDispatch();

  // Disabled decrease button
  const [isdisabled, setIsDisabled] = useState(false);

  // Disabled decrease button
  useEffect(() => {
    if (globalState.counter.value === 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [globalState]);

  const isLogin = () => {
    return globalState.auth.login;
  };

  return (
    <div className="App">
      <h1>Hello Redux Basic</h1>
      {isLogin() && (
        <>
          <div className="counter">Counter: {globalState.counter.value}</div>
          <div>
            <button onClick={() => dispatch(increase(2))} className="btn">
              increase +
            </button>
            <button
              onClick={() => dispatch(decrease(2))}
              disabled={isdisabled && true}
              className="btn"
            >
              decrease -
            </button>
          </div>
        </>
      )}
      <div>
        <button onClick={() => dispatch(toggle())} className="btn">
          {isLogin() ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
}

export default App;
//
//
//
//
//
//
//
//
//
//
//

// import { useSelector, useDispatch } from "react-redux";
// import { useState, useEffect } from "react";

// import "./App.css";
// function App() {
//   const dispatch = useDispatch();

//   // Disabled decrease button
//   const [isdisabled, setIsDisabled] = useState(false);

//   // Get all state
//   const globalState = useSelector((state) => state);

//   // Disabled decrease button
//   useEffect(() => {
//     if (globalState.value == 0) {
//       setIsDisabled(true);
//     } else {
//       setIsDisabled(false);
//     }
//   }, [globalState]);

//   // Increase Counter
//   useEffect(() => {
//     dispatch({ type: "increase", payload: 10 });
//   }, []);

//   // Increase Counter
//   const increase = () => {
//     dispatch({ type: "increase", payload: 2 });
//   };

//   // Decrease Counter
//   const decrease = () => {
//     dispatch({ type: "decrease", payload: 2 });
//   };

//   // Toggle Show Counter
//   const handleToggle = () => {
//     dispatch({ type: "toogle" });
//   };

//   return (
//     <div className="App">
//       <h1>Hello Redux Basic</h1>
//       {globalState.showCounter && (
//         <>
//           <div className="counter">Counter: {globalState.value}</div>
//           <div>
//             <button onClick={increase} className="btn">
//               increase +
//             </button>
//             <button
//               onClick={decrease}
//               disabled={isdisabled && true}
//               className="btn"
//             >
//               decrease -
//             </button>
//           </div>
//         </>
//       )}
//       <div>
//         <button onClick={handleToggle} className="btn">
//           Hide/Show Counter Number
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;
