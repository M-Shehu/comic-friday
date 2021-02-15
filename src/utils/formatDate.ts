import { DateTime } from "luxon";

export default function formatDate(
  dateStr: string,
  inputFormatStr: string = "yyyy-LL-dd",
  formatStr: string = "LLLL d, kkkk"
) {
  return DateTime.fromFormat(dateStr, inputFormatStr).toFormat(formatStr);
}
