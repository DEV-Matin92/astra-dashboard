const dashboard = require("./main")

const bot = "testing"

const dash = new dashboard.DashboardBuilder({

    port: 3000,
    client: bot,
})

dash.run()
