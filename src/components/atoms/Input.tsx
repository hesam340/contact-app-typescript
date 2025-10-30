import type { TInput } from "@/core/types/props";

function Input({ title, placeHolder, children, name, register, errors }:TInput) {
  return (
    <div className="flex flex-col mb-5">
      <div className="flex items-center gap-1 mb-1.5">
        {children}
        <label htmlFor={name} className="text-lg">{title}</label>
      </div>
      <div className="flex flex-col">
        <input
          type="text"
          placeholder={placeHolder}
          id={name}
          {...register(name)}
          className="border border-[#304ffe] rounded-lg px-2 py-1 focus:outline-none focus:shadow-[0px_0px_10px_5px_#304ffe3c]"
        />
        <span className="h-2 text-sm mt-0.5 text-rose-500">{errors[name]?.message}</span>
      </div>
    </div>
  );
}

export default Input;
