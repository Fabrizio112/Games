import { Link } from "react-router-dom";
function Home() {
    return (<section className="home">
        <h1>Fabri Games</h1>
        <p>Select the game that you want to play </p>
        <span>Have Fun !!!</span>
        <div className="button-container">
            <Link className="btn-link" to="/ta-te-ti">Ta-Te-Ti</Link>
            <Link className="btn-link" to="/memory-test">Memory Test</Link>
            <Link className="btn-link" to="/simon-dice">Simon Dice</Link>
        </div>
    </section>);
}

export default Home;