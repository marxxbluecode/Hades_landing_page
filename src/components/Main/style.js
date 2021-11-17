import styled from "styled-components";


export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: auto;
`
export const Title = styled.h1`
    font-size: 2.5vw;
    font-weight: bold;
    color: #d2d2d2;
    padding: 3vw 3vw 3vw 6vw;
    text-align: center;
`
export const Container = styled.section`
    width: 100%;
    padding-top: 5vh;
`
export const Content = styled.div`
    height: auto;
    padding: 2vw;
    
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 0vw 2vw 0vw 2vw;
`
export const Character = styled.div`
    width: 20vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1vw;
`
export const CharacterNyx = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1vw;
    position: relative;
    bottom: 0.8vh;
`
export const CharacterChaos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1vw;
    position: relative;
    bottom: .6vh;
`
export const CharacterCharon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1vw;
    position: relative;
    bottom: 4.5vh;
`
export const CharacterTisiphone= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1vw;
    position: relative;
    bottom: 0vh;
`
export const CharacterThanatos= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1vw;
    position: relative;
    bottom: -2vh;
`
export const CharacterZeus = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1vw;
    position: relative;
    bottom: -4.5vh;
`
export const CharacterPoseidon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1vw;
    position: relative;
    bottom: -5.5vh;
`
export const CharacterAthena = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1vw;
    position: relative;
    bottom: 1vh;
`
export const CharacterAphrodite = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1vw;
    position: relative;
    bottom: 1vh;
`
export const CharacterArtemis = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1vw;
    position: relative;
    bottom: 1.6vh;
`
export const CharacterAres = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1vw;
    position: relative;
    bottom: 1vh;
`
export const CharacterHermes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1vw;
    position: relative;
    bottom: -1.8vh;
`
export const CharacterImg = styled.img`
    width: 100%;
    margin-bottom: 1vw;
`

export const CharacterImgZeus = styled.img`
    width: 22vw;
    height: 30.3vh;
    margin-bottom: 1vw;
`
export const CharacterImgPoseidon = styled.img`
    width: 22vw;
    height: 28vh;
    margin-bottom: 1vw;
`
export const CharacterImgHermes = styled.img`
    width: 20vw;
    height: 32vh;
    margin-bottom: 1vw;
`

export const CharacterText = styled.p`
    font-size: 1.5vw;
    font-weight: 600;
    margin-bottom: 1vw;
    color: #d2d2d2;
`
export const Btn = styled.button`
    width: 15vw;
    outline: none;
    padding: 1vw;
    border: none;
    font-size: 1vw;
    font-weight: bold;
    cursor: pointer;
    background: linear-gradient(to right, #e10101 50%, #fe4b33 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all .5s ease-out;
    &:hover{
        transform: scale(1.1);
        background-position: left bottom;
        color: #fff;
    }
`


export const MainMiddle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
`
export const MainMiddleLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    position: absolute;
    left: 8%;
    z-index: 1;
    margin: 2%;
`
export const TitleMiddle = styled.h1`
    font-size: 2.5vw;
    font-weight: bold;
    color: #d2d2d2;
    padding: 4vw 0vw 2vw 4vw;
    position: relative;
    left: -4%;
`
export const MainMiddleRight = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;
    position: absolute;
    left: 50%;
`
export const backgroundMain = styled.img`
    width: 100vw;
`
export const gradient = styled.div`
    width: 100vw;
    height: 118vh;
    position: absolute;
    z-index: 1;
    opacity: 0.7;
    background-image: linear-gradient(to bottom right, black, black, transparent);
`

export const Paragraph = styled.p`
    width: 60%;
    color: #d2d2d2;
    font-size: 1.2vw;
    font-weight: 600;
    position: relative;
    left: 2%;
    padding: 1vw;
`
export const List = styled.li`
    display: flex;
    list-style: none;
    align-items: center;
    font-size: 1.2vw;
    padding: 1vw;
    color: #d2d2d2;
    font-size: 1.2vw;
    font-weight: 600;
`
export const img = styled.img`
    width: 2vw;
`
export const iframe = styled.iframe`
    width: 65%;
    height: 80%;
    position: relative;
    z-index: 2;
    border: none;
    margin: 2%;
`
export const MainBottom = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: auto;
    background-color: #8c120a;
    padding: 3vw;
    padding-bottom: 5vw;
`
