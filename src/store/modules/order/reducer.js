import produce from "immer";

const INITIAL_STATE = {
  items: [],
};

const order = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_PRODUCT_TO_ORDER": {
        const { product } = action.payload;

        product.forEach((itemInProduct) => {
          const productInStateIndex = draft.items.findIndex(
            (itemInState) => itemInState.id === itemInProduct.id
          );

          if (productInStateIndex !== -1) {
            draft.items[productInStateIndex].quantity += itemInProduct.quantity;
          } else {
            draft.items.push(itemInProduct);
          }
        });

        break;
      }
      case "ADD_PRODUCT_TO_ORDER_AFTER_CONFIRM": {
        const { product } = action.payload;

        product.forEach((itemInProduct) => {
          const productInStateIndex = draft.items.findIndex(
            (itemInState) => itemInState.id === itemInProduct.id
          );

          if (productInStateIndex !== -1) {
            draft.items[productInStateIndex].quantity += 1;
          } else {
            draft.items.push(itemInProduct);
          }
        });

        break;
      }

      case "REMOVE_PRODUCT_TO_ORDER": {
        const { product } = action.payload;

        product.forEach((itemInProduct) => {
          const productInStateIndex = draft.items.findIndex(
            (itemInState) => itemInState.id === itemInProduct.id
          );

          if (productInStateIndex !== -1) {
            if (draft.items[productInStateIndex].quantity > 0) {
              draft.items[productInStateIndex].quantity -= 1;
            }
          }
        });

        break;
      }

      case "REMOVE_ALL_PRODUCT_TO_ORDER": {
        draft.items = [];

        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default order;
