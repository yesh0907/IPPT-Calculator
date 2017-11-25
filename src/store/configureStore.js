import { createStore, compose } from 'redux';
import calculatorReducer from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(
    calculatorReducer,
    initialState,
    compose(
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
