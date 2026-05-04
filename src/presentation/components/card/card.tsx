import type { CardProps } from "./card.types";

export default function Card({
  title,
  value,
  icon,
  color = "text-black"
}: CardProps) {
  return (
    <div className="bg-white border rounded-2xl p-4 shadow-sm flex items-center justify-between">
      
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className={`text-2xl font-bold ${color}`}>
          {value}
        </p>
      </div>

      {icon && (
        <div className="text-gray-400">
          {icon}
        </div>
      )}
      
    </div>
  )
}