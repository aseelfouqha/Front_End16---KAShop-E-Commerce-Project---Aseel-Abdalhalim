import { create } from "zustand";



export const useUserStore = create( (set)=> ({
  userName: 'Aseel',

  changeName: ()=>{
    set( (state)=>({
      userName:'Cielo'
    }))
  }

}));