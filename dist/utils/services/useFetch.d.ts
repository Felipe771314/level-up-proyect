declare const useFetch: (url: string) => {
    data: any[];
    loading: boolean;
    error: string | null;
};
export default useFetch;
