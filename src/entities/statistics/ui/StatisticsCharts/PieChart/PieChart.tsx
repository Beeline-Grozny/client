import cls from './PieChart.module.scss';
import { Pie } from '@ant-design/plots';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';

export const PieChart = () => {
    const config = {
        data: [
            { type: 'Положительных', value: 99 },
            { type: 'Отрицательных', value: 1 },
        ],
        angleField: 'value',
        colorField: 'type',
    };
    return (
        <div className={cls.wrapper}>
            <div className={cls.title}>
                <Text.Paragraph
                    size={SizeEnum.H1}
                    weight={WeightEnum.MEDIUM}
                    color={ColorEnum.TEXT}
                >
                    Точность
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
            <Pie {...config} />
        </div>
    );


};

