import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type Reducerslist = {
  [name in StateSchemaKey]?: Reducer
}
type ReducersListEntry = [StateSchemaKey, Reducer];

interface IDynamicModuleLoaderProps {
  reducers: Reducerslist
  children: any
  removeAfterUnmount?: boolean
}

const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = (props) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    const {
        children, reducers, removeAfterUnmount,
    } = props;
    useEffect(() => {
        Object.entries(reducers).forEach(([key, reducer]: ReducersListEntry) => {
            store.reducerManager.add(key, reducer);
            dispatch({ type: `@INIT: ${key} reducer` });
        });
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([key]: ReducersListEntry) => {
                    dispatch({ type: `@DESTROY: ${key} reducer` });
                    store.reducerManager.remove(key);
                });
            }
        };

        // eslint-disable-next-line
  }, []);

    return children;
};

export default DynamicModuleLoader;
