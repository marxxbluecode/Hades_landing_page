import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './style';
import {Slide} from './slide';

export function Main() {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        mains {
          backgroundMain {
            url
          }
          titleMain
          paragraphMain
          listIcon {
            url
          }
          listText1
          listText2
          listText3
          listText4
          mainBottomTitle
          mainBottomImg1 {
            url
          }
          mainBottomImg2 {
            url
          }
          mainBottomParagraph1
          mainBottomParagraph2
        }
      }
    }
  `);

  const {backgroundMain, titleMain, paragraphMain, listIcon, listText1, listText2, listText3, listText4, mainBottomTitle, mainBottomImg1, mainBottomImg2, mainBottomParagraph1, mainBottomParagraph2} = data.alldata.mains[0]

  return (
    <S.MainContainer>
      <a href="#" id="slide"></a>
      <Slide />
      <S.MainMiddle>
        <S.gradient></S.gradient>
        <S.backgroundMain src={backgroundMain.url} alt="backgroundMain"/>
          <div>
        <S.MainMiddleLeft>
            <S.TitleMiddle>{titleMain}</S.TitleMiddle>
            <S.Paragraph>{paragraphMain}</S.Paragraph>
            <S.List> <S.img src={listIcon.url}/> <li>{listText1}</li></S.List>
            <S.List> <S.img src={listIcon.url}/> <li>{listText2}</li></S.List>
            <S.List> <S.img src={listIcon.url}/> <li>{listText3}</li></S.List>
            <S.List> <S.img src={listIcon.url}/> <li>{listText4}</li></S.List>
            <S.List> <S.img src={listIcon.url}/> <li>{listText3}</li></S.List>
            <S.List> <S.img src={listIcon.url}/> <li>{listText1}</li></S.List>
            </S.MainMiddleLeft>
            <S.MainMiddleRight>
            <S.iframe src="https://bandcamp.com/EmbeddedPlayer/album=3570864137/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/transparent=true/" seamless><a href="https://supergiantgames.bandcamp.com/album/hades-singles">Hades: Singles by Darren Korb</a></S.iframe>
            </S.MainMiddleRight>
          </div>
      </S.MainMiddle>
      <S.MainBottom>
        <S.Title>{mainBottomTitle}</S.Title>
        <S.Row>
        <iframe width="475" height="250" src="https://www.youtube.com/embed/Bz8l935Bv0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="475" height="250" src="https://www.youtube.com/embed/tlvEVPSFuYk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </S.Row>
      </S.MainBottom>
    </S.MainContainer>
  );
}