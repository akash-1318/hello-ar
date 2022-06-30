import "./header.css"
import profile from "../../assets/images/image3.jpg"

function Header(){
    return(
        <header className="header">
            <div className="header__left flex">
                <div className="logo flex">
                    <p>AR</p>
                </div>
                <div className="logo__name flex">
                    <p>My Application </p>
                    <i class='bx bx-chevron-down'></i>
                </div>
            </div>
            <div className="header__right flex">
                <div className="profile__img">
                    <img src={profile} alt="profile-image"/>
                </div>
                <p>Barbel Ridel</p>
                <i class='bx bx-chevron-down'></i>
            </div>
        </header>
    )
}

export {Header}