import type { DialogProps } from "./dialogBox.types"

export default function Dialog({
  isOpen,
  onClose,
  title,
  children,
  actions
}: DialogProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="relative bg-white w-full max-w-xl rounded-2xl shadow-lg p-6 z-10">

        {title && (
          <h2 className="text-lg font-semibold mb-4 text-center">
            {title}
          </h2>
        )}

        <div className="text-black mb-6">
          {children}
        </div>

        <div className="flex justify-end gap-3">
          {actions}
        </div>

      </div>
    </div>
  )
}