import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';
import { getProfileData } from '../../selectors/getProfileData/getProfileData';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
    >(
        'profile/updateProfileData',
        async (_, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;
            const formData = getProfileData(getState());

            try {
                const response = await extra.api.put<Profile>('/profile', formData);

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
