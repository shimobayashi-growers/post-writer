"use client";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "./ui/button";
import { useState } from "react";
import { Icon } from "./icon";

interface PostCreateButtonProps extends ButtonProps {}

export default function PostCreateButton({
    className,
    variant,
    ...props
}: PostCreateButtonProps) {
    const [isLoading, setIsLoading] = useState(false);
    const onClick = async () => {};

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