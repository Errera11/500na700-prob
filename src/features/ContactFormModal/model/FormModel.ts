import { FormFields } from "../lib/constants";

export interface FormModel {
  [FormFields.Name]: string;
  [FormFields.Email]: string;
  [FormFields.Phone]: string;
  [FormFields.Agreement]: boolean;
}
