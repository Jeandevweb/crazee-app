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
      incrementBasketProduct(idProductToAdd, username)
      return
    }

    // On ne recrée pas le produit entier : seule l'info propre au panier (id + quantité).
    const newBasketProduct = { id: idProductToAdd, quantity: 1 }
    persistBasket([newBasketProduct, ...basketCopy], username)
  }

  const incrementBasketProduct = (idBasketProduct: string, username: string) => {
    const basketCopy = deepClone(basket)
    const index = findIndexById(idBasketProduct, basketCopy)
    if (index === -1) return
    basketCopy[index].quantity += 1
    persistBasket(basketCopy, username)
  }

  // Décrémente la quantité ; retire la ligne quand elle tomberait à 0.
  const decrementBasketProduct = (idBasketProduct: string, username: string) => {
    const basketCopy = deepClone(basket)
    const index = findIndexById(idBasketProduct, basketCopy)
    if (index === -1) return

    if (basketCopy[index].quantity <= 1) {
      handleDeleteBasketProduct(idBasketProduct, username)
      return
    }
    basketCopy[index].quantity -= 1
    persistBasket(basketCopy, username)
  }

  const handleDeleteBasketProduct = (idBasketProduct: string, username: string) => {
    persistBasket(removeObjectById(idBasketProduct, basket), username)
  }

  const clearBasket = (username: string) => {
    persistBasket([], username)
  }

  return {
    basket,
    setBasket,
    handleAddToBasket,
    incrementBasketProduct,
    decrementBasketProduct,
    handleDeleteBasketProduct,
    clearBasket,
  }
}
