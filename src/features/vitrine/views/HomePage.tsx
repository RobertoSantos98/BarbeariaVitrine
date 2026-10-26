import { LucideArrowBigUp, LucideArrowRight, LucideArrowUp, LucideCalendar1, LucideCrown, LucideFaceGrinning, LucideMinus, LucidePipette, LucidePlus, LucideScissors, LucideScissorsSquareDashedBottom, LucideSlice } from "lucide-react";
import { useState } from "react";


export function HomePage() {


    const questions = [
        { question: "Eu preciso de um agendamento?", answer: "Não, você pode entrar sem agendamento, mas recomendamos agendar para garantir seu horário." },
        { question: "Quais métodos de pagamento são aceitos?", answer: "Aceitamos cartões de crédito, débito e pagamentos em dinheiro." },
        { question: "Vocês oferecem serviços para crianças?", answer: "Sim, oferecemos cortes de cabelo para crianças de todas as idades." },
        { question: "Eu posso aparar minha barba sem cortar o cabelo?", answer: "Sim, você pode escolher apenas o serviço de aparar a barba." },
        { question: "Vocês oferecem produtos para venda?", answer: "Sim, temos uma seleção de produtos premium para cabelo e barba disponíveis para compra." },
    ]


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
                    <img className="w-full h-screen object-cover" src="https://www.qpontos.com.br/wp-content/uploads/2024/01/nathon-oski-EW_rqoSdDes-unsplash-1536x1020.jpg" alt="" />
                    <div className="bg-linear-to-r from-amber-950 via-transparent from-20% via-60% to-black absolute inset-0"/>
                </div>

            </div>

        </section>

        {/* 2 Section */}
        <section className="bg-amber-50">
            <div className="max-w-7xl mx-auto py-16 flex flex-col justify-around gap-4">
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
                            <img className=" group-hover:scale-105 transition-all duration-700 object-cover" src="https://static.vecteezy.com/ti/fotos-gratis/p1/76122901-barbearia-barba-aliciamento-e-homens-com-cabeleireiro-e-cliente-com-barbeiro-e-barbeador-com-servico-facial-cabelo-aparar-equipamento-e-salao-cliente-com-profissional-e-especialista-com-tatuagem-e-pente-foto.jpg" alt="" />
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


        <section className="bg-amber-50">
            <div className="max-w-7xl mx-auto flex flex-col justify-around px-2 py-16 gap-12">

                <div className="flex flex-col gap-2 items-center">
                    <span className="text-xs self-start text-amber-800 uppercase">O que oferecemos</span>
                    <h3 className="text-3xl font-bold">Serviços para todos os estilos</h3>
                    <p className="text-slate-600">Descubra uma ampla gama de serviços de barbearia para atender às suas necessidades e preferências.</p>
                </div>

                <div className="flex w-full gap-4 justify-around items-center" >

                    <div className="flex flex-col gap-4 flex-1">

                        <ServiceCard icon={<LucideScissors color="oklch(47.3% 0.137 46.201)" />} title="Corte de Cabelo" description="Cortes modernos e clássicos para todos os estilos." img="https://i.pinimg.com/236x/00/c5/65/00c565fd9729936e6c5a961643ed81f8.jpg" />

                        <ServiceCard icon={<LucideSlice color="oklch(47.3% 0.137 46.201)" />} title="Barba e Estilização" description="Navalha e estilo sempre andam juntos." img="https://img.magnific.com/fotos-gratis/jovem-arrumando-a-barba-no-barbeiro_23-2148985728.jpg" />
                    </div>

                    <div className="flex-1 relative max-h-110 max-w-90 w-full rounded-br-2xl rounded-bl-2xl rounded-tr-full rounded-tl-full overflow-hidden" >
                        <div className="absolute inset-0 bg-amber-800/30" />
                        <img className="object-cover rounded-b-2xl w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4T6CZtlTnGt3bK6lMsU4by76-J1xUBFVyEWV_RPVGvKwwVVn4cYu7EW0&s=10" alt="" />
                    </div>

                    <div className="flex flex-col gap-4 flex-1">
                        <ServiceCard icon={<LucideFaceGrinning color="oklch(47.3% 0.137 46.201)"  />} title="Tratamento de Cabelo e Barba" description="Cortes modernos e clássicos para todos os estilos." img="https://thumbs.dreamstime.com/b/retrato-da-barba-%C3%A0-moda-do-homem-tesouras-barbeiro-e-l%C3%A2mina-reta-barbearia-farpado-vintage-138583873.jpg" />

                        <ServiceCard icon={<LucidePipette color="oklch(47.3% 0.137 46.201)" />} title="Face Care" description="Navalha e estilo sempre andam juntos." img="https://thumbs.dreamstime.com/b/barbeiro-em-barbearia-fazendo-massagem-suave-de-clientes-frente-para-prepar%C3%A1-lo-o-processo-barba-gentil-cuidado-com-barbeada-281875772.jpg" />

                    </div>


                </div>


            </div>
        </section>


        <section className="bg-amber-50">
            <div className="max-w-7xl mx-auto max-h-320 flex flex-col justify-around px-2 py-12 gap-12">
                <div className="flex flex-col gap-2 items-center">
                    <span className="text-xs self-start text-amber-800 uppercase">Preços</span>
                    <h3 className="text-3xl font-bold">Preços Simple e Transparente.</h3>
                    <p className="text-slate-600">Escolha um serviço e liberte seu estilo.</p>
                </div>
            
                <div className="flex gap-4 justify-center items-center">
                    <PrecoCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6YkhuD9f3gV4Uxyv3uKMTDwWn435SZlo1vwCzd7kzBQ&s=10" title="Corte de Cabelo" valor="R$ 40,00" />
                    <PrecoCard img="https://img.magnific.com/fotos-gratis/homem-num-salao-de-barbearia-a-cortar-o-cabelo-e-a-barba_1303-20953.jpg" title="Barba" valor="R$ 25,00" />
                    <PrecoCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPxpUhQ_Y0ptmEtYiRIdBrIcy5D0VXVFP4g4ZVVNL-8qrU0RSelI_fus&s=10" title="Hidratação" valor="R$ 30,00" /> 
                    <PrecoCard img="https://www.cidadeoferta.com.br/storage/offers/7917-barbearia-gp-43-londrina-corte-masculino-e-barba-imagem-1.jpg" title="Combo Corte + Barba" valor="R$ 60,00" />
                </div>
            </div>

        </section>

        <section className="bg-amber-50">
            <div className="max-w-7xl mx-auto max-h-320 flex flex-col justify-around px-2 py-12 gap-12">
                <div className="flex flex-col gap-2 items-center">
                    <span className="text-xs self-start text-amber-800 uppercase">Nosso Time</span>
                    <h3 className="text-3xl font-bold">Conheça nosso time de profissionais</h3>
                    <p className="text-slate-600">Conheça os profissionais que estão prontos para transformar seu estilo.</p>
                </div>
            
                <div className="flex gap-4 justify-center items-center">
                    <Barbers img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG_DEtWGrLL6iehCuZFfH9ZrIDu1LQaiU9xlZgLYtN2w&s=10" title="João Silva" descricao="Barbeiro há 7 anos" />
                    <Barbers img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6ANQsAiujOY-Kah5qR66DB750R9yXk06C2OykTrJOA&s=10" title="Carlos Souza" descricao="Especialista em cortes clássicos" />
                    <Barbers img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8LbYy-2NqSf1cI6cxSJQno79xSXZp8Kyonsd6fhYeYQ&s=10" title="Pedro Oliveira" descricao="Expert em barba e estilização" />
                    <Barbers img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_7EcVn172ixeBpCAod3h5_Pz36ODHJ3o9EW5dVEW3nQ&s=10" title="Lucas Pereira" descricao="Profissional em tratamentos capilares" />
                </div>
            </div>
        </section>

        <section className="bg-amber-50">
            <div className="max-w-7xl mx-auto max-h-320 flex flex-col justify-around px-2 py-12 gap-12">
                <div className="flex flex-col gap-2 items-center">
                    <span className="text-xs self-start text-amber-800 uppercase">Duvidas</span>
                    <h3 className="text-3xl font-bold">Tire dúvidas antes de nos visitar</h3>
                    <p className="text-slate-600">Tudo o que você precisa saber sobre nossos serviços.</p>
                </div>

                <div className="flex gap-4 items-center">
                    <div className="flex flex-col gap-4 flex-1">
                        {questions.map((q, index) => (
                            <QuestionCard key={index} question={q.question} answer={q.answer} />
                        ))}
                    </div>

                    <div className="rounded-2xl overflow-hidden bg-white border border-slate-100">
                        <img className="h-60 w-80 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4T6CZtlTnGt3bK6lMsU4by76-J1xUBFVyEWV_RPVGvKwwVVn4cYu7EW0&s=10" alt="" />
                        <div className="flex flex-col gap-2 p-4 items-start">
                            <p className="text-lg font-bold">Ainda tem dúvidas?</p>
                            <p className="text-slate-600 text-sm" >Entre em contato conosco!</p>
                            <button className="bg-black mt-2 text-slate-100 border-2 items-center cursor-pointer border-slate-600 text-sm font-bold flex gap-4 tracking-wider py-2 px-8 rounded-full hover:bg-amber-800 hover:border-amber-800 transition-colors duration-300 hover:shadow">
                                Contate-nos
                                <LucideArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>



            </div>
        </section>

         </>
    )
}


type ServiceCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
    img: string;
}

function ServiceCard({ icon, title, description, img }: ServiceCardProps) {
    return(
        <div className="h-45 flex border-2 border-slate-200 p-2 rounded-3xl gap-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex-1 flex-col gap-2 justify-start flex py-2">
                <div className="bg-amber-800/20 p-2 rounded-full self-start mb-2">
                    {icon}
                </div>
                <p className="text-lg font-bold">{title}</p>
                <p className="text-slate-600 text-xs">{description}</p>
            </div>

            <div className="rounded-2xl overflow-hidden">
                <img className="h-40 w-40 object-cover" src={img} alt="" />
            </div>
        </div>
    )
}

type PrecoCardProps = {
    img: string;
    title: string;
    valor: string;
}

function PrecoCard({ img, title, valor }: PrecoCardProps) {
    return(
        <div className="rounded-2xl overflow-hidden flex flex-col gap-2 bg-white border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div>
                <img className="h-50 w-50 object-cover" src={img} alt="" />
            </div>
            <div className="p-2 flex flex-col">
                <h4 className="font-bold">{title}</h4>
                <p className="text-amber-600 font-bold self-end">{valor}</p>
            </div>
        </div>
    )
}

type BarbersProps = {
    img: string;
    title: string;
    descricao: string;
}

function Barbers({ img, title, descricao }: BarbersProps) {
    return(
        <div className="rounded-2xl overflow-hidden flex flex-col gap-2 hover:scale-115 bg-white border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className=" overflow-hidden">
                <img className="h-50 w-50 object-cover hover:scale-105 transition-all duration-1000" src={img} alt="" />
            </div>
            <div className="py-4 px-2 flex flex-col items-center">
                <h4 className="font-bold text-lg">{title}</h4>
                <p className="text-slate-600 text-xs">{descricao}</p>
                <div className="w-full mx-4 h-px bg-slate-200 mt-2 rounded-full" />
                <div>
                    <button className="bg-amber-800 text-xs text-white px-4 py-2 rounded-full mt-2 hover:bg-amber-700 transition-colors duration-300">Agendar</button>
                </div>
            </div>
        </div>
    )
}

type QuestionCardProps = {
    question: string;
    answer: string;
}

function QuestionCard({ question, answer }: QuestionCardProps) {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <button 
            className="cursor-pointer rounded-2xl overflow-hidden flex flex-col gap-2 bg-white border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="p-4 flex flex-col gap-2">
                <div className="flex justify-between items-center" >
                    <p className="font-bold text-lg">{question}</p>
                    {isOpen ? (
                        <LucideMinus size={18}/>
                    ) : (
                        <LucidePlus size={18} />
                    )}
                </div>
                {isOpen && (
                    <p className="text-slate-600 self-start text-sm">{answer}</p>
                )}
            </div>
        </button>
    )
}