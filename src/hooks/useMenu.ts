import { useState } from "react"
import { fakeMenu } from "@/fakeData/fakeMenu"
import { deepClone, findIndexById, removeObjectById } from "@/utils/array"
import { syncBothMenus } from "@/api/product"
import { MenuProduct } from "@/types/Product"

export const useMenu = () => {
  const [menu, setMenu] = useState<MenuProduct[] | undefined>(undefined)

  // Met à jour le state local et persiste le menu — toujours les deux ensemble,
  // pour que l'affichage et le stockage ne divergent jamais.
  const commitMenu = (menuUpdated: MenuProduct[], username: string) => {
    setMenu(menuUpdated)
    syncBothMenus(username, menuUpdated)
  }

  const handleAdd = (newProduct: MenuProduct, username: string) => {
    if (!menu) return
    commitMenu([newProduct, ...menu], username)
  }

  const handleDelete = (idOfProductToDelete: string, username: string) => {
    if (!menu) return
    commitMenu(removeObjectById(idOfProductToDelete, menu), username)
  }

  const handleEdit = (productBeingEdited: MenuProduct, username: string) => {
    if (!menu) return
    const menuCopy = deepClone(menu)
    const indexOfProductToEdit = findIndexById(productBeingEdited.id, menuCopy)
    menuCopy[indexOfProductToEdit] = productBeingEdited
    commitMenu(menuCopy, username)
  }

  const resetMenu = (username: string) => {
    commitMenu(fakeMenu.LARGE, username)
  }

  return { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu }
}
