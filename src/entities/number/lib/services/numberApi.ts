import { mainApi } from '@store/api';
import { INumberData } from '@entities/number';

export const numberApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        getCameras: builder.query<INumberData[], null>({
            query: () => ({
                url: `/camera_api/get_cameras`,
                method: 'GET',
            }),
        }),
    }),
});
export const { useGetCamerasQuery } = numberApi;