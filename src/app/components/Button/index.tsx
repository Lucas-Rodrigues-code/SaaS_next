type Props = {
  color: string;
  label: string;
  onClick: () => void;
  fill?: boolean;
};

export function Button({ color, label, onClick, fill }: Props) {
  return (
    <div
      className="flex justify-center items-center text-#000 font-semibold text-base rounded"
      style={{
        border: "1px solid #000",
        padding: "22px",
        color: fill ? "#FFF" : color,
        borderColor: color,
        backgroundColor: fill ? color : "transparent",
      }}
      onClick={onClick}
    >
      {label}
    </div>
  );
}
