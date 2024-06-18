import { useState } from "react";
import axios from "axios"
const Auth = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const [password,setPassowrd] = useState("")
    const [username,setUsername] = useState("")
    const togglePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility);
    }

    return (
		<div className="flex h-svh">
			<div className="bg-white w-full flex flex-col justify-center items-center gap-20">
				<h1 className="text-bluu text-6xl font-semibold">Login</h1>
				<div className="flex flex-col gap-5">
					<div className="flex gap-5 py-3 px-6 bg-slate-100 rounded-md">
						<img src="/icons/user.svg" />
						<input
							type="text"
							className="pt-1 focus:outline-none font-medium text-lg placeholder:text-clay bg-transparent"
							placeholder="Username"
              onChange={(e)=>{
                  setUsername(e.target.value)
              }}

						/>
					</div>
					<div className="flex gap-5 py-3 px-6 bg-slate-100 rounded-md">
						<img src="/icons/lock.svg" />
						<input
							type={passwordVisibility ? 'text' : 'password'}
							className="pt-1 focus:outline-none font-medium text-lg placeholder:text-clay bg-transparent"
							placeholder="password"
              onChange={(e)=>{
                  setPassowrd(e.target.value)
              }}
						/>
						<img
							src="/icons/eye.svg"
							className="cursor-pointer"
							onClick={togglePasswordVisibility}
						/>
					</div>
				</div>
				<button
					className="bg-burpl text-white px-8 py-2 rounded-md mt-10 text-lg"
					type="none"
					onClick={() => {
            axios.post("http://localhost:8000/api/token/",
              {
                username :username,
                password:password
              }
            ).then((res)=>{
                  let data = res.data
                  localStorage.setItem("token",data.access)
                  location.href = '/platforms';

              })
              .catch((err)=>{
                console.log(err)
              })
					}}
				>
					Login
				</button>
			</div>
			<div
				className="bg-blue-800 w-3/5 min-w-50 h-full flex items-center relative bg-cover"
				style={{ backgroundImage: 'url(/loginBG.png)' }}
			>
				<img
					src="/logo.svg"
					className="absolute top-10 right-20 w-30"
				/>
				<img
					src="/Illustration.svg"
					className="w-3/4 min-w-80 -translate-x-10"
				/>
			</div>
		</div>
	);
};

export default Auth;
