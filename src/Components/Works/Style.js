import styled from 'styled-components'

export const MomContainer = styled.div`
    background: #e9ecef;
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const Heading = styled.h2`
    font-family: 'Caveat', cursive;
    color: #0b090a;
    font-size: 3.5vw;
    @media screen and (max-width: 1440px){
        font-size: 4vw;
    }
    @media screen and (max-width: 1024px){
        font-size: 5vw;
    }
    @media screen and (max-width: 768px){
        font-size: 6vw;
    }
    @media screen and (max-width: 425px){
        font-size: 8.5vw;
    }
    @media screen and (max-width: 375px){
        font-size: 9.5vw;
    }
    @media screen and (max-width: 320px){
        font-size:12vw;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 70%;
    height: 85%;
`

export const BoxContainer = styled.div`
    width: 25vw;
    position: relative;
`

export const ImageContainer = styled.figure`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25vw;
    height: 34vh;
    box-shadow: 10px 8px 20px #0b090a;
    @media screen and (max-width: 1440px){
        width: 30vw;
    }
    @media screen and (max-width: 1024px){
        height: 25vh;
    }
`

export const InfoContainer = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    top: 30vh;
    border: solid;
    @media screen and (max-width: 1440px){
        width: 30vw;
    }
    @media screen and (max-width: 768px){
        top: 25vh;
    }
`

export const InfoButton = styled.button`
    background: #e9ecef;
    font-family: 'Ubuntu', sans-serif;
    font-size: 0.9vw;
    border: none;
    box-shadow: 9px 10px 20px #0b090a;
    width: 7vw;
    height: 20px;
    @media screen and (max-width: 1440px){
        font-size: 1vw;
        height: 25px;
    }
`

export const InfoBox = styled.div`
    transition: 2;
    width: 100%;
    display: flex;
    text-align: justify;
    height: 34vh;
    background: #0b090a;
    position: absolute;
    top: 0;
    @media screen and (max-width: 1440px){
        width: 30vw;
    }
    @media screen and (max-width: 768px){
        height: 25vh;
    }
`

export const Paragraph = styled.p`
    color: #e9ecef;
`

export const Image = styled.img`
    width: 30vw;
    @media screen and (max-width: 1440px){
        width: 35vw
    }
`

export const Button = styled.button`
    background: #e9ecef;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1vw;
    border: none;
    box-shadow: 9px 10px 20px #0b090a;
    width: 20vw;
    height: 35px;
    &:hover{
        cursor: pointer;
    }
    @media screen and (max-width: 1024px){
        width: 25vw;
        font-size: 1.5vw;
    }
    @media screen and (max-width: 768px){
        width: 30vw;
        font-size: 2vw;
    }
    @media screen and (max-width: 425px){
        width: 40vw;
        font-size: 3.5vw;
    }
    @media screen and (max-width: 375px){
        width: 45vw;
        font-size: 4vw;
    }
    @media screen and (max-width: 320px){
        width: 49vw;
        font-size: 5vw;
    }
`