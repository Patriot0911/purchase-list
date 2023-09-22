export type TItem = {
    id: number;
    title: string;
    stock: number;
    price: number;
    added: boolean;
};

export type TPurchases = {
    count: string;
} & Omit<TItem, 'added'>;

export type TProductCardProprs = {
    item: TItem;
    callback: (id: number) => void;
};

export type TItemsListProps = {
    list: TPurchases[];
    setList: (list: TPurchases[]) => void;
};

/* Modal Types */
export type TSetValue = React.Dispatch<React.SetStateAction<string>>;

export type TLengthInfo = {
    maxLength: number;
    afterDotLength: number;
};

export type TModalProps = {
    lengthInfo: TLengthInfo;
    value: string;
    setValue: TSetValue;
};

export type TModalButtonsProps = {
    lengthInfo: TLengthInfo;
    popChar: () => void;
    value: string;
    setValue: TSetValue
};

export type TModalNumButtonProps = {
    num: number;
    addChar: (char: string) => void;
};

/* Purchases Types */
export type TGoodsInfoCardProps = {
    title: string;
    price: number;
    stock: number;
    count: string;
    lengthInfo: TLengthInfo;
};

export type TEditableContainerProps = {
    count: string;
    setCount: React.Dispatch<React.SetStateAction<string>>;
    lengthInfo: TLengthInfo;
};