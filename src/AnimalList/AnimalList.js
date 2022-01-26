import './AnimalList.css';

export default function AnimalCard(props) {
  return (
    <section className='animal-card'>
      <img src={`/animals/${props.type}.svg`} />
      <h3>{props.name}</h3>
      <p>{props.says}</p>

    </section>
  );
}