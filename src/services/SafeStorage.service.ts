import AsyncStorage from "@react-native-async-storage/async-storage"

export default class SafeStorage {
    static async get<T = any>(key: string) {
        const valueNotParsed = await AsyncStorage.getItem(key)
        if (valueNotParsed == null || valueNotParsed == undefined) return null

        return JSON.parse(valueNotParsed) as T
    }

    static async set(key: string, value: any) {
        return await AsyncStorage.setItem(key, JSON.stringify(value))
    }

    static async remove(key: string) {
        return await AsyncStorage.removeItem(key)
    }
}
