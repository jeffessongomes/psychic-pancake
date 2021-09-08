export function addProductToOrder(product) {
  return {
    type: "ADD_PRODUCT_TO_ORDER",
    payload: {
      product,
    },
  };
}

export function addProductToOrderAfterConfirm(product) {
  return {
    type: "ADD_PRODUCT_TO_ORDER_AFTER_CONFIRM",
    payload: {
      product,
    },
  };
}

export function removeProductToOrder(product) {
  return {
    type: "REMOVE_PRODUCT_TO_ORDER",
    payload: {
      product,
    },
  };
}

export function removeAllProductToOrder(product) {
  return {
    type: "REMOVE_ALL_PRODUCT_TO_ORDER",
    payload: {
      product,
    },
  };
}
