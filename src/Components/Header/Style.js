import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vw;
    width: 100%;
    overflow: hidden;
    position: relative;
    @media screen and (max-width: 768px){
        flex-direction: row-reverse;
        justify-content: center;
        position: relative;
        padding: 0;
        margin-top: 1vw;
        margin-bottom: 1vw;
    }
`

export const Heading = styled.h1`
    font-family: 'Caveat', cursive;
    color: #0b090a;
    font-size: 3vw;
    @media screen and (max-width: 1024px){
        font-size: 3.5vw;
    }
    @media screen and (max-width: 768px){
        font-size: 4vw;
    }
    @media screen and (max-width: 425px){
        font-size: 6vw;
    }
    @media screen and (max-width: 320px){
        font-size: 7vw;
    }
`
export const Navigation = styled.nav`
    width: 80%:
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1024px){
        width: 50%;
    }
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const Container = styled.ul`
    display: flex;
    padding-top: 1vw;
    paddin-bottom: 1vw;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const LinkContainer = styled.li`
    width: 10vw;
    display: flex;
    justify-content: center;
`

export const LINK = styled(Link)`
    font-family: 'Mukta', sans-serif;
    font-weight: 200;
    text-decoration: none;
    font-size: 2vw;
    color: #0b090a;
    width: 5vw;
    &:hover{
        cursor: pointer;
        font-weight: 300;
    }
    @media screen and (max-width: 1024px){
        font-size: 2.5vw;
    }
    @media screen and (max-width: 768px){
        font-size: 5vw;
    }
    @media screen and (max-width: 425px){
        font-size: 6vw;
    }
    @media screen and (max-width: 320px){
        font-size: 6.5vw;
    }
`

export const MobileMenu = styled.button`
    display: none;
    @media screen and (max-width: 768px){
        display: initial;
        z-index: 1;
        width: 2vw;
        position: absolute;
        left: 2vw;
        border: none;
        background: none;
        color: #0b090a;
        font-size: 3vw;
    }
    @media screen and (max-width: 425px){
        font-size: 5vw;
    }
`

export const NavigationMobile = styled.nav`
    display: none;
    @media screen and (max-width: 768px){
        display: initial;
        position: absolute;
        width: 20vw;
        height: 50vh;
        left: 0;
        top: 5vw;
        background: white;
    }
`

export const ContainerMobile = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
    align-items: center;
`