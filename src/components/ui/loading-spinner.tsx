export default function LoadingSpinner() {
  return (
    <div className="flex-1 flex items-center justify-center mt-24">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-600 mx-auto mb-6"></div>
        <p className="text-gray-600 text-lg">Chargement de l'article...</p>
      </div>
    </div>
  )
}
