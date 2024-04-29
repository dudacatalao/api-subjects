import './card.css'; 

function CardMateria(props) {
  return (
    <div className="card">
      <div className="front-content">
        <p>{props.título}</p>
      </div>
      <div className="content">
        <p className="heading">{props.local}</p>
        <p>{props.responsável}</p>
        <p>{props.semestre}</p>
        <p>{props.turma}</p>
      </div>
    </div>
  );
}