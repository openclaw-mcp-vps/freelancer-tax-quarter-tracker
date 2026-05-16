export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          For Freelancers Earning $50k+
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never Overpay (or Underpay)<br />
          <span className="text-[#58a6ff]">Quarterly Taxes Again</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          FreelanceTax connects to your bank and payment platforms, automatically calculates what you owe each quarter, and reminds you before every IRS deadline.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $19/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No setup fees.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🔗", title: "Bank & Platform Sync", desc: "Connects via Plaid to Stripe, PayPal, and your bank automatically." },
            { icon: "🧮", title: "Instant Tax Estimates", desc: "Real-time SE tax + federal/state estimates updated as income arrives." },
            { icon: "🔔", title: "Deadline Reminders", desc: "Email alerts before every quarterly due date so you're never caught off guard." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to stay compliant</p>
          <ul className="text-sm text-left space-y-3 mb-8">
            {[
              "Unlimited bank & platform connections",
              "Automated quarterly tax calculations",
              "Federal + all 50 state estimates",
              "Email deadline reminders",
              "Annual tax summary export",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does FreelanceTax calculate my quarterly taxes?",
              a: "We pull your income data via Plaid, apply current IRS self-employment tax rates (15.3%), and estimate your federal and state income tax based on your projected annual income and filing status."
            },
            {
              q: "Is my bank data secure?",
              a: "Yes. We use Plaid, a bank-grade encrypted connection trusted by millions. We never store your banking credentials — only read-only transaction data needed for tax calculations."
            },
            {
              q: "When are quarterly tax payments due?",
              a: "The IRS requires payments on April 15, June 15, September 15, and January 15. FreelanceTax sends you reminders 2 weeks before each deadline so you always have time to prepare."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} FreelanceTax. Not a licensed tax advisor. Consult a CPA for personalized advice.
      </footer>
    </main>
  );
}
