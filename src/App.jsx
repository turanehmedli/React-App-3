import { Route, Routes } from "react-router"
import Homepage from "./pages/Homepage"
import ProductsDetail from "./pages/ProductsDetail"
import { useTheme } from "./stores/themeStore"

const App = () => {
  const {isDarkModeOn} = useTheme()

  return (

    <div className={`w-full min-h-screen h-fit flex justify-center items-center select-none ${isDarkModeOn ? 'bg-stone-900 text-white':'bg-white text-black'}`}>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/details/:id" element={<ProductsDetail/>}/>
      </Routes>
    </div>
  )
}

export default App