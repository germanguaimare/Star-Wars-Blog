const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
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
          terrain: "Receiving info"
        },
        favorites: [],
      },
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
    },
  };
};

export default getState;
