export default function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid-gap grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{children}</div>
}