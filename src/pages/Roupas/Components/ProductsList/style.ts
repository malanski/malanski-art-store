import styled from 'styled-components'

export const ProductsListStyles = styled.section`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
  h2 {
    font-family: 'Baloo 2';
    /* max-width: 25.6rem; */
    font-size: 3.2rem;
    margin: 3.2rem  0;
    display: flex;
    align-items: center;
    transition: all ease-in-out 800ms;
    text-align: center;
    width: 100%;
    justify-content: center;
    

  }
  
  @media (max-width: 74.0rem) {
    h2 {
      margin: 3.2rem  8rem;
    }
  }
  @media (max-width: 48.0rem) {
    h2 {
      margin: 3.2rem 4rem;
    }
  }
`

export const ProductsNav = styled.ul`
    display: flex;
    width: 100%;
    list-style-type: none;
    justify-content: space-around;
    margin: 3.2rem  0;
    background: ${(props) => props.theme.base.bgClear};
    align-items: center;

  a {
    width: 100%;
    padding: 1rem;
    text-align: center;
    font-size: 2.2rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.product['yellow-light']};
    transition: all ease-in-out 800ms;

  }
  a:hover {
      transition: all ease-in-out 800ms;
      background: ${(props) => props.theme.base['base-card']};
      color: ${(props) => props.theme.product['yellow']};
  }
  a:active {
      background: ${(props) => props.theme.base['base-card']};
      color: ${(props) => props.theme.product['yellow']};
  }
  @media (max-width: 740px) {
    flex-wrap: wrap;
    margin: 3.2rem  8rem;
    gap: 0.8rem;
    a {
      font-size: 1.9rem;
    }
  }
  @media (max-width: 540px) {
    a {
      font-size: 1.8rem;
      padding: 1rem 2rem;
    }
  }
`
export const ProductListContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 3.2rem;
  max-width: 112rem;
  @media (max-width: 74.0rem) {
    justify-content: space-around;
  }
  @media (max-width: 48.0rem) {
    /* margin: 0 2rem; */
    /* flex-wrap: wrap; */
  }
`
export const ProductCard = styled.div`
  background: ${(props) => props.theme.base['base-card']};
  border-radius: 6px 36px 6px 36px;
  max-width: 25.6rem;
  min-height: 31.0rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 2.4rem;
  h3 {
    font-family: 'Baloo 2';
    font-size: 2.0rem;
    color: ${(props) => props.theme.base['base-subtitle']};
    margin: 0.8rem 0;
    min-height: 6.9rem;
    display: flex;
    align-items: center;
  }
  h4 {
    font-family: 'Roboto';
    font-size: 1.4rem;
    margin: 0.8rem 0;
    color: ${(props) => props.theme.base['base-label']};
  }
  img {
    margin-top: -4.0rem;
    margin-bottom: 2.0rem;
  }
  @media (max-width: 849px) {
    min-width: calc(45vw - 2.4rem);
    min-height: 50vh;
    padding: 1.2rem;
  }
  @media (max-width: 593px) {
    min-width: calc(85vw - 2.4rem);
    margin: 0 auto;
    padding: 1.2rem;
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
    width: 100%;
    button {
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
  h6 {
    font-family: 'Roboto';
    font-size: 1.4rem;
    color: ${(props) => props.theme.base['base-text']};
    span {
      font-family: 'baloo 2';
      font-size: 2.4rem;
      font-weight: 800;
    }    
  }
  button:hover {
    transition: all ease-in-out 600ms;
    background: ${(props) => props.theme.base['base-label']};
    svg {
      filter: invert();
    }
  }
`

interface IconButton {
  background: string;
}
export const BuyButton = styled.div<IconButton>`
  button {
    background: ${(props) => props.background};
    border-radius: 6px;
    padding: 0.8rem;
    border: none;
    width: 3.8rem;
    height: 3.8rem;
    svg {
      color: ${(props) => props.theme.base['white']};
      margin: auto;
    }
}
`