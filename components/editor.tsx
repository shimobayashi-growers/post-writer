"use client"

import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import TextareaAutosize from "react-textarea-autosize";
import EditorJS from '@editorjs/editorjs';
import { useEffect, useState } from "react";
import Header from '@editorjs/header';
import LinkTool from '@editorjs/link';
import List from '@editorjs/list';
import Code from '@editorjs/code';

export default function Editor() {

    const [isMounted, setIsMounted] = useState(false);

    const initializeEditor = async() => {
        const editor = new EditorJS({
            holder: "editor",
            placeholder: "記事を入力してください",
            inlineToolbar: true,
            tools: {
                header: Header,
                linkTool: LinkTool,
                list: List,
                code: Code,
            }
        });
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            initializeEditor();
        }
    }, [isMounted]);

    return (
        <form>
            <div className="grid w-full gap-10">
                <div className="flex w-full items-center justify-between">
                    <div className="flex items-center space-x-10">
                        <Link
                            href={"/dashboard"}
                            className={cn(buttonVariants({ variant: "ghost" }))}
                        >
                            戻る
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            公開
                        </p>
                    </div>
                    <button className={cn(buttonVariants())} type="submit">
                        保存
                    </button>
                </div>
                <div>
                    <TextareaAutosize
                        id="title"
                        autoFocus
                        placeholder="タイトル"
                        className="w-full resize-none overflow-hidden bg-transparent text-5xl focus:outline-none font-bold"
                    >
                    </TextareaAutosize>
                </div>
                <div id="editor" className="min-h-[500px]"></div>
                <p className="text-sm text-gray-500">
                    Use
                    <kbd className="rounded-md border bg-muted px-1 text-xs uppercase">
                        Tab
                    </kbd>
                    to open the menu.
                </p>
            </div>
        </form>
    )
}