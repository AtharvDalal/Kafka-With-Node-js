import { Kafka } from "kafkajs";

export const kafka = new Kafka({
    clientId: "Myapp",
    brokers: ['192.168.192.110:9092']
})
