import React from 'react';

class Body extends React.Component {

    componentWillMount () {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(res => console.log(res))
    }

    render () {
        return (
            <div
                style={{
                    "width": '40vw',
                    "border": "1px solid #000",
                    "margin": "2rem auto"
                }}>
                <h2><strong>Title : </strong></h2>
                <p><strong>User id : </strong></p>
                <p><strong>Id : </strong></p>
                <p><strong>Body : </strong></p>
            </div>
        )
    }
}
export default Body;