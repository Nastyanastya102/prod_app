import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginLoadingState = (state: StateSchema) => state?.loginForm?.isLoading;
