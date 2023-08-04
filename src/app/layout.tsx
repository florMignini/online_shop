import 'tailwindcss/tailwind.css'
import "./globals.css";

import { Navbar, Sidebar, Footer } from "@/components";
import { Urbanist } from "next/font/google";


const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
    title: "Online-Shop",
    description: "Welcome to online-shop. Your favorite online shop store",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={font.className}>
                <div className="w-full h-full grid grid-cols-[10%,90%] bg-slate-800">
                    <div className="">
                        <Sidebar />
                    </div>
                    <div className="">
                        <Navbar />
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
