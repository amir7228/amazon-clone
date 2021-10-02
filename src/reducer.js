export const initialState = {
  basket: [
    {
      id: "5426",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,",
      image: "https://m.media-amazon.com/images/I/31WGpGeu1QL.jpg",
      price: 59,
      rating: 4,
    },
    {
      id: "5426",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,",
      image: "https://m.media-amazon.com/images/I/31WGpGeu1QL.jpg",
      price: 59,
      rating: 4,
    },
  ],
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_BASKET":
      return state;

    default:
      return state;
  }
};
export default reducer;
