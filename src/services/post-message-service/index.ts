import {IPostMessageService} from '@services/post-message-service/model'

export default class PostMessageService implements IPostMessageService {
    async sendToClients<T>(clients: Clients, data: T): Promise<void> {
        const all: ReadonlyArray<Client> = await clients.matchAll()

        all.map((client: Client) => {
            return client.postMessage(data)
        })
    }
}

