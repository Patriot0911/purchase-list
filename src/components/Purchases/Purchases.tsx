import { useState } from 'react';
import Modal from '../Modal/Modal';
import {
    TGoodsInfoCardProps,
    TEditableContainerProps,
    TPurchases
} from '../../types/global';
import './Purchases.css';

export default function Purchases({ list }: { list:TPurchases[] } ) {
    const lengthInfo = {
        maxLength: 6,
        afterDotLength: 2
    };

    return (
        <div className={'purchases-wraper'}>
            {
                list.length < 1 ?
                <h1>No Items found</h1> :
                list.map(item =>
                    <GoodsInfoCard
                        key={item.id}
                        {...item}
                        lengthInfo={lengthInfo}
                    />
                )
            }
        </div>
    );
};

function GoodsInfoCard({ lengthInfo, ...props }: TGoodsInfoCardProps) {
    const [count, setCount] = useState(props.count.toString());

    return (
        <div className={'info-card'}>
            <h2>{props.title}</h2>
                {`${props.price} x `}
                <EditableContainer
                    count={count}
                    setCount={setCount}
                    lengthInfo={lengthInfo}
                />
                {
                    parseFloat(count) > props.stock ?
                    <span>Not enough on stock</span> :
                    `=` + Math.round(props.price*parseFloat(count)*100)/100
                }
        </div>
    );
};

function EditableContainer({ count, setCount, lengthInfo }: TEditableContainerProps) {
    const [modal, setModal] = useState(false);

    const changeModal = () => setModal(!modal);

    return (
        <div className={'editable-container'}>
            <div
                className={'label-wraper'}
                onClick={changeModal}
            >
                {count}
            </div>
            {
                modal &&
                <Modal
                    lengthInfo={lengthInfo}
                    value={count}
                    setValue={setCount}
                />
            }
        </div>
    );
};