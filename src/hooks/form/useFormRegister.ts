import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { TRegisterFormData } from "types/form/register";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { invalidMessage, requiredMessage } from "helpers/message";
import { REGEX_NAME, REGEX_PASSWORD, REGEX_PHONE } from "regex";
import { detectInvalidName } from "helpers/form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function useFormRegister() {
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        name: yup
          .string()
          .required(requiredMessage("username"))
          // .matches(REGEX_NAME, invalidMessage("username"))
          .test(
            "username",
            invalidMessage("username"),
            (value) => !detectInvalidName(value)
          ),
        phone: yup
          .string()
          .matches(REGEX_PHONE, invalidMessage("phone"))
          .required(requiredMessage("phone")),
        address: yup.string(),
        password: yup
          .string()
          .matches(REGEX_PASSWORD, invalidMessage("password"))
          .required(requiredMessage("password")),
        confirmation: yup.string().test({
          name: "confirmation",
          message: "Incorrect password. Please try again",
          test: function () {
            const { password, confirmation } = this.parent;
            if (password && confirmation !== password) {
              return false;
            }
            return true;
          },
        }),
      }),
    []
  );

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    setValue,
  } = useForm<TRegisterFormData>({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  const onSubmit = useCallback((data: TRegisterFormData) => {
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users")!)
      : [];

    localStorage.setItem("users", JSON.stringify([...users, data]));

    toast.success("Register successffully");
    navigate("/signin");
  }, []);

  return {
    register,
    watch,
    errors,
    onSubmit: handleSubmit(onSubmit),
  };
}

export default useFormRegister;
