import styled from 'styled-components'

export const IntroContainer = styled.div`
  max-width: 112rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 3.2rem 16rem; */
  img {
    max-width: 35vw;
    height: auto;
  }
  @media (max-width: 74.0rem) {
    flex-direction: column-reverse;

    img {
      max-width: 70vw;
      height: auto;
    }
  }
`
export const TitlesContainer = styled.div`
  @media (max-width: 66.0rem) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    padding: 0 8rem;
    margin: 0 auto;
    @media (max-width: 48.0rem)  {
      padding: 0 4rem;

    }
  }
`
export const IntroTitles = styled.div`
  gap: 1.6rem;
  max-width: 58.8rem;
  margin-bottom: 6.6rem;
  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 4.8rem; 
    font-weight: 800; 
    color: ${(props) => props.theme.base['base-title']};
  }
  
  h4 {
    font-family: Roboto;
    font-size: 2.0rem;
    font-weight: 400;  
    color: ${(props) => props.theme.base['base-subtitle']};
  }
  @media (max-width: 48.0rem) {
    gap: 0.8rem;
    h2 {
      font-size: 2.8rem;
    }
  }
  @media (max-width: 593px) {
    h2 {
      font-size: 2.2rem;
    }
    h4 {
      font-size: 1.6rem;
    }
  }
`

export const Badges = styled.div`
  /* width: 56.7rem; */
  /* height: 8.4rem; */
  display: flex;
  flex-shrink: 0; 
  flex-wrap: wrap;
  gap: 0.8rem;
  

`
interface IconBadgeProps {
  background: string; 
}
export const IconBadge = styled.div<IconBadgeProps>`
  display: flex;
  gap: 0.8rem;
  max-width: 49%;
  align-items: center; 
  svg {
    border-radius: 50%;
    background: ${(props) => props.background};
    color: ${(props) => props.theme.base['white']};
    padding: 0.8rem 0.8rem;
    width: 3.2rem;
    height: 3.2rem;
  }
  span {
    color: ${(props) => props.theme.base['base-text']};
    font-family: Roboto;
    font-size: 1.6rem;
    }
    @media (max-width: 48.0rem) {
    max-width: 80vw;

    }
`
