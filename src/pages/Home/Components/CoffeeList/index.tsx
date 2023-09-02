import { BuyActions, BuyButton, CoffeeCard, CoffeeInfo, CoffeeListContainer, CoffeeListStyles, OptionsStyle } from "./style"
import CoffeeDataList from '../CoffeeDataList'
import { Minus, Plus, ShoppingCart } from "phosphor-react"
import { useTheme } from 'styled-components';

export function CoffeeList() {
  const theme = useTheme()

  return (
    <CoffeeListStyles>
      <h2>Nossos cafés</h2>
      <CoffeeListContainer>
        {CoffeeDataList.map((coffee, index) => (
          <CoffeeCard key={index}>
            <img src={`${coffee.iconSrc}`}></img>

            <CoffeeInfo>
              <OptionsStyle>
                {coffee.options.map((option, index) => (
                  <button key={index}>{option}</button>
                ))}
              </OptionsStyle>

              <h3>{coffee.name}</h3>
              <h4>{coffee.description}</h4>
            </CoffeeInfo>

            <BuyActions>
              <h6>R$ <span>9,90</span></h6>
              
              <button>
                <Minus size={14} ></Minus>
              </button>
              <span>1</span>
              <button>
                <Plus size={14} ></Plus>
              </button>

              <BuyButton background={theme.product['purple-dark']}>
                <ShoppingCart size={22} weight="fill" />
              </BuyButton>
            </BuyActions>
          </CoffeeCard>
        ))}
      </CoffeeListContainer>
    </CoffeeListStyles>
  )
}
