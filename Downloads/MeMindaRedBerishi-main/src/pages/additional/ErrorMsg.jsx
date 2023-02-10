export default function ErrorMsg({ error }) {
  return (
    <>
      <div
        className="error-msg position-absolute bg-danger text-white p-2"
        style={{ top: "0", left: "0" }}
      >
        {error ? error : ""}
      </div>
    </>
  );
}


