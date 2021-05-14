import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionProvider } from './hooks/useTransactions';
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export function App() {
  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] = useState(false);
  

  function handleOpenNewTrasactionModal() {
      setIsNewTrasactionModalOpen(true);
  }

  function handleCloseNewTrasactionModal() {
      setIsNewTrasactionModalOpen(false);
  }


  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTrasactionModal}/>

      <Dashboard/>

      <NewTransactionModal 
        isOpen={isNewTrasactionModalOpen}
        onRequestClose={handleCloseNewTrasactionModal}
      />
      <GlobalStyle/>
      </TransactionProvider>
  );
}