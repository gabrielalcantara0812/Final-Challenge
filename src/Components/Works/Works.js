import React, {useState} from 'react'
import * as S from './Style'
import Recipes from '../data/recipes.png'
import KillingEve from '../data/killing-eve.png'
import Finn from '../data/portflow.png'
import ODS from '../data/ods.png'

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
                <S.Paragraph>{language === true ? 'Porflow foi o projeto final do Módulo 1. Ele é o modelo mais simples das opções que tínhamos que escolher, com ele aprendi sobre a progressão de um projeto, já que me organizei para fazê-lo em 2 semanas.' : 'Portflow was the final project of the first module. It is the most simple model of the options that we had to choose, with it I learned about the progression of a project, because I had to organized it in some weeks.'}</S.Paragraph >
            </S.InfoBox>
        )
    }

    const InfoODS = () => {
        return(
            <S.InfoBox>
                <S.Paragraph>{language === true ? ' A página da ODS foi um desafio adicional para o desafio final do Módulo 2. Foi uma página interessante de construir, explorei algumas funcionalidades do React que ainda não havia usado.' : 'The ODS page was an additional challenge for the final project of the second module. It was an interesting page to build, I explored some React’s functionalities that I didn’t use before.'}</S.Paragraph >
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
                        <S.InfoButton><S.A href='https://recipes-six-red.vercel.app/' target='_blank'>{language === true ? 'Abrir' : 'Open'}</S.A></S.InfoButton>
                    </S.InfoContainer>
                </S.BoxContainer>
                <S.BoxContainer>
                    <S.ImageContainer>
                        <S.Image src={KillingEve} alt='KillingEve'/>
                    </S.ImageContainer>
                    {eve && InfoEve()}
                    <S.InfoContainer>
                        <S.InfoButton onClick={()=>{setEve(!eve)}}>{language === true ? 'Sobre' : 'About'}</S.InfoButton>
                        <S.InfoButton><S.A href='https://codepen.io/gabrielalcantara1823/pen/xxpMoyE' target='_blank'>{language === true ? 'Abrir' : 'Open'}</S.A></S.InfoButton>
                    </S.InfoContainer>
                </S.BoxContainer>
                <S.BoxContainer>
                    <S.ImageContainer>
                        <S.Image src={Finn} alt='Finn'/>
                    </S.ImageContainer>
                    {finn && InfoFinn()}
                    <S.InfoContainer>
                        <S.InfoButton onClick={()=>{setFinn(!finn)}}>{language === true ? 'Sobre' : 'About'}</S.InfoButton>
                        <S.InfoButton ><S.A href='https://portflow-blond.vercel.app/' target='_blank'>{language === true ? 'Abrir' : 'Open'}</S.A></S.InfoButton>
                    </S.InfoContainer>
                </S.BoxContainer>
                <S.BoxContainer>
                    <S.ImageContainer>
                        <S.Image src={ODS} alt='ODS'/>
                    </S.ImageContainer>
                    {port && InfoODS()}
                    <S.InfoContainer>
                        <S.InfoButton onClick={()=>{setPort(!port)}}>{language === true ? 'Sobre' : 'About'}</S.InfoButton>
                        <S.InfoButton><S.A href='https://ods-pied.vercel.app/' target='_blank'>{language === true ? 'Abrir' : 'Open'}</S.A></S.InfoButton>
                    </S.InfoContainer>
                </S.BoxContainer>
            </S.Container>
            <S.Button onClick={()=>{setLanguage(!language)}}>{language === true ? 'English' : 'Português'}</S.Button>
        </S.MomContainer>
    )
}

export default Works