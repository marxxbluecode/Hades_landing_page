import React from "react";
import Slider from "react-slick";

import { graphql, useStaticQuery } from 'gatsby'
import * as S from "./style";

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
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay: true,
        autoplaySpeed: 2200,
        pauseOnHover: true,
        
    };
    
    return (
        <S.SlideContainer>
               
                {/* <Slider {...settings}> */}
                <S.Slide>
                    <S.Title>Chthonic Gods</S.Title>
                    <S.Column>
                        <S.Character>
                            <S.CharacterImg src={imgMain1.url} alt="imgMain1" />
                            <S.CharacterText >{imgText1}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.Character>
                        
                        <S.Character>
                            <S.CharacterImg src={imgMain2.url} alt="imgMain2" />
                            <S.CharacterText >{imgText2}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.Character>

                        <S.Character>
                            <S.CharacterImg src={imgMain3.url} alt="imgMain3" />
                            <S.CharacterText >{imgText3}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.Character>

                        <S.Character>
                            <S.CharacterImg src={imgMain4.url} alt="imgMain4" />
                            <S.CharacterText >{imgText4}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.Character>
                    </S.Column>
                </S.Slide>
                
                <S.Slide>
                    <S.Title>Chthonic Gods</S.Title>
                    <S.Column>
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

                        <S.Character>
                            <S.CharacterImg src={imgMain7.url} alt="imgMain3" />
                            <S.CharacterText >{imgText7}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.Character>

                        <S.Character>
                            <S.CharacterImg src={imgMain9.url} alt="imgMain4" />
                            <S.CharacterText >{imgText9}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.Character>
                    </S.Column>
                </S.Slide>
                <S.Slide>
                    <S.Title>Chthonic Gods</S.Title>
                    <S.Column>
                        <S.Character>
                            <S.CharacterImg src={imgMain8.url} alt="imgMain1" />
                            <S.CharacterText >{imgText8}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.Character>
                        <S.Character>
                            <S.CharacterImg src={imgMain10.url} alt="imgMain2" />
                            <S.CharacterText >{imgText10}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.Character>
                    </S.Column>
                </S.Slide>
                <S.Slide>
                    <S.Title>Olympian Gods</S.Title>
                    <S.Column>
                        <S.Character>
                            <S.CharacterImg src={imgMain11.url} alt="imgMain1" />
                            <S.CharacterText >{imgText11}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.Character>
                        
                        <S.Character>
                            <S.CharacterImg src={imgMain12.url} alt="imgMain2" />
                            <S.CharacterText >{imgText12}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.Character>

                        <S.Character>
                            <S.CharacterImg src={imgMain13.url} alt="imgMain3" />
                            <S.CharacterText >{imgText13}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.Character>

                        <S.Character>
                            <S.CharacterImg src={imgMain14.url} alt="imgMain4" />
                            <S.CharacterText >{imgText14}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.Character>
                    </S.Column>
                </S.Slide>
                <S.Slide>
                    <S.Title>Olympian Gods</S.Title>
                    <S.Column>
                        <S.Character>
                            <S.CharacterImg src={imgMain15.url} alt="imgMain1" />
                            <S.CharacterText >{imgText15}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.Character>
                        
                        <S.Character>
                            <S.CharacterImg src={imgMain16.url} alt="imgMain2" />
                            <S.CharacterText >{imgText16}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.Character>

                        <S.Character>
                            <S.CharacterImg src={imgMain17.url} alt="imgMain3" />
                            <S.CharacterText >{imgText17}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.Character>

                        <S.Character>
                            <S.CharacterImg src={imgMain18.url} alt="imgMain4" />
                            <S.CharacterText >{imgText18}</S.CharacterText >
                            <S.Btn>{buttonMain}</S.Btn>
                        </S.Character>
                    </S.Column>
                </S.Slide>
                <S.Slide>
                    <S.Title>Olympian Gods</S.Title>
                    <S.Column>
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
                    </S.Column>
                </S.Slide>
            {/* </Slider> */}
        </S.SlideContainer>
    );
}