
function SkeletonTaskCard() {
  const rows = [70, 55, 80, 45];

  return (
    <div className="border border-line rounded-sm p-6 mb-6 animate-pulse">
      <div className="h-5 w-2/3 bg-line rounded-sm mb-3" />

      <div className="flex items-center gap-3 mb-6">
        <div className="h-3 w-16 bg-line rounded-sm" />
        <div className="h-3 w-24 bg-line rounded-sm" />
      </div>

      <ul>
        {rows.map((width, index) => (
          <li key={index} className="relative flex gap-4 pb-6 last:pb-0">
            {index !== rows.length - 1 && (
              <span className="absolute left-2.25 top-6 bottom-0 w-px bg-line" />
            )}
            <span className="relative z-10 shrink-0 w-4.75 h-4.75 rounded-full border-2 border-line bg-paper" />
            <div className="flex-1 -mt-0.5">
              <div className="h-3 bg-line rounded-sm" style={{ width: `${width}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkeletonTaskCard;