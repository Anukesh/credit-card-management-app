import FreezeCardIcon from "../../assets/Freezecard.svg";
import SetSpendLimitIcon from "../../assets/SetSpendLimit.svg";
import GPayIcon from "../../assets/GPay.svg";
import ReplaceCardIcon from "../../assets/Replacecard.svg";
import DeactivateCardIcon from "../../assets/Deactivatecard.svg";
import "./ButtonsContainer.css";
import type { CreditCard } from "../../types/card";

interface ButtonData {
  icon: string;
  label: string;
  onClick: () => void;
}

interface ButtonsContainerProps {
  currentCard?: CreditCard;
  onFreezeToggle?: (cardId: number) => void;
}

export function ButtonsContainer({
  currentCard,
  onFreezeToggle,
}: ButtonsContainerProps) {
  const isFrozen = currentCard?.freeze || false;

  const buttons: ButtonData[] = [
    {
      icon: FreezeCardIcon,
      label: isFrozen ? "Unfreeze card" : "Freeze card",
      onClick: () => {
        if (currentCard && onFreezeToggle) {
          onFreezeToggle(currentCard.id);
        }
      },
    },
    {
      icon: SetSpendLimitIcon,
      label: "Set spend limit",
      onClick: () => console.log("Set spend limit clicked"),
    },
    {
      icon: GPayIcon,
      label: "Add to GPay",
      onClick: () => console.log("Add to GPay clicked"),
    },
    {
      icon: ReplaceCardIcon,
      label: "Replace card",
      onClick: () => console.log("Replace card clicked"),
    },
    {
      icon: DeactivateCardIcon,
      label: "Cancel card",
      onClick: () => console.log("Cancel card clicked"),
    },
  ];

  return (
    <div className="buttons-container">
      {buttons.map((button, index) => (
        <button key={index} className="action-button" onClick={button.onClick}>
          <div className="button-icon">
            <img src={button.icon} alt={`${button.label} icon`} />
          </div>
          <span className="button-label">{button.label}</span>
        </button>
      ))}
    </div>
  );
}
