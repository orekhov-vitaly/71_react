import "./styles.css";

function Button({type="button", name, onClick}) {
    return <button className="button" type={type} onClick={onClick}>{name}</button>;
}

export default Button;
