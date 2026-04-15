import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useLang = create(
    persist((set)=>({
        langua:'az',
        selectLanguage:(lang)=>{
            
            set(()=>({langua: lang}))
        }
            
    }),{name:'language'}
)
)