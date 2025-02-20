import { DashboardNav } from "@/components/dashboard-nav";
import { MainNav } from "@/components/main-nav";
import SiteFooter from "@/components/site-footer";
import { dashboardConfig } from "@/config/dashboard";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen space-y-6">
            <header className="sticky top-0 z-40 border-b bg-background">
                <div className="container flex h-16 items-center justify-between py-4">
                    <MainNav items={dashboardConfig.mainNav}/>
                </div>
            </header>
            <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
                <aside className="hidden md:flex w-[200px] flex-col">
                    <DashboardNav items={dashboardConfig.sidebarNav}/>
                </aside>
                <main className="flex flex-col w-full flex-1 overflow-hidden">{children}</main>
            </div>
            <SiteFooter />
        </div>
    );
}