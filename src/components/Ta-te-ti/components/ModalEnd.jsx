import ResetGame from "./ResetGame";
import Square from "./Square";

function ModalEnd({ winner, resetGame }) {
    return (<section className="modal-tateti">
        <div className="card-modal-tateti">
            {winner != "Empate" && <h2>Ganador :</h2>}
            {winner === "Empate" ? <span className="tie">{winner}</span> : <Square jugada={winner} />}
            {winner != "Empate" && <p>Felicitaciones</p>}
            <ResetGame resetGame={resetGame} />
        </div>

    </section>);
}

export default ModalEnd;