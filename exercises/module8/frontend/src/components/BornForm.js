import {ALL_AUTHORS, EDIT_AUTHOR} from "../queries";
import {useState} from "react";
import {useMutation, useQuery} from "@apollo/client";

const BornForm = () => {
    const [name, setName] = useState('');
    const [born, setBorn] = useState(0);

    const { refetch } = useQuery(ALL_AUTHORS);
    const [changeBorn] = useMutation(EDIT_AUTHOR, {
        onCompleted: () => refetch(),
    });

    const submit = (event) => {
        event.preventDefault();
        changeBorn({variables: {name, born: parseInt(born, 10)}});
        setName('');
        setBorn(0); // Assurez-vous de passer un nombre pour born, car le backend attend un Int
    };


    return (
        <div>
            <h2>Set birthyear</h2>

            <form onSubmit={submit}>
                <div>
                    name{' '}
                    <input
                        value={name}
                        onChange={({target}) => setName(target.value)}
                    />
                </div>
                <div>
                    born{' '}
                    <input
                        type="number"
                        value={born}
                        onChange={({target}) => setBorn(target.value)}
                    />
                </div>
                <button type="submit">update author</button>
            </form>
        </div>
    );
};

export default BornForm;