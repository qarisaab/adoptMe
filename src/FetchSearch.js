async function FetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];

  const res = await fetch(
    `https://pets-v2.dev-apis.com/pets?animal=${animal}&breed=${breed}&location=${location}`,
  );

  if (!res.ok) {
    throw new Error(`pets not found try again`);
  }

  return res.json();
}

export default FetchSearch;
