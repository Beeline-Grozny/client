import { mainApi } from '@store/api';

export const carApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        getCars: builder.query({
            query: () => ({
                url: `/camera_api/get_cars`,
                method: 'GET',
            }),
        }),
        getCarById: builder.query({
            query: (id: string) => ({
                url: `/camera_api/get_cars_by_camera/${id}`,
                method: 'GET',
            }),
        }),
    }),
});
export const { useGetCarsQuery, useGetCarByIdQuery, useLazyGetCarByIdQuery } = carApi;