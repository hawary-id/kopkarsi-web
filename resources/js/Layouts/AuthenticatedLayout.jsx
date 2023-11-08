import Navbar from "@/Parts/Navbar";
import Sidebar from "@/Parts/Sidebar";


export default function Authenticated({ user, header, children }) {
    return (
        <div className="flex w-full min-h-screen bg-gray-100">
            <Sidebar/>
            <main className='grow'>
                <Navbar user={user}/>
                {children}
            </main>
        </div>
    );
}
