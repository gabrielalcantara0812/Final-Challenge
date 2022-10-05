import styled from 'styled-components'

export const MomContainer = styled.div`
    background: #e9ecef;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 88vh;
`

export const Heading = styled.h2`
    font-family: 'Caveat', cursive;
    color: #0b090a;
    font-size: 5vw;
    mrgin-top: 1.5vw;
`
export const Container = styled.div`
    height: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items:center;
    padding-left: 1vw;
    padding-right: 1vw;
`

export const ListContainer = styled.ul`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
export const List = styled.li`
    font-family: 'Merriweather', serif;
    font-size: 2vw;
    display: flex;
    justify-content: center;
    margin-bottom: 2.5vw;
    width: 25vw;
    font-weight: 300;
    color: #5C7AFF;
    &:hover{
        cursor: pointer;
        font-weight: 400;
    }
`

export const ImageContainer = styled.figure`
    height: 100%;
    width: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid #0b090a 5px;
`