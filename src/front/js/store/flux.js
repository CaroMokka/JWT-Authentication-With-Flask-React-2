const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
    },
    actions: {
      //Fetch POST usuario ------------------------>>>>>>>>>>>>>>>>>>>>>
      setRegistro: (registro) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(registro);

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          "https://3001-4geeksacademy-reactflask-j7ddulb4pgy.ws-us30.gitpod.io/api/registro",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },
	  setLogin: () => {}
    },
  };
};

export default getState;
