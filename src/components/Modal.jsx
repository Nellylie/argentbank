import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Modal({ show, message, close }) {
  if (!show) return null;

  return (
    <div className="modal"><div className="modal-contains">
      <p>{message}</p>
      <button onClick={close}><FontAwesomeIcon icon={faXmark} /></button>
      </div>
    </div>
  );
}

export default Modal;