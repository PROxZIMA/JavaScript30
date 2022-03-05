const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const search = document.getElementById('search');
const suggestions = document.getElementById('suggestions');

const getCities = async () => await fetch(endpoint)
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw Error("Something went wrong >-<")
    }
  })
  .catch(error => {
    return [{
      city: error.name,
      state: error.message,
      population: ''
    }];
  });

const main = async () => {
  let cities = await getCities();

  search.addEventListener('input', async e => {
    if (!cities[0]['population']) {
      cities = await getCities();
    }
    suggestions.replaceChildren([null]);
    const query = e.target.value.toUpperCase();

    cities.forEach(city => {
      let result = `${city["city"]}, ${city["state"]}`
      if (!result.toUpperCase().includes(query)) return;

      result = result.replaceAll(new RegExp(`(${query})`, 'gi'), `<span class="hl">$1</span>`);

      const li = document.createElement('li');
      li.innerHTML = `<span>${result}</span> <span class="population">${city["population"]}</span>`;
      suggestions.appendChild(li);
    });
  })
}

main();
