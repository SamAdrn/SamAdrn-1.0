import "./globals.css";
import { Open_Sans, Roboto_Mono, Poppins } from "next/font/google";

const open_sans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-open-sans",
});

const roboto_mono = Roboto_Mono({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto-mono",
});

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
    weight: ['200', '400', '600'],
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
                className={`${open_sans.className} ${roboto_mono.variable}`}
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
