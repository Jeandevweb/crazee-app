import styled from "styled-components"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"
import { theme } from "@/theme/theme"
import Header from "@/components/reusable-ui/Header"
import { useOrderContext } from "@/context/OrderContext"
import { isEmpty } from "@/utils/array"

export default function BasketFooter() {
  const { basket, clearBasket } = useOrderContext()
  const { username } = useParams()

  const basketIsEmpty = isEmpty(basket)

  const handleValidateOrder = () => {
    if (!username || basketIsEmpty) return
    toast.success("Commande validée 🎉", {
      theme: "dark",
      position: "bottom-right",
      autoClose: 4000,
    })
    clearBasket(username)
  }

  const handleClearBasket = () => {
    if (username) clearBasket(username)
  }

  return (
    <Header>
      <BasketFooterStyled>
        <button
          type="button"
          className="clear-button"
          onClick={handleClearBasket}
          disabled={basketIsEmpty}
        >
          Vider
        </button>
        <button
          type="button"
          className="validate-button"
          onClick={handleValidateOrder}
          disabled={basketIsEmpty}
        >
          Valider ma commande
        </button>
      </BasketFooterStyled>
    </Header>
  )
}

const BasketFooterStyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};

  button {
    cursor: pointer;
    border: none;
    border-radius: ${theme.borderRadius.round};
    font-family: ${theme.fonts.family.openSans};
    font-weight: ${theme.fonts.weights.bold};
    transition: filter 200ms ease;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      filter: brightness(1.1);
    }
  }

  .clear-button {
    padding: 10px 16px;
    background: transparent;
    border: 1px solid ${theme.colors.greyDark};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.XS};
  }

  .validate-button {
    flex: 1;
    padding: 12px 16px;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P0};
  }
`
