import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            id={pet.id}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            key={pet.key}
          />
          //   <Pet {...pets} key={pet.key} /> // usign extract operator, wich is no good
        ))
      )}
    </div>
  );
};

export default Results;
