import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: auto;
`

export const HeaderNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 10vh;
    padding: 2%;
`
export const HeaderLogo = styled.img`
    width: 17%;
    padding: 3%;
`
export const a = styled.a`
    link-style: none;
    text-decoration: none;
    font-weight: bold;
    font-size: 1vw;
    color: #d2d2d2;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`
export const ul = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    justify-content: space-between;
    width: 50%;
`

export const HeaderBottom = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
`
export const Headerbackground = styled.img`
    width: 100vw;
`
export const TextWrapper = styled.div`
    width:fit-content;
    position:absolute;
    left:10%;
    bottom:30%;

`
export const paragraph = styled.p`
    width: 25%;
    color: white;
    font-size: 1.2vw;
    font-weight: 600;
`
export const zagreus = styled.img`
    width: 30%;
    position:absolute;
    left: 53%;
    top: -1.3%;

`
export const logo = styled.img`
    width: 70%;
    position:absolute;
    left: 5%;
    bottom: 40%;
`

export const Btn = styled.button`
    width: 20%;
    padding: 1%;
    font-size: 1.5vw;
    font-weight: 600;
    color: white;
    outline: none;
    border: none;
    position:absolute;
    left: 9%;
    bottom: 10%;
    background-color: #fe4b33;
    cursor: pointer;
`

