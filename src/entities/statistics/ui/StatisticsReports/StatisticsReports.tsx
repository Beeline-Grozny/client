import cls from './StatisticsReports.module.scss';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';

export const StatisticsReports = () => {
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
                    to={'/numbers'}
                >
                    Подробнее
                </Text.Link>
            </div>
        </div>
    );
};

