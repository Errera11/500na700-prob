import dayjs from "dayjs";
import "dayjs/locale/ru"; // Импортируем русскую локаль

dayjs.locale("ru");

export const formatDate = (date: string) => dayjs(date).format("DD MMMM YYYY");
