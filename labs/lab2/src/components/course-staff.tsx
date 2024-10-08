// this is the compenent page for Course Staff!

type CourseStaffProps = {
    name: string,
    title: string,
    rating: number,
    subject: string,
}

export function CourseStaff( {name, title, rating, subject}: CourseStaffProps) {
    return (
        <div style={ {padding: "0.25rem", margin: "1rem", backgroundColor: "lightblue"} }>
            <h3>{name}</h3>
            <h4>{title}</h4>
            <h4>{subject}</h4>
            <p>{rating}/100</p>
        </div>

    )
}