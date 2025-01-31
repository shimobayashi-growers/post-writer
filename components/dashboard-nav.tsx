import { SidebarNavItem } from "@/types";
import Link from "next/link";
import { Icon, Icon as Icons } from "./icon";

interface DashboardNavProps {
    items: SidebarNavItem[];
}

export function DashboardNav({items}: DashboardNavProps) {
    if (!items.length) {
        return null;
    }

    return (
        <nav>
            {items.map((item, index) => {
                const Icon = Icons[item.icon as keyof typeof Icons || "arrowRight"];

                return (
                    <Link href={item.href!} key={index}>
                        <span className={'flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground'}>
                            <Icon className={'mr-2 h-4 w-4'} />
                            {item.title}
                        </span>
                    </Link>
                )
            })}
        </nav>
    );
}