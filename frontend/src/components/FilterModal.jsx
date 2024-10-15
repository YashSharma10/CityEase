const FilterModal = ({ handleConfirm, header, message }) => {
    return (
      <dialog id="confirmModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-2xl">{header}</h3>
          <p className="py-4 text-xl">{message}</p>
          <div className="modal-action">
            <button className="btn" onClick={handleConfirm}>
              Yes
            </button>
            <form method="dialog">
              <button className="btn">No</button>
            </form>
          </div>
        </div>
      </dialog>
    );
  };
  
  export default FilterModal;
  