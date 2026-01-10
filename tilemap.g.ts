// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Grassy Yards":
            case "level1":return tiles.createTilemap(hex`52000a0000000000000000000000000000000000000000000000060000000004000000000500000000000005000000000000000000000000000000000006000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300000000030005000006000000000005060000000000050000000001010006000300030001010101010000000000000000000000000400000000000000000000000000000005000000030100010001000104000100010600040000040000000000040400000000000600000301000001010101010101000000000001010100000000000000000003000300000000000000000000000000040000010100050000000500010000000001000300050600000000000603000000000003000101000000000000000000000000000000000000000300000000060001010101010000000000000000000000000600010000050600000003000000000000000101010304000000000003010100000001010100000000000000010101000101000000000003010101010000000301000000000000000000000000000500000003010000000404030101040000000005000000050001030000050000010202010100050000000000000003010202020002020101010300010200000000000101000005000000000000000005000003000101010500000006030102020600000000060000000600050101000600010202020202050600000000000000010202020200020700020201010200000101000000000000060000000000000500060000010005000503000005030102020203000000000300000003000300000003010202020202020304000000000001010202020202000200000000000000000202020000000000000300000000000003000301010200030003010100030102020202010100000004000001010101010000010202020202020201030000000301020202020202020000000200000002020202020200060001010101010101010101010101020202010101010202010102020202020202010101010101020202020201010202020202020202020101010101020202020202020202020202020202020202020202010101020202020202020202`, img`
..................................................................................
..................................................22.......22222..................
...............2.2.2.2..2.2......................2..2222222.....222...............
.............22.......2....2...................22..........................22222..
............2...............222........22...222.......222.22......2222....2.......
...........2......22...........2......22222..........2222.22222..22.....22........
........222......222............22...222222.........22222.2..22222..22............
......2.........2222................2222222.......2222222.2........222............
....222....22..2222222......22222..222222222.....22222222...2...222222...222222222
2222222222222222222222222222222222222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile2,myTiles.tile4,myTiles.tile7,myTiles.tile5,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "G1-1":
            case "tile1":return tile1;
            case "AppleSpawn":
            case "tile2":return tile2;
            case "G1-2":
            case "tile4":return tile4;
            case "G1-0":
            case "tile3":return tile3;
            case "G1-3":
            case "tile7":return tile7;
            case "G1-4":
            case "tile5":return tile5;
            case "GoldenApple":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
