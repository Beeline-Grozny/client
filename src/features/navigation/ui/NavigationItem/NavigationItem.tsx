import cls from './NavigationItem.module.scss';
import { INavigation } from '@features/navigation';
import { Text } from '@shared/ui';
import { classNames, ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { useState } from 'react';

export const NavigationItem = ({ item }: { item: INavigation }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    if (item.children) {
        return (
            <>
                <div
                    onClick={() => {
                        setIsOpen(prevState => !prevState);
                    }}
                >
                    <Text.Paragraph
                        className={cls.item}
                        size={SizeEnum.H4}
                        color={ColorEnum.TEXT}
                        weight={WeightEnum.NORMAL}
                    >
                        {item.label}
                    </Text.Paragraph>
                </div>
                <ul className={classNames(cls.list, {
                    [cls.hide]: !isOpen,
                }, [])}>
                    {item.children.map((child) => (
                        <li
                            key={child.path}
                            className={cls.listItem}
                        >
                            <NavigationItem
                                item={child}
                            />
                        </li>
                    ))}
                </ul>
            </>
        );
    } else {
        return (
            <Text.Link
                size={SizeEnum.H4}
                color={ColorEnum.TEXT}
                to={item.path}
                weight={WeightEnum.NORMAL}
            >
                {item.label}
            </Text.Link>
        );
    }
};