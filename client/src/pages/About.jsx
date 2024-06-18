import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import {useEffect,useState} from "react"
import axios from "axios"
export default function About() {
    const { id } = useParams();
    let [Vm,setVm] = useState({})
    if(!id) return notFound()
    // fetch using this id and return notFound() if not found
    useEffect(()=>{
      axios.get(`http://localhost:8000/vms/${id}`)
    .then((res)=>{
        console.log(res.data)
        setVm(res.data)
      })
  },[])
    return (
		<div className="flex h-svh">
			<Sidebar />
            <div className='w-full bg-gray-300 flex justify-center items-center'>
                <div className='bg-white p-10 rounded-lg flex flex-col text-lg text-bluu min-w-96 relative'>
                    <a className='absolute top-0 right-0 bg-error w-3 h-3 m-3 rounded-full' href='/Platforms'></a>
                    <div className='text-center text-2xl font-bold text-bluu'>About</div>
                    <div className='text-md text-slate-400 mt-8'>VM name</div>
                    <div>{Vm.nom_de_la_vm}</div>
                    <div className='text-md text-slate-400 mt-6'>VM departement</div>
                    <div>{Vm.departement}</div>
                    <div className='grid grid-cols-2 grid-rows-2'>
                        <div className='text-md text-slate-400 mt-6'>time left</div>
                        <div className='text-md text-slate-400 mt-6'>state</div>
                        <div>3d 12h</div>
                        <div>Active</div>
                    </div>
                    <a className='bg-burpl text-white text-center p-3 my-4 rounded-md' href={`/MEP/${id}`}>
                        Add MEP
                    </a>
                    <a className='bg-error text-white text-center p-3 rounded-md' href={`/Backup/${id}`}>
                        Add Backup
                    </a>
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
