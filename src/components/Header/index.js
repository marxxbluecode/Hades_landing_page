import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './style';

export function Header() {
  const data = useStaticQuery(graphql`
  query {
    alldata {
      headers {
        logo {
          url
        }
        home
        aboutUs
        ourservices
        reservation
        contactus
        telicon {
          url
        }
        telephone
        headerbackground {
          url
        }
        headertitle
        headerSubTitle
        headerParagraph
        headerBtn
        zagreu {
          url
        }
        logoheader2 {
          url
        }
      }
    }
  }
  `);

  const {logo, home, aboutUs, ourservices, reservation, contactus, telicon, telephone, headerbackground, headertitle, headerSubTitle, headerParagraph, headerBtn, zagreu, logoheader2} = data.alldata.headers[0]

  return (
    <S.HeaderContainer>
    
      <S.HeaderNav>
        <S.HeaderLogo src={logo.url} alt="logo" />
        <S.ul>
          <li><S.a href="#">{home}</S.a></li>
          <li><S.a href="#">{aboutUs}</S.a></li>
          <li><S.a href="#">{ourservices}</S.a></li>
          <li><S.a href="#">{reservation}</S.a></li>
          <li><S.a href="#">{contactus}</S.a></li>
        </S.ul>
      </S.HeaderNav>
    <S.HeaderBottom>
      <div>
        <S.zagreus src={zagreu.url}/>
        <S.logo src={logoheader2.url}/>
        <S.Headerbackground src={headerbackground.url}/>
        <S.TextWrapper>
          <S.paragraph>{headerParagraph}</S.paragraph>
        </S.TextWrapper>
        <S.Btn>{headerBtn}</S.Btn>
      </div>
    </S.HeaderBottom>
    </S.HeaderContainer>
  );
}