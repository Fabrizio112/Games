function ModalFinish({ resetGame, turn }) {
    return (<section className="modal-memory">
        <section className="modal-card-memory">
            <h1>Congratulations</h1>
            <span>You finish the game in {turn} turns</span>
            <button onClick={resetGame}>Play Again</button>
        </section>
    </section>);
}

export default ModalFinish;