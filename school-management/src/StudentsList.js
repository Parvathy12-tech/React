import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function StudentsList() {

    const [students, setStudents] = useState([]);

    const user = useSelector(state => state.auth.user);

    useEffect(() => {

        fetch("https://worksheet-student.mashupstack.com/students", {

            headers: {
                Authorization: "Bearer " + user.token
            }

        })
            .then(res => res.json())
            .then(data => {
                setStudents(data);
            })

    }, [user]);

    return (

        <div>

            <h2>Students List</h2>

            <ul>

                {students.map((student) => (

                    <li key={student.id}>
                        {student.name} - {student.age}
                    </li>

                ))}

            </ul>

        </div>

    )

}

export default StudentsList;