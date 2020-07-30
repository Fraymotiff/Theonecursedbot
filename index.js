const Discord = require ('discord.js');

const client = new Discord.Client();


client.once('Russian Roulette bot is now online!', () => {
     //Code for the bot to do when starting up.
     })

const PREFIX ='!'



client.once('ready', () => {
     //Code for the bot to do when starting up.
     })
     console.log('Cursed image sender is now online!')
   
     client.on('message', (message) => {
     const PREFIX = '!'
     

     if (message.content.startsWith (PREFIX + "cursed")) {
         let imageNumber = Math.floor(Math.random()* 168) +1
             message.channel.send ("Let's Give it everything we got! It's Punishment time!",  {files: ["./cursed/" + imageNumber + ".png"]} )
             return; 
          
              
             
             
     }
     });
    
    



    client.login(process.env.token);

