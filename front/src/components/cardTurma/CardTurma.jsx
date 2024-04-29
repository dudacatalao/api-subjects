import './card.css'; 

function CardTurma(props) {
  return (
    <div className="card">
      <div className="front-content">
        <p>{props.nome}</p>
      </div>
      <div className="content">
        <p>{props.semestre}</p>
      </div>
    </div>
  );
}