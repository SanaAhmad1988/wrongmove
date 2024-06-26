import '../css/RegisterUser.css';

const CustomAlert = ({ message, onClose }) => {
    return (
        <div className="custom-alert">
            <p>{message}</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default CustomAlert;
