import React from 'react';
export interface ListConsumerProps {
    grid?: any;
    itemLayout?: string;
}
export declare const ListContext: React.Context<ListConsumerProps>;
export declare const ListConsumer: React.Consumer<ListConsumerProps>;
