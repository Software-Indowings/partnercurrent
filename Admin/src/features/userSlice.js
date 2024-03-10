import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState:{
        user : null,
        admin: null
    },
    reducers:{
        login:(state,action)=>{
            // login   
            state.user = action.payload;
        },
        logout:(state) =>{
            state.user =null;
        },
        adminLogin:(state,action)=>{
            // login   
            state.admin = action.payload;
        },
        adminLogout:(state) =>{
            state.admin =null;
        },
    
    },
});

export const {login, logout, adminLogin, adminLogout} = userSlice.actions;

export const selectUser = (state) =>state.user.user;

export default userSlice.reducer;