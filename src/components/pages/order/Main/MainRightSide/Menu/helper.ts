import { MenuProduct } from "@/types/Product"

export const checkIfProductIsClicked = (
  idProductInMenu: string,
  idProductClickedOn: string
): boolean => {
  return idProductInMenu === idProductClickedOn
}

export type SortOption = "default" | "price-asc" | "price-desc" | "name"

export const SORT_OPTIONS = [
  { optionValue: "default", label: "Trier : par défaut" },
  { optionValue: "price-asc", label: "Prix croissant" },
  { optionValue: "price-desc", label: "Prix décroissant" },
  { optionValue: "name", label: "Nom (A → Z)" },
]

// Renvoie une copie triée : on ne mute jamais le menu (state).
export const sortMenu = (menu: MenuProduct[], sortOption: SortOption): MenuProduct[] => {
  const menuCopy = [...menu]
  switch (sortOption) {
    case "price-asc":
      return menuCopy.sort((a, b) => Number(a.price) - Number(b.price))
    case "price-desc":
      return menuCopy.sort((a, b) => Number(b.price) - Number(a.price))
    case "name":
      return menuCopy.sort((a, b) => a.title.localeCompare(b.title))
    default:
      return menuCopy
  }
}
