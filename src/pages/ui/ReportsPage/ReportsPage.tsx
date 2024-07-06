import cls from './ReportsPage.module.scss';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { ReportsTable } from '@entities/report';

export const ReportsPage = () => {
    return (
        <div className={cls.wrapper}>
            <Text.Heading
                color={ColorEnum.TEXT}
                size={SizeEnum.H3}
                weight={WeightEnum.MEDIUM}
            >
                Все отчеты
            </Text.Heading>
            <ReportsTable />
        </div>
    );
};

