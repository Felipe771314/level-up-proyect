export type status = "progress" | "cancelled" | "send";
export type order = "new" | "old" | "history";
export type gender = "Male" | "Female" | "unknown";
export type category = "deport" | "house" | "hobbies" | "others";
export interface statusInfo {
    id: number;
    message: string;
    name: string;
    status: status;
    image: string;
    order: order;
    category: category;
}
export interface infoProps {
    count: number;
    page: number;
    next: string | null;
    prev: string | null;
}
