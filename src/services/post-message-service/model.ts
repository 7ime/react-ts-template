export interface IPostMessageService {
    sendToClients<T>(clients: Clients, data: T): Promise<void>
}
