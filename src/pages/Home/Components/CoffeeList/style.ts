import styled from 'styled-components'

export const CoffeeListStyles = styled.section`
  h2 {
    font-family: 'Baloo 2';
    max-width: 25.6rem;
    font-size: 3.2rem;
    margin: 3.2rem  0;

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
export const CoffeeListContainer = styled.section`
  display: flex;
  flex-direction: row;
  /* justify-content: start; */
  align-items: center;
  flex-wrap: wrap;
  gap: 3.2rem;
  /* margin: 0 32rem; */
  max-width: 112rem;
  @media (max-width: 74.0rem) {
    margin: 0 4rem;
    gap: 2.4rem;
    justify-content: space-around;
  }
  @media (max-width: 48.0rem) {
    margin: 0 2rem;
    flex-wrap: wrap;
  }
`
export const CoffeeCard = styled.div`
  background: ${(props) => props.theme.base['base-card']};
  border-radius: 6px 36px 6px 36px;
  max-width: 25.6rem;
  height: 31.0rem;
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
  }
  h4 {
    font-family: 'Roboto';
    font-size: 1.4rem;
    color: ${(props) => props.theme.base['base-label']};
  }
  img {
    margin-top: -4.0rem;
  }
  @media (max-width: 593px) {
    min-width: calc(85vw - 2.4rem);
    margin: 0 auto;
    padding: 1.2rem;

  }
`
export const CoffeeInfo = styled.div`
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
  button {
    border: none;
    font-size: 1.6rem;
  }
`

interface IconButton {
  background: string;
}
export const BuyButton = styled.button<IconButton>`
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
`