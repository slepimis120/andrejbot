import discord
from discord.ext.commands import Bot
from discord.ext import commands
import asyncio
import time

Client= discord.Client()
client= commands.Bot(command_prefix = "#")

@client.event
async def on_ready ():
    print ("Bot je spreman!")

client.login(process.env.BOT_TOKEN)
