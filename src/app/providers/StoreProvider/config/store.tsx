import {
  AnyAction,
  CombinedState,
  Reducer,
  ReducersMapObject,
  ThunkMiddleware,
  configureStore,
} from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { counterReducer } from 'entities/Counter/model/slice/counterSlice';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManagaer';
import { api } from 'shared/api/api';
import { NavigateFunction } from 'react-router-dom';
import { scrollReducer } from 'features/scrollRestoration';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: NavigateFunction
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    scroll: scrollReducer,
    ...asyncReducers,
  };

  const reducerManager = createReducerManager(rootReducer);

  const extraArg: ThunkExtraArg = {
    api,
  };

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    preloadedState: initialState,
    devTools: __IS_DEV__,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }) as unknown as [ThunkMiddleware<StateSchema, AnyAction, undefined>],
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
