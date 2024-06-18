import Sidebar from '../components/Sidebar';
import axios from "axios"
import {useState} from "react"
export default function Add() {
  let [vmName,setVmName] = useState("")
  let [department,setDepartment] = useState("")
  let [ram,setRam] = useState("")
  let [cpu,setCpu] = useState("")
  let [disque,setDisque] = useState("")

  const token = localStorage.getItem("token")
  const createVm = ()=>{
    axios.post("http://localhost:8000/vms/",{
     headers:{
        Authorization : "Bearer " + token
      },
      nom_de_la_vm:vmName,
      departement:department,
      ram:ram,
      nombre_de_cpu:cpu,
      disque:disque,
      vcenter:1,
      actif:true,
      os:1,
      type_de_vm:"web"
    })
    .then(res=>{
        console.log(res.data)
        alert("vm created")
        location.href = "/platforms"
      })
  }
  return (
		<div className="flex h-svh">
			<Sidebar />
			<div className="w-full bg-gray-300 flex justify-center items-center">
				<div className="bg-white p-10 rounded-lg flex flex-col gap-3 relative">
					<a className='absolute top-0 right-0 bg-error w-3 h-3 m-3 rounded-full' href='/Platforms'></a>
					<div className='text-center text-2xl font-bold text-bluu'>Add a VM</div>
					<input
						type="text"
						placeholder="VM name"
						className="bg-pale py-2 px-4 rounded-lg focus:outline-none"
            onChange={(e)=>setVmName(e.target.value)}

					/>
					<input
						type="text"
						placeholder="Department name"
						className="bg-pale py-2 px-4 rounded-lg focus:outline-none"
            onChange={(e)=>setDepartment(e.target.value)}
					/>
          	<input
						type="number"
						placeholder="Cpu Cores"
						className="bg-pale py-2 px-4 rounded-lg focus:outline-none"
            onChange={(e)=>setCpu(e.target.value)}

					/>
          	<input
						type="number"
						placeholder="RAM"
						className="bg-pale py-2 px-4 rounded-lg focus:outline-none"
            onChange={(e)=>setRam(e.target.value)}

					/>
          	<input
						type="number"
						placeholder="Disque"
						className="bg-pale py-2 px-4 rounded-lg focus:outline-none"
            onChange={(e)=>setDisque(e.target.value)}

					/>
					<div className="border border-burpl flex rounded-lg cursor-pointer my-2 mx-auto w-fit">
						<div className="w-12 rounded-md text-center text-white bg-burpl">
							WEB
						</div>
						<div className="w-12 rounded-md text-center text-burpl">
							APP
						</div>
						<div className="w-12 rounded-md text-center text-burpl">
							DB
						</div>
					</div>
					<input
						type="text"
						placeholder="OS"
						className="bg-pale py-2 px-4 rounded-lg focus:outline-none"
					/>
					<button
						className="bg-burpl px-4 py-2 mt-4 rounded-md text-white"
						onClick={() => {
							console.log('add');
              createVm()
						}}
					>
						Add VM
					</button>
				</div>
			</div>
		</div>
	);
}
