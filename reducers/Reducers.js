console.clear();

// People dropping off a form (Action Creators)
const createPolicy = (name, amount) => {
  return { // Action
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
};

// Reducers (Departments)
const claimHistory = (oldListOfClaims = [] , action) => {
  if (action.type === 'CREATE_CLAIM') {
    // we care about this action (FORM!)
    return [...oldListOfClaims, action.payload];
  }
  // we dont care the action (FORM!)
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100 , action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
  
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action ) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  
  return listOfPolicies;
};

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimHistory: claimHistory,
  policies: policies
});

const store = createStore(ourDepartments);

store.dispatch(createPolicy('Gustavo', 20));
store.dispatch(createPolicy('Pedro', 40));
store.dispatch(createPolicy('João', 50));

store.dispatch(createClaim('Gustavo', 100));
store.dispatch(createClaim('Pedro', 50));

store.dispatch(deletePolicy('João'))

console.log(store.getState());