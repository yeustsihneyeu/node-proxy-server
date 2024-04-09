import Consul from 'consul';
import { PORT, SERVICE_NAME, CONSUL_PORT, CONSUL_URL } from './config.js';

const consul = new Consul({ host: CONSUL_URL, port: CONSUL_PORT });

export const registerToConsul = () => consul.agent.service.register({ name: SERVICE_NAME, port: Number(PORT) })
    .then(() => console.log(`Service ${SERVICE_NAME} registered`))
    .catch(err => console.log(err));