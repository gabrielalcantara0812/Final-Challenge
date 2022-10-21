import React, {useState} from 'react'
import * as S from './Style'
import Recipes from '../data/recipes.png'
import KillingEve from '../data/killing-eve.png'
import Finn from '../data/finn-color.png'

const Works = () => {

    const [language, setLanguage] = useState(true)

    const [recipes, setRecipes] = useState(false)

    const [eve, setEve] = useState(false)

    const [finn, setFinn] = useState(false)

    const [port, setPort] = useState(false)

    const InfoRecipes = () => {
        return(
            <S.InfoBox>
                <S.Paragraph>{language === true ? 'Esse projeto foi o último do curso de Front-End do Vai na Web, antes do desafio final. Nele consegui ver bem que minhas habilidades estavam bem alinhadas com meu objetivo, consegui reproduzir o design quase perfeitamente, salvo alguns detalhes e a fonte.' : 'This was the last project of Vai na Web’s Front-End course, before the final project. In this one I got to realize that my abilities were on a good development, I almost reproduced perfectly the design.'}</S.Paragraph >
            </S.InfoBox>
        )
    }

    const InfoEve = () => {
        return(
            <S.InfoBox>
                <S.Paragraph>{language === true ? 'Esse foi uma atividade de inglês em que deveríamos construir uma página baseada em um filme ou uma série. Havíamos acabado de ser introduzidos ao flex-box e tudo foi bem experimental, tive muitos problemas com a responsividade. Mas no fim, tenho orgulho do meu primeiro projeto individual.' : 'This was a english activity that we had to build a page based on a movie or TV series. We had just learned the basics of flex-box and everything on this one was experimental, I had a lot of issues with the responsive design. But in the end, I’m proud of my first individual project.'}</S.Paragraph >
            </S.InfoBox>
        )
    }

    const InfoFinn = () => {
        return(
            <S.InfoBox>
                <S.Paragraph>{language === true ? 'Assim como o Recipes, esse projeto foi antes do desafio final, mas no Módulo 1. Essa atividade foi focada em position, não foi tão difícil quanto eu esperava, só que o design é mais estático aqui. Apesar de não estar responsivo, foi a partir daqui que comecei a usar esse recurso de maneira mais eficaz.' : 'Like the Recipes, this project came before the final project, but in the first module. This activity was focused on position, it wasn’t too hard like I expected, but the design is static. Although it isn’t responsive, it was since this one that I started using position in a more useful way.'}</S.Paragraph >
            </S.InfoBox>
        )
    }

    return(
        <S.MomContainer>
            <S.Heading>Works</S.Heading>
            <S.Container>
                <S.BoxContainer>
                    <S.ImageContainer>
                        <S.Image src={Recipes} alt='Recipes'/>
                    </S.ImageContainer>
                    {recipes && InfoRecipes()}
                    <S.InfoContainer>
                        <S.InfoButton onClick={()=>{setRecipes(!recipes)}}>{language === true ? 'Sobre' : 'About'}</S.InfoButton>
                        <S.InfoButton>{language === true ? 'Abrir' : 'Open' }</S.InfoButton>
                    </S.InfoContainer>
                </S.BoxContainer>
                <S.BoxContainer>
                    <S.ImageContainer>
                        <S.Image src={KillingEve} alt='KillingEve'/>
                    </S.ImageContainer>
                    {eve && InfoEve()}
                    <S.InfoContainer>
                        <S.InfoButton onClick={()=>{setEve(!eve)}}>{language === true ? 'Sobre' : 'About'}</S.InfoButton>
                        <S.InfoButton>{language === true ? 'Abrir' : 'Open' }</S.InfoButton>
                    </S.InfoContainer>
                </S.BoxContainer>
                <S.BoxContainer>
                    <S.ImageContainer>
                        <S.Image src={Finn} alt='Finn'/>
                    </S.ImageContainer>
                    {finn && InfoFinn()}
                    <S.InfoContainer>
                        <S.InfoButton onClick={()=>{setFinn(!finn)}}>{language === true ? 'Sobre' : 'About'}</S.InfoButton>
                        <S.InfoButton>{language === true ? 'Abrir' : 'Open' }</S.InfoButton>
                    </S.InfoContainer>
                </S.BoxContainer>
                <S.BoxContainer>
                    <S.ImageContainer>
                        <S.Image src={Recipes} alt='Recipes'/>
                    </S.ImageContainer>
                    {port && InfoRecipes()}
                    <S.InfoContainer>
                        <S.InfoButton onClick={()=>{setPort(!port)}}>{language === true ? 'Sobre' : 'About'}</S.InfoButton>
                        <S.InfoButton>{language === true ? 'Abrir' : 'Open' }</S.InfoButton>
                    </S.InfoContainer>
                </S.BoxContainer>
            </S.Container>
            <S.Button onClick={()=>{setLanguage(!language)}}>{language === true ? 'English' : 'Português'}</S.Button>
        </S.MomContainer>
    )
}

export default Works