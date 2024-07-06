import cls from './CarStreamPage.module.scss';
import { Button, Input, Text } from '@shared/ui';
import { BorderEnum, classNames, ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { useState } from 'react';
import { StreamNotificationList } from '@entities/stream';
import { Select } from '@shared/ui/Select';

export const CarStreamPage = () => {
    const [url, setUrl] = useState<string>('');
    const [cameraId, setCameraId] = useState<string>('');
    const [inputHide, setInputHide] = useState<boolean>(true);
    const [streamUrl, setStreamUrl] = useState<string>('http://hackgr2.k-lab.su/camera_api/stream_rtsp/11cf4653-c7bd-4de9-a205-b18774c48978'); // Новое состояние для URL стрима

    const list = [
        {
            label: 'Камера 1', value: '1',
        },
        {
            label: 'Камера 2', value: '2',
        },
        {
            label: 'Камера 3', value: '3',
        },
    ];

    const handleCameraSelect = (newValue) => {
        setCameraId(newValue);
        const selectedCamera = list.find(camera => camera.value === newValue);

        if (selectedCamera) {
            // Замените URL на ваш обработанный URL для камеры
            const newStreamUrl = `http://localhost:8000/stream_rtsp/${newValue}`;
            setStreamUrl(newStreamUrl);
        }
    };

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
                            Машины
                        </Text.Heading>
                        <div className={cls.titleButtons}>
                            <Select options={list} placeholder={'Выберите камеру'}
                                    onChange={handleCameraSelect} />
                            <Button
                                onClick={() => setInputHide(prevState => !prevState)}
                                size={SizeEnum.H3}
                                border={BorderEnum.H6}
                                color={ColorEnum.WHITE}
                            >
                                Добавить
                            </Button>
                        </div>
                    </div>
                    <video
                        width={500} height={200} controls // Добавьте controls для проверки воспроизведения
                    >
                        <source src={streamUrl} type="application/x-mpegURL" />
                    </video>
                    {/*<img width={500} height={200}*/}
                    {/*     src={streamUrl}*/}
                    {/*     alt="Stream not available" />*/}
                </div>
                <div
                    className={classNames(cls.input, {
                        [cls.inputHide]: inputHide,
                    }, [])}
                >
                    <Input
                        size={SizeEnum.H2}
                        border={BorderEnum.H5}
                        bgColor={ColorEnum.TEXT}
                        color={ColorEnum.TEXT}
                        value={url}
                        label={'rtsp://'}
                        onChange={(e) => {
                            setUrl(e.target.value);
                        }}
                    />
                    <Button
                        size={SizeEnum.H3}
                        border={BorderEnum.H6}
                        color={ColorEnum.WHITE}
                        onClick={() => {
                            // Здесь вы можете обработать отправку URL и обновить значение `streamUrl`
                            setStreamUrl(url); // Устанавливаем URL для стрима
                        }}
                    >
                        Отправить
                    </Button>
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
                <StreamNotificationList />
            </div>
        </div>
    );
};
