import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto flex justify-end">
        <ThemeToggle />
      </div>
    </header>
  )
}