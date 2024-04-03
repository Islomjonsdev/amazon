const initialCart = {
  cart: [],
};

const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case "at_to_cart":
      return {
        cart: [...state.cart, action.data],
      };
    case "remove_product":
      if (action.data) {
        state.cart.splice(state.cart.indexOf(action.data), 1);
      }
      return {
        cart: [...state.cart],
      };
    case "increment":
      state.cart.map((product) => {
        return product.id === action.data.id
          ? product.count + (product.count < 10 ? 1 : 0)
          : product.count;
      });
      return {
        cart: [...state.cart],
      };
    case "decrement":
      state.cart.map((item) => {
        return item.id === action.data.id
          ? item.count + (item.count < 1 ? 1 : 0)
          : item.count;
      });
      return {
          cart: [...state.cart]
      }
      default:
          return state
  }
};

export { cartReducer };
