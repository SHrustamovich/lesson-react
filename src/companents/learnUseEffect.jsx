import { useEffect, useState } from "react";

const LearnUseEffect = () => {
    const [data, setData] = useState([]);
    const [id, setId] = useState(null);
    const [comment, setComment] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
            .then((response) => response.json())
            .then((data) => setComment(data));
    }, [id]);

    // console.log(data, "data");

    // console.log(id)

    const handlyPost = (item) => {
        setId(item.id);
    };

    console.log(comment, "comment");

    return (
        <div className='container'>
            {data.length ? (
                data.map((item) => (
                    <p onClick={() => handlyPost(item)} key={item.id}>
                        {item.title}
                    </p>
                ))
            ) : (
                <p>Loading...</p>
            )}

            <h1>{comment.email}</h1>
        </div>
    );
};

export default LearnUseEffect;
