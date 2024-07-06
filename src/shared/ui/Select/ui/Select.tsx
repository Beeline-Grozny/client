import cls from './Select.module.scss';
import ReactSelect from 'react-select';
import { customStyles, ISelectProps } from '@shared/ui/Select';

export const Select = (
    {
        styles = customStyles,
        options,
        placeholder,
        onChange,
    }: ISelectProps) => {
    return (
        <ReactSelect
            styles={styles}
            options={options}
            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
            /*@ts-expect-error*/
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};
