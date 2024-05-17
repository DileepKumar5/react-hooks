import { error } from 'console'
import React, { useEffect, useState } from 'react'

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Component3 = () => {
    const [data, setData] = useState<Post[] | null>(null);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json()) // it gets the response but response is not readable
            .then(data => { setData(data) })
            .catch((error) => console.log(error))

    }, [])
    return (
        <div>
            {
                data?.map((item, index) => (
                    <div key={index}>
                        {item.title}
                    </div>
                ))
            }


        </div>
    )
}

export default Component3
