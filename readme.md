# Accurate Type

[简体中文](./readme-zh.md) | **English**

The *Accurate Type* is a collection of TypeScript type declare, which can make your programming more accurate and easir.

This project has not only various simple types but also many generic type expressions like counter. The wide type world is waiting for your exploration!

## All Utilities

### base: 80

`base`: 21

1. type `SigNumber`
2. function `toTypeNameObj`
3. type `WideNum`
4. type `WideNumType`
5. const `WIDE_NUM_TYPE`
6. function `isWideNum`
7. type `ArrayAccur`
8. type `Tostrable`
9. type `TostrableType`
10. const `TOSTRABLE_TYPE`
11. function `isTostrable`
12. type `NumOfStr`
13. function `str2num`
14. type `BoolOfNum`
15. function `num2bool`
16. type `CnvedNum`
17. function `cnvNum`
18. type `NumOfBool`
19. function `bool2num`
20. type `BoolOfTostrable`
21. function `tostrable2bool`

`bool`: 20

1. type `Not`
2. function `not`
3. type `And`
4. type `TypeAnd`
5. function `and`
6. type `Or`
7. type `TypeOr`
8. function `or`
9. type `Nand`
10. type `TypeNand`
11. function `nand`
12. type `Nor`
13. type `TypeNor`
14. function `nor`
15. type `Xor`
16. type `TypeXor`
17. function `xor`
18. type `Xnor`
19. type `TypeXnor`
20. function `xnor`

`is`: 24

1. type `IsType`
2. type `IsWideNum`
3. type `IsWideWideNum`
4. type `IsLtdWideNum`
5. type `IsBoolean`
6. type `IsWideBoolean`
7. type `IsLtdBoolean`
8. type `IsString`
9. type `IsWideString`
10. type `IsLtdString`
11. type `IsArray`
12. type `IsWideArray`
13. type `IsLongArray`
14. type `IsTostrable`
15. type `IsWideTostrable`
16. type `IsLtdTostrable`
17. type `IsFunction`
18. type `IsLtdFunction`
19. type `IsWideFunction`
20. type `IsObject`
21. type `IsLtdObject`
22. type `IsWideObject`
23. type `IsArrayOfLtd`
24. type `IsLtd`

`type-name`: 15

1. interface `TypeMapJS`
2. type `TypeNameJS`
3. const `TYPE_MAP`
4. function `str2type`
5. type `TypeOfJS`
6. type `TypeNameObjJS`
7. type `IsTypeNameJS`
8. function `isTypeNameJS`
9. interface `TypeMap`
10. type `TypeName`
11. type `TypeOf`
12. type `NameOfType`
13. type `TypeNameObj`
14. type `IsTypeName`
15. function `isTypeName`

### snt: 35

`app`: 8

1. type `LenOfStr`
2. function `strlen`
3. type `LenOfArr`
4. function `arrlen`
5. type `Repeated`
6. function `repeat`
7. type `Leading0Filled`
8. function `fillLeading0`

`xcr`: 7

1. type `SntXcrUns`
2. type `SntXcr`
3. type `SntXcrNum`
4. type `Increase`
5. function `increase`
6. type `Decrease`
7. function `decrease`

`cmp`: 13

1. type `SntCmpUns`
2. type `SntCmp`
3. type `SntCmpNum`
4. type `IsLess`
5. function `isLess`
6. type `IsNotless`
7. function `isNotless`
8. type `IsGreater`
9. function `isGreater`
10. type `IsNotgreater`
11. function `isNotgreater`
12. type `IsEqual`
13. function `isEqual`

`opn`: 7

1. type `SntAosUns`
2. type `SntAos`
3. type `SntAosNum`
4. type `Added`
5. function `add`
6. type `Subed`
7. function `sub`

### sprec: 18

1. type `Spaceless`
2. function `removeSpace`
3. type `Leading0less`
4. function `removeLeading0`
5. type `StringReved`
6. function `revString`
7. type `Replaced`
8. function `replace`
9. type `PostAligned`
10. function `postAlign`
11. type `PreAligned`
12. function `preAlign`
13. type `BothPreAligned`
14. type `BothPostAligned`
15. type `Splited`
16. function `split`
17. type `Joined`
18. function `join`
