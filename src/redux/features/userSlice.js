import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            console.log(action);
            state.user = action.payload[0]
        }
    }

})

export const { setUser } = userSlice.actions;
export default userSlice.reducer