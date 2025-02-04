import { z } from "zod";

export const postPatchSchema = z.object({
    title: z.string().min(3).max(100,{message: "タイトルは3文字以上100文字以内で入力してください"}),
    content: z.any().optional(),
});

export type PostPatchSchemaType = z.infer<typeof postPatchSchema>;