function UserGreeting(props) {
    const isLogged = props.isLogged;
    if (isLogged === true) {
        return <User />;
    }
    return <Guest />;
}
function User() {
    return (
        <h1>Wellcome Back</h1>
    )
}
function Guest() {
    return (
        <div>
            <h3>Please Sign Up</h3>
            <input type="email" name="useremail" placeholder="Email" required />
            <input type="password" name="userpassword" placeholder="Password" required />
            <input type="button" name="Submit" value="Submit" />
        </div>
    );
}
export default UserGreeting;
