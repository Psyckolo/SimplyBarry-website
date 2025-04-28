interface StaticHeroBackgroundProps {
  imageUrl: string
}

export default function StaticHeroBackground({ imageUrl }: StaticHeroBackgroundProps) {
  return (
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url('${imageUrl}')` }}
      aria-label="Image d'arrière-plan de jardin"
    />
  )
}
