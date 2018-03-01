import { GLCircle, GLObject, GLProgram, AttributeType, webGlContextFrom, aspect } from 'simple-gl'
import { GLScene, GLTriangle, Vertex } from 'simple-gl'
import { Vector2D } from '../simple-gl/dist/src/vector';

let vertexShader = require('./src/vertex-shader.glsl');
let fragmentShader = require('./src/fragment-shader.glsl');
let then = 0
function drawScene(scene: GLScene, time){
    let width = scene.program.gl.canvas.clientWidth
    let height = scene.program.gl.canvas.clientHeight
    let seconds = time * 0.001
    let delta = seconds - then
    then = seconds
    scene.objects.forEach(object => {
        let circle = object as GLCircle
        let go = false
        circle.vertices.forEach(vertex => {
            let pos = vertex.position.x
            if(pos > 10) go = true
        })
        circle.vertices.forEach(vertex => {
            let pos = vertex.position.x
            if(go) pos = pos*-1
            vertex.position.x =  pos + 10 * delta
        })
    });
    scene.render()
    requestAnimationFrame((now) => drawScene(scene, now))
}

(() => {
    let objects = []
    for(let i = 0;i<1000;i++){
        let circle = new GLCircle(10, 0.1,new Vertex(new Vector2D(Math.random() * 20-10, Math.random()* 10-5)))
        circle.setColor([Math.random(), Math.random(), Math.random(), 1])
        objects.push(circle)
    }
    let gl = webGlContextFrom(document.getElementById('display') as HTMLCanvasElement)
    var aspectMatrix = aspect(60, gl.canvas.clientWidth, gl.canvas.clientHeight);
    let uniforms = new Map<string, any>()
    uniforms.set("projectionMatrix", {mapper: (gl, position, data) => gl.uniformMatrix4fv(position, false, data)})
    let scene = new GLScene(
        gl,
        vertexShader,
        fragmentShader,
        objects,
        uniforms
    )
    scene.program.updateUniform("projectionMatrix", aspectMatrix)
    requestAnimationFrame((time) => drawScene(scene, time))
})()