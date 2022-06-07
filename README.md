# About The Project

My Collaborative Whiteboard Website is a site called BoardBook, which is because it is a social board which allows collaboration between different users like Facebook. This is achieved by having a web application that collaborates between multiple client browsers that are connected to a single server application. When a user draws or types or sends an element on the html5 canvas in the client browser, the element will be displayed on the canvas of all connected clients. The application's core functions in terms of direct live collaborations work by when a browser loads the Web page, the client-side script will send a WebSocket handshake request to the application server. The whiteboard then uses JSON as well as potentially binary messages that saves the entire board as an image then transfers the entire canvas as a data URL from the connected clients in the session and broadcasts them to all connected clients. 

# Built With

- [Java][identifier1]
- [HTML][identifier2]
- [CSS][identifier3]
- [Javascript][identifier4]
- [JSON][identifier5]
- [Glassfish][identifier6]


<!-- Identifiers, in alphabetical order -->
[identifier1]: https://java.com/en/
[identifier2]: https://developer.mozilla.org/
[identifier3]: https://www.w3.org/Style/CSS/Overview.en.html
[identifier4]: https://www.javascript.com/
[identifier5]: https://www.json.org/json-en.html
[identifier6]: https://javaee.github.io/glassfish/

# Getting Started

To get a local copy up and running follow these steps.

## Prerequisites

You need the following environment to run my project:

- Glassfish Version 6.1.0
- Java SDK 11
- Jakarta EE9

Installed into Intellij

# Usage
![Image of Whiteboard page](https://imgur.com/a/nst7XHu)
![Image of Two Clients on page](https://imgur.com/a/7usSHVa)

# User Guide

**Open Browser is a new client**

http://localhost:8080/whiteboardCollab-1.0-SNAPSHOT/whiteboard.html

You can communicate with other clients on the server using multiple features like shapes, sticky notes , text , images etc.

# Contact

Email: anyanjoarthur@hotmail.com
I can also be reached via [Linkedin](https://www.linkedin.com/in/arthur-anyanjo-031913198/)
