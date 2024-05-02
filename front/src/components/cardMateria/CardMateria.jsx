/* eslint-disable react/prop-types */
import './card.css'; 

export default function CardMateria({ titulo, local, responsavel, semestre, turma }) {
  return (
    <div className="card">
      <div className="front-content">
        <p>{titulo}</p>
      </div>
      <div className="content">
        <p className="heading">Local: {local}</p>
        <p>Responsável: {responsavel}</p>
        <p>Semestre: {semestre}</p>
        <p>Turma: {turma}</p>
      </div>
    </div>
  );
}
