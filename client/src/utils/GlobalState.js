import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
      products: [],
      cart: [],
      cartOpen: false,
      categories: [],
      currentCategory: ''
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
  };

  //Custom react hook
  const useStoreContext = () => {
    return useContext(StoreContext);
  };










export { StoreProvider, useStoreContext };

// createContext will be used to instantiate a new Context object. 
// useContext is another React Hook that will allow us to use the state created from the createContext function.

// 22.1.5 - Every Context object comes with two components, a Provider and Consumer
// The Provider is a special type of React component that we wrap our application...
// in so it can make the state data that's passed into it as a prop available to all other components. 

// state is the most up-to-date version of our global state object.
// dispatch is the method we execute to update our state. It is specifically...
// going to look for an action object passed in as its argument.

