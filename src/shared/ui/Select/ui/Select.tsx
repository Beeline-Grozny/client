import cls from './Select.module.scss';
import ReactSelect from 'react-select';
import { customStyles, ISelectProps } from '@shared/ui/Select';

export const Select = (
    {
        styles=customStyles,
        options,
        placeholder,
        onChange,
    }: ISelectProps) => {
    return (
        <ReactSelect
            styles={styles}
            options={options}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};
