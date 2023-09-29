import Part from "../Part/Part.jsx";

const Content = ({course}) => (
    <>
        {course.parts.map(part =>
            <Part key={part.id} part={part}/>
        )}
    </>
)

export default Content