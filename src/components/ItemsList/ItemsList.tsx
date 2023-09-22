import { useState } from 'react';
import {
    TItem,
    TProductCardProprs,
    TItemsListProps
} from '../../types/global';
import './ItemsList.css';


const classicItems: TItem[] = [
    {
        id: 0,
        title: 'apple',
        stock: 5,
        price: 50,
        added: false
    },
    {
        id: 1,
        title: 'grape',
        stock: 50,
        price: 65,
        added: false
    },
    {
        id: 2,
        title: 'potato',
        stock: 600,
        price: 25,
        added: false
    },
    {
        id: 3,
        title: 'cucumber',
        stock: 400,
        price: 35,
        added: false
    }
];

export default function ItemsList({
    setList,
    list
}: TItemsListProps)
{
    const [items, setItems] = useState<TItem[]>(classicItems);

    const changeAddCond = (productId: number) => {
        setItems(items.map(product =>
            {
                if(product.id == productId) {
                    if(product.added) {
                        setList(list.filter(item => item.id !== productId));
                    } else {
                        setList([...list, {
                            ...product,
                            count: '2.00'
                        }])
                    }
                    return {
                        ...product,
                        added: !product.added
                    };
                }
                return {...product};
            }
        ));
    }

    return (
        <div className={'products-wrapper'}>
            {
                items &&
                items.map(i => <ProductCard
                    key={i.id}
                    item={i}
                    callback={changeAddCond}
                />)
            }
        </div>
    );
};

function ProductCard({item, callback}: TProductCardProprs) {
    return (
        <div
            key={item.id}
            className={item.added ? 'product-box in-list animate' : 'product-box animate'}
            onClick={() => callback(item.id)}
        >
            <h2>{item.title}</h2>
            <div className={'product-info'}>
                Price: {item.price} <br />
                Stock: {item.stock}
            </div>
        </div>
    );
};