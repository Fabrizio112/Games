function Square({ handlePlay, posicion, jugada }) {
    return (<section className="square-tateti" onClick={() => handlePlay(posicion)}>
        <span>{jugada}</span>
    </section>);
}

export default Square;