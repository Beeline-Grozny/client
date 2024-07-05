import cls from './UserSidebarAvatar.module.scss';
import { classNames, ColorEnum, SizeEnum, useAppSelector, WeightEnum } from '@shared/lib';
import { Text } from '@shared/ui';
import { selectSidebar } from '@features/events';

export const UserSidebarAvatar = () => {
    const isOpen = useAppSelector(selectSidebar);
    return (
        <div className={classNames(cls.wrapper, {
            [cls.hide]: !isOpen,
        }, [])}>
            <div className={cls.img}>
                {/*{user.img*/}
                {/*    ?*/}
                {/*    <img src={user.img} alt="avatar" />*/}
                {/*    :*/}
                <Text.Paragraph
                    color={ColorEnum.TEXT}
                    size={SizeEnum.H2}
                    weight={WeightEnum.BOLD}
                >
                    {/*{user.email}*/}
                    {'Lorem ipsum dolor'.slice(0, 1)}
                </Text.Paragraph>
                {/*}*/}
            </div>
            <div className={cls.info}>
                <Text.Paragraph
                    size={SizeEnum.H3}
                    color={ColorEnum.TEXT}
                    weight={WeightEnum.MEDIUM}
                >
                    {/*{user.firstName} {user.lastName}*/}
                    Lorem ipsum.
                </Text.Paragraph>
                <Text.Paragraph
                    size={SizeEnum.H3}
                    color={ColorEnum.TEXT}
                >
                    {/*{user.email}*/}
                    Lorem ipsum
                </Text.Paragraph>
            </div>
        </div>
    );
};

