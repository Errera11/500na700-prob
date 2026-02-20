import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import styles from "@/src/features/ContactFormModal/ContactForm/styles/ContactForm.module.scss";

import { FormFields } from "../lib/constants";
import { formSchema } from "../lib/validation";
import { FormModel } from "../model/FormModel";

import Input from "@/src/shared/ui/Input/Input";
import Button from "@/src/shared/ui/Button/Button";
import CloseIcon from "@/src/shared/icons/CloseIcon";
import Checkbox from "@/src/shared/ui/Checkbox/Checkbox";

interface ContactFormModel {
  onClose?: () => void;
}

function ContactForm({ onClose }: ContactFormModel) {
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormModel>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      [FormFields.Name]: "",
      [FormFields.Email]: "",
      [FormFields.Phone]: "",
      [FormFields.Agreement]: false,
    },
  });

  const onSubmit = (data: FormModel) => {
    console.log("Submit", data);
    onClose?.();
    reset();
  };

  return (
    <div className={styles.contactFrom}>
      <div className={styles.contactFrom__header}>
        <h2
          className={styles.contactFrom__title}
          onClick={() => console.log(getValues())}
        >
          Связаться с нами
        </h2>
        <Button variant="default" onClick={onClose}>
          <CloseIcon />
        </Button>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.contactFrom__form}
      >
        <div className={styles.contactFrom__fields}>
          <div>
            <Input {...register(FormFields.Name)} placeholder="Имя" />
            {errors.name && (
              <p className={styles.contactFrom__errorMessage}>
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <Input
              {...register(FormFields.Phone, {
                pattern: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
              })}
              placeholder="Телефон"
            />
            {errors.phone && (
              <p className={styles.contactFrom__errorMessage}>
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <Input {...register(FormFields.Email)} placeholder="E-mail" />
            {errors.email && (
              <p className={styles.contactFrom__errorMessage}>
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Checkbox
              {...register(FormFields.Agreement)}
              placeholder="Пароль"
              label="Я согласен (-а) на обработку персональных данных"
            />
            {errors.agreement && (
              <p className={styles.contactFrom__errorMessage}>
                {errors.agreement.message}
              </p>
            )}
          </div>
        </div>

        <Button type="submit" variant="dark">
          Отправить
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
