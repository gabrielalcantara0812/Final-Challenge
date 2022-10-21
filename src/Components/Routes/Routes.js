import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from '../Header/Header'
import Home from '../Home/Home'
import About from '../About/About'
import Works from '../Works/Works'

const R = () => {
    return(
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/works' element={<Works/>}/>
                <Route path='/contacts' />
            </Routes>
        </Router>
    )
}

export default R