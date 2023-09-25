import * as RTK from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import thunkMiddleware, { ThunkDispatch, ThunkMiddleware } from "redux-thunk";
import authReducer from "@/redux/auth.slice";

export const store = RTK.configureStore({
  reducer: { auth: authReducer },
  middleware: [thunkMiddleware as ThunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, RTK.Dispatch, RTK.AnyAction>;
export type AppThunk<ReturnType = void> = RTK.ThunkAction<
  ReturnType,
  RootState,
  unknown,
  RTK.AnyAction
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
