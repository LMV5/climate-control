export default function Message({ message, type }) {
  const backgroundColor = type === "error" ? "bg-brightPink" : "bg-aquamarine";

  return (
    message && (
      <div
        className={`mt-4 p-2 text-darkBlue text-center rounded ${backgroundColor}`}
      >
        {message}
      </div>
    )
  );
}
