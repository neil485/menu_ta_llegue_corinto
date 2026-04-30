export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-10 px-4">
      <div className="animate-float animate-pulse-glow w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-brand-primary/20 dark:bg-brand-primary/10 border-4 border-brand-primary dark:border-brand-primary-light flex items-center justify-center">
        <span className="text-6xl sm:text-7xl">{'\uD83C\uDF54'}</span>
      </div>
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
