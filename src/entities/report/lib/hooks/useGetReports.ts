import { useGetReportsQuery } from '@entities/report';

export const useGetReports = () => {
    const { data } = useGetReportsQuery(null);
    return data;
};