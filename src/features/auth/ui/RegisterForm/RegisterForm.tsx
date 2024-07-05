import cls from './RegisterForm.module.scss';
import { Controller, useForm } from 'react-hook-form';
import { IRegisterRequest, useRegister } from '@features/auth/lib';
import { Input } from '@shared/ui/Input';
import { BorderEnum, classNames, ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { Button, Text } from '@shared/ui';

export const RegisterForm = () => {
    const { trigger, isLoading } = useRegister();
    const {
        formState: {
            errors,
        },
        handleSubmit,
        control,
        register,
    } = useForm<IRegisterRequest>({
        defaultValues: {
            firstName: '',
            lastName: '',
            middleName: '',
            email: '',
            password: '',
        },
    });

    const email = register('email', {
        required: 'Почта обязательна',
        pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Введите корректный адрес электронной почты',
        },
    });
    const firstName = register('firstName', {
        required: 'Имя обязательно',
        minLength: {
            value: 2,
            message: 'Имя должно содержать как минимум 2 символа',
        },
    });

    const lastName = register('lastName', {
        required: 'Фамилия обязательна',
        minLength: {
            value: 2,
            message: 'Фамилия должна содержать как минимум 2 символа',
        },
    });
    const middleName = register('middleName');

    const password = register('password', {
        required: 'Пароль обязателен',
        minLength: {
            value: 6,
            message: 'Пароль должен содержать как минимум 6 символов',
        },
        maxLength: {
            value: 20,
            message: 'Пароль должен содержать не более 20 символов',
        },
    });
    const onSubmit = (data: IRegisterRequest) => {
        trigger(data);
    };


    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={cls.form}>
            <Text.Heading
                className={cls.title}
                size={SizeEnum.H2}
                color={ColorEnum.TEXT}
                weight={WeightEnum.MEDIUM}
            >
                Регистрация
            </Text.Heading>
            <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                    <div className={cls.wrapper}>
                        <Input
                            className={classNames('', {
                                [cls.errorInput]: errors.firstName !== undefined,
                            }, [])}
                            type="text"
                            label="Имя"
                            value={field.value}
                            onChange={field.onChange}
                            size={SizeEnum.H2}
                            border={BorderEnum.H6}
                            color={ColorEnum.TEXT}
                            bgColor={ColorEnum.TEXT}
                            name="firstName"
                            register={firstName}
                        />
                        {errors.firstName &&
                            <Text.Paragraph
                                className={cls.error}
                                color={ColorEnum.DANGER}
                                size={SizeEnum.H4}
                            >
                                {errors.firstName.message}
                            </Text.Paragraph>
                        }
                    </div>
                )}
            />
            <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                    <div className={cls.wrapper}>
                        <Input
                            className={classNames('', {
                                [cls.errorInput]: errors.lastName !== undefined,
                            }, [])}
                            type="text"
                            label="Фамилия"
                            value={field.value}
                            onChange={field.onChange}
                            size={SizeEnum.H2}
                            border={BorderEnum.H6}
                            color={ColorEnum.TEXT}
                            bgColor={ColorEnum.TEXT}
                            name="lastName"
                            register={lastName}
                        />
                        {errors.lastName &&
                            <Text.Paragraph
                                className={cls.error}
                                color={ColorEnum.DANGER}
                                size={SizeEnum.H4}
                            >
                                {errors.lastName.message}
                            </Text.Paragraph>
                        }
                    </div>
                )}
            />
            <Controller
                name="middleName"
                control={control}
                render={({ field }) => (
                    <div className={cls.wrapper}>
                        <Input
                            className={classNames('', {
                                [cls.errorInput]: errors.middleName !== undefined,
                            }, [])}
                            type="text"
                            label="Отчество"
                            value={field.value}
                            onChange={field.onChange}
                            size={SizeEnum.H2}
                            border={BorderEnum.H6}
                            color={ColorEnum.TEXT}
                            bgColor={ColorEnum.TEXT}
                            name="middleName"
                            register={middleName}
                        />
                        {errors.middleName &&
                            <Text.Paragraph
                                className={cls.error}
                                color={ColorEnum.DANGER}
                                size={SizeEnum.H4}
                            >
                                {errors.middleName.message}
                            </Text.Paragraph>
                        }
                    </div>
                )}
            />
            <Controller
                name="email"
                control={control}
                render={({ field }) => (
                    <div className={cls.wrapper}>
                        <Input
                            className={classNames('', {
                                [cls.errorInput]: errors.email !== undefined,
                            }, [])}
                            type="email"
                            label="Почта"
                            value={field.value}
                            onChange={field.onChange}
                            size={SizeEnum.H2}
                            border={BorderEnum.H6}
                            color={ColorEnum.TEXT}
                            bgColor={ColorEnum.TEXT}
                            name="email"
                            register={email}
                        />
                        {errors.email &&
                            <Text.Paragraph
                                className={cls.error}
                                color={ColorEnum.DANGER}
                                size={SizeEnum.H4}
                            >
                                {errors.email.message}
                            </Text.Paragraph>
                        }
                    </div>
                )}
            />
            <Controller
                name="password"
                control={control}
                render={({ field }) => (
                    <div className={cls.wrapper}>
                        <Input
                            className={classNames('', {
                                [cls.errorInput]: errors.password !== undefined,
                            }, [])}
                            type="password"
                            label="Пароль"
                            value={field.value}
                            onChange={field.onChange}
                            size={SizeEnum.H2}
                            border={BorderEnum.H6}
                            color={ColorEnum.TEXT}
                            bgColor={ColorEnum.TEXT}
                            name="password"
                            register={password}
                        />
                        {errors.password &&
                            <Text.Paragraph
                                className={cls.error}
                                color={ColorEnum.DANGER}
                                size={SizeEnum.H4}
                            >
                                {errors.password.message}
                            </Text.Paragraph>
                        }
                    </div>
                )}
            />
            <Button
                isLoading={isLoading}
                type="submit"
                color={ColorEnum.WHITE}
                size={SizeEnum.H3}
                bgColor={ColorEnum.PRIMARY}
                border={BorderEnum.H5}
            >
                Отправить
            </Button>
            <Text.Paragraph
                size={SizeEnum.H3}
                color={ColorEnum.TEXT}
            >
                Есть аккаунт?&nbsp;
                <Text.Link
                    size={SizeEnum.H3}
                    to="/auth/login">Войти</Text.Link>
            </Text.Paragraph>
        </form>
    );
};

