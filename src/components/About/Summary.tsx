type SummaryProps = {
  summary: string[];
};

export default function Summary({ summary }: SummaryProps) {
  return (
    <section className="about-summary">
      {summary.map((p, i) => <p key={i} className="about-summary__paragraph">{p}</p>)}
    </section>
  );
}
