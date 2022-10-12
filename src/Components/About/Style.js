import styled from 'styled-components'

export const MomContainer = styled.div`
    background: #e9ecef;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    font-size: 4.5vw;
    @media screen and (max-width: 1024px){
        font-size: 5vw;
    }
    @media screen and (max-width: 768px){
        font-size: 8vw;
    }
    @media screen and (max-width: 425px){
        font-size: 12vw;
    }
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 80%;
    width: 100%;
    padding: 1vw;
    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 90%;
    }
`

export const ImageContainer = styled.figure`
    height: 60vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 9px 10px 20px #0b090a;
    @media screen and (max-width: 1024px){
        height: 500px;
        width: 30vw;
    }
    @media screen and (max-width: 768px){
        height: 350px;
        width: 40vw;
    }
    @media screen and (max-width: 375px){
        width: 42vw;
    }
    @media screen and (max-width: 320px){
        width: 45vw;
        height: 300px;
    }
`

export const Image = styled.img`
    @media screen and (max-width: 1024px){
        width: 40vw;
    }
    @media screen and (max-width: 375px){
        width: 43vw;
    }
    @media screen and (max-width: 320px){
        width: 46vw;
    }
`

export const MiniContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50vw;
    height: 80%;
    @media screen and (max-width: 768px){
        justify-content: space-evenly;
        width: 80vw;
        align-items: center;
    }
`

export const Paragraph = styled.p`
    font-size: 1.5vw;
    font-family: 'Ubuntu', sans-serif;
    text-align: justify;
    line-height: 1.5;
    text-indent: 2vw;
    width: 50vw;
    @media screen and (max-width: 1024px){
        font-size: 2vw;
        text-indent: 2.5vw;
    }
    @media screen and (max-width: 768px){
        width: 80vw;
        font-size: 2.5vw;
        text-indent: 3vw;
    }
    @media screen and (max-width: 425px){
        font-size: 3.5vw;
    }
    @media screen and (max-width: 375px){
        font-size: 4vw;
    }
    @media screen and (max-width: 320px){
        font-size: 4.5vw;
    }
`

export const Button = styled.button`
    background: #e9ecef;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1vw;
    border: none;
    box-shadow: 9px 10px 20px #0b090a;
    width: 20vw;
    height: 50px;
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