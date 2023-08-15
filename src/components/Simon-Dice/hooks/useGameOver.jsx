import { useState } from "react"

export const useGameOver = () => {
    const [gameOver, setGameOver] = useState(false)
    const changeGameOver = () => {
        setGameOver(true)
    }
    const resetGameOver = () => {
        setGameOver(false)
    }
    return [changeGameOver, gameOver, resetGameOver]
}