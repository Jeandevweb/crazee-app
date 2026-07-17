import styled from "styled-components"
import { useOrderContext } from "@/context/OrderContext"
import { theme } from "@/theme/theme"
import { formatPrice } from "@/utils/maths"
import Header from "@/components/reusable-ui/Header"
import { calculateSumToPay, calculateTotalItems } from "./helper"
import CasinoEffect from "@/components/reusable-ui/CasinoEffect"

export default function BasketHeader() {
  const { basket, menu } = useOrderContext()

  const sumToPay = calculateSumToPay(basket, menu)
  const totalItems = calculateTotalItems(basket)

  return (
    <Header>
      <BasketHeaderStyled>
        <div className="total-label">
          <span>Total</span>
          {totalItems > 0 && (
            <span className="items-badge">
              {totalItems} article{totalItems > 1 ? "s" : ""}
            </span>
          )}
        </div>
        <CasinoEffect count={formatPrice(sumToPay)} />
      </BasketHeaderStyled>
    </Header>
  )
}

const BasketHeaderStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.primary};
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;

  .total-label {
    display: flex;
    align-items: baseline;
    gap: ${theme.spacing.sm};
  }

  .items-badge {
    font-family: ${theme.fonts.family.openSans};
    font-size: ${theme.fonts.size.XS};
    font-weight: ${theme.fonts.weights.bold};
    letter-spacing: 0;
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.round};
    padding: 2px 10px;
  }
`
