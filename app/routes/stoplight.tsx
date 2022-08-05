import type { ExternalScriptsFunction } from "remix-utils";
import { ClientOnly } from "remix-utils";
import { Stoplight } from "~/components/Stoplight";

const scripts: ExternalScriptsFunction = () => ([
  {
    src: "https://unpkg.com/@stoplight/elements/web-components.min.js"
  }
])

export const handle = { scripts }

export default function() {
  return (
    <ClientOnly>
      {() => <Stoplight />}
    </ClientOnly>
  );
}
