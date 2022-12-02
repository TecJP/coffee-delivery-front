import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  padding: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InfoSection = styled.section`
  width: 50%;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    line-height: 130%;
    font-size: 3rem;
    color: ${(props) => props.theme['gray-900']};
  }

  > p {
    margin-top: 1rem;
    font-weight: 400;
    line-height: 130%;
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const AdvantagesSection = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  column-gap: 2.5rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
  }
`

const ADVANTAGES_COLORS = {
  yellow: 'yellow-500',
  gold: 'yellow-900',
  black: 'gray-900',
  purple: 'purple-500',
} as const

interface AdvantagesItemColor {
  itemColor: 'yellow' | 'gold' | 'black' | 'purple'
}

export const AdvantagesItem = styled.p<AdvantagesItemColor>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${(props) => props.theme['gray-700']};
  margin: 0;
  margin-top: 1.25rem;

  span {
    margin: 0;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 100%;
    background: ${(props) => props.theme[ADVANTAGES_COLORS[props.itemColor]]};
    color: ${(props) => props.theme.white};
  }
`

export const ImageSection = styled.section`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 85%;
    margin-right: 0;
  }
`
