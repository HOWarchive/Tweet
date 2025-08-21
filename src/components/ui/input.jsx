
export function Input({ className, ...props }) {
  return <input className={`border p-2 w-full rounded ${className}`} {...props} />;
}
