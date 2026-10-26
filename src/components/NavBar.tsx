import { LucideArrowRight } from "lucide-react";
import { Link } from "react-router-dom";



export function NavBar(){
    return(
        <nav className="top-0 z-50 py-4">
            <div className="flex justify-between max-w-7xl mx-auto">
                {/* Logo */}
                <div className="text-amber-950 font-bold text-3xl justify-center items-center flex flex-col">
                    Vitrine
                    <p className="text-xs tracking-wider uppercase">Barbearia</p>
                </div>

                {/* Link de Navegação */}
                <div className="flex gap-4 items-center">
                    <Link className="relative text-base after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-amber-700 after:transition-transform  after:duration-300  hover:after:scale-x-100" to="#">
                        Home
                    </Link>
                    <Link className="relative text-base after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-amber-700 after:transition-transform  after:duration-300  hover:after:scale-x-100" to="#">
                        Serviços
                    </Link>
                    <Link className="relative text-base after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-amber-700 after:transition-transform  after:duration-300  hover:after:scale-x-100" to="#">
                        Preços
                    </Link>

                    <button className="bg-amber-950 text-sm ml-12 flex items-center gap-2 text-amber-50 rounded-full px-8 py-4 hover:bg-amber-900 hover:cursor-pointer">
                        Agendar Horário 
                        <LucideArrowRight size={18}/>
                    </button>
                </div>
            </div>
        </nav>
    )
}