import './AnimalList.css';

export default function AnimalCard(props) {
  console.log(props.type);
  return (
    <section className='animal-card'>
      <img src={`/animals/${props.type}.svg`} />
      <p>{props.name}</p>
    </section>
  );
}