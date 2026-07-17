import styled from "styled-components"
import { theme } from "@/theme/theme"
import Main from "./Main/Main"
import Navbar from "./Navbar/Navbar"
import { initialiseUserSession } from "./helpers/initialiseUserSession"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useOrderContext } from "@/context/OrderContext"

export default function OrderPage() {
  const { username } = useParams()
  const { setMenu, setBasket } = useOrderContext()

  // Charge le menu et le panier de l'utilisateur au montage, et à chaque
  // changement de username (accès à un autre espace via l'URL).
  useEffect(() => {
    if (username) initialiseUserSession(username, setMenu, setBasket)
  }, [username, setMenu, setBasket])

  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar />
        <Main />
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`
