import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AuthState } from "../store/auth.store";

export const useAuthSelector: TypedUseSelectorHook<AuthState> = useSelector
