import "./styles.css";

function Label({ htmlFor, text, required, children }) {
    return (
        <label htmlFor={htmlFor} className="lable-control" required={required}>
            {text}
        </label>
    );
}

export default Label;
