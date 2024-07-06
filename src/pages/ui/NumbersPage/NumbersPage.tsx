import cls from './NumbersPage.module.scss';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { NumberTable } from '@entities/number';

export const NumbersPage = () => {
    return (
        <div className={cls.wrapper}>
            <Text.Heading
                color={ColorEnum.TEXT}
                weight={WeightEnum.MEDIUM}
                size={SizeEnum.H3}
            >
                Все камеры
            </Text.Heading>
            <NumberTable />
        </div>
    );
};

