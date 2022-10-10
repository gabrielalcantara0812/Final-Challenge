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
    font-size: 4.5vw;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 80%;
    width: 90%;
    padding: 1vw;
`

export const ImageContainer = styled.figure`
    height: 60vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 9px 10px 20px #0b090a;
`

export const MiniContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50vw;
    height: 80%;
`

export const Paragraph = styled.p`
    font-size: 1.5vw;
    width: 50vw;
`