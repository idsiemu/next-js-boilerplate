import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISessionState {
    initial: boolean;
    loading: boolean;
    session: ISession | null;
};

export interface ISession {
    id: string;
    name?: string;
    email?: string;
    phone?: string;
}

const initialState: ISessionState = {
    initial: true,
    loading: false,
    session: null,
};

const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        initialRequest : (state) => {
            state.initial = true;
        },
        initialSuccess : (state, { payload }: PayloadAction<{session : ISession}>) => {
            state.initial = false;
            state.session = payload.session
        },
    },
});

export const selectSession = createSelector(
    (state:ISession) => state,
    (state) => {
        return state;
    }
);

export const SESSION = sessionSlice.name;
export const sessionReducer = sessionSlice.reducer;
export const sessionAction = sessionSlice.actions;