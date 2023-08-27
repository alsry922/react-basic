import {React, useReducer, useState} from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentors() {
    // const [person, setPerson] = useState(initialState);
    const [person, dispatch] = useReducer(personReducer, initialPerson);
    const handleUpdate = (person) => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`바꾸고 싶은 이름은 무엇인가요?`);
        dispatch({type: 'updated', prev, current})
    }
    const handleAdd = (person) => {
        const newMentorName = prompt(`새 멘토의 이름은 무엇인가요?`);
        const newMentorTitle = prompt('새 멘토의 타이틀은 무엇인가요?');
        dispatch({type: 'added', newMentorName, newMentorTitle})
    }
    const handleRemove = (person) => {
        const name = prompt('삭제할 멘토의 이름은 무엇인가요?');
        dispatch({type: 'deleted', name});
    }
    return (
        <div>
            <h1>
                {person.name}은 개발자
            </h1>
            <p>
                {person.name}의 멘토는
            </p>
            <ul>
                {
                    person.mentors.map((mentor, index) => (
                        <li key={index}>
                            {mentor.name} ({mentor.title})
                        </li>
                    ))
                }
            </ul>
            <button
                onClick={handleUpdate}>
                멘토의 이름을 바꾸기
            </button>
            <button
                onClick={handleAdd}>
                멘토 추가하기
            </button>
            <button
                onClick={handleRemove}>
                멘토 삭제하기
            </button>
        </div>
    );

}

const initialPerson = {
    name: '정민교',
    title: '개발자',
    mentors: [
        {
            name: '밥',
            title: '시니어개발자',
        },
        {
            name: '제임스',
            title: '시니어개발자',
        }
    ]
};
