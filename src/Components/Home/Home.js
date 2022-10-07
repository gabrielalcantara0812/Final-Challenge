import React from 'react'
import * as S from './Style'
import Photo from '../data/main.png'

const Home = () => {
    return(
        <S.MomContainer>
            <S.Container>
                <S.Hi>Hi,</S.Hi>
                <S.Heading>I'm Gabriel Alcântara!</S.Heading>
                <S.HeadingThree>I'm a Front-End Developer!</S.HeadingThree>
            </S.Container>
            <S.ImageContainer>
                <S.Image src={Photo} alt='me'/>
            </S.ImageContainer>
        </S.MomContainer>
    )
}

export default Home