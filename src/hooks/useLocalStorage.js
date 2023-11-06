import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {

    const [data, setData] = useState(() => {
        const storedData = localStorage.getItem(key);

        return storedData ? JSON.parse(storedData) : initialValue;
    });

    const setLocalStorageValue = (value) => {
        localStorage.setItem(key, JSON.stringify(value));

        setData(value);
    };

    return [
        data,
        setLocalStorageValue,
    ];
}
