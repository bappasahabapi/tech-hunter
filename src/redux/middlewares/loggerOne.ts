
//curring function
// https://redux.js.org/understanding/history-and-design/middleware

import { Middleware } from "@reduxjs/toolkit";



const loggerOne:Middleware =(store)=>(next)=>(action)=>{
    console.log("Current State:",store.getState());
    console.log("Action",action);

    next(action)
    console.log("Updated State",store.getState());
}

export default loggerOne;