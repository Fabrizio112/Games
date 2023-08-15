import { forwardRef } from "react";

const SimonSquare = forwardRef(({ jugadaDelUsuario, id, }, ref) => (
    <section ref={ref} onClick={() => jugadaDelUsuario(id)} className="simon-square">
    </section >
));

export default SimonSquare;