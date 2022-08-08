import type { ExternalScriptsFunction } from "remix-utils";
import { ClientOnly } from "remix-utils";
import { Redocly } from "~/components/Redocly";

const scripts: ExternalScriptsFunction = () => ([
  {
    src: "https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js"
  }
])

export const handle = { scripts }

export default function() {
    
  return (
    <ClientOnly>
      {() => <Redocly />}
    </ClientOnly>
  );
}
