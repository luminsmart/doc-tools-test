import { RedocStandalone } from "redoc";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "redoc": any;
    }
  }
}

export const Redocly: React.FC = () => {
  return <RedocStandalone specUrl="./lumin-v3.json" />
};
