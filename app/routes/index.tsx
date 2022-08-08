import { Link } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import { Typewriter } from "~/components/Typewriters";

export default function () {
  return (
    <main className="bg-lumin-gray flex-grow flex flex-col">
      <section className="pt-10 pb-10 mx-auto max-w-7xl w-full px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28 flex-grow flex flex-col justify-center md:justify-start">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline text-white">
              An API to manage{" "}
            </span>
            <span className="block text-lumin-yellow xl:inline">
              your <ClientOnly>{() => <Typewriter />}</ClientOnly>
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link
                to="/docs"
                className="w-full flex items-center justify-center px-8 py-3 border-4 border-transparent text-base font-medium rounded-md text-lumin-gray bg-lumin-yellow hover:opacity-75 md:py-4 md:text-lg md:px-10"
              >
                Get started
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 text-base font-medium border-lumin-yellow border-4 text-lumin-yellow rounded-md text-lumin-yello md:py-4 md:text-lg md:px-10"
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6">
        <div className="text-center mb-4">
          <h1 className="text-md font-bold text-white opacity-60 uppercase">
            Trusted By The Leaders In Energy
          </h1>
        </div>
        <div className="flex items-center justify-between space-x-6 opacity-50 py-8 container mx-auto">
          <div>
            <img src="/partners/fpl.svg" className="h-12" />
          </div>
          <div>
            <img src="/partners/nextera.svg" className="h-11" />
          </div>
          <div>
            <img src="/partners/storz.svg" className="h-9" />
          </div>
          <div>
            <img src="/partners/sunverge.svg" className="h-9" />
          </div>
          <div>
            <img src="/partners/simpliphi.svg" className="h-9" />
          </div>
        </div>
      </section>
    </main>
  );
}
