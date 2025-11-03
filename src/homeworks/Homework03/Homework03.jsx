import "./styles.css";
import Button from "../../components/Button/Button";
import Label from "../../components/Label/Label";
import Input from "../../components/Input/Input";


function Homework03() {
    return (
        <div className="homework03-wrapper">
            <form className="form-wrapper">
                <div className="form-group">
                    <Label htmlFor="" text="Email" required={true}/>
                    <Input type="text"  placeholder="Enter your email" disabled={false}/>
                </div>
                <Button name="Send email" type="submit" disabled={false} />
            </form>
        </div>
    );
}

export default Homework03;
