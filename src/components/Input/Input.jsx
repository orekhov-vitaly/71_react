import "./styles.css";

function Input({type, placeholder, disabled}) {
    return(
        <input type={type} className="form-control" placeholder={placeholder} disabled={disabled} />
    );
};

export default Input;