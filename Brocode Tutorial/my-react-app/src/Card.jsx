import pfp from './assets/beluga pfp.jpg'

function Card() {

    return (
        // Set class with "className" instead of "class"
        // "class" is a javascript keyword "className" is used instead
        <div className="card">
            <img className="image" src={pfp} alt="profile pic"></img>
            <h2 className="title">Lucan Chugani</h2>
            <p className="text">I am learning React and Javascript</p>
        </div>
    );
}

export default Card