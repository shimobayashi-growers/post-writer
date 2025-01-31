import DashBoardHeader from "@/components/dashboard-header";
import DashBoardShell from "@/components/dashboard-shell";

export default function DashBoardPage() {
    return (
        <DashBoardShell>
            <DashBoardHeader heading="記事投稿" text="記事の投稿と管理">
                <div>
                    Dashboard
                </div>
            </DashBoardHeader>
        </DashBoardShell>
    );
}
