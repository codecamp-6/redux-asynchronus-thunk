export const saveData = (state) => {
  const serializeState = JSON.stringify(state);
  localStorage.setItem("store", serializeState);
};

export const loadData = () => {
  const serializeState = localStorage.getItem("store");
  if (serializeState) {
    const deserializeState = JSON.parse(serializeState);
    return deserializeState;
  } else {
    return undefined;
  }
};
