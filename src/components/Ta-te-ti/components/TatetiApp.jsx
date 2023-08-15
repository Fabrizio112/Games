import Square from "./Square";
import TurnsContainer from "./TurnsContainer";
import ModalEnd from "./ModalEnd";
import ResetGame from "./ResetGame";
import { usePlays } from "../hooks/usePlays";
import { useTurn } from "../hooks/useTurn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TatetiApp() {
    const navigate = useNavigate()
    const [winner, setWinner] = useState(null)
    const [turn, handleTurn, resetTurn] = useTurn()
    const [plays, handlePlay, resetPlays] = usePlays(setWinner, winner, handleTurn, turn)

    const resetGame = () => {
        resetPlays()
        resetTurn()
        setWinner(null)
    }

    return (<>
        <button onClick={() => navigate(-1)} className="btn-link">Back</button >
        <section className="game-tateti">
            <h1>TA-TE-TI</h1>
            <ResetGame resetGame={resetGame} />
            <section className="board-tateti">
                {plays.map((mark, index) => <Square key={index} posicion={index} jugada={mark} handlePlay={handlePlay} />)}
            </section>
            <TurnsContainer turn={turn} />
            {plays.every(el => el) && <ModalEnd winner="Empate" resetGame={resetGame} />}
            {winner && <ModalEnd winner={winner} resetGame={resetGame} />}
        </section>
    </>);
}

export default TatetiApp;