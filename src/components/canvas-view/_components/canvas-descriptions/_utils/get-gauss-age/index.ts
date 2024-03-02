import { GAUSS_BIRTHDAY } from "../../_constants";
export const getGaussAge = () => {
  const gaussBirthday = new Date(GAUSS_BIRTHDAY);

  const today = new Date();

  const gaussAge = today.getFullYear() - gaussBirthday.getFullYear();

  const allreadyBirthday =
    today.getMonth() < gaussBirthday.getMonth() ||
    (today.getMonth() === gaussBirthday.getMonth() &&
      today.getDate() < gaussBirthday.getDate());

  return allreadyBirthday ? gaussAge - 1 : gaussAge;
};
