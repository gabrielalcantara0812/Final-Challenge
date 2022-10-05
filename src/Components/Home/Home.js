import React from 'react'
import * as S from './Style'
import Photo from '../data/main.png'

const Home = () => {
    return(
        <S.MomContainer>
            <S.Heading>Hi, I'm Gabriel Alcântara!</S.Heading>
            <S.Container>
                <S.ListContainer>
                    <S.List>Front-End Developer</S.List>
                    <S.List>Writer</S.List>
                    <S.List>Video Editor</S.List>
                </S.ListContainer>
                <S.ImageContainer>
                    <img src={Photo} alt='My photo'/>
                </S.ImageContainer>
            </S.Container>
        </S.MomContainer>
    )
}

export default Home