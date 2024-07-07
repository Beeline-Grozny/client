import cls from './CarStreamPage.module.scss';
import { Button, Input, Text } from '@shared/ui';
import { BorderEnum, classNames, ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import React, { useEffect, useState } from 'react';
import { StreamNotificationList } from '@entities/stream';
import { Select } from '@shared/ui/Select';
import { useGetCameras } from '@entities/number';

const socketUrl = 'ws://hackgr2.k-lab.su/camera_api/ws/';

export const CarStreamPage = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string>('');
    const data = useGetCameras();
    useEffect(() => {
        if (data) {
            setImageUrl(`${socketUrl}${data[0].id}`);
        }
    }, [data]);
    useEffect(() => {
       if (imageUrl) {
           const socket = new WebSocket(imageUrl);

           socket.onopen = () => {
               console.log('Connected to socket server');
           };

           socket.onmessage = (event) => {
               const blob = new Blob([event.data], { type: 'image/jpeg' });
               const imageUrl = URL.createObjectURL(blob);
               console.log(event);
               setImageSrc(imageUrl);
           };

           socket.onclose = () => {
               console.log('Disconnected from socket server');
           };

           return () => {
               socket.close();
           };
       }
    }, [imageUrl]);


    return (
        <div className={cls.wrapper}>
            <div className={cls.body}>
                <div className={cls.bodyWrapper}>
                    <div className={cls.title}>
                        <Text.Heading
                            size={SizeEnum.H4}
                            weight={WeightEnum.MEDIUM}
                            color={ColorEnum.TEXT}
                        >
                            Камеры в реальном времени
                        </Text.Heading>
                    </div>
                    <img src={imageSrc} alt="Камера не найдена" />
                </div>
            </div>
            <div className={cls.notification}>
                <Text.Heading
                    size={SizeEnum.H4}
                    weight={WeightEnum.MEDIUM}
                    color={ColorEnum.TEXT}
                >
                    Номера
                </Text.Heading>
                {/*<StreamNotificationList />*/}
            </div>
        </div>
    );
};
