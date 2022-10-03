import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.ul`
    display: flex;
    padding-top: 1vw;
    paddin-bottom: 1vw;
    width: 100vw;
    align-items: center;
    justify-content: space-evenly;
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
    color: #5C7AFF;
    width: 5vw;
    &:hover{
        cursor: pointer;
        font-weight: 300;
    }
`

export const MobileMenu = styled.button`
    display: none;
`