import React from "react";
import Slider from "react-slick";
import { graphql, useStaticQuery } from 'gatsby'
import * as S from "./style";
import { Helmet } from "react-helmet";

export function Slide() {
    const data = useStaticQuery(graphql`
        query {
            alldata{
                mainSlides {
                    imgMain1 {
                      url
                    }
                    imgMain2 {
                      url
                    }
                    imgMain3 {
                      url
                    }
                    imgMain4 {
                      url
                    }
                    imgText1
                    imgText2
                    imgText3
                    imgText4
                    buttonMain
                    imgMain5 {
                      url
                    }
                    imgMain6 {
                      url
                    }
                    imgMain7 {
                      url
                    }
                    imgMain8 {
                      url
                    }
                    imgMain9 {
                      url
                    }
                    imgMain10 {
                      url
                    }
                    imgText5
                    imgText6
                    imgText7
                    imgText8
                    imgText9
                    imgText10
                    imgMain11 {
                      url
                    }
                    imgMain12 {
                      url
                    }
                    imgMain13 {
                      url
                    }
                    imgMain14 {
                      url
                    }
                    imgMain15 {
                      url
                    }
                    imgMain16 {
                      url
                    }
                    imgMain17 {
                      url
                    }
                    imgMain18 {
                      url
                    }
                    imgMain19 {
                      url
                    }
                    imgMain20 {
                      url
                    }
                    imgText11
                    imgText12
                    imgText13
                    imgText14
                    imgText15
                    imgText16
                    imgText17
                    imgText18
                    imgText19
                    imgText20
                  }
            }
        }
    `)

    const {imgMain1, imgMain2, imgMain3, imgMain4, imgMain5, imgMain6, imgMain7, imgMain8, imgMain9, imgMain10, imgMain11, imgMain12, imgMain13, imgMain14, imgMain15, imgMain16, imgMain17, imgMain18, imgMain19, imgMain20, imgText1, imgText2, imgText3, imgText4, imgText5, imgText6, imgText7, imgText8, imgText9, imgText10, imgText11, imgText12, imgText13, imgText14, imgText15, imgText16, imgText17, imgText18, imgText19, imgText20, buttonMain} = data.alldata.mainSlides[0]
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: true,
        
    };
    
    return (
  
        <S.Container>
               <Helmet>
                  <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
                  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
               </Helmet>
                <Slider {...settings}>

                <S.Content>
                    <S.Title>Chthonic Gods</S.Title>
                    <S.Row>
                        <S.Character>
                            <S.CharacterImg src={imgMain1.url} alt="imgMain1" />
                            <S.CharacterText >{imgText1}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.Character>
                        <S.CharacterNyx>
                            <S.CharacterImg src={imgMain2.url} alt="imgMain2" />
                            <S.CharacterText >{imgText2}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.CharacterNyx>
                        <S.CharacterChaos>
                            <S.CharacterImg src={imgMain3.url} alt="imgMain3" />
                            <S.CharacterText >{imgText3}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.CharacterChaos>
                        <S.CharacterCharon>
                            <S.CharacterImg src={imgMain4.url} alt="imgMain4" />
                            <S.CharacterText >{imgText4}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.CharacterCharon>
                    </S.Row>
                </S.Content>
                
                <S.Content>
                    <S.Title>Chthonic Gods</S.Title>
                    <S.Row>
                        <S.Character>
                            <S.CharacterImg src={imgMain5.url} alt="imgMain1" />
                            <S.CharacterText >{imgText5}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.Character> 
                        <S.Character>
                            <S.CharacterImg src={imgMain6.url} alt="imgMain2" />
                            <S.CharacterText >{imgText6}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.Character>
                        <S.CharacterTisiphone>
                            <S.CharacterImg src={imgMain7.url} alt="imgMain3" />
                            <S.CharacterText >{imgText7}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.CharacterTisiphone>
                        <S.Character>
                            <S.CharacterImg src={imgMain9.url} alt="imgMain4" />
                            <S.CharacterText >{imgText9}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.Character>
                    </S.Row>
                </S.Content>

                <S.Content>
                    <S.Title>Chthonic Gods</S.Title>
                    <S.Row>
                        <S.CharacterThanatos>
                            <S.CharacterImg src={imgMain8.url} alt="imgMain1" />
                            <S.CharacterText >{imgText8}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.CharacterThanatos>
                        <S.Character>
                            <S.CharacterImg src={imgMain10.url} alt="imgMain2" />
                            <S.CharacterText >{imgText10}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.Character>
                    </S.Row>
                </S.Content>

                <S.Content>
                    <S.Title>Olympian Gods</S.Title>
                    <S.Row>
                        <S.CharacterZeus>
                            <S.CharacterImgZeus src={imgMain11.url} alt="imgMain1" />
                            <S.CharacterText >{imgText11}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.CharacterZeus>   
                        <S.CharacterPoseidon>
                            <S.CharacterImgPoseidon src={imgMain12.url} alt="imgMain2" />
                            <S.CharacterText >{imgText12}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.CharacterPoseidon>
                        <S.CharacterAthena>
                            <S.CharacterImg src={imgMain13.url} alt="imgMain3" />
                            <S.CharacterText >{imgText13}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.CharacterAthena>
                        <S.CharacterAphrodite>
                            <S.CharacterImg src={imgMain14.url} alt="imgMain4" />
                            <S.CharacterText >{imgText14}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.CharacterAphrodite>
                    </S.Row>
                </S.Content>

                <S.Content>
                    <S.Title>Olympian Gods</S.Title>
                    <S.Row>
                        <S.CharacterArtemis>
                            <S.CharacterImg src={imgMain15.url} alt="imgMain1" />
                            <S.CharacterText >{imgText15}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.CharacterArtemis>
                        <S.CharacterAres>
                            <S.CharacterImg src={imgMain16.url} alt="imgMain2" />
                            <S.CharacterText >{imgText16}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.CharacterAres>
                        <S.Character>
                            <S.CharacterImg src={imgMain17.url} alt="imgMain3" />
                            <S.CharacterText >{imgText17}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.Character>
                        <S.CharacterHermes>
                            <S.CharacterImgHermes src={imgMain18.url} alt="imgMain4" />
                            <S.CharacterText >{imgText18}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.CharacterHermes>
                    </S.Row>
                </S.Content>

                <S.Content>
                    <S.Title>Olympian Gods</S.Title>
                    <S.Row>
                        <S.Character>
                            <S.CharacterImg src={imgMain19.url} alt="imgMain1" />
                            <S.CharacterText >{imgText19}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.Character>
                        
                        <S.Character>
                            <S.CharacterImg src={imgMain20.url} alt="imgMain2" />
                            <S.CharacterText >{imgText20}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.Character>
                    </S.Row>
                </S.Content>

            </Slider>

        </S.Container>
    );
}