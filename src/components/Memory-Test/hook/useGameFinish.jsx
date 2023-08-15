import confetti from "canvas-confetti"
import { useState } from "react"

export const useGameFinish = () => {
    const [gameFinish, setGameFinish] = useState(false)
    const endGame = () => {
        setGameFinish(true)
    }
    const resetGameFinish = () => {
        setGameFinish(false)
    }
    return [endGame, resetGameFinish, gameFinish]
}