import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Online Shop",
    description: "Welcome to online shop. Your favorite shopping site",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="home-background-image">
                    <div className="home-layout-container">
                        <Sidebar/>
                        <div className="home-layout-content-section">
                            <Navbar />
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
