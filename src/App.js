/** @format */

import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainSearch from "./components/MainSearch"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainSearch />} />
        {/* <Route path='/:companyName' element={<CompanySearchResults />} />
        <Route path='/Favourites' element={<Favourites />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
