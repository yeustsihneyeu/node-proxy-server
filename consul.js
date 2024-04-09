import Consul from 'consul';

const consul = new Consul({ host: 'localhost', port: 9091 });

export const registerToConsul = (opt) => consul.agent.service.register(opt)
    .then(() => console.log(`Service ${opt['serviceName']} registered`))
    .catch(err => console.log(err));