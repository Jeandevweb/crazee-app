import { MenuProduct } from "@/types/Product"
import { replaceFrenchCommaWithDot } from "@/utils/maths"

// Valide le produit avant ajout au menu.
// Renvoie un message d'erreur à afficher, ou null si tout est valide.
export const validateNewProduct = (product: MenuProduct): string | null => {
  if (!product.title || product.title.trim() === "") {
    return "Le nom du produit est obligatoire."
  }

  const price = replaceFrenchCommaWithDot(product.price)
  if (isNaN(price) || price <= 0) {
    return "Le prix doit être un nombre supérieur à 0."
  }

  return null
}
