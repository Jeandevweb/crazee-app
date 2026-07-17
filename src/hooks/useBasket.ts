import { useState } from "react"
import { deepClone, findObjectById, findIndexById, removeObjectById } from "@/utils/array"
import { setLocalStorage } from "@/utils/window"
import { BasketProductQuantity } from "@/types/Product"

export const useBasket = () => {
  const [basket, setBasket] = useState<BasketProductQuantity[]>([])

  // Met à jour le state local et persiste le panier — toujours les deux ensemble.
  const persistBasket = (basketUpdated: BasketProductQuantity[], username: string) => {
    setBasket(basketUpdated)
    setLocalStorage(username, basketUpdated)
  }

  const handleAddToBasket = (idProductToAdd: string, username: string) => {
    const basketCopy = deepClone(basket)
    const productAlreadyInBasket = findObjectById(idProductToAdd, basketCopy)

    if (productAlreadyInBasket) {
      const indexToIncrement = findIndexById(idProductToAdd, basketCopy)
      basketCopy[indexToIncrement].quantity += 1
      persistBasket(basketCopy, username)
      return
    }

    // On ne recrée pas le produit entier : seule l'info propre au panier (id + quantité).
    const newBasketProduct = { id: idProductToAdd, quantity: 1 }
    persistBasket([newBasketProduct, ...basketCopy], username)
  }

  const handleDeleteBasketProduct = (idBasketProduct: string, username: string) => {
    persistBasket(removeObjectById(idBasketProduct, basket), username)
  }

  return { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct }
}
