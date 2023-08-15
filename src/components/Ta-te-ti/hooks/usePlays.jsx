import { useEffect, useState } from "react"
import { checkWinner } from "../Helpers/CheckWinner"
import confetti from "canvas-confetti"

export const usePlays = (setWinner, winner, handleTurn, turn) => {
    const initialPlays = Array(9).fill(null)
    const [plays, setPlays] = useState(initialPlays)
    const handlePlay = (index) => {
        if (plays[index] || winner) return
        const newPlays = [...plays]
        newPlays[index] = turn
        setPlays(newPlays)
        handleTurn()
    }
    const resetPlays = () => {
        setPlays(initialPlays)
    }
    useEffect(() => {
        const newWinner = checkWinner(plays)
        if (newWinner) {
            confetti()
            setWinner(newWinner)
        }
    }, [plays])
    return [plays, handlePlay, resetPlays]
}