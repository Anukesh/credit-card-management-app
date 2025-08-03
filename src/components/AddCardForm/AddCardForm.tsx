interface AddCardFormProps {
  cardName: string;
  setCardName: (name: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

export function AddCardForm({
  cardName,
  setCardName,
  onSubmit,
  onCancel,
}: AddCardFormProps) {
  return (
    <>
      <div className="modal-header">
        <h2 className="modal-title">Add New Card</h2>
      </div>
      <form
        className="modal-form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="form-group">
          <label className="form-label" htmlFor="cardName">
            Card Holder Name
          </label>
          <input
            id="cardName"
            type="text"
            className="form-input"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="Enter card holder name"
            required
          />
        </div>
        <div className="modal-actions">
          <button
            type="button"
            className="modal-button modal-button-secondary"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button type="submit" className="modal-button modal-button-primary">
            Add Card
          </button>
        </div>
      </form>
    </>
  );
}
