import {memo, React, useCallback, useMemo, useReducer} from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentorsButton() {
    // const [person, setPerson] = useState(initialState);
    const [person, dispatch] = useReducer(personReducer, initialPerson);
    const handleUpdate = useCallback(() => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`바꾸고 싶은 이름은 무엇인가요?`);
        dispatch({type: 'updated', prev, current})
    }, []);
    const handleAdd = useCallback(() => {
        const name = prompt(`새 멘토의 이름은 무엇인가요?`);
        const title = prompt('새 멘토의 타이틀은 무엇인가요?');
        dispatch({type: 'added', name, title})
    }, [])
    const handleRemove = useCallback(() => {
        const name = prompt('삭제할 멘토의 이름은 무엇인가요?');
        dispatch({type: 'deleted', name});
    }, [])
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
            <Button
                onClick={handleUpdate}
                text='멘토의 이름을 바꾸기'>
            </Button>
            <Button
                onClick={handleAdd}
                text='멘토 추가하기'>
            </Button>
            <Button
                onClick={handleRemove}
                text='멘토 삭제하기'>
            </Button>
        </div>
    );
}

function calculateSomething() {
    for (let i = 0; i < 10000; i++) {
        console.log('calculate');
    }
    return 10;
}

const  Button = memo(({text, onClick}) => {
    console.log('Button', text, 're-rendering');
    const result = useMemo(() => calculateSomething(), []);
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '20px',
                margin: '0.4rem',
            }}>
            {`${text} ${result}`}
        </button>
    )
})

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
