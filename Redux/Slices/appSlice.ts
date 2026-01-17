import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppState } from "../Interfaces/app";


const initialState: AppState = {
    isAppMenuOpen: false,
    googleAuthLoading: false,
    showLoginModal: false,
    showNavTestimonyButton: false,
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        toggleAppMenu: (state) => {
            state.isAppMenuOpen = !state.isAppMenuOpen
        },
        updateGoogleAuthLoading: (state, action: PayloadAction<boolean>) => {
            state.googleAuthLoading = action.payload
        },
        toggleShowLoginModal: (state, action: PayloadAction<boolean>) => {
            state.showLoginModal = action.payload
        },
        updateShowNavTestimonyButton: (state, action: PayloadAction<boolean>) => {
            state.showNavTestimonyButton = action.payload
        },
    },
});

export const
    { toggleAppMenu,
        updateGoogleAuthLoading,
        toggleShowLoginModal,
        updateShowNavTestimonyButton
    } = appSlice.actions;

export default appSlice.reducer;
