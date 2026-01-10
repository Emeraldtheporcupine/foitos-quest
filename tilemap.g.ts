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

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Grassy Yards":
            case "level1":return tiles.createTilemap(hex`38000a000000000000000000000000000000000000000000000006000000000400000000050000000000000500000000000000000000000000000000000000000000000000000000000000000000000000000300000000030005000006000000000005060000000000050000000000000000000000000000000000000000050000000301000100010001040001000106000400000400000000000404000000000006000000000000000000000000000000000000000004000001010005000000050001000000000100030005060000000000060300000000000300000000000000000000000000000000000000000600010000050600000003000000000000000101010304000000000003010100000001010000000000000000000000000000000005000000030100000004040301010400000000050000000500010300000500000102020101000500000000000000000000000000000500000300010101050000000603010202060000000006000000060005010100060001020202020205060000000000000000000000000500060000010005000503000005030102020203000000000300000003000300000003010202020202020304000000000000000000000000030003010102000300030101000301020202020101000000040000010101010100000102020202020202010300000000000000000000000101010102020201010101020201010202020202020201010101010102020202020101020202020202020202010101000000000000000000`, img`
........................................................
........................................................
...............2.2.2.2..2.2.............................
.............22.......2....2............................
............2...............222........22...22..........
...........2......22...........2......22222.............
........222......222............22...222222.............
......2.........2222................2222222.............
....222....22..2222222......22222..222222222............
22222222222222222222222222222222222222222222222.........
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile2,myTiles.tile4,myTiles.tile7,myTiles.tile5], TileScale.Sixteen);
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
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
