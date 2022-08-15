import { requiredMessage } from "helpers/message";
import { useCallback, useMemo } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { TPaymentFormData } from "types/form/payment";
import { useAppDispatch, useAppSelector } from "redux/hook";
import { handleDeleteAllCart, homeSelector } from "pages/Home/store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function useFormPayment() {
  const navigate = useNavigate();
  const { carts } = useAppSelector(homeSelector);
  const dispatch = useAppDispatch();
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        name: yup.string().required(requiredMessage("username")),
        phone: yup.string().required(requiredMessage("phone")),
        address: yup.string().required(requiredMessage("address")),
        voucher: yup.string(),
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
  } = useForm<TPaymentFormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = useCallback((data: TPaymentFormData) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")!);
    const order = {
      user: {
        ...currentUser,
        ...data,
      },
      time: new Date(),
      carts,
    };

    const historyOrder = localStorage.getItem("historyOrder")
      ? JSON.parse(localStorage.getItem("historyOrder")!)
      : [];

    localStorage.setItem(
      "historyOrder",
      JSON.stringify([...historyOrder, order])
    );
    dispatch(handleDeleteAllCart());
    toast.success("Thank you for your purchase");
    navigate("/profile");
  }, []);
  return {
    register,
    watch,
    errors,
    setValue,
    onSubmit: handleSubmit(onSubmit),
  };
}

export default useFormPayment;
