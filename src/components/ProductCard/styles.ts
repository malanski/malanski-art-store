import styled from 'styled-components'

export const ProductCardStyle = styled.div`
  background: ${(props) => props.theme.base['base-card']};
  border-radius: 6px 36px 6px 36px;
  /* min-width: 280px; */
  /* max-width: 280px; */
  margin: 1rem auto;

  transition: ease-out 500ms;
  &:hover {
    transition: ease-in 200ms;
    background: ${(props) => props.theme.base['base-black']};
    box-shadow: 0px 0px 16px 5px ${(props) => props.theme.base['base-subtitle']};
    span {
      display: flex;
      align-items: center;
    }
  }
  @media (max-width: 849px) {
    margin: 2.2rem auto;
  }
`

export const CardContainer = styled.div`
  /* width: 100%;
  height: 100%; */
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 267px;
  min-height: 450px;
  @media (max-width: 849px) {
    min-width: calc(45vw - 2.4rem);
    min-height: 50vh;
    padding: 1.2rem;
  }
  @media (max-width: 650px) {
    min-width: calc(85vw - 2.4rem);
    margin: 4rem auto;
    padding: 1.2rem;
  }
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: -70px;
  margin-bottom: 32px;
  border-radius: 6px 36px 6px 36px;
  transition: ease-out 500ms;
  height: 250px;

  &:hover {
    transition: ease-in 200ms;
    box-shadow: 0px 0px 2px 2px ${(props) => props.theme.base['base-subtitle']};
    background: ${(props) => props.theme.base.transparentBg};
  }
  @media (max-width: 650px) {
    margin-top: -50px;
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  h3 {
    width: 100%;
    font-family: 'Baloo 2';
    font-size: 2rem;
    color: ${(props) => props.theme.base['base-subtitle']};
    margin: 0.8rem auto;
    min-height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    width: 100%;
    font-size: 1.4rem;
    margin: 0.8rem 0;
    color: ${(props) => props.theme.base['base-label']};
  }
`
export const OptionsStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* min-height: 60px;1 */
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  div {
    font-size: 1rem;
    background: ${(props) => props.theme.product.yellow};
    color: ${(props) => props.theme.base['base-card']};
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 0.8rem;

  a:hover {
    transition: all ease-in-out 600ms;
    background: ${(props) => props.theme.base['base-label']};
    box-shadow: 0px 0px 2px 2px ${(props) => props.theme.base['base-subtitle']};
    svg {
      filter: invert();
    }
  }
`
export const Price = styled.div`
  /* width: 45%; */

  font-family: 'Roboto';
  font-size: 1.4rem;
  color: ${(props) => props.theme.base['base-text']};
  p {
    font-family: 'baloo 2';
    font-size: 2.4rem;
    font-weight: 800;
    width: 100%;
  }
`

interface IconButton {
  background: string
}
export const BuyButton = styled.div<IconButton>`
  a {
    text-transform: uppercase;
    background: ${(props) => props.background};
    border-radius: 6px;
    padding: 1rem;
    border: none;
    display: flex;
    align-items: center;
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
  /* padding: 1rem 0; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.base.transparentBg};
`
export const ModalFlex = styled.div`
  /* position: relative; */
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 1rem;
  height: 98vh;
  width: 100%;

  background: ${(props) => props.theme.base['base-black']};
  border-radius: 6px 36px 6px 36px;
  @media (max-width: 890px) {
    padding: 0.5rem;
    flex-direction: column;
    height: 85vh;
  }
  @media (max-height: 420px) {
    flex-direction: row;
    height: 100vh;
  }
`
export const ModalHeader = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  img {
    max-height: 90%;
  }
  svg {
    color: white;
  }
  span {
    color: ${(props) => props.theme.base.white};
  }
  @media (max-width: 890px) {
    /* height: 70vh; */
    /* position: unset; */
    height: 60%;

    img {
      /* min-width: 50vw; */
      height: 80%;
    }
  }
  @media (max-height: 420px) {
    img {
      height: 100%;
    }
  }
`
export const ModalInfo = styled.div`
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
  h3 {
    text-align: center;
    width: 100%;
  }
  h5 {
    text-align: left;
  }
  p {
    text-align: justify;
    padding: 2rem 0;
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
export const CardCloseButton = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  color: ${(props) => props.theme.base.white};
  background: ${(props) => props.theme.base.transparentBg};
  transition: ease-out 600ms;
  opacity: 0.5;
  border: none;
  border-radius: 50%;
  font-size: 55px;
  cursor: pointer;
  &:hover {
    transition: ease-in 200ms;
    background: ${(props) => props.theme.product.purple};
    opacity: 1;
  }
  @media (height: 600px) {
    top: 85px;
    right: 0px;
    width: 50px;
    height: 50px;
  }
  @media (max-width: 580px) {
    top: 25px;
    right: 25px;
    width: 60px;
    height: 60px;
  }
  @media (max-height: 420px) {
    top: 25px;
    right: 0px;
    width: 50px;
    height: 50px;
  }
`
