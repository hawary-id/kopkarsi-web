import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function Dashboard({auth}) {
    return (
        <Authenticated user={auth.user}>
           <div className="">Dashboard</div> 
        </Authenticated>
    )
}