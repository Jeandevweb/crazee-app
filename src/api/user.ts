import { fakeMenu } from "@/fakeData/fakeMenu"
import { User } from "@/types/User"
import { readUser, writeUser } from "./storage"

export const getUser = async (userId: string): Promise<User | undefined> => {
  return readUser(userId)
}

export const createUser = async (userId: string): Promise<User> => {
  const newUser: User = {
    username: userId,
    menu: fakeMenu.DEFAULT,
  }
  writeUser(newUser)
  return newUser
}

 
export const authenticateUser = async (userId: string): Promise<User> => {
  const existingUser = await getUser(userId)
  return existingUser ?? createUser(userId)
}
