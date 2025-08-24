const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Heatless-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0dJcXhYN1RsRUhkUGI1S2JKV1B1SCtCT0hBVDNRSnVpMWdjeU92WXZIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUx6M2ZSbUhHUlM2TlpmR1VBNkl5YkMwdzRseWIrZkgyZUVESGs3MU1Udz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSS9QcVJwN2VCa0Rta0VEUE5JNm1yaC80NEVOQzk4MW1NSldGNHVlK1g0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzVUNVYjFORy93QnlYMzc4SXlicWNxK3JIa2l3WnUyKzA1WVFoK0x5WHlrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBDbTZnbXhvZHk1ZFZ3VGRmL0ZhNVRiQ3Fja1BtSFc3ZkVYcTRSdktTME09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBFVnptSklVU2JoVzJVdUMwV05iVE5scFlJWmpjRVVNMUxiWjVzYjlibjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUZtd1N5c0pENVM1REJ2VHBNWU1YYkxJakxYK1VlNUpGZTA1aWY1alZYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3F3b2VhVS9tWVV6QXFSRjJPRFNGN3FZNXJWY1BUSzg2WHM5dUlodUtDdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InR4S012S0NyeEZGV1lyYy9PSWZGdnYzWnhJbHpFWVpORWwyVUN0ZFlzcWUxMjVReEROMlVJcXYyb1A4ZlJsMTJUcTZyMWc1SFFQR0Z4SVhDcXl6RGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgzLCJhZHZTZWNyZXRLZXkiOiJJWkhFRTFQMjErM2ZTd2JMY0wyUkNVVkdwdU44UEVGZnJnbm9vL3QrVWEwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxMTUwNjg2ODlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0Y2RDk5RTUxRjhBQkQzM0M4NkM2QkEzODYzNUZFNEYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjA3Nzg3NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiVjQ0NUUzTkUiLCJtZSI6eyJpZCI6IjIzNDkxMTUwNjg2ODk6MTVAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMjU3NjU1MDk1OTEyNDQ6MTVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLYldzOGdGRUt5K3JzVUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYRUQ5SzFrR0JicUtsWVJXRkJiWUlrUWhkUk5aeGJJTnV5djNoWWJVNkJRPSIsImFjY291bnRTaWduYXR1cmUiOiJyTGlVK2dpMnl6V2VuMkZQV2lBdXh4T2E1UTIrdkMzS3d3ZnF4TTN1dmpIMHZIenoxZ1hRbjBUZ2piN2xMT2FlUHhzVldERnZzNUdWeEU2TnFRNXVBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoia0NwUkZvWjdwWkN5TWxDUlpoZ2ZRQnFsMUN5RDZxTHFmSUJHRCt0VzBNNWtGemtPbS83Q1NSSC82aXhYODlYM1NlR3dBMHdvQ0JqSGFkTjY5ZjQxZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTE1MDY4Njg5OjE1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZ4QS9TdFpCZ1c2aXBXRVZoUVcyQ0pFSVhVVFdjV3lEYnNyOTRXRzFPZ1UifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjA3Nzg3MSwibGFzdFByb3BIYXNoIjoiMlAxWWhmIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPa24ifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Heatless-MD ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://cdn.kordai.biz.id/serve/HlEHZd6pgErX.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Heatless-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Heatless-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "2349039409985",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Heatless-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Heatless-MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.kordai.biz.id/serve/HlEHZd6pgErX.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
