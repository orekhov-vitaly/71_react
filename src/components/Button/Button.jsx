import "./styles.css";

function Button({name, type, disabled=false}) {
    return <button className="button" type={type} disabled={disabled}>{name}</button>;
}

export default Button;