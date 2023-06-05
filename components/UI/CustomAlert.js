const CustomAlert = ({ message, type, onClose }) => {
  return (
    <div className={`alert ${type}`}>
      <span className='message'>{message}</span>
      <button className='close' onClick={onClose}>
        &times;
      </button>
    </div>
  );
};
export default CustomAlert;
