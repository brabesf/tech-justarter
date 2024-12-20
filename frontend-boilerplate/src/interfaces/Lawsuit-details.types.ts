export interface RelatedPeople {
    role: string;
    name: string;
}

export interface LawyerProps {
    name: string;
}

export interface Activity {
    description: string;
    date: number;
}

export interface LawsuitProps {
    number: string;
    court: string;
    nature: string;
    kind: string;
    id: string
    subject: string;
    date: string;
    judge: string;
    value: number;
    related_people: RelatedPeople[];
    lawyers: LawyerProps[];
    activities: Activity[];
}