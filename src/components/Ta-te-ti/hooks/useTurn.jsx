import { useState } from "react"
import { TURNS } from "../Helpers/Constants"

export const useTurn = () => {
    const [turn, setTurn] = useState(TURNS.X)
    const handleTurn = () => {
        turn == TURNS.X ? setTurn(TURNS.O) : setTurn(TURNS.X)
    }
    const resetTurn = () => {
        setTurn(TURNS.X)
    }
    return [turn, handleTurn, resetTurn]
}