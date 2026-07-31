import { create } from "zustand";
import { persist } from "zustand/middleware";



export const useThemeStore = create(
  persist( (set)=>({
    mode: 'light', //making the light version is the default one

    toggleMode: ()=>
      set((state)=>({
        mode: state.mode === 'light'? "dark" : "light",
      })),

      setMode: (mode) =>(set)({mode}),
    
    }),
    {
      name: "theme-mode",
    }

  ) //end of persist
  
); //end of create