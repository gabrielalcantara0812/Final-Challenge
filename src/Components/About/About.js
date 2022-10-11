import React, {useState} from 'react'
import * as S from './Style'
import Me from '../data/about.png'

const About = () =>{

    const [language, setLanguage] = useState(true)

    return(
        <S.MomContainer>
            <S.Heading>About</S.Heading>
            <S.Container>
                <S.ImageContainer>
                    <S.Image src={Me} alt='me'/>
                </S.ImageContainer>
                <S.MiniContainer>
                    <S.Paragraph>{language === true ? "Olá, sou o Gabriel (de Sousa) Alcântara, tenho 18 anos e sou Desenvolvedor Front-End Júnior e Escritor. Sou do Rio de Janeiro, Duque de Caxias, vivo aqui desde que nasci. Minha experiência com Front-End é recente, mas já sinto como se praticasse isso há anos, a rotina de estudo com o Vai na Web foi realmente transformadora, em poucos meses, já me sinto em casa programando. Na escrita, tenho um pouco mais de experiência, por enquanto tenho apenas 1 ano de carreira. Espero poder crescer cada vez mais no meio da tecnologia e também no meio artístico!"
: "Hi, I’m Gabriel (de Sousa) Alcântara, I’m 18 years old and I’m a Front-End Junior Developer and Writer. I’m from Rio de Janeiro, Duque de Caxias, I live here since I’ve been born. My experience with Front-End is recente, but I already feel like I’ve been doing that for years, the study routine with Vai na Web was a transforming experience, just in some months, I already feel comfortable programming. In writing, I have a little more experience, for now I have only 1 year of career. I hope that I can gain even more experience on both areas."}</S.Paragraph>
                    <S.Button onClick={()=>{setLanguage(!language)}}>{language === true ? "English" : "Português"}</S.Button>
                </S.MiniContainer>
            </S.Container>
        </S.MomContainer>
    )
}

export default About