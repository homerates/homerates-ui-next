// components/Header.tsx
export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 p-3">
        <a
          href="/"
          aria-label="HomeRates.ai"
          className="flex items-center gap-2 no-underline text-inherit hover:opacity-90"
        >
          {/* Icon */}
          <img
            src="/assets/homerates-icon.svg?v=1"
            alt="HomeRates icon"
            className="h-8 w-auto block rounded bg-gray-100 p-1 ring-1 ring-gray-200"
          />

          {/* Wordmark (temporary visibility test; remove if not needed) */}
          <img
            src="/assets/homerates-name.svg?v=1"
            alt="HomeRates wordmark"
            className="h-8 w-auto block rounded bg-gray-100 p-1 ring-1 ring-gray-200"
          />

          <span className="text-lg font-semibold">HomeRates.ai</span>
        </a>

        <div className="ml-auto text-sm text-gray-500" />
      </div>
    </header>
  );
}
