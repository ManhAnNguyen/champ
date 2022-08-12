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
import { TLoginFormData } from "types/form/login";

function useFormLogin() {
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        name: yup.string().required(requiredMessage("username")),
        password: yup.string().required(requiredMessage("password")),
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
  } = useForm<TLoginFormData>({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  const onSubmit = useCallback((data: TLoginFormData) => {
    const { name, password } = data;
    const users: any[] = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users")!)
      : [];

    const findUser = users.find(
      (data, index) => data.name === name && data.password === password
    );

    if (!!findUser) {
      toast.success("Login Successfully");
      localStorage.setItem("currentUser", JSON.stringify(findUser));
      navigate("/");
    } else {
      toast.error("Not correct information");
    }
  }, []);
  return {
    register,
    watch,
    errors,
    onSubmit: handleSubmit(onSubmit),
  };
}
export default useFormLogin;
