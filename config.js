const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Heatless-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEZ0VWFVR1FlUmsyalBJTHlPWloxdmpweUZZQlZsK25EVEZNOFJ2MFlVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlBRdEorUDlESWU5a1A0TzJac1NGeUdIaWZ6NmJkOUFVRGNicUtLR3NWST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRHlja3ZQcXM0WXdHTnlJUjg5dkxyRWdkTzJ4VVk0SDVpUm9CL0NjcFdrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsZldGKzVET1NKWXQzdS9Pb0lvaGlwZTl4QU1YMkRncEJvbTcwS2xDYWtnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitMYTgrVUhiRTd5RWlTaExreDZLSmxmRm1odXhEdGdDSWlKclZlOUJGa1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9nc1JWQVVRbEdRd3FXMEttbFlSWnNFbUpteFlzelN5QXk3SFVVWUk2RzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0hxa0U4ZldDUFBVcXBJZUVwZlRlV2R2K2RNVklSL2dGelpUV1pQcDlFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia283YXdhTnZZZUlReVhpUEZaRnlucjZaN25tTmR2TGdtTzFwUUp1WnRRVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9QeGltRTVhVGRQWXZ3K3o5SFpxa3BCZm1zSSt6VG5iY3NMTUoxd3d2UUxKVFkxL3dJUjIwUUFaZTBXNFA2SlFTTGRzTXZVMWxwRU8xdVZmeUpjVENnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI3LCJhZHZTZWNyZXRLZXkiOiI1VjJnYm1Cc2dwVjRzZC9hTnczRVI1QS8zdmdReTNJd3QyR2Z6YUNqT0NVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNjM1Njc2MTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTJGODZFNzVEOUNFMkI0RjdENTVEQ0E2MDJENEQ2M0MifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjAyNDk1MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA2MzU2NzYxMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBRDBFQzMzODM1Q0JBRjBBQjRFRUJDNjM3QzM2MkNBRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MDI0OTUyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ3MDYzNTY3NjExQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkIyRTVGOUU0MUUwNTJCNDIyQUQzN0QzRkRGNzFFRDUzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYwMjQ5NTN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ikg0MUZCV1g1IiwibWUiOnsiaWQiOiIyMzQ3MDYzNTY3NjExOjQ2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjI2NzY2Mzg3OTk4OTYzOjQ2QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTDNYa2JvR0VQQ2dxOFVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZXRmZTZTbzZoL3QrRUhYR3o2R3BPL0NnckVic0hKa2tOYW9MVm1yU3drcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZHBmcVp3NXVQb29nMmp2UjRraERGTTVQcjhxVFlCZStPS2FXcmhDeFhnUjh2K0pHKysxQ0VrZHNCWjZydVZNTkZsQW00T3hBNEdLb095bWZ1TEFJRHc9PSIsImRldmljZVNpZ25hdHVyZSI6ImE0akdYdmhqOHRBMXcrbVUrVDMzbkVBVkFCQ21SNDRDVEJtNGRnd0FhTFdlVTlPVGxrd1gyUVdtR3crd25Oc0thK2UwTU95SDJONTQ2dlp2bEIwOUR3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA2MzU2NzYxMTo0NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYclgzdWtxT29mN2ZoQjF4cytocVR2d29LeEc3QnlaSkRXcUMxWnEwc0pMIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYwMjQ5NDgsImxhc3RQcm9wSGFzaCI6IjJHNEFtdSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRzJqIn0=",
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
