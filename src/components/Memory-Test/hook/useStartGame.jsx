import { useState } from "react"

export const useStartGame = () => {
    const [startGame, setStartGame] = useState(true)
    const startGaming = () => {
        setStartGame(false)
    }
    return [startGaming, startGame]
}