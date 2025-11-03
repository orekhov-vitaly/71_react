import "./styles.css";

function Button({name, type, disabled}) {
    return <button className="button" type={type} disabled={disabled}>{name}</button>;
}

export default Button;
