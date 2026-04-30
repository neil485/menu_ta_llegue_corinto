export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-10 px-4">
      <img
        src={`${import.meta.env.BASE_URL}logo_ya_llegue.jpeg`}
        alt="Ya Llegué! Logo"
        className="animate-float animate-pulse-glow w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-brand-primary dark:border-brand-primary-light object-cover"
      />
      <h1 className="animate-shimmer mt-5 text-4xl sm:text-5xl font-heading tracking-tight text-brand-brown dark:text-brand-cream">
        Ya Llegu&eacute;!
      </h1>
      <p className="mt-1 text-sm sm:text-base text-brand-brown-light dark:text-brand-cream-dark font-semibold">
        Snacks &amp; Comida R&aacute;pida &middot; Corinto
      </p>
      <p className="mt-3 text-xs text-brand-primary dark:text-brand-primary-light tracking-widest uppercase font-semibold">
        {'\uD83D\uDD25'} Los mejores snacks de Corinto {'\uD83D\uDD25'}
      </p>
    </section>
  );
}
