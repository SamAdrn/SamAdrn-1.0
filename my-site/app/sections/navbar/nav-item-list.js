import NavItem from "./nav-item";
import { motion, AnimatePresence } from "framer-motion";
import { navbarItems } from "@/app/components/constants";

function NavItemList({ isMobile, mobileNavVisible, scrollAtTop }) {
    const variants = {
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.2,
            },
        },
        closed: { opacity: 0, height: 0 },
    };

    return (
        <AnimatePresence>
            {(!isMobile || mobileNavVisible) && (
                <motion.div
                    className={`items-center justify-between w-full  md:flex 
                    md:w-auto transition-colors ${
                        scrollAtTop ? "bg-slate-100" : "bg-amber-500"
                    }`}
                    variants={isMobile ? variants : {}}
                    initial="closed"
                    animate="open"
                    exit="closed"
                >
                    <motion.ul
                        className={
                            "flex flex-col p-4 mt-4 font-medium transition-colors " +
                            "md:flex-row md:p-0 md:space-x-8 md:mt-0 md:border-0 " +
                            " " +
                            `${scrollAtTop ? "bg-slate-100" : "bg-amber-500"}`
                        }
                        variants={isMobile ? variants : {}}
                    >
                        {navbarItems.map((item) => (
                            <NavItem
                                key={item.href}
                                title={item.title}
                                scrollAtTop={scrollAtTop}
                                isMobile={isMobile}
                                href={item.href}
                            />
                        ))}
                    </motion.ul>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default NavItemList;
