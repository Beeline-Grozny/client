import cls from './StatisticsCamera.module.scss';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';

export const StatisticsCamera = () => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.title}>
                <Text.Paragraph
                    size={SizeEnum.H1}
                    weight={WeightEnum.MEDIUM}
                    color={ColorEnum.TEXT}
                >
                    Камеры
                </Text.Paragraph>
                <Text.Link
                    className={cls.link}
                    size={SizeEnum.H3}
                    color={ColorEnum.TEXT}
                    to={'/numbers'}
                >
                    Подробнее
                </Text.Link>
            </div>
        </div>
    );
};

