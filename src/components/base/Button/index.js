export default function Button({ isLoading, children, ...props }) {
  return (
    <>
      <button disabled={isLoading ? true : false} {...props}>
        {isLoading ? "Loading..." : children}
      </button>
    </>
  );
}
