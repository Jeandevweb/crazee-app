import { User } from "@/types/User"
import { getLocalStorage, setLocalStorage } from "@/utils/window"

 

const USER_KEY_PREFIX = "crazee-burger:user:"

const buildUserKey = (username: string) => `${USER_KEY_PREFIX}${username}`

export const readUser = (username: string): User | undefined => {
  const storedUser = getLocalStorage(buildUserKey(username))
  return storedUser ? (storedUser as User) : undefined
}

export const writeUser = (user: User) => {
  setLocalStorage(buildUserKey(user.username), user)
}
