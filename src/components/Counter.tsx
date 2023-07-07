
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function Counter() {

  // const { countValue } = useSelector((state: RootState) => state.counter);
  // const dispatch = useDispatch();
  const { countValue } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="border border-indigo-600">
      <div>
        <h1>Counter component</h1>
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 mt-10 text-2xl ms-44 "
        >
          Increment
        </button>
        <div className="mt-5 text-4xl ms-52"> {countValue} </div>
        {/* <div className="mt-5 text-4xl ms-52">0</div> */}
        <button
          onClick={() => dispatch(decrement())}
          className="bg-yellow-300 mt-5 text-2xl ms-44 "
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="bg-purple-300 mt-5 text-2xl ms-44 "
        >
          Reset
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(20))}
          className="bg-blue-300 mt-5 text-2xl ms-44 "
        >
          Increment By Amount
        </button>
      </div>
    </div>
  );
}
