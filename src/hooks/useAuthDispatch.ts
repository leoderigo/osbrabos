import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AuthDispatch } from "../store/auth.store";

export const useAuthDispatch: () => AuthDispatch = useDispatch
