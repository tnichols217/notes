# Intro

In the current era of ubiquitous computing, we no longer inhabit the physical world as much as we inhabit the digital. Digital spaces made of software and code underwrite more than just our money, law, livelihoods, and lives more than ever before. Yet, for the majority of the population, its operations and underwiring remain a mystery — very much on purpose. This is the "Black Box" of the post-modern world, the secrets running our world that we are legally forbidden from knowing, understanding, or even modifying. Would you feel comfortable knowing that you are not allowed to understand what governs almost all of your daily life? 

This black box of technology may seem like an uncorrelated and extraneous issue as compared to today's use of technology as a whole, but it directly leads to what constitutes to the roots of majority of our issues with technology. The black box strategy removes accountability from providers and provides a layer of plausible deniability in such a way that societal negatives may manifest as a part of it. Imagine a mechanical gear set designed to self-destruct after a specific number of rotations, requiring a replacement of the part? If the casing were transparent, such a predatory design would be immediately obvious; behind an opaque covering the sabotage would be indistinguishable from a natural failure. The result of this structure of development is a world built on fragile systems, protected by "security though obscurity" — the reliance on the fact that since people cannot see inside, it is more difficult to exploit by bad actors, and a series of shortcuts, pushing software to be done as quick as possible without considerations for longevity, the abuse of the consumer as there is no way to verify anything that happens, the consolidation of tech power through the world, and the removal of any user agency over what could be thought of as their own property.

# The causes

Software is in a unique situation as compared to other industries. In mechanical devices, it is simple to physically inspect and verify what actions are happening within a product. It also has a limited scope of involvement, being confined to wherever the device is located. Even in electronic hardware, it is comparably easier to inspect devices for oddities or test them for external interaction. Software exists in a world entirely separate from that of the physical — something that cannot be visually inspected or physically tested for the verification of its purposes. In other fields, the final product may be audited for its use in its final form, the product, but in software, its final form is often inauditable without extreme effort and resource. This creates a unique scenario where the intellectual property of the creation of the device is significantly more valuable that of the product itself. Modern software can contain an inhumanly large amount of source code, only understood through mountains of internal documentation and processes ­— invisible to consumers. Reverse engineering efforts in this case would be impossible to match at the pace of development, which can amount to thousands to millions of lines of code.

This creates a conflict of interest: share the sources, prove your product, and lose the monopoly on your space; or hide the sources, leave your product as a black box, and keep your monopoly. As you can probably expect, in the real world, the majority of companies opt to keep their source code secret in order to maintain an edge over the market. This market edge comes at a significant societal cost. Alternatively, if the code were open, the barrier to entry for new entities in the market would be remarkably low, allowing more competition, making the winner that of the best services and not that of the most secrets. Today, as closed sourced software gains a stronger grip on society, many people no longer have a choice to choose to support or fight against these structures. For example, if you live in most places around the world where WhatsApp, a closed source messaging platform, is the primary mode of communication, you do not have a choice to use alternatives if you need to remain within communication with the rest of society. [The most popular messging apps...] This creates a self-reinforcing loop of strong but hidden software maintaining market lead with a near impossibility of moving all society away except through legislation. Another example is the bedrock that runs all computing devices in the world: Windows and macOS, both closed source software. Closed source operating systems constitute over 75% of use globally on desktops [https://gs.statcounter.com/os-market-share/desktop/worldwide] despite their ultimate importance for all computing. This, yet again, creates a cycle of necessity for people to use these systems with no choice of alternatives if they wish to work a job, use common software, or even use most physical devices.

Most software companies today are moving towards a "SaaS" (software as a service) model, further increasing the reliance on closed sourced software. As compared to the early days of computing, where software can be owned — albeit without access to the source code — modern software often requires a persistent connection to company servers, licenses, and a subscription model to force recurring income for a product that does not necessitate it. By combining the black box of software and the SaaS model, software becomes ever increasingly impossible to inspect and audit as the code you need no longer even runs on your own physical devices. MATLAB, a programming language and tool required for education in a multitude of disciplines, for example requires a subscription model and persistent connection to MATHWORKS' servers to even utilize the language [MATLAB...Licenses]. This structure of building total reliance on singular services further crumbles the reliability of computing as a whole [The Future of the Internet...] while simultaneously building incentives for monopolistic behavior in companies.

# Why would anyone want this

One could argue that since the development of a piece of software was done by a company, they should have the rights to hide it and use it however they'd like. This in theory would allow those that provide the most development to produce the most economic result. If we were to have all software be open, there would be no economic drive to develop and improve tools as there would be a minimized economic output from it. We can see this in things like training AI, which takes insurmountable amounts of data and compute to produce a reasonable result. On the flip side, this also incentivizes incompetence as frequently in software, the first past the post immediately gains a monopoly over the space, making competitors unable to catch up or compete for share. This leads to more stagnation than development once a minimally viable product has been released. In contrast, open software leads to competition in the best possible product and service like Red Hat or SUSE. The software itself remains open while the economic benefit comes from offering expertise, certification, reliability, and support. We will revisit this through case studies later.

This right to keep tools private has even sprouted roots in legislation: DMCA and other IP laws protect such behaviors, banning tampering and audits on final products. This further enforces the building of secrets and black box technologies and even less availability to verify that such code is safe to use at all. In the real world, such can be seen in companies such as John Deere, where significant cash flow is awarded to those who build faulty products, protected by law.

Another argument for allowing black box technologies is the fallacy of security through obscurity (STO), which claims that since the code is hidden, it is harder to exploit and break for nefarious purposes. Although not as frequently believed by many today, it is still a major proponent in inexperienced developers to provide a false sense of security for their products. Banks and airlines still refuse to publish their software for fear of people discovering flaws and exploiting them. In reality, STO ignores the reality that software may be reverse engineered with enough resource and time, which may be thought of as a good thing. However, STO only serves to keep small time hackers out while providing more of a foothold to organized crime or nation state backed hacks, which typically will have significantly larger effects and deprioritizes actual security.

One of the final major causes for the push for these ideas is the concept of interoperability and the advancement of user experience. By being able to control all code being used while keeping it hidden, you are able to create cohesive experiences across all products while maintaining stability. Additionally, dealing with publicized interoperability protocols requires additional effort and investment to properly function while not guaranteeing enough interoperability to provide a powerful user experience. This structure creates forced dependencies, removing choice from the consumer. Typically referred to as a "walled garden", users must remain within the walls to gain the best experience possible. This furthers vendor lock in and builds a monopoly over users that can no longer have the freedom to choose their own devices. While open standards do typically involve more involvement, open standards fundamentally do not have limitations that closed standards can express as a reason for needing such code to be private. Stability in open standards is also an issue that only poses itself with poor code, something that will surface whether you use open or closed standards. The supposed stability of a walled garden is often an illusion maintained by restricting user choice to "approved" components; true stability comes from rigorous software, backed by public peer-review, something closed software is unable to facilitate.

# Case studies and effects

## Security through obscurity

In 2017, the WannaCry ransomware directly caused a global cybersecurity crisis, crippling over 200,000 Windows systems globaly without warning. This is a direct byproduct of the black box development model and its overreliance on STO. Due to the fact that the Windows source code is closed source and proprietary, the public is effectively barred from researching such a flaw in their SMB (Server Message Block) protocol, the cause of such an outage. This lack of transparency directly allowed the NSA (National Security Agency) to both identify the flaw prior and hoard the flaw without reporting it to Microsoft (the sole developer of Windows), utilizing it as a weapon rather than for the good and development of the software. This causes a double-blind situation where both the company did not know of its existence prior to its exploitation, and outside companies or individuals are completely blind as to where the issue exists and are unable to help [WannaCry], [Click Here To...].

When the vulnerability was leaked by the NSA, bad actors quickly utilized it and caused the global crisis known as WannaCry. While proponents of this development cycle would claim publicising their code would lead to a "roadmap for hackers" to exploit their code, real world evidence proves otherwise. Kuan in 2001 demonstrates that bugs within open source code are fixed roughly twice as fast as compared to their closed source counterparts on median time-to-fix [Kuan]. Additionally, Kuan shows that the severity of bugs within open source software are statistically lower than that of closed source software. He additionally cites that the volume of contributers prevents the accumulation of old, bad, or legacy code as code is frequently reviewed by various groups of people, an issue that plagues black box systems that have no incentives to improve what seemingly continues to work.

## First past the post monopolism

The beginning of Microsoft Office is an example of how black box technologies promote monopolism. From its inception in the 1990s, Microsoft Office, being the first to provide a functional office suite of tools, it has quickly gained ground in becoming the de-facto standard for all office needs. Its proprietary file formats, namely `.doc(x)` and `.xls(x)` were completely opaque to all other software, creating a reliance on the Microsoft Office suite as a result. This effectively bars competitors from creating better alternatives as all prior documents would be locked-in to the office suite with no path to transfer to a better product. Even today, where we have viable alternative and better open software than Microsoft Office, the public is unable to move due to the high amount of energy required to change the status quo.

On top of the high level overview of Microsoft Word, this story additionally includes "open washing", where Microsoft saw the concerns and decided to "open source" their formats in order to quell the complaints against vendor lock in. The original document formats were intentionally designed to be hard to reverse engineer and required multiple years of effort in order to read them. Leaked documents, known as the "Halloween documents" show this agressive stance on open standards [The Halloween Documents], [Raymond]. Once Microsoft released their open standards for their formats however, they were released as multiple thousand page documents [ECMA-376] explaining their format, making it essentially impossible for competitors to achieve one-to-one parity with first party software. Competing formats — such as the open document format — however, with similar features did not have such long specifications, proving that such a complicated format need not exist in that manner [Why OOXML is not...].

## Right to repair and planned Obsolescence

(John Deere)

If Microsoft Office represents the enclosure of the digital document, John Deere represents the enclosure of a physical machine. Today, farming equipment is more than just a mechanical device, utilizing software technology to advance farming through access to the internet, automatic crop sampling, automation, and GPS amongst other features. Without these software tools, it becomes economically infeasible to farm in the modern age, making it a necessity. This enforces a cycle where John Deere profits more from the failiure of their own products, possibly leading to planned obsolescence.

John Deere is a leading producer of farming equipment in the United States, maintaining a monopoly on farming equipment nationwide. While prior, farmers were extremely handy to repair their own tools in order to maintain maximal production in what may be remote areas, John Deere restricts the ability of farmers to do so. Modern tractors utilize digital handshakes between physical parts to ensure only approved parts may be used in the tractor, governed by the tractors ECU (Engine Control Unit) [Your Tractor Knows You Fixed It...]. This effectively makes tractors inoperable until a certified John Deere customer service advisor fixes the part themselves [Is there a "Right to Repair"]. In the time-sensitive world of farming, where if you miss the window for harvest amongst other time-sensitive tasks, you may lose significant output for the year, forcing a certified repair may incur significant costs on the farmer both in repairs and in the reduced output. On top of requiring approved installers to repair equipment, subscriptions are required for the tools to function, creating a "tethered appliance", in a space where subscriptions are not required for tools to physically work. This begs the question of "What is ownership?" if you physically own a tractor but are unable to use it for its intended purpose due to exploitative software.

## Vendor lock in and Creative Jail

Much like Microsoft Office's monopoly on office document formats, until recently, Adobe has held a monopoly on almost all creative work and formats. While initially, Adobe offered their creative suite including Illustrator and Photoshop as single purchases, as their market share grew, they switched to a SaaS model, requiring recurring payments for software that works entirely locally [Adobe's Creative Cloud...]. Similar to that of Microsoft Office, their file formats are entirely black boxes, purposely made complex, updated yearly, and next to impossible to reverse engineer. This creates a situation similar to that of John Deere, where the software you use is "tethered" to Adobe and inoperable without their subscription model. In combination with their monopoly over the space, they have direct control over the costs of their products and have been exploiting artists globally for many years [Using older Creative Cloud apps?], [FTC Takes Action Against Adobe...].

## Inauditability

In 2015, the "Dieselgate" scandal revealed that Volkswagen had systematically installed "defeat devices" in over 11 million diesel vehicles to circumvent environmental emission regulations. Since the ECU (Engine Control Unit) was a proprietary black box and the sole reporter of emission numbers, Volkswagen was able to engineer a program that was aware to when the car was being tested, subsequently lowering reported emission numbers. This resulted in the cars during actual use emit up to 40 times the legal limit of the emission standards for over 6 years [Impact of the Volkswagen emissions...], [How They Did It].

The closed source nature of the ECU provided a dual protection for this fraud. It both prevented external validators from seeing the correct numbers for emissions, while providing plausible deniability for those within Volkswagen outside of the ECU team. During the suit, the CEO claims that even he was unaware that this was happening. This ultimately lead to roughly 60 premature deaths in the US alone due to rising emissions [Impact of the Volkswagen emissions...]. Had all code running on the car be open, test code and emission falsification code would swiftly be identified and fixed as soon as it was implemented, additionally improving trust and transparency within the company.

## Systemic Fragility

In 2024, CrowdStrike released a faulty update to their security software, pushed to over 8.5 million Windows devices globally [Technical Details: Falcon Content...]. Since their software runs as part of the Windows kernel — the most essential and priviledged component of the operating system — a logic error in their software resulted in those 8.5 million devices being completely inoperable, trapped on a "Blue Screen of Death" (BSOD) boot loop  [Recent CrowdStrike Outage...]. Due to the fact that the update was pushed automatically and with no external validation from operating system maintainers, this singular update was unable to be intercepted by system maintainers worldwide, additionally circumventing their ability to fix the devices. This triggered a domino effect worldwide, grounding over 5000 flights, paralyzing hospitals from accessing patient records, and disrupting global banking systems.

While this does not inherently come as a result of the code being closed source, it highlights how fragile hidden and black box systems can be without proper auditing. Locking in and preventing customers from being able to utilize modularly integrated software of similar purposed breeds a monoculture that can be taken down at a singular point of failure, similar to that of the corn or potato market. Alternatively, open collaboration breeds stronger interoperability with accountability, adopting open secure standards such as eBPF [Recent CrowdStrike Outage...]. Black box design makes such structures impossible to validate or check until something catastrophic happens.

## Economies built on experience

In comparison, Red Hat — a company based on offering the assurance of quality and support — rather than products directly proves the possibility of writing open software while maintaining an economic output. Red Hat primarily helps develop the open source Linux kernel and maintains a distro or operating system called RHEL (Red Hat Enterprise Linux), which is used on 100% of the world's largest super computers. Their entire business model relies on being transparent with customers and not locking them in to their own services. This business model proves that it is possible to sell transparent and reliable open software as compared to closed software with an illusion of security [Giving it Away...]. Additionally, this business model incentivizes the company to only ever better their own products, as the world is watching, as compared to hiding any issues.

While Adobe and Microsoft create traps where users are unable to leave and dependent on the company permanently, open source economies create experts in the fields, fostering a workforce of understanding and trust rather than that of secrecy.

## Creative freedom

As compared to Adobe's black box software, trapping students and the industry into their own proprietary ecosystems, Blender offers a stark comparison and contrast in both philosophy performance. Blender is a professional grade, fully free and open source 3D creation software utilized by multiple hollywood studios, NASA, Ubisoft, and others today [How Open Source is...]. In 2002, Blender was still primarily owned by a singular company, until the "Free Blender" campaign was executed by its community. They community successfully bought Blender from the company for 100,000 Euro within 7 weeks of the movement beginning [History]. All the Blender source code is still open source and GPL licenced today, preventing it from ever becoming closed source. Blender has significantly impacted the 3D art community since then, democratizing the entryway to the creation of 3D art, removing the reliance on paid software alternative — like Autodesk Maya at 2000 dollars per year — in order to even learn the skill. Blender continues to push the industry forward today, typically being the first in the field to introduce new features such as realtime rendering [Blender’s 25th birthday!].

## Open Critical Tools

While proprietary black boxes such as Windows, MATLAB, those of John Deere or Adobe dominate markets through business practices discussed prior, the foundation of critical infrastructure is not built upon these roots. Linux, Python and OpenSSL are three examples of the bedrock of modern computing that are all completely open.

Unlike the issues described in CrowdStrike or that of WannaCry, Linux offers an alternative to the dominant share of Windows throughout the world. Linux is a GPL licensed open source kernel for use in open operating systems. Mentioned prior, RHEL is a Linux distribution. Since no one party owns Linux, it will forever stay existing as an entity serving the public. Majority of web servers, super computers, and other critical hardware run Linux today [Top 500].

Within recent years, Python — an open source interpreted programming language — has become the de-factor standard for data processing, AI training, and programming education worldwide. Although it has not been fully adopted globally year, it offers a powerful direct alternative to the closed source systems of MATLAB and other closed sourced programming languages. Without paywalls, tethering, subscription services, or a black box design, anyone is free to use and build upon Python. This ability has led to its significant growth in its respective areas, capturing markets where industry secrets cannot be solely managed by an external company [PICK UP PYTHON].

Lastly, both Signal and OpenSSL have been at the forefront of secure technologies of today. Both being fully open source security tools, prior arguments may question their security due to the lack of STO. In practice, both of these tools are utilized by the most secure systems around the world due to their severe public hardening. As compared to black box implementations of security software, which have no verifiable way of proving security, both Signal and OpenSSL offer democratization of security for the masses [A Formal Security Analysis].

# The history of this war

Originally, when computers were first being used in MIT, software was treated as tools to be shared freely amongst all those that needed it. As soon as computing exploded in popularity and became a commercial activity, companies swiftly realized that it was possible to generate unlimited profit by blocking others from using software in the way they pioneered. This led to fights over IP (Intellectual Property) and eventually the introduction of DMCA (Digital Millennium Copyright Act), making it illegal to disassemble other software. From the 1970s to the 80s, software shifted from free tools for all to use to the complete opposite: tools to prevent others from innovating and a way to generate profit. Since then, corporate control over software has only grown, leading to tethered software and SaaS mentioned prior [A genealogy of hacking]. This fight was solidified during Bill Gates' "Open Letter to Hobbyists" where he argued that software should be paid for [An Open Letter To Hobbyists].

In 1980, Richard Stallman, a programmer at MIT wanted to fix his broken Xerox printer, but was unable to due to the fact that the software running on it was considered IP and a trade secret [Free as in Freedom]. He was one of the first people in history to realize realize without full understanding and control of the software for physical devices, are the devices truly owned by you? Richard Stallman later moved on to creating the FSF (Free Software Foundation), a group dedicated to keeping software free for all, developing free and open source tools for everyone to use and the creators and major proponent to the Four Essential Freedoms, to run, study, redistribute, and improve the code [What is Free Software?]. They additionally created and continually protect the most powerful tool for free software: The General Public License (GPL).

# A solution: Licensing

In the age of fighting free software with legislation and copyrights, the FSF developed the ultimate counter: the copyleft license. In contrast to typical copyright licenses, which aim to restrict the user and prevent them from exercising the four essential freedoms outlined by the FSF, the copyleft license prevents non-open use of the software, protecting the user. The GPL promises the four essential freedoms and the right to use the software as long as you pass those freedoms on to other people in however you use, modify, or share the software. GPL prevents all code licensed with it to be hidden or restricted in any of those manners, mandating that a copy of the code must be provided upon request for any software utilizing GPL licenced code, ensuring that the code will remain public forever along with all of its derivative works — any future software that uses any piece of GPL licensed software [What is Free Software?].

The zeroth freedom is that of the freedom to use the program for any purpose, preventing issues like subscriptions in Adobe's case, or vendor Lock-in in Microsoft's case. Due to the ability to change and use the code however you like, it becomes impossible to lock users in to your version of software.

The first freedom is the freedom to study how and change the code to how you see fit. This directly contrasts Volkswagen's and John Deere's use of code to restrict and lie. GPL prevents secrecy in code, making Volkswagen's hack impossible to maneuver, while allowing full right to modify the code, preventing any locks you may place on code like in John Deere's case.

The second freedom is the freedom to redistribute copies of the software. This prevents the sale of the software itself for monetary profit, as were you to sell a copy, it may be infinitely duplicated and redistributed for free, preventing a market based on selling software and one based on good service, like in Red Hat's case.

The third and final freefom is the freedom to improve and release new code. This directly contracts the scenarios listed in CrowdStrike or WannaCry, as consumers and the public would be directly able to modify and fix the software to how they see fit, and to audit and notice issues on the code before utilizing it on their own devices.

In the third edition of the GPL, GPLv3, the FSF additionally added additional protections against utilizing open source code, but ultimately locking the hardware utilizing code, rendering the access and changing of code on physical devices impossible. This is a direct response to the efforts of TiVo and John Deere.

Although there are other open licenses such as the MIT or Apache licenses, they do not mandate that the code must forever maintain the four essential freedoms [Understanding open source...]. MIT for example allows use of the code in whatever way you deem fit, including modifying it, hiding it, then reaping monetary profit from it. This directly lines up with the EEE (Embrace, Extend, Extinguish) concept from Microsoft, where open code can be stolen and made unusable for those not going through themselves [U.S. V. Microsoft].

# How we can fix this forever

From the security issues to economic cornering of black box software, history has proven that software is no longer a luxury, but essential infrastructure of modern life. Software dictates and governs our lives throughout any daily activity, and such necessities of life should be protected and guarded against exploitation. Although procedures exist to create open software for all to use, it primarily exists in enthusiast groups who are educated on the topic and care enough to take the fight and war upon their own efforts. We need to move forward as a society and treat software as a public good that should be shared and built upon collectively. Following are proposals to fight for in order to build a more open world:

Public funded projects shall produce public code

Publically funded projects of today primarily go toward companies that can keep the IP and thus force a strong reliance of public infrastructure upon themselves, despite being paid for by the public. Since the public paid for the code, the public shall forever own the code. All publically funded code shall remain public forever and released under a GPL or similar license. [Public Money? Public Code!].

The public shall have the right to repair, audit, and modify owned hardware along with their corresponding software

In essential services of humanity, such as farming, there exists no reason why a singluar corporation shall control and dictate how physical devices that are owned by individuals shall operate. Neither shall any physical device owned by anyone in any circumstance, including mobile phones or computers, be dictated by any other how it shall be used. [We Need Right To Repair].

Public education shall be built upon generalizable skills over proprietary software training

Education has no right being bought out by corporations who lock our future workforce in to specific software with high reliance upon the company. Education shall teach generalized skill rather than provide tutorials on privatized software, guaranteeing a future workforce of people who understand concepts and the inner workings of the assistance of software. Ideally, software utilized in an educational environment shall be open sourced and GPL compatible to ensure students' freedom to practice, learn, and use such software in any context. [The Wealth of Networks].

Black box software is a mechanism developed by the free market to extract monetary value from what should be a public service in software in majority of cases. Though multiple instances in history, we have learned the issues of secrecy within the essential workings of the modern age and its direct alternative and fix. By embracing a future of free and open software, we are building up the next generation to be the innovators and collaborators of the future. The glass box is the only alternative to the black box for a sustainable future.

# Sources

Open Source software as consumer integration into production
https://papers.ssrn.com/sol3/Delivery.cfm?abstractid=259648

The Cathedral and the Bazaar
https://lists.gnu.org/archive/html/groff/2021-11/pdfRt8tRop5yy.pdf

The halloween documents
http://www.catb.org/~esr/halloween/

ECMA-376
https://ecma-international.org/publications-and-standards/standards/ecma-376/

Why OOXML is not...
https://blog.documentfoundation.org/blog/2026/02/06/why-ooxml-is-not-a-standard-format-for-office-documents/

WannaCry, Cybersecurity and Health Information Technology:
A Time to Act
https://link.springer.com/content/pdf/10.1007/s10916-017-0752-1.pdf

Click Here To Kill Everybody
https://www.jstor.org/stable/27027764?seq=1

MATLAB Administer Concurrent and Network Named User Licenses
https://www.mathworks.com/help/install/administer-network-licenses.html

The Future of the Internet and How to Stop It
https://dash.harvard.edu/entities/publication/73120378-938a-6bd4-e053-0100007fdf3b

The most popular messging apps in the world
https://sinch.com/blog/most-popular-messaging-apps-by-country/

Is there a "Right to Repair"?
https://blog.freshfields.us/post/102jueb/is-there-a-right-to-repair-inside-the-ftcs-monopoly-suit-against-john-deere

Your Tractor Knows You Fixed It, and It’s Not Happy
https://danielbmarkham.com/the-new-news/the-review-2026-02-05#your-tractor-knows-you-fixed-it-and-its-not-happy

Adobe's Creative Cloud: A Masterclass in SaaS Pricing Transformation
https://www.getmonetizely.com/articles/adobes-creative-cloud-a-masterclass-in-saas-pricing-transformation

Using older Creative Cloud apps? Adobe warns you might get sued …
https://9to5mac.com/2019/05/14/older-creative-cloud-apps/

FTC Takes Action Against Adobe and Executives for Hiding Fees, Preventing Consumers from Easily Cancelling Software Subscriptions
https://www.ftc.gov/news-events/news/press-releases/2024/06/ftc-takes-action-against-adobe-executives-hiding-fees-preventing-consumers-easily-cancelling

How They Did It: An Analysis of Emission Defeat Devices in Modern Automobiles
https://ieeexplore.ieee.org/document/7958580

Impact of the Volkswagen emissions control defeat device on US public health
https://iopscience.iop.org/article/10.1088/1748-9326/10/11/114005

Technical Details: Falcon Content Update for Windows Hosts
https://www.crowdstrike.com/en-us/blog/falcon-update-for-windows-hosts-technical-details/

Recent CrowdStrike Outage Emphasizes the Need for eBPF-Based Sensors
https://www.oligo.security/blog/recent-crowdstrike-outage-emphasizes-the-need-for-ebpf-based-sensors

Giving it Away: How Red Hat Software Stumbled Across a New Economic Model and Helped Improve an Industry
https://quod.lib.umich.edu/cgi/t/text/idx/j/jep/3336451.0004.304/--giving-it-away-how-red-hat-software-stumbled-across-a-new?rgn=main;view=fulltext

How Open Source is Changing the Face of Software Development
https://medium.com/@devika.menon09/how-open-source-is-changing-the-face-of-software-development-f1e914efbb25

History
https://www.blender.org/about/history/

Blender’s 25th birthday!
https://www.blender.org/press/blenders-25th-birthday/

Top 500: Operating System Family / Linux
https://www.top500.org/statistics/details/osfam/1/

PICK UP PYTHON
https://www.nature.com/articles/518125a.pdf

A Formal Security Analysis of the Signal Messaging Protocol
https://eprint.iacr.org/2016/1013.pdf

A genealogy of hacking
https://journals.sagepub.com/doi/10.1177/1354856516640710

Free as in Freedom (2.0): Richard Stallman and the Free Software Revolution
https://sagitter.fedorapeople.org/faif-2.0.pdf

An Open Letter To Hobbyists
https://web.archive.org/web/20120323162213/http://startup.nmnaturalhistory.org/gallery/notesViewer.php?ii=76_2&p=3

What is Free Software?
https://www.gnu.org/philosophy/free-sw.en.html#four-freedoms

U.S. V. Microsoft: Court's Findings Of Fact
https://www.justice.gov/atr/us-v-microsoft-courts-findings-fact

Understanding open source and free software licensing
https://archive.org/details/understandingope0000stla

We Need Right To Repair
https://www.repair.org/

The Wealth of Networks: How Social Production Transforms Markets and Freedom 
https://www.jstor.org/stable/j.ctt1njknw

Public Money? Public Code!
https://fsfe.org/activities/publiccode/index.en.html

Free Software, Free Society
https://bin.terren.us/pub/doc/fsfs/fsfs3-hardcover.pdf