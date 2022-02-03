const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
      baseUrl: "https://www.swapi.tech/api",
      activeItem: {
        properties: {
          name: "Receiving name",
          birth_year: "Receiving info",
          eye_color: "Receiving info",
          gender: "Receiving info",
          hair_color: "Receiving info",
          height: "Receiving info",
          climate: "Receiving info",
          diameter: "Receiving info",
          gravity: "Receiving info",
          orbital_period: "Receiving info",
          population: "Receiving info",
          rotation_period: "Receiving info",
          surface_water: "Receiving info",
          terrain: "Receiving info",
          cargo_capacity: "Receiving info",
          consumables: "Receiving info",
          cost_in_credits: "Receiving info",
          crew: "Receiving info",
          manufacturer: "Receiving info",
          max_atmosphering_speed: "Receiving info",
          model: "Receiving info",
          passengers: "Receiving info"
        }
      }
    },
    actions: {
      getCharacters: () => {
        const store = getStore();
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        fetch(store.baseUrl + "/people/", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            sessionStorage.setItem(
              "characters",
              JSON.stringify(result.results)
            );
          })
          .catch((error) => console.log("error", error));
      },
      getPlanets: () => {
        const store = getStore();
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        fetch(store.baseUrl + "/planets/", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            sessionStorage.setItem("planets", JSON.stringify(result.results));
          })
          .catch((error) => console.log("error", error));
      },
      getVehicles: () => {
        const store = getStore();
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        fetch(store.baseUrl + "/vehicles/", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            sessionStorage.setItem("vehicles", JSON.stringify(result.results));
          })
          .catch((error) => console.log("error", error));
      },
      getData: () => {
        const actions = getActions();
        actions.getCharacters();
        actions.getPlanets();
        actions.getVehicles();
      },
      getDetails: (fetchRoute) => {
        const store = getStore();
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        fetch(store.baseUrl + fetchRoute, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            setStore({ activeItem: result.result });
          })
          .catch((error) => console.log("error", error));
      },
      addFavorite: (index, type) => {
        const store = getStore();
        const characters = JSON.parse(sessionStorage.getItem('characters'))
        const planets = JSON.parse(sessionStorage.getItem('planets'))
        const vehicles = JSON.parse(sessionStorage.getItem('vehicles'))
        console.log(index, type)
        if (type == "people") {
            let urlType = {type: "people"}
            let newFavorite = characters[index]
            let obj = Object.assign(urlType, newFavorite)
            setStore(store.favorites.push(obj))
        }
        if (type == "planets") {
          let urlType = {type: "planets"}
          let newFavorite = planets[index]
          let obj = Object.assign(urlType, newFavorite)
          setStore(store.favorites.push(obj))
        }
        if (type == "vehicles") {
          let urlType = {type: "planets"}
          let newFavorite = vehicles[index]
          let obj = Object.assign(urlType, newFavorite)
          setStore(store.favorites.push(obj))
        }
      },
      deleteFavorite: (index) => {
        const store = getStore();
        store.favorites.splice(index,1);
      }
    },
  };
};

export default getState;
