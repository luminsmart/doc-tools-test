import type { ExternalScriptsFunction } from "remix-utils";
import { ClientOnly } from "remix-utils";
import { RapiDoc } from "~/components/RapiDoc";

const scripts: ExternalScriptsFunction = () => ([
  {
    type: "module",
    src: "https://unpkg.com/rapidoc/dist/rapidoc-min.js"
  }
])

export const handle = { scripts }

export default function() {
  return (
    <ClientOnly>
      {() => <RapiDoc />}
    </ClientOnly>
  );
}
