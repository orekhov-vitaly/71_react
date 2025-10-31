import "./styles.css";
import {profileData} from "./data.js";

function ProfileCard() {
    return (
        <div className="profilecard-wrapper">
            <img className="profilecard-avatar" src={profileData.avatarUrl} alt="Avatar" />
            <p className="profilecard-name">{profileData.name}</p>
            <p className="profilecard-profession">{profileData.profession}</p>
            <p className="profilecard-hobby">{profileData.hobby}</p>
        </div>
    );
};

export default ProfileCard;