
function Spinner({ size = 16 }) {
  return (
    <span
      className="inline-block border-2 border-current border-t-transparent rounded-full animate-spin"
      style={{ width: size, height: size }}
    />
  );
}

export default Spinner;