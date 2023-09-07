import styled from 'styled-components'

export const ProductCardStyle = styled.div`
  background: ${(props) => props.theme.base['base-card']};
  border-radius: 6px 36px 6px 36px;
  max-width: 25.6rem;
  min-height: 44rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 2.4rem;
  /* margin-bottom: 5rem; */
  transition: ease-out 500ms;
  h3 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    color: ${(props) => props.theme.base['base-subtitle']};
    margin: 0.8rem 0;
    min-height: 6.9rem;
    display: flex;
    align-items: center;
  }
  p {
    font-size: 1.4rem;
    margin: 0.8rem 0;
    color: ${(props) => props.theme.base['base-label']};
  }

  &:hover {
    transition: ease-in 200ms;
    background: ${(props) => props.theme.base['base-black']};
    box-shadow: 0px 0px 16px 5px ${(props) => props.theme.base['base-subtitle']};
    span {
      /* background: ${(props) => props.theme.base.transparentBg}; */
      display: flex;
      align-items: center;
      /* background: ${(props) => props.theme.base['base-black']}; */
      /* opacity: 1; */
    }
  }
  @media (max-width: 849px) {
    min-width: calc(45vw - 2.4rem);
    min-height: 50vh;
    padding: 1.2rem;
  }
  @media (max-width: 650px) {
    min-width: calc(85vw - 2.4rem);
    margin: 0 auto;
    padding: 1.2rem;
  }
`
export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: -50px;
  margin-bottom: 32px;
  border-radius: 6px 36px 6px 36px;
  transition: ease-out 500ms;
  height: 250px;

  &:hover {
    transition: ease-in 200ms;
    box-shadow: 0px 0px 2px 2px ${(props) => props.theme.base['base-subtitle']};
    background: ${(props) => props.theme.base.transparentBg};
  }
`
export const LearnMore = styled.div`
  display: flex;
  /* flex-direction: row-reverse; */
  align-items: center;
  justify-content: space-between;
  /* align-self: baseline; */
  border-radius: 20px;
  margin-left: -90px;
  margin-top: 200px;
  width: 100%;
  color: ${(props) => props.theme.base['base-label']};
  span {
    display: none;
    font-size: 1.2rem;
  }
  @media (max-width: 848px) {
    display: none;
    margin: 0;
  }
`
export const LearnAbout = styled.div`
  color: ${(props) => props.theme.base['base-label']};
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
  display: none;
  padding: 0.5rem 2rem;
  transition: ease-out 500ms;
  border-radius: 20px;
  &:hover {
    transition: ease-in 200ms;
    background: ${(props) => props.theme.product['yellow-dark']};
    color: ${(props) => props.theme.base['base-card']};
  }
  @media (max-width: 848px) {
    display: flex;
  }
`

export const CardImage = styled.img`
  /* position: absolute; */
  /* position: relative; */
  margin: 0 auto 0 0;
  @media (max-width: 848px) {
    margin: auto;
  }
`

export const ProductInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`
export const OptionsStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  div {
    font-size: 1rem;
    background: ${(props) => props.theme.product['yellow-light']};
    color: ${(props) => props.theme.product['yellow-dark']};
    border: none;
    padding: 0.4rem 0.8rem;
    border-radius: 100px;
    font-weight: 700;
    text-transform: uppercase;
  }
`
export const BuyActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 0.8rem;
  div {
    font-family: 'Roboto';
    font-size: 1.4rem;
    color: ${(props) => props.theme.base['base-text']};
    p {
      font-family: 'baloo 2';
      font-size: 2.4rem;
      font-weight: 800;
      width: 100%;
    }
  }

  a:hover {
    transition: all ease-in-out 600ms;
    background: ${(props) => props.theme.base['base-label']};
    box-shadow: 0px 0px 2px 2px ${(props) => props.theme.base['base-subtitle']};
    svg {
      filter: invert();
    }
  }
`

interface IconButton {
  background: string
}
export const BuyButton = styled.div<IconButton>`
  a {
    background: ${(props) => props.background};
    border-radius: 6px;
    padding: 0.8rem;
    border: none;
    display: flex;
    svg {
      color: ${(props) => props.theme.base.white};
      margin: auto;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  display: flex;
  flex-shrink: 1;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.base.transparentBg};
  img {
    max-width: 80%;
    max-height: 80vh;
    margin-bottom: -30px;
    position: relative;
  }

  button {
    position: absolute;
    top: 40px;
    right: 40px;
    background: transparent;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
  }
  @media (max-width: 750px) {
    img {
      max-width: 90%;
      height: auto;
    }
  }
`
export const ModalFlex = styled.div`
  /* position: relative; */
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 3.2rem;
  background: ${(props) => props.theme.base['base-black']};
  border-radius: 6px 36px 6px 36px;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`
export const ModalInfo = styled.div`
  /* position: absolute; */
  right: 0;
  background: ${(props) => props.theme.base['base-card']};
  padding: 2rem;
  border-radius: 6px 36px 6px 36px;
  margin-top: -10px;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 350px;
  h5 {
    text-align: left;
  }
  p {
    padding: 1rem 0;
  }
  a,
  h3,
  h5,
  p {
    color: ${(props) => props.theme.base.white};
    text-decoration: none;
  }

  @media (max-width: 1050px) {
    width: 290px;
  }
`
