type FAQ = {
  question: string;
  answer: string;
};

type Props = {
  items: FAQ[];
};

export function FAQAccordion({ items }: Props) {
  return (
    <div className="divide-y divide-neutral-100 rounded-2xl bg-card shadow-soft ring-1 ring-neutral-100">
      {items.map((item) => (
        <details
          key={item.question}
          className="group px-5 py-4"
          aria-label={`FAQ ${item.question}`}
          open={false}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-left text-base font-semibold text-foreground">
            {item.question}
            <span className="text-brand group-open:rotate-45 transition">+</span>
          </summary>
          <p className="pt-2 text-sm text-muted/90">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
