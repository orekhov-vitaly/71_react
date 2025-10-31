import AnimalCard from "../../components/AnimalCard/AnimalCard";
import Button from "../../components/Button/Button";
import "./styles.css";
import { lionData, zebraData, hippoData, lessonData } from "./data.js";
import StudyCard from "../../components/StudyCard/StudyCard.jsx";

function Lesson03() {
    return (
        <div className="lesson03-wrapper">
            <StudyCard lessonData={lessonData[0]}/>
            <StudyCard lessonData={lessonData[1]}/>
            <Button name="Send" type="submit" />
            <Button name="Get" type="button" />
            <AnimalCard
                animalName={lionData.name}
                animalSpecies={lionData.species}
                animalNImg={lionData.image}
            >
                <p>Main character</p>
            </AnimalCard>
            <AnimalCard
                animalName={zebraData.name}
                animalSpecies={zebraData.species}
                animalNImg={zebraData.image}
            />
            <AnimalCard
                animalName={hippoData.name}
                animalSpecies={hippoData.species}
                animalNImg={hippoData.image}
            />
        </div>
    );
}

export default Lesson03;
