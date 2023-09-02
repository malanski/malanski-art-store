import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.2rem 16rem;
  img {
    width: 47.6rem;
    height: 36.0rem;
  }
  @media (max-width: 76.0rem) {
    flex-direction: column-reverse;
    img {
      width: 90vw;
      height: auto;
    }
  }
`

export const IntroTitles = styled.div`
  gap: 1.6rem;
  width: 58.8rem;
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
  background: string; // add props type for icon background
}
export const IconBadge = styled.div<IconBadgeProps>`
  display: flex;
  gap: 0.8rem;
  width: 49%;
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
`
