"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

interface SilkProps {
  className?: string;
  color?: string;
  speed?: number;
  scale?: number;
  noiseIntensity?: number;
  rotation?: number;
}

export default function Silk({
  className,
  color = "#00C8F0",
  speed = 5,
  scale = 1,
  noiseIntensity = 1.5,
  rotation = 0,
}: SilkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef   = useRef<number>(0);
  const timeRef   = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    if (!gl) return;

    const vsSource = `
      attribute vec2 a_position;
      void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
    `;
    const fsSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2  u_resolution;
      uniform vec3  u_color;
      uniform float u_speed;
      uniform float u_scale;
      uniform float u_noise;
      uniform float u_rotation;

      vec3 mod289(vec3 x){return x - floor(x*(1./289.))*289.;}
      vec4 mod289(vec4 x){return x - floor(x*(1./289.))*289.;}
      vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314*r;}
      float snoise(vec3 v){
        const vec2 C = vec2(1./6.,1./3.);
        const vec4 D = vec4(0.,0.5,1.,2.);
        vec3 i  = floor(v+dot(v,C.yyy));
        vec3 x0 = v-i+dot(i,C.xxx);
        vec3 g  = step(x0.yzx,x0.xyz);
        vec3 l  = 1.-g;
        vec3 i1 = min(g.xyz,l.zxy);
        vec3 i2 = max(g.xyz,l.zxy);
        vec3 x1 = x0-i1+C.xxx;
        vec3 x2 = x0-i2+C.yyy;
        vec3 x3 = x0-D.yyy;
        i = mod289(i);
        vec4 p = permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
        float n_ = 0.142857142857;
        vec3 ns = n_*D.wyz-D.xzx;
        vec4 j  = p-49.*floor(p*ns.z*ns.z);
        vec4 x_ = floor(j*ns.z);
        vec4 y_ = floor(j-7.*x_);
        vec4 x  = x_*ns.x+ns.yyyy;
        vec4 y  = y_*ns.x+ns.yyyy;
        vec4 h  = 1.-abs(x)-abs(y);
        vec4 b0 = vec4(x.xy,y.xy);
        vec4 b1 = vec4(x.zw,y.zw);
        vec4 s0 = floor(b0)*2.+1.;
        vec4 s1 = floor(b1)*2.+1.;
        vec4 sh = -step(h,vec4(0.));
        vec4 a0 = b0.xzyw+s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw+s1.xzyw*sh.zzww;
        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
        p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
        vec4 m = max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);
        m = m*m;
        return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution;
        float t  = u_time * u_speed * 0.001;
        float rot = u_rotation * 0.01745329251;
        float cosR = cos(rot); float sinR = sin(rot);
        vec2 center = vec2(0.5);
        vec2 rotUV  = vec2(cosR*(uv.x-center.x)-sinR*(uv.y-center.y),
                           sinR*(uv.x-center.x)+cosR*(uv.y-center.y)) + center;
        float n1 = snoise(vec3(rotUV * u_scale * 3.0, t));
        float n2 = snoise(vec3(rotUV * u_scale * 2.0 + 10., t * 1.3));
        float n3 = snoise(vec3(rotUV * u_scale * 5.0 + 20., t * 0.7));
        float val = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;
        val = val * u_noise * 0.5 + 0.5;
        float s = smoothstep(0.2, 0.8, val);
        vec3 col = mix(u_color * 0.1, u_color * 0.6, s);
        float alpha = 0.18 + s * 0.25;
        gl_FragColor = vec4(col, alpha);
      }
    `;

    const compileShader = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      return sh;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compileShader(gl.VERTEX_SHADER, vsSource));
    gl.attachShader(prog, compileShader(gl.FRAGMENT_SHADER, fsSource));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const hexToRgb = (hex: string) => {
      const r = parseInt(hex.slice(1,3),16)/255;
      const g = parseInt(hex.slice(3,5),16)/255;
      const b = parseInt(hex.slice(5,7),16)/255;
      return [r,g,b];
    };
    const rgb = hexToRgb(color.startsWith("#") ? color : "#00C8F0");

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes  = gl.getUniformLocation(prog, "u_resolution");
    const uCol  = gl.getUniformLocation(prog, "u_color");
    const uSpd  = gl.getUniformLocation(prog, "u_speed");
    const uSc   = gl.getUniformLocation(prog, "u_scale");
    const uNoi  = gl.getUniformLocation(prog, "u_noise");
    const uRot  = gl.getUniformLocation(prog, "u_rotation");

    gl.uniform3f(uCol, rgb[0], rgb[1], rgb[2]);
    gl.uniform1f(uSpd, speed);
    gl.uniform1f(uSc, scale);
    gl.uniform1f(uNoi, noiseIntensity);
    gl.uniform1f(uRot, rotation);

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const render = (ts: number) => {
      timeRef.current = ts;
      gl.uniform1f(uTime, ts);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animRef.current = requestAnimationFrame(render);
    };
    animRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [color, speed, scale, noiseIntensity, rotation]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}
    />
  );
}
