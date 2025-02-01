"use client";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "./ui/button";
import { useState } from "react";
import { Icon } from "./icon";
import { useRouter } from "next/navigation";

interface PostCreateButtonProps extends ButtonProps {}

export default function PostCreateButton({
    className,
    variant,
    ...props
}: PostCreateButtonProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const onClick = async () => {
        setIsLoading(true);

        const response = await fetch("/api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: "Untitled"}),
        });

        setIsLoading(false);

        console.log(response);

        if (!response.ok) {
            throw new Error("Failed to create post");
        }

        const post = await response.json();
        router.refresh();
        router.push(`/editor/${post.id}`);


    };

    return (
        <button
            className={cn(
                buttonVariants({ variant }),
                {"cursor-not-allowed opacity-60": isLoading},
                className
            )}
            onClick={onClick}
            disabled={isLoading}
            {...props}
        >
            {isLoading ? (
                <Icon.spinner className="mr-2 h-4 w-4 animate-spin"></Icon.spinner>
            ) : (
                <Icon.add className="mr-2 h-4 w-4"></Icon.add>
            )}
            新しい投稿
        </button>
    );
}