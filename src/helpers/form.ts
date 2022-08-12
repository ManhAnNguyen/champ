import { INVALID_NAME } from "regex";

export const detectInvalidName = (name: string | undefined) =>
  !!name
    ? INVALID_NAME.split("").some((specialChar) => {
        if (name.includes(specialChar)) {
          return true;
        }

        return false;
      })
    : false;
