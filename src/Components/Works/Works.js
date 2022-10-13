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
                    {eve && InfoRecipes()}
                    <S.InfoContainer>
                        <S.InfoButton onClick={()=>{setEve(!eve)}}>{language === true ? 'Sobre' : 'About'}</S.InfoButton>
                        <S.InfoButton>{language === true ? 'Abrir' : 'Open' }</S.InfoButton>
                    </S.InfoContainer>
                </S.BoxContainer>
                <S.BoxContainer>
                    <S.ImageContainer>
                        <S.Image src={Finn} alt='Finn'/>
                    </S.ImageContainer>
                    {finn && InfoRecipes()}
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