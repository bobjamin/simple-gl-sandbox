attribute vec4 vertex_position;
attribute vec4 vertex_color;
varying vec4 pixelColor;

void main() {
    pixelColor = vertex_color;
    gl_Position = vertex_position * vec4(0.05, 0.1, 1, 1);
}