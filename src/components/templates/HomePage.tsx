import { toast } from "react-toastify";

import { MESSAGES } from "@/core/enums/enums";
import { useGetUsers } from "@/core/services/queries";
import AddModal from "@/components/templates/addModal";

function HomePage() {
  const { data, error, isPending } = useGetUsers();

  if (error) return toast.error(MESSAGES.UNKNOWN_ERROR);
 
  return <AddModal />;
}

export default HomePage;
