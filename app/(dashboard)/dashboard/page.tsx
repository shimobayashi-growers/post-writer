import DashBoardHeader from "@/components/dashboard-header";
import DashBoardShell from "@/components/dashboard-shell";
import PostCreateButton from "@/components/post-create-button";

export default function DashBoardPage() {
    return (
        <DashBoardShell>
            <DashBoardHeader heading="記事投稿" text="記事の投稿と管理">
                <PostCreateButton>
                    <div>
                        Dashboard
                    </div>
                </PostCreateButton>
            </DashBoardHeader>
        </DashBoardShell>
    );
}
