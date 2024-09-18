import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/Hrithik2211')
            .then(res => res.json())
            .then(data => {
                console.log('data', data)
                setData(data)
            })
    },[])
  return (
    <>
      <h1 className='text-blue-600 text-lg'>Github followers: {data.followers}</h1>
      <img src={data.avatar_url} alt="" width={300} />
    </>
  );
}

export default Github