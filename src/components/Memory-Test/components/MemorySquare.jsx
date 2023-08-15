function MemorySquare({ color, selectCard }) {
    return (<input color={color} className={`square-memory  ${color} disabled`} onClick={selectCard} />);
}

export default MemorySquare;