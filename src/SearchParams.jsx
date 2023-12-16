import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import FetchSearch from "./FetchSearch";
import useBreedList from "./useBreedList";
import Result from "./Result";
const ANIMALS = ["dog", "cat", "rabbit", "bird", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    breed: "",
    animal: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);

  const results = useQuery({
    queryKey: ["search", requestParams],
    queryFn: FetchSearch,
  });
  const pets = results?.data?.pets ?? [];
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            placeholder="location"
            name="location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => {
              return <option key={animal}>{animal}</option>;
            })}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select name="breed" id="breed" disabled={!breeds.length}>
            <option value=""></option>
            {breeds.map((b) => {
              return <option key={b}>{b}</option>;
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Result pets={pets} />
    </div>
  );
};

export default SearchParams;
