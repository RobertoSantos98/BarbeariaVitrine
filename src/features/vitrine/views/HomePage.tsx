import {
    LucideArrowRight,
    LucideCalendar1,
    LucideCrown,
    LucideFaceGrinning,
    LucideMinus,
    LucidePipette,
    LucidePlus,
    LucideScissors,
    LucideScissorsSquareDashedBottom,
    LucideSlice
} from "lucide-react";

import { useState } from "react";

export function HomePage() {

    const questions = [
        {
            question: "Eu preciso de um agendamento?",
            answer: "Não, você pode entrar sem agendamento, mas recomendamos agendar para garantir seu horário."
        },
        {
            question: "Quais métodos de pagamento são aceitos?",
            answer: "Aceitamos cartões de crédito, débito e pagamentos em dinheiro."
        },
        {
            question: "Vocês oferecem serviços para crianças?",
            answer: "Sim, oferecemos cortes de cabelo para crianças de todas as idades."
        },
        {
            question: "Eu posso aparar minha barba sem cortar o cabelo?",
            answer: "Sim, você pode escolher apenas o serviço de aparar a barba."
        },
        {
            question: "Vocês oferecem produtos para venda?",
            answer: "Sim, temos uma seleção de produtos premium para cabelo e barba disponíveis para compra."
        },
    ];

    return (
        <>
            {/* =========================================================
                HERO
            ========================================================= */}
            <section className="bg-linear-to-r from-amber-950 from-40% to-black">
                <div className="
                    max-w-7xl
                    mx-auto
                    min-h-screen
                    flex
                    items-center
                    relative
                    overflow-hidden
                ">

                    {/* Imagem de fundo */}
                    <div className="absolute inset-0">
                        <img
                            className="w-full h-full object-cover"
                            src="https://www.qpontos.com.br/wp-content/uploads/2024/01/nathon-oski-EW_rqoSdDes-unsplash-1536x1020.jpg"
                            alt="Barbearia"
                        />

                        <div className="
                            absolute
                            inset-0
                            bg-linear-to-r
                            from-amber-950
                            via-amber-950/80
                            to-black/50
                        " />
                    </div>

                    {/* Conteúdo */}
                    <div className="
                        relative
                        z-10
                        w-full
                        lg:w-3/5
                        px-5
                        sm:px-8
                        lg:px-12
                        py-24
                        flex
                        flex-col
                        justify-center
                        gap-6
                    ">

                        <p className="
                            uppercase
                            text-amber-200/70
                            tracking-widest
                            text-xs
                            sm:text-sm
                        ">
                            Premium para Homens
                        </p>

                        <h1 className="
                            text-4xl
                            sm:text-5xl
                            lg:text-6xl
                            xl:text-7xl
                            font-bold
                            text-white
                            uppercase
                            leading-tight
                        ">
                            Fique <br />
                            no estilo <br />
                            todos os dias
                        </h1>

                        <p className="
                            text-slate-50
                            text-sm
                            sm:text-base
                            max-w-md
                        ">
                            Cortes modernos. Barbeiros experientes.
                            <br className="hidden sm:block" />
                            Um melhor você.
                        </p>

                        <div>
                            <button className="
                                bg-white
                                flex
                                h-12
                                pr-1
                                py-1
                                pl-6
                                sm:pl-8
                                rounded-full
                                border-2
                                border-transparent
                                hover:text-amber-900
                                hover:border-amber-700
                                hover:shadow-sm
                                font-bold
                                items-center
                                gap-3
                                sm:gap-4
                                hover:gap-5
                                duration-300
                                group
                                transition-all
                            ">
                                Agendar Horário

                                <div className="
                                    group-hover:bg-amber-700
                                    rounded-full
                                    h-full
                                    w-12
                                    sm:w-16
                                    items-center
                                    flex
                                    justify-center
                                    transition-all
                                ">
                                    <LucideArrowRight
                                        size={18}
                                        className="group-hover:text-white transition-colors"
                                    />
                                </div>
                            </button>
                        </div>

                        {/* Estatísticas */}
                        <div className="
                            grid
                            grid-cols-3
                            max-w-lg
                            mt-4
                            divide-x
                            divide-slate-200/40
                        ">

                            <div className="text-white text-center sm:text-left px-2 sm:px-4 first:pl-0">
                                <p className="text-xl sm:text-2xl font-bold">
                                    10k+
                                </p>

                                <p className="text-[10px] sm:text-xs font-medium text-slate-50/80">
                                    Clientes Felizes
                                </p>
                            </div>

                            <div className="text-white text-center sm:text-left px-2 sm:px-4">
                                <p className="text-xl sm:text-2xl font-bold">
                                    3+
                                </p>

                                <p className="text-[10px] sm:text-xs font-medium text-slate-50/80">
                                    Anos de Experiência
                                </p>
                            </div>

                            <div className="text-white text-center sm:text-left px-2 sm:px-4 last:pr-0">
                                <p className="text-xl sm:text-2xl font-bold">
                                    4.9
                                </p>

                                <p className="text-[10px] sm:text-xs font-medium text-slate-50/80">
                                    Avaliação dos Clientes
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* =========================================================
                POR QUE ESCOLHER
            ========================================================= */}
            <section className="bg-amber-50">

                <div className="
                    max-w-7xl
                    mx-auto
                    px-4
                    sm:px-6
                    lg:px-8
                    py-12
                    sm:py-16
                ">

                    {/* Título */}
                    <div className="
                        flex
                        flex-col
                        md:flex-row
                        gap-4
                        md:gap-8
                        py-6
                        sm:py-8"
                    >

                        <span className="md:w-1/4 text-xs text-amber-800 uppercase" >
                            Por que escolher a Vitrine?
                        </span>

                        <div className="md:w-3/4">

                            <h2 className="
                                text-2xl
                                sm:text-3xl
                                font-bold
                                leading-tight
                            ">
                                Uma Melhor Experiência revolucionária da
                                consultoria até o corte final.
                            </h2>

                            <p className="
                                text-slate-700
                                mt-3
                                text-sm
                                sm:text-base
                            ">
                                Nós provemos modernos serviços que te ajudam
                                a parecer e se sentir melhor, com barbeiros
                                experientes, produtos premium e um confortável
                                ambiente.
                            </p>

                        </div>
                    </div>


                    {/* Cards */}
                    <div className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-4
                    ">

                        {/* Card 1 */}
                        <div className="
                            rounded-2xl
                            overflow-hidden
                            border
                            border-slate-200
                            group
                            hover:bg-white/40
                            hover:shadow-xl
                            hover:-translate-y-2
                            transition-all
                            duration-300
                        ">

                            <div className="h-52 sm:h-60 overflow-hidden">
                                <img
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        group-hover:scale-105
                                        transition-all
                                        duration-700
                                    "
                                    src="https://img.magnific.com/fotos-gratis/um-cliente-a-cortar-o-cabelo-num-barbeiro_1303-20861.jpg"
                                    alt="Barbeiro cortando cabelo"
                                />
                            </div>

                            <div className="flex flex-col p-4 gap-2">

                                <div className="
                                    bg-amber-800/20
                                    p-2
                                    rounded-full
                                    self-start
                                ">
                                    <LucideScissorsSquareDashedBottom
                                        size={32}
                                        className="text-amber-800"
                                    />
                                </div>

                                <p className="text-lg sm:text-xl font-bold">
                                    Barbeiros Experientes
                                </p>

                                <p className="text-sm text-slate-700">
                                    Habilidosos e experientes barbeiros
                                    especializados em modernos e estilos clássicos.
                                </p>

                            </div>
                        </div>


                        {/* Card 2 */}
                        <div className="
                            rounded-2xl
                            relative
                            overflow-hidden
                            min-h-80
                            group
                            hover:-translate-y-2
                            duration-300
                            transition-all
                            hover:shadow-xl
                        ">

                            <div className="absolute inset-0">

                                <div className="
                                    bg-linear-to-b
                                    from-amber-950/90
                                    to-amber-950/10
                                    absolute
                                    inset-0
                                    z-10"
                                />

                                <img
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        group-hover:scale-105
                                        transition-all
                                        duration-700
                                    "
                                    src="https://img.magnific.com/fotos-gratis/produtos-cosmeticos-de-beleza-masculina-com-display_23-2150435202.jpg"
                                    alt="Produtos de barbearia"
                                />
                            </div>

                            <div className="
                                relative
                                z-20
                                flex
                                flex-col
                                gap-2
                                p-6
                                sm:p-8"
                            >

                                <div className="
                                    bg-amber-800/70
                                    p-2
                                    rounded-full
                                    self-start
                                ">
                                    <LucideCrown
                                        size={32}
                                        className="text-white"
                                    />
                                </div>

                                <p className="text-xl text-white font-bold">
                                    Produtos Premium
                                </p>

                                <p className="text-sm text-slate-200">
                                    Produtos de alta qualidade para manter
                                    seu estilo mesmo depois de sair da barbearia.
                                </p>

                            </div>
                        </div>


                        {/* Card 3 */}
                        <div className="
                            rounded-2xl
                            overflow-hidden
                            border
                            border-slate-200
                            group
                            hover:bg-white
                            hover:shadow-xl
                            hover:-translate-y-2
                            transition-all
                            duration-300
                        ">

                            <div className="h-52 sm:h-60 overflow-hidden">

                                <img
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        group-hover:scale-105
                                        transition-all
                                        duration-700
                                    "
                                    src="https://static.vecteezy.com/ti/fotos-gratis/p1/76122901-barbearia-barba-aliciamento-e-homens-com-cabeleireiro-e-cliente-com-barbeiro-e-barbeador-com-servico-facial-cabelo-aparar-equipamento-e-salao-cliente-com-profissional-e-especialista-com-tatuagem-e-pente-foto.jpg"
                                    alt="Experiência na barbearia"
                                />

                            </div>

                            <div className="flex flex-col p-4 gap-2">

                                <div className="
                                    bg-amber-800/20
                                    p-2
                                    rounded-full
                                    self-start
                                ">
                                    <LucideCalendar1
                                        size={32}
                                        className="text-amber-800"
                                    />
                                </div>

                                <p className="text-xl font-bold">
                                    Experiência Relaxante
                                </p>

                                <p className="text-sm text-slate-700">
                                    Um limpo, moderno e confortável espaço
                                    para aproveitar seu tempo ao máximo.
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* =========================================================
                SERVIÇOS
            ========================================================= */}
            <section className="bg-amber-50">

                <div className="
                    max-w-7xl
                    mx-auto
                    px-4
                    sm:px-6
                    lg:px-8
                    py-12
                    sm:py-16
                ">

                    <div className="
                        flex
                        flex-col
                        gap-2
                        items-center
                        text-center
                    ">

                        <span className="
                            text-xs
                            text-amber-800
                            uppercase
                            self-start
                        ">
                            O que oferecemos
                        </span>

                        <h3 className="
                            text-2xl
                            sm:text-3xl
                            font-bold
                        ">
                            Serviços para todos os estilos
                        </h3>

                        <p className="
                            text-slate-600
                            text-sm
                            sm:text-base
                            max-w-2xl
                        ">
                            Descubra uma ampla gama de serviços de barbearia
                            para atender às suas necessidades e preferências.
                        </p>

                    </div>


                    <div className="
                        mt-10
                        grid
                        grid-cols-1
                        lg:grid-cols-3
                        gap-6
                        items-center
                    ">

                        {/* Esquerda */}
                        <div className="flex flex-col gap-4">
                            <ServiceCard
                                icon={<LucideScissors className="text-amber-800" />}
                                title="Corte de Cabelo"
                                description="Cortes modernos e clássicos para todos os estilos."
                                img="https://i.pinimg.com/236x/00/c5/65/00c565fd9729936e6c5a961643ed81f8.jpg"
                            />

                            <ServiceCard
                                icon={<LucideSlice className="text-amber-800" />}
                                title="Barba e Estilização"
                                description="Navalha e estilo sempre andam juntos."
                                img="https://img.magnific.com/fotos-gratis/jovem-arrumando-a-barba-no-barbeiro_23-2148985728.jpg"
                            />
                        </div>


                        {/* Imagem central */}
                        <div className="
                            relative
                            h-80
                            sm:h-96
                            lg:h-110
                            w-full
                            rounded-3xl
                            lg:rounded-t-full
                            overflow-hidden
                            order-first
                            lg:order-none"
                        >

                            <div className="
                                absolute
                                inset-0
                                bg-amber-800/30
                                z-10"
                            />

                            <img
                                className="w-full h-full object-cover"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4T6CZtlTnGt3bK6lMsU4by76-J1xUBFVyEWV_RPVGvKwwVVn4cYu7EW0&s=10"
                                alt="Serviço de barbearia"
                            />

                        </div>


                        {/* Direita */}
                        <div className="flex flex-col gap-4">

                            <ServiceCard
                                icon={<LucideFaceGrinning className="text-amber-800" />}
                                title="Tratamento de Cabelo e Barba"
                                description="Cortes modernos e clássicos para todos os estilos."
                                img="https://thumbs.dreamstime.com/b/retrato-da-barba-%C3%A0-moda-do-homem-tesouras-barbeiro-e-l%C3%A2mina-reta-barbearia-farpado-vintage-138583873.jpg"
                            />

                            <ServiceCard
                                icon={<LucidePipette className="text-amber-800" />}
                                title="Face Care"
                                description="Navalha e estilo sempre andam juntos."
                                img="https://thumbs.dreamstime.com/b/barbeiro-em-barbearia-fazendo-massagem-suave-de-clientes-frente-para-prepar%C3%A1-lo-o-processo-barba-gentil-cuidado-com-barbeada-281875772.jpg"
                            />

                        </div>

                    </div>

                </div>
            </section>


            {/* =========================================================
                PREÇOS
            ========================================================= */}
            <section className="bg-amber-50">

                <div className="
                    max-w-7xl
                    mx-auto
                    px-4
                    sm:px-6
                    lg:px-8
                    py-12
                    sm:py-16
                ">

                    <SectionTitle
                        label="Preços"
                        title="Preços Simples e Transparentes."
                        description="Escolha um serviço e liberte seu estilo."
                    />

                    <div className="
                        mt-10
                        grid
                        grid-cols-2
                        sm:grid-cols-2
                        lg:grid-cols-4
                        gap-3
                        sm:gap-4
                    ">

                        <PrecoCard
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6YkhuD9f3gV4Uxyv3uKMTDwWn435SZlo1vwCzd7kzBQ&s=10"
                            title="Corte de Cabelo"
                            valor="R$ 40,00"
                        />

                        <PrecoCard
                            img="https://img.magnific.com/fotos-gratis/homem-num-salao-de-barbearia-a-cortar-o-cabelo-e-a-barba_1303-20953.jpg"
                            title="Barba"
                            valor="R$ 25,00"
                        />

                        <PrecoCard
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPxpUhQ_Y0ptmEtYiRIdBrIcy5D0VXVFP4g4ZVVNL-8qrU0RSelI_fus&s=10"
                            title="Hidratação"
                            valor="R$ 30,00"
                        />

                        <PrecoCard
                            img="https://www.cidadeoferta.com.br/storage/offers/7917-barbearia-gp-43-londrina-corte-masculino-e-barba-imagem-1.jpg"
                            title="Combo Corte + Barba"
                            valor="R$ 60,00"
                        />

                    </div>

                </div>
            </section>


            {/* =========================================================
                EQUIPE
            ========================================================= */}
            <section className="bg-amber-50">

                <div className="
                    max-w-7xl
                    mx-auto
                    px-4
                    sm:px-6
                    lg:px-8
                    py-12
                    sm:py-16
                ">

                    <SectionTitle
                        label="Nosso Time"
                        title="Conheça nosso time de profissionais"
                        description="Conheça os profissionais que estão prontos para transformar seu estilo."
                    />

                    <div className="
                        mt-10
                        grid
                        grid-cols-2
                        sm:grid-cols-2
                        lg:grid-cols-4
                        gap-3
                        sm:gap-4
                    ">

                        <Barbers
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG_DEtWGrLL6iehCuZFfH9ZrIDu1LQaiU9xlZgLYtN2w&s=10"
                            title="João Silva"
                            descricao="Barbeiro há 7 anos"
                        />

                        <Barbers
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6ANQsAiujOY-Kah5qR66DB750R9yXk06C2OykTrJOA&s=10"
                            title="Carlos Souza"
                            descricao="Especialista em cortes clássicos"
                        />

                        <Barbers
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8LbYy-2NqSf1cI6cxSJQno79xSXZp8Kyonsd6fhYeYQ&s=10"
                            title="Pedro Oliveira"
                            descricao="Expert em barba e estilização"
                        />

                        <Barbers
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_7EcVn172ixeBpCAod3h5_Pz36ODHJ3o9EW5dVEW3nQ&s=10"
                            title="Lucas Pereira"
                            descricao="Profissional em tratamentos capilares"
                        />

                    </div>

                </div>
            </section>


            {/* =========================================================
                FAQ
            ========================================================= */}
            <section className="bg-amber-50">

                <div className="
                    max-w-7xl
                    mx-auto
                    px-4
                    sm:px-6
                    lg:px-8
                    py-12
                    sm:py-16
                ">

                    <SectionTitle
                        label="Dúvidas"
                        title="Tire dúvidas antes de nos visitar"
                        description="Tudo o que você precisa saber sobre nossos serviços."
                    />

                    <div className="
                        mt-10
                        grid
                        grid-cols-1
                        lg:grid-cols-[1fr_320px]
                        gap-6
                        items-start
                    ">

                        <div className="flex flex-col gap-4">
                            {questions.map((q, index) => (
                                <QuestionCard
                                    key={index}
                                    question={q.question}
                                    answer={q.answer}
                                />
                            ))}
                        </div>


                        <div className="
                            rounded-2xl
                            overflow-hidden
                            bg-white
                            border
                            border-slate-100
                            w-full
                        ">

                            <img
                                className="
                                    h-52
                                    sm:h-60
                                    w-full
                                    object-cover
                                "
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4T6CZtlTnGt3bK6lMsU4by76-J1xUBFVyEWV_RPVGvKwwVVn4cYu7EW0&s=10"
                                alt="Entre em contato"
                            />

                            <div className="
                                flex
                                flex-col
                                gap-2
                                p-4
                                items-start
                            ">

                                <p className="text-lg font-bold">
                                    Ainda tem dúvidas?
                                </p>

                                <p className="text-slate-600 text-sm">
                                    Entre em contato conosco!
                                </p>

                                <button className="
                                    bg-black
                                    mt-2
                                    text-slate-100
                                    border-2
                                    border-slate-600
                                    text-sm
                                    font-bold
                                    flex
                                    gap-3
                                    tracking-wider
                                    py-2
                                    px-6
                                    rounded-full
                                    hover:bg-amber-800
                                    hover:border-amber-800
                                    transition-colors
                                    duration-300
                                ">
                                    Contate-nos
                                    <LucideArrowRight size={18} />
                                </button>

                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}


/* =========================================================
   SECTION TITLE
========================================================= */

type SectionTitleProps = {
    label: string;
    title: string;
    description: string;
};

function SectionTitle({
    label,
    title,
    description
}: SectionTitleProps) {

    return (
        <div className="
            flex
            flex-col
            gap-2
            items-center
            text-center
        ">

            <span className="
                text-xs
                text-amber-800
                uppercase
            ">
                {label}
            </span>

            <h3 className="
                text-2xl
                sm:text-3xl
                font-bold
            ">
                {title}
            </h3>

            <p className="
                text-slate-600
                text-sm
                sm:text-base
                max-w-2xl
            ">
                {description}
            </p>

        </div>
    );
}


/* =========================================================
   SERVICE CARD
========================================================= */

type ServiceCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
    img: string;
};

function ServiceCard({
    icon,
    title,
    description,
    img
}: ServiceCardProps) {

    return (
        <div className="
            min-h-45
            flex
            border-2
            border-slate-200
            p-3
            sm:p-2
            rounded-3xl
            gap-3
            sm:gap-4
            hover:shadow-xl
            hover:-translate-y-1
            transition-all
            duration-300
        ">

            <div className="
                flex-1
                flex
                flex-col
                gap-2
                justify-start
                py-2
                min-w-0
            ">

                <div className="
                    bg-amber-800/20
                    p-2
                    rounded-full
                    self-start
                    mb-1
                ">
                    {icon}
                </div>

                <p className="
                    text-base
                    sm:text-lg
                    font-bold
                    leading-tight
                ">
                    {title}
                </p>

                <p className="
                    text-slate-600
                    text-xs
                    sm:text-sm
                ">
                    {description}
                </p>

            </div>

            <div className="
                rounded-2xl
                overflow-hidden
                w-24
                h-32
                sm:w-32
                sm:h-40
                shrink-0
            ">

                <img
                    className="w-full h-full object-cover"
                    src={img}
                    alt={title}
                />

            </div>

        </div>
    );
}


/* =========================================================
   PREÇO CARD
========================================================= */

type PrecoCardProps = {
    img: string;
    title: string;
    valor: string;
};

function PrecoCard({
    img,
    title,
    valor
}: PrecoCardProps) {

    return (
        <div className="
            rounded-2xl
            overflow-hidden
            flex
            flex-col
            bg-white
            border
            border-slate-200
            hover:shadow-xl
            hover:-translate-y-1
            transition-all
            duration-300
        ">

            <div className="
                h-32
                sm:h-44
                lg:h-50
                w-full
                overflow-hidden
            ">

                <img
                    className="
                        w-full
                        h-full
                        object-cover
                        hover:scale-105
                        transition-transform
                        duration-500
                    "
                    src={img}
                    alt={title}
                />

            </div>

            <div className="
                p-2
                sm:p-3
                flex
                flex-col
                gap-1
            ">

                <h4 className="
                    font-bold
                    text-sm
                    sm:text-base
                ">
                    {title}
                </h4>

                <p className="
                    text-amber-600
                    font-bold
                    self-end
                    text-sm
                    sm:text-base
                ">
                    {valor}
                </p>

            </div>

        </div>
    );
}


/* =========================================================
   BARBERS
========================================================= */

type BarbersProps = {
    img: string;
    title: string;
    descricao: string;
};

function Barbers({
    img,
    title,
    descricao
}: BarbersProps) {

    return (
        <div className="
            rounded-2xl
            overflow-hidden
            flex
            flex-col
            bg-white
            border
            border-slate-200
            hover:scale-105
            hover:shadow-xl
            hover:-translate-y-1
            transition-all
            duration-300
        ">

            <div className="
                h-40
                sm:h-52
                overflow-hidden
            ">

                <img
                    className="
                        w-full
                        h-full
                        object-cover
                        hover:scale-105
                        transition-transform
                        duration-1000
                    "
                    src={img}
                    alt={title}
                />

            </div>

            <div className="
                py-3
                sm:py-4
                px-2
                flex
                flex-col
                items-center
                text-center
            ">

                <h4 className="
                    font-bold
                    text-sm
                    sm:text-lg
                ">
                    {title}
                </h4>

                <p className="
                    text-slate-600
                    text-[10px]
                    sm:text-xs
                    mt-1
                ">
                    {descricao}
                </p>

                <div className="
                    w-full
                    h-px
                    bg-slate-200
                    mt-2
                " />

                <button className="
                    bg-amber-800
                    text-xs
                    text-white
                    px-4
                    py-2
                    rounded-full
                    mt-2
                    hover:bg-amber-700
                    transition-colors
                    duration-300
                ">
                    Agendar
                </button>

            </div>

        </div>
    );
}


/* =========================================================
   QUESTION CARD
========================================================= */

type QuestionCardProps = {
    question: string;
    answer: string;
};

function QuestionCard({
    question,
    answer
}: QuestionCardProps) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <button
            type="button"
            className="
                cursor-pointer
                rounded-2xl
                overflow-hidden
                flex
                flex-col
                bg-white
                border
                border-slate-200
                hover:shadow-xl
                transition-all
                duration-300
                text-left
                w-full
            "
            onClick={() => setIsOpen(!isOpen)}
        >

            <div className="
                p-4
                flex
                flex-col
                gap-2
                w-full
            ">

                <div className="
                    flex
                    justify-between
                    items-center
                    gap-4
                ">

                    <p className="
                        font-bold
                        text-sm
                        sm:text-lg
                    ">
                        {question}
                    </p>

                    <div className="shrink-0">

                        {isOpen ? (
                            <LucideMinus size={18} />
                        ) : (
                            <LucidePlus size={18} />
                        )}

                    </div>

                </div>

                {isOpen && (
                    <p className="
                        text-slate-600
                        self-start
                        text-sm
                        leading-relaxed
                    ">
                        {answer}
                    </p>
                )}

            </div>

        </button>
    );
}