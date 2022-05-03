import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState } from '_redux/store';

export interface IInitialState {
    appTheme: string;
}

const initialState: IInitialState = {
    appTheme: "dark",
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppTheme: (state, action: PayloadAction<string>) => {
            state.appTheme = action.payload;
        },
    },
});

export const selectApp = (state: AppState) => state.app;

export const { setAppTheme } =
    appSlice.actions;

export default appSlice.reducer;