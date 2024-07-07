import cls from './StatisticsReports.module.scss';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { useGetReports } from '@entities/report';

export const StatisticsReports = () => {
    const data = useGetReports();

    return (
        <div className={cls.wrapper}>
            <div className={cls.title}>
                <Text.Paragraph
                    size={SizeEnum.H1}
                    weight={WeightEnum.MEDIUM}
                    color={ColorEnum.TEXT}
                >
                    Отчеты
                </Text.Paragraph>
                <Text.Link
                    className={cls.link}
                    size={SizeEnum.H3}
                    color={ColorEnum.TEXT}
                    to={'/reports'}
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
                                    {item.incident_id}
                                </Text.Paragraph>
                                <Text.Paragraph
                                    size={SizeEnum.H4}
                                    weight={WeightEnum.NORMAL}
                                    color={ColorEnum.TEXT}
                                >
                                    {item.description}
                                </Text.Paragraph>
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
};

