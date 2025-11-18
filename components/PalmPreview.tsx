interface PalmPreviewProps {
  image: string
}

export function PalmPreview({ image }: PalmPreviewProps) {
  return (
    <div className="bg-card border-2 border-secondary rounded-lg overflow-hidden">
      <img
        src={image || "/placeholder.svg"}
        alt="Captured palm"
        className="w-full aspect-video object-cover"
      />
    </div>
  )
}
