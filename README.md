# ipfs-iot

Experiment using IPFS PubSub for the Internet of Things. It's similar to using an MQTT message broker (topics) but distributed.

This demo uses an Arduino 101 running standard firmata and an LED inserted into pin 9.

You can send on/off messages to the "general" topic using IPFS to turn on/off the LED.

## Getting Started

Run your IPFS daemon in experimental pubsub mode
````
ipfs daemon --enable-pubsub-experiment
````

Install NodeJS modules
````
npm Install
````
Run IoT app
````
node index.js
````

From another terminal, run
````
ipfs pubsub pub general on
````

For fun, you could uncomment the publish logic in this demo to toggle the LED on/off every 3 seconds.
