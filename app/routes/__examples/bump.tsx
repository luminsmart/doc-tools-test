import type { LoaderFunction } from "@remix-run/node"
import { redirect } from "@remix-run/node"

export const loader: LoaderFunction = () => {
    return redirect("https://bump.sh/drewlytle/doc/lumin-v3-standalone")
}


export default function() {
    return (
        <iframe title="Docs" src="https://bump.sh/drewlytle/doc/lumin-v3-standalone" />
    )
}