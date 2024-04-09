import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from 'entities/Counter/model/slice/counterSlice';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginSchema: loginReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: __IS_DEV__,
  });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
