function ModalStart({ startGaming }) {
    return (<section className="modal-memory">
        <section className="modal-card-memory">
            <h1>Memory Test</h1>
            <p>Should find the couples of squares</p>
            <span>Are you ready?</span>
            <button onClick={startGaming}>Start</button>
        </section>
    </section>);
}

export default ModalStart;