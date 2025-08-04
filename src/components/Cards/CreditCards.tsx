import { useState } from "react";
import "./CreditCards.css";
import Logo from "../../assets/Logo-white.svg";
import VisaLogo from "../../assets/Visa.svg";
import { ButtonsContainer } from "./ButtonsContainer";
import eyeIcon from "../../assets/eye.svg";
import type { CreditCard } from "../../types/card";

interface CreditCardsProps {
  cards: CreditCard[];
  handleCardChange?: (index: number) => void;
  onFreezeToggle?: (cardId: number) => void;
}

export function CreditCards(
  { cards, handleCardChange, onFreezeToggle }: CreditCardsProps = { cards: [] }
) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showCardNumber, setShowCardNumber] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);

  const formatCardNumber = (cardNumber: string, show: boolean) => {
    // Remove any existing spaces and ensure we have exactly 16 digits
    const cleanNumber = cardNumber.replace(/\s/g, "");

    if (show) {
      // Format as groups of 4 digits: 1234 5678 9012 3456
      return cleanNumber.replace(/(.{4})/g, "$1 ").trim();
    } else {
      // Show dots in the same positions as digits to prevent layout shift
      const lastFour = cleanNumber.slice(-4);
      return `•••• •••• •••• ${lastFour}`;
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentCardIndex(index);
    handleCardChange?.(index);
  };

  const toggleCardNumber = () => {
    setShowCardNumber(!showCardNumber);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    // Prevent default scrolling behavior during horizontal swipes
    const touchCurrentX = e.touches[0].clientX;
    const diffX = Math.abs(touchCurrentX - touchStartX);

    // If horizontal movement is significant, prevent scrolling
    if (diffX > 10) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const swipeDistance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    // Left swipe (next card)
    if (
      swipeDistance > minSwipeDistance &&
      currentCardIndex < cards.length - 1
    ) {
      const newIndex = currentCardIndex + 1;
      setCurrentCardIndex(newIndex);
      handleCardChange?.(newIndex);
    }
    // Right swipe (previous card)
    else if (swipeDistance < -minSwipeDistance && currentCardIndex > 0) {
      const newIndex = currentCardIndex - 1;
      setCurrentCardIndex(newIndex);
      handleCardChange?.(newIndex);
    }
  };

  return (
    <div className="credit-cards-container">
      <div className="card-body">
        <div className="card-header">
          <button className="show-card-number-btn" onClick={toggleCardNumber}>
            <span className="eye-icon">
              <img src={eyeIcon} alt="Toggle card number visibility" />
            </span>
            <span>
              {showCardNumber ? "Hide card number" : "Show card number"}
            </span>
          </button>
        </div>

        <div
          className="card-carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="cards-wrapper"
            style={{
              transform: `translateX(calc(-${currentCardIndex * 100}% - ${
                currentCardIndex * 20
              }px))`,
            }}
          >
            {cards?.map((card) => (
              <div
                key={card.id}
                className={`credit-card ${card.freeze ? "frozen" : ""}`}
              >
                <div className="card-logo-container">
                  <img src={Logo} alt="Aspire Logo" className="aspire-logo" />
                </div>

                <div className="card-holder-name">{card.holderName}</div>

                <div className="card-number">
                  {formatCardNumber(card.cardNumber, showCardNumber)}
                </div>

                <div className="card-details">
                  <div className="card-expiry">
                    <span className="label">Thru:</span>
                    <span className="value">{card.expiryDate}</span>
                  </div>
                  <div className="card-cvv">
                    <span className="label">CVV:</span>
                    <span className="cvv">{card.cvv}</span>
                  </div>
                </div>

                <div className="card-type">
                  <img src={VisaLogo} alt="Visa Logo" className="visa-logo" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-indicators">
          {cards?.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentCardIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>

      <ButtonsContainer
        currentCard={cards[currentCardIndex]}
        onFreezeToggle={onFreezeToggle}
      />
    </div>
  );
}
