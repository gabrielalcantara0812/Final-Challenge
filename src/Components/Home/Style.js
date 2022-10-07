import styled from 'styled-components'

export const MomContainer = styled.div`
    background: #e9ecef;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 88.3vh;
    overflow: hidden;
    @media screen and (max-width: 1440px){
        height: 88.9vh;
    }
    @media screen and (max-width: 1024px){
        height: 91vh;
    }
    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 93.5vh;
    }
    @media screen and (max-width: 425px){
        height: 95vh;
    }
    @media screen and (max-width: 375px){
        height: 95.5vh;
    }
    @media screen and (max-width: 320px){
        height: 95.7vh;
    }
`

export const Hi = styled.h2`
    font-family: 'Ubuntu', sans-serif;
    color: #0b090a;
    font-size: 1.5vw;
    font-weight: 500;
`

export const Heading = styled.h2`
    font-family: 'Caveat', cursive;
    color: #0b090a;
    font-size: 5vw;
`

export const HeadingThree = styled.h3`
    font-family: 'Ubuntu', sans-serif;
    color: #0b090a;
    font-size: 1.5vw;
    font-weight: 500;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:50vw;
    height: 100%;
`

export const ImageContainer = styled.figure`
    height: 100%;
    width:50vw;
    overflow: hidden;
    display:flex;
    justify-content: center;
    align-items: center;
    box-shadow: -10px 1px 20px #0b090a;
`

export const Image = styled.img`
    width: 100vw;
`

