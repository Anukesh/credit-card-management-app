import { CreditCards } from "../../components/Cards/CreditCards";
import { CreditCardsSkeleton } from "../../components/Cards/CreditCardsSkeleton";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { RecentTransactions } from "../../components/RecentTransactions/RecentTransactions";
import { Modal } from "../../components/Modal/Modal";
import { AddCardForm } from "../../components/AddCardForm/AddCardForm";
import CardDetails from "../../assets/card-details.svg";
import addIcon from "../../assets/add.svg";
import "./Cards.css";
import { useState, useEffect, useMemo } from "react";
import { useGetCardsQuery } from "../../store/cardsApi";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addCard } from "../../store/creditCardSlice";
import { toggleCardFreeze } from "../../store/frozenCardsSlice";
import { generateCardData } from "../../utils/cardUtils";
import type { CreditCard, Transaction } from "../../types/card";

const Cards = () => {
  const [active, setActive] = useState("my-debit-card");
  const { data, isLoading } = useGetCardsQuery();
  const localCards = useAppSelector((state) => state.creditCards.cards);
  const frozenCardIds = useAppSelector(
    (state) => state.frozenCards.frozenCardIds
  );
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardName, setCardName] = useState("");
  const dispatch = useAppDispatch();

  // Combine fetched cards with locally added cards - memoized to prevent unnecessary re-renders
  const allCards = useMemo(() => {
    const combinedCards = [...(data || []), ...localCards];
    return combinedCards.map((card) => ({
      ...card,
      freeze: frozenCardIds.includes(card.id),
    }));
  }, [data, localCards, frozenCardIds]);

  const handleAddCard = () => {
    if (cardName.trim()) {
      const { cardNumber, expiryDate } = generateCardData();
      const newCard: CreditCard = {
        id: Date.now(),
        holderName: cardName.trim(),
        cardNumber,
        expiryDate,
        cvv: "***",
        type: "VISA",
        transactions: [],
      };

      dispatch(addCard(newCard));
      setCardName("");
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (allCards && allCards.length > 0) {
      setTransactions(allCards[0].transactions || []);
    }
  }, [allCards]);

  function handleCardChange(index: number) {
    setTransactions(allCards?.[index]?.transactions || []);
  }

  const handleFreezeToggle = (cardId: number) => {
    dispatch(toggleCardFreeze(cardId));
  };

  return (
    <div className="cards-component">
      <header className="main-header">
        <p className="available-balance-label">Available Balance</p>
        <div className="cards-component-header">
          <div className="available-balance">
            <div className="available-balance-logo">S$</div>
            <h3>{(3000).toLocaleString("en", { useGrouping: true })}</h3>
          </div>
          <button className="add-new-card" onClick={() => setIsModalOpen(true)}>
            <img src={addIcon} alt="Add new card" />
            new card
          </button>
        </div>
      </header>
      <div className="cards-header">
        <button
          className={active === "my" ? "active" : ""}
          onClick={() => setActive("my")}
        >
          My Debit Card
        </button>
        <button
          className={active === "all" ? "active" : ""}
          onClick={() => setActive("all")}
        >
          All company Cards
        </button>
      </div>

      <div className="cards-container">
        <div className="credit-cards-section">
          {isLoading ? (
            <CreditCardsSkeleton />
          ) : (
            <CreditCards
              cards={allCards || []}
              handleCardChange={handleCardChange}
              onFreezeToggle={handleFreezeToggle}
            />
          )}
        </div>
        <div className="buttons-section">
          <Dropdown title="Card details" icon={CardDetails}>
            <div> No data</div>
          </Dropdown>
          <RecentTransactions transactions={transactions} />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddCardForm
          cardName={cardName}
          setCardName={setCardName}
          onSubmit={handleAddCard}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default Cards;
