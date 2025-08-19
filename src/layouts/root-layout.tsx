import { Outlet } from "react-router";
import Header from "../components/header";
import Footer from "../components/footer";

export default function RootLayout() {
    return (
        <div className="relative w-full select-none">
            <Header />
            <div className="w-full">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}