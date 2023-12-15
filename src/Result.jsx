import Pet from "./Pet";

const Result = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            key={pet.id}
            breed={pet.breed}
            animal={pet.animal}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
          />
        ))
      )}
    </div>
  );
};

export default Result;
