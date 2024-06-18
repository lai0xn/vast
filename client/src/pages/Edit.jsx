import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import {useState} from "react"
import axios from "axios"
export default function Edit() {
    const { id } = useParams();
    if(!id) return notFound()
    const [vmName,setVmName] = useState("")
    const [vmDepratment,setDepartment] = useState("") 
    const Edit = ()=>{
    axios.patch(`http://localhost:8000/vms/${id}/`,{
      nom_de_la_vm:vmName,
      departement:vmDepratment,
    })
    .then((res)=>{
        console.log(res.data)
      })
  }
    return (
		<div className="flex h-svh">
			<Sidebar />
			<div className="w-full bg-gray-300 flex justify-center items-center">
				<div className="bg-white p-10 rounded-lg flex flex-col gap-3 relative">
					<a className='absolute top-0 right-0 bg-error w-3 h-3 m-3 rounded-full' href='/Platforms'></a>
					<div className='text-center text-2xl font-bold text-bluu mb-5'>Editing {id}</div>
					<input
						type="text"
						placeholder="VM name"
						className="bg-pale py-2 px-4 rounded-lg focus:outline-none"
            onChange={(e)=>{
              setVmName(e.target.value)
            }}
					/>
					<input
						type="text"
						placeholder="Department name"
						className="bg-pale py-2 px-4 rounded-lg focus:outline-none"
					  onChange={(e)=>{
              setDepartment(e.target.value)
            }}

              />
					
					<button
						className="bg-burpl px-6 py-2 mt-5 rounded-md text-white w-fit mx-auto"
						onClick={() => {
							console.log('edit');
              Edit()
              alert("vm edited successfully ")
              location.href = "/platforms"
						}}
					>
						save
					</button>
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
