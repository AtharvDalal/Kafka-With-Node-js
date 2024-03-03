import { kafka } from "./client.js";


const init = async()=>{
   const consumer = kafka.consumer({ groupId:"User-1"});
    await consumer.connect()


    await consumer.subscribe({topics: ['rider-updateds'], fromBeginning: true})

    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log(
              `${group}: [${topic}]: PART:${partition}:`,
              message.value.toString()
            );
        }
    })
}

