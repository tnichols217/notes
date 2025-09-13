```C
int w, x, y, z;          // i, j,  w,  x,  y,  z
int i = 4; int j = 5;    // 4, 5, 00, 00, 00, 00
{
	int j = 7;           // 4, 7, 00, 00, 00, 00
	i = 6;               // 6, 7, 00, 00, 00, 00
	w = i + j;           // 6, 7, 13, 00, 00, 00
}
x = i + j;               // 6, 5, 13, 11, 00, 00
{
	int i = 8;           // 8, 5, 13, 11, 00, 00
	y = i + j;           // 8, 5, 13, 11, 13, 00
}
z = i + j;               // 6, 5, 13, 11, 13, 11
```
^1

```C
int w, x, y, z;          // i, j, w, x,  y,  z
int i = 3; int j = 4;    // 3, 4, 0, 0, 00, 00
{
	int i = 5;           // 5, 4, 0, 0, 00, 00
	w = i + j;           // 5, 4, 9, 0, 00, 00
}
x = i + j;               // 3, 4, 9, 7, 00, 00
{
	int j = 6;           // 3, 6, 9, 7, 00, 00
	i = 7;               // 7, 6, 9, 7, 00, 00
	y = i + j;           // 7, 6, 9, 7, 13, 00
}
z = i + j;               // 7, 4, 9, 7, 13, 11
```
^2

```python
from typing import Generic, TypeVar, Self

T = TypeVar("T")

def print_level(str: str, level: int = 0) -> None:
    print("    "*level + str)
    return

class CST(Generic[T]):
    def __init__(self, parent: Self | None = None) -> None:
	    """Creates a base CST with no values"""
        self.table: dict[str, T] = {}
        self.parent: Self | None = parent
        self.children: list[CST[T]] = []

    def put(self, id: str, val: T) -> Self:
        """Insert an id into the current table."""
        self.table[id] = val
        return self

    def set(self, id: str, val: T) -> Self | None:
        """Set an already created id to a specific value."""
        env = self
        while env is not None:
            if id in env.table:
                env.table[id] = val
                return env
            env = env.parent
        return None

    def get(self, id: str) -> T | None:
        """Search for nearest definitions of id in currennt and enclosing environments."""
        env = self
        while env is not None:
            if id in env.table:
                return env.table[id]
            env = env.parent
        return None

    def make_child(self) -> Self:
        """Create a child for nested environments"""
        child = self.__class__(self)
        self.children.append(child)
        return child

    def print(self, level: int = 0):
        """Print all entries in the current environment."""
        print_level("Symbol Table:", level)
        for id in self.table:
            print_level(f"{id}: {self.table[id]}", level)
        print_level("--- End of Table ---", level)

    def print_down(self, level: int = 0):
        """Print this environment and all children."""
        self.print(level)
        for child in self.children:
            child.print_down(level + 1)

    def print_up(self) -> None:
        """Print this environment and all parents"""
        self.print()
        if self.parent:
            self.parent.print_up()

```
^3

```
digit -> \d+
expr -> digit { print(digit) }
	| { print("(") } (expr) { print(")" }
	| { print("+") } expr + expr
	| { print("-") } expr - expr
	| { print("*") } expr * expr
	| { print("/") } expr / expr
```
^4

```
expr \--- { print("+") }
     |--- expr \--- { print("-") }
     |         |--- expr \--- digit ---- 9
     |         |         |--- { print(9) }
     |         |--- [-]
     |         |--- expr \--- digit ---- 5
     |                   |--- { print(5) }
     |--- [+]
     |--- expr \--- digit ---- 2
               |--- { print(2) }

-> + - 9 5 2
```
^4a

```
expr \--- { print("-") }
     |--- expr \--- digit ---- 9
     |         |--- { print(9) }
     |--- [-]
     |--- expr \--- { print("*") }
               |--- expr \--- digit ---- 5
               |         |--- { print(5) }
               |--- [*]
               |--- expr \--- digit ---- 2
                         |--- { print(2) }

-> - 9 * 5 2
```
^4b
