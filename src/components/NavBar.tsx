import {
    LucideArrowRight,
    LucideMenu,
    LucideX
} from "lucide-react";

import { Link } from "react-router-dom";
import { useState } from "react";


export function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="top-0 z-50 py-4">

            <div className="
                max-w-7xl
                mx-auto
                px-4
                sm:px-6
                lg:px-0
            ">

                <div className="
                    flex
                    justify-between
                    items-center
                ">

                    {/* Logo */}
                    <div className="
                        text-amber-950
                        font-bold
                        text-2xl
                        sm:text-3xl
                        justify-center
                        items-center
                        flex
                        flex-col
                        leading-none
                    ">
                        Vitrine

                        <p className="
                            text-[9px]
                            sm:text-xs
                            tracking-wider
                            uppercase
                            mt-1
                        ">
                            Barbearia
                        </p>
                    </div>


                    {/* Menu Desktop */}
                    <div className="
                        hidden
                        md:flex
                        gap-4
                        lg:gap-6
                        items-center
                    ">

                        <NavLink to="#">
                            Home
                        </NavLink>

                        <NavLink to="#">
                            Serviços
                        </NavLink>

                        <NavLink to="#">
                            Preços
                        </NavLink>


                        <button className="
                            bg-amber-950
                            text-sm
                            ml-4
                            lg:ml-8
                            flex
                            items-center
                            gap-2
                            text-amber-50
                            rounded-full
                            px-5
                            lg:px-8
                            py-3
                            lg:py-4
                            hover:bg-amber-900
                            hover:cursor-pointer
                            transition-colors
                            duration-300
                        ">
                            Agendar Horário

                            <LucideArrowRight size={18} />
                        </button>

                    </div>


                    {/* Botão Mobile */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="
                            md:hidden
                            w-10
                            h-10
                            rounded-full
                            bg-amber-950
                            text-white
                            flex
                            items-center
                            justify-center
                            hover:bg-amber-900
                            transition-colors
                        "
                        aria-label={
                            menuOpen
                                ? "Fechar menu"
                                : "Abrir menu"
                        }
                    >

                        {menuOpen ? (
                            <LucideX size={22} />
                        ) : (
                            <LucideMenu size={22} />
                        )}

                    </button>

                </div>


                {/* Menu Mobile */}
                <div className={`
                    md:hidden
                    overflow-hidden
                    transition-all
                    duration-300
                    ${
                        menuOpen
                            ? "max-h-96 opacity-100 mt-4"
                            : "max-h-0 opacity-0"
                    }
                `}>

                    <div className="
                        flex
                        flex-col
                        gap-2
                        bg-white
                        rounded-2xl
                        p-4
                        shadow-lg
                        border
                        border-amber-950/10
                    ">

                        <MobileNavLink
                            to="#"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </MobileNavLink>

                        <MobileNavLink
                            to="#"
                            onClick={() => setMenuOpen(false)}
                        >
                            Serviços
                        </MobileNavLink>

                        <MobileNavLink
                            to="#"
                            onClick={() => setMenuOpen(false)}
                        >
                            Preços
                        </MobileNavLink>


                        <button
                            onClick={() => setMenuOpen(false)}
                            className="
                                bg-amber-950
                                text-sm
                                mt-2
                                flex
                                items-center
                                justify-center
                                gap-2
                                text-amber-50
                                rounded-full
                                px-6
                                py-3
                                hover:bg-amber-900
                                transition-colors
                                duration-300
                            "
                        >
                            Agendar Horário

                            <LucideArrowRight size={18} />
                        </button>

                    </div>

                </div>

            </div>

        </nav>
    );
}


/* =========================================================
   LINK DESKTOP
========================================================= */

type NavLinkProps = {
    to: string;
    children: React.ReactNode;
};

function NavLink({
    to,
    children
}: NavLinkProps) {

    return (
        <Link
            to={to}
            className="
                relative
                text-base
                after:absolute
                after:bottom-0
                after:left-0
                after:h-[2px]
                after:w-full
                after:origin-left
                after:scale-x-0
                after:bg-amber-700
                after:transition-transform
                after:duration-300
                hover:after:scale-x-100
            "
        >
            {children}
        </Link>
    );
}


/* =========================================================
   LINK MOBILE
========================================================= */

type MobileNavLinkProps = {
    to: string;
    children: React.ReactNode;
    onClick: () => void;
};

function MobileNavLink({
    to,
    children,
    onClick
}: MobileNavLinkProps) {

    return (
        <Link
            to={to}
            onClick={onClick}
            className="
                w-full
                px-4
                py-3
                rounded-xl
                text-base
                font-medium
                text-amber-950
                hover:bg-amber-50
                hover:text-amber-800
                transition-colors
                duration-200
            "
        >
            {children}
        </Link>
    );
}