import Image from "next/image";
import Navbar from "@/components/Navbar";
import {
  Smartphone,
  Wifi,
  Printer,
  Zap,
  Facebook,
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-gray-900">

      <Navbar />

      {/* ================= HERO ================= */}

      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-800 text-white">

        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-5 py-16 md:flex-row md:py-24">

          <div className="flex-1 text-center md:text-left">

            <span className="inline-block rounded-full bg-orange-500 px-4 py-1 text-sm font-semibold">
              CAC Registered Business
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Essential Digital
              <br />
              Services,
              <br />
              Simplified.
            </h1>

            <p className="mt-5 text-xl text-teal-100">
              Powered by UZYFINE TEKSOLUTIONS
            </p>

            <p className="mt-6 max-w-xl text-lg text-teal-50">
              We deliver innovative digital services through
              <strong> UzyfinePro</strong>, making airtime recharge,
              data subscriptions, recharge card printing and
              utility bill payments simple, fast and reliable.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start">

              <a
                href="/contact"
                className="rounded-xl bg-orange-500 px-7 py-3 font-semibold shadow-lg hover:bg-orange-600"
              >
                Contact Us
              </a>

              <a
                href="#services"
                className="rounded-xl border border-white px-7 py-3 font-semibold hover:bg-white hover:text-teal-900"
              >
                Explore Services
              </a>

            </div>

          </div>

          <div className="flex flex-1 justify-center">

  <div className="text-center">

    <Image
      src="/phone.png"
      alt="UzyfinePro App"
      width={340}
      height={680}
      priority
      className="w-[320px] md:w-[360px] h-auto drop-shadow-2xl"
    />

    <p className="mt-5 text-xl font-semibold text-teal-100">
      UzyfinePro App
    </p>

    <p className="mt-2 text-teal-200">
      Your all-in-one platform for essential digital services.
    </p>

  </div>

</div>

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section
        id="services"
        className="bg-slate-50 py-20"
      >

        <div className="mx-auto max-w-6xl px-5">

          <div className="mb-12 text-center">

            <h2 className="text-4xl font-bold text-slate-900">
              Our Services
            </h2>

            <p className="mt-3 text-gray-600">
              Essential digital services delivered through
              <span className="font-semibold text-teal-700">
                {" "}UzyfinePro
              </span>.
            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:-translate-y-2 hover:shadow-xl transition">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100">
                <Smartphone size={32} className="text-teal-700" />
              </div>

              <h3 className="mt-6 text-xl font-bold">VTU</h3>

              <p className="mt-3 text-gray-600">
                Airtime recharge for MTN, Airtel,
                Glo and 9mobile.
              </p>

            </div>

            <div className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:-translate-y-2 hover:shadow-xl transition">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100">
                <Wifi size={32} className="text-sky-700" />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Data Subscriptions
              </h3>

              <p className="mt-3 text-gray-600">
                Affordable data bundles with
                instant activation.
              </p>

            </div>

            <div className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:-translate-y-2 hover:shadow-xl transition">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100">
                <Printer size={32} className="text-violet-700" />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Recharge Card Printing
              </h3>

              <p className="mt-3 text-gray-600">
                Generate and print bulk recharge
                card e-PINs.
              </p>

            </div>

            <div className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:-translate-y-2 hover:shadow-xl transition">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">
                <Zap size={32} className="text-amber-600" />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Bills Payments
              </h3>

              <p className="mt-3 text-gray-600">
                Electricity, DSTV, GOtv,
                StarTimes and more.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY UZYFINEPRO ================= */}

<section className="bg-white py-20">

  <div className="mx-auto max-w-6xl px-5">

    <div className="text-center">

      <span className="inline-block rounded-full bg-teal-100 px-8 py-4 text-3xl font-extrabold text-teal-800">
  UzyfinePro
</span>

      <h2 className="mt-6 text-4xl font-bold">
        All Your Essential Digital Services,
        <br />
        In One App
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
        Enjoy a seamless experience with UzyfinePro. Buy airtime,
        subscribe to data, pay electricity bills, renew DSTV,
        GOtv and StarTimes subscriptions, and generate recharge
        card e-PINs—all from one reliable platform.
      </p>

    </div>

    <div className="mt-14 grid gap-8 md:grid-cols-3">

      <div className="rounded-2xl bg-slate-50 p-8 text-center shadow-sm">
        <h3 className="text-xl font-bold text-teal-800">
          Fast
        </h3>

        <p className="mt-4 text-gray-600">
          Transactions are processed quickly with instant delivery
          for supported services.
        </p>
      </div>

      <div className="rounded-2xl bg-slate-50 p-8 text-center shadow-sm">
        <h3 className="text-xl font-bold text-teal-800">
          Secure
        </h3>

        <p className="mt-4 text-gray-600">
          Your transactions are handled through a dependable and
          trusted platform.
        </p>
      </div>

      <div className="rounded-2xl bg-slate-50 p-8 text-center shadow-sm">
        <h3 className="text-xl font-bold text-teal-800">
          Convenient
        </h3>

        <p className="mt-4 text-gray-600">
          Access multiple digital services anytime, anywhere, all
          from one application.
        </p>
      </div>

    </div>

  </div>

</section>


      {/* ================= FOOTER ================= */}

<footer className="bg-slate-900 text-slate-300">
  <div className="mx-auto max-w-6xl px-5 py-12">

    <div className="grid gap-10 md:grid-cols-3">

      {/* Company */}
      <div>

        <h3 className="text-2xl font-bold text-white">
          UZYFINE TEKSOLUTIONS
        </h3>

        <p className="mt-4 leading-7">
          Delivering reliable digital services through
          <strong> UzyfinePro</strong>, including airtime,
          data subscriptions, recharge card printing and
          utility bill payments.
          </p>
          <br />

            <p>
              <strong>CAC Registration Number</strong><br />
              9138440
            </p>

            <br />

            <p>
              <strong>Address</strong><br />
              House No. 2,<br />
              Owom Mountain Road,<br />
              Behind Owom Bus Stop,<br />
              Along Uburu–Onueke Road,<br />
              Oshiri,<br />
              Onicha LGA,<br />
              Ebonyi State,<br />
              Nigeria.
            </p>

      </div>

      {/* Quick Links */}
      <div>

        <h3 className="text-xl font-semibold text-white">
          Quick Links
        </h3>

        <div className="mt-4 space-y-3">

          <Link href="/about" className="block hover:text-white">
            About
          </Link>

          <Link href="/contact" className="block hover:text-white">
            Contact
          </Link>

          <Link href="/#services" className="block hover:text-white">
            Services
          </Link>

          <Link href="/privacy-policy" className="block hover:text-white">
            Privacy Policy
          </Link>

          <Link href="/terms" className="block hover:text-white">
            Terms of Service
          </Link>

        </div>

      </div>

      {/* Connect */}
      <div>

        <h3 className="text-xl font-semibold text-white">
          Connect With Us
        </h3>

        <div className="mt-4 flex flex-wrap gap-4">

          <a
            href="https://www.facebook.com/share/1Enb7Wrr6n/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-slate-800 px-4 py-2 hover:bg-teal-700"
          >
            Facebook
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-slate-800 px-4 py-2 hover:bg-teal-700"
          >
            Instagram
          </a>

          <a
            href="https://wa.me/2348062823259"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-slate-800 px-4 py-2 hover:bg-green-600"
          >
            WhatsApp
          </a>

        </div>

        <p className="mt-6">
          <strong>Email:</strong><br />
          uzyfinepro@gmail.com
        </p>

        <p className="mt-3">
          <strong>Phone:</strong><br />
          +234 806 282 3259
        </p>

      </div>

    </div>

    <hr className="my-8 border-slate-700" />

    <p className="text-center text-sm text-slate-400">
      © 2026 UZYFINE TEKSOLUTIONS. All Rights Reserved.
    </p>

  </div>
</footer>

    </main>
  );
}