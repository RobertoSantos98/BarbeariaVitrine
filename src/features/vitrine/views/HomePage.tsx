import { LucideArrowRight, LucideCalendar1, LucideCrown, LucideScissorsSquareDashedBottom } from "lucide-react";


export function HomePage() {
    return(
        <>
        {/* Hero */}
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

        {/* 2 Section */}
        <section className="bg-amber-50">
            <div className="max-w-7xl mx-auto h-screen flex flex-col justify-around gap-4">
                <div className="flex py-8">
                    <span className="flex-1">
                        <p className="text-xs text-amber-800 uppercase">Por que escolher a Vitrine?</p>
                    </span>

                    <div className="w-3/4 px-16">
                        <h2 className="text-3xl font-bold">Uma Melhor Experiência revolucionária da consultoria até o corte final.</h2>
                        <p className="text-slate-700">Nós provemos de um modernos serviços que te ajudam a parecer e se sentir melhor, com barbeiros experiêntes, produtos premium e um confortavel ambiente.</p>
                    </div>
                </div>

                <div className="flex gap-4">

                    <div className="rounded-2xl overflow-hidden flex-1 border border-slate-200 group hover:bg-white/40 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="h-60 overflow-hidden">
                            <img className=" group-hover:scale-105 transition-all duration-700" src="https://img.magnific.com/fotos-gratis/um-cliente-a-cortar-o-cabelo-num-barbeiro_1303-20861.jpg" alt="" />
                        </div>

                        <div className="flex flex-col p-4 gap-2">
                            <div className="bg-amber-800/20 p-2 rounded-full self-start">
                                <LucideScissorsSquareDashedBottom size={36} color="oklch(47.3% 0.137 46.201)" />
                            </div>
                            <p className="text-xl font-bold">Barbeiros Experiêntes</p>
                            <p className="text-sm text-slate-700 ">Habilidosos e Experiêntes Barbeiros especializados em modernos e estilos clássicos.</p>
                        </div>

                    </div>

                    <div className="rounded-2xl relative overflow-hidden flex-1 flex group hover:-translate-y-2 duration-300 transition-all hover:shadow-xl  ">
                        <div className="overflow-hidden self-end absolute">
                            <div className="bg-linear-to-b z-10 from-amber-950/90 to-amber-950/10 absolute inset-0" />
                            <img className="group-hover:scale-105 transition-all duration-700" src="https://img.magnific.com/fotos-gratis/produtos-cosmeticos-de-beleza-masculina-com-display_23-2150435202.jpg" alt="" />
                        </div>

                        <div className="z-20 flex flex-col gap-2 p-8">
                            <div className="bg-amber-800/70 p-2 rounded-full self-start">
                                <LucideCrown size={36} color="#fff" />
                            </div>
                            <p className="text-xl text-white font-bold">Barbeiros Experiêntes</p>
                            <p className="text-sm text-slate-200 ">Habilidosos e Experiêntes Barbeiros especializados em modernos e estilos clássicos.</p>
                        </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden flex-1 border border-slate-200 group hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="h-60 overflow-hidden">
                            <img className=" group-hover:scale-105 transition-all duration-700 object-cover" src="https://png.pngtree.com/thumb_back/fw800/background/20251225/pngtree-barber-giving-a-man-haircut-in-salon-image_20923156.webp" alt="" />
                        </div>

                        <div className="flex flex-col p-4 gap-2">
                            <div className="bg-amber-800/20 p-2 rounded-full self-start">
                                <LucideCalendar1 size={36} color="oklch(47.3% 0.137 46.201)" />
                            </div>
                            <p className="text-xl font-bold">Experiência Relaxante</p>
                            <p className="text-sm text-slate-700 ">Um limpo, moderno e confortável espaço para aproveitar seu tempo ao máximo.</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>

         </>
    )
}