import cls from './LineChart.module.scss';
import { Line } from '@ant-design/plots';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';

export const LineChart = () => {
    const config = {
        data: {
            type: 'fetch',
            value: 'https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json',
        },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        xField: (d) => new Date(d.year),
        yField: 'value',
        sizeField: 'value',
        shapeField: 'trail',
        legend: { size: false },
        colorField: 'category',
    };
    return (
        <div className={cls.wrapper}>
            <div className={cls.title}>
                <Text.Paragraph
                    size={SizeEnum.H1}
                    weight={WeightEnum.MEDIUM}
                    color={ColorEnum.TEXT}
                >
                    График активности
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
            <Line {...config} />
        </div>
    );


};

