import { kafka } from "./client.js";

const init = async()=>{
  const admin = kafka.admin();
  console.log('Admin Connecting.....');
  admin.connect()
  console.log('Admin Connected SuccesFully');


  console.log('Creating Topics Rider - updates');
  await admin.createTopics({
    topics: [{
        topic: 'rider-updateds',
        numPartitions: 2,
    }]
  });
  console.log('Created Topics Rider - updates Success');

  console.log("Disconnecting Admin..");
  await admin.disconnect();

}

init()