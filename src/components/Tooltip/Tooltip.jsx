import useAuth from "../../hooks/useAuth";

const Tooltip = () => {
    const { user } = useAuth();
  return (
    <div className="absolute top-full left-1/2 z-50 -translate-x-1/2 h-[48px] w-[200px] bg-blue-950 text-white border border-gray-200 shadow-md p-2 rounded">
      <div>{user.displayName}</div>
      <div>{user.email}</div>
    </div>
  );
};

export default Tooltip;
