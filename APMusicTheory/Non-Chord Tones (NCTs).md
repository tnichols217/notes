# Non-Chord Tones
> [!def]
> **Non-Chord Tones**: Notes that are not in the given chord
> 
> 1. They can be used to **embellish**
> 2. Make the melody **easier to sing** (PT)
> 3. Can create dissonance (**tension**) then resolution

| Abbrev. | Name             | Approached by                                  | Left by                            | Picture     |
| ------- | ---------------- | ---------------------------------------------- | ---------------------------------- | ----------- |
| PT      | Passing Tone     | Step                                           | Step in the **same** direction     | / or  \\    |
| NT      | Neighboring Tone | Step                                           | Step in the **opposite** direction | ^ or v      |
| Sus     | Suspension       | Same tone                                      | Step **down**                      | \*\*\\      |
| Ret     | Retardation      | Same tone                                      | Step **up**                        | \_\_/       |
| App     | Appoggiatura     | Leap                                           | Step in the **opposite** direction | /^ or \\v   |
| ET      | Escape Tone      | Step                                           | Leap in the **opposite** direction | ^\\ or v/   |
| NGr     | Neighbor Group   | Step (then skip in the **opposite** direction) | Step in the **same** direction     | ^v or v^    |
| Ant     | Anticipation     | Step or leap                                   | Same tone (or leap)                | \\__ or /** |
| Ped     | Pedal point      | Same tone                                      | Same tone                          | --          |


> [!important]
> If a non-chord tone **resolves to a weaker accentation**, the NCT is called **accented**.
> 
> If not, it is unaccented.

## Neighbor Tones and Passing Tones (NT & PT)
Can be:
- Chromatic (not part of the key)
- Diatonic (part of the key)

## Suspensions and Retardations (Sus & Ret)
> [!def]
> When one note of the chord is suspended, delaying its switch to the next chord
1. Starts with the **preparation**
2. Then it gets **suspended** (or retarded)
	- A note stays on the old chord while the rest move to the new chord
3. Finally, the **resolution**

- They are named by interval of the root to the suspension, if the root is suspended, use the tenor instead
	- Compounds do not matter: do not put Sus 11-10
	- Exception is **Sus 9-8**
- Both are **always** accented
> [!example]
> ```music-abc
> X: 1
> M: 4/4
> L: 1/4A
> K: C
> %%score (T1 T2)
> V: T1 clef=treble
> V: T2 clef=treble
> [V:T1]
> "Prep" [CGC']2 "Sus 6-5" [G,BD']2|"Res"[G,BD']4
> [V:T2]
> [E]2-[E]2|[D]4
> ```
> Starts with a prep, moves into Sus, then ends with the resolution

## Appoggiaturas and Escape tones (App and ET)

- Appoggiatuas are normally accented
- ET are normally unaccented

## Neighbor group (NGr)

- Normally go up first

> [!example]
> ```music-abc
> X: 1
> M: 2/4
> L: 1/4A
> K: C
> %%score (T1 T2)
> V: T1 clef=treble
> V: T2 clef=treble
> [V:T1]
> C'/"NGr"D'//B//C'||C'/"NGr"B//D'//C'||C'/"NGr"[D'B]/C'||
> [V:T2]
> E2||E2||E2||
> ```
> The sixteenth notes are neighbors of the note before, creating a NGr

## Anticipation

> [!def]
> The opposite of a suspension or retardation, where the note moves on to the new chord before the rest of the notes

- Will always be unaccented because it leads to a new chord

> [!example]
> ```music-abc
> X: 1
> M: 4/4
> L: 1/4A
> K: C
> %%score (T1 T2)
> V: T1 clef=treble
> V: T2 clef=treble
> [V:T1]
> [G,BD']4|[CGC']4|
> [V:T2]
> [D]2"Ant"[E]2-|[E]4|
> ```
> The tenor anticipates the next chord before it moves

> [!def]
> color: 20, 125, 0
> **Free anticipation**
> 
> A note anticipates a note in the next chord, but does not actually stay on that note when the chord changes, although it does have to continue to move in the same direction

## Pedal point

> [!def]
> When you keep a note the same through a chord, even if its not part of the chord.

```music-abc
X: 1
M: 4/4
L: 1/4A
K: C
%%score (T1 T2)
V: T1 clef=treble
V: T2 clef=treble
[V:T1]
[EGC']2[DFB]2|[EGC']4
[V:T2]
[C]-4|C4|
```
## NCT Inception

> [!important]
> NCTs can have NCTs inside them, and when this happens, you have to classify the NCT using the big picture, not only the local notes.

```music-abc
X: 1
M: 3/4
L: 1/4
K: Eb
E3| A3| G3||
E=EF| ^FG^G| A
```