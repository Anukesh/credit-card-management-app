export interface Transaction {
  id: number;
  merchant: string;
  date: string;
  amount: number;
  type: "credit" | "debit";
  category: string;
  icon: string;
  iconBg: string;
  freeze?: boolean;
}

export interface CreditCard {
  id: number;
  holderName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  type: string;
  transactions: Transaction[];
  freeze?: boolean;
}
