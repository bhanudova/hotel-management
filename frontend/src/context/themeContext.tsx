import { Dispatch, SetStateAction, createContext } from "react";

type ThemContextType = {
    darkTheme:boolean;
    setDarkTheme:Dispatch<SetStateAction<boolean>>
}

const ThemeContext = createContext<ThemContextType>({
    darkTheme:false,
    setDarkTheme:()=>null,
})

export default ThemeContext;