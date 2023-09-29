import Content from "../Content/Content.jsx";
import Header from "../Header/Header.jsx";

const Course = ({course}) => (
    <>
        <Header title={course.name}/>
        <Content course={course}/>
    </>
)

export default Course