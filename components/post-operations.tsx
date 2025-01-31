import { Post } from "@prisma/client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Icon } from "./icon";
import Link from "next/link";

interface PostOperationsProps {
    post: Pick<Post, "id" | "title">;
}

export default function PostOperations({ post }: PostOperationsProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Icon.ellipsis className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link href={`/editor/${post.id}`} className="w-full">
                        編集
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator></DropdownMenuSeparator>
                <DropdownMenuItem className="text-destructive cursor-pointer focus:text-destructive">
                        削除
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}