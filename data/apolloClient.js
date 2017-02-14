import ApolloClient, {createNetworkInterface} from 'apollo-client';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';

const networkInterface = createNetworkInterface({uri: 'http://192.168.0.110:3000/graphql'});
// Create WebSocket client
const wsClient = new SubscriptionClient(`http://192.168.0.110:3001/`, {
  reconnect: true,
  connectionParams: {
    // Pass any arguments you want for initialization
  }
});
const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
    networkInterface,
    wsClient,
);


const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions
});

export {client,wsClient};
