Core Types TS

number      1,5.3,-10           All Numbers, no difference b/w
                                integer or floats

string      'Hi',"Hi",`Hi`      All text values

boolean     true,false          truthy or false values

object      {age:30}            any JS Object, more specifically typed
                                (types of Objects) are possible

Array       [1,2,3]             any JS Array, type can be flexible or
                                strict(regarding the element types)

Tuple       [1,2]               added by TS, fixed length and type array

enum        enum {NEW,OLD}      added by TS, automatically enumerated global
                                constant identifiers.

any         *                   any kind of value, no specific type assignment


numbers to tuple - demonstrated in App1.TS
enum - any - demonstrated in App2.TS
unionType- Literal Types - Type Aliases/Custom Types - demonstrated in App3.TS
Functions - Return Type - Func as Types - demonstrated in App4.TS
Functions Types & Callbacks - The "unknown" Type - demonstrated in App5.TS