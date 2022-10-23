import styled from 'styled-components'

export const MomContainer = styled.div`
    background: #e9ecef;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    flex-direction: column;
    align-items: center;
    width: 80%;
`

export const InfoContainer = styled.div`
    display: flex;
    margin-bottom: 1.5vw;
    width: 30%;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1024px){
        margin-bottom: 2.5vw;
        width: 40%;
    }
    @media screen and (max-width: 768px){
        margin-bottom: 3vw;
        width: 50%;
    }
    @media screen and (max-width: 425px){
        margin-bottom: 4vw;
        width: 70%;
    }
    @media screen and (max-width: 375px){
        margin-bottom: 5vw;
        width: 85%;
    }
`

export const IconContainer = styled.figure`
    overflow: hidden;
    width: 7vw;
    display: flex;
    justify-content: center;
    align-items:center;
    @media screen and (max-width: 1024px){
        width: 10vw;
    }
    @media screen and (max-width: 768px){
        width: 13vw;
    }
    @media screen and (max-width: 425px){
        width: 16vw;
    }
    @media screen and (max-width: 375px){
        width: 19vw;
    }
`

export const Icon = styled.img`
    width: 5vw;
    @media screen and (max-width: 1024px){
        width: 7vw;
    }
    @media screen and (max-width: 768px){
        width: 10vw;
    }
    @media screen and (max-width: 425px){
        width: 15vw;
    }
    @media screen and (max-width: 375px){
        width: 18vw;
    }
`

export const A = styled.a`
    text-decoration: none;
    color: black;
    font-size: 1.5vw;
    @media screen and (max-width: 1024px){
        font-size: 2vw;
    }
    @media screen and (max-width: 768px){
        font-size: 3vw;
    }
    @media screen and (max-width: 425px){
        font-size: 4vw;
    }
    @media screen and (max-width: 375px){
        font-size: 5vw;
    }
`