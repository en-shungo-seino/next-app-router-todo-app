export const AddTask = () => {
  return (
    <form action="" className="mb-4 space-y-3">
      <input
        type="text"
        placeholder="Add a task"
        className="w-full rounded-md border px-4 py-2 focus:border-gray-300 focus:outline-none"
      />
      <button
        type="submit"
        className="w-full rounded-md bg-slate-400 px-4 py-2 text-white transition-all duration-200 hover:scale-95 hover:bg-gray-500"
      >
        Add
      </button>
    </form>
  );
};
