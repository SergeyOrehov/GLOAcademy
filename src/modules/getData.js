const getData = () => {
   return fetch("https://test-352ff-default-rtdb.firebaseio.com/goods.json").then((response) => {
      return response.json();
   });
};
export default getData;
