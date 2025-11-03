import "./styles.css";

function AnimalCard({animalName, animalSpecies, animalNImg, children}) {
    return(
        <div className="animal-card-wrapper">
            <h3>{animalName}</h3>
            <div>{animalSpecies}</div>
            <img src={animalNImg} alt="" />
            {children}
        </div>
    );
};

export default AnimalCard;