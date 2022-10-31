<script lang="ts">
// import * as Three from "three";

export default {
  name: "ThreeJsPage",
  props: {},
  created() {
    // this.scene.add(this.camera);
    // this.scene.add(this.light);
    // this.scene.add(this.cube);
    // this.renderer.setSize(window.innerWidth, window.innerHeight);
    // this.light.position.set(0, 0, 10);
    // this.camera.position.z = 5;
    // this.scene.background = new Three.Color("hsl(0, 100%, 100%)");
  },
  mounted() {
    // this.$refs.canvas.appendChild(this.renderer.domElement);
    // this.animate();
  },
  methods: {
    // animate() {
    //   requestAnimationFrame(this.animate);
    //   this.renderer.render(this.scene, this.camera);
    //   this.cube.rotation.y += this.speed;
    // },
  },
  data() {
    // const scene = new Three.Scene();
    // const camera = new Three.PerspectiveCamera(
    //   75,
    //   window.innerWidth / window.innerHeight,
    //   0.1,
    //   1000
    // );
    // const renderer = new Three.WebGLRenderer({ antialias: true });
    // const light = new Three.DirectionalLight("hsl(0, 100%, 100%)");
    // const geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
    // const material = new Three.MeshStandardMaterial({
    //   side: Three.FrontSide,
    //   color: "hsl(0, 100%, 50%)",
    //   wireframe: false,
    // });
    // const cube = new Three.Mesh(geometry, material);
    // return {
    //   scene: scene,
    //   camera: camera,
    //   controls: [],
    //   renderer: renderer,
    //   light: light,
    //   cube: cube,
    // };
  },
};
</script>

<template>
  <div ref="canvas"></div>
</template>

<style scoped></style>
