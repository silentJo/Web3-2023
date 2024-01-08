// Authors.js
import React from "react";

const Authors = ({authors}) => {
    return (
        <div>
            <h2>Authors</h2>
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Born</th>
                    <th>Books</th>
                </tr>
                </thead>
                <tbody>
                {authors.map((author) => (
                    <tr key={author.name}>
                        <td>{author.name}</td>
                        <td>{author.born}</td>
                        <td>{author.bookCount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Authors