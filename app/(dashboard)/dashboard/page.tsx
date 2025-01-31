import DashBoardHeader from "@/components/dashboard-header";
import DashBoardShell from "@/components/dashboard-shell";
import PostCreateButton from "@/components/post-create-button";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/dist/server/api-utils";

export default async function DashBoardPage() {

    const user = await getCurrentUser();


    if (!user) {
        redirect("/login");
    }

    const posts = await db.post.findMany({
        where: {
            authorId: user.id,
        },
        select: {
            id: true,
            title: true,
            published: true,
            createdAt: true,
        },
        orderBy: {
            updatedAt: "desc",
        },
    });

    console.log(posts);

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
