const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });

  /*
  fetchPromise.then((response) => {
    console.log(`Received response: ${response.status}`);
    const jsonPromise = response.json();
    jsonPromise.then((data) => {
      console.log(data);
    });
    console.log("Started request json...")
  }); 
  
  console.log("Started request…");*/