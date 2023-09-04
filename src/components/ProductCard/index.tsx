import { useTheme } from "styled-components";
import { ProductCardStyle, ProductInfo, OptionsStyle, BuyActions, BuyButton } from "./styles";

import { ShoppingCart } from "phosphor-react";

export function ProductCard() {
  const theme = useTheme()

  return (
    <div>
      {currentDataSource.data.map((product, index) => (
        <ProductCardStyle key={index}>
          <img src={`${product.iconSrc}`}></img>
          <ProductInfo>
            <OptionsStyle>
              {product.options.map((option, index) => (
                <button key={index}>{option}</button>
              ))}
            </OptionsStyle>
            <h3>{product.name}</h3>
            <h4>{product.description}</h4>
          </ProductInfo>
          <BuyActions>
            <h6 title="Preço atual">
              R$ <span>{product.price}</span>
            </h6>
            <BuyButton
              title="Comprar"
              background={theme.product['purple-dark']}>
              <button>
                <ShoppingCart size={22} weight="fill" />
              </button>
            </BuyButton>
          </BuyActions>
        </ProductCardStyle>
      ))
      }
    </div>

  )
}