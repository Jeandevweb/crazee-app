import { BasketProductQuantity, MenuProduct } from "@/types/Product"
import { authenticateUser } from "@/api/user"
import { getLocalStorage } from "@/utils/window"

// On passe par authenticateUser (et non une simple lecture) pour couvrir l'accès
// direct à /order/:username sans être passé par le login : l'utilisateur est
// alors créé à la volée, ce qui évite un Loader bloqué indéfiniment.
const initialiseMenu = async (
  username: string,
  setMenu: React.Dispatch<React.SetStateAction<MenuProduct[] | undefined>>
) => {
  const user = await authenticateUser(username)
  setMenu(user.menu)
}

const initialiseBasket = (
  username: string,
  setBasket: React.Dispatch<React.SetStateAction<BasketProductQuantity[]>>
) => {
  const basketReceived = getLocalStorage(username) // localStorage est synchrone : pas de "await".
  if (basketReceived) setBasket(basketReceived as BasketProductQuantity[])
}

export const initialiseUserSession = async (
  username: string,
  setMenu: React.Dispatch<React.SetStateAction<MenuProduct[] | undefined>>,
  setBasket: React.Dispatch<React.SetStateAction<BasketProductQuantity[]>>
) => {
  await initialiseMenu(username, setMenu)
  initialiseBasket(username, setBasket)
}
