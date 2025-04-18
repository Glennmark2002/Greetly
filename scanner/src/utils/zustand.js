import { persist } from 'zustand/middleware'
import { create } from 'zustand';

export const useStore = create(
  persist((set) => ({
    loading : false,
    theme : "light",
    userData : null, 

    setUserData : (data) => set({ userData : data }),
    ChangeTheme : () => set(state => ({ theme: state.theme === "dark" ? "light" : "dark" }))
  }), { name : 'scanner'} 
));

export const useTempStore = create((set) => ({
  modal : false, 
  openModal : () => set((state) => ({modal : state.modal = true})),
}));