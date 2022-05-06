export default function Input({ label, ...props }) {
  return (
    <>
      {label && <label className="formLabel">{label}</label>}
      <input {...props} />
    </>
  );
}
