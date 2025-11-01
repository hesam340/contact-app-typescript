import { useState } from "react";
import { toast } from "react-toastify";

import Card from "@/components/atoms/Card";
import { MESSAGES } from "@/core/enums/enums";
import Loader from "@/components/atoms/Loader";
import type { TUser } from "@/core/types/fetchData";
import Actions from "@/components/templates/actions";
import { useGetUsers } from "@/core/services/queries";
import AddModal from "@/components/templates/addModal";

function HomePage() {
  const [selectedUser, setSelectedUser] = useState<TUser | null>(null);
  const [deletedList, setDeletedList] = useState<TUser[] | []>([]);
  const [showCheckbox, setShowCheckbox] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { data, error, isPending } = useGetUsers();

  if (error) return toast.error(MESSAGES.UNKNOWN_ERROR);

  return isPending ? (
    <Loader />
  ) : (
    <div className="mt-8 mx-auto mb-16 max-2xl:mx-4">
      <Actions
        setShowModal={setShowModal}
        deletedList={deletedList}
        setShowCheckbox={setShowCheckbox}
        showCheckbox={showCheckbox}
        setDeletedList={setDeletedList}
      />
      <div className="w-full rounded-[20px] shadow-[0px_0px_18px_5px_#304ffe3c] mt-8 mx-auto mb-16 h-[600px] overflow-y-scroll no-scrollbar">
        {data && data.length ? (
          <ul className="py-5 px-5">
            {data.map((user) => (
              <Card
                key={user.id}
                user={user}
                setShowModal={setShowModal}
                showCheckbox={showCheckbox}
                setDeletedList={setDeletedList}
                setSelectedUser={setSelectedUser}
              />
            ))}
          </ul>
        ) : (
          <p></p>
        )}
      </div>
      {showModal && (
        <AddModal
          user={selectedUser ?? undefined}
          setShowModal={setShowModal}
          setSelectedUser={setSelectedUser}
        />
      )}
    </div>
  );
}

export default HomePage;
