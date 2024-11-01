import { LawsuitProps } from "./Lawsuit-details.types";
  
export interface LawsuitCardComponentProps {
    props: LawsuitProps;
    handleClick: (props: LawsuitProps) => void;
}