import { useLoaderData } from "react-router-dom"
let data;

function Github() {
  data = useLoaderData();
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} width={300} alt="" />
    </div>
  )
}

export default Github

// https://api.github.com/users/hiteshchoudhary

export  let githubfileinfo = async ()=>{
  const res = await fetch('https://api.github.com/users/reflex-dev');
  return res.json();
}