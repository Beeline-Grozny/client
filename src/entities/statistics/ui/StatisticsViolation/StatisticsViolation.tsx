import cls from './StatisticsViolation.module.scss';
import { Text } from '@shared/ui';
import { classNames, ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';

export const StatisticsViolation = () => {


    return (
        <div className={cls.wrapper}>
            <Text.Paragraph
                size={SizeEnum.H1}
                weight={WeightEnum.MEDIUM}
                color={ColorEnum.TEXT}
            >
                Нарушения
            </Text.Paragraph>
            <ul className={cls.allList}>
                <li className={classNames(cls.allListItem, {}, [cls.danger])}>
                    <Text.Heading
                        size={SizeEnum.H6}
                        weight={WeightEnum.BOLD}
                        color={ColorEnum.WHITE}
                    >
                        1
                    </Text.Heading>
                    <Text.Paragraph
                        size={SizeEnum.H5}
                        weight={WeightEnum.MEDIUM}
                        color={ColorEnum.WHITE}
                    >
                        Новые
                    </Text.Paragraph>
                </li>
                <li className={classNames(cls.allListItem, {}, [cls.warning])}>
                    <Text.Heading
                        size={SizeEnum.H6}
                        weight={WeightEnum.BOLD}
                        color={ColorEnum.WHITE}
                    >
                        3
                    </Text.Heading>
                    <Text.Paragraph
                        size={SizeEnum.H5}
                        weight={WeightEnum.MEDIUM}
                        color={ColorEnum.WHITE}
                    >
                        В работе
                    </Text.Paragraph>
                </li>
                <li className={classNames(cls.allListItem, {}, [cls.success])}>
                    <Text.Heading
                        size={SizeEnum.H6}
                        weight={WeightEnum.BOLD}
                        color={ColorEnum.WHITE}
                    >
                        5
                    </Text.Heading>
                    <Text.Paragraph
                        size={SizeEnum.H5}
                        weight={WeightEnum.MEDIUM}
                        color={ColorEnum.WHITE}
                    >
                        Устранено
                    </Text.Paragraph>
                </li>
            </ul>
        </div>
    );
};
