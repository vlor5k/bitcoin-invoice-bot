# bitcoin-invoice-bot
simple discord bot to create invoices in btc and addresses from an xpub

payments are detected by looking at the mempool and looking at the utxo set

video tutorial for setup coming when this is finished

## To setup a Discord bot
- Go to [Discord Developer Portal](https://discord.dev)
- Create a new application
- Copy the application id into .env DISCORD_APPID
- Copy the bot token into .env DISCORD_TOKEN
- Copy your user id into .env DISCORD_USERID
- User install the bot

## To setup this project
```
bun install
bunx prisma migrate deploy
bunx prisma generate
bun run deploy.ts
```
you should reload/restart your Discord client after running `deploy.ts` otherwise the `/invoice` command might not show up!

## To run this project
```
bun run index.ts
```
then use `/invoice` anywhere on discord
