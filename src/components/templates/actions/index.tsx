import { toast } from "react-toastify";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineUsergroupDelete } from "react-icons/ai";

import type { TActions } from "@/core/types/props";
import { useDeleteUser } from "@/core/services/mutations";

function Actions({
  setShowModal,
  deletedList,
  setShowCheckbox,
  showCheckbox,
  setDeletedList,
}: TActions) {
  const { mutate } = useDeleteUser();

  const groupDeleteHandler = async () => {
    await Promise.all(
      deletedList.map((item) => {
        if (item.id) mutate(item.id);
      })
    );
    setDeletedList([]);
    setShowCheckbox(false);
    toast.success(`${deletedList.length} items are deleted successfully !`);
  };

  return (
    <div className="flex items-center gap-3 justify-end mr-2 p-2.5 shadow-[0px_0px_18px_5px_#304ffe3c] rounded-[10px] ml-auto w-fit *:flex *:items-center *:justify-center *:gap-1.5 *:w-[170px] max-md:flex-col">
      {!deletedList.length ? (
        <button
          onClick={() => setShowCheckbox(true)}
          className="buttons bg-rose-500 text-white hover:bg-rose-400"
        >
          <AiOutlineUsergroupDelete />
          Group Delete
        </button>
      ) : (
        <button
          onClick={groupDeleteHandler}
          className="buttons text-white bg-rose-500 hover:bg-rose-400"
        >
          Delete ( {deletedList.length} )
        </button>
      )}
      {showCheckbox && (
        <button
          onClick={() => {
            setShowCheckbox(false);
            setDeletedList([]);
          }}
          className="buttons bg-amber-400 hover:bg-amber-300 text-white"
        >
          Quit
        </button>
      )}
      <button
        onClick={() => setShowModal(true)}
        className="buttons bg-sky-500 text-white hover:bg-sky-400"
      >
        <IoMdAddCircleOutline />
        Add Contact
      </button>
    </div>
  );
}

export default Actions;
