import "./globals.css";
import { Work_Sans, Roboto_Mono, Poppins } from "next/font/google";

const work_sans = Work_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-work-sans",
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
    weight: ["200", "400", "600"],
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
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#ffa201"
                />
                <meta name="msapplication-TileColor" content="#ffa201" />
                <meta name="theme-color" content="#ffa201" />
            </head>
            <body
                className={`${work_sans.className} ${roboto_mono.variable} ${poppins.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
