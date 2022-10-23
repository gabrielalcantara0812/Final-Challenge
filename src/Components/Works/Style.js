import styled from 'styled-components'

export const MomContainer = styled.div`
    background: #e9ecef;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 88.3vh;

    @media screen and (max-width: 1440px){
        height: 88.9vh;
    }
    @media screen and (max-width: 1024px){
        height: 91vh;
    }
    @media screen and (max-width: 768px){
        height: auto;
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
    @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex-wrap: no-wrap;
    }
`

export const BoxContainer = styled.div`
    width: 25vw;
    position: relative;
    margin-bottom: 1.5vw;
    @media screen and (max-width: 1440px){
        width: 30vw;
    }
    @media screen and (max-width: 768px){
        width: 50vw;
        margin-bottom: 3vw;
    }
    @media screen and (max-width: 425px){
        width: 75vw;
        margin-bottom: 4.5vw;
    }
    @media screen and (max-width: 320px){
        width: 85vw;
        margin-bottom: 6vw;
    }
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
    @media screen and (max-width: 768px){
        width: 50vw;
        height: 20vh;
    }
    @media screen and (max-width: 425px){
        width: 75vw;
    }
    @media screen and (max-width: 320px){
        width: 85vw;
    }
`

export const InfoContainer = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    z-index: 1;
    justify-content: space-evenly;
    top: 30vh;
    @media screen and (max-width: 1440px){
        width: 30vw;
    }
    @media screen and (max-width: 1024px){
        top: 21vh;
    }
    @media screen and (max-width: 768px){
        top: 15vh;
        width: 50vw;
    }
    @media screen and (max-width: 425px){
        width: 75vw;
    }
    @media screen and (max-width: 375px){
        top: 16vh;
    }
    @media screen and (max-width: 320px){
        width: 85vw;
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
    &:hover{
        cursor: pointer;
    }
    @media screen and (max-width: 1440px){
        font-size: 1vw;
        height: 25px;
    }
    @media screen and (max-width: 768px){
        font-size: 1.6vw;
        width: 10.5vw;
        height: 30px;
    }
    @media screen and (max-width: 425px){
        font-size: 3.5vw;
        width: 20vw;
    }
    @media screen and (max-width: 375px){
        font-size: 4vw;
    }
`

export const A = styled.a`
    text-decoration: none;
    color: black;
    font-size: 0.9vw;
    @media screen and (max-width: 1440px){
        font-size: 1vw;
    }
    @media screen and (max-width: 768px){
        font-size: 1.6vw;
    }
    @media screen and (max-width: 425px){
        font-size: 3.5vw;
    }
    @media screen and (max-width: 375px){
        font-size: 4vw;
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
    @media screen and (max-width: 1024px){
        height: 25vh;
    }
    @media screen and (max-width: 768px){
        width: 50vw;
        height: 20vh;
    }
    @media screen and (max-width: 425px){
        width: 75vw;
    }
    @media screen and (max-width: 320px){
        width: 85vw;
    }
`

export const Paragraph = styled.p`
    color: #e9ecef;
    align-items: justify;
    font-size: 1vw;
    @media screen and (max-width: 1440px){
        font-size: 1.2vw;
    }
    @media screen and (max-width: 768px){
        font-size: 1.9vw;
    }
    @media screen and (max-width: 425px){
        font-size: 3.3vw;
    }
    @media screen and (max-width: 375px){
        font-size: 3.5vw;
    }
    @media screen and (max-width: 320px){
        font-size: 4vw;
    }
`

export const Image = styled.img`
    width: 30vw;
    @media screen and (max-width: 1440px){
        width: 35vw
    }
    @media screen and (max-width: 768px){
        width: 60vw;
    }
    @media screen and (max-width: 425px){
        width: 80vw;
    }
    @media screen and (max-width: 320px){
        width: 90vw;
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
    margin-bottom: 1.5vw;
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