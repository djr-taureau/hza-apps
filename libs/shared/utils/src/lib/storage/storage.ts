import { curry } from 'ramda';

export const saveToStorage = curry((key: string, value: string) => localStorage.setItem(key, value));

export const retrieveFromStorage = (key: string) => localStorage.getItem(key);

export const removeFromStorage = (key: string) => localStorage.removeItem(key);
