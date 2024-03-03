import { kafka } from "./client.js";
import readline from 'readline'

const rl = readline.createInterface({
    input:procees.stdin,
    output:procees.stdout
})

const init = async () => {
  const producer = kafka.producer();

  console.log("connecting Producer ");
  await producer.connect();
  console.log("Producer Connectd Sucesfully");

  rl.setPrompt('>')
  rl.prompt();

  await producer.send({
    topic: "rider-updates",
    messagesL: [
      { 
        partition: 0,
        key: "Location Update",
        value: JSON.stringify({ name: "Tony Stark", location: "Benglore" }),
      },
    ],
  });
  await producer.disconnect()
};
init()