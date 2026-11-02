import Image from "next/image";

const questions = [
  {
    question: "How do I book a ticket on TicketBari?",
    answer:
      "Choose your travel type, enter your route and travel date, then select an available ticket. Follow the checkout steps to confirm your booking.",
  },
  {
    question: "Can I book tickets online?",
    answer:
      "Yes. You can search and book available bus, train, launch, and flight tickets online from the comfort of your home.",
  },
  {
    question: "How will I receive my ticket after booking?",
    answer:
      "Your booking details are available in your account after confirmation. Keep the ticket or booking reference handy when you travel.",
  },
  {
    question: "What payment methods can I use?",
    answer:
      "Available payment options are shown during checkout. Your booking is confirmed after the payment is successfully completed.",
  },
  {
    question: "Can I cancel a ticket or get a refund?",
    answer:
      "Cancellation and refund rules depend on the operator and ticket. Check the ticket conditions before booking or contact the operator for help.",
  },
  {
    question: "When should I arrive at the terminal or airport?",
    answer:
      "Allow enough time for check-in and boarding, and follow the departure instructions on your ticket or from your travel operator.",
  },
];

export default function FAQ() {
  return (
    <section className="w-full bg-slate-50 py-16 transition-colors duration-300 dark:bg-zinc-950 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            FAQ
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-100 sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="relative h-[360px] overflow-hidden rounded-2xl shadow-lg sm:h-[440px] lg:col-span-5 lg:h-[560px]">
            <Image
              src="/images/slider/four-plain.jpg"
              alt="Passenger airplane ready for travel"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 to-transparent" />
          </div>

          <div className="space-y-4 lg:col-span-7">
            {questions.map((item, index) => (
              <details
                key={item.question}
                open={index === 0}
                className="group rounded-xl border border-slate-200 bg-white px-5 py-5 shadow-sm transition-colors open:border-emerald-500/40 dark:border-zinc-800 dark:bg-zinc-900/70 dark:open:border-emerald-400/40 sm:px-7"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-slate-900 marker:hidden dark:text-zinc-100 sm:text-lg [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xl font-medium text-slate-700 transition-colors group-open:text-emerald-600 dark:text-zinc-300 dark:group-open:text-emerald-400"
                  >
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl pr-8 text-sm leading-7 text-slate-600 dark:text-zinc-400 sm:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
