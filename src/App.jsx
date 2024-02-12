import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import AllPosts from './pages/AllPosts'
import OnePage from './pages/OnePage'
import NavBar from './components/NavBar'
import TwoPage from './pages/TwoPage'
import ThreePage from './pages/ThreePage'
import FourPage from './pages/FourPage'
import FivePage from './pages/FivePage'
const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/'element={<Layout/>}>
          <Route index element={<AllPosts/>} />
          <Route path='/post'element={<OnePage/>} />
          <Route path='/post2'element={<TwoPage/>} />
          <Route path='/post3'element={<ThreePage/>} />
          <Route path='/post4'element={<FourPage/>} />
          <Route path='/post5'element={<FivePage/>} />
          <Route path='*'element={<h2>Not found 404</h2>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App