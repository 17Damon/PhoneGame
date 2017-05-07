import ApolloClient, {createNetworkInterface} from 'apollo-client';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';

const networkInterface = createNetworkInterface({uri: globalServerIP});

// Create WebSocket client
// const wsClient = new SubscriptionClient(globalWsServerIP, {
//   reconnect: true,
//   connectionParams: {
//     // Pass any arguments you want for initialization
//   }
// });
// const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
//     networkInterface,
//     wsClient,
// );


const client = new ApolloClient({
  networkInterface: networkInterface
});

export {client};
