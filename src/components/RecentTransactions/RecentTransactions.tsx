import PaymentsIcon from "../../assets/transactions.svg";
import { Dropdown } from "../Dropdown/Dropdown";
import "./RecentTransactions.css";
import fileIcon from "../../assets/file-storage.svg";
import flightIcon from "../../assets/flights.svg";
import announcementIcon from "../../assets/megaphone.svg";
import cardIcon from "../../assets/card-white.svg";
import nextIcon from "../../assets/next.svg";
import type { Transaction } from "../../types/card";
import { useState } from "react";

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const iconMap: Record<string, string> = {
  "file-storage": fileIcon,
  flights: flightIcon,
  megaphone: announcementIcon,
};

export function RecentTransactions(
  { transactions }: RecentTransactionsProps = { transactions: [] }
) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Dropdown
        title="Recent transactions"
        icon={PaymentsIcon}
        onToggle={(e) => setExpanded(e)}
      >
        <div className="transactions-list">
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <div key={transaction.id} className="transaction-item">
                <div className="transaction-icon">
                  <img
                    src={iconMap[transaction.icon] || fileIcon}
                    alt="card-icon"
                  />
                </div>

                <div className="transaction-details">
                  <div className="transaction-header">
                    <span className="merchant-name">
                      {transaction.merchant}
                    </span>
                    <span className={`transaction-amount ${transaction.type}`}>
                      {transaction.type === "credit" ? "+" : "-"} S${" "}
                      {transaction.amount}
                    </span>
                  </div>
                  <div className="transaction-meta">
                    <span className="transaction-date">{transaction.date}</span>
                  </div>
                  <div className="transaction-category">
                    <div className="card-icon">
                      <img src={cardIcon} alt="card icon" />
                    </div>
                    <span className="category-text">
                      {transaction.category}
                    </span>
                  </div>
                </div>

                <div className="transaction-chevron">
                  <img src={nextIcon} alt="next icon" />
                </div>
              </div>
            ))
          ) : (
            <div className="no-transactions">
              <p>No transactions available for this card</p>
            </div>
          )}
        </div>
      </Dropdown>
      {transactions.length > 0 && expanded && (
        <div className="view-all-transactions">
          <button className="view-all-btn">View all card transactions</button>
        </div>
      )}
    </>
  );
}
