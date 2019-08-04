export const objectUpdate = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues,
  }
};