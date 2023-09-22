import React from 'react';
import { TModalProps } from '../../types/global';
import ModalButtons from './ModalButtons';
import './Modal.css';

function Modal({ lengthInfo, value, setValue }: TModalProps) {
    const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputString: string = e.target.value;
        const lastInput: string = inputString.slice(-1);
        const lastValue: string = value.slice(-1);

        if(inputString.length < 1)
            return setValue('0');
        if(!/^[\d.]+$/.test(inputString))
            return;
        if(lastInput === '.' && lastValue === '.')
            return popChar();
        if(lastInput !== '.'){
            if(value === '0' && inputString !== '0')
                return setValue(lastInput);
        } else {
            if (
                lastValue !== '.' &&
                value.includes('.') &&
                inputString.length > value.length
            ) return;
        }

        if(
            value.indexOf('.') === 0 &&
            value.length === 2 &&
            inputString.length < value.length
        ) return setValue('0');

        const dotIndex = value.indexOf('.');
        if(
            dotIndex !== -1 &&
            value.length < inputString.length &&
            value.slice(dotIndex).length === lengthInfo.afterDotLength+1
        ) return;

        setValue(inputString);
    };
    const popChar = () => {
        if(
            value.indexOf('.') === 0 &&
            value.length === 2
        ) return setValue('0');
        setValue((prev) =>
            prev.length > 0 ?
            (prev.slice(0, -1).length === 0 ? '0' : prev.slice(0, -1)) : '0'
        );
    };

    return (
        <div className={'modal animate-appear'}>
            <input
                value={value}
                maxLength={lengthInfo.maxLength}
                onChange={changeHandle}
            />
            <ModalButtons
                lengthInfo={lengthInfo}
                popChar={popChar}
                value={value}
                setValue={setValue}
            />
        </div>
    );
};

export default Modal;