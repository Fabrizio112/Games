import { useState } from "react"

export const useStartGame = () => {
    const [startGame, setStartGame] = useState(true)

    const startGameForUser = () => {
        setStartGame(false)
    }
    const resetStartGame = () => {
        setStartGame(true)
    }
    return [startGameForUser, startGame, resetStartGame]
}