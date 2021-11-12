import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './style';

export function Footer() {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        footers {
          logoFooter {
            url
          }
          footerOurLocation
          footerDayCare
          footerQuickLinks
          footerSocials
          footerAdress
          footerPhone1
          footerPhone2
          footerMail
          dayCareDays1
          dayCareDays2
          homeFooter
          aboutUsFooter
          ourServicesFooter
          reservationFooter
          contactUsFooter
          twitter
          facebook
          google
          pinterest
          copyright
          vainaWeb
        }
      }
    }
  `);

  const {logoFooter, footerOurLocation, footerDayCare, footerQuickLinks, footerSocials, footerAdress, footerPhone1, footerPhone2, footerMail, dayCareDays1, dayCareDays2, homeFooter, aboutUsFooter, ourServicesFooter, reservationFooter, contactUsFooter, twitter, facebook, google, pinterest, copyright, vainaWeb} = data.alldata.footers[0]

  return (
    <S.FooterContainer>
     <S.TopContainer>
       <S.LogoFooter src={logoFooter.url} alt="Logo Footer" />
       <S.Wrappers>
         <S.Title>{footerOurLocation}</S.Title>
          <S.Paragraph>{footerAdress}</S.Paragraph>
          <S.Paragraph>{footerPhone1}</S.Paragraph>
          <S.Paragraph>{footerPhone2}</S.Paragraph>
          <S.Paragraph>{footerMail}</S.Paragraph>
       </S.Wrappers>
       <S.Wrapper>
         <S.Title>{footerDayCare}</S.Title>
         <S.Paragraphs>{dayCareDays1}</S.Paragraphs>
         <S.Paragraphs>{dayCareDays2}</S.Paragraphs>
       </S.Wrapper>
       <S.Wrapper>
          <S.Title>{footerQuickLinks}</S.Title>
          <S.Paragraphs>{homeFooter}</S.Paragraphs>
          <S.Paragraphs>{aboutUsFooter}</S.Paragraphs>
          <S.Paragraphs>{ourServicesFooter}</S.Paragraphs>
          <S.Paragraphs>{reservationFooter}</S.Paragraphs>
          <S.Paragraphs>{contactUsFooter}</S.Paragraphs>
       </S.Wrapper>
       <S.Wrapper>
          <S.Title>{footerSocials}</S.Title>
          <S.Paragraph>{twitter}</S.Paragraph>
          <S.Paragraph>{facebook}</S.Paragraph>
          <S.Paragraph>{google}</S.Paragraph>
          <S.Paragraph>{pinterest}</S.Paragraph>
       </S.Wrapper>
     </S.TopContainer>
     <S.BottomContainer>{copyright}</S.BottomContainer>
     <S.Copyright><p>{vainaWeb}</p></S.Copyright>
    </S.FooterContainer>
  );
}