import {
    TModalButtonsProps,
    TModalNumButtonProps
} from '../../types/global';

export default function ModalButtons({ lengthInfo, popChar, value, setValue }: TModalButtonsProps) {
    const dotCall = () => {
        if(value.includes('.')) {
            if(value[value.length-1] === '.')
                popChar();
            return;
        }
        addChar('.');
    };
    const addChar = (char: string) => {
        if(value === '0') {
            if(char === '0') return;
            if(char !== '.') return setValue(char);
        }
        const dotIndex = value.indexOf('.');
        if(
            dotIndex !== -1 &&
            value.slice(dotIndex).length === lengthInfo.afterDotLength+1
        ) return;
        setValue((prev) => prev.length < lengthInfo.maxLength ? prev+char : prev);
    };
    return (
        <div className={'button-wraper'}>
            {[...Array(10).keys()].map(i =>
                <ModalNumButton
                    key={i}
                    num={i}
                    addChar={addChar}
                />
            )}

            <button
                key={'.'}
                className={'calc-button'}
                onClick={dotCall}
            > . </button>

            <button
                key={'<'}
                className={'calc-button'}
                onClick={popChar}
            > {'<'} </button>
        </div>
    );
};

function ModalNumButton({ num, addChar }: TModalNumButtonProps) {
    return (
        <button
            className={'calc-button'}
            onClick={() => addChar(String(num))}
        >
            {num}
        </button>
    );
};