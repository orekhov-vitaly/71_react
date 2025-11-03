import "./styles.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";


function Homework03() {
    return (
        <div className="homework03-wrapper">
            <form className="form-wrapper">
                <Input type="email" id="email_id" label="Email" placeholder="Enter your email" required={true} disabled={false}/>
                <Button name="Send email" type="submit" disabled={false} />
            </form>
        </div>
    );
}

export default Homework03;
