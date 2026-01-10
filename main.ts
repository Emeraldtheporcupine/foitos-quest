controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Character.vy == 0) {
        Character.vy = -100
    }
})
function SpawnStuff () {
    for (let AppleSpawn of tiles.getTilesByType(assets.tile`AppleSpawn`)) {
        AppleSprite = sprites.create(assets.image`Apple`, SpriteKind.Food)
        tiles.placeOnTile(AppleSprite, AppleSpawn)
        AppleSprite.ay = 300
        AppleSprite.x += randint(0, -8)
        AppleSprite2 = sprites.create(assets.image`Apple`, SpriteKind.Food)
        tiles.placeOnTile(AppleSprite2, AppleSpawn)
        AppleSprite2.ay = 300
        AppleSprite2.x += randint(0, 7)
        tiles.setTileAt(AppleSpawn, assets.tile`G1-2`)
    }
}
function SetupAnim () {
    characterAnimations.loopFrames(
    Character,
    assets.animation`IdleR`,
    200,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    Character,
    assets.animation`IdleL`,
    200,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    Character,
    assets.animation`WalkR`,
    100,
    characterAnimations.rule(Predicate.Moving, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    Character,
    assets.animation`WalkL`,
    100,
    characterAnimations.rule(Predicate.Moving, Predicate.FacingLeft)
    )
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.clearCharacterState(Character)
    State = "Roll"
    Character.vx = Direction * 150
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Food, function (sprite, otherSprite) {
    sprite.vy = -25
    sprite.x += -1
    otherSprite.x += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
    music.play(music.createSoundEffect(WaveShape.Noise, 975, 971, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
let AppleSprite2: Sprite = null
let AppleSprite: Sprite = null
let State = ""
let Direction = 0
let Character: Sprite = null
scene.setBackgroundColor(8)
Character = sprites.create(assets.image`Character`, SpriteKind.Player)
characterAnimations.setCharacterState(Character, characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight))
scene.cameraFollowSprite(Character)
Character.ay = 300
SetupAnim()
tiles.setCurrentTilemap(tilemap`Grassy Yards`)
tiles.placeOnTile(Character, tiles.getTileLocation(0, 8))
music.play(music.createSong(assets.song`Grassy Yards`), music.PlaybackMode.LoopingInBackground)
Direction = 1
let Cutscene = false
State = "Idle"
SpawnStuff()
game.onUpdate(function () {
    if (!(State == "Rolling") || !(Cutscene == true)) {
        if (controller.right.isPressed()) {
            Character.vx += 2
        } else if (controller.left.isPressed()) {
            Character.vx += -2
        } else {
            Character.vx += Character.vx * -0.1
        }
    } else {
        Character.vx += Character.vx * -0.1
    }
    if (Character.vx > 65) {
        Character.vx = 65
    } else if (Character.vx < -65) {
        Character.vx = -65
    }
})
game.onUpdate(function () {
    if (Character.vx < 5 && Character.vx > -5 && State == "Rolling") {
        animation.stopAnimation(animation.AnimationTypes.All, Character)
        State = "Idle"
        characterAnimations.clearCharacterState(Character)
    } else if (State == "Roll") {
        characterAnimations.clearCharacterState(Character)
        State = "Rolling"
        if (Direction == 1) {
            animation.runImageAnimation(
            Character,
            assets.animation`RollR`,
            75,
            true
            )
        } else if (Direction == -1) {
            animation.runImageAnimation(
            Character,
            assets.animation`RollL`,
            75,
            true
            )
        }
    } else if (State == "Rolling") {
    	
    } else {
        if (Character.vx > 5) {
            State = "Walk"
            characterAnimations.setCharacterState(Character, characterAnimations.rule(Predicate.Moving, Predicate.FacingRight))
            Direction = 1
        } else if (Character.vx < -5) {
            State = "Walk"
            characterAnimations.setCharacterState(Character, characterAnimations.rule(Predicate.Moving, Predicate.FacingLeft))
            Direction = -1
        } else if (Character.vy != 0) {
            if (Direction == 1) {
                State = "Jump"
                characterAnimations.setCharacterState(Character, characterAnimations.rule(Predicate.Moving, Predicate.FacingRight))
            } else if (Direction == -1) {
                State = "Jump"
                characterAnimations.setCharacterState(Character, characterAnimations.rule(Predicate.Moving, Predicate.FacingLeft))
            }
        } else if (Character.vx < 5 && Character.vx > -5 && Character.vy == 0) {
            if (Direction == 1) {
                State = "Idle"
                characterAnimations.setCharacterState(Character, characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight))
            } else if (Direction == -1) {
                State = "Idle"
                characterAnimations.setCharacterState(Character, characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft))
            }
        }
        console.log(Character.vx)
        console.log(State)
    }
})
