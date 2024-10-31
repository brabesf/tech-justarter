export interface LawsuitCardProps {
    number: string;
    court: string;
}
  
export interface LawsuitCardComponentProps {
    props: LawsuitCardProps;
    handleClick: (props: LawsuitCardProps) => void;
}