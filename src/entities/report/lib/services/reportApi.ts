import { mainApi } from '@store/api';
import { IReport, IViolations } from '@entities/report';

export const reportApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        getReports: builder.query<IReport[], null>({
            query: () => ({
                url: `/camera_api/get_reports/`,
                method: 'GET',
            }),
        }),
        getViolations: builder.query<IViolations[], null>({
            query: () => ({
                url: `/camera_api/get_incidents/`,
                method: 'GET',
            }),
        }),
    }),
});
export const { useGetReportsQuery, useGetViolationsQuery } = reportApi;