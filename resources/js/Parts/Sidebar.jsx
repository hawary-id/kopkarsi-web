import MenuItem from "@/Components/MenuItem";

export default function Sidebar(second) {
    return (
        <section className="hidden w-12 p-3 space-y-4 overflow-hidden bg-white md:inline-block md:w-56">
            <div className="block text-xl font-semibold ">Kopkarsi</div>
            <MenuItem
                text="Dashboard"
                icon="bi-house"
                link={route('admin.dashboard')}
                active={route().current('admin.dashboard')}    
            />
            <MenuItem
                text="Anggota"
                icon="bi-person"
                link={route('admin.dashboard')}
                active={route().current('admin.dashboard')}    
            />
            <MenuItem
                text="Data Master"
                icon="bi-folder2"
                link={route('login')}
                active={route().current('login')}    
                dropdown={true}
            />
            <MenuItem
                text="Transaction"
                icon="bi-arrow-left-right"
                link={route('login')}
                active={route().current('login')}
                dropdown={true}    
            />
            <MenuItem
                text="Configuration"
                icon="bi-gear"
                link={route('login')}
                active={route().current('login')}
                dropdown={true}    
            />
        </section>
    )
}