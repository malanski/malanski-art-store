import styled from 'styled-components'

export const ProductsListStyles = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  h2 {
    font-family: 'Baloo 2';
    /* max-width: 25.6rem; */
    margin: 3.2rem 0 3.2rem 0;

    font-size: 3.2rem;
    display: flex;
    align-items: center;
    transition: all ease-in-out 800ms;
    text-align: center;
    width: 100%;
    justify-content: center;
  }
  h4 {
    font-family: 'Baloo 2', cursive;

    font-size: 2.5rem;
    text-align: left;
    width: 100%;
  }

  @media (max-width: 740px) {
    h2 {
      /* margin: 8rem 8rem; */
    }
  }
  @media (max-width: 480px) {
    h2 {
      /* margin: 8rem 4rem; */
    }
  }
`

export const ProductsNav = styled.ul`
  display: flex;
  width: 100%;
  list-style-type: none;
  justify-content: center;
  margin-bottom: 8rem;
  background: ${(props) => props.theme.base.bgClear};
  align-items: center;
  li {
    /* width: 14%; */
    margin: 0 auto;
  }
  a {
    padding: 1rem;
    text-align: center;
    font-family: 'Baloo 2', cursive;
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
    flex-direction: row;
    margin: 5rem;
    gap: 0.8rem;
    li {
      width: 45%;
      text-align: center;
    }
    a {
      font-size: 1.9rem;
    }
  }
  @media (max-width: 650px) {
    a {
      font-size: 1.8rem;
      padding: 1rem 2rem;
    }
  }
`
export const ProductListContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 3.2rem;
  width: 100%;
  @media (max-width: 1290px) {
    justify-content: space-around;
    gap: 2.5rem;
  }
  @media (max-width: 900px) {
    gap: 1.5rem;
  }
  @media (max-width: 650px) {
    gap: 5rem;

    /* flex-wrap: wrap; */
  }
`
