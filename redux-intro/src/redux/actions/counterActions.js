import * as actionTypes from "./actionTypes";

//oluşturacağımız actionları yazıyoruz
export const increaseCounter = () => ({
  // fonksiyon oluşturuyoruz ve fonksiyonun değeride fonksiyondur.
  type: actionTypes.INCREASE_COUNTER,
  payload: 1, //data gibi burası
});

export const decreaseCounter = () => ({
  // fonksiyon oluşturuyoruz ve fonksiyonun değeride fonksiyondur.
  type: actionTypes.DECREASE_COUNTER,
  payload: 1, //data gibi burası
});

export const increaseByTwoCounter = () => ({
  type: actionTypes.INCREASE_COUNTER,
  payload: 2, //data gibi burası
});
