export default function InfoSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-heading text-brand-brown dark:text-brand-cream mb-4">
        {'\uD83D\uDCCD'} Informaci&oacute;n
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Ubicacion */}
        <div className="bg-white dark:bg-[#2a1f0e] rounded-xl border border-brand-cream-dark dark:border-brand-brown/50 p-6">
          <h3 className="font-heading text-brand-brown dark:text-brand-cream text-lg mb-3 flex items-center gap-2">
            {'\uD83D\uDCCD'} Ubicaci&oacute;n
          </h3>
          <p className="text-sm text-brand-brown-light dark:text-brand-cream-dark leading-relaxed">
            Corinto, Departamento de Moraz&aacute;n, El Salvador
          </p>
          <div className="mt-4 pt-3 border-t border-brand-cream-dark dark:border-brand-brown/30">
            <h4 className="font-medium text-brand-brown dark:text-brand-cream text-sm mb-2">
              {'\uD83D\uDCDE'} Domicilios
            </h4>
            <p className="text-sm text-brand-brown-light dark:text-brand-cream-dark">
              WhatsApp: 7256-8372
            </p>
          </div>
        </div>

        {/* Aderezos */}
        <div className="bg-white dark:bg-[#2a1f0e] rounded-xl border border-brand-cream-dark dark:border-brand-brown/50 p-6">
          <h3 className="font-heading text-brand-brown dark:text-brand-cream text-lg mb-3 flex items-center gap-2">
            {'\uD83E\uDED5'} Aderezos disponibles
          </h3>
          <ul className="space-y-2">
            {['BBQ', 'Chipotle', 'B\u00FAfalo'].map((a) => (
              <li key={a} className="flex items-center gap-2 text-sm text-brand-brown-light dark:text-brand-cream-dark">
                <span className="w-2 h-2 rounded-full bg-brand-primary" />
                {a}
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-3 border-t border-brand-cream-dark dark:border-brand-brown/30">
            <p className="text-sm text-brand-primary dark:text-brand-primary-light font-medium">
              {'\uD83C\uDF5F'} Todas las hamburguesas incluyen papas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
