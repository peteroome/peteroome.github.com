---
title: A CTO who builds again
subtitle: After 8 years in product, AI tools let me build again — and do everything else better.
series: building-from-the-inside
---

Last month I built an internal tool that uses LLMs to map vehicle specifications to parts catalogue codes. It takes a vehicle registration, runs it through a few layers of logic, and works out which variant of a brake pad or oil filter fits. Our automotive domain expert does this manually - it's the gold standard that we hold the automation that we build to.

But, I was curious if an LLM could speed up the process, while maintaining accuracy. So I gave it a go over a weekend. It's rough, but it works well enough that we could some of it daily, confirming and correcting mappings that might take months to get through by hand. Each confirmed mapping makes the system a bit better at the next one.

The thing is, I built it using AI tools. I couldn't have built it from scratch anymore.

---

I was a software engineer for twelve years. Started at a digital agency in Norwich, spent a decade building things. I was good at it — not the best in the room, but I understood systems well enough to make sound decisions under pressure.

Then I moved into product. Eight years of it. Wonderbly, Vinterior, Cazoo. By the time I co-founded Carpata as CTO, the muscle memory of writing code was gone. I could still talk about architecture, debate trade-offs, review technical proposals. But I couldn't sit down and build the thing. One of my first moves at Carpata was hiring a lead engineer, and part of the reason was that I didn't trust myself to write the code that mattered.

---

There's an obvious question here: should a startup CTO be coding at all?

It depends. My context is a team of five, onboarding our first paying customers and finding product market fit. On any given day I'm hiring, aligning the team, talking to clients, managing IT, reviewing commercial priorities and updating our roadmap. Code is one part of a full day. The difference is that it's now a part at all.

Before AI tools, picking up a technical task meant rebuilding the context in my head first. The codebase, the data model, the edge cases. That could take hours, and in a day full of meetings and interruptions it was rarely worth starting. So I didn't.

What changed is where the context lives. I keep everything in local markdown files - product decisions, technical context, domain knowledge, customer feedback. When I want to work on something technical, I prime Claude Code with the relevant files and we pick up where we left off. The context is in the documents, not in my head.

That shift matters to me more than the coding part.

I'm autistic. Context-switching has always been hard for me. If someone interrupted me while I was deep in a problem I'd get genuinely frustrated. Not because the interruption wasn't valid, but because the mental model I'd spent an hour building had just collapsed, and I'd have to rebuild it from scratch.

Now that model lives in files. I can have a side conversation, step away for a call, deal with a hiring issue, and come back to the technical work without losing the thread. Claude picks up the context. I don't have to hold it all in my head anymore.

The flip side is that I can now be hyper-focused for longer (which has pros and cons), and on multiple things at once. On a good day I'll have two or three instances of Claude Code running — one building a proof of concept for a new feature, another synthesising customer feedback from the last week's Granola transcripts, another running data analysis on product usage. The only thing holding me back is a MacBook with 8GB of RAM that wasn't designed for this.

---

AI tools changed what's possible for me.

I started with Cursor, moved to Claude Code, and the bottleneck shifted. The frameworks I didn't know, the syntax I'd forgotten, the library quirks I'd never learned — none of that mattered anymore. What matters is understanding customer problems, having a team of experts to figure out the right thing to build and knowing what good looks like. Twenty years of building things had given me that, even if eight years of not building things had taken away the ability to express it in code.

The barriers to trying something have disappeared, it's now easier than ever for someone to test an idea and to validate if it solves a problem.

My lead engineer is a much better engineer than I ever will be. I still lean on him and my team for architectural direction and feedback generally. But the gap between understanding a problem and being able to ship a working solution has got a lot smaller. For a CTO at a startup with five people, that matters.

---

Coding is actually the smaller part of how these tools have changed my work. My setup right now:

**Granola** — captures meeting notes automatically and syncs them into Obsidian. Every client call, candidate interview, team standup becomes searchable context I can feed into other tools. Six months of meeting notes and conversations compound in ways I didn't anticipate.

**Obsidian** — my product brain. Every customer conversation, technical decision, product hypothesis, and domain insight lives here in markdown. It's what makes everything else work. When I prime Claude Code with a folder of notes, it has the same context I do.

**Notion** — shared documentation and our kanban. Where the team aligns on what we're building and why.

**Claude Code** — for building features, debugging, exploring technical approaches, drafting technical documents. But also for product strategy, structuring hiring briefs, analysing customer data. It's my default thinking partner for nearly everything.

The pattern is the same whether I'm writing code, preparing for an investor update, working through a hiring pipeline, or pulling themes out of customer conversations. I think in problems and context. The tools do the rest.

I'll write more about the setup and how these connect in practice — there's a whole post in that. The short version is that the tools reward experience. The more you know about what you're trying to build, the better the output. Twenty years of building things wasn't wasted by eight years of not building them. It was compounding.

---

I know some people would call this vibe coding. I'm going to write about why that term needs to go. But that's for next time.

For now: I'm a CTO who builds again. Not the way I used to. But in a way that allows me to contribute to our engineering while doing everything else a CTO does.
