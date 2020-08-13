let dreamwayApi;

const dreamwayApis = {
//   production: "https://ancient-beyond-04234.herokuapp.com/users",
  development: "http://localhost:3001",
};

// const ideasApis = {
//   production: "https://ancient-beyond-04234.herokuapp.com/ideas",
//   development: "http://localhost:4000/ideas",
// };

// if (window.location.hostname === "localhost") {
//   usersApi = usersApis.development;
//   ideasApi = ideasApis.development;
// } else {
  dreamwayApi = dreamwayApis.development;
//   ideasApi = ideasApis.production;
// }
//can't do default exports when you need to export more than one
//changed to named exports

export { dreamwayApi };