export function addDataToTable(data) {
  return {
    type: "ADD_DATA_TO_TABLE",
    payload: {
      data,
    },
  };
}

export function removeDataToTable(data) {
  return {
    type: "REMOVE_DATA_TO_TABLE",
    payload: {
      data,
    },
  };
}
