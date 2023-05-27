import { createContext, useContext, useState } from 'react';

const BuyerContext = createContext();

export function BuyerProvider({ children }) {
  const [chosenBuyers, setChosenBuyers] = useState([]);

  const addBuyer = (buyer) => {
    if (!chosenBuyers.find(b => b.id === buyer.id)) {
      setChosenBuyers(prevBuyers => [...prevBuyers, buyer]);
    }
  };

  const removeBuyer = (buyer) => {
    setChosenBuyers(prevBuyers => prevBuyers.filter(b => b.id !== buyer.id));
  };

  return (
    <BuyerContext.Provider value={{ chosenBuyers, addBuyer, removeBuyer }}>
      {children}
    </BuyerContext.Provider>
  );
}

export function useBuyer() {
  const context = useContext(BuyerContext);
  if (context === undefined) {
    throw new Error('useBuyer must be used within a BuyerProvider');
  }
  return context;
}
