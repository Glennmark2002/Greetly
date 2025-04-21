import { create } from 'zustand';
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist((set) => ({
    currentUser : null,
    loading : false,  
    error : false,
    theme : "light",
    
    ChangeTheme : () => set(state => ({ theme: state.theme === "dark" ? "light" : "dark" })),
    loadingStart : () => set({ loading : true }),
    loadingClose : () => set({ loading : false}),  
    signInStart: () => set({ loading: true }),
    signInSuccess: (user) => set({ currentUser: user }),
    signInFailure: (error) => set({ loading: false }),
    signOutStart : () => set ({ loading : true }),
    signOut: () => set({ currentUser: null }),

  }), { name : 'user'} 
));


export const useTempStore = create((set) => ({
  loading : false,
  sidebar : false, 
  openSidebar : () => set((state) => ({sidebar : !state.sidebar})),
  loadingStart : () => set({ loading : true }),
  loadingClose : () => set({ loading : false}),  
}));