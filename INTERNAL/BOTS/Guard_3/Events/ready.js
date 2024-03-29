class Ready {

    constructor(client) {
        this.client = client;
    }

    async run(client) {
        client = this.client;
        const guild = client.guilds.cache.get(client.config.server);
        client.logger.log(`${client.user.tag}, ${client.users.cache.size} kişi için hizmet vermeye hazır!`, "ready");
        await client.user.setPresence({activity: client.config.status, status: "idle"});
        client.owner = client.users.cache.get(client.config.owner);
        client.extention.emit('scream');
    }
}
module.exports = Ready;