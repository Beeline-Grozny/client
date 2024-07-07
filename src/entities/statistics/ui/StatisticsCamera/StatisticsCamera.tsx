import cls from './StatisticsCamera.module.scss';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { useGetCameras } from '@entities/number';

export const StatisticsCamera = () => {
    const data = useGetCameras();
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
            <ul className={cls.list}>
                {data && data.map((item, i) => {
                    while (i < 5) {
                        return (
                            <li className={cls.listItem}>
                                <Text.Paragraph
                                    size={SizeEnum.H3}
                                    weight={WeightEnum.NORMAL}
                                    color={ColorEnum.TEXT}
                                >
                                    {item.id}
                                </Text.Paragraph>
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
};

