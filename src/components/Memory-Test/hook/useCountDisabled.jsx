import confetti from "canvas-confetti"
import { useEffect, useState } from "react"

export const useCountDisabled = (endGame) => {
    const [countDisabled, setCountDisabled] = useState(0)
    const incrementCount = (num) => {
        setCountDisabled(countDisabled + num)
    }
    const resetCount = () => {
        setCountDisabled(0)
    }
    useEffect(() => {
        if (countDisabled === 12) {
            endGame()
            confetti()
        }
    }, [countDisabled])

    return [incrementCount, resetCount]
}