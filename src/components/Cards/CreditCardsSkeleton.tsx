import "./CreditCardsSkeleton.css";

export function CreditCardsSkeleton() {
  return (
    <div className="credit-cards-container">
      <div className="card-header">
        <div className="skeleton skeleton-toggle-btn"></div>
      </div>
      <div className="card-carousel">
        <div className="skeleton-credit-card">
          <div className="skeleton skeleton-logo"></div>
          <div className="skeleton skeleton-holder-name"></div>
          <div className="skeleton skeleton-card-number"></div>
          <div className="skeleton-card-details">
            <div className="skeleton skeleton-expiry"></div>
            <div className="skeleton skeleton-cvv"></div>
          </div>
          <div className="skeleton skeleton-card-type"></div>
        </div>
      </div>
      <div className="skeleton-indicators">
        <div className="skeleton skeleton-dot"></div>
        <div className="skeleton skeleton-dot"></div>
        <div className="skeleton skeleton-dot"></div>
      </div>
    </div>
  );
}
