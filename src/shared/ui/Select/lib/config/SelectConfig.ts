import { StylesConfig } from 'react-select';
import { ISelectItem, IsMulti } from '@shared/ui/Select';

export const customStyles: StylesConfig<ISelectItem, IsMulti> = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    control: (provided, state) => ({
        ...provided,
        backgroundColor: 'var(--bg)',
        borderColor: state.isFocused ? 'var(--primary)' : 'var(--secondary)',
        '&:hover': {
            borderColor: 'var(--primary-hover)',
        },
        boxShadow: state.isFocused ? '0 0 0 0.2rem rgba(24, 144, 255, .25)' : null,
        fontFamily: 'var(--fontFamilyFirst)',
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? 'var(--primary)' : state.isFocused ? 'var(--bg-dark)' : 'var(--bg)',
        color: state.isSelected ? 'var(--white)' : 'var(--text)',
        '&:hover': {
            backgroundColor: state.isSelected ? 'var(--primary-hover)' : 'var(--bg-dark)',
            color: state.isSelected ? 'var(--white)' : 'var(--text)',
        },
        fontFamily: 'var(--fontFamilyFirst)',
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: 'var(--bg)',
        zIndex: 9999,
    }),
    placeholder: (provided) => ({
        ...provided,
        color: 'var(--text)',
        fontFamily: 'var(--fontFamilyFirst)',
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'var(--text)',
        fontFamily: 'var(--fontFamilyFirst)',
    }),
};