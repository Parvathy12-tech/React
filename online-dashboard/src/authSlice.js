import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name:"auth",

  initialState:{
    email:"",
    token:""
  },

  reducers:{

    loginSuccess:(state,action)=>{
      state.email = action.payload.email
      state.token = action.payload.token
    }

  }

})

export const {loginSuccess} = authSlice.actions
export default authSlice.reducer