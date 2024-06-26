import { Profile, ProfileValidateError } from '../../types/profile';

export const validateProfile = (profile?: Profile) => {
  if (!profile) {
    return [ProfileValidateError.NO_DATA];
  }
  const { first, lastname, age, country } = profile;

  const errors: ProfileValidateError[] = [];
  if (!first || !lastname) {
    errors.push(ProfileValidateError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ProfileValidateError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ProfileValidateError.INCORRECT_COUNTRY);
  }

  return errors;
};
