import "./styles.css";

function Input({ name, type, placeholder, label, required, disabled }) {
    return (
        <div className="form-group">
            <label
                htmlFor=""
                className="lable-control"
                required={required}
            >
                {label}
            </label>
            <input
                type={type}
                name={name}
                className="form-control"
                placeholder={placeholder}
                required={required}
                disabled={disabled}
            />
        </div>
    );
}

export default Input;
