import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar";
import { LucideArrowRight } from "lucide-react";



export function ClientLayout(){
    return(
        <div className="min-h-screen bg-zinc-50 flex flex-col">

            <NavBar />


            <main className="grow">
                <Outlet />
            </main>

            <footer className="bg-linear-to-r from-black via-black to-black/90">
                <div className="max-w-7xl mx-auto items-center flex justify-between">
                    <div className="text-white text-3xl font-medium gap-8 flex flex-col">
                        Seu próximo corte está esperando agendamento
                        <p className="text-sm text-slate-300">Agende seu horário hoje e expêriencie o diferencial da Vitrine Barbearia</p>
                        <button className="text-black text-sm bg-white rounded-full py-4 px-12 self-start flex items-center justify-center gap-4">
                            Agendar Horário
                            <LucideArrowRight size={18} />
                        </button>
                    </div>

                    <div className="relative">
                        <img className="bg-linear-to-r from-transparent to-100%" src="https://static.vecteezy.com/ti/fotos-gratis/t2/35449083-ai-gerado-barbearia-mesa-com-barbeiro-ferramentas-barbearia-interior-fundo-gratis-foto.jpg" alt="" />
                        <div className="absolute inset-0 bg-linear-to-r from-black to-transparent" />
                    </div>
                </div>
            </footer>


        </div>
    )
}