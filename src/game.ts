import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../17ac4bbb-6fd5-4c55-a586-b08644a1a059/src/item"
import Script2 from "../e915cdb6-03e6-43e2-81fb-58ad8603f68c/src/item"
import Script3 from "../2110467a-be27-4200-8d3e-21e86046ef60/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const grassTile = new Entity('grassTile')
engine.addEntity(grassTile)
grassTile.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(15, 0, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile.addComponentOrReplace(transform6)
const gltfShape2 = new GLTFShape("7f2dbcb5-40f5-4e2f-9409-1886d26ce068/FloorBlock_05/FloorBlock_05.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
grassTile.addComponentOrReplace(gltfShape2)

const grassTile2 = new Entity('grassTile2')
engine.addEntity(grassTile2)
grassTile2.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(17, 0, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile2.addComponentOrReplace(transform7)
grassTile2.addComponentOrReplace(gltfShape2)

const grassTile3 = new Entity('grassTile3')
engine.addEntity(grassTile3)
grassTile3.setParent(_scene)
grassTile3.addComponentOrReplace(gltfShape2)
const transform8 = new Transform({
  position: new Vector3(17, 0, 14.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile3.addComponentOrReplace(transform8)

const grassTile4 = new Entity('grassTile4')
engine.addEntity(grassTile4)
grassTile4.setParent(_scene)
grassTile4.addComponentOrReplace(gltfShape2)
const transform9 = new Transform({
  position: new Vector3(19, 0, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile4.addComponentOrReplace(transform9)

const grassTile5 = new Entity('grassTile5')
engine.addEntity(grassTile5)
grassTile5.setParent(_scene)
grassTile5.addComponentOrReplace(gltfShape2)
const transform10 = new Transform({
  position: new Vector3(19, 0, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile5.addComponentOrReplace(transform10)

const grassTile6 = new Entity('grassTile6')
engine.addEntity(grassTile6)
grassTile6.setParent(_scene)
grassTile6.addComponentOrReplace(gltfShape2)
const transform11 = new Transform({
  position: new Vector3(17, 0, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile6.addComponentOrReplace(transform11)

const grassTile7 = new Entity('grassTile7')
engine.addEntity(grassTile7)
grassTile7.setParent(_scene)
grassTile7.addComponentOrReplace(gltfShape2)
const transform12 = new Transform({
  position: new Vector3(19, 0, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile7.addComponentOrReplace(transform12)

const grassTile8 = new Entity('grassTile8')
engine.addEntity(grassTile8)
grassTile8.setParent(_scene)
grassTile8.addComponentOrReplace(gltfShape2)
const transform13 = new Transform({
  position: new Vector3(19, 0, 22.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile8.addComponentOrReplace(transform13)

const grassTile9 = new Entity('grassTile9')
engine.addEntity(grassTile9)
grassTile9.setParent(_scene)
grassTile9.addComponentOrReplace(gltfShape2)
const transform14 = new Transform({
  position: new Vector3(17, 0, 22.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile9.addComponentOrReplace(transform14)

const grassTile10 = new Entity('grassTile10')
engine.addEntity(grassTile10)
grassTile10.setParent(_scene)
grassTile10.addComponentOrReplace(gltfShape2)
const transform15 = new Transform({
  position: new Vector3(17, 0, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile10.addComponentOrReplace(transform15)

const apple = new Entity('apple')
engine.addEntity(apple)
apple.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
apple.addComponentOrReplace(transform16)
const gltfShape3 = new GLTFShape("efe88bc5-618c-4294-a5b5-4c64e95fafa3/FoodApple_01/FoodApple_01.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
apple.addComponentOrReplace(gltfShape3)

const bigMossyRock = new Entity('bigMossyRock')
engine.addEntity(bigMossyRock)
bigMossyRock.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(15.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
bigMossyRock.addComponentOrReplace(transform17)
const gltfShape4 = new GLTFShape("7db063b0-ba2b-4211-8fd5-8f44b38d9a19/RockLargeMoss_01/RockLargeMoss_01.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
bigMossyRock.addComponentOrReplace(gltfShape4)

const dandelion = new Entity('dandelion')
engine.addEntity(dandelion)
dandelion.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(16.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dandelion.addComponentOrReplace(transform18)
const gltfShape5 = new GLTFShape("009be9a4-294f-4ff4-88b6-04d13a51af0d/Grass_04/Grass_04.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
dandelion.addComponentOrReplace(gltfShape5)

const greenRoundedPineTree = new Entity('greenRoundedPineTree')
engine.addEntity(greenRoundedPineTree)
greenRoundedPineTree.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(20, 0, 24.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenRoundedPineTree.addComponentOrReplace(transform19)
const gltfShape6 = new GLTFShape("338c2b2a-65b4-4012-8a19-06eab5c861d6/TreeRoundPine_02/TreeRoundPine_02.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
greenRoundedPineTree.addComponentOrReplace(gltfShape6)

const largePond = new Entity('largePond')
engine.addEntity(largePond)
largePond.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(14.5, 0, 20),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
largePond.addComponentOrReplace(transform20)
const gltfShape7 = new GLTFShape("622c9a64-8acc-4c24-bcf3-d9cd740a9c20/Pond_02/Pond_02.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
largePond.addComponentOrReplace(gltfShape7)

const largeForestLog = new Entity('largeForestLog')
engine.addEntity(largeForestLog)
largeForestLog.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(10.5, 0, 20.5),
  rotation: new Quaternion(0.24734891951084137, -0.38704439997673035, 0.006321496795862913, -0.888242781162262),
  scale: new Vector3(1, 1, 1)
})
largeForestLog.addComponentOrReplace(transform21)
const gltfShape8 = new GLTFShape("ec3a27f6-7974-493f-b783-9fc2e4d29e5b/Log_03/Log_03.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
largeForestLog.addComponentOrReplace(gltfShape8)

const horizontalPlatform = new Entity('horizontalPlatform')
engine.addEntity(horizontalPlatform)
horizontalPlatform.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(17.5, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
horizontalPlatform.addComponentOrReplace(transform22)

const ironFenceDoor = new Entity('ironFenceDoor')
engine.addEntity(ironFenceDoor)
ironFenceDoor.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(18.5, 0, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ironFenceDoor.addComponentOrReplace(transform23)

const constructionFence = new Entity('constructionFence')
engine.addEntity(constructionFence)
constructionFence.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(17, 0, 5.5),
  rotation: new Quaternion(-1.079774047951787e-8, 0.6891443133354187, -7.188334905094962e-8, 0.7246242165565491),
  scale: new Vector3(1.0000003576278687, 1, 1.0000003576278687)
})
constructionFence.addComponentOrReplace(transform24)
const gltfShape9 = new GLTFShape("03635caa-b836-446a-9797-4850f1f668df/ConstructionFence_01/ConstructionFence_01.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
constructionFence.addComponentOrReplace(gltfShape9)

const fruitKiosk = new Entity('fruitKiosk')
engine.addEntity(fruitKiosk)
fruitKiosk.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(19, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fruitKiosk.addComponentOrReplace(transform25)
const gltfShape10 = new GLTFShape("3bb3f823-e27a-4f4b-9a0f-fe046cb8a57d/Store_02/Store_02.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
fruitKiosk.addComponentOrReplace(gltfShape10)

const hardwoodBridge = new Entity('hardwoodBridge')
engine.addEntity(hardwoodBridge)
hardwoodBridge.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(12.5, 0, 19.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
hardwoodBridge.addComponentOrReplace(transform26)
const gltfShape11 = new GLTFShape("2749a65e-6f27-4f07-b4b0-e3965712dfd1/Bridge_01/Bridge_01.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
hardwoodBridge.addComponentOrReplace(gltfShape11)

const qrDonationsBoard = new Entity('qrDonationsBoard')
engine.addEntity(qrDonationsBoard)
qrDonationsBoard.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(18.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
qrDonationsBoard.addComponentOrReplace(transform27)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
script1.init(options)
script2.init(options)
script3.init(options)
script1.spawn(horizontalPlatform, {"distance":10,"speed":4,"autoStart":true,"onReachEnd":[{"entityName":"horizontalPlatform","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"horizontalPlatform","actionId":"goToEnd","values":{}}]}, createChannel(channelId, horizontalPlatform, channelBus))
script2.spawn(ironFenceDoor, {"onClickText":"Open/Close","onClick":[{"entityName":"ironFenceDoor","actionId":"toggle","values":{}}]}, createChannel(channelId, ironFenceDoor, channelBus))
script3.spawn(qrDonationsBoard, {"publicKey":"0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","text":"Make a donation","fontSize":10}, createChannel(channelId, qrDonationsBoard, channelBus))