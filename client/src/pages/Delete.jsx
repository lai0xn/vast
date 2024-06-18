import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import axios from "axios"
export default function Delete() {
    const { id } = useParams();
    if(!id) return notFound()
    const Delete = ()=>{
    axios.delete(`http://localhost:8000/vms/${id}`)
    .then((res)=>{
        console.log(res.data)
        alert("VM deleted")
        location.href="/platforms"
      })
  } 
    return (
		<div className="flex h-svh">
			<Sidebar />
            <div className='w-full bg-gray-300 flex justify-center items-center'>
                <div className='bg-white p-10 rounded-lg flex flex-col gap-8'>
                    <div className='text-center text-bluu text-xl font-semibold'>You are about to delete the platform {id},<br />do you want to continue?</div>
                    <div className='flex justify-center gap-10 px-4'>
                        <a className='w-28 bg-success text-center p-1 rounded-md text-lg font-semibold text-white cursor-pointer' href='/Platforms' >Cancel</a>
                        <div className='w-28 bg-error text-center p-1 rounded-md text-lg font-semibold text-white cursor-pointer' onClick={()=>{
                            Delete()
                        }}>Yes</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function notFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-gray-600">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl">The requested VM ID was not found.</p>
        </div>
    );
}
