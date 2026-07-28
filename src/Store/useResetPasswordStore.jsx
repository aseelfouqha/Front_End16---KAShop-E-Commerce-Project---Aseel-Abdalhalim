import { create } from "zustand";

// This keeps the email and OTP only in memory and clears them after the password is successfully reset.

export const useResetPasswordStore = create((set)=>({
  email: "",
  code: "",

  setEmail: (email)=>{
    set({email});
  },

  setCode: (code)=>{
    set({code});
  },

  clearResetPasswordData: ()=>{
    set({
      email: "",
      code: "",
    });
  },
}));