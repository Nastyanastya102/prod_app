import { DeepPartial } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface IStoreProviderProps {
  children?: React.ReactNode
  initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = ({ children, initialState }: IStoreProviderProps) => {
    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
