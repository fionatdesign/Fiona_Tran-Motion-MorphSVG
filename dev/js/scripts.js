import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);
MorphSVGPlugin.convertToPath("#Circle");

const mainTL = gsap.timeline({id: "mainTL"});

// mainTL.to("#Circle", {duration:3, x:50, ease:"bounce.out"})

// ;

mainTL.from("#Circle", {duration:1, drawSVG: "50% 50%"})
.from("#Circle", {duration:1, fill:"#fff"})
// .to("#Circle", {duration:1, fill:"#ff000"})
.to("#Circle", {duration:1, morphSVG:"#Triangle", fill:"#green"})

;