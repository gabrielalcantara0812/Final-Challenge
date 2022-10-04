import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from '../Header/Header'
import Home from '../Home/Home'

const R = () => {
    return(
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </Router>
    )
}

export default R