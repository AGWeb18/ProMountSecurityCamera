import Link from "next/link";

function CheckIcon() {
  return (
    <svg
      className="h-6 w-5 flex-none text-blue-600"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
                    <div className="flex lg:flex-1">
                      <a href="#" className="-m-1.5 p-1.5 text-2xl font-black tracking-tight text-blue-900 uppercase">
                        ProMount<span className="text-blue-600">.</span>
                      </a>
                    </div>
          <div className="hidden lg:flex lg:gap-x-8">
            <a
              href="#about"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition"
            >
              Our Story
            </a>
            <a
              href="#pricing"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition"
            >
              FAQ
            </a>
          </div>
          <div className="flex flex-1 justify-end">
            <a
              href="tel:17055302530"
              className="text-sm font-bold leading-6 text-blue-600 border border-blue-100 bg-blue-50 px-3 py-1 rounded-full hover:bg-blue-100 transition"
            >
              Call <span className="hidden sm:inline">(705) 530-2530</span>
              <span className="sm:hidden">Now</span>
            </a>
          </div>
        </nav>
      </header>

      <main className="isolate pt-20">
        {/* Hero Section */}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-24 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                Smart Home Security,{" "}
                <span className="text-blue-600 text-nowrap">Simplified.</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Professional camera installation for your home or cottage.
                Serving <strong>Durham Region</strong> and the{" "}
                <strong>Kawarthas</strong> with reliable, expert service.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
                <a
                  href="tel:17055302530"
                  className="w-full sm:w-auto rounded-full bg-blue-600 px-8 py-3.5 text-base font-bold text-white shadow-lg hover:bg-blue-500 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Call (705) 530-2530
                </a>
                <a
                  href="#pricing"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  View Packages <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div
          id="about"
          className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32"
        >
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 items-center">
            <div>
              <h2 className="text-base font-semibold leading-7 text-blue-600 uppercase tracking-widest">About ProMount Security Cameras</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Born from a family need.
              </p>
              <div className="mt-6 space-y-4 text-lg leading-8 text-gray-600">
                <p>
                  It started when I installed an exterior security system for my 95-year-old grandpa. My aunt and uncle wanted to keep an eye on him, but the technology felt overwhelming.
                </p>
                <p>
                  He often worried about whether the garage door was closed at night. Instead of him having to walk down to check, we installed a dedicated camera so he—and the rest of the family—could verify it instantly from their phones.
                </p>
                <p>
                  I realized that after my aunt, uncle, and cousins all struggled to set it up, there was a massive gap. While the hardware exists, the <strong>bridge</strong> between buying a camera and actually having it work reliably for the whole family is missing for many people.
                </p>
                <p>
                  ProMount Security Cameras was built to provide that bridge. We
                  don&apos;t just &quot;install cameras&quot;—we set up your peace of mind.
                </p>
                <p>
                  Through years of service, I have identified the core user
                  personas and their primary pain points. This analysis informs
                  our tiered plan structure, ensuring each tier addresses
                  distinct user needs and value propositions.
                </p>
              </div>
            </div>
                        <div className="bg-blue-50 rounded-3xl p-8 lg:p-12 border border-blue-100">
                          <h3 className="font-bold text-blue-900 text-xl mb-4">The ProMount Security Cameras Promise</h3>
              <ul className="space-y-4">
                <li className="flex gap-x-3 text-gray-700 font-medium">
                  <CheckIcon /> No confusing monthly subscriptions.
                </li>
                <li className="flex gap-x-3 text-gray-700 font-medium">
                  <CheckIcon /> Full ownership of your data.
                </li>
                <li className="flex gap-x-3 text-gray-700 font-medium">
                  <CheckIcon /> Weather-proof, high-definition hardware.
                </li>
                <li className="flex gap-x-3 text-gray-700 font-medium">
                  <CheckIcon /> Professional app setup on all your devices.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                All-In-One Packages
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Equipment, installation, and setup included. No hidden fees,
                ever.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-12 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
              {/* Basic Tier */}
              <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 shadow-sm">
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    Basic Watch
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    Perfect for monitoring a single entry point or small
                    apartment.
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      $399
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      CAD
                    </span>
                  </p>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                  >
                    <li className="flex gap-x-3">
                      <CheckIcon /> 1 Outdoor HD Camera
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon /> Single User Access
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon /> Mobile App Setup
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon /> 1-Year Workmanship Warranty
                    </li>
                  </ul>
                </div>
                <a
                  href="tel:17055302530"
                  className="mt-8 block rounded-md bg-blue-50 px-3 py-2 text-center text-sm font-semibold leading-6 text-blue-600 shadow-sm hover:bg-blue-100"
                >
                  Call to Book
                </a>
              </div>

              {/* Standard Tier */}
              <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-2 ring-blue-600 xl:p-10 shadow-xl relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold text-white uppercase tracking-widest">
                  Most Popular
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    Standard Guard
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    Comprehensive coverage for most detached homes.
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      $899
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      CAD
                    </span>
                  </p>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                  >
                    <li className="flex gap-x-3">
                      <CheckIcon /> 4 Outdoor HD Cameras
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon /> 3 Users (Owner + 2 Family)
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon /> Multi-Device App Setup
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon /> 1-Year Workmanship Warranty
                    </li>
                    <li className="flex gap-x-3 text-blue-600 font-semibold">
                      <CheckIcon /> 24/7 Local Recording
                    </li>
                  </ul>
                </div>
                <a
                  href="tel:17055302530"
                  className="mt-8 block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Call to Book
                </a>
              </div>

              {/* Premium Tier */}
              <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 shadow-sm">
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    Premium Shield
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    Maximum security for larger properties and extended
                    families.
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      $1,299
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      CAD
                    </span>
                  </p>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                  >
                    <li className="flex gap-x-3">
                      <CheckIcon /> 6 Outdoor HD Cameras
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon /> 6 Users (Owner + 5 Family)
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon /> Priority Support
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon /> 2-Year Workmanship Warranty
                    </li>
                    <li className="flex gap-x-3 text-blue-600 font-semibold">
                      <CheckIcon /> Advanced Motion Detection Setup
                    </li>
                  </ul>
                </div>
                <a
                  href="tel:17055302530"
                  className="mt-8 block rounded-md bg-blue-50 px-3 py-2 text-center text-sm font-semibold leading-6 text-blue-600 shadow-sm hover:bg-blue-100"
                >
                  Call to Book
                </a>
              </div>
            </div>

            <p className="mt-12 text-center text-gray-500 text-sm italic">
              Need more cameras? Custom 6 and 8 camera setups available upon
              request.
            </p>
          </div>
        </div>

        {/* Service Area */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 border-t border-gray-100">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Proudly Serving Our Local Community
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {[
                "Whitby",
                "Oshawa",
                "Bowmanville",
                "Port Perry",
                "Peterborough",
                "Lindsay",
                "Lakefield",
                "Fenelon Falls",
                "Coboconk",
              ].map((town) => (
                <span
                  key={town}
                  className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 border border-blue-100"
                >
                  {town}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently Asked Questions
          </h2>
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                Are there monthly fees?
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base leading-7 text-gray-600">
                  No. We prefer systems that record locally or use free cloud
                  tiers. Once you pay for the install, you own the system and
                  your data.
                </p>
              </dd>
            </div>
            <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                Do the cameras work in the winter?
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base leading-7 text-gray-600">
                  Yes. We use hardware specifically rated for Canadian winters,
                  ensuring reliable operation even in sub-zero temperatures
                  common in the Kawarthas.
                </p>
              </dd>
            </div>
            <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                Can multiple family members have access?
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base leading-7 text-gray-600">
                  Absolutely. As part of our setup, we will help you invite
                  family members so everyone can keep an eye on things from
                  their own phones.
                </p>
              </dd>
            </div>
          </dl>
        </div>

        {/* Footer */}
                        <footer className="bg-gray-900 py-12">
                          <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                              <span className="text-xl font-bold text-white tracking-tight uppercase">
                                ProMount<span className="text-blue-500">.</span>
                              </span>
                              <p className="text-sm text-gray-400 text-center">
                                &copy; {new Date().getFullYear()} ProMount Security Cameras. Professional Installation in Durham & Kawarthas.
                              </p>              <div className="flex flex-col items-center md:items-end">
                <a
                  href="tel:17055302530"
                  className="text-lg font-bold text-white hover:text-blue-400 transition"
                >
                  (705) 530-2530
                </a>
                <span className="text-gray-500 text-xs mt-1">
                  Call for a free quote
                </span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
