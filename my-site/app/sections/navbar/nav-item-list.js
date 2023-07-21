import NavItem from "./nav-item";

function NavItemList({ visibleState, colorChange }) {
    return (
        <div
            className={`items-center justify-between w-full ${
                visibleState ? "" : "hidden"
            } md:flex md:w-auto ${
                colorChange ? "bg-slate-100" : "bg-pink-400"
            }`}
        >
            <ul
                className={
                    "flex flex-col p-4 mt-4 font-medium transition-colors " +
                    "md:flex-row md:p-0 md:space-x-8 md:mt-0 md:border-0 " +
                    " " +
                    `${colorChange ? "bg-slate-100" : "bg-pink-400"}`
                }
            >
                <NavItem title="Projects" colorChange={colorChange} />
                <NavItem title="About Me" colorChange={colorChange} />
                <NavItem title="Contact" colorChange={colorChange} />
            </ul>
        </div>
    );
}

export default NavItemList;
