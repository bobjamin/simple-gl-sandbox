import { GLCircle, GLObject, GLProgram, AttributeType, webGlContextFrom } from 'simple-gl'
import { GLScene, GLTriangle, Vertex } from 'simple-gl'
import { Vector2D } from '../simple-gl/dist/src/vector';

let vertexShader = require('./src/vertex-shader.glsl');
let fragmentShader = require('./src/fragment-shader.glsl');

(() => {
    let objects = []
    for(let i = 0;i<10;i++){
        let circle = new GLCircle(100, 0.5,new Vertex(new Vector2D((Math.random()*2-1)*10,(Math.random()*2-1)*10)))
        circle.setColor([Math.random(), Math.random(), Math.random(), 1])
        objects.push(circle)
    }
    let scene = new GLScene(
        webGlContextFrom(document.getElementById('display') as HTMLCanvasElement),
        vertexShader,
        fragmentShader,
        objects
    )
    setInterval( () => {
        // for(let i = 0;i<scene.objects.length;i++){
        //     let circle = (scene.objects[i] as GLCircle)
        //     circle.center.position = new Vector2D(circle.center.position.x+0.01, circle.center.position.y)
        // }
        scene.render()
    }, 1)
})()