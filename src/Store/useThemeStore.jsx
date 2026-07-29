import { create } from "zustand";



export const useThemeStore = create((set)=>({
  mode: 'dark',
  toggleMode:()=>{
    set((state) =>({
      mode:state.mode === "light"?'dark':'light'
    }))
  }
}))