import { SunMedium, Moon } from "lucide-react";
import { useEffect } from "react";
import { useStore } from "../utils/zustand";

function Theme() {

  const { theme, ChangeTheme } = useStore();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
    themeColorMeta.setAttribute('content', theme === 'dark' ? '#1d232a' : '#ffffff'
    );
    }


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
