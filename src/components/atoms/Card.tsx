import { useDeleteUser } from "@/core/services/mutations";
import type { TCard } from "@/core/types/props";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Card({
  user,
  setShowModal,
  setSelectedUser,
  showCheckbox,
  setDeletedList,
}: TCard) {
  const { title, subTitle, id } = user;

  const [checked, setChecked] = useState<boolean>(false);

  const { mutate } = useDeleteUser();

  useEffect(() => {
    setDeletedList((items) => {
      if (checked) {
        return [...items, user];
      } else {
        return items.filter((user) => user.id !== id);
      }
    });
  }, [checked, id, setDeletedList, user]);

  useEffect(() => {
    if (!showCheckbox) {
      setChecked(false);
    }
  }, [showCheckbox]);

  return (
    <div className="flex justify-between items-center py-2.5 px-5 shadow-[0px_0px_18px_-4px_#304ffe73] text-[#304ffe] rounded-[10px] mb-4 max-md:flex-col">
      {showCheckbox && (
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked((checked) => !checked)}
          className="cursor-pointer"
        />
      )}
      <span className="ml-5 flex-1 text-xl max-md:text-lg max-md:ml-0">{title}</span>
      <span className="flex-1 text-xl max-md:text-lg">{subTitle}</span>
      <div className="flex items-center gap-3 flex-1 max-md:mt-3 max-md:flex-col max-md:w-[200px]">
        <button
          onClick={() => {
            setSelectedUser(user);
            setShowModal(true);
          }}
          className="buttons bg-green-400 w-full text-white border border-green-400 hover:bg-white hover:text-green-400"
        >
          Edit
        </button>
        <button
          onClick={() => {
            if (id) mutate(id);
            setShowModal(false);
            toast.success("You deleted an item successfully !");
          }}
          className="buttons bg-rose-500 w-full text-white border border-rose-500 hover:bg-white hover:text-rose-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
