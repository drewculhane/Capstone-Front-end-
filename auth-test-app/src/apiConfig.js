let dreamwayApi;

const dreamwayApis = {
  production: "https://test-dreamway-1234.herokuapp.com/",
  // development: "http://localhost:3001/",
};

// const ideasApis = {
//   production: "https://ancient-beyond-04234.herokuapp.com/ideas",
//   development: "http://localhost:4000/ideas",
// };

  // if (window.location.hostname === "localhost") {
  //    dreamwayApi = dreamwayApis.development;
  //    } else {
     dreamwayApi = dreamwayApis.production;
//  }
//can't do default exports when you need to export more than one
//changed to named exports

export { dreamwayApi }; 