import { TURNS } from "../Helpers/Constants";

function TurnsContainer({ turn }) {
    return (<section className="turns-container-tateti">
        <div className={turn === TURNS.X ? "active" : ""}>
            {TURNS.X}
        </div>
        <div className={turn === TURNS.O ? "active" : ""}>
            {TURNS.O}
        </div>
    </section>);
}

export default TurnsContainer;