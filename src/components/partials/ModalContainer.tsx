import type { TChildren } from "@/core/types/props";

function ModalContainer({ children }: TChildren) {
  return (
    <div className="fixed top-0 left-0 backdrop-blur-[1px] bg-[#00000025] w-full h-full flex items-center justify-center z-10">
      <div className="min-w-[358px] items-center bg-white rounded-[20px] p-10 flex flex-col drop-shadow-[0px_4px_4px_0px_#00000040] relative max-md:w-[80%] md:w-[500px]">
        {children}
      </div>
    </div>
  );
}

export default ModalContainer;
