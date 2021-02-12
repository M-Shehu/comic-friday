import { format } from "date-fns";

export default function formatDate(
  dateStr: string,
  formatStr: string = "do MMMM yy"
) {
  return format(new Date(dateStr + " 00:00:00"), formatStr);
}
