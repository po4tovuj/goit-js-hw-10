export const fetchCountries = name => {
  const countries = fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      return response.json();
    })
    .then(result => {
      if (result.status === 404) {
        throw new Error();
      }
      return result;
    })
    .catch(err => null);

  return countries;
};
