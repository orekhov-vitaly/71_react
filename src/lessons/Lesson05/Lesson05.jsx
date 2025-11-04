import { v4 } from "uuid";

import "./styles.css";
import { animalsData } from "./data.js";
import AnimalCard from "../../components/AnimalCard/AnimalCard";

function Lesson05() {
    const animalCards = animalsData.map((animal, index, array) => {
        return (
            <div className="card-wrapper" key={v4()}>
                <div>{index + 1}</div>
                <AnimalCard
                    animalName={animal.name}
                    animalSpecies={animal.species}
                    animalNImg={animal.image}
                />
            </div>
        );
    });

    console.log(animalCards);

    return <div className="lesson05-wrapper">{animalCards}</div>;
}

export default Lesson05;
