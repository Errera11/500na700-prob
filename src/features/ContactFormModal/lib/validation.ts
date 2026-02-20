import * as z from "zod";
import { FormFields } from "./constants";

export const formSchema = z.object({
  [FormFields.Name]: z.string().min(1, "Введите имя"),
  [FormFields.Email]: z.string().email("Введите корректный email"),
  [FormFields.Phone]: z.string().nonempty("Введите телефон"),
  [FormFields.Agreement]: z
    .boolean()
    .refine((v) => v === true, "Необходимо согласие"),
});

export type FormData = z.infer<typeof formSchema>;
