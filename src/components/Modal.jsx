
function Modal({ show, message, close }) {
  if (!show) return null;

  return (
    <div className="modal">
      <p>{message}</p>
      <button onClick={close}>Fermer</button>
    </div>
  );
}

export default Modal;