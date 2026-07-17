import { MenuProduct } from "@/types/Product"
import { writeUser } from "./storage"

 
export const syncBothMenus = (userId: string, menuUpdated: MenuProduct[]) => {
  writeUser({ username: userId, menu: menuUpdated })
}
