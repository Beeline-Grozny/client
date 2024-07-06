import cls from './StatisticsPage.module.scss';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { Text } from '@shared/ui';
import { LineChart, PieChart, StatisticsCamera, StatisticsReports, StatisticsViolation } from '@entities/statistics';

export const StatisticsPage = () => {
    return (
        <div className={cls.wrapper}>
            <Text.Heading
                color={ColorEnum.TEXT}
                size={SizeEnum.H3}
                weight={WeightEnum.MEDIUM}
            >
                Статистика
            </Text.Heading>
            <div className={cls.first}>
                <StatisticsCamera />
                <StatisticsReports />
                <StatisticsViolation />
            </div>
            <div className={cls.second}>
                <LineChart />
                <PieChart />
            </div>
        </div>
    );
};
