export type status = "progress" | "cancelled" | "send"
export type order = "new" | "old" | "history"
export type gender = "Male" | "Female" | "unknown";
export type category = "deport" | "house" | "hobbies" | "others"



//  Diferentes estados que pueden tener cards de productos.
// StatusInfo es lo que define el estado de envio, "id" para rastrearlo, "message",
// recibe el mensaje del envio lo ponemos como string porque lo vamos a definir
// segun la logica de negocio despues.
// "name" del producto, tipo string, para poder pasarle el valor y el nombre el mock que
// vayamos a crear. "status" ele stado del envio para poder trackearlo.
// "image", tipo string para pasarle una url, "order" le vamos si el pedido es
// nuevo o viejo, una suerte de filstrado. "Category" vamos a pasarle las categorias que tenemos.


export interface statusInfo {
    id: number,
    message: string,
    name: string,
    status: status,
    image: string,
    order: order
    category: category
}

export interface infoProps {
    count: number,
    page: number,
    next: string | null,
    prev: string | null
}
