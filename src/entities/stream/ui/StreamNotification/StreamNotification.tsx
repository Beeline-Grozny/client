import cls from './StreamNotification.module.scss';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum } from '@shared/lib';
import { IStreamNotificationProps } from '@entities/stream';

export const StreamNotification = (
    {
        text,
        img,
    }: IStreamNotificationProps,
) => {
    return (
        <div className={cls.wrapper}>
            <img src={img} alt="" />
            <Text.Paragraph
                size={SizeEnum.H4}
                color={ColorEnum.TEXT}
            >
                {text}
            </Text.Paragraph>
        </div>
    );
};

