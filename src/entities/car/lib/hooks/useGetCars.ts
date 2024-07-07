import { useGetCarsQuery } from '@entities/car';

export const useGetCars = () => {
    const { data } = useGetCarsQuery(null);
    return data;
};