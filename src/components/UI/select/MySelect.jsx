import React from 'react';
import cl from './MySelect.module.css'
/* Передаём массив опций */
const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <div className={cl.mySelect}>
            <select
                value={value}
                onChange={event => onChange(event.target.value)}
            >
                <option disabled={true} value="">{defaultValue}</option>
                {options.map(option =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )}
            </select>
        </div>
    );
};

export default MySelect;
