import cls from './TrainStreamPage.module.scss';
import { Button, Input, Text } from '@shared/ui';
import { BorderEnum, classNames, ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { useState } from 'react';
import { StreamNotificationList } from '@entities/stream';
import { Select } from '@shared/ui/Select';

export const TrainStreamPage = () => {
    const [url, setUrl] = useState<string>('');
    const [cameraId, setCameraId] = useState<string>('');
    const [inputHide, setInputHide] = useState<boolean>(true);
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
    return (
        <div className={cls.wrapper}>
            <div className={cls.body}>
                <div className={cls.title}>
                    <Text.Heading
                        size={SizeEnum.H4}
                        weight={WeightEnum.MEDIUM}
                        color={ColorEnum.TEXT}
                    >
                        Поезда
                    </Text.Heading>
                    <div className={cls.titleButtons}>
                        <Select options={list} placeholder={'Выберите камеру'}
                                onChange={(newValue) => setCameraId(newValue)} />
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

