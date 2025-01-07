import AsyncStorage from "@react-native-async-storage/async-storage"

const LINKS_STORE_KEY = "savelink-app@links"

export type LinkStorage = {
  id: string
  name: string
  url: string	
  category: string
}

async function get(): Promise<LinkStorage[]> {
  try {
    const storage = await AsyncStorage.getItem(LINKS_STORE_KEY)
    const response = storage ? JSON.parse(storage) : []

    return response
  } catch (error) {
    throw error
  }
}

async function save(newLink: LinkStorage) {
  try {
    const storage = await get()
    const updatedLinks = JSON.stringify([...storage, newLink])

    await AsyncStorage.setItem(LINKS_STORE_KEY, updatedLinks)
  } catch (error) {
    throw error
  }
}

export const linkStorage = { get, save }