
export function Badge({ children, className, onClick }) {
  return (
    <span
      className={`bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm ${className}`}
      onClick={onClick}
    >
      {children}
    </span>
  );
}
