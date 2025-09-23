export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={
        "w-full rounded-md border px-3 py-2 text-sm outline-none " +
        "bg-white/5 border-gray-600 text-white focus:border-yellow-500 " +
        className
      }
      {...props}
    />
  );
}
