import React, {useState} from 'react'
import * as S from './Style'
import Recipes from '../data/recipes.png'
import KillingEve from '../data/killing-eve.png'
import Finn from '../data/finn-color.png'

const Works = () => {

    const [language, setLanguage] = useState(true)

    return(
        <S.MomContainer>
            <S.Heading>Works</S.Heading>
            <S.Container>
                <S.BoxContainer>
                    <S.ImageContainer>
                        <S.Image src={Recipes} alt='Recipes'/>
                    </S.ImageContainer>
                </S.BoxContainer>
                <S.BoxContainer>
                    <S.ImageContainer>
                        <S.Image src={KillingEve} alt='KillingEve'/>
                    </S.ImageContainer>
                </S.BoxContainer>
                <S.BoxContainer>
                    <S.ImageContainer>
                        <S.Image src={Finn} alt='Finn'/>
                    </S.ImageContainer>
                </S.BoxContainer>
                <S.BoxContainer>
                    <S.ImageContainer>
                        <S.Image src={Recipes} alt='Recipes'/>
                    </S.ImageContainer>
                </S.BoxContainer>
            </S.Container>
        </S.MomContainer>
    )
}

export default Works