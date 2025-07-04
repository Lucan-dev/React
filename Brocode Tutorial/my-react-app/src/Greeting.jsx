function Greeting({isLoggedIn=false, username="guest"}) {

    const welcomeMessage = <h2 className="welcome">Welcome {username}!</h2>
    const loginMessage = <h2 className="login">Please login to continue</h2>

    return (isLoggedIn ? welcomeMessage : loginMessage);

    // if (isLoggedIn) {
    //     return (
    //         <h2 className="welcome">Welcome {username}!</h2>
    //     )

    // } else {
    //     return <h2 className="login">Please login to continue</h2>
    // }
}

export default Greeting