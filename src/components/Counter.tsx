import { useSelector } from "react-redux"
import { RootState } from "../redux/store"



export default function Counter() {

    // const count =useSelector((state :RootState)=>state.counter)
    // console.log(count)
    // console.log(count.countValue)

    const {countValue} =useSelector((state :RootState)=>state.counter);
    console.log(countValue)

  return (
    <div className="border border-indigo-600">
        <div>
            <h1>Counter component</h1>
          <button className="bg-green-500 mt-10 text-2xl ms-44 ">Increment</button>
          <div className="mt-5 text-4xl ms-52"> {countValue} </div>
          {/* <div className="mt-5 text-4xl ms-52">0</div> */}
          <button className="bg-yellow-300 mt-5 text-2xl ms-44 ">Decrement</button>
        </div>
      </div>
  )
}
