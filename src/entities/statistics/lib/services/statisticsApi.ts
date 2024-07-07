import { mainApi } from '@store/api';
import { ILineData, IPieData } from '@entities/statistics';

export const statisticsApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        getLine: builder.query<ILineData[], null>({
            query: () => ({
                url: `/camera_api/get_linear_graf`,
                method: 'GET',
            }),
        }),
        getPie: builder.query<IPieData[], null>({
            query: () => ({
                url: `/camera_api/get_round_graf/`,
                method: 'GET',
            }),
        }),
    }),
});
export const { useGetLineQuery, useGetPieQuery } = statisticsApi;