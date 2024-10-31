export interface SearchInputProps {
    tribunal: string;
    setTribunal: (court: string) => void;
    cnj: string;
    setCnj: (cnj: string) => void;
    onSearch: () => void
}