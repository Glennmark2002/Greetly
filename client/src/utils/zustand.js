import { create } from 'zustand';
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist((set) => ({
    currentUser : null,
    loading : false,  
    error : false,
    theme : "light",

    ChangeTheme : () => set(state => ({ theme: state.theme === "dark" ? "light" : "dark" })),
    signInStart: () => set({ loading: true }),
    signInSuccess: (user) => set({ currentUser: user, loading: false, error: false }),
    signInFailure: (error) => set({ loading: false, error }),
    signOut: () => set({ currentUser: null, loading: false, error: false }),

  }), { name : 'user'} 
));


export const useTempStore = create((set) => ({
  sidebar : false, 
  openSidebar : () => set((state) => ({sidebar : !state.sidebar})),
}));