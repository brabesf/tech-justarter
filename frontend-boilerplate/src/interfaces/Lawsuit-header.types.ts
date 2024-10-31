import { LawsuitProps }from "@/interfaces/Lawsuit-details.types"

export interface LawsuitHeaderProps{
    lawsuit: LawsuitProps;
    handleBack: () => void;
}