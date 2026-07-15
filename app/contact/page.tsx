import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-800 py-20 text-white">

        <div className="mx-auto max-w-5xl px-5 text-center">

          <h1 className="text-5xl font-extrabold">
            Contact Us
          </h1>

          <p className="mt-6 text-xl text-teal-100">
            We'd love to hear from you.
          </p>

        </div>

      </section>

      {/* Contact Card */}
      <section className="py-20">

        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">

          <h2 className="text-3xl font-bold text-slate-900">
            Get In Touch
          </h2>

          <p className="mt-4 text-lg text-slate-700">
            Contact UZYFINE TEKSOLUTIONS through any of the
            channels below.
          </p>

          <div className="mt-12 space-y-10">

            {/* Phone */}
            <div className="flex items-start gap-5">
              <Phone
                className="mt-1 text-teal-700"
                size={30}
              />

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Phone
                </h3>

                <p className="mt-1 text-lg text-slate-800">
                  +234 806 282 3259
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-5">
              <Mail
                className="mt-1 text-teal-700"
                size={30}
              />

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Email
                </h3>

                <p className="mt-1 break-all text-lg text-slate-800">
                  uzyfinepro@gmail.com
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-5">
              <MapPin
                className="mt-1 text-teal-700"
                size={30}
              />

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Address
                </h3>

                <p className="mt-1 text-lg leading-8 text-slate-800">
                  House No. 2,<br />
                  Owom Mountain Road,<br />
                  Behind Owom Bus Stop,<br />
                  Along Uburu–Onueke Road,<br />
                  Oshiri, Onicha LGA,<br />
                  Ebonyi State, Nigeria.
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-5">
              <MessageCircle
                className="mt-1 text-green-600"
                size={30}
              />

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  WhatsApp
                </h3>

                <a
                  href="https://wa.me/2348062823259"
                  className="mt-1 inline-block text-lg font-medium text-teal-700 hover:underline"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}