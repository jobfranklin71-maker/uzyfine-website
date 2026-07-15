export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}

      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-800 py-20 text-white">

        <div className="mx-auto max-w-5xl px-5 text-center">

          <h1 className="text-5xl font-extrabold">
            About Us
          </h1>

          <p className="mt-6 text-xl text-teal-100">
            Learn more about UZYFINE TEKSOLUTIONS and
            our digital services.
          </p>

        </div>

      </section>

      {/* Content */}

      <section className="py-20">

        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-lg">

          <h2 className="text-3xl font-bold text-slate-900">
            Who We Are
          </h2>

          <p className="mt-6 leading-8 text-gray-700">
            UZYFINE TEKSOLUTIONS is a registered Nigerian
            business committed to delivering reliable,
            affordable and innovative digital solutions.
            We are focused on making everyday digital
            transactions simple, convenient and accessible
            to individuals and businesses across Nigeria.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-900">
            Our Mission
          </h2>

          <p className="mt-6 leading-8 text-gray-700">
            Our mission is to provide secure, fast and
            dependable digital services that save time,
            improve convenience and deliver value to our
            customers through modern technology.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-900">
            Our Platform
          </h2>

          <p className="mt-6 leading-8 text-gray-700">
            <strong>UzyfinePro</strong> is our flagship
            digital platform through which customers can
            conveniently purchase airtime, subscribe to
            data, print recharge card e-PINs and pay
            supported utility bills from a single
            application.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-900">
            Why Choose Us
          </h2>

          <ul className="mt-6 list-disc space-y-3 pl-6 text-gray-700">
            <li>Fast and reliable service delivery.</li>
            <li>Secure digital transactions.</li>
            <li>Affordable and competitive pricing.</li>
            <li>User-friendly experience.</li>
            <li>Dedicated customer support.</li>
          </ul>

        </div>

      </section>

    </main>
  );
}