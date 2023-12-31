import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'
import { UserProfile } from '../types/authStore/UserProfile'

type AuthState = {
    userProfile: UserProfile | null
    token: string | null
}

const authSlicer = createSlice({
    name: 'authStore',
    initialState: {
        userProfile: null,
        token: null
    } as AuthState,
    reducers: {
        setUserProfile: (state, action: PayloadAction<UserProfile>) => {
            const { payload } = action
            state.userProfile = payload
        },
        clearUserData: (state) => {
            state.token = null
            state.userProfile = null
        },
        setAuthToken: (state, action: PayloadAction<string>) => {
            const { payload } = action
            state.token = payload
        }
    }
})

export const { clearUserData, setUserProfile, setAuthToken } = authSlicer.actions

const authStore = configureStore({
    reducer: authSlicer.reducer
})

export default authStore

export const authDispatch = authStore.dispatch
