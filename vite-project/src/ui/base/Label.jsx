export default function Label({ htmlFor, children, className = '' }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-gray-300 mb-1.5 ${className}`}
    >
      {children}
    </label>
  );
}
