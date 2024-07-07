import { useGetCamerasQuery } from '@entities/number';

export const useGetCameras = () => {
    const { data } = useGetCamerasQuery(null);
    return data;
};