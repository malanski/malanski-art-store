import styled from 'styled-components'

export const FooterStyle = styled.footer`
  width: 100%;
  margin-top: 32px;
  border-radius: 8px;
  padding: 20px 1rem;
  background: ${(props) => props.theme.base.bgClear};
`
export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 1.2rem;

  a {
    font-size: 1.4rem;
    border-radius: 0.6rem;
    transition: ease-out 800ms;
    text-transform: uppercase;
    font-weight: 600;
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.4rem;
    min-width: calc(140px - 1rem);
    max-width: calc(25.6rem - 1rem);
    border: 1px solid ${(props) => props.theme.base['base-title']};
    text-decoration: none;
    padding: 0.8rem 1rem;
    color: ${(props) => props.theme.base['base-title']};
  }

  @media (max-width: 798px) {
    padding: 10px;
    a {
      min-width: 50px;
      padding: 0.4rem 0.1rem;
      justify-content: center;

      margin: auto;
    }
    p {
      display: none;
    }
  }
  @media (max-width: 478px) {
    margin: 0;
    a {
      /* border: none; */
      justify-content: center;
    }
    p {
      font-size: 12px;
      margin-top: 0;
    }
  }
`
