

export default function AnimalCard(props) {
  return (
    <section className='animal-card'>
      <img src={`./animals/${props.name}.png`} />
    </section>
  );
}