declare global {
  namespace JSX {
    interface IntrinsicElements {
      "elements-api": any;
    }
  }
}

export const Stoplight: React.FC = () => {
  return <elements-api
  apiDescriptionUrl="./lumin-v3.json"
  router="hash"
></elements-api>;
};
