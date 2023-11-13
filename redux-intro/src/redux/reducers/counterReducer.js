import * as actionTypes from "../actions/actionTypes";

//redux oluşturma
/* paremetre: action= çağırdığımız actionu action içerip içermediğine bakıcak 
state:actiona göre state belirleme
let newState; //referans değiştircez ilk önce
*/
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return (state = state + action.payload);
    case actionTypes.DECREASE_COUNTER:
      return (state = state - action.payload);
    case actionTypes.INCREASE_BY_TWO_COUNTER:
      return (state = state + action.payload);
    default:
      return state;
  }
};

export default counterReducer;
