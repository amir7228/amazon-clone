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
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};
export default reducer;
