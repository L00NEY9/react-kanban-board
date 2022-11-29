import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {boardSlice} from "./slices/board.slice";


export const rootReducer = combineReducers({
  board: boardSlice.reducer
})

export const setupStore = () => configureStore({
  devTools: true,
  reducer: rootReducer
})

export type RootStateType = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
