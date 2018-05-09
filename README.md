# CapitalOnederNode

After a day of attempting to build the API in Java for the first time, I decided to complete this tech test in Node, tested with Mocha and Chai and with a MongoDB database

* Application deployed in [AWS here](http://capitalOneder.eu-west-1.elasticbeanstalk.com)

* [Architecture Diagram & Planning diagram](https://github.com/lewmoore/CapitalOnederNode/public/images/)

## Introduction
In the establishment of the New World Order, CapitalOne has laid down plans for creating a nation, Capital Oneder, for anyone to be a part of. To become a citizen, people need to send in the following info:

* Salutation (Mr, Mrs, Miss or Ms)
* Name
* Previous country
* Sex

When a person becomes a citizen, they are provided with a Capital Onederer unique identification tag.

## Requirements
The president of Capital Onederer, Rich Faircountry, expects 100MM people apply for citizenship on the first day. We need an API to register the customers as they come in, without missing anyone out, hopefully. Every citizen should also receive the initial details needed to make them a citizen.

At a later point, it might be needed for the head of a family to be able to add in all the members of their family in one go.

#### Installation Instructions
To run this application locally:

Please note you must have MongoDB installed to run this. To do this:
* Run `brew update` and `brew install mongodb`

* Clone this repo and run `cd CapitalOnederNode`
* Open the app in your favourite text editor and run `npm install` to install dependencies
* Run `npm start` and the application will be on localhost:8080

## Process
* Initialise repository as a node project and render a blank landing page
* Add initial welcome message to homepage
* Add beginnings of form submission with tests
* Add form skeleton with relevant text fields
* Add get route for successPage
* Add post route for successPage
* Add success message to successPage containing the users name and title
* Add randomly generated Citizen ID to success page
* Deploy Application to AWS ElasticBeanstalk
* Add CircleCI build to application
* User input is saved to local Mongo database

## Reflection

### What went well
During this tech test, I feel like I learnt alot. Initially, I made the decision to begin with trying to build an API in Java, having never done Java before, the learning curve was pretty steep. Tuesday afternoon was spent wrangling with Java, intelliJ, Maven, Gradle and many other Java related tech. My main problem, I think, was problems with Gradle config and my versions of Java. This was frustrating at times, but I learnt a bit about how a Java project works (and is initialised).

After this, I decided to pivot and do the tech test in Node as I am much more familiar with this. However, this meant I only had about 1 day to do the task so I had to move quick. I decided my MVP would be a basic Node App that accepted user input (title, first name, last name, previous country and sex) and return a unique ID number to the user. I managed to reach this stage, as well as including a MongoDB database that is updated with the users information.

I briefly explored AWS by deploying the app to ElasticBeanstalk and included a CircleCI build pipeline. This, however, was effected quite a lot by the local Mongo database.

### If I had more time
If i had more time on this tech test I would do some more work around the Mongo database. I would add the users new ID number to the citizenCollection. I would also add some guard conditions around the new citizens being unique, and I would also make the new ID number unique to each citizen.

I would also refine the AWS environment and the CircleCI build. Once I had these in place, they were working fine. However, the addition of a local Mongo database made the builds and deployments keep failing. Given more time, I would look in to both of those issues.

I would also add a small amount of styling to the app to make it look a bit more presentable!

### Post Tech Test
Since submitting this tech test, I have been adding to the application. I have added Mongoose for easier Mongo connection and the app successfully deploys to AWS when the local mongo instance is running.
