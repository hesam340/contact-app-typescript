import { useForm } from "react-hook-form";
import { MdOutlineTitle } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdOutlineSubtitlesOff } from "react-icons/md";

import Input from "@/components/atoms/Input";
import type { TUser } from "@/types/fetchData";
import { useAddUser } from "@/core/services/mutations";
import { userSchema } from "@/core/validation/userSchema";
import ModalContainer from "@/components/partials/ModalContainer";

function AddModal() {
  const { mutate } = useAddUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TUser>({ resolver: yupResolver(userSchema), mode: "onChange" });

  const addHandler = (data: TUser) => {
    console.log(data);
    mutate(data);
  };

  return (
    <ModalContainer>
      <form onSubmit={handleSubmit(addHandler)} className="w-full">
        <h1 className="text-3xl font-semibold mb-4 text-center">Add Form</h1>
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
        <button type="submit" className="buttons bg-sky-600 hover:bg-sky-400 mt-3 w-full mb-3">Add</button>
        <button type="button" className="buttons bg-rose-500 hover:bg-rose-400 flex items-center justify-center gap-1 w-full">
          <IoMdArrowRoundBack />
          Return
        </button>
      </form>
    </ModalContainer>
  );
}

export default AddModal;
