export default function TrustBar() {
  const signals = [
    {
      label: 'Trusted by 200+ companies',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 1.5L9.8 5.6L14.5 6.27L11.25 9.44L12.09 14.18L8 11.96L3.91 14.18L4.75 9.44L1.5 6.27L6.2 5.6L8 1.5Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" fill="currentColor" fillOpacity="0.3"/>
        </svg>
      ),
    },
    {
      label: 'Ships in 5–7 days',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M1 9.5H10.5M10.5 9.5V5.5H8L10.5 9.5ZM10.5 9.5H13L15 12H10.5V9.5Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="4" cy="13" r="1.25" stroke="currentColor" strokeWidth="1.25"/>
          <circle cx="12" cy="13" r="1.25" stroke="currentColor" strokeWidth="1.25"/>
          <path d="M1 5.5H8V9.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'Real humans, real answers',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M2 12V11C2 9.343 3.343 8 5 8H8" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="6" cy="4.5" r="2.5" stroke="currentColor" strokeWidth="1.25"/>
          <path d="M10.5 9L12 10.5L15 7.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'No minimums',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.25"/>
          <path d="M5.5 8L7 9.5L10.5 6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ]

  return (
    <div className="bg-brand-blue py-4">
      <div className="max-w-6xl mx-auto px-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {signals.map((s, i) => (
            <li key={i} className="flex items-center gap-2 text-white text-sm font-medium">
              <span className="opacity-90">{s.icon}</span>
              {s.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
