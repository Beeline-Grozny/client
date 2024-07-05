import { ILoginRequest, setToken, useLoginMutation } from '@features/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch } from '@shared/lib';

export const useLogin = () => {
    const [loginTrigger, { data, isLoading, error }] = useLoginMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const trigger = async (data: ILoginRequest) => {
        try {
            await loginTrigger(data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        if (data) {
            const accessToken = data.accessToken.split(' ')[1];
            localStorage.setItem('accessToken', accessToken);
            dispatch(setToken(accessToken));
            toast.success('Вы успешно вошли');
            setTimeout(() => {
                navigate('/');
            }, 1500);
        }
        if (error) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            toast.error(error.data.message);
        }
    }, [data, error]);


    return { trigger, data, isLoading };
};