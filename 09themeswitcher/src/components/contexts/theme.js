import {useContext,createContext} from "react";

const ThemeContext = createContext(
    {
        lightTheme:()=>{},
        darkTheme:()=>{},
        themeMode:"light"
    }
)

export const ThemeProvider = ThemeContext.Provider;

export const useTheme=()=>{
    return useContext(ThemeContext)
}