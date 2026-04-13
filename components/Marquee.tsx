const items = [
  'Branded Merchandise',
  'Displays & Signage',
  'Custom Apparel',
  'Company Kits',
  'Promotional Products',
  'Branded Environments',
  'Drinkware & Bags',
  'Custom Products',
]

export default function Marquee() {
  return (
    <div className="border-t border-brand-border border-b overflow-hidden py-[18px] bg-brand-gray">
      <div className="animate-marquee flex w-max">
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-5 px-10 whitespace-nowrap text-[12px] font-medium tracking-[0.12em] uppercase text-brand-light"
          >
            <span className="w-1 h-1 bg-brand-blue rounded-full flex-shrink-0" aria-hidden="true" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
