import { LucideArrowRight } from "lucide-react";


export function HomePage() {
    return(
        <section className="bg-linear-to-r from-amber-950 from-40% to-black">
            <div className="max-w-7xl mx-auto h-screen flex justify-between relative">
                <div className="h-full justify-center flex flex-col gap-8 w-1/2 z-10">
                    <p className="uppercase text-amber-200/70 tracking-widest">Premium para Homens</p>
                    <h1 className="text-6xl font-bold text-white uppercase">Fique <br /> no estilo <br /> todos os dias</h1>
                    <p className="text-slate-50">Cortes modernos. Barbeiros Expêrientes. <br /> Um melhor você. </p>
                    <div>
                        <button className="bg-white flex h-12 pr-1 py-1 pl-8 hover:text-amber-900  hover:cursor-pointer rounded-full border-2 border-transparent hover:shadow-sm shadow-amber-900 hover:border-amber-700  font-bold items-center gap-4 hover:gap-6 duration-300 group transition-all ">
                            Agendar Horário
                            <div className="group-hover:bg-amber-700 rounded-full h-full w-16 items-center flex justify-center delay-100 transition-all">
                                <LucideArrowRight size={18} className="group-hover:text-white transition-colors" />
                            </div>
                        </button>
                    </div>
                    <div className="flex justify-around">
                        <div className="text-white text-2xl font-bold">
                            10k+
                            <p className="text-xs font-medium text-slate-50/80">Clientes Felizes</p>
                        </div>
                        <div className="h-full w-0.5 bg-slate-200/40 rounded-full" />

                        <div className="text-white text-2xl font-bold">
                            3+
                            <p className="text-xs font-medium text-slate-50/80">Anos de Experiência</p>
                        </div>
                        <div className="h-full w-0.5 bg-slate-200/40 rounded-full" />

                        <div className="text-white text-2xl font-bold">
                            4.9
                            <p className="text-xs font-medium text-slate-50/80">Avaliação dos Clientes</p>
                        </div>
                    </div>
                </div>

                <div className="absolute w-full">
                    <img className="w-full h-screen object-cover" src="https://png.pngtree.com/background/20230613/original/pngtree-some-pictures-of-an-antique-barber-shop-picture-image_3379234.jpg" alt="" />
                    <div className="bg-linear-to-r from-amber-950 via-transparent from-20% via-60% to-black absolute inset-0"/>
                </div>

            </div>

        </section>
    )
}