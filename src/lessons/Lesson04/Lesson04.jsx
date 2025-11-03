import Button from "../../components/Button/Button";
import Counter from "../../components/Counter/Counter";
import "./styles.css";

function Lesson04() {
    const showMessage = ()=>{alert("Outer function")};

    const showMessageWithName = (name)=>{alert(`Outer function click - ${name}`)};

    return(
        <div className="lesson04-wrapper">
            <div className="button-container">
                {/* Пример 1. - Создание функции внутри onClick (анонимная функция) */}
                <Button
                    name="Inner func"
                    onClick={()=>{
                        alert("Inner fuction")
                    }}
                />

                {/* Пример 2. - Создание функции вне кнопки и передача переменной в prop */}
                <Button name="Outer func" onClick={showMessage}/>

                {/* Пример 3. - Создание функции вне кнопки с параметрами */}
                <Button name="Func with param" onClick={()=>showMessageWithName("Bob")}/>
            </div>
            <Counter/>
        </div>
    );
};

export default Lesson04;