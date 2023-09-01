import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyled } from "./styles/global"
import { Header } from "./components/Header"
export  const App= () => {
  
  return (
    <ThemeProvider theme={defaultTheme}>
        <Header />
        
        <GlobalStyled />
    </ThemeProvider>
  )
}

export default App
