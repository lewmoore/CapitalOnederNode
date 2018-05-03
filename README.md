# CapitalOnederNode

Application deployed in [AWS here](CapitalOneder-dev.eu-west-1.elasticbeanstalk.com)

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

##Process
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
