import Home from "./sections/home/home";
import Navbar from "./sections/navbar/navbar";

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-16">
            <Navbar />

            <Home />
        </div>
    );
}
