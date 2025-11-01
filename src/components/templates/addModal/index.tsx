import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineTitle } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdOutlineSubtitlesOff } from "react-icons/md";

import Input from "@/components/atoms/Input";
import type { TUser } from "@/types/fetchData";
import type { TAddModal } from "@/core/types/props";
import { userSchema } from "@/core/validation/userSchema";
import ModalContainer from "@/components/partials/ModalContainer";
import { useAddUser, useEditUser } from "@/core/services/mutations";

function AddModal({ user, setShowModal, setSelectedUser }: TAddModal) {
  const { mutate: addMutate } = useAddUser();
  const { mutate: editMutate } = useEditUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setFocus,
  } = useForm<TUser>({ resolver: yupResolver(userSchema), mode: "onSubmit" });

  useEffect(() => {
    setFocus("title");
  }, [setFocus]);

  useEffect(() => {
    if (user) reset(user, { keepDirtyValues: true });
  }, [user, reset]);

  const addHandler = (data: TUser) => {
    if (user) {
      editMutate(data);
      setSelectedUser(null);
    } else {
      addMutate(data);
    }
    setShowModal(false);
  };

  return (
    <ModalContainer>
      <form onSubmit={handleSubmit(addHandler)} className="w-full">
        <h1 className="text-3xl font-semibold mb-4 text-center">
          {user ? "Edit Form" : "Add Form"}
        </h1>
        <Input
          placeHolder="ex:hesam khaki"
          title="Enter your title :"
          name="title"
          register={register}
          errors={errors}
        >
          <MdOutlineTitle />
        </Input>
        <Input
          placeHolder="ex:front-end developer"
          title="Enter subTitle :"
          name="subTitle"
          register={register}
          errors={errors}
        >
          <MdOutlineSubtitlesOff />
        </Input>
        <button
          type="submit"
          className="buttons text-white bg-sky-600 hover:bg-sky-400 mt-3 w-full mb-3"
        >
          {user ? "Edit" : "Add"}
        </button>
        <button
          type="button"
          onClick={() => {
            setShowModal(false);
            setSelectedUser(null);
          }}
          className="buttons text-white bg-rose-500 hover:bg-rose-400 flex items-center justify-center gap-1 w-full"
        >
          <IoMdArrowRoundBack />
          Return
        </button>
      </form>
    </ModalContainer>
  );
}

export default AddModal;
