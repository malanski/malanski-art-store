import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  img {
    max-width: 35vw;
    height: auto;
    transition: 15s ease-out;
    &:hover {
      rotate: 1480deg;
      transition: 10s ease-in;
    }
  }
  @media (max-width: 80rem) {
    flex-direction: column-reverse;
    img {
      max-width: 70vw;
      height: auto;
    }
  }
`
export const TitlesContainer = styled.div`
  width: 60%;

  @media (max-width: 1050px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    /* padding: 0 2rem; */
    margin: 0 auto;
    width: 100%;
  }
`
export const IntroTitles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.6rem;
  /* max-width: 58.8rem; */
  margin: 0 0 6.6rem 0;
  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 4.8rem;
    font-weight: 800;
    color: ${(props) => props.theme.base['base-title']};
  }
  h4 {
    font-family: Roboto;
    font-size: 2rem;
    font-weight: 400;
    color: ${(props) => props.theme.base['base-subtitle']};
    width: 90%;
  }
  @media (max-width: 850px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h1 {
      font-size: 2.8rem;
    }
    h4 {
      width: 100%;
    }
  }
  @media (max-width: 48rem) {
    gap: 0.8rem;

    h1 {
      font-size: 2.8rem;
    }
  }
  @media (max-width: 593px) {
    h1 {
      font-size: 2.2rem;
    }
    h4 {
      font-size: 1.6rem;
    }
  }
`

export const Badges = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  gap: 0.8rem;
  /* max-width: 58.8rem; */
  @media (max-width: 1050px) {
    justify-content: space-between;
    width: 100%;
  }
  @media (max-width: 660px) {
    flex-wrap: wrap;
    gap: 0.2rem;
  }
`
interface IconBadgeProps {
  background: string
}
export const IconBadge = styled.div<IconBadgeProps>`
  display: flex;
  gap: 1.2rem;
  /* width: 29.4rem; */
  /* height: 4rem; */
  padding: 0.8rem;

  align-items: center;
  svg {
    border-radius: 50%;
    background: ${(props) => props.background};
    color: ${(props) => props.theme.base.white};
    padding: 0.8rem 0.8rem;
    width: 4rem;
    height: 4rem;
  }
  span {
    color: ${(props) => props.theme.base['base-text']};
    font-family: Roboto;
    font-size: 1.6rem;
  }
  @media (max-width: 660px) {
    gap: 0.6rem;
    padding: 0.4rem;
  }
`
