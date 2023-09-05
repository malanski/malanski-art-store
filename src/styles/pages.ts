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
    margin: 3.2rem 0;
    display: flex;
    align-items: center;
    transition: all ease-in-out 800ms;
    text-align: center;
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 74rem) {
    h2 {
      margin: 3.2rem 8rem;
    }
  }
  @media (max-width: 48rem) {
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
  margin: 3.2rem 0;
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
    color: ${(props) => props.theme.product.yellow};
  }
  a:active {
    background: ${(props) => props.theme.base['base-card']};
    color: ${(props) => props.theme.product.yellow};
  }
  @media (max-width: 740px) {
    flex-wrap: wrap;
    margin: 3.2rem 8rem;
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
  @media (max-width: 74rem) {
    justify-content: space-around;
  }
  @media (max-width: 48rem) {
    /* margin: 0 2rem; */
    /* flex-wrap: wrap; */
  }
`
