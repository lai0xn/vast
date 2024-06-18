export default function Header(){
    return (
        <div className="flex justify-between items-center w-full px-12 py-8 gap-20">
            <div>
                <h2 className="text-clay font-semibold text-lg">Hi Ouazzi,</h2>
                <h1 className="text-bluu font-bold text-4xl whitespace-nowrap">Welcome to vast!</h1>
            </div>
            <div className="flex w-full gap-5 items-center bg-white rounded-lg px-6 py-3">
                <img src="/icons/search.svg" className="w-4" />
                <input
                    type="text"
                    placeholder="Search"
                    className="placeholder:text-clay text-lg font-medium bg-transparent w-full focus:outline-none"
                />
                <img src="/icons/list.svg" className="w-4" />
            </div>
            <div className="text-burpl text-2xl flex gap-2 mr-8 font-medium">
                Logout
                <img src="/icons/logout.svg" />
            </div>
        </div>
    );
}