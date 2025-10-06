export function Footer() {
  return (
    <footer className="bg-background max-w-7xl mx-auto  py-8 flex items-center justify-center">
      <p className="text-muted-foreground text-xl">
        © {new Date().getFullYear()} All rights reserved | Built by{' '}
        <a href="https://github.com/Theobhg" className="text-primary" target="_blank" rel="noopener noreferrer">
          Theobhg
        </a>
      </p>
    </footer>
  )
}
