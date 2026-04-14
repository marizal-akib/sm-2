export default function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="bg-navy px-6 pb-16 pt-32 sm:pb-20 sm:pt-36 lg:px-10">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="font-heading text-4xl text-white sm:text-5xl md:text-[56px] md:leading-[1.15]">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-white/50 sm:text-[17px]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
