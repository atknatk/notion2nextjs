import { Client } from '@notionhq/client';
import { NotionBlocks } from './BlockType';
export declare class Notion2Component {
    private client;
    constructor({ client }: {
        client: Client;
    });
    getPage(pageId: string): Promise<NotionBlocks[]>;
    private getAll;
    private getChildren;
    private getBookmarkInfo;
}
