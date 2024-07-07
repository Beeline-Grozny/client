import { useGetViolationsQuery } from '@entities/report';

export const useGetViolations = () => {
    const { data } = useGetViolationsQuery(null);
    return data;
};