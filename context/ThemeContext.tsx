import { createContext, useContext } from "react";

interface ThemeContextType {
    colors: typeof Colors;
}

const Colors = {
    gradient: ["#FF9D56", "#4985FA"],
    button: {
        background : "#4985FA"
    },
    background: "#F9FBFF",
    surface: "#ffffff",
    error: "#b00020",
    text: {
        primary: "#000000",
        secondary: "#4985FA",
    },
};

const ThemeContext = createContext<ThemeContextType>({
    colors: Colors,
})

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const colors = Colors;
    return (
        <ThemeContext.Provider value={{ colors }}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useTheme = () => useContext(ThemeContext);