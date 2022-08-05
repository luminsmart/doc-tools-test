declare global {
  namespace JSX {
    interface IntrinsicElements {
      "rapi-doc": any;
    }
  }
}

export const RapiDoc: React.FC = () => {
  return (
    <rapi-doc spec-url="./lumin-v3.json" theme="dark" allow-spec-url-load="false" allow-spec-file-load="false" show-header="false" render-style="focused"></rapi-doc>
  );
};
