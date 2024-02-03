import { createSlice } from "@reduxjs/toolkit";

const authInitState = {
    isAuthenticated: false,
};
const authSlice = createSlice({
    name: 'auth',
    initialState: authInitState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;