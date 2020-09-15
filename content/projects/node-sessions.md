---
title: Node Sessions
description: Me taking a crack at a session-oriented auth library
link: "https://github.com/jschmold/node-sessions"
---

# Background

I wanted to create a system that mimicked the old transient/persistent token-pair systems for a project I was working on. The concept was that you had a transient and a persistent token at any given time. The persistent token would remain for the life of the application, but the transient token would change upon every request to prevent CSRF attack.

This was created to simplify the generation of that transient token, so all that is left for the user to do is to save the transient/persistent token in the database.

I no longer believe this is a good way to authenticate users, as JWT gets the job done far better.

