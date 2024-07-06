import cls from './CarPage.module.scss';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { CarTable } from '@entities/car';

export const CarPage = () => {
    return (
        <div className={cls.wrapper}>
            <Text.Heading
                size={SizeEnum.H4}
                weight={WeightEnum.MEDIUM}
                color={ColorEnum.TEXT}
            >
                Все машины
            </Text.Heading>
            <CarTable />
        </div>
    );
};

