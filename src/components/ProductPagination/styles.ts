import styled from 'styled-components'

export const ProductListPagination = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  text-transform: uppercase;
  margin: 3.2rem 0 8rem 0;
  padding: 2rem;
  background: ${(props) => props.theme.base.bgClear};
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  li {
    min-width: 16%;
    padding: 1rem 2rem;
    text-align: center;
    &:hover {
      background: ${(props) => props.theme.base.transparentBg};
    }
  }
  a {
    text-decoration: none;
    font-size: 2rem;
    color: ${(props) => props.theme.product['yellow-light']};
  }
`
