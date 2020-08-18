import { ShopActionTypes } from "./shop.types";

export const updateCollections = (data) => {
  return {
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: data,
  };
};
