type Product3DProps = {
  /** The emoji standing in for a 3D product render */
  emoji: string;
  /** Font size in px for the emoji */
  size?: number;
  /** Stagger the float animation so a grid of these doesn't bob in unison */
  delay?: number;
  className?: string;
};

export default function Product3D({
  emoji,
  size = 56,
  delay = 0,
  className = "",
}: Product3DProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-end ${className}`}
      style={{ height: size * 1.5 }}
      aria-hidden
    >
      <span
        className="pointer-events-none select-none [animation-name:float-3d] [animation-timing-function:ease-in-out] [animation-iteration-count:infinite]"
        style={{
          fontSize: size,
          lineHeight: 1,
          animationDuration: "3.4s",
          animationDelay: `${delay}s`,
          filter: "drop-shadow(0 10px 8px rgba(0,0,0,0.18))",
        }}
      >
        {emoji}
      </span>
      <span
        className="mt-1 h-2 w-8 rounded-full bg-black/25 blur-[2px] [animation-name:shadow-pulse] [animation-timing-function:ease-in-out] [animation-iteration-count:infinite] dark:bg-black/50"
        style={{ animationDuration: "3.4s", animationDelay: `${delay}s` }}
      />
    </div>
  );
}