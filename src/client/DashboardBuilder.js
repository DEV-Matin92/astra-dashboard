class DashboardBuilder {
    constructor(options) {
        if(options && !options.client) return console.error('\x1b[24m\x1b[1m ⚠️  | L\'options bot est nécessaires.\x1b[0m');

        this.bot = options.client
        this.port = options.port || 4567
    }

    run() {
        console.log("runned at port", this.port);
    }
}

module.exports = DashboardBuilder