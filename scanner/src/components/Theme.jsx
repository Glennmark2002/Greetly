import { SunMedium, Moon } from "lucide-react";
import { useEffect } from "react";
import { useStore } from "../utils/zustand";

function Theme() {

  const { theme, ChangeTheme } = useStore();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <label className='swap swap-rotate pr-4'>
      <input type='checkbox' onChange={ChangeTheme}  checked={theme === 'dark'} />    
      <SunMedium className='swap-off h-8 w-8'/>
      <Moon className='swap-on h-8 w-8' />
  </label>
  );
}

export default Theme;
