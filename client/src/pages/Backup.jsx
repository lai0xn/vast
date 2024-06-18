import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function Backup() {
    const { id } = useParams();
    if(!id) return notFound()
    
    return (
		<div className="flex h-svh">
			<Sidebar />
            <div className='w-full bg-gray-300 flex justify-center items-center'>
                <div className='bg-white p-10 rounded-lg flex flex-col gap-3 min-w-96 font-semibold relative'>
                    <a className='absolute top-0 right-0 bg-error w-3 h-3 m-3 rounded-full' href='/Platforms'></a>
                    <div className='text-center text-2xl font-bold text-bluu'>Backup Created!</div>
                    <a className='bg-burpl text-white text-center p-3 rounded-md' href='/testPDF.pdf' download>
                        Download PDF
                    </a>  
                    <a className='border-2 border-burpl text-burpl text-center p-3 rounded-md' href=''>
                        Upload PDF
                    </a>
                    <a className='bg-success text-white text-center py-2 px-5 mx-auto mt-6 w-fit rounded-md' href={`/Platforms`}>
                        Done
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