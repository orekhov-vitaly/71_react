import Button from "../Button/Button";
import "./styles.css";
// Именованный импорт
import { lessonData } from "./data";

function LessonCard() {
    const getFullName = () => {
        return `${lessonData.nameTeacher} ${lessonData.surnameTeacher}`;
    };

    return (
        <div className="lesson-card-wrapper">
            <h3>Lesson {lessonData.lesson_number}</h3>
            <p>{lessonData.topic}</p>
            <p>{getFullName()}</p>
            <img src={lessonData.imgSrc}/>
            <Button />
        </div>
    );
}

export default LessonCard;
