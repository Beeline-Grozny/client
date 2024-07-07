import React from 'react';
import cls from './StatisticsViolation.module.scss';
import { Text } from '@shared/ui';
import { classNames, ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { useGetViolations } from '@entities/report';

interface IViolationStatus {
    count: number;
    status: 'new' | 'inProgress' | 'resolved';
}

export const StatisticsViolation = () => {
    const data = useGetViolations();

    // Функция для подсчета количества элементов по статусу
    const countByStatus = (status: 'green' | 'orange' | 'red'): number => {
        if (!data) return 0;
        return data.filter(item => item.status === status).length;
    };

    // Получаем количество элементов для каждого статуса
    const violations: IViolationStatus[] = [
        { count: countByStatus('green'), status: 'new' },
        { count: countByStatus('orange'), status: 'inProgress' },
        { count: countByStatus('red'), status: 'resolved' }
    ];

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
                {violations.map((violation, index) => (
                    <li
                        key={index}
                        className={classNames(cls.allListItem, {}, [
                            cls[violation.status === 'new' ? 'danger' : violation.status === 'inProgress' ? 'warning' : 'success']
                        ])}
                    >
                        <Text.Heading
                            size={SizeEnum.H6}
                            weight={WeightEnum.BOLD}
                            color={ColorEnum.WHITE}
                        >
                            {violation.count}
                        </Text.Heading>
                        <Text.Paragraph
                            size={SizeEnum.H5}
                            weight={WeightEnum.MEDIUM}
                            color={ColorEnum.WHITE}
                        >
                            {violation.status === 'new' ? 'Новые' : violation.status === 'inProgress' ? 'В работе' : 'Устранено'}
                        </Text.Paragraph>
                    </li>
                ))}
            </ul>
            <ul className={cls.list}>
                {/* Отображаем первые два элемента из данных */}
                {data && data.slice(0, 2).map((item, index) => (
                    <li key={index} className={cls.listItem}>
                        <Text.Paragraph
                            size={SizeEnum.H3}
                            weight={WeightEnum.NORMAL}
                            color={ColorEnum.TEXT}
                        >
                            {item.cameraId.substr(0, 10)} {/* Сокращаем id камеры до 10 символов */}
                        </Text.Paragraph>
                        <Text.Paragraph
                            size={SizeEnum.H3}
                            weight={WeightEnum.NORMAL}
                            color={ColorEnum.TEXT}
                        >
                            {item.description}
                        </Text.Paragraph>
                    </li>
                ))}
            </ul>
        </div>
    );
};
