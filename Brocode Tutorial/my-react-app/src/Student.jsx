// Set default props values (optional)
function Student({ name = "Guest", age = 0, isStudent = true }) {
    return (
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            {/* If isStudent return "Yes", else reutrn "No */}
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

export default Student