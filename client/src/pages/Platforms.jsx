/* eslint-disable react/prop-types */
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import axios from "axios"
import {useEffect,useState} from "react"
const Platforms = () => {
  let [vmData,setVmData] = useState([])
  const token = localStorage.getItem("token")
  useEffect(()=>{
    axios.get("http://localhost:8000/vms/",{
      headers:{
        Authorization : "Bearer " + token
      }
    })
    .then((res)=>{
        let data = res.data
        console.log(data)
        setVmData(data)
      })
  },[])
	
	return (
		<div className="flex h-svh">
			<Sidebar />
			<div
				className="w-full h-[100vh] bg-pale grid relative"
				style={{ gridTemplateRows: 'auto 1fr' }}
			>
				<div className="h-56 border-b border-clay border-dashed">
					<Header />
					<div className="flex justify-between px-14">
						<div className="border-2 border-burpl flex py-2 px-7 gap-5 text-burpl text-lg font-semibold rounded-xl items-center cursor-pointer">
							Plat_01 <img src="/icons/dropdown-blue.svg" />
						</div>
						<a className="bg-burpl flex py-2 px-7 gap-7 text-white text-xl font-semibold rounded-lg items-center cursor-pointer" href="/Add">
							Add VM +
						</a>
					</div>
				</div>
				<div
					className="p-10 space-y-3 grid overflow-hidden"
					style={{ gridTemplateRows: 'auto 1fr auto' }}
				>
					<div className="text-slate-400 flex gap-3 text-xl">
						<img src="/icons/simple-list.svg" />
						List of virtual machines
					</div>

					<div
						className="space-y-2 overflow-auto p-4 pl-0"
						style={{ scrollbarWidth: 'thin' }}
					>
						{vmData.map((vm, index) => (
							<VM
								key={index}
								name={vm.nom_de_la_vm}
								created={vm.ram}
								state={vm.actif}
								id={vm.id_vm}
							/>
						))}
					</div>

					<div className="flex justify-between items-center text-2xl mt-6">
						<div className="border-2 border-[#A18CFF] flex py-2 px-7 gap-5 text-[#A18CFF] font-semibold rounded-xl items-center cursor-pointer">
							pervious <img src="/icons/previous-page.svg" />
						</div>
						<div className="text-clay">1/3</div>
						<div className="bg-burpl flex py-2 px-7 gap-7 text-white font-semibold rounded-lg items-center cursor-pointer mr-4">
							next <img src="/icons/next-page.svg" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

function VM({ name, created, state, id }) {
	return (
		<div
			className="bg-white p-3 rounded-md grid gap-10"
			style={{ gridTemplateColumns: '2fr 1fr 1fr auto' }}
		>
			<div className="flex gap-5">
				<a href={`/About/${id}`}>
					<img
						src="/icons/VM.svg"
						className="p-4 bg-pale rounded-full w-14 h-14 cursor-pointer"
					/>
				</a>
				<div className="flex flex-col">
					<div className="text-slate-400 mt-4">VM Name</div>
					<div>{name}</div>
				</div>
			</div>
			<div className="flex flex-col">
				<div className="text-slate-400 mt-4">Ram</div>
				<div>{created} GB</div>
			</div>
			<div className="flex flex-col">
				<div className="text-slate-400 mt-4">state</div>
				<div className="flex items-center gap-3">
					<span className="w-14">{state === true ? "active" : "disabled"}</span>
					<span
						className={
							state === true
								? 'bg-success block w-2 h-2 rounded-full'
								: 'bg-error block w-2 h-2 rounded-full'
						}
					></span>
				</div>
			</div>
			<div className="flex items-center gap-5 p-4 bg-pale rounded-md">
				
				<a href={`/About/${id}`}>
					<img src="/icons/about-VM.svg" className="h-5" />
				</a>

				<a href={`/Edit/${id}`}>
					<img src="/icons/edit-VM.svg" className="h-5" />
				</a>
				
				<a href={`/Delete/${id}`}>
					<img src="/icons/delete-VM.svg" className="h-5" />
				</a>
			</div>
		</div>
	);
}
export default Platforms;
