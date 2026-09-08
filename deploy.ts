if(!process.env.DISCORD_TOKEN) {
    throw new Error("Missing DISCORD_TOKEN in environment");
}

if(!process.env.DISCORD_APPID) {
    throw new Error("Missing DISCORD_APPID in environment");
}

import { REST, Routes } from "discord.js";
import { builder } from "./invoicecommand";

const rest = new REST().setToken(process.env.DISCORD_TOKEN);

await rest.put(
    Routes.applicationCommands(process.env.DISCORD_APPID),
    {body: [builder.toJSON()]}
)