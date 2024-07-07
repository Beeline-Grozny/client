import { useLazyGetCarByIdQuery } from '@entities/car';

export const useGetCarById = () => {
    const [dataTrigger, { data }] = useLazyGetCarByIdQuery();
    const trigger = async (id: string) => {
        await dataTrigger(id);
    };
    return { data, trigger };
};