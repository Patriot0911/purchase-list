import { useState } from 'react';
import ItemsList from './components/ItemsList/ItemsList';
import Purchases from './components/Purchases/Purchases';
import { TPurchases } from './types/global';
import './App.css'

export default function App() {
  const [purchasesList, setPurchasesList] = useState<TPurchases[]>([]);
  return (
    <div className={'app'}>
      <ItemsList
        list={purchasesList}
        setList={setPurchasesList}
      />
      <Purchases
        list={purchasesList}
      />
    </div>
  );
};