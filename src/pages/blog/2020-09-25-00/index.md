---
path: '/blog/000'
date: '2020-12-25'
title: 'building forkbum.dev'
author: 'isabel'
description: 'my journey building this damn website'
---

Building a website can be intimidating as there are usually many factors to consider. For my website, I wanted to be a part of the building journey as much as possible. This is mostly to:

* keep my dev skills alive (I do not code in my day job), 
* demonstrate that I can code, and
* try something new (I have mostly developed Java, .NET, and Vue.js projects in the past)  

#### general anatomy ####
My site is built using Gatsby.js, which is a static site generator. For those unfamiliar with web/app development, this basically means data won't be dynamically loaded when using the site. After a static site is deployed, all the code and data needed for it to function are already there - there is no need for backend functions to fetch data from a data store. 

Static sites may still, however, utilize some data-fetching mechanism to facilitate populating content into the site's pages. The typical choice for this data-fetching mechanism is REST, whose data format can be XML, JSON, plaintext, etc. Depending on how the project is configured, Gatsby.js can use GraphQL for querying site content. GraphQL differs from REST in that the former isn't restricted by the technical structure of the data being sent or received; in programmatic terms, this means functions sending and receiving data via a REST API have a predefined set of parameters becuase they depend on URLs and request types.

Gatsby.js also leverages some tools and features of React.js, including its component system, the webpack pipeline,routing and navigation, etc. For more information on Gatsby.js, visit [their documentation page](https://gatsbyjs.com/docs/).

#### purpose ####
My site is a peek into who I am and what interests me. I have many interests and may speak on things outside of security and even technology on this site. My goal is really just to share information and perspective over a "written" medium, and I hope someone will find value out of them.

#### future plan ####
There is currently a page in my site called "playground." I plan to showcase interactive learning activities (i.e. explaining a techinical concept) on this page. I have no concrete timelines with this, so consider this feature completely TBD.
