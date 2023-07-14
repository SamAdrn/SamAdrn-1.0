import "./globals.css";
import { Inter, Geologica, Roboto_Mono } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const geologica = Geologica({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-geologica",
});

const roboto_mono = Roboto_Mono({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto-mono",
});

export const metadata = {
    title: "Samuel Kosasih",
    description:
        "A Computer Science Undergraduate Student at the University of " +
        "Maryland. Currently looking for Software Engineering internships.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} ${geologica.className} ${roboto_mono.variable} bg-slate-100`}
            >
                <script
                    src="https://kit.fontawesome.com/b079da69e8.js"
                    crossorigin="anonymous"
                ></script>
                {children}
            </body>
        </html>
    );
}
