import React from "react";

// const Pet = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Luna"),
//     React.createElement("h2", {}, "Dog"),
//     React.createElement("h2", {}, "Havanese"),
//   ]);
// };

const Pet = ({ images, id, location, name, animal, breed }) => {
  let hero = "https://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    <a href={`details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed}- {location}
        </h2>
      </div>
    </a>
  );
};

export default Pet;
