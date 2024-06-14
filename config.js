const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233207415469";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_03_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjExLFxuICAgICAgICA3MixcbiAgICAgICAgMjUxLFxuICAgICAgICA4NixcbiAgICAgICAgNjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODEsXG4gICAgICAgIDYsXG4gICAgICAgIDc5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxLFxuICAgICAgICA1NyxcbiAgICAgICAgNDksXG4gICAgICAgIDksXG4gICAgICAgIDI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDgzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDU0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDExMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAzLFxuICAgICAgICA2MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM3LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICA4OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA2NixcbiAgICAgICAgMjQyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDc3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDczLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTkwLFxuICAgICAgICA4NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDcxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwLFxuICAgICAgICA3MixcbiAgICAgICAgMTEzLFxuICAgICAgICA0MixcbiAgICAgICAgMjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTksXG4gICAgICAgIDUyLFxuICAgICAgICA5NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MixcbiAgICAgICAgODQsXG4gICAgICAgIDk5LFxuICAgICAgICA5MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjksXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicUdCd2J2K2hCSjFtcGtNN1pNNlF5d1RQeU9IdU04YXdVY0xHNUJ4OXBOTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiT0laaWNHV1JUbm03UDZlYWlRa1M2Z1wiLFxuICBcInBob25lSWRcIjogXCJmZmNlYWZhYy1iMjllLTRlZTUtYjUzMi0zYTU0ZGNlMWNlNmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODcsXG4gICAgICAxNTMsXG4gICAgICAyMzMsXG4gICAgICAyMTQsXG4gICAgICA2OCxcbiAgICAgIDExNixcbiAgICAgIDE5NixcbiAgICAgIDIyMCxcbiAgICAgIDUzLFxuICAgICAgMTM1LFxuICAgICAgMjMxLFxuICAgICAgMjE3LFxuICAgICAgNjAsXG4gICAgICA1OCxcbiAgICAgIDIwOCxcbiAgICAgIDM5LFxuICAgICAgNDAsXG4gICAgICAxNjgsXG4gICAgICAyNDQsXG4gICAgICAxMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcyLFxuICAgICAgMTIsXG4gICAgICAyMDMsXG4gICAgICAxMjAsXG4gICAgICAxMTgsXG4gICAgICAxMzQsXG4gICAgICAxNzAsXG4gICAgICAxOTQsXG4gICAgICAxMDYsXG4gICAgICAxMCxcbiAgICAgIDIyMixcbiAgICAgIDExMSxcbiAgICAgIDIwNixcbiAgICAgIDE0NCxcbiAgICAgIDMzLFxuICAgICAgMTM0LFxuICAgICAgMjksXG4gICAgICAxMDAsXG4gICAgICAzOCxcbiAgICAgIDE1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tDUzBlVU5FT1RHc0xNR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM1FLUHo4QVlGRkdQa1ZZdUtqYmlML293RjZPMndTL3JjWEhUdm14Vnl6ST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIeUYyb3hINEFZSS83WlFUaVdOL0xvaFVWbE5xMjlNeGxWMEwvajU4Zkx3K0dZWUQ5ejJSQ0lJWit0VGFRQjB5S1RnSVJSVTIyWGQ2TUQ0SWRTbG5EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1UzlmZ0FrL0JuSkVINWVPUFdkRFdlSEkyWlFBb1I3TnhzMmxEYTY5NXg3YlFrUXZKTzN4d3JlbVpVdWNjUVJ0Mkx0WDRVMnd1M2phd2VycHlKdVBBQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzIwNzQxNTQ2OToyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjAyOTcxNjE0ODMwNzg3OjI0QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjA3NDE1NDY5OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgzNjI5ODMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMa29cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxray5qc29uIjogIntcImtleURhdGFcIjpcIkFtMWt2cmpzZGdGUzBLYXZiU2lGL2E1c2QvRldyNzFoeFUyTzUycHRRTnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzcwMjgwMjcyMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzE4MDk2Mjg0NzEzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGttLmpzb24iOiAie1wia2V5RGF0YVwiOlwieG9jWjF4ai96TFhjZXpiTDNNUVVtQUR3Z1VyVHB1emtDNEN3T1ZqU25DND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNzAyODAyNzIwLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMiwwLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODM2MTA0NjAwOVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxrby5qc29uIjogIntcImtleURhdGFcIjpcIklnOW9IbzBhMWxuMnZudS90R3F4MUUrMGhBVXEzRW1TeFJMOHZxU2QwVXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzcwMjgwMjcyMCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzMsMiwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgzNjE2ODUyNTdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMa3EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYaHpUcFdHdXFpek0wQ2MwbksrWkk1Tzg1MW4yMy9FZ2N5dU0yZSt2aDZ3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM3MDI4MDI3MjAsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOls0LDIsMF19LFwidGltZXN0YW1wXCI6XCIxNzE4MzYyNzMxODA3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
