import "./App.styled.js"
import { GlobalStyles } from "./global-styles.js"
import * as S from "./App.styled.js"
import { AppRoutes } from "./routes.jsx"

function App() {
  return (
    <S.Wrapper>
      <GlobalStyles />
      <AppRoutes />
    </S.Wrapper>
  )
}

export default App
