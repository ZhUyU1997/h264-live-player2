var Mi = Object.defineProperty;
var Ti = (r0, o0, a0) => o0 in r0 ? Mi(r0, o0, { enumerable: !0, configurable: !0, writable: !0, value: a0 }) : r0[o0] = a0;
var s2 = (r0, o0, a0) => Ti(r0, typeof o0 != "symbol" ? o0 + "" : o0, a0);
var global;
function initglobal() {
  global = this, global || (typeof window < "u" ? global = window : typeof self < "u" && (global = self));
}
initglobal();
const Avc = function() {
  var getModule = function(_broadwayOnHeadersDecoded, _broadwayOnPictureDecoded) {
    var window = this;
    window._broadwayOnHeadersDecoded = _broadwayOnHeadersDecoded, window._broadwayOnPictureDecoded = _broadwayOnPictureDecoded;
    var Module = {
      print: function(r0) {
        console.log("stdout: " + r0);
      },
      printErr: function(r0) {
        console.log("stderr: " + r0);
      }
    };
    function d(r0) {
      throw r0;
    }
    var g = void 0, i = !0, k = null, m = !1;
    function n() {
      return function() {
      };
    }
    var p;
    p || (p = eval(
      "(function() { try { return Module || {} } catch(e) { return {} } })()"
    ));
    var aa = {}, r;
    for (r in p) p.hasOwnProperty(r) && (aa[r] = p[r]);
    var t = typeof process == "object" && !1, ba = typeof window == "object", ca = typeof importScripts == "function", da = !ba && !0 && !ca;
    da ? (p.print || (p.print = print), typeof printErr < "u" && (p.printErr = printErr), p.read = typeof read < "u" ? read : function() {
      d("no read() available (jsc?)");
    }, p.readBinary = function(r0) {
      return typeof readbuffer == "function" ? new Uint8Array(readbuffer(r0)) : (r0 = read(r0, "binary"), w(typeof r0 == "object"), r0);
    }, typeof scriptArgs < "u" ? p.arguments = scriptArgs : typeof arguments < "u" && (p.arguments = arguments), this.Module = p, eval(
      "if (typeof gc === 'function' && gc.toString().indexOf('[native code]') > 0) var gc = undefined"
    )) : ba || ca ? (p.read = function(r0) {
      var o0 = new XMLHttpRequest();
      return o0.open("GET", r0, m), o0.send(k), o0.responseText;
    }, typeof arguments < "u" && (p.arguments = arguments), typeof console < "u" ? (p.print || (p.print = function(r0) {
      console.log(r0);
    }), p.printErr || (p.printErr = function(r0) {
      console.log(r0);
    })) : p.print || (p.print = n()), ba ? window.Module = p : p.load = importScripts) : d("Unknown runtime environment. Where are we?");
    function ha(r0) {
      eval.call(k, r0);
    }
    !p.load && p.read && (p.load = function(r0) {
      ha(p.read(r0));
    }), p.print || (p.print = n()), p.printErr || (p.printErr = p.print), p.arguments || (p.arguments = []), p.thisProgram || (p.thisProgram = "./this.program"), p.print = p.print, p.fa = p.printErr, p.preRun = [], p.postRun = [];
    for (r in aa) aa.hasOwnProperty(r) && (p[r] = aa[r]);
    var z = {
      Yd: function(r0) {
        ja = r0;
      },
      xd: function() {
        return ja;
      },
      Tb: function() {
        return y;
      },
      Sb: function(r0) {
        y = r0;
      },
      oc: function(r0) {
        switch (r0) {
          case "i1":
          case "i8":
            return 1;
          case "i16":
            return 2;
          case "i32":
            return 4;
          case "i64":
            return 8;
          case "float":
            return 4;
          case "double":
            return 8;
          default:
            return r0[r0.length - 1] === "*" ? z.ia : r0[0] === "i" ? (r0 = parseInt(r0.substr(1)), w(r0 % 8 === 0), r0 / 8) : 0;
        }
      },
      vd: function(r0) {
        return Math.max(z.oc(r0), z.ia);
      },
      Qf: 16,
      ng: function(r0, o0, a0) {
        return !a0 && (r0 == "i64" || r0 == "double") ? 8 : r0 ? Math.min(o0 || (r0 ? z.vd(r0) : 0), z.ia) : Math.min(o0, 8);
      },
      Fa: function(r0, o0, a0) {
        return a0 && a0.length ? (a0.splice || (a0 = Array.prototype.slice.call(a0)), a0.splice(0, 0, o0), p["dynCall_" + r0].apply(k, a0)) : p["dynCall_" + r0].call(k, o0);
      },
      eb: [],
      Vc: function(r0) {
        for (var o0 = 0; o0 < z.eb.length; o0++)
          if (!z.eb[o0]) return z.eb[o0] = r0, 2 * (1 + o0);
        d(
          "Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS."
        );
      },
      Sd: function(r0) {
        z.eb[(r0 - 2) / 2] = k;
      },
      og: function(a, b) {
        z.wb || (z.wb = {});
        var c = z.wb[a];
        if (c) return c;
        for (var c = [], e = 0; e < b; e++)
          c.push("$" + e);
        e = ka(a), e[0] === '"' && (e.indexOf('"', 1) === e.length - 1 ? e = e.substr(1, e.length - 2) : A(
          "invalid EM_ASM input |" + e + "|. Please use EM_ASM(..code..) (no quotes) or EM_ASM({ ..code($0).. }, input) (to input values)"
        ));
        try {
          var f = eval(
            "(function(Module, FS) { return function(" + c.join(",") + "){ " + e + " } })"
          )(p, typeof B < "u" ? B : k);
        } catch (r0) {
          p.fa(
            "error in executing inline EM_ASM code: " + r0 + ` on: 

` + e + `

with args |` + c + "| (make sure to use the right one out of EM_ASM, EM_ASM_ARGS, etc.)"
          ), d(r0);
        }
        return z.wb[a] = f;
      },
      Aa: function(r0) {
        z.Aa.Rb || (z.Aa.Rb = {}), z.Aa.Rb[r0] || (z.Aa.Rb[r0] = 1, p.fa(r0));
      },
      Cb: {},
      rg: function(r0, o0) {
        w(o0), z.Cb[o0] || (z.Cb[o0] = {});
        var a0 = z.Cb[o0];
        return a0[r0] || (a0[r0] = function() {
          return z.Fa(o0, r0, arguments);
        }), a0[r0];
      },
      Da: function() {
        var r0 = [], o0 = 0;
        this.nb = function(n0) {
          if (n0 &= 255, r0.length == 0)
            return (n0 & 128) == 0 ? String.fromCharCode(n0) : (r0.push(n0), o0 = (n0 & 224) == 192 ? 1 : (n0 & 240) == 224 ? 2 : 3, "");
          if (o0 && (r0.push(n0), o0--, 0 < o0)) return "";
          var n0 = r0[0], u0 = r0[1], o = r0[2], l0 = r0[3];
          return r0.length == 2 ? n0 = String.fromCharCode((n0 & 31) << 6 | u0 & 63) : r0.length == 3 ? n0 = String.fromCharCode(
            (n0 & 15) << 12 | (u0 & 63) << 6 | o & 63
          ) : (n0 = (n0 & 7) << 18 | (u0 & 63) << 12 | (o & 63) << 6 | l0 & 63, n0 = String.fromCharCode(
            ((n0 - 65536) / 1024 | 0) + 55296,
            (n0 - 65536) % 1024 + 56320
          )), r0.length = 0, n0;
        }, this.Ac = function(a0) {
          for (var a0 = unescape(encodeURIComponent(a0)), n0 = [], u0 = 0; u0 < a0.length; u0++)
            n0.push(a0.charCodeAt(u0));
          return n0;
        };
      },
      pg: function() {
        d(
          "You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work"
        );
      },
      pb: function(r0) {
        var o0 = y;
        return y = y + r0 | 0, y = y + 15 & -16, o0;
      },
      Ec: function(r0) {
        var o0 = D;
        return D = D + r0 | 0, D = D + 15 & -16, o0;
      },
      bb: function(r0) {
        var o0 = E;
        return E = E + r0 | 0, E = E + 15 & -16, E >= F && A(
          "Cannot enlarge memory arrays. Either (1) compile with -s TOTAL_MEMORY=X with X higher than the current value " + F + ", (2) compile with ALLOW_MEMORY_GROWTH which adjusts the size at runtime but prevents some optimizations, or (3) set Module.TOTAL_MEMORY before the program runs."
        ), o0;
      },
      ub: function(r0, o0) {
        return Math.ceil(r0 / (o0 || 16)) * (o0 || 16);
      },
      Fg: function(r0, o0, a0) {
        return a0 ? +(r0 >>> 0) + 4294967296 * +(o0 >>> 0) : +(r0 >>> 0) + 4294967296 * +(o0 | 0);
      },
      Pc: 8,
      ia: 4,
      Rf: 0
    };
    p.Runtime = z, z.addFunction = z.Vc, z.removeFunction = z.Sd;
    var H = m, la, ma, ja;
    function w(r0, o0) {
      r0 || A("Assertion failed: " + o0);
    }
    function na(a) {
      var b = p["_" + a];
      if (!b)
        try {
          b = eval("_" + a);
        } catch (r0) {
        }
      return w(
        b,
        "Cannot call unknown function " + a + " (perhaps LLVM optimizations or closure removed it?)"
      ), b;
    }
    var oa, pa;
    (function() {
      function a(r0) {
        return r0 = r0.toString().match(e).slice(1), { arguments: r0[0], body: r0[1], returnValue: r0[2] };
      }
      var b = {
        stackSave: function() {
          z.Tb();
        },
        stackRestore: function() {
          z.Sb();
        },
        arrayToC: function(r0) {
          var o0 = z.pb(r0.length);
          return qa(r0, o0), o0;
        },
        stringToC: function(r0) {
          var o0 = 0;
          return r0 !== k && r0 !== g && r0 !== 0 && (o0 = z.pb((r0.length << 2) + 1), ra(r0, o0)), o0;
        }
      }, c = { string: b.stringToC, array: b.arrayToC };
      pa = function(l0, o0, a0, n0) {
        var u0 = na(l0), o = [], l0 = 0;
        if (n0)
          for (var b0 = 0; b0 < n0.length; b0++) {
            var F0 = c[a0[b0]];
            F0 ? (l0 === 0 && (l0 = z.Tb()), o[b0] = F0(n0[b0])) : o[b0] = n0[b0];
          }
        return a0 = u0.apply(k, o), o0 === "string" && (a0 = ka(a0)), l0 !== 0 && z.Sb(l0), a0;
      };
      var e = /^function\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/, f = {}, h;
      for (h in b) b.hasOwnProperty(h) && (f[h] = a(b[h]));
      oa = function(b, c, e) {
        var e = e || [], h = na(b), b = e.every(function(r0) {
          return r0 === "number";
        }), x = c !== "string";
        if (x && b) return h;
        var s = e.map(function(r0, o0) {
          return "$" + o0;
        }), c = "(function(" + s.join(",") + ") {", v = e.length;
        if (!b)
          for (var c = c + ("var stack = " + f.stackSave.body + ";"), G = 0; G < v; G++) {
            var ua = s[G], ea = e[G];
            ea !== "number" && (ea = f[ea + "ToC"], c += "var " + ea.arguments + " = " + ua + ";", c += ea.body + ";", c += ua + "=" + ea.returnValue + ";");
          }
        return e = a(function() {
          return h;
        }).returnValue, c += "var ret = " + e + "(" + s.join(",") + ");", x || (e = a(function() {
          return ka;
        }).returnValue, c += "ret = " + e + "(ret);"), b || (c += f.stackRestore.body.replace("()", "(stack)") + ";"), eval(c + "return ret})");
      };
    })(), p.cwrap = oa, p.ccall = pa;
    function sa(r0, o0, a0) {
      switch (a0 = a0 || "i8", a0.charAt(a0.length - 1) === "*" && (a0 = "i32"), a0) {
        case "i1":
          I[r0 >> 0] = o0;
          break;
        case "i8":
          I[r0 >> 0] = o0;
          break;
        case "i16":
          J[r0 >> 1] = o0;
          break;
        case "i32":
          K[r0 >> 2] = o0;
          break;
        case "i64":
          ma = [
            o0 >>> 0,
            (la = o0, 1 <= +ta(la) ? 0 < la ? (va(+wa(la / 4294967296), 4294967295) | 0) >>> 0 : ~~+xa((la - +(~~la >>> 0)) / 4294967296) >>> 0 : 0)
          ], K[r0 >> 2] = ma[0], K[r0 + 4 >> 2] = ma[1];
          break;
        case "float":
          ya[r0 >> 2] = o0;
          break;
        case "double":
          za[r0 >> 3] = o0;
          break;
        default:
          A("invalid type for setValue: " + a0);
      }
    }
    p.setValue = sa;
    function Aa(r0, o0) {
      switch (o0 = o0 || "i8", o0.charAt(o0.length - 1) === "*" && (o0 = "i32"), o0) {
        case "i1":
          return I[r0 >> 0];
        case "i8":
          return I[r0 >> 0];
        case "i16":
          return J[r0 >> 1];
        case "i32":
          return K[r0 >> 2];
        case "i64":
          return K[r0 >> 2];
        case "float":
          return ya[r0 >> 2];
        case "double":
          return za[r0 >> 3];
        default:
          A("invalid type for setValue: " + o0);
      }
      return k;
    }
    p.getValue = Aa;
    var L = 2, Ba = 4;
    p.ALLOC_NORMAL = 0, p.ALLOC_STACK = 1, p.ALLOC_STATIC = L, p.ALLOC_DYNAMIC = 3, p.ALLOC_NONE = Ba;
    function M(r0, o0, b0, n0) {
      var u0, o;
      typeof r0 == "number" ? (u0 = i, o = r0) : (u0 = m, o = r0.length);
      var l0 = typeof o0 == "string" ? o0 : k, b0 = b0 == Ba ? n0 : [Ca, z.pb, z.Ec, z.bb][b0 === g ? L : b0](
        Math.max(o, l0 ? 1 : o0.length)
      );
      if (u0) {
        for (n0 = b0, w((b0 & 3) == 0), r0 = b0 + (o & -4); n0 < r0; n0 += 4) K[n0 >> 2] = 0;
        for (r0 = b0 + o; n0 < r0; ) I[n0++ >> 0] = 0;
        return b0;
      }
      if (l0 === "i8")
        return r0.subarray || r0.slice ? N.set(r0, b0) : N.set(new Uint8Array(r0), b0), b0;
      for (var n0 = 0, F0, M0; n0 < o; ) {
        var R0 = r0[n0];
        typeof R0 == "function" && (R0 = z.sg(R0)), u0 = l0 || o0[n0], u0 === 0 ? n0++ : (u0 == "i64" && (u0 = "i32"), sa(b0 + n0, R0, u0), M0 !== u0 && (F0 = z.oc(u0), M0 = u0), n0 += F0);
      }
      return b0;
    }
    p.allocate = M;
    function ka(r0, o0) {
      if (o0 === 0 || !r0) return "";
      for (var a0 = m, n0, u0 = 0; ; ) {
        if (n0 = N[r0 + u0 >> 0], 128 <= n0) a0 = i;
        else if (n0 == 0 && !o0) break;
        if (u0++, o0 && u0 == o0) break;
      }
      o0 || (o0 = u0);
      var o = "";
      if (!a0) {
        for (; 0 < o0; )
          n0 = String.fromCharCode.apply(
            String,
            N.subarray(r0, r0 + Math.min(o0, 1024))
          ), o = o ? o + n0 : n0, r0 += 1024, o0 -= 1024;
        return o;
      }
      for (a0 = new z.Da(), u0 = 0; u0 < o0; u0++) n0 = N[r0 + u0 >> 0], o += a0.nb(n0);
      return o;
    }
    p.Pointer_stringify = ka, p.UTF16ToString = function(r0) {
      for (var o0 = 0, a0 = ""; ; ) {
        var n0 = J[r0 + 2 * o0 >> 1];
        if (n0 == 0) return a0;
        ++o0, a0 += String.fromCharCode(n0);
      }
    }, p.stringToUTF16 = function(r0, o0) {
      for (var a0 = 0; a0 < r0.length; ++a0)
        J[o0 + 2 * a0 >> 1] = r0.charCodeAt(a0);
      J[o0 + 2 * r0.length >> 1] = 0;
    }, p.UTF32ToString = function(r0) {
      for (var o0 = 0, a0 = ""; ; ) {
        var n0 = K[r0 + 4 * o0 >> 2];
        if (n0 == 0) return a0;
        ++o0, 65536 <= n0 ? (n0 -= 65536, a0 += String.fromCharCode(
          55296 | n0 >> 10,
          56320 | n0 & 1023
        )) : a0 += String.fromCharCode(n0);
      }
    }, p.stringToUTF32 = function(r0, o0) {
      for (var a0 = 0, n0 = 0; n0 < r0.length; ++n0) {
        var o = r0.charCodeAt(n0);
        if (55296 <= o && 57343 >= o)
          var u0 = r0.charCodeAt(++n0), o = 65536 + ((o & 1023) << 10) | u0 & 1023;
        K[o0 + 4 * a0 >> 2] = o, ++a0;
      }
      K[o0 + 4 * a0 >> 2] = 0;
    };
    function Da(r0) {
      function o0(R0, C0, V0) {
        var C0 = C0 || 1 / 0, z0 = "", X0 = [], D0;
        if (r0[o] === "N") {
          for (o++, r0[o] === "K" && o++, D0 = []; r0[o] !== "E"; )
            if (r0[o] === "S") {
              o++;
              var G0 = r0.indexOf("_", o);
              D0.push(b0[r0.substring(o, G0) || 0] || "?"), o = G0 + 1;
            } else if (r0[o] === "C")
              D0.push(D0[D0.length - 1]), o += 2;
            else {
              var G0 = parseInt(r0.substr(o)), Z0 = G0.toString().length;
              if (!G0 || !Z0) {
                o--;
                break;
              }
              var K0 = r0.substr(o + Z0, G0);
              D0.push(K0), b0.push(K0), o += Z0 + G0;
            }
          if (o++, D0 = D0.join("::"), C0--, C0 === 0) return R0 ? [D0] : D0;
        } else (r0[o] === "K" || F0 && r0[o] === "L") && o++, (G0 = parseInt(r0.substr(o))) && (Z0 = G0.toString().length, D0 = r0.substr(o + Z0, G0), o += Z0 + G0);
        F0 = m, r0[o] === "I" ? (o++, G0 = o0(i), Z0 = o0(i, 1, i), z0 += Z0[0] + " " + D0 + "<" + G0.join(", ") + ">") : z0 = D0;
        e: for (; o < r0.length && 0 < C0--; )
          if (D0 = r0[o++], D0 in l0) X0.push(l0[D0]);
          else
            switch (D0) {
              case "P":
                X0.push(o0(i, 1, i)[0] + "*");
                break;
              case "R":
                X0.push(o0(i, 1, i)[0] + "&");
                break;
              case "L":
                o++, G0 = r0.indexOf("E", o) - o, X0.push(r0.substr(o, G0)), o += G0 + 2;
                break;
              case "A":
                G0 = parseInt(r0.substr(o)), o += G0.toString().length, r0[o] !== "_" && d("?"), o++, X0.push(o0(i, 1, i)[0] + " [" + G0 + "]");
                break;
              case "E":
                break e;
              default:
                z0 += "?" + D0;
                break e;
            }
        return !V0 && X0.length === 1 && X0[0] === "void" && (X0 = []), R0 ? (z0 && X0.push(z0 + "?"), X0) : z0 + ("(" + X0.join(", ") + ")");
      }
      var a0 = !!p.___cxa_demangle;
      if (a0)
        try {
          var M0 = Ca(r0.length);
          ra(r0.substr(1), M0);
          var n0 = Ca(4), u0 = p.___cxa_demangle(M0, 0, 0, n0);
          if (Aa(n0, "i32") === 0 && u0) return ka(u0);
        } catch {
        } finally {
          M0 && Ea(M0), n0 && Ea(n0), u0 && Ea(u0);
        }
      var o = 3, l0 = {
        v: "void",
        b: "bool",
        c: "char",
        s: "short",
        i: "int",
        l: "long",
        f: "float",
        d: "double",
        w: "wchar_t",
        a: "signed char",
        h: "unsigned char",
        t: "unsigned short",
        j: "unsigned int",
        m: "unsigned long",
        x: "long long",
        y: "unsigned long long",
        z: "..."
      }, b0 = [], F0 = i, M0 = r0;
      try {
        if (r0 == "Object._main" || r0 == "_main") return "main()";
        if (typeof r0 == "number" && (r0 = ka(r0)), r0[0] !== "_" || r0[1] !== "_" || r0[2] !== "Z") return r0;
        switch (r0[3]) {
          case "n":
            return "operator new()";
          case "d":
            return "operator delete()";
        }
        M0 = o0();
      } catch {
        M0 += "?";
      }
      return 0 <= M0.indexOf("?") && !a0 && z.Aa(
        "warning: a problem occurred in builtin C++ name demangling; build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling"
      ), M0;
    }
    function Fa() {
      var r0;
      e: {
        if (r0 = Error(), !r0.stack) {
          try {
            d(Error(0));
          } catch (o0) {
            r0 = o0;
          }
          if (!r0.stack) {
            r0 = "(no stack trace available)";
            break e;
          }
        }
        r0 = r0.stack.toString();
      }
      return r0.replace(/__Z[\w\d_]+/g, function(o0) {
        var a0 = Da(o0);
        return o0 === a0 ? o0 : o0 + " [" + a0 + "]";
      });
    }
    p.stackTrace = function() {
      return Fa();
    };
    for (var I, N, J, Ga, K, Ha, ya, za, Ia = 0, D = 0, Ja = 0, y = 0, Ka = 0, La = 0, E = 0, Ma = p.TOTAL_STACK || 5242880, F = p.TOTAL_MEMORY || 52428800, O = 65536; O < F || O < 2 * Ma; )
      O = 16777216 > O ? 2 * O : O + 16777216;
    O !== F && (p.fa(
      "increasing TOTAL_MEMORY to " + O + " to be compliant with the asm.js spec"
    ), F = O), w(
      typeof Int32Array < "u" && typeof Float64Array < "u" && !!new Int32Array(1).subarray && !!new Int32Array(1).set,
      "JS engine does not provide full typed array support"
    );
    var Q = new ArrayBuffer(F);
    I = new Int8Array(Q), J = new Int16Array(Q), K = new Int32Array(Q), N = new Uint8Array(Q), Ga = new Uint16Array(Q), Ha = new Uint32Array(Q), ya = new Float32Array(Q), za = new Float64Array(Q), K[0] = 255, w(
      N[0] === 255 && N[3] === 0,
      "Typed arrays 2 must be run on a little-endian system"
    ), p.HEAP = g, p.buffer = Q, p.HEAP8 = I, p.HEAP16 = J, p.HEAP32 = K, p.HEAPU8 = N, p.HEAPU16 = Ga, p.HEAPU32 = Ha, p.HEAPF32 = ya, p.HEAPF64 = za;
    function Na(r0) {
      for (; 0 < r0.length; ) {
        var o0 = r0.shift();
        if (typeof o0 == "function") o0();
        else {
          var a0 = o0.ja;
          typeof a0 == "number" ? o0.Xa === g ? z.Fa("v", a0) : z.Fa("vi", a0, [o0.Xa]) : a0(o0.Xa === g ? k : o0.Xa);
        }
      }
    }
    var Oa = [], R = [], Pa = [], Qa = [], Ra = [], Sa = m;
    function Ta(r0) {
      Oa.unshift(r0);
    }
    p.addOnPreRun = p.Xf = Ta, p.addOnInit = p.Uf = function(r0) {
      R.unshift(r0);
    }, p.addOnPreMain = p.Wf = function(r0) {
      Pa.unshift(r0);
    }, p.addOnExit = p.Tf = function(r0) {
      Qa.unshift(r0);
    };
    function Ua(r0) {
      Ra.unshift(r0);
    }
    p.addOnPostRun = p.Vf = Ua;
    function Va(r0, o0, a0) {
      return r0 = new z.Da().Ac(r0), a0 && (r0.length = a0), o0 || r0.push(0), r0;
    }
    p.intArrayFromString = Va, p.intArrayToString = function(r0) {
      for (var o0 = [], a0 = 0; a0 < r0.length; a0++) {
        var n0 = r0[a0];
        255 < n0 && (n0 &= 255), o0.push(String.fromCharCode(n0));
      }
      return o0.join("");
    };
    function ra(r0, o0, a0) {
      for (r0 = Va(r0, a0), a0 = 0; a0 < r0.length; ) I[o0 + a0 >> 0] = r0[a0], a0 += 1;
    }
    p.writeStringToMemory = ra;
    function qa(r0, o0) {
      for (var a0 = 0; a0 < r0.length; a0++) I[o0 + a0 >> 0] = r0[a0];
    }
    p.writeArrayToMemory = qa, p.writeAsciiToMemory = function(r0, o0, a0) {
      for (var n0 = 0; n0 < r0.length; n0++) I[o0 + n0 >> 0] = r0.charCodeAt(n0);
      a0 || (I[o0 + r0.length >> 0] = 0);
    }, (!Math.imul || Math.imul(4294967295, 5) !== -5) && (Math.imul = function(r0, o0) {
      var a0 = r0 & 65535, n0 = o0 & 65535;
      return a0 * n0 + ((r0 >>> 16) * n0 + a0 * (o0 >>> 16) << 16) | 0;
    }), Math.vg = Math.imul;
    var ta = Math.abs, xa = Math.ceil, wa = Math.floor, va = Math.min, S = 0, Xa = k;
    function Ya() {
      S++, p.monitorRunDependencies && p.monitorRunDependencies(S);
    }
    p.addRunDependency = Ya;
    function Za() {
      if (S--, p.monitorRunDependencies && p.monitorRunDependencies(S), S == 0 && Xa) {
        var r0 = Xa;
        Xa = k, r0();
      }
    }
    p.removeRunDependency = Za, p.preloadedImages = {}, p.preloadedAudios = {};
    var Ia = 8, D = Ia + 7808;
    R.push(), M(
      [
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        3,
        3,
        3,
        3,
        3,
        3,
        4,
        4,
        4,
        4,
        4,
        4,
        5,
        5,
        5,
        5,
        5,
        5,
        6,
        6,
        6,
        6,
        6,
        6,
        7,
        7,
        7,
        7,
        7,
        7,
        8,
        8,
        8,
        8,
        0,
        0,
        0,
        0,
        0,
        1,
        2,
        3,
        4,
        5,
        0,
        1,
        2,
        3,
        4,
        5,
        0,
        1,
        2,
        3,
        4,
        5,
        0,
        1,
        2,
        3,
        4,
        5,
        0,
        1,
        2,
        3,
        4,
        5,
        0,
        1,
        2,
        3,
        4,
        5,
        0,
        1,
        2,
        3,
        4,
        5,
        0,
        1,
        2,
        3,
        4,
        5,
        0,
        1,
        2,
        3,
        0,
        0,
        0,
        0,
        10,
        0,
        0,
        0,
        13,
        0,
        0,
        0,
        16,
        0,
        0,
        0,
        11,
        0,
        0,
        0,
        14,
        0,
        0,
        0,
        18,
        0,
        0,
        0,
        13,
        0,
        0,
        0,
        16,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        14,
        0,
        0,
        0,
        18,
        0,
        0,
        0,
        23,
        0,
        0,
        0,
        16,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        25,
        0,
        0,
        0,
        18,
        0,
        0,
        0,
        23,
        0,
        0,
        0,
        29,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        5,
        0,
        0,
        0,
        6,
        0,
        0,
        0,
        7,
        0,
        0,
        0,
        8,
        0,
        0,
        0,
        9,
        0,
        0,
        0,
        10,
        0,
        0,
        0,
        11,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        13,
        0,
        0,
        0,
        14,
        0,
        0,
        0,
        15,
        0,
        0,
        0,
        16,
        0,
        0,
        0,
        17,
        0,
        0,
        0,
        18,
        0,
        0,
        0,
        19,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        21,
        0,
        0,
        0,
        22,
        0,
        0,
        0,
        23,
        0,
        0,
        0,
        24,
        0,
        0,
        0,
        25,
        0,
        0,
        0,
        26,
        0,
        0,
        0,
        27,
        0,
        0,
        0,
        28,
        0,
        0,
        0,
        29,
        0,
        0,
        0,
        29,
        0,
        0,
        0,
        30,
        0,
        0,
        0,
        31,
        0,
        0,
        0,
        32,
        0,
        0,
        0,
        32,
        0,
        0,
        0,
        33,
        0,
        0,
        0,
        34,
        0,
        0,
        0,
        34,
        0,
        0,
        0,
        35,
        0,
        0,
        0,
        35,
        0,
        0,
        0,
        36,
        0,
        0,
        0,
        36,
        0,
        0,
        0,
        37,
        0,
        0,
        0,
        37,
        0,
        0,
        0,
        37,
        0,
        0,
        0,
        38,
        0,
        0,
        0,
        38,
        0,
        0,
        0,
        38,
        0,
        0,
        0,
        39,
        0,
        0,
        0,
        39,
        0,
        0,
        0,
        39,
        0,
        0,
        0,
        39,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        8,
        0,
        0,
        0,
        16,
        0,
        0,
        0,
        32,
        0,
        0,
        0,
        64,
        0,
        0,
        0,
        128,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        5,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        6,
        0,
        0,
        0,
        7,
        0,
        0,
        0,
        8,
        0,
        0,
        0,
        9,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        13,
        0,
        0,
        0,
        10,
        0,
        0,
        0,
        11,
        0,
        0,
        0,
        14,
        0,
        0,
        0,
        15,
        0,
        0,
        0,
        47,
        31,
        15,
        0,
        23,
        27,
        29,
        30,
        7,
        11,
        13,
        14,
        39,
        43,
        45,
        46,
        16,
        3,
        5,
        10,
        12,
        19,
        21,
        26,
        28,
        35,
        37,
        42,
        44,
        1,
        2,
        4,
        8,
        17,
        18,
        20,
        24,
        6,
        9,
        22,
        25,
        32,
        33,
        34,
        36,
        40,
        38,
        41,
        0,
        16,
        1,
        2,
        4,
        8,
        32,
        3,
        5,
        10,
        12,
        15,
        47,
        7,
        11,
        13,
        14,
        6,
        9,
        31,
        35,
        37,
        42,
        44,
        33,
        34,
        36,
        40,
        39,
        43,
        45,
        46,
        17,
        18,
        20,
        24,
        19,
        21,
        26,
        28,
        23,
        27,
        29,
        30,
        22,
        25,
        38,
        41,
        17,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        34,
        18,
        1,
        1,
        0,
        0,
        0,
        0,
        50,
        34,
        18,
        2,
        0,
        0,
        0,
        0,
        67,
        51,
        34,
        34,
        18,
        18,
        2,
        2,
        83,
        67,
        51,
        35,
        18,
        18,
        2,
        2,
        19,
        35,
        67,
        51,
        99,
        83,
        2,
        2,
        0,
        0,
        101,
        85,
        68,
        68,
        52,
        52,
        35,
        35,
        35,
        35,
        19,
        19,
        19,
        19,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        249,
        233,
        217,
        200,
        200,
        184,
        184,
        167,
        167,
        167,
        167,
        151,
        151,
        151,
        151,
        134,
        134,
        134,
        134,
        134,
        134,
        134,
        134,
        118,
        118,
        118,
        118,
        118,
        118,
        118,
        118,
        230,
        214,
        198,
        182,
        165,
        165,
        149,
        149,
        132,
        132,
        132,
        132,
        116,
        116,
        116,
        116,
        100,
        100,
        100,
        100,
        84,
        84,
        84,
        84,
        67,
        67,
        67,
        67,
        67,
        67,
        67,
        67,
        51,
        51,
        51,
        51,
        51,
        51,
        51,
        51,
        35,
        35,
        35,
        35,
        35,
        35,
        35,
        35,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        214,
        182,
        197,
        197,
        165,
        165,
        149,
        149,
        132,
        132,
        132,
        132,
        84,
        84,
        84,
        84,
        68,
        68,
        68,
        68,
        4,
        4,
        4,
        4,
        115,
        115,
        115,
        115,
        115,
        115,
        115,
        115,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        51,
        51,
        51,
        51,
        51,
        51,
        51,
        51,
        35,
        35,
        35,
        35,
        35,
        35,
        35,
        35,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        197,
        181,
        165,
        5,
        148,
        148,
        116,
        116,
        52,
        52,
        36,
        36,
        131,
        131,
        131,
        131,
        99,
        99,
        99,
        99,
        83,
        83,
        83,
        83,
        67,
        67,
        67,
        67,
        19,
        19,
        19,
        19,
        181,
        149,
        164,
        164,
        132,
        132,
        36,
        36,
        20,
        20,
        4,
        4,
        115,
        115,
        115,
        115,
        99,
        99,
        99,
        99,
        83,
        83,
        83,
        83,
        67,
        67,
        67,
        67,
        51,
        51,
        51,
        51,
        166,
        6,
        21,
        21,
        132,
        132,
        132,
        132,
        147,
        147,
        147,
        147,
        147,
        147,
        147,
        147,
        115,
        115,
        115,
        115,
        115,
        115,
        115,
        115,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        83,
        83,
        83,
        83,
        83,
        83,
        83,
        83,
        67,
        67,
        67,
        67,
        67,
        67,
        67,
        67,
        51,
        51,
        51,
        51,
        51,
        51,
        51,
        51,
        35,
        35,
        35,
        35,
        35,
        35,
        35,
        35,
        150,
        6,
        21,
        21,
        116,
        116,
        116,
        116,
        131,
        131,
        131,
        131,
        131,
        131,
        131,
        131,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        67,
        67,
        67,
        67,
        67,
        67,
        67,
        67,
        51,
        51,
        51,
        51,
        51,
        51,
        51,
        51,
        35,
        35,
        35,
        35,
        35,
        35,
        35,
        35,
        82,
        82,
        82,
        82,
        82,
        82,
        82,
        82,
        82,
        82,
        82,
        82,
        82,
        82,
        82,
        82,
        134,
        6,
        37,
        37,
        20,
        20,
        20,
        20,
        115,
        115,
        115,
        115,
        115,
        115,
        115,
        115,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        51,
        51,
        51,
        51,
        51,
        51,
        51,
        51,
        82,
        82,
        82,
        82,
        82,
        82,
        82,
        82,
        82,
        82,
        82,
        82,
        82,
        82,
        82,
        82,
        66,
        66,
        66,
        66,
        66,
        66,
        66,
        66,
        66,
        66,
        66,
        66,
        66,
        66,
        66,
        66,
        22,
        6,
        117,
        117,
        36,
        36,
        36,
        36,
        83,
        83,
        83,
        83,
        83,
        83,
        83,
        83,
        98,
        98,
        98,
        98,
        98,
        98,
        98,
        98,
        98,
        98,
        98,
        98,
        98,
        98,
        98,
        98,
        66,
        66,
        66,
        66,
        66,
        66,
        66,
        66,
        66,
        66,
        66,
        66,
        66,
        66,
        66,
        66,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        21,
        5,
        100,
        100,
        35,
        35,
        35,
        35,
        82,
        82,
        82,
        82,
        82,
        82,
        82,
        82,
        66,
        66,
        66,
        66,
        66,
        66,
        66,
        66,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        4,
        20,
        35,
        35,
        51,
        51,
        83,
        83,
        65,
        65,
        65,
        65,
        65,
        65,
        65,
        65,
        4,
        20,
        67,
        67,
        34,
        34,
        34,
        34,
        49,
        49,
        49,
        49,
        49,
        49,
        49,
        49,
        3,
        19,
        50,
        50,
        33,
        33,
        33,
        33,
        2,
        18,
        33,
        33,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        102,
        32,
        38,
        16,
        6,
        8,
        101,
        24,
        101,
        24,
        67,
        16,
        67,
        16,
        67,
        16,
        67,
        16,
        67,
        16,
        67,
        16,
        67,
        16,
        67,
        16,
        34,
        8,
        34,
        8,
        34,
        8,
        34,
        8,
        34,
        8,
        34,
        8,
        34,
        8,
        34,
        8,
        34,
        8,
        34,
        8,
        34,
        8,
        34,
        8,
        34,
        8,
        34,
        8,
        34,
        8,
        34,
        8,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        106,
        64,
        74,
        48,
        42,
        40,
        10,
        32,
        105,
        56,
        105,
        56,
        73,
        40,
        73,
        40,
        41,
        32,
        41,
        32,
        9,
        24,
        9,
        24,
        104,
        48,
        104,
        48,
        104,
        48,
        104,
        48,
        72,
        32,
        72,
        32,
        72,
        32,
        72,
        32,
        40,
        24,
        40,
        24,
        40,
        24,
        40,
        24,
        8,
        16,
        8,
        16,
        8,
        16,
        8,
        16,
        103,
        40,
        103,
        40,
        103,
        40,
        103,
        40,
        103,
        40,
        103,
        40,
        103,
        40,
        103,
        40,
        71,
        24,
        71,
        24,
        71,
        24,
        71,
        24,
        71,
        24,
        71,
        24,
        71,
        24,
        71,
        24,
        110,
        96,
        78,
        88,
        46,
        80,
        14,
        80,
        110,
        88,
        78,
        80,
        46,
        72,
        14,
        72,
        13,
        64,
        13,
        64,
        77,
        72,
        77,
        72,
        45,
        64,
        45,
        64,
        13,
        56,
        13,
        56,
        109,
        80,
        109,
        80,
        77,
        64,
        77,
        64,
        45,
        56,
        45,
        56,
        13,
        48,
        13,
        48,
        107,
        72,
        107,
        72,
        107,
        72,
        107,
        72,
        107,
        72,
        107,
        72,
        107,
        72,
        107,
        72,
        75,
        56,
        75,
        56,
        75,
        56,
        75,
        56,
        75,
        56,
        75,
        56,
        75,
        56,
        75,
        56,
        43,
        48,
        43,
        48,
        43,
        48,
        43,
        48,
        43,
        48,
        43,
        48,
        43,
        48,
        43,
        48,
        11,
        40,
        11,
        40,
        11,
        40,
        11,
        40,
        11,
        40,
        11,
        40,
        11,
        40,
        11,
        40,
        0,
        0,
        0,
        0,
        47,
        104,
        47,
        104,
        16,
        128,
        80,
        128,
        48,
        128,
        16,
        120,
        112,
        128,
        80,
        120,
        48,
        120,
        16,
        112,
        112,
        120,
        80,
        112,
        48,
        112,
        16,
        104,
        111,
        112,
        111,
        112,
        79,
        104,
        79,
        104,
        47,
        96,
        47,
        96,
        15,
        96,
        15,
        96,
        111,
        104,
        111,
        104,
        79,
        96,
        79,
        96,
        47,
        88,
        47,
        88,
        15,
        88,
        15,
        88,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        102,
        56,
        70,
        32,
        38,
        32,
        6,
        16,
        102,
        48,
        70,
        24,
        38,
        24,
        6,
        8,
        101,
        40,
        101,
        40,
        37,
        16,
        37,
        16,
        100,
        32,
        100,
        32,
        100,
        32,
        100,
        32,
        100,
        24,
        100,
        24,
        100,
        24,
        100,
        24,
        67,
        16,
        67,
        16,
        67,
        16,
        67,
        16,
        67,
        16,
        67,
        16,
        67,
        16,
        67,
        16,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        105,
        72,
        73,
        56,
        41,
        56,
        9,
        48,
        8,
        40,
        8,
        40,
        72,
        48,
        72,
        48,
        40,
        48,
        40,
        48,
        8,
        32,
        8,
        32,
        103,
        64,
        103,
        64,
        103,
        64,
        103,
        64,
        71,
        40,
        71,
        40,
        71,
        40,
        71,
        40,
        39,
        40,
        39,
        40,
        39,
        40,
        39,
        40,
        7,
        24,
        7,
        24,
        7,
        24,
        7,
        24,
        0,
        0,
        0,
        0,
        109,
        120,
        109,
        120,
        110,
        128,
        78,
        128,
        46,
        128,
        14,
        128,
        46,
        120,
        14,
        120,
        78,
        120,
        46,
        112,
        77,
        112,
        77,
        112,
        13,
        112,
        13,
        112,
        109,
        112,
        109,
        112,
        77,
        104,
        77,
        104,
        45,
        104,
        45,
        104,
        13,
        104,
        13,
        104,
        109,
        104,
        109,
        104,
        77,
        96,
        77,
        96,
        45,
        96,
        45,
        96,
        13,
        96,
        13,
        96,
        12,
        88,
        12,
        88,
        12,
        88,
        12,
        88,
        76,
        88,
        76,
        88,
        76,
        88,
        76,
        88,
        44,
        88,
        44,
        88,
        44,
        88,
        44,
        88,
        12,
        80,
        12,
        80,
        12,
        80,
        12,
        80,
        108,
        96,
        108,
        96,
        108,
        96,
        108,
        96,
        76,
        80,
        76,
        80,
        76,
        80,
        76,
        80,
        44,
        80,
        44,
        80,
        44,
        80,
        44,
        80,
        12,
        72,
        12,
        72,
        12,
        72,
        12,
        72,
        107,
        88,
        107,
        88,
        107,
        88,
        107,
        88,
        107,
        88,
        107,
        88,
        107,
        88,
        107,
        88,
        75,
        72,
        75,
        72,
        75,
        72,
        75,
        72,
        75,
        72,
        75,
        72,
        75,
        72,
        75,
        72,
        43,
        72,
        43,
        72,
        43,
        72,
        43,
        72,
        43,
        72,
        43,
        72,
        43,
        72,
        43,
        72,
        11,
        64,
        11,
        64,
        11,
        64,
        11,
        64,
        11,
        64,
        11,
        64,
        11,
        64,
        11,
        64,
        107,
        80,
        107,
        80,
        107,
        80,
        107,
        80,
        107,
        80,
        107,
        80,
        107,
        80,
        107,
        80,
        75,
        64,
        75,
        64,
        75,
        64,
        75,
        64,
        75,
        64,
        75,
        64,
        75,
        64,
        75,
        64,
        43,
        64,
        43,
        64,
        43,
        64,
        43,
        64,
        43,
        64,
        43,
        64,
        43,
        64,
        43,
        64,
        11,
        56,
        11,
        56,
        11,
        56,
        11,
        56,
        11,
        56,
        11,
        56,
        11,
        56,
        11,
        56,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        6,
        24,
        70,
        56,
        38,
        56,
        6,
        16,
        102,
        72,
        70,
        48,
        38,
        48,
        6,
        8,
        37,
        40,
        37,
        40,
        69,
        40,
        69,
        40,
        37,
        32,
        37,
        32,
        69,
        32,
        69,
        32,
        37,
        24,
        37,
        24,
        101,
        64,
        101,
        64,
        69,
        24,
        69,
        24,
        37,
        16,
        37,
        16,
        100,
        56,
        100,
        56,
        100,
        56,
        100,
        56,
        100,
        48,
        100,
        48,
        100,
        48,
        100,
        48,
        100,
        40,
        100,
        40,
        100,
        40,
        100,
        40,
        100,
        32,
        100,
        32,
        100,
        32,
        100,
        32,
        100,
        24,
        100,
        24,
        100,
        24,
        100,
        24,
        68,
        16,
        68,
        16,
        68,
        16,
        68,
        16,
        36,
        8,
        36,
        8,
        36,
        8,
        36,
        8,
        4,
        0,
        4,
        0,
        4,
        0,
        4,
        0,
        0,
        0,
        10,
        128,
        106,
        128,
        74,
        128,
        42,
        128,
        10,
        120,
        106,
        120,
        74,
        120,
        42,
        120,
        10,
        112,
        106,
        112,
        74,
        112,
        42,
        112,
        10,
        104,
        41,
        104,
        41,
        104,
        9,
        96,
        9,
        96,
        73,
        104,
        73,
        104,
        41,
        96,
        41,
        96,
        9,
        88,
        9,
        88,
        105,
        104,
        105,
        104,
        73,
        96,
        73,
        96,
        41,
        88,
        41,
        88,
        9,
        80,
        9,
        80,
        104,
        96,
        104,
        96,
        104,
        96,
        104,
        96,
        72,
        88,
        72,
        88,
        72,
        88,
        72,
        88,
        40,
        80,
        40,
        80,
        40,
        80,
        40,
        80,
        8,
        72,
        8,
        72,
        8,
        72,
        8,
        72,
        104,
        88,
        104,
        88,
        104,
        88,
        104,
        88,
        72,
        80,
        72,
        80,
        72,
        80,
        72,
        80,
        40,
        72,
        40,
        72,
        40,
        72,
        40,
        72,
        8,
        64,
        8,
        64,
        8,
        64,
        8,
        64,
        7,
        56,
        7,
        56,
        7,
        56,
        7,
        56,
        7,
        56,
        7,
        56,
        7,
        56,
        7,
        56,
        7,
        48,
        7,
        48,
        7,
        48,
        7,
        48,
        7,
        48,
        7,
        48,
        7,
        48,
        7,
        48,
        71,
        72,
        71,
        72,
        71,
        72,
        71,
        72,
        71,
        72,
        71,
        72,
        71,
        72,
        71,
        72,
        7,
        40,
        7,
        40,
        7,
        40,
        7,
        40,
        7,
        40,
        7,
        40,
        7,
        40,
        7,
        40,
        103,
        80,
        103,
        80,
        103,
        80,
        103,
        80,
        103,
        80,
        103,
        80,
        103,
        80,
        103,
        80,
        71,
        64,
        71,
        64,
        71,
        64,
        71,
        64,
        71,
        64,
        71,
        64,
        71,
        64,
        71,
        64,
        39,
        64,
        39,
        64,
        39,
        64,
        39,
        64,
        39,
        64,
        39,
        64,
        39,
        64,
        39,
        64,
        7,
        32,
        7,
        32,
        7,
        32,
        7,
        32,
        7,
        32,
        7,
        32,
        7,
        32,
        7,
        32,
        6,
        8,
        38,
        8,
        0,
        0,
        6,
        0,
        6,
        16,
        38,
        16,
        70,
        16,
        0,
        0,
        6,
        24,
        38,
        24,
        70,
        24,
        102,
        24,
        6,
        32,
        38,
        32,
        70,
        32,
        102,
        32,
        6,
        40,
        38,
        40,
        70,
        40,
        102,
        40,
        6,
        48,
        38,
        48,
        70,
        48,
        102,
        48,
        6,
        56,
        38,
        56,
        70,
        56,
        102,
        56,
        6,
        64,
        38,
        64,
        70,
        64,
        102,
        64,
        6,
        72,
        38,
        72,
        70,
        72,
        102,
        72,
        6,
        80,
        38,
        80,
        70,
        80,
        102,
        80,
        6,
        88,
        38,
        88,
        70,
        88,
        102,
        88,
        6,
        96,
        38,
        96,
        70,
        96,
        102,
        96,
        6,
        104,
        38,
        104,
        70,
        104,
        102,
        104,
        6,
        112,
        38,
        112,
        70,
        112,
        102,
        112,
        6,
        120,
        38,
        120,
        70,
        120,
        102,
        120,
        6,
        128,
        38,
        128,
        70,
        128,
        102,
        128,
        0,
        0,
        67,
        16,
        2,
        0,
        2,
        0,
        33,
        8,
        33,
        8,
        33,
        8,
        33,
        8,
        103,
        32,
        103,
        32,
        72,
        32,
        40,
        32,
        71,
        24,
        71,
        24,
        39,
        24,
        39,
        24,
        6,
        32,
        6,
        32,
        6,
        32,
        6,
        32,
        6,
        24,
        6,
        24,
        6,
        24,
        6,
        24,
        6,
        16,
        6,
        16,
        6,
        16,
        6,
        16,
        102,
        24,
        102,
        24,
        102,
        24,
        102,
        24,
        38,
        16,
        38,
        16,
        38,
        16,
        38,
        16,
        6,
        8,
        6,
        8,
        6,
        8,
        6,
        8,
        3,
        0,
        0,
        0,
        15,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        10,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        5,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        11,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        14,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        7,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        13,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        8,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        6,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        9,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        19,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        18,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        17,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        16,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        23,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        22,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        21,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        11,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        14,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        15,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        10,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        5,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        6,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        9,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        7,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        13,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        8,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        19,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        18,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        17,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        16,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        23,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        22,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        21,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        10,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        11,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        14,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        15,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        5,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        8,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        9,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        6,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        7,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        13,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        18,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        19,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        16,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        17,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        22,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        23,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        21,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        5,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        7,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        6,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        13,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        8,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        15,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        10,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        9,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        11,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        14,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        17,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        16,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        19,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        18,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        21,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        23,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        22,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        8,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        8,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        8,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        8,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        8,
        0,
        0,
        0,
        8,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        8,
        0,
        0,
        0,
        8,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        107,
        108,
        109,
        110,
        111,
        112,
        113,
        114,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        123,
        124,
        125,
        126,
        127,
        128,
        129,
        130,
        131,
        132,
        133,
        134,
        135,
        136,
        137,
        138,
        139,
        140,
        141,
        142,
        143,
        144,
        145,
        146,
        147,
        148,
        149,
        150,
        151,
        152,
        153,
        154,
        155,
        156,
        157,
        158,
        159,
        160,
        161,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        171,
        172,
        173,
        174,
        175,
        176,
        177,
        178,
        179,
        180,
        181,
        182,
        183,
        184,
        185,
        186,
        187,
        188,
        189,
        190,
        191,
        192,
        193,
        194,
        195,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        209,
        210,
        211,
        212,
        213,
        214,
        215,
        216,
        217,
        218,
        219,
        220,
        221,
        222,
        223,
        224,
        225,
        226,
        227,
        228,
        229,
        230,
        231,
        232,
        233,
        234,
        235,
        236,
        237,
        238,
        239,
        240,
        241,
        242,
        243,
        244,
        245,
        246,
        247,
        248,
        249,
        250,
        251,
        252,
        253,
        254,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        3,
        0,
        0,
        0,
        15,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        15,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        5,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        15,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        10,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        15,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        10,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        5,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        11,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        11,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        11,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        14,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        11,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        14,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        7,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        7,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        13,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        7,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        7,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        13,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        8,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        9,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        6,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        6,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        9,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        14,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        14,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        11,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        14,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        11,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        14,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        10,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        10,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        15,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        10,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        15,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        10,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        5,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        6,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        6,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        6,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        6,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        9,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        8,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        7,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        7,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        13,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        8,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        10,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        10,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        10,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        11,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        10,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        11,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        14,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        14,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        14,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        15,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        14,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        15,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        5,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        8,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        8,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        9,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        6,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        6,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        6,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        7,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        6,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        7,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        13,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        5,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        5,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        7,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        5,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        5,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        7,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        6,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        13,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        13,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        15,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        13,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        8,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        13,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        8,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        15,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        10,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        9,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        9,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        11,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        9,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        9,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        11,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        14,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        5,
        0,
        0,
        0,
        6,
        0,
        0,
        0,
        7,
        0,
        0,
        0,
        8,
        0,
        0,
        0,
        9,
        0,
        0,
        0,
        10,
        0,
        0,
        0,
        11,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        13,
        0,
        0,
        0,
        14,
        0,
        0,
        0,
        15,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        12,
        13,
        15,
        17,
        20,
        22,
        25,
        28,
        32,
        36,
        40,
        45,
        50,
        56,
        63,
        71,
        80,
        90,
        101,
        113,
        127,
        144,
        162,
        182,
        203,
        226,
        255,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        2,
        2,
        3,
        3,
        3,
        3,
        4,
        4,
        4,
        6,
        6,
        7,
        7,
        8,
        8,
        9,
        9,
        10,
        10,
        11,
        11,
        12,
        12,
        13,
        13,
        14,
        14,
        15,
        15,
        16,
        16,
        17,
        17,
        18,
        18,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        1,
        1,
        2,
        1,
        1,
        2,
        1,
        1,
        2,
        1,
        2,
        3,
        1,
        2,
        3,
        2,
        2,
        3,
        2,
        2,
        4,
        2,
        3,
        4,
        2,
        3,
        4,
        3,
        3,
        5,
        3,
        4,
        6,
        3,
        4,
        6,
        4,
        5,
        7,
        4,
        5,
        8,
        4,
        6,
        9,
        5,
        7,
        10,
        6,
        8,
        11,
        6,
        8,
        13,
        7,
        10,
        14,
        8,
        11,
        16,
        9,
        12,
        18,
        10,
        13,
        20,
        11,
        15,
        23,
        13,
        17,
        25,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        68,
        69,
        67,
        79,
        68,
        69,
        82,
        32,
        73,
        78,
        73,
        84,
        73,
        65,
        76,
        73,
        90,
        65,
        84,
        73,
        79,
        78,
        32,
        70,
        65,
        73,
        76,
        69,
        68,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "i8",
      Ba,
      z.Pc
    );
    var $a = z.ub(M(12, "i8", L), 8);
    w($a % 8 == 0);
    var U = {
      O: 1,
      Q: 2,
      Ef: 3,
      De: 4,
      ha: 5,
      Zb: 6,
      be: 7,
      $e: 8,
      V: 9,
      oe: 10,
      Ca: 11,
      Of: 11,
      Mc: 12,
      qb: 13,
      ye: 14,
      mf: 15,
      ga: 16,
      Xb: 17,
      Oc: 18,
      Qa: 19,
      Sa: 20,
      pa: 21,
      B: 22,
      Ve: 23,
      Lc: 24,
      Nc: 25,
      Lf: 26,
      ze: 27,
      hf: 28,
      Ua: 29,
      Bf: 30,
      Oe: 31,
      uf: 32,
      ve: 33,
      yf: 34,
      df: 42,
      Be: 43,
      pe: 44,
      Fe: 45,
      Ge: 46,
      He: 47,
      Ne: 48,
      Mf: 49,
      Ye: 50,
      Ee: 51,
      te: 35,
      af: 37,
      ge: 52,
      je: 53,
      Pf: 54,
      We: 55,
      ke: 56,
      le: 57,
      ue: 35,
      me: 59,
      kf: 60,
      Ze: 61,
      If: 62,
      jf: 63,
      ef: 64,
      ff: 65,
      Af: 66,
      bf: 67,
      ee: 68,
      Ff: 69,
      qe: 70,
      vf: 71,
      Qe: 72,
      we: 73,
      ie: 74,
      qf: 76,
      he: 77,
      zf: 78,
      Ie: 79,
      Je: 80,
      Me: 81,
      Le: 82,
      Ke: 83,
      lf: 38,
      sb: 39,
      Re: 36,
      rb: 40,
      Ta: 95,
      tf: 96,
      se: 104,
      Xe: 105,
      fe: 97,
      xf: 91,
      of: 88,
      gf: 92,
      Cf: 108,
      Wb: 111,
      ce: 98,
      re: 103,
      Ue: 101,
      Se: 100,
      Jf: 110,
      Ae: 112,
      Yb: 113,
      Jc: 115,
      Hc: 114,
      Ic: 89,
      Pe: 90,
      wf: 93,
      Df: 94,
      de: 99,
      Te: 102,
      Kc: 106,
      Ra: 107,
      Kf: 109,
      Nf: 87,
      xe: 122,
      Gf: 116,
      pf: 95,
      cf: 123,
      Ce: 84,
      rf: 75,
      ne: 125,
      nf: 131,
      sf: 130,
      Hf: 86
    }, ab = {
      0: "Success",
      1: "Not super-user",
      2: "No such file or directory",
      3: "No such process",
      4: "Interrupted system call",
      5: "I/O error",
      6: "No such device or address",
      7: "Arg list too long",
      8: "Exec format error",
      9: "Bad file number",
      10: "No children",
      11: "No more processes",
      12: "Not enough core",
      13: "Permission denied",
      14: "Bad address",
      15: "Block device required",
      16: "Mount device busy",
      17: "File exists",
      18: "Cross-device link",
      19: "No such device",
      20: "Not a directory",
      21: "Is a directory",
      22: "Invalid argument",
      23: "Too many open files in system",
      24: "Too many open files",
      25: "Not a typewriter",
      26: "Text file busy",
      27: "File too large",
      28: "No space left on device",
      29: "Illegal seek",
      30: "Read only file system",
      31: "Too many links",
      32: "Broken pipe",
      33: "Math arg out of domain of func",
      34: "Math result not representable",
      35: "File locking deadlock error",
      36: "File or path name too long",
      37: "No record locks available",
      38: "Function not implemented",
      39: "Directory not empty",
      40: "Too many symbolic links",
      42: "No message of desired type",
      43: "Identifier removed",
      44: "Channel number out of range",
      45: "Level 2 not synchronized",
      46: "Level 3 halted",
      47: "Level 3 reset",
      48: "Link number out of range",
      49: "Protocol driver not attached",
      50: "No CSI structure available",
      51: "Level 2 halted",
      52: "Invalid exchange",
      53: "Invalid request descriptor",
      54: "Exchange full",
      55: "No anode",
      56: "Invalid request code",
      57: "Invalid slot",
      59: "Bad font file fmt",
      60: "Device not a stream",
      61: "No data (for no delay io)",
      62: "Timer expired",
      63: "Out of streams resources",
      64: "Machine is not on the network",
      65: "Package not installed",
      66: "The object is remote",
      67: "The link has been severed",
      68: "Advertise error",
      69: "Srmount error",
      70: "Communication error on send",
      71: "Protocol error",
      72: "Multihop attempted",
      73: "Cross mount point (not really error)",
      74: "Trying to read unreadable message",
      75: "Value too large for defined data type",
      76: "Given log. name not unique",
      77: "f.d. invalid for this operation",
      78: "Remote address changed",
      79: "Can   access a needed shared lib",
      80: "Accessing a corrupted shared lib",
      81: ".lib section in a.out corrupted",
      82: "Attempting to link in too many libs",
      83: "Attempting to exec a shared library",
      84: "Illegal byte sequence",
      86: "Streams pipe error",
      87: "Too many users",
      88: "Socket operation on non-socket",
      89: "Destination address required",
      90: "Message too long",
      91: "Protocol wrong type for socket",
      92: "Protocol not available",
      93: "Unknown protocol",
      94: "Socket type not supported",
      95: "Not supported",
      96: "Protocol family not supported",
      97: "Address family not supported by protocol family",
      98: "Address already in use",
      99: "Address not available",
      100: "Network interface is not configured",
      101: "Network is unreachable",
      102: "Connection reset by network",
      103: "Connection aborted",
      104: "Connection reset by peer",
      105: "No buffer space available",
      106: "Socket is already connected",
      107: "Socket is not connected",
      108: "Can't send after socket shutdown",
      109: "Too many references",
      110: "Connection timed out",
      111: "Connection refused",
      112: "Host is down",
      113: "Host is unreachable",
      114: "Socket already connected",
      115: "Connection already in progress",
      116: "Stale file handle",
      122: "Quota exceeded",
      123: "No medium (in tape drive)",
      125: "Operation canceled",
      130: "Previous owner died",
      131: "State not recoverable"
    }, bb = 0;
    function V(r0) {
      return K[bb >> 2] = r0;
    }
    function cb(r0, o0) {
      for (var a0 = 0, n0 = r0.length - 1; 0 <= n0; n0--) {
        var u0 = r0[n0];
        u0 === "." ? r0.splice(n0, 1) : u0 === ".." ? (r0.splice(n0, 1), a0++) : a0 && (r0.splice(n0, 1), a0--);
      }
      if (o0) for (; a0--; a0) r0.unshift("..");
      return r0;
    }
    function db(n0) {
      var o0 = n0.charAt(0) === "/", a0 = n0.substr(-1) === "/", n0 = cb(
        n0.split("/").filter(function(u0) {
          return !!u0;
        }),
        !o0
      ).join("/");
      return !n0 && !o0 && (n0 = "."), n0 && a0 && (n0 += "/"), (o0 ? "/" : "") + n0;
    }
    function eb(o0) {
      var a0 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(o0).slice(1), o0 = a0[0], a0 = a0[1];
      return !o0 && !a0 ? "." : (a0 && (a0 = a0.substr(0, a0.length - 1)), o0 + a0);
    }
    function W(r0) {
      if (r0 === "/") return "/";
      var o0 = r0.lastIndexOf("/");
      return o0 === -1 ? r0 : r0.substr(o0 + 1);
    }
    function fb() {
      var r0 = Array.prototype.slice.call(arguments, 0);
      return db(r0.join("/"));
    }
    function X(r0, o0) {
      return db(r0 + "/" + o0);
    }
    function gb() {
      for (var r0 = "", o0 = m, a0 = arguments.length - 1; -1 <= a0 && !o0; a0--) {
        if (o0 = 0 <= a0 ? arguments[a0] : B.yb(), typeof o0 != "string" && d(
          new TypeError(
            "Arguments to path.resolve must be strings"
          )
        ), !o0) return "";
        r0 = o0 + "/" + r0, o0 = o0.charAt(0) === "/";
      }
      return r0 = cb(
        r0.split("/").filter(function(n0) {
          return !!n0;
        }),
        !o0
      ).join("/"), (o0 ? "/" : "") + r0 || ".";
    }
    function hb(r0, o0) {
      function a0(F0) {
        for (var M0 = 0; M0 < F0.length && F0[M0] === ""; M0++) ;
        for (var R0 = F0.length - 1; 0 <= R0 && F0[R0] === ""; R0--) ;
        return M0 > R0 ? [] : F0.slice(M0, R0 - M0 + 1);
      }
      for (var r0 = gb(r0).substr(1), o0 = gb(o0).substr(1), n0 = a0(r0.split("/")), u0 = a0(o0.split("/")), o = Math.min(n0.length, u0.length), l0 = o, b0 = 0; b0 < o; b0++)
        if (n0[b0] !== u0[b0]) {
          l0 = b0;
          break;
        }
      for (o = [], b0 = l0; b0 < n0.length; b0++) o.push("..");
      return o = o.concat(u0.slice(l0)), o.join("/");
    }
    var ib = [];
    function jb(r0, o0) {
      ib[r0] = { input: [], K: [], sa: o0 }, B.Ob(r0, kb);
    }
    var kb = {
      open: function(r0) {
        var o0 = ib[r0.g.ob];
        o0 || d(new B.e(U.Qa)), r0.N = o0, r0.seekable = m;
      },
      close: function(r0) {
        r0.N.sa.flush(r0.N);
      },
      flush: function(r0) {
        r0.N.sa.flush(r0.N);
      },
      M: function(r0, o0, a0, n0) {
        (!r0.N || !r0.N.sa.rc) && d(new B.e(U.Zb));
        for (var u0 = 0, o = 0; o < n0; o++) {
          var l0;
          try {
            l0 = r0.N.sa.rc(r0.N);
          } catch {
            d(new B.e(U.ha));
          }
          if (l0 === g && u0 === 0 && d(new B.e(U.Ca)), l0 === k || l0 === g) break;
          u0++, o0[a0 + o] = l0;
        }
        return u0 && (r0.g.timestamp = Date.now()), u0;
      },
      write: function(r0, o0, a0, n0) {
        (!r0.N || !r0.N.sa.Lb) && d(new B.e(U.Zb));
        for (var u0 = 0; u0 < n0; u0++)
          try {
            r0.N.sa.Lb(r0.N, o0[a0 + u0]);
          } catch {
            d(new B.e(U.ha));
          }
        return n0 && (r0.g.timestamp = Date.now()), u0;
      }
    }, mb = {
      rc: function(r0) {
        if (!r0.input.length) {
          var o0 = k;
          if (typeof window < "u" && typeof window.prompt == "function" ? (o0 = window.prompt("Input: "), o0 !== k && (o0 += `
`)) : typeof readline == "function" && (o0 = readline(), o0 !== k && (o0 += `
`)), !o0) return k;
          r0.input = Va(o0, i);
        }
        return r0.input.shift();
      },
      flush: function(r0) {
        r0.K && 0 < r0.K.length && (p.print(r0.K.join("")), r0.K = []);
      },
      Lb: function(r0, o0) {
        o0 === k || o0 === 10 ? (p.print(r0.K.join("")), r0.K = []) : r0.K.push(lb.nb(o0));
      }
    }, nb = {
      Lb: function(r0, o0) {
        o0 === k || o0 === 10 ? (p.printErr(r0.K.join("")), r0.K = []) : r0.K.push(lb.nb(o0));
      },
      flush: function(r0) {
        r0.K && 0 < r0.K.length && (p.printErr(r0.K.join("")), r0.K = []);
      }
    }, Y = {
      U: k,
      F: function() {
        return Y.createNode(k, "/", 16895, 0);
      },
      createNode: function(r0, o0, a0, n0) {
        return (B.Bd(a0) || B.Cd(a0)) && d(new B.e(U.O)), Y.U || (Y.U = {
          dir: {
            g: {
              S: Y.n.S,
              I: Y.n.I,
              ra: Y.n.ra,
              ba: Y.n.ba,
              rename: Y.n.rename,
              za: Y.n.za,
              Oa: Y.n.Oa,
              Na: Y.n.Na,
              ca: Y.n.ca
            },
            A: { $: Y.p.$ }
          },
          file: {
            g: { S: Y.n.S, I: Y.n.I },
            A: {
              $: Y.p.$,
              M: Y.p.M,
              write: Y.p.write,
              Ea: Y.p.Ea,
              Ja: Y.p.Ja
            }
          },
          link: {
            g: { S: Y.n.S, I: Y.n.I, ta: Y.n.ta },
            A: {}
          },
          ec: { g: { S: Y.n.S, I: Y.n.I }, A: B.bd }
        }), a0 = B.createNode(r0, o0, a0, n0), B.J(a0.mode) ? (a0.n = Y.U.dir.g, a0.p = Y.U.dir.A, a0.k = {}) : B.isFile(a0.mode) ? (a0.n = Y.U.file.g, a0.p = Y.U.file.A, a0.q = 0, a0.k = k) : B.Ia(a0.mode) ? (a0.n = Y.U.link.g, a0.p = Y.U.link.A) : B.ib(a0.mode) && (a0.n = Y.U.ec.g, a0.p = Y.U.ec.A), a0.timestamp = Date.now(), r0 && (r0.k[o0] = a0), a0;
      },
      ud: function(r0) {
        if (r0.k && r0.k.subarray) {
          for (var o0 = [], a0 = 0; a0 < r0.q; ++a0) o0.push(r0.k[a0]);
          return o0;
        }
        return r0.k;
      },
      qg: function(r0) {
        return r0.k ? r0.k.subarray ? r0.k.subarray(0, r0.q) : new Uint8Array(r0.k) : new Uint8Array();
      },
      lc: function(r0, o0) {
        if (r0.k && r0.k.subarray && o0 > r0.k.length && (r0.k = Y.ud(r0), r0.q = r0.k.length), !r0.k || r0.k.subarray) {
          var a0 = r0.k ? r0.k.buffer.byteLength : 0;
          a0 >= o0 || (o0 = Math.max(
            o0,
            a0 * (1048576 > a0 ? 2 : 1.125) | 0
          ), a0 != 0 && (o0 = Math.max(o0, 256)), a0 = r0.k, r0.k = new Uint8Array(o0), 0 < r0.q && r0.k.set(a0.subarray(0, r0.q), 0));
        } else
          for (!r0.k && 0 < o0 && (r0.k = []); r0.k.length < o0; ) r0.k.push(0);
      },
      Ud: function(r0, o0) {
        if (r0.q != o0)
          if (o0 == 0) r0.k = k, r0.q = 0;
          else {
            if (!r0.k || r0.k.subarray) {
              var a0 = r0.k;
              r0.k = new Uint8Array(new ArrayBuffer(o0)), a0 && r0.k.set(a0.subarray(0, Math.min(o0, r0.q)));
            } else if (r0.k || (r0.k = []), r0.k.length > o0)
              r0.k.length = o0;
            else for (; r0.k.length < o0; ) r0.k.push(0);
            r0.q = o0;
          }
      },
      n: {
        S: function(r0) {
          var o0 = {};
          return o0.gg = B.ib(r0.mode) ? r0.id : 1, o0.wg = r0.id, o0.mode = r0.mode, o0.Ig = 1, o0.uid = 0, o0.ug = 0, o0.ob = r0.ob, o0.size = B.J(r0.mode) ? 4096 : B.isFile(r0.mode) ? r0.q : B.Ia(r0.mode) ? r0.link.length : 0, o0.Zf = new Date(r0.timestamp), o0.Hg = new Date(r0.timestamp), o0.eg = new Date(r0.timestamp), o0.Zc = 4096, o0.$f = Math.ceil(o0.size / o0.Zc), o0;
        },
        I: function(r0, o0) {
          o0.mode !== g && (r0.mode = o0.mode), o0.timestamp !== g && (r0.timestamp = o0.timestamp), o0.size !== g && Y.Ud(r0, o0.size);
        },
        ra: function() {
          d(B.Db[U.Q]);
        },
        ba: function(r0, o0, a0, n0) {
          return Y.createNode(r0, o0, a0, n0);
        },
        rename: function(r0, o0, a0) {
          if (B.J(r0.mode)) {
            var n0;
            try {
              n0 = B.aa(o0, a0);
            } catch {
            }
            if (n0) for (var u0 in n0.k) d(new B.e(U.sb));
          }
          delete r0.parent.k[r0.name], r0.name = a0, o0.k[a0] = r0, r0.parent = o0;
        },
        za: function(r0, o0) {
          delete r0.k[o0];
        },
        Oa: function(r0, o0) {
          var a0 = B.aa(r0, o0), n0;
          for (n0 in a0.k) d(new B.e(U.sb));
          delete r0.k[o0];
        },
        Na: function(r0) {
          var o0 = [".", ".."], a0;
          for (a0 in r0.k) r0.k.hasOwnProperty(a0) && o0.push(a0);
          return o0;
        },
        ca: function(r0, o0, a0) {
          return r0 = Y.createNode(r0, o0, 41471, 0), r0.link = a0, r0;
        },
        ta: function(r0) {
          return B.Ia(r0.mode) || d(new B.e(U.B)), r0.link;
        }
      },
      p: {
        M: function(r0, o0, a0, n0, u0) {
          var o = r0.g.k;
          if (u0 >= r0.g.q) return 0;
          if (r0 = Math.min(r0.g.q - u0, n0), w(0 <= r0), 8 < r0 && o.subarray) o0.set(o.subarray(u0, u0 + r0), a0);
          else for (n0 = 0; n0 < r0; n0++) o0[a0 + n0] = o[u0 + n0];
          return r0;
        },
        write: function(r0, o0, a0, n0, u0, o) {
          if (!n0) return 0;
          if (r0 = r0.g, r0.timestamp = Date.now(), o0.subarray && (!r0.k || r0.k.subarray)) {
            if (o)
              return r0.k = o0.subarray(a0, a0 + n0), r0.q = n0;
            if (r0.q === 0 && u0 === 0)
              return r0.k = new Uint8Array(
                o0.subarray(a0, a0 + n0)
              ), r0.q = n0;
            if (u0 + n0 <= r0.q)
              return r0.k.set(o0.subarray(a0, a0 + n0), u0), n0;
          }
          if (Y.lc(r0, u0 + n0), r0.k.subarray && o0.subarray)
            r0.k.set(o0.subarray(a0, a0 + n0), u0);
          else for (o = 0; o < n0; o++) r0.k[u0 + o] = o0[a0 + o];
          return r0.q = Math.max(r0.q, u0 + n0), n0;
        },
        $: function(r0, o0, a0) {
          return a0 === 1 ? o0 += r0.position : a0 === 2 && B.isFile(r0.g.mode) && (o0 += r0.g.q), 0 > o0 && d(new B.e(U.B)), o0;
        },
        Ea: function(r0, o0, a0) {
          Y.lc(r0.g, o0 + a0), r0.g.q = Math.max(r0.g.q, o0 + a0);
        },
        Ja: function(r0, o0, a0, n0, u0, o, l0) {
          return B.isFile(r0.g.mode) || d(new B.e(U.Qa)), a0 = r0.g.k, !(l0 & 2) && (a0.buffer === o0 || a0.buffer === o0.buffer) ? (r0 = m, n0 = a0.byteOffset) : ((0 < u0 || u0 + n0 < r0.g.q) && (a0 = a0.subarray ? a0.subarray(u0, u0 + n0) : Array.prototype.slice.call(a0, u0, u0 + n0)), r0 = i, (n0 = Ca(n0)) || d(new B.e(U.Mc)), o0.set(a0, n0)), { Lg: n0, Yf: r0 };
        }
      }
    }, ob = M(1, "i32*", L), pb = M(1, "i32*", L), qb = M(1, "i32*", L), B = {
      root: k,
      La: [],
      ic: [k],
      oa: [],
      Jd: 1,
      T: k,
      hc: "/",
      hb: m,
      vc: i,
      H: {},
      Gc: { yc: { Rc: 1, Sc: 2 } },
      e: k,
      Db: {},
      sc: function(r0) {
        return r0 instanceof B.e || d(r0 + " : " + Fa()), V(r0.cb);
      },
      u: function(r0, o0) {
        if (r0 = gb(B.yb(), r0), o0 = o0 || {}, !r0) return { path: "", g: k };
        var n0 = { Bb: i, Nb: 0 }, a0;
        for (a0 in n0) o0[a0] === g && (o0[a0] = n0[a0]);
        8 < o0.Nb && d(new B.e(U.rb));
        var n0 = cb(
          r0.split("/").filter(function(b0) {
            return !!b0;
          }),
          m
        ), u0 = B.root;
        a0 = "/";
        for (var o = 0; o < n0.length; o++) {
          var l0 = o === n0.length - 1;
          if (l0 && o0.parent) break;
          if (u0 = B.aa(u0, n0[o]), a0 = X(a0, n0[o]), B.ka(u0) && (!l0 || l0 && o0.Bb) && (u0 = u0.Ka.root), !l0 || o0.R)
            for (l0 = 0; B.Ia(u0.mode); )
              u0 = B.ta(a0), a0 = gb(eb(a0), u0), u0 = B.u(a0, { Nb: o0.Nb }).g, 40 < l0++ && d(new B.e(U.rb));
        }
        return { path: a0, g: u0 };
      },
      da: function(r0) {
        for (var o0; ; ) {
          if (B.jb(r0))
            return r0 = r0.F.Id, o0 ? r0[r0.length - 1] !== "/" ? r0 + "/" + o0 : r0 + o0 : r0;
          o0 = o0 ? r0.name + "/" + o0 : r0.name, r0 = r0.parent;
        }
      },
      Fb: function(r0, o0) {
        for (var a0 = 0, n0 = 0; n0 < o0.length; n0++)
          a0 = (a0 << 5) - a0 + o0.charCodeAt(n0) | 0;
        return (r0 + a0 >>> 0) % B.T.length;
      },
      tc: function(r0) {
        var o0 = B.Fb(r0.parent.id, r0.name);
        r0.ma = B.T[o0], B.T[o0] = r0;
      },
      uc: function(r0) {
        var o0 = B.Fb(r0.parent.id, r0.name);
        if (B.T[o0] === r0) B.T[o0] = r0.ma;
        else
          for (o0 = B.T[o0]; o0; ) {
            if (o0.ma === r0) {
              o0.ma = r0.ma;
              break;
            }
            o0 = o0.ma;
          }
      },
      aa: function(r0, o0) {
        var a0 = B.Gd(r0);
        for (a0 && d(new B.e(a0, r0)), a0 = B.T[B.Fb(r0.id, o0)]; a0; a0 = a0.ma) {
          var n0 = a0.name;
          if (a0.parent.id === r0.id && n0 === o0) return a0;
        }
        return B.ra(r0, o0);
      },
      createNode: function(r0, o0, a0, n0) {
        return B.Va || (B.Va = function(u0, o, l0, b0) {
          u0 || (u0 = this), this.parent = u0, this.F = u0.F, this.Ka = k, this.id = B.Jd++, this.name = o, this.mode = l0, this.n = {}, this.p = {}, this.ob = b0;
        }, B.Va.prototype = {}, Object.defineProperties(B.Va.prototype, {
          M: {
            get: function() {
              return (this.mode & 365) === 365;
            },
            set: function(u0) {
              u0 ? this.mode |= 365 : this.mode &= -366;
            }
          },
          write: {
            get: function() {
              return (this.mode & 146) === 146;
            },
            set: function(u0) {
              u0 ? this.mode |= 146 : this.mode &= -147;
            }
          },
          Dd: {
            get: function() {
              return B.J(this.mode);
            }
          },
          Gb: {
            get: function() {
              return B.ib(this.mode);
            }
          }
        })), r0 = new B.Va(r0, o0, a0, n0), B.tc(r0), r0;
      },
      zb: function(r0) {
        B.uc(r0);
      },
      jb: function(r0) {
        return r0 === r0.parent;
      },
      ka: function(r0) {
        return !!r0.Ka;
      },
      isFile: function(r0) {
        return (r0 & 61440) === 32768;
      },
      J: function(r0) {
        return (r0 & 61440) === 16384;
      },
      Ia: function(r0) {
        return (r0 & 61440) === 40960;
      },
      ib: function(r0) {
        return (r0 & 61440) === 8192;
      },
      Bd: function(r0) {
        return (r0 & 61440) === 24576;
      },
      Cd: function(r0) {
        return (r0 & 61440) === 4096;
      },
      Ed: function(r0) {
        return (r0 & 49152) === 49152;
      },
      rd: {
        r: 0,
        rs: 1052672,
        "r+": 2,
        w: 577,
        wx: 705,
        xw: 705,
        "w+": 578,
        "wx+": 706,
        "xw+": 706,
        a: 1089,
        ax: 1217,
        xa: 1217,
        "a+": 1090,
        "ax+": 1218,
        "xa+": 1218
      },
      wc: function(r0) {
        var o0 = B.rd[r0];
        return typeof o0 > "u" && d(Error("Unknown file open mode: " + r0)), o0;
      },
      sd: function(r0) {
        var o0 = ["r", "w", "rw"][r0 & 2097155];
        return r0 & 512 && (o0 += "w"), o0;
      },
      na: function(r0, o0) {
        return B.vc ? 0 : o0.indexOf("r") !== -1 && !(r0.mode & 292) || o0.indexOf("w") !== -1 && !(r0.mode & 146) || o0.indexOf("x") !== -1 && !(r0.mode & 73) ? U.qb : 0;
      },
      Gd: function(r0) {
        var o0 = B.na(r0, "x");
        return o0 || (r0.n.ra ? 0 : U.qb);
      },
      Jb: function(r0, o0) {
        try {
          return B.aa(r0, o0), U.Xb;
        } catch {
        }
        return B.na(r0, "wx");
      },
      kb: function(r0, o0, a0) {
        var n0;
        try {
          n0 = B.aa(r0, o0);
        } catch (u0) {
          return u0.cb;
        }
        if (r0 = B.na(r0, "wx")) return r0;
        if (a0) {
          if (!B.J(n0.mode)) return U.Sa;
          if (B.jb(n0) || B.da(n0) === B.yb()) return U.ga;
        } else if (B.J(n0.mode)) return U.pa;
        return 0;
      },
      Hd: function(r0, o0) {
        return r0 ? B.Ia(r0.mode) ? U.rb : B.J(r0.mode) && ((o0 & 2097155) !== 0 || o0 & 512) ? U.pa : B.na(r0, B.sd(o0)) : U.Q;
      },
      Qc: 4096,
      Kd: function(r0, o0) {
        for (var o0 = o0 || B.Qc, a0 = r0 || 0; a0 <= o0; a0++)
          if (!B.oa[a0]) return a0;
        d(new B.e(U.Lc));
      },
      qa: function(r0) {
        return B.oa[r0];
      },
      fc: function(r0, o0, a0) {
        B.Wa || (B.Wa = n(), B.Wa.prototype = {}, Object.defineProperties(B.Wa.prototype, {
          object: {
            get: function() {
              return this.g;
            },
            set: function(o) {
              this.g = o;
            }
          },
          yg: {
            get: function() {
              return (this.D & 2097155) !== 1;
            }
          },
          zg: {
            get: function() {
              return (this.D & 2097155) !== 0;
            }
          },
          xg: {
            get: function() {
              return this.D & 1024;
            }
          }
        }));
        var n0 = new B.Wa(), u0;
        for (u0 in r0) n0[u0] = r0[u0];
        return r0 = n0, o0 = B.Kd(o0, a0), r0.C = o0, B.oa[o0] = r0;
      },
      dd: function(r0) {
        B.oa[r0] = k;
      },
      pc: function(r0) {
        return B.oa[r0 - 1];
      },
      Eb: function(r0) {
        return r0 ? r0.C + 1 : 0;
      },
      bd: {
        open: function(r0) {
          r0.p = B.td(r0.g.ob).p, r0.p.open && r0.p.open(r0);
        },
        $: function() {
          d(new B.e(U.Ua));
        }
      },
      Ib: function(r0) {
        return r0 >> 8;
      },
      Gg: function(r0) {
        return r0 & 255;
      },
      la: function(r0, o0) {
        return r0 << 8 | o0;
      },
      Ob: function(r0, o0) {
        B.ic[r0] = { p: o0 };
      },
      td: function(r0) {
        return B.ic[r0];
      },
      nc: function(r0) {
        for (var o0 = [], r0 = [r0]; r0.length; ) {
          var a0 = r0.pop();
          o0.push(a0), r0.push.apply(r0, a0.La);
        }
        return o0;
      },
      Fc: function(r0, o0) {
        function a0(o) {
          if (o) {
            if (!a0.pd) return a0.pd = i, o0(o);
          } else ++u0 >= n0.length && o0(k);
        }
        typeof r0 == "function" && (o0 = r0, r0 = m);
        var n0 = B.nc(B.root.F), u0 = 0;
        n0.forEach(function(o) {
          if (!o.type.Fc) return a0(k);
          o.type.Fc(o, r0, a0);
        });
      },
      F: function(r0, o0, a0) {
        var n0 = a0 === "/", u0 = !a0, o;
        return n0 && B.root && d(new B.e(U.ga)), !n0 && !u0 && (o = B.u(a0, { Bb: m }), a0 = o.path, o = o.g, B.ka(o) && d(new B.e(U.ga)), B.J(o.mode) || d(new B.e(U.Sa))), o0 = { type: r0, Kg: o0, Id: a0, La: [] }, r0 = r0.F(o0), r0.F = o0, o0.root = r0, n0 ? B.root = r0 : o && (o.Ka = o0, o.F && o.F.La.push(o0)), r0;
      },
      Qg: function(o0) {
        o0 = B.u(o0, { Bb: m }), B.ka(o0.g) || d(new B.e(U.B));
        var o0 = o0.g, a0 = o0.Ka, n0 = B.nc(a0);
        Object.keys(B.T).forEach(function(u0) {
          for (u0 = B.T[u0]; u0; ) {
            var o = u0.ma;
            n0.indexOf(u0.F) !== -1 && B.zb(u0), u0 = o;
          }
        }), o0.Ka = k, a0 = o0.F.La.indexOf(a0), w(a0 !== -1), o0.F.La.splice(a0, 1);
      },
      ra: function(r0, o0) {
        return r0.n.ra(r0, o0);
      },
      ba: function(u0, o0, a0) {
        var n0 = B.u(u0, { parent: i }).g, u0 = W(u0);
        (!u0 || u0 === "." || u0 === "..") && d(new B.e(U.B));
        var o = B.Jb(n0, u0);
        return o && d(new B.e(o)), n0.n.ba || d(new B.e(U.O)), n0.n.ba(n0, u0, o0, a0);
      },
      create: function(r0, o0) {
        return o0 = (o0 !== g ? o0 : 438) & 4095, o0 |= 32768, B.ba(r0, o0, 0);
      },
      ea: function(r0, o0) {
        return o0 = (o0 !== g ? o0 : 511) & 1023, o0 |= 16384, B.ba(r0, o0, 0);
      },
      lb: function(r0, o0, a0) {
        return typeof a0 > "u" && (a0 = o0, o0 = 438), B.ba(r0, o0 | 8192, a0);
      },
      ca: function(r0, o0) {
        gb(r0) || d(new B.e(U.Q));
        var a0 = B.u(o0, { parent: i }).g;
        a0 || d(new B.e(U.Q));
        var n0 = W(o0), u0 = B.Jb(a0, n0);
        return u0 && d(new B.e(u0)), a0.n.ca || d(new B.e(U.O)), a0.n.ca(a0, n0, r0);
      },
      rename: function(r0, o0) {
        var a0 = eb(r0), n0 = eb(o0), u0 = W(r0), o = W(o0), l0, b0, F0;
        try {
          l0 = B.u(r0, { parent: i }), b0 = l0.g, l0 = B.u(o0, { parent: i }), F0 = l0.g;
        } catch {
          d(new B.e(U.ga));
        }
        (!b0 || !F0) && d(new B.e(U.Q)), b0.F !== F0.F && d(new B.e(U.Oc)), l0 = B.aa(b0, u0), n0 = hb(r0, n0), n0.charAt(0) !== "." && d(new B.e(U.B)), n0 = hb(o0, a0), n0.charAt(0) !== "." && d(new B.e(U.sb));
        var M0;
        try {
          M0 = B.aa(F0, o);
        } catch {
        }
        if (l0 !== M0) {
          a0 = B.J(l0.mode), (u0 = B.kb(b0, u0, a0)) && d(new B.e(u0)), (u0 = M0 ? B.kb(F0, o, a0) : B.Jb(F0, o)) && d(new B.e(u0)), b0.n.rename || d(new B.e(U.O)), (B.ka(l0) || M0 && B.ka(M0)) && d(new B.e(U.ga)), F0 !== b0 && (u0 = B.na(b0, "w")) && d(new B.e(u0));
          try {
            B.H.willMovePath && B.H.willMovePath(r0, o0);
          } catch (R0) {
            console.log(
              "FS.trackingDelegate['willMovePath']('" + r0 + "', '" + o0 + "') threw an exception: " + R0.message
            );
          }
          B.uc(l0);
          try {
            b0.n.rename(l0, F0, o);
          } catch (R0) {
            d(R0);
          } finally {
            B.tc(l0);
          }
          try {
            B.H.onMovePath && B.H.onMovePath(r0, o0);
          } catch (R0) {
            console.log(
              "FS.trackingDelegate['onMovePath']('" + r0 + "', '" + o0 + "') threw an exception: " + R0.message
            );
          }
        }
      },
      Oa: function(r0) {
        var o0 = B.u(r0, { parent: i }).g, a0 = W(r0), n0 = B.aa(o0, a0), u0 = B.kb(o0, a0, i);
        u0 && d(new B.e(u0)), o0.n.Oa || d(new B.e(U.O)), B.ka(n0) && d(new B.e(U.ga));
        try {
          B.H.willDeletePath && B.H.willDeletePath(r0);
        } catch (o) {
          console.log(
            "FS.trackingDelegate['willDeletePath']('" + r0 + "') threw an exception: " + o.message
          );
        }
        o0.n.Oa(o0, a0), B.zb(n0);
        try {
          B.H.onDeletePath && B.H.onDeletePath(r0);
        } catch (o) {
          console.log(
            "FS.trackingDelegate['onDeletePath']('" + r0 + "') threw an exception: " + o.message
          );
        }
      },
      Na: function(r0) {
        return r0 = B.u(r0, { R: i }).g, r0.n.Na || d(new B.e(U.Sa)), r0.n.Na(r0);
      },
      za: function(r0) {
        var o0 = B.u(r0, { parent: i }).g, a0 = W(r0), n0 = B.aa(o0, a0), u0 = B.kb(o0, a0, m);
        u0 && (u0 === U.pa && (u0 = U.O), d(new B.e(u0))), o0.n.za || d(new B.e(U.O)), B.ka(n0) && d(new B.e(U.ga));
        try {
          B.H.willDeletePath && B.H.willDeletePath(r0);
        } catch (o) {
          console.log(
            "FS.trackingDelegate['willDeletePath']('" + r0 + "') threw an exception: " + o.message
          );
        }
        o0.n.za(o0, a0), B.zb(n0);
        try {
          B.H.onDeletePath && B.H.onDeletePath(r0);
        } catch (o) {
          console.log(
            "FS.trackingDelegate['onDeletePath']('" + r0 + "') threw an exception: " + o.message
          );
        }
      },
      ta: function(r0) {
        return (r0 = B.u(r0).g) || d(new B.e(U.Q)), r0.n.ta || d(new B.e(U.B)), r0.n.ta(r0);
      },
      Dc: function(r0, o0) {
        var a0 = B.u(r0, { R: !o0 }).g;
        return a0 || d(new B.e(U.Q)), a0.n.S || d(new B.e(U.O)), a0.n.S(a0);
      },
      Eg: function(r0) {
        return B.Dc(r0, i);
      },
      Ya: function(r0, o0, a0) {
        r0 = typeof r0 == "string" ? B.u(r0, { R: !a0 }).g : r0, r0.n.I || d(new B.e(U.O)), r0.n.I(r0, {
          mode: o0 & 4095 | r0.mode & -4096,
          timestamp: Date.now()
        });
      },
      Bg: function(r0, o0) {
        B.Ya(r0, o0, i);
      },
      jg: function(r0, o0) {
        var a0 = B.qa(r0);
        a0 || d(new B.e(U.V)), B.Ya(a0.g, o0);
      },
      dc: function(r0, o0, a0, n0) {
        r0 = typeof r0 == "string" ? B.u(r0, { R: !n0 }).g : r0, r0.n.I || d(new B.e(U.O)), r0.n.I(r0, { timestamp: Date.now() });
      },
      Cg: function(r0, o0, a0) {
        B.dc(r0, o0, a0, i);
      },
      kg: function(r0, o0, a0) {
        (r0 = B.qa(r0)) || d(new B.e(U.V)), B.dc(r0.g, o0, a0);
      },
      truncate: function(r0, o0) {
        0 > o0 && d(new B.e(U.B));
        var a0;
        a0 = typeof r0 == "string" ? B.u(r0, { R: i }).g : r0, a0.n.I || d(new B.e(U.O)), B.J(a0.mode) && d(new B.e(U.pa)), B.isFile(a0.mode) || d(new B.e(U.B));
        var n0 = B.na(a0, "w");
        n0 && d(new B.e(n0)), a0.n.I(a0, { size: o0, timestamp: Date.now() });
      },
      mg: function(r0, o0) {
        var a0 = B.qa(r0);
        a0 || d(new B.e(U.V)), (a0.D & 2097155) === 0 && d(new B.e(U.B)), B.truncate(a0.g, o0);
      },
      Rg: function(r0, o0, a0) {
        r0 = B.u(r0, { R: i }).g, r0.n.I(r0, { timestamp: Math.max(o0, a0) });
      },
      open: function(r0, o, l0, n0, u0) {
        r0 === "" && d(new B.e(U.Q));
        var o = typeof o == "string" ? B.wc(o) : o, l0 = o & 64 ? (typeof l0 > "u" ? 438 : l0) & 4095 | 32768 : 0, b0;
        if (typeof r0 == "object") b0 = r0;
        else {
          r0 = db(r0);
          try {
            b0 = B.u(r0, { R: !(o & 131072) }).g;
          } catch {
          }
        }
        var F0 = m;
        o & 64 && (b0 ? o & 128 && d(new B.e(U.Xb)) : (b0 = B.ba(r0, l0, 0), F0 = i)), b0 || d(new B.e(U.Q)), B.ib(b0.mode) && (o &= -513), F0 || (l0 = B.Hd(b0, o)) && d(new B.e(l0)), o & 512 && B.truncate(b0, 0), o &= -641, n0 = B.fc(
          {
            g: b0,
            path: B.da(b0),
            D: o,
            seekable: i,
            position: 0,
            p: b0.p,
            $d: [],
            error: m
          },
          n0,
          u0
        ), n0.p.open && n0.p.open(n0), p.logReadFiles && !(o & 1) && (B.Mb || (B.Mb = {}), r0 in B.Mb || (B.Mb[r0] = 1, p.printErr("read file: " + r0)));
        try {
          B.H.onOpenFile && (u0 = 0, (o & 2097155) !== 1 && (u0 |= B.Gc.yc.Rc), (o & 2097155) !== 0 && (u0 |= B.Gc.yc.Sc), B.H.onOpenFile(r0, u0));
        } catch (M0) {
          console.log(
            "FS.trackingDelegate['onOpenFile']('" + r0 + "', flags) threw an exception: " + M0.message
          );
        }
        return n0;
      },
      close: function(r0) {
        try {
          r0.p.close && r0.p.close(r0);
        } catch (o0) {
          d(o0);
        } finally {
          B.dd(r0.C);
        }
      },
      $: function(r0, o0, a0) {
        return (!r0.seekable || !r0.p.$) && d(new B.e(U.Ua)), r0.position = r0.p.$(r0, o0, a0), r0.$d = [], r0.position;
      },
      M: function(r0, o0, a0, n0, u0) {
        (0 > n0 || 0 > u0) && d(new B.e(U.B)), (r0.D & 2097155) === 1 && d(new B.e(U.V)), B.J(r0.g.mode) && d(new B.e(U.pa)), r0.p.M || d(new B.e(U.B));
        var o = i;
        return typeof u0 > "u" ? (u0 = r0.position, o = m) : r0.seekable || d(new B.e(U.Ua)), o0 = r0.p.M(r0, o0, a0, n0, u0), o || (r0.position += o0), o0;
      },
      write: function(r0, o0, a0, n0, u0, o) {
        (0 > n0 || 0 > u0) && d(new B.e(U.B)), (r0.D & 2097155) === 0 && d(new B.e(U.V)), B.J(r0.g.mode) && d(new B.e(U.pa)), r0.p.write || d(new B.e(U.B)), r0.D & 1024 && B.$(r0, 0, 2);
        var l0 = i;
        typeof u0 > "u" ? (u0 = r0.position, l0 = m) : r0.seekable || d(new B.e(U.Ua)), o0 = r0.p.write(r0, o0, a0, n0, u0, o), l0 || (r0.position += o0);
        try {
          r0.path && B.H.onWriteToFile && B.H.onWriteToFile(r0.path);
        } catch (b0) {
          console.log(
            "FS.trackingDelegate['onWriteToFile']('" + path + "') threw an exception: " + b0.message
          );
        }
        return o0;
      },
      Ea: function(r0, o0, a0) {
        (0 > o0 || 0 >= a0) && d(new B.e(U.B)), (r0.D & 2097155) === 0 && d(new B.e(U.V)), !B.isFile(r0.g.mode) && !B.J(node.mode) && d(new B.e(U.Qa)), r0.p.Ea || d(new B.e(U.Ta)), r0.p.Ea(r0, o0, a0);
      },
      Ja: function(r0, o0, a0, n0, u0, o, l0) {
        return (r0.D & 2097155) === 1 && d(new B.e(U.qb)), r0.p.Ja || d(new B.e(U.Qa)), r0.p.Ja(r0, o0, a0, n0, u0, o, l0);
      },
      Ha: function(r0, o0, a0) {
        return r0.p.Ha || d(new B.e(U.Nc)), r0.p.Ha(r0, o0, a0);
      },
      Mg: function(r0, o0) {
        o0 = o0 || {}, o0.D = o0.D || "r", o0.encoding = o0.encoding || "binary", o0.encoding !== "utf8" && o0.encoding !== "binary" && d(Error('Invalid encoding type "' + o0.encoding + '"'));
        var a0, n0 = B.open(r0, o0.D), u0 = B.Dc(r0).size, o = new Uint8Array(u0);
        if (B.M(n0, o, 0, u0, 0), o0.encoding === "utf8") {
          a0 = "";
          for (var l0 = new z.Da(), b0 = 0; b0 < u0; b0++)
            a0 += l0.nb(o[b0]);
        } else o0.encoding === "binary" && (a0 = o);
        return B.close(n0), a0;
      },
      Sg: function(r0, o0, a0) {
        a0 = a0 || {}, a0.D = a0.D || "w", a0.encoding = a0.encoding || "utf8", a0.encoding !== "utf8" && a0.encoding !== "binary" && d(Error('Invalid encoding type "' + a0.encoding + '"')), r0 = B.open(r0, a0.D, a0.mode), a0.encoding === "utf8" ? (o0 = new Uint8Array(new z.Da().Ac(o0)), B.write(r0, o0, 0, o0.length, 0, a0.ad)) : a0.encoding === "binary" && B.write(r0, o0, 0, o0.length, 0, a0.ad), B.close(r0);
      },
      yb: function() {
        return B.hc;
      },
      bg: function(r0) {
        r0 = B.u(r0, { R: i }), B.J(r0.g.mode) || d(new B.e(U.Sa));
        var o0 = B.na(r0.g, "x");
        o0 && d(new B.e(o0)), B.hc = r0.path;
      },
      fd: function() {
        B.ea("/tmp"), B.ea("/home"), B.ea("/home/web_user");
      },
      ed: function() {
        B.ea("/dev"), B.Ob(B.la(1, 3), {
          M: function() {
            return 0;
          },
          write: function() {
            return 0;
          }
        }), B.lb("/dev/null", B.la(1, 3)), jb(B.la(5, 0), mb), jb(B.la(6, 0), nb), B.lb("/dev/tty", B.la(5, 0)), B.lb("/dev/tty1", B.la(6, 0));
        var r0;
        if (typeof crypto < "u") {
          var o0 = new Uint8Array(1);
          r0 = function() {
            return crypto.getRandomValues(o0), o0[0];
          };
        } else
          r0 = function() {
            return 256 * Math.random() | 0;
          };
        B.X("/dev", "random", r0), B.X("/dev", "urandom", r0), B.ea("/dev/shm"), B.ea("/dev/shm/tmp");
      },
      od: function() {
        p.stdin ? B.X("/dev", "stdin", p.stdin) : B.ca("/dev/tty", "/dev/stdin"), p.stdout ? B.X("/dev", "stdout", k, p.stdout) : B.ca("/dev/tty", "/dev/stdout"), p.stderr ? B.X("/dev", "stderr", k, p.stderr) : B.ca("/dev/tty1", "/dev/stderr");
        var r0 = B.open("/dev/stdin", "r");
        K[ob >> 2] = B.Eb(r0), w(r0.C === 0, "invalid handle for stdin (" + r0.C + ")"), r0 = B.open("/dev/stdout", "w"), K[pb >> 2] = B.Eb(r0), w(r0.C === 1, "invalid handle for stdout (" + r0.C + ")"), r0 = B.open("/dev/stderr", "w"), K[qb >> 2] = B.Eb(r0), w(r0.C === 2, "invalid handle for stderr (" + r0.C + ")");
      },
      jc: function() {
        B.e || (B.e = function(r0, o0) {
          this.g = o0, this.Xd = function(a0) {
            this.cb = a0;
            for (var n0 in U)
              if (U[n0] === a0) {
                this.code = n0;
                break;
              }
          }, this.Xd(r0), this.message = ab[r0];
        }, B.e.prototype = Error(), [U.Q].forEach(function(r0) {
          B.Db[r0] = new B.e(r0), B.Db[r0].stack = "<generic error, no stack>";
        }));
      },
      Zd: function() {
        B.jc(), B.T = Array(4096), B.F(Y, {}, "/"), B.fd(), B.ed();
      },
      Ga: function(r0, o0, a0) {
        w(
          !B.Ga.hb,
          "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"
        ), B.Ga.hb = i, B.jc(), p.stdin = r0 || p.stdin, p.stdout = o0 || p.stdout, p.stderr = a0 || p.stderr, B.od();
      },
      Qd: function() {
        B.Ga.hb = m;
        for (var r0 = 0; r0 < B.oa.length; r0++) {
          var o0 = B.oa[r0];
          o0 && B.close(o0);
        }
      },
      fb: function(r0, o0) {
        var a0 = 0;
        return r0 && (a0 |= 365), o0 && (a0 |= 146), a0;
      },
      Ag: function(r0, o0) {
        var a0 = fb.apply(k, r0);
        return o0 && a0[0] == "/" && (a0 = a0.substr(1)), a0;
      },
      Sf: function(r0, o0) {
        return gb(o0, r0);
      },
      Pg: function(r0) {
        return db(r0);
      },
      lg: function(r0, o0) {
        var a0 = B.vb(r0, o0);
        return a0.Ab ? a0.object : (V(a0.error), k);
      },
      vb: function(r0, o0) {
        try {
          var a0 = B.u(r0, { R: !o0 }), r0 = a0.path;
        } catch {
        }
        var n0 = {
          jb: m,
          Ab: m,
          error: 0,
          name: k,
          path: k,
          object: k,
          Md: m,
          Od: k,
          Nd: k
        };
        try {
          a0 = B.u(r0, { parent: i }), n0.Md = i, n0.Od = a0.path, n0.Nd = a0.g, n0.name = W(r0), a0 = B.u(r0, { R: !o0 }), n0.Ab = i, n0.path = a0.path, n0.object = a0.g, n0.name = a0.g.name, n0.jb = a0.path === "/";
        } catch (u0) {
          n0.error = u0.cb;
        }
        return n0;
      },
      hd: function(r0, o0, a0, n0) {
        return r0 = X(typeof r0 == "string" ? r0 : B.da(r0), o0), B.ea(r0, B.fb(a0, n0));
      },
      ld: function(r0, o0) {
        for (var r0 = typeof r0 == "string" ? r0 : B.da(r0), a0 = o0.split("/").reverse(); a0.length; ) {
          var n0 = a0.pop();
          if (n0) {
            var u0 = X(r0, n0);
            try {
              B.ea(u0);
            } catch {
            }
            r0 = u0;
          }
        }
        return u0;
      },
      gd: function(r0, o0, a0, n0, u0) {
        return r0 = X(typeof r0 == "string" ? r0 : B.da(r0), o0), B.create(r0, B.fb(n0, u0));
      },
      xb: function(r0, o0, a0, n0, u0, o) {
        if (r0 = o0 ? X(typeof r0 == "string" ? r0 : B.da(r0), o0) : r0, n0 = B.fb(n0, u0), u0 = B.create(r0, n0), a0) {
          if (typeof a0 == "string") {
            for (var r0 = Array(a0.length), o0 = 0, l0 = a0.length; o0 < l0; ++o0)
              r0[o0] = a0.charCodeAt(o0);
            a0 = r0;
          }
          B.Ya(u0, n0 | 146), r0 = B.open(u0, "w"), B.write(r0, a0, 0, a0.length, 0, o), B.close(r0), B.Ya(u0, n0);
        }
        return u0;
      },
      X: function(r0, o0, a0, n0) {
        r0 = X(typeof r0 == "string" ? r0 : B.da(r0), o0), o0 = B.fb(!!a0, !!n0), B.X.Ib || (B.X.Ib = 64);
        var u0 = B.la(B.X.Ib++, 0);
        return B.Ob(u0, {
          open: function(o) {
            o.seekable = m;
          },
          close: function() {
            n0 && n0.buffer && n0.buffer.length && n0(10);
          },
          M: function(o, l0, b0, F0) {
            for (var M0 = 0, R0 = 0; R0 < F0; R0++) {
              var f0;
              try {
                f0 = a0();
              } catch {
                d(new B.e(U.ha));
              }
              if (f0 === g && M0 === 0 && d(new B.e(U.Ca)), f0 === k || f0 === g) break;
              M0++, l0[b0 + R0] = f0;
            }
            return M0 && (o.g.timestamp = Date.now()), M0;
          },
          write: function(o, l0, b0, F0) {
            for (var M0 = 0; M0 < F0; M0++)
              try {
                n0(l0[b0 + M0]);
              } catch {
                d(new B.e(U.ha));
              }
            return F0 && (o.g.timestamp = Date.now()), M0;
          }
        }), B.lb(r0, o0, u0);
      },
      kd: function(r0, o0, a0) {
        return r0 = X(typeof r0 == "string" ? r0 : B.da(r0), o0), B.ca(a0, r0);
      },
      mc: function(r0) {
        if (r0.Gb || r0.Dd || r0.link || r0.k) return i;
        var o0 = i;
        if (typeof XMLHttpRequest < "u" && d(
          Error(
            "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."
          )
        ), p.read)
          try {
            r0.k = Va(p.read(r0.url), i), r0.q = r0.k.length;
          } catch {
            o0 = m;
          }
        else
          d(
            Error(
              "Cannot load without read() or XMLHttpRequest."
            )
          );
        return o0 || V(U.ha), o0;
      },
      jd: function(r0, o0, a0, n0, u0) {
        function o() {
          this.Hb = m, this.Za = [];
        }
        if (o.prototype.get = function(M0) {
          if (!(M0 > this.length - 1 || 0 > M0)) {
            var R0 = M0 % this.cd;
            return this.yd(M0 / this.cd | 0)[R0];
          }
        }, o.prototype.Wd = function(M0) {
          this.yd = M0;
        }, o.prototype.bc = function() {
          var M0 = new XMLHttpRequest();
          M0.open("HEAD", a0, m), M0.send(k), 200 <= M0.status && 300 > M0.status || M0.status === 304 || d(
            Error(
              "Couldn't load " + a0 + ". Status: " + M0.status
            )
          );
          var R0 = Number(M0.getResponseHeader("Content-length")), f0, V0 = 1048576;
          (f0 = M0.getResponseHeader("Accept-Ranges")) && f0 === "bytes" || (V0 = R0);
          var C0 = this;
          C0.Wd(function(z0) {
            var X0 = z0 * V0, D0 = (z0 + 1) * V0 - 1, D0 = Math.min(D0, R0 - 1);
            if (typeof C0.Za[z0] > "u") {
              var G0 = C0.Za;
              X0 > D0 && d(
                Error(
                  "invalid range (" + X0 + ", " + D0 + ") or no bytes requested!"
                )
              ), D0 > R0 - 1 && d(
                Error(
                  "only " + R0 + " bytes available! programmer error!"
                )
              );
              var Z0 = new XMLHttpRequest();
              Z0.open("GET", a0, m), R0 !== V0 && Z0.setRequestHeader(
                "Range",
                "bytes=" + X0 + "-" + D0
              ), typeof Uint8Array < "u" && (Z0.responseType = "arraybuffer"), Z0.overrideMimeType && Z0.overrideMimeType(
                "text/plain; charset=x-user-defined"
              ), Z0.send(k), 200 <= Z0.status && 300 > Z0.status || Z0.status === 304 || d(
                Error(
                  "Couldn't load " + a0 + ". Status: " + Z0.status
                )
              ), X0 = Z0.response !== g ? new Uint8Array(Z0.response || []) : Va(Z0.responseText || "", i), G0[z0] = X0;
            }
            return typeof C0.Za[z0] > "u" && d(Error("doXHR failed!")), C0.Za[z0];
          }), this.Uc = R0, this.Tc = V0, this.Hb = i;
        }, typeof XMLHttpRequest < "u") {
          ca || d(
            "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc"
          );
          var l0 = new o();
          Object.defineProperty(l0, "length", {
            get: function() {
              return this.Hb || this.bc(), this.Uc;
            }
          }), Object.defineProperty(l0, "chunkSize", {
            get: function() {
              return this.Hb || this.bc(), this.Tc;
            }
          }), l0 = { Gb: m, k: l0 };
        } else l0 = { Gb: m, url: a0 };
        var b0 = B.gd(r0, o0, l0, n0, u0);
        l0.k ? b0.k = l0.k : l0.url && (b0.k = k, b0.url = l0.url), Object.defineProperty(b0, "usedBytes", {
          get: function() {
            return this.k.length;
          }
        });
        var F0 = {};
        return Object.keys(b0.p).forEach(function(M0) {
          var R0 = b0.p[M0];
          F0[M0] = function() {
            return B.mc(b0) || d(new B.e(U.ha)), R0.apply(k, arguments);
          };
        }), F0.M = function(M0, R0, f0, V0, C0) {
          if (B.mc(b0) || d(new B.e(U.ha)), M0 = M0.g.k, C0 >= M0.length) return 0;
          if (V0 = Math.min(M0.length - C0, V0), w(0 <= V0), M0.slice)
            for (var z0 = 0; z0 < V0; z0++) R0[f0 + z0] = M0[C0 + z0];
          else for (z0 = 0; z0 < V0; z0++) R0[f0 + z0] = M0.get(C0 + z0);
          return V0;
        }, b0.p = F0, b0;
      },
      md: function(r0, o0, a0, n0, u0, o, l0, b0, F0) {
        function M0() {
          rb = document.pointerLockElement === f0 || document.mozPointerLockElement === f0 || document.webkitPointerLockElement === f0 || document.msPointerLockElement === f0;
        }
        function R0(C0) {
          function z0(D0) {
            b0 || B.xb(r0, o0, D0, n0, u0, F0), o && o(), Za();
          }
          var X0 = m;
          p.preloadPlugins.forEach(function(D0) {
            !X0 && D0.canHandle(V0) && (D0.handle(C0, V0, z0, function() {
              l0 && l0(), Za();
            }), X0 = i);
          }), X0 || z0(C0);
        }
        if (p.preloadPlugins || (p.preloadPlugins = []), !tb) {
          tb = i;
          try {
            new Blob(), ub = i;
          } catch {
            ub = m, console.log(
              "warning: no blob constructor, cannot create blobs with mimetypes"
            );
          }
          vb = typeof MozBlobBuilder < "u" ? MozBlobBuilder : typeof WebKitBlobBuilder < "u" ? WebKitBlobBuilder : ub ? k : console.log("warning: no BlobBuilder"), wb = typeof window < "u" ? window.URL ? window.URL : window.webkitURL : g, !p.xc && typeof wb > "u" && (console.log(
            "warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."
          ), p.xc = i), p.preloadPlugins.push({
            canHandle: function(C0) {
              return !p.xc && /\.(jpg|jpeg|png|bmp)$/i.test(C0);
            },
            handle: function(C0, z0, X0, D0) {
              var G0 = k;
              if (ub)
                try {
                  G0 = new Blob([C0], { type: xb(z0) }), G0.size !== C0.length && (G0 = new Blob(
                    [new Uint8Array(C0).buffer],
                    { type: xb(z0) }
                  ));
                } catch (o2) {
                  z.Aa(
                    "Blob constructor present but fails: " + o2 + "; falling back to blob builder"
                  );
                }
              G0 || (G0 = new vb(), G0.append(new Uint8Array(C0).buffer), G0 = G0.getBlob());
              var Z0 = wb.createObjectURL(G0), K0 = new Image();
              K0.onload = function() {
                w(
                  K0.complete,
                  "Image " + z0 + " could not be decoded"
                );
                var o2 = document.createElement("canvas");
                o2.width = K0.width, o2.height = K0.height, o2.getContext("2d").drawImage(K0, 0, 0), p.preloadedImages[z0] = o2, wb.revokeObjectURL(Z0), X0 && X0(C0);
              }, K0.onerror = function() {
                console.log(
                  "Image " + Z0 + " could not be decoded"
                ), D0 && D0();
              }, K0.src = Z0;
            }
          }), p.preloadPlugins.push({
            canHandle: function(C0) {
              return !p.Jg && C0.substr(-4) in { ".ogg": 1, ".wav": 1, ".mp3": 1 };
            },
            handle: function(C0, z0, X0, D0) {
              function G0(u2) {
                K0 || (K0 = i, p.preloadedAudios[z0] = u2, X0 && X0(C0));
              }
              function Z0() {
                K0 || (K0 = i, p.preloadedAudios[z0] = new Audio(), D0 && D0());
              }
              var K0 = m;
              if (ub) {
                try {
                  var o2 = new Blob([C0], { type: xb(z0) });
                } catch {
                  return Z0();
                }
                var o2 = wb.createObjectURL(o2), e2 = new Audio();
                e2.addEventListener(
                  "canplaythrough",
                  function() {
                    G0(e2);
                  },
                  m
                ), e2.onerror = function() {
                  if (!K0) {
                    console.log(
                      "warning: browser could not fully decode audio " + z0 + ", trying slower base64 approach"
                    );
                    for (var u2 = "", re = 0, N2 = 0, h2 = 0; h2 < C0.length; h2++)
                      for (re = re << 8 | C0[h2], N2 += 8; 6 <= N2; )
                        var b2 = re >> N2 - 6 & 63, N2 = N2 - 6, u2 = u2 + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[b2];
                    N2 == 2 ? (u2 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(re & 3) << 4], u2 += "==") : N2 == 4 && (u2 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(re & 15) << 2], u2 += "="), e2.src = "data:audio/x-" + z0.substr(-3) + ";base64," + u2, G0(e2);
                  }
                }, e2.src = o2, p.noExitRuntime = i, setTimeout(function() {
                  H || G0(e2);
                }, 1e4);
              } else return Z0();
            }
          });
          var f0 = p.canvas;
          f0 && (f0.Pb = f0.requestPointerLock || f0.mozRequestPointerLock || f0.webkitRequestPointerLock || f0.msRequestPointerLock || n(), f0.kc = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || n(), f0.kc = f0.kc.bind(document), document.addEventListener(
            "pointerlockchange",
            M0,
            m
          ), document.addEventListener(
            "mozpointerlockchange",
            M0,
            m
          ), document.addEventListener(
            "webkitpointerlockchange",
            M0,
            m
          ), document.addEventListener(
            "mspointerlockchange",
            M0,
            m
          ), p.elementPointerLock && f0.addEventListener(
            "click",
            function(C0) {
              !rb && f0.Pb && (f0.Pb(), C0.preventDefault());
            },
            m
          ));
        }
        var V0 = o0 ? gb(X(r0, o0)) : r0;
        Ya(), typeof a0 == "string" ? yb(
          a0,
          function(C0) {
            R0(C0);
          },
          l0
        ) : R0(a0);
      },
      indexedDB: function() {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },
      Ub: function() {
        return "EM_FS_" + window.location.pathname;
      },
      Vb: 20,
      Ba: "FILE_DATA",
      Og: function(r0, n0, u0) {
        var n0 = n0 || n(), u0 = u0 || n(), o = B.indexedDB();
        try {
          var l0 = o.open(B.Ub(), B.Vb);
        } catch (b0) {
          return u0(b0);
        }
        l0.Ld = function() {
          console.log("creating db"), l0.result.createObjectStore(B.Ba);
        }, l0.onsuccess = function() {
          var b0 = l0.result.transaction([B.Ba], "readwrite"), F0 = b0.objectStore(B.Ba), M0 = 0, R0 = 0, f0 = r0.length;
          r0.forEach(function(V0) {
            V0 = F0.put(B.vb(V0).object.k, V0), V0.onsuccess = function() {
              M0++, M0 + R0 == f0 && (R0 == 0 ? n0() : u0());
            }, V0.onerror = function() {
              R0++, M0 + R0 == f0 && (R0 == 0 ? n0() : u0());
            };
          }), b0.onerror = u0;
        }, l0.onerror = u0;
      },
      Dg: function(r0, n0, u0) {
        var n0 = n0 || n(), u0 = u0 || n(), o = B.indexedDB();
        try {
          var l0 = o.open(B.Ub(), B.Vb);
        } catch (b0) {
          return u0(b0);
        }
        l0.Ld = u0, l0.onsuccess = function() {
          var b0 = l0.result;
          try {
            var F0 = b0.transaction([B.Ba], "readonly");
          } catch (C0) {
            u0(C0);
            return;
          }
          var M0 = F0.objectStore(B.Ba), R0 = 0, f0 = 0, V0 = r0.length;
          r0.forEach(function(C0) {
            var z0 = M0.get(C0);
            z0.onsuccess = function() {
              B.vb(C0).Ab && B.za(C0), B.xb(eb(C0), W(C0), z0.result, i, i, i), R0++, R0 + f0 == V0 && (f0 == 0 ? n0() : u0());
            }, z0.onerror = function() {
              f0++, R0 + f0 == V0 && (f0 == 0 ? n0() : u0());
            };
          }), F0.onerror = u0;
        }, l0.onerror = u0;
      }
    };
    function zb() {
      d("TODO");
    }
    var Z = {
      F: function() {
        return p.websocket = p.websocket && typeof p.websocket == "object" ? p.websocket : {}, p.websocket.tb = {}, p.websocket.on = function(r0, o0) {
          return typeof o0 == "function" && (this.tb[r0] = o0), this;
        }, p.websocket.P = function(r0, o0) {
          typeof this.tb[r0] == "function" && this.tb[r0].call(this, o0);
        }, B.createNode(k, "/", 16895, 0);
      },
      nd: function(r0, o0, a0) {
        return a0 && w(o0 == 1 == (a0 == 6)), r0 = {
          qd: r0,
          type: o0,
          protocol: a0,
          G: k,
          error: k,
          Ma: {},
          Kb: [],
          ua: [],
          wa: Z.L
        }, o0 = Z.mb(), a0 = B.createNode(Z.root, o0, 49152, 0), a0.va = r0, o0 = B.fc({ path: o0, g: a0, D: B.wc("r+"), seekable: m, p: Z.p }), r0.A = o0, r0;
      },
      wd: function(r0) {
        return r0 = B.qa(r0), !r0 || !B.Ed(r0.g.mode) ? k : r0.g.va;
      },
      p: {
        zc: function(r0) {
          return r0 = r0.g.va, r0.wa.zc(r0);
        },
        Ha: function(r0, o0, a0) {
          return r0 = r0.g.va, r0.wa.Ha(r0, o0, a0);
        },
        M: function(r0, o0, a0, n0) {
          return r0 = r0.g.va, n0 = r0.wa.Rd(r0, n0), n0 ? (o0.set(n0.buffer, a0), n0.buffer.length) : 0;
        },
        write: function(r0, o0, a0, n0) {
          return r0 = r0.g.va, r0.wa.Vd(r0, o0, a0, n0);
        },
        close: function(r0) {
          r0 = r0.g.va, r0.wa.close(r0);
        }
      },
      mb: function() {
        return Z.mb.gc || (Z.mb.gc = 0), "socket[" + Z.mb.gc++ + "]";
      },
      L: {
        $a: function(r0, o0, a0) {
          var n0;
          if (typeof o0 == "object" && (n0 = o0, a0 = o0 = k), n0)
            n0._socket ? (o0 = n0._socket.remoteAddress, a0 = n0._socket.remotePort) : ((a0 = /ws[s]?:\/\/([^:]+):(\d+)/.exec(n0.url)) || d(
              Error(
                "WebSocket URL must be in the format ws(s)://address:port"
              )
            ), o0 = a0[1], a0 = parseInt(a0[2], 10));
          else
            try {
              var u0 = p.websocket && typeof p.websocket == "object", o = "ws:#".replace("#", "//");
              if (u0 && typeof p.websocket.url == "string" && (o = p.websocket.url), o === "ws://" || o === "wss://")
                var l0 = o0.split("/"), o = o + l0[0] + ":" + a0 + "/" + l0.slice(1).join("/");
              l0 = "binary", u0 && typeof p.websocket.subprotocol == "string" && (l0 = p.websocket.subprotocol);
              var l0 = l0.replace(/^ +| +$/g, "").split(/ *, */), b0 = t ? { protocol: l0.toString() } : l0;
              n0 = new (t ? null("ws") : window.WebSocket)(o, b0), n0.binaryType = "arraybuffer";
            } catch {
              d(new B.e(U.Yb));
            }
          return o0 = { W: o0, port: a0, o: n0, ab: [] }, Z.L.$b(r0, o0), Z.L.zd(r0, o0), r0.type === 2 && typeof r0.ya < "u" && o0.ab.push(
            new Uint8Array([
              255,
              255,
              255,
              255,
              112,
              111,
              114,
              116,
              (r0.ya & 65280) >> 8,
              r0.ya & 255
            ])
          ), o0;
        },
        gb: function(r0, o0, a0) {
          return r0.Ma[o0 + ":" + a0];
        },
        $b: function(r0, o0) {
          r0.Ma[o0.W + ":" + o0.port] = o0;
        },
        Bc: function(r0, o0) {
          delete r0.Ma[o0.W + ":" + o0.port];
        },
        zd: function(r0, o0) {
          function a0() {
            p.websocket.P("open", r0.A.C);
            try {
              for (var o = o0.ab.shift(); o; )
                o0.o.send(o), o = o0.ab.shift();
            } catch {
              o0.o.close();
            }
          }
          function n0(l0) {
            w(typeof l0 != "string" && l0.byteLength !== g);
            var l0 = new Uint8Array(l0), b0 = u0;
            u0 = m, b0 && l0.length === 10 && l0[0] === 255 && l0[1] === 255 && l0[2] === 255 && l0[3] === 255 && l0[4] === 112 && l0[5] === 111 && l0[6] === 114 && l0[7] === 116 ? (l0 = l0[8] << 8 | l0[9], Z.L.Bc(r0, o0), o0.port = l0, Z.L.$b(r0, o0)) : (r0.ua.push({ W: o0.W, port: o0.port, data: l0 }), p.websocket.P("message", r0.A.C));
          }
          var u0 = i;
          o0.o.onopen = a0, o0.o.onclose = function() {
            p.websocket.P("close", r0.A.C);
          }, o0.o.onmessage = function(o) {
            n0(o.data);
          }, o0.o.onerror = function() {
            r0.error = U.Wb, p.websocket.P("error", [
              r0.A.C,
              r0.error,
              "ECONNREFUSED: Connection refused"
            ]);
          };
        },
        zc: function(r0) {
          if (r0.type === 1 && r0.G) return r0.Kb.length ? 65 : 0;
          var o0 = 0, a0 = r0.type === 1 ? Z.L.gb(r0, r0.Y, r0.Z) : k;
          return (r0.ua.length || !a0 || a0 && a0.o.readyState === a0.o.Pa || a0 && a0.o.readyState === a0.o.CLOSED) && (o0 |= 65), (!a0 || a0 && a0.o.readyState === a0.o.OPEN) && (o0 |= 4), (a0 && a0.o.readyState === a0.o.Pa || a0 && a0.o.readyState === a0.o.CLOSED) && (o0 |= 16), o0;
        },
        Ha: function(r0, o0, a0) {
          switch (o0) {
            case 21531:
              return o0 = 0, r0.ua.length && (o0 = r0.ua[0].data.length), K[a0 >> 2] = o0, 0;
            default:
              return U.B;
          }
        },
        close: function(r0) {
          if (r0.G) {
            try {
              r0.G.close();
            } catch {
            }
            r0.G = k;
          }
          for (var o0 = Object.keys(r0.Ma), a0 = 0; a0 < o0.length; a0++) {
            var n0 = r0.Ma[o0[a0]];
            try {
              n0.o.close();
            } catch {
            }
            Z.L.Bc(r0, n0);
          }
          return 0;
        },
        bind: function(r0, o0, a0) {
          if ((typeof r0.Qb < "u" || typeof r0.ya < "u") && d(new B.e(U.B)), r0.Qb = o0, r0.ya = a0 || zb(), r0.type === 2) {
            r0.G && (r0.G.close(), r0.G = k);
            try {
              r0.wa.Fd(r0, 0);
            } catch (n0) {
              n0 instanceof B.e || d(n0), n0.cb !== U.Ta && d(n0);
            }
          }
        },
        cg: function(r0, o0, a0) {
          if (r0.G && d(new B.e(U.Ta)), typeof r0.Y < "u" && typeof r0.Z < "u") {
            var n0 = Z.L.gb(r0, r0.Y, r0.Z);
            n0 && (n0.o.readyState === n0.o.CONNECTING && d(new B.e(U.Hc)), d(new B.e(U.Kc)));
          }
          o0 = Z.L.$a(r0, o0, a0), r0.Y = o0.W, r0.Z = o0.port, d(new B.e(U.Jc));
        },
        Fd: function(r0) {
          d(new B.e(U.Ta)), r0.G && d(new B.e(U.B));
          var o0 = null("ws").Server;
          r0.G = new o0({ host: r0.Qb, port: r0.ya }), p.websocket.P("listen", r0.A.C), r0.G.on("connection", function(a0) {
            if (r0.type === 1) {
              var n0 = Z.nd(r0.qd, r0.type, r0.protocol), a0 = Z.L.$a(n0, a0);
              n0.Y = a0.W, n0.Z = a0.port, r0.Kb.push(n0), p.websocket.P("connection", n0.A.C);
            } else Z.L.$a(r0, a0), p.websocket.P("connection", r0.A.C);
          }), r0.G.on("closed", function() {
            p.websocket.P("close", r0.A.C), r0.G = k;
          }), r0.G.on("error", function() {
            r0.error = U.Yb, p.websocket.P("error", [
              r0.A.C,
              r0.error,
              "EHOSTUNREACH: Host is unreachable"
            ]);
          });
        },
        accept: function(r0) {
          r0.G || d(new B.e(U.B));
          var o0 = r0.Kb.shift();
          return o0.A.D = r0.A.D, o0;
        },
        tg: function(r0, o0) {
          var a0, n0;
          return o0 ? ((r0.Y === g || r0.Z === g) && d(new B.e(U.Ra)), a0 = r0.Y, n0 = r0.Z) : (a0 = r0.Qb || 0, n0 = r0.ya || 0), { W: a0, port: n0 };
        },
        Vd: function(r0, o0, a0, n0, u0, o) {
          r0.type === 2 ? ((u0 === g || o === g) && (u0 = r0.Y, o = r0.Z), (u0 === g || o === g) && d(new B.e(U.Ic))) : (u0 = r0.Y, o = r0.Z);
          var l0 = Z.L.gb(r0, u0, o);
          if (r0.type === 1 && ((!l0 || l0.o.readyState === l0.o.Pa || l0.o.readyState === l0.o.CLOSED) && d(new B.e(U.Ra)), l0.o.readyState === l0.o.CONNECTING && d(new B.e(U.Ca))), o0 = o0 instanceof Array || o0 instanceof ArrayBuffer ? o0.slice(a0, a0 + n0) : o0.buffer.slice(
            o0.byteOffset + a0,
            o0.byteOffset + a0 + n0
          ), r0.type === 2 && (!l0 || l0.o.readyState !== l0.o.OPEN))
            return (!l0 || l0.o.readyState === l0.o.Pa || l0.o.readyState === l0.o.CLOSED) && (l0 = Z.L.$a(r0, u0, o)), l0.ab.push(o0), n0;
          try {
            return l0.o.send(o0), n0;
          } catch {
            d(new B.e(U.B));
          }
        },
        Rd: function(r0, o0) {
          r0.type === 1 && r0.G && d(new B.e(U.Ra));
          var a0 = r0.ua.shift();
          if (!a0) {
            if (r0.type === 1) {
              var n0 = Z.L.gb(r0, r0.Y, r0.Z);
              if (n0) {
                if (n0.o.readyState === n0.o.Pa || n0.o.readyState === n0.o.CLOSED)
                  return k;
                d(new B.e(U.Ca));
              }
              d(new B.e(U.Ra));
            }
            d(new B.e(U.Ca));
          }
          var n0 = a0.data.byteLength || a0.data.length, u0 = a0.data.byteOffset || 0, o = a0.data.buffer || a0.data, l0 = Math.min(o0, n0), b0 = {
            buffer: new Uint8Array(o, u0, l0),
            W: a0.W,
            port: a0.port
          };
          return r0.type === 1 && l0 < n0 && (a0.data = new Uint8Array(o, u0 + l0, n0 - l0), r0.ua.unshift(a0)), b0;
        }
      }
    };
    function Ab(r0, o0, a0) {
      if (r0 = B.qa(r0), !r0) return V(U.V), -1;
      try {
        return B.write(r0, I, o0, a0);
      } catch (n0) {
        return B.sc(n0), -1;
      }
    }
    p._strlen = Bb;
    function Cb(r0) {
      return r0 = B.pc(r0), r0 ? r0.C : -1;
    }
    function Db(r0, o0) {
      return Ab(Cb(o0), r0, Bb(r0));
    }
    function Eb(r0, o0) {
      var a0;
      return a0 = r0 & 255, a0 = 0 <= a0 ? a0 : Math.pow(2, g) + a0, I[Eb.Cc >> 0] = a0, Ab(Cb(o0), Eb.Cc, 1) == -1 ? ((a0 = B.pc(o0)) && (a0.error = i), -1) : a0;
    }
    function Fb(r0) {
      Fb.$c || (E = E + 4095 & -4096, Fb.$c = i, w(z.bb), Fb.Wc = z.bb, z.bb = function() {
        A("cannot dynamically allocate, sbrk now has control");
      });
      var o0 = E;
      return r0 != 0 && Fb.Wc(r0), o0;
    }
    p._memset = Gb;
    function Hb(r0, o0, a0) {
      window._broadwayOnPictureDecoded(r0, o0, a0);
    }
    p._broadwayOnPictureDecoded = Hb;
    function Ib() {
      window._broadwayOnHeadersDecoded();
    }
    p._broadwayOnHeadersDecoded = Ib;
    function Jb(r0, o0) {
      return Kb = r0, Lb = o0, Mb ? (r0 == 0 ? (Nb = function() {
        setTimeout(Ob, o0);
      }, Pb = "timeout") : r0 == 1 && (Nb = function() {
        Qb(Ob);
      }, Pb = "rAF"), 0) : 1;
    }
    function Rb(r0, o0, a0, n0) {
      p.noExitRuntime = i, w(
        !Mb,
        "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."
      ), Mb = r0, Sb = n0;
      var u0 = Tb;
      Ob = function() {
        if (!H) {
          if (0 < Ub.length) {
            var o = Date.now(), l0 = Ub.shift();
            l0.ja(l0.Xa);
            var b0;
            console.log(
              'main loop blocker "' + l0.name + '" took ' + (Date.now() - o) + " ms"
            ), p.setStatus && (o = p.statusMessage || "Please wait...", l0 = Vb, b0 = Wb.ig, l0 ? l0 < b0 ? p.setStatus(
              o + " (" + (b0 - l0) + "/" + b0 + ")"
            ) : p.setStatus(o) : p.setStatus("")), setTimeout(Ob, 0);
          } else if (!(u0 < Tb))
            if (Xb = Xb + 1 | 0, Kb == 1 && 1 < Lb && Xb % Lb != 0)
              Nb();
            else {
              Pb === "timeout" && p.fg && (p.fa(
                "Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"
              ), Pb = "");
              e: if (!H && !(p.preMainLoop && p.preMainLoop() === m)) {
                try {
                  typeof n0 < "u" ? z.Fa("vi", r0, [n0]) : z.Fa("v", r0);
                } catch (F0) {
                  if (F0 instanceof ia) break e;
                  F0 && typeof F0 == "object" && F0.stack && p.fa(
                    "exception thrown: " + [F0, F0.stack]
                  ), d(F0);
                }
                p.postMainLoop && p.postMainLoop();
              }
              u0 < Tb || (typeof SDL == "object" && SDL.ac && SDL.ac.Pd && SDL.ac.Pd(), Nb());
            }
        }
      }, o0 && 0 < o0 ? Jb(0, 1e3 / o0) : Jb(1, 1), Nb(), a0 && d("SimulateInfiniteLoop");
    }
    var Nb = k, Pb = "", Tb = 0, Mb = k, Sb = 0, Kb = 0, Lb = 0, Xb = 0, Ub = [], Wb = {}, Ob, Vb, Yb = m, rb = m, Zb = m, $b = g, ac = g, bc = 0;
    function cc(r0) {
      var o0 = Date.now();
      if (bc === 0) bc = o0 + 16.666666666666668;
      else for (; o0 + 2 >= bc; ) bc += 16.666666666666668;
      o0 = Math.max(bc - o0, 0), setTimeout(r0, o0);
    }
    function Qb(r0) {
      typeof window > "u" ? cc(r0) : (window.requestAnimationFrame || (window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || cc), window.requestAnimationFrame(r0));
    }
    function xb(r0) {
      return {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        bmp: "image/bmp",
        ogg: "audio/ogg",
        wav: "audio/wav",
        mp3: "audio/mpeg"
      }[r0.substr(r0.lastIndexOf(".") + 1)];
    }
    function yb(r0, o0, a0) {
      function n0() {
        a0 ? a0() : d('Loading data file "' + r0 + '" failed.');
      }
      var u0 = new XMLHttpRequest();
      u0.open("GET", r0, i), u0.responseType = "arraybuffer", u0.onload = function() {
        if (u0.status == 200 || u0.status == 0 && u0.response) {
          var o = u0.response;
          w(
            o,
            'Loading data file "' + r0 + '" failed (no arrayBuffer).'
          ), o0(new Uint8Array(o)), Za();
        } else n0();
      }, u0.onerror = n0, u0.send(k), Ya();
    }
    var dc = [];
    function ec() {
      var r0 = p.canvas;
      dc.forEach(function(o0) {
        o0(r0.width, r0.height);
      });
    }
    function fc(r0, o0, a0) {
      o0 && a0 ? (r0.ae = o0, r0.Ad = a0) : (o0 = r0.ae, a0 = r0.Ad);
      var u0 = o0, o = a0;
      if (p.forcedAspectRatio && 0 < p.forcedAspectRatio && (u0 / o < p.forcedAspectRatio ? u0 = Math.round(o * p.forcedAspectRatio) : o = Math.round(u0 / p.forcedAspectRatio)), (document.webkitFullScreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.mozFullscreenElement || document.fullScreenElement || document.fullscreenElement || document.msFullScreenElement || document.msFullscreenElement || document.webkitCurrentFullScreenElement) === r0.parentNode && typeof screen < "u")
        var n0 = Math.min(screen.width / u0, screen.height / o), u0 = Math.round(u0 * n0), o = Math.round(o * n0);
      ac ? (r0.width != u0 && (r0.width = u0), r0.height != o && (r0.height = o), typeof r0.style < "u" && (r0.style.removeProperty("width"), r0.style.removeProperty("height"))) : (r0.width != o0 && (r0.width = o0), r0.height != a0 && (r0.height = a0), typeof r0.style < "u" && (u0 != o0 || o != a0 ? (r0.style.setProperty(
        "width",
        u0 + "px",
        "important"
      ), r0.style.setProperty(
        "height",
        o + "px",
        "important"
      )) : (r0.style.removeProperty("width"), r0.style.removeProperty("height"))));
    }
    var tb, ub, vb, wb;
    p._memcpy = gc, B.Zd(), R.unshift({
      ja: function() {
        !p.noFSInit && !B.Ga.hb && B.Ga();
      }
    }), Pa.push({
      ja: function() {
        B.vc = m;
      }
    }), Qa.push({
      ja: function() {
        B.Qd();
      }
    }), p.FS_createFolder = B.hd, p.FS_createPath = B.ld, p.FS_createDataFile = B.xb, p.FS_createPreloadedFile = B.md, p.FS_createLazyFile = B.jd, p.FS_createLink = B.kd, p.FS_createDevice = B.X, bb = z.Ec(4), K[bb >> 2] = 0, R.unshift({ ja: n() }), Qa.push({ ja: n() });
    var lb = new z.Da();
    R.push({
      ja: function() {
        Z.root = B.F(Z, {}, k);
      }
    }), Eb.Cc = M([0], "i8", L), p.requestFullScreen = function(r0, o0) {
      function a0() {
        Yb = m;
        var o = n0.parentNode;
        (document.webkitFullScreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.mozFullscreenElement || document.fullScreenElement || document.fullscreenElement || document.msFullScreenElement || document.msFullscreenElement || document.webkitCurrentFullScreenElement) === o ? (n0.cc = document.cancelFullScreen || document.mozCancelFullScreen || document.webkitCancelFullScreen || document.msExitFullscreen || document.exitFullscreen || n(), n0.cc = n0.cc.bind(document), $b && n0.Pb(), Yb = i, ac && (typeof SDL < "u" && (o = Ha[SDL.screen + 0 * z.ia >> 2], K[SDL.screen + 0 * z.ia >> 2] = o | 8388608), ec())) : (o.parentNode.insertBefore(n0, o), o.parentNode.removeChild(o), ac && (typeof SDL < "u" && (o = Ha[SDL.screen + 0 * z.ia >> 2], K[SDL.screen + 0 * z.ia >> 2] = o & -8388609), ec())), p.onFullScreen && p.onFullScreen(Yb), fc(n0);
      }
      $b = r0, ac = o0, typeof $b > "u" && ($b = i), typeof ac > "u" && (ac = m);
      var n0 = p.canvas;
      Zb || (Zb = i, document.addEventListener("fullscreenchange", a0, m), document.addEventListener("mozfullscreenchange", a0, m), document.addEventListener("webkitfullscreenchange", a0, m), document.addEventListener("MSFullscreenChange", a0, m));
      var u0 = document.createElement("div");
      n0.parentNode.insertBefore(u0, n0), u0.appendChild(n0), u0.Td = u0.requestFullScreen || u0.mozRequestFullScreen || u0.msRequestFullscreen || (u0.webkitRequestFullScreen ? function() {
        u0.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      } : k), u0.Td();
    }, p.requestAnimationFrame = function(r0) {
      Qb(r0);
    }, p.setCanvasSize = function(r0, o0, a0) {
      fc(p.canvas, r0, o0), a0 || ec();
    }, p.pauseMainLoop = function() {
      Nb = k, Tb++;
    }, p.resumeMainLoop = function() {
      Tb++;
      var r0 = Kb, o0 = Lb, a0 = Mb;
      Mb = k, Rb(a0, 0, m, Sb), Jb(r0, o0);
    }, p.getUserMedia = function() {
      window.qc || (window.qc = navigator.getUserMedia || navigator.mozGetUserMedia), window.qc(g);
    }, Ja = y = z.ub(D), Ka = Ja + Ma, La = E = z.ub(Ka), w(La < F, "TOTAL_MEMORY not big enough for stack"), p.Xc = {
      Math,
      Int8Array,
      Int16Array,
      Int32Array,
      Uint8Array,
      Uint16Array,
      Uint32Array,
      Float32Array,
      Float64Array
    }, p.Yc = {
      abort: A,
      assert: w,
      min: va,
      invoke_viiiii: function(r0, o0, a0, n0, u0, o) {
        try {
          p.dynCall_viiiii(r0, o0, a0, n0, u0, o);
        } catch (l0) {
          typeof l0 != "number" && l0 !== "longjmp" && d(l0), $.setThrew(1, 0);
        }
      },
      _broadwayOnPictureDecoded: Hb,
      _puts: function(a0) {
        var o0 = K[pb >> 2], a0 = Db(a0, o0);
        return 0 > a0 ? a0 : 0 > Eb(10, o0) ? -1 : a0 + 1;
      },
      _fflush: n(),
      _fputc: Eb,
      _send: function(r0, o0, a0) {
        return Z.wd(r0) ? Ab(r0, o0, a0) : (V(U.V), -1);
      },
      _pwrite: function(r0, o0, a0, n0) {
        if (r0 = B.qa(r0), !r0) return V(U.V), -1;
        try {
          return B.write(r0, I, o0, a0, n0);
        } catch (u0) {
          return B.sc(u0), -1;
        }
      },
      _fputs: Db,
      _emscripten_set_main_loop: Rb,
      _abort: function() {
        p.abort();
      },
      ___setErrNo: V,
      _sbrk: Fb,
      _mkport: zb,
      _emscripten_set_main_loop_timing: Jb,
      _emscripten_memcpy_big: function(r0, o0, a0) {
        return N.set(N.subarray(o0, o0 + a0), r0), r0;
      },
      _fileno: Cb,
      _broadwayOnHeadersDecoded: Ib,
      _write: Ab,
      _time: function(r0) {
        var o0 = Date.now() / 1e3 | 0;
        return r0 && (K[r0 >> 2] = o0), o0;
      },
      _sysconf: function(r0) {
        switch (r0) {
          case 30:
            return 4096;
          case 132:
          case 133:
          case 12:
          case 137:
          case 138:
          case 15:
          case 235:
          case 16:
          case 17:
          case 18:
          case 19:
          case 20:
          case 149:
          case 13:
          case 10:
          case 236:
          case 153:
          case 9:
          case 21:
          case 22:
          case 159:
          case 154:
          case 14:
          case 77:
          case 78:
          case 139:
          case 80:
          case 81:
          case 79:
          case 82:
          case 68:
          case 67:
          case 164:
          case 11:
          case 29:
          case 47:
          case 48:
          case 95:
          case 52:
          case 51:
          case 46:
            return 200809;
          case 27:
          case 246:
          case 127:
          case 128:
          case 23:
          case 24:
          case 160:
          case 161:
          case 181:
          case 182:
          case 242:
          case 183:
          case 184:
          case 243:
          case 244:
          case 245:
          case 165:
          case 178:
          case 179:
          case 49:
          case 50:
          case 168:
          case 169:
          case 175:
          case 170:
          case 171:
          case 172:
          case 97:
          case 76:
          case 32:
          case 173:
          case 35:
            return -1;
          case 176:
          case 177:
          case 7:
          case 155:
          case 8:
          case 157:
          case 125:
          case 126:
          case 92:
          case 93:
          case 129:
          case 130:
          case 131:
          case 94:
          case 91:
            return 1;
          case 74:
          case 60:
          case 69:
          case 70:
          case 4:
            return 1024;
          case 31:
          case 42:
          case 72:
            return 32;
          case 87:
          case 26:
          case 33:
            return 2147483647;
          case 34:
          case 1:
            return 47839;
          case 38:
          case 36:
            return 99;
          case 43:
          case 37:
            return 2048;
          case 0:
            return 2097152;
          case 3:
            return 65536;
          case 28:
            return 32768;
          case 44:
            return 32767;
          case 75:
            return 16384;
          case 39:
            return 1e3;
          case 89:
            return 700;
          case 71:
            return 256;
          case 40:
            return 255;
          case 2:
            return 100;
          case 180:
            return 64;
          case 25:
            return 20;
          case 5:
            return 16;
          case 6:
            return 6;
          case 73:
            return 4;
          case 84:
            return typeof navigator == "object" && navigator.hardwareConcurrency || 1;
        }
        return V(U.B), -1;
      },
      ___errno_location: function() {
        return bb;
      },
      STACKTOP: y,
      STACK_MAX: Ka,
      tempDoublePtr: $a,
      ABORT: H,
      NaN: NaN,
      Infinity: 1 / 0
    };
    var $ = function(r0, o0, a0) {
      var n0 = new r0.Int8Array(a0), u0 = new r0.Int16Array(a0), o = new r0.Int32Array(a0), l0 = new r0.Uint8Array(a0), b0 = new r0.Uint16Array(a0), F0 = new r0.Uint32Array(a0), M0 = new r0.Float32Array(a0), R0 = new r0.Float64Array(a0), f0 = o0.STACKTOP | 0, V0 = o0.STACK_MAX | 0, C0 = o0.tempDoublePtr | 0, z0 = o0.ABORT | 0, X0 = 0, D0 = 0, G0 = 0, Z0 = 0, K0 = +o0.NaN, o2 = +o0.Infinity, e2 = 0, u2 = 0, re = 0, N2 = 0, h2 = 0, b2 = 0, S2 = 0, A2 = 0, L2 = 0, x2 = 0, k2 = 0, d2 = 0, ie = 0, te = 0, Ce = 0, De = 0, K2 = 0, q2 = 0, Ri = 0, Fi = r0.Math.floor, Ci = r0.Math.abs, Di = r0.Math.sqrt, Li = r0.Math.pow, Pi = r0.Math.cos, zi = r0.Math.sin, Ii = r0.Math.tan, Oi = r0.Math.acos, Ni = r0.Math.asin, qi = r0.Math.atan, Yi = r0.Math.atan2, Vi = r0.Math.exp, Hi = r0.Math.log, Gi = r0.Math.ceil, _0 = r0.Math.imul, F1 = o0.abort, Ki = o0.assert, Xi = o0.min, Wi = o0.invoke_viiiii, C1 = o0._broadwayOnPictureDecoded, D1 = o0._puts, $i = o0._fflush, Ji = o0._fputc, Zi = o0._send, Qi = o0._pwrite, ji = o0._fputs, et = o0._emscripten_set_main_loop, I0 = o0._abort, rt = o0.___setErrNo, ce = o0._sbrk, it = o0._mkport, tt = o0._emscripten_set_main_loop_timing, L1 = o0._emscripten_memcpy_big, nt = o0._fileno, P1 = o0._broadwayOnHeadersDecoded, ot = o0._write, z1 = o0._time, I1 = o0._sysconf, O1 = o0.___errno_location, st = 0;
      function N1(u, _, l, P, T, q) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, q = q | 0;
        var C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0, y0 = 0, S0 = 0, E0 = 0, T0 = 0, g0 = 0, U0 = 0, L0 = 0, O0 = 0, Y0 = 0, H0 = 0, Q0 = 0, N0 = 0, J0 = 0, $0 = 0, a2 = 0, V2 = 0, F2 = 0, H2 = 0, t2 = 0, m2 = 0, x0 = 0, n2 = 0, f2 = 0;
        f2 = f0, f0 = f0 + 32 | 0, n2 = f2, t0 = o[T + 4 >> 2] | 0, x0 = (P >>> 0) / (t0 >>> 0) | 0, m2 = x0 << 4, x0 = P - (_0(x0, t0) | 0) << 4, o[n2 + 4 >> 2] = t0, o[n2 + 8 >> 2] = o[T + 8 >> 2], t0 = o[u >> 2] | 0;
        do
          if ((t0 | 0) == 1 | (t0 | 0) == 0) {
            m0 = o[_ + 144 >> 2] | 0, C = u + 4 | 0, j = o[u + 200 >> 2] | 0, (j | 0) != 0 && (o[j + 4 >> 2] | 0) == (o[C >> 2] | 0) ? (o[j >> 2] | 0) >>> 0 < 6 ? (e0 = j + 152 | 0, e0 = b0[e0 >> 1] | b0[e0 + 2 >> 1] << 16, i0 = 1, k0 = e0 & 65535, e0 = e0 >>> 16 & 65535, p0 = o[j + 104 >> 2] | 0) : (i0 = 1, k0 = 0, e0 = 0, p0 = -1) : (i0 = 0, k0 = 0, e0 = 0, p0 = -1), j = o[u + 204 >> 2] | 0, (j | 0) != 0 && (o[j + 4 >> 2] | 0) == (o[C >> 2] | 0) ? (o[j >> 2] | 0) >>> 0 < 6 ? (w0 = j + 172 | 0, w0 = b0[w0 >> 1] | b0[w0 + 2 >> 1] << 16, h0 = w0 & 65535, s0 = 1, c0 = o[j + 108 >> 2] | 0, w0 = w0 >>> 16 & 65535) : (h0 = 0, s0 = 1, c0 = -1, w0 = 0) : (h0 = 0, s0 = 0, c0 = -1, w0 = 0);
            do
              if (t0)
                t2 = 16;
              else if ((i0 | 0) == 0 | (s0 | 0) == 0)
                j = 0, e0 = 0;
              else {
                if ((p0 | 0) == 0 && ((e0 & 65535) << 16 | k0 & 65535 | 0) == 0) {
                  j = 0, e0 = 0;
                  break;
                }
                (c0 | 0) == 0 && ((w0 & 65535) << 16 | h0 & 65535 | 0) == 0 ? (j = 0, e0 = 0) : t2 = 16;
              }
            while (!1);
            if ((t2 | 0) == 16) {
              B0 = u0[_ + 160 >> 1] | 0, v0 = u0[_ + 162 >> 1] | 0, j = o[u + 208 >> 2] | 0, (j | 0) != 0 && (o[j + 4 >> 2] | 0) == (o[C >> 2] | 0) ? (o[j >> 2] | 0) >>> 0 < 6 ? (d0 = j + 172 | 0, t0 = o[j + 108 >> 2] | 0, d0 = b0[d0 >> 1] | b0[d0 + 2 >> 1] << 16, t2 = 25) : (t0 = -1, d0 = 0, t2 = 25) : t2 = 20;
              do
                if ((t2 | 0) == 20) {
                  if (t0 = o[u + 212 >> 2] | 0, (t0 | 0) != 0 && (o[t0 + 4 >> 2] | 0) == (o[C >> 2] | 0)) {
                    if ((o[t0 >> 2] | 0) >>> 0 >= 6) {
                      t0 = -1, d0 = 0, t2 = 25;
                      break;
                    }
                    d0 = t0 + 192 | 0, t0 = o[t0 + 112 >> 2] | 0, d0 = b0[d0 >> 1] | b0[d0 + 2 >> 1] << 16, t2 = 25;
                    break;
                  }
                  (i0 | 0) == 0 | (s0 | 0) != 0 ? (t0 = -1, d0 = 0, t2 = 25) : j = k0;
                }
              while (!1);
              do
                if ((t2 | 0) == 25) {
                  if (i0 = (p0 | 0) == (m0 | 0), j = (c0 | 0) == (m0 | 0), ((j & 1) + (i0 & 1) + ((t0 | 0) == (m0 | 0) & 1) | 0) == 1) {
                    if (i0 | j) {
                      j = i0 ? k0 : h0, e0 = i0 ? e0 : w0;
                      break;
                    }
                    j = d0 & 65535, e0 = d0 >>> 16 & 65535;
                    break;
                  }
                  j = k0 << 16 >> 16, C = h0 << 16 >> 16, t0 = d0 << 16 >> 16, h0 << 16 >> 16 > k0 << 16 >> 16 ? i0 = C : (i0 = j, j = (C | 0) < (j | 0) ? C : j), (i0 | 0) < (t0 | 0) ? t0 = i0 : t0 = (j | 0) > (t0 | 0) ? j : t0, j = e0 << 16 >> 16, i0 = w0 << 16 >> 16, C = d0 >> 16, w0 << 16 >> 16 > e0 << 16 >> 16 ? e0 = i0 : (e0 = j, j = (i0 | 0) < (j | 0) ? i0 : j), (e0 | 0) >= (C | 0) && (e0 = (j | 0) > (C | 0) ? j : C), j = t0 & 65535, e0 = e0 & 65535;
                }
              while (!1);
              if (j = (j & 65535) + (B0 & 65535) | 0, e0 = (e0 & 65535) + (v0 & 65535) | 0, ((j << 16 >> 16) + 8192 | 0) >>> 0 > 16383 || ((e0 << 16 >> 16) + 2048 | 0) >>> 0 > 4095)
                return U0 = 1, f0 = f2, U0 | 0;
              j = j & 65535, e0 = e0 & 65535;
            }
            if (C = pe(l, m0) | 0, C) {
              U0 = u + 132 | 0, T0 = u + 136 | 0, E0 = u + 140 | 0, S0 = u + 144 | 0, y0 = u + 148 | 0, v0 = u + 152 | 0, B0 = u + 156 | 0, A0 = u + 160 | 0, w0 = u + 164 | 0, k0 = u + 168 | 0, i0 = u + 172 | 0, t0 = u + 176 | 0, s0 = u + 180 | 0, c0 = u + 184 | 0, p0 = u + 188 | 0, g0 = u + 192 | 0, u0[u + 192 >> 1] = j, u0[u + 194 >> 1] = e0, g0 = b0[g0 >> 1] | b0[g0 + 2 >> 1] << 16, u0[p0 >> 1] = g0, u0[p0 + 2 >> 1] = g0 >>> 16, u0[c0 >> 1] = g0, u0[c0 + 2 >> 1] = g0 >>> 16, u0[s0 >> 1] = g0, u0[s0 + 2 >> 1] = g0 >>> 16, u0[t0 >> 1] = g0, u0[t0 + 2 >> 1] = g0 >>> 16, u0[i0 >> 1] = g0, u0[i0 + 2 >> 1] = g0 >>> 16, u0[k0 >> 1] = g0, u0[k0 + 2 >> 1] = g0 >>> 16, u0[w0 >> 1] = g0, u0[w0 + 2 >> 1] = g0 >>> 16, u0[A0 >> 1] = g0, u0[A0 + 2 >> 1] = g0 >>> 16, u0[B0 >> 1] = g0, u0[B0 + 2 >> 1] = g0 >>> 16, u0[v0 >> 1] = g0, u0[v0 + 2 >> 1] = g0 >>> 16, u0[y0 >> 1] = g0, u0[y0 + 2 >> 1] = g0 >>> 16, u0[S0 >> 1] = g0, u0[S0 + 2 >> 1] = g0 >>> 16, u0[E0 >> 1] = g0, u0[E0 + 2 >> 1] = g0 >>> 16, u0[T0 >> 1] = g0, u0[T0 + 2 >> 1] = g0 >>> 16, u0[U0 >> 1] = g0, u0[U0 + 2 >> 1] = g0 >>> 16, o[u + 100 >> 2] = m0, o[u + 104 >> 2] = m0, o[u + 108 >> 2] = m0, o[u + 112 >> 2] = m0, o[u + 116 >> 2] = C, o[u + 120 >> 2] = C, o[u + 124 >> 2] = C, o[u + 128 >> 2] = C, o[n2 >> 2] = C, R2(q, u + 132 | 0, n2, x0, m2, 0, 0, 16, 16);
              break;
            } else
              return U0 = 1, f0 = f2, U0 | 0;
          } else if ((t0 | 0) == 3) {
            A0 = u0[_ + 160 >> 1] | 0, B0 = u0[_ + 162 >> 1] | 0, S0 = o[_ + 144 >> 2] | 0, h0 = u + 4 | 0, e0 = o[u + 200 >> 2] | 0, (e0 | 0) != 0 && (o[e0 + 4 >> 2] | 0) == (o[h0 >> 2] | 0) ? (o[e0 >> 2] | 0) >>> 0 < 6 ? (w0 = e0 + 152 | 0, w0 = b0[w0 >> 1] | b0[w0 + 2 >> 1] << 16, j = 1, p0 = w0 & 65535, w0 = w0 >>> 16 & 65535, e0 = o[e0 + 104 >> 2] | 0) : (j = 1, p0 = 0, w0 = 0, e0 = -1) : (j = 0, p0 = 0, w0 = 0, e0 = -1);
            e: do
              if ((e0 | 0) == (S0 | 0))
                j = p0, e0 = w0;
              else {
                e0 = o[u + 204 >> 2] | 0, (e0 | 0) != 0 && (o[e0 + 4 >> 2] | 0) == (o[h0 >> 2] | 0) ? (o[e0 >> 2] | 0) >>> 0 < 6 ? (U0 = e0 + 172 | 0, U0 = b0[U0 >> 1] | b0[U0 + 2 >> 1] << 16, d0 = e0 + 188 | 0, t0 = o[e0 + 108 >> 2] | 0, C = o[e0 + 112 >> 2] | 0, j = U0 & 65535, e0 = U0 >>> 16 & 65535, d0 = b0[d0 >> 1] | b0[d0 + 2 >> 1] << 16) : (t0 = -1, C = -1, j = 0, e0 = 0, d0 = 0) : t2 = 107;
                do
                  if ((t2 | 0) == 107) {
                    if (e0 = o[u + 212 >> 2] | 0, (e0 | 0) != 0 && (o[e0 + 4 >> 2] | 0) == (o[h0 >> 2] | 0)) {
                      if ((o[e0 >> 2] | 0) >>> 0 >= 6) {
                        t0 = -1, C = -1, j = 0, e0 = 0, d0 = 0;
                        break;
                      }
                      d0 = e0 + 192 | 0, t0 = -1, C = o[e0 + 112 >> 2] | 0, j = 0, e0 = 0, d0 = b0[d0 >> 1] | b0[d0 + 2 >> 1] << 16;
                      break;
                    }
                    if (!j)
                      t0 = -1, C = -1, j = 0, e0 = 0, d0 = 0;
                    else {
                      j = p0, e0 = w0;
                      break e;
                    }
                  }
                while (!1);
                if (i0 = (t0 | 0) == (S0 | 0), ((i0 & 1) + ((C | 0) == (S0 | 0) & 1) | 0) == 1) {
                  if (i0) break;
                  j = d0 & 65535, e0 = d0 >>> 16 & 65535;
                  break;
                }
                C = p0 << 16 >> 16, t0 = j << 16 >> 16, s0 = d0 << 16 >> 16, j << 16 >> 16 > p0 << 16 >> 16 ? (i0 = t0, j = C) : (i0 = C, j = (t0 | 0) < (C | 0) ? t0 : C), (i0 | 0) < (s0 | 0) ? s0 = i0 : s0 = (j | 0) > (s0 | 0) ? j : s0, j = w0 << 16 >> 16, i0 = e0 << 16 >> 16, C = d0 >> 16, e0 << 16 >> 16 > w0 << 16 >> 16 ? e0 = i0 : (e0 = j, j = (i0 | 0) < (j | 0) ? i0 : j), (e0 | 0) >= (C | 0) && (e0 = (j | 0) > (C | 0) ? j : C), j = s0 & 65535, e0 = e0 & 65535;
              }
            while (!1);
            if (j = (j & 65535) + (A0 & 65535) | 0, e0 = (e0 & 65535) + (B0 & 65535) | 0, ((j << 16 >> 16) + 8192 | 0) >>> 0 > 16383 || ((e0 << 16 >> 16) + 2048 | 0) >>> 0 > 4095 || (i0 = pe(l, S0) | 0, !i0))
              return U0 = 1, f0 = f2, U0 | 0;
            A0 = u + 132 | 0, v0 = u + 136 | 0, m0 = u + 140 | 0, B0 = u + 144 | 0, U0 = u + 164 | 0, g0 = u + 168 | 0, T0 = u + 172 | 0, w0 = u + 176 | 0, u0[u + 176 >> 1] = j, u0[u + 178 >> 1] = e0, w0 = b0[w0 >> 1] | b0[w0 + 2 >> 1] << 16, u0[T0 >> 1] = w0, u0[T0 + 2 >> 1] = w0 >>> 16, u0[g0 >> 1] = w0, u0[g0 + 2 >> 1] = w0 >>> 16, u0[U0 >> 1] = w0, u0[U0 + 2 >> 1] = w0 >>> 16, u0[B0 >> 1] = w0, u0[B0 + 2 >> 1] = w0 >>> 16, u0[m0 >> 1] = w0, u0[m0 + 2 >> 1] = w0 >>> 16, u0[v0 >> 1] = w0, u0[v0 + 2 >> 1] = w0 >>> 16, u0[A0 >> 1] = w0, u0[A0 + 2 >> 1] = w0 >>> 16, o[u + 100 >> 2] = S0, o[u + 108 >> 2] = S0, A0 = u + 116 | 0, o[A0 >> 2] = i0, o[u + 124 >> 2] = i0, v0 = u0[_ + 164 >> 1] | 0, m0 = u0[_ + 166 >> 1] | 0, B0 = o[_ + 148 >> 2] | 0, e0 = o[u + 208 >> 2] | 0, (e0 | 0) != 0 && (o[e0 + 4 >> 2] | 0) == (o[h0 >> 2] | 0) ? (o[e0 >> 2] | 0) >>> 0 < 6 ? (c0 = e0 + 172 | 0, e0 = o[e0 + 108 >> 2] | 0, t0 = 1, c0 = b0[c0 >> 1] | b0[c0 + 2 >> 1] << 16) : (e0 = -1, t0 = 1, c0 = 0) : (e0 = o[u + 204 >> 2] | 0, (e0 | 0) != 0 && (o[e0 + 4 >> 2] | 0) == (o[h0 >> 2] | 0) ? (o[e0 >> 2] | 0) >>> 0 < 6 ? (c0 = e0 + 176 | 0, e0 = o[e0 + 108 >> 2] | 0, t0 = 1, c0 = b0[c0 >> 1] | b0[c0 + 2 >> 1] << 16) : (e0 = -1, t0 = 1, c0 = 0) : (e0 = -1, t0 = 0, c0 = 0));
            do
              if ((e0 | 0) != (B0 | 0)) {
                if (p0 = w0 & 65535, e0 = w0 >>> 16, k0 = e0 & 65535, j = o[u + 204 >> 2] | 0, (j | 0) != 0 && (o[j + 4 >> 2] | 0) == (o[h0 >> 2] | 0))
                  (o[j >> 2] | 0) >>> 0 < 6 ? (h0 = j + 188 | 0, h0 = b0[h0 >> 1] | b0[h0 + 2 >> 1] << 16, t0 = o[j + 112 >> 2] | 0, C = h0 & 65535, h0 = h0 >>> 16 & 65535) : (t0 = -1, C = 0, h0 = 0);
                else if (t0)
                  t0 = -1, C = 0, h0 = 0;
                else {
                  i0 = w0;
                  break;
                }
                if (i0 = (S0 | 0) == (B0 | 0), j = (t0 | 0) == (B0 | 0), ((j & 1) + (i0 & 1) | 0) == 1) {
                  if (i0) {
                    i0 = w0;
                    break;
                  }
                  if (j) {
                    e0 = h0 & 65535, i0 = e0 << 16 | C & 65535;
                    break;
                  } else {
                    i0 = c0, e0 = c0 >>> 16;
                    break;
                  }
                }
                e0 = w0 << 16 >> 16, t0 = C << 16 >> 16, s0 = c0 << 16 >> 16, C << 16 >> 16 > p0 << 16 >> 16 ? i0 = t0 : (i0 = e0, e0 = (t0 | 0) < (e0 | 0) ? t0 : e0), (i0 | 0) >= (s0 | 0) && (i0 = (e0 | 0) > (s0 | 0) ? e0 : s0), j = w0 >> 16, C = h0 << 16 >> 16, t0 = c0 >> 16, h0 << 16 >> 16 > k0 << 16 >> 16 ? e0 = C : (e0 = j, j = (C | 0) < (j | 0) ? C : j), (e0 | 0) >= (t0 | 0) && (e0 = (j | 0) > (t0 | 0) ? j : t0);
              } else
                i0 = c0, e0 = c0 >>> 16;
            while (!1);
            if (i0 = (i0 & 65535) + (v0 & 65535) | 0, j = (e0 & 65535) + (m0 & 65535) | 0, ((i0 << 16 >> 16) + 8192 | 0) >>> 0 > 16383 || ((j << 16 >> 16) + 2048 | 0) >>> 0 > 4095)
              return U0 = 1, f0 = f2, U0 | 0;
            if (e0 = pe(l, B0) | 0, e0) {
              U0 = u + 148 | 0, T0 = u + 152 | 0, E0 = u + 156 | 0, S0 = u + 160 | 0, y0 = u + 180 | 0, m0 = u + 184 | 0, v0 = u + 188 | 0, g0 = u + 192 | 0, u0[u + 192 >> 1] = i0, u0[u + 194 >> 1] = j, g0 = b0[g0 >> 1] | b0[g0 + 2 >> 1] << 16, u0[v0 >> 1] = g0, u0[v0 + 2 >> 1] = g0 >>> 16, u0[m0 >> 1] = g0, u0[m0 + 2 >> 1] = g0 >>> 16, u0[y0 >> 1] = g0, u0[y0 + 2 >> 1] = g0 >>> 16, u0[S0 >> 1] = g0, u0[S0 + 2 >> 1] = g0 >>> 16, u0[E0 >> 1] = g0, u0[E0 + 2 >> 1] = g0 >>> 16, u0[T0 >> 1] = g0, u0[T0 + 2 >> 1] = g0 >>> 16, u0[U0 >> 1] = g0, u0[U0 + 2 >> 1] = g0 >>> 16, o[u + 104 >> 2] = B0, o[u + 112 >> 2] = B0, g0 = u + 120 | 0, o[g0 >> 2] = e0, o[u + 128 >> 2] = e0, o[n2 >> 2] = o[A0 >> 2], R2(q, u + 132 | 0, n2, x0, m2, 0, 0, 8, 16), o[n2 >> 2] = o[g0 >> 2], R2(q, U0, n2, x0, m2, 8, 0, 8, 16);
              break;
            } else
              return U0 = 1, f0 = f2, U0 | 0;
          } else if ((t0 | 0) == 2) {
            v0 = u0[_ + 160 >> 1] | 0, m0 = u0[_ + 162 >> 1] | 0, S0 = o[_ + 144 >> 2] | 0, y0 = u + 4 | 0, e0 = o[u + 204 >> 2] | 0, (e0 | 0) != 0 && (o[e0 + 4 >> 2] | 0) == (o[y0 >> 2] | 0) ? (o[e0 >> 2] | 0) >>> 0 < 6 ? (w0 = e0 + 172 | 0, w0 = b0[w0 >> 1] | b0[w0 + 2 >> 1] << 16, i0 = 1, e0 = o[e0 + 108 >> 2] | 0, c0 = w0 & 65535, w0 = w0 >>> 16 & 65535) : (i0 = 1, e0 = -1, c0 = 0, w0 = 0) : (i0 = 0, e0 = -1, c0 = 0, w0 = 0);
            e: do
              if ((e0 | 0) == (S0 | 0))
                j = c0, e0 = w0;
              else {
                j = o[u + 200 >> 2] | 0, (j | 0) != 0 && (o[j + 4 >> 2] | 0) == (o[y0 >> 2] | 0) ? (o[j >> 2] | 0) >>> 0 < 6 ? (e0 = j + 152 | 0, e0 = b0[e0 >> 1] | b0[e0 + 2 >> 1] << 16, s0 = 1, p0 = e0 & 65535, e0 = e0 >>> 16 & 65535, t0 = o[j + 104 >> 2] | 0) : (s0 = 1, p0 = 0, e0 = 0, t0 = -1) : (s0 = 0, p0 = 0, e0 = 0, t0 = -1), j = o[u + 208 >> 2] | 0, (j | 0) != 0 && (o[j + 4 >> 2] | 0) == (o[y0 >> 2] | 0) ? (o[j >> 2] | 0) >>> 0 < 6 ? (d0 = j + 172 | 0, j = o[j + 108 >> 2] | 0, d0 = b0[d0 >> 1] | b0[d0 + 2 >> 1] << 16) : (j = -1, d0 = 0) : t2 = 54;
                do
                  if ((t2 | 0) == 54) {
                    if (j = o[u + 212 >> 2] | 0, (j | 0) != 0 && (o[j + 4 >> 2] | 0) == (o[y0 >> 2] | 0)) {
                      if ((o[j >> 2] | 0) >>> 0 >= 6) {
                        j = -1, d0 = 0;
                        break;
                      }
                      d0 = j + 192 | 0, j = o[j + 112 >> 2] | 0, d0 = b0[d0 >> 1] | b0[d0 + 2 >> 1] << 16;
                      break;
                    }
                    if ((s0 | 0) == 0 | (i0 | 0) != 0)
                      j = -1, d0 = 0;
                    else {
                      j = p0;
                      break e;
                    }
                  }
                while (!1);
                if (i0 = (t0 | 0) == (S0 | 0), (((j | 0) == (S0 | 0) & 1) + (i0 & 1) | 0) == 1) {
                  if (i0) {
                    j = i0 ? p0 : c0, e0 = i0 ? e0 : w0;
                    break;
                  }
                  j = d0 & 65535, e0 = d0 >>> 16 & 65535;
                  break;
                }
                j = p0 << 16 >> 16, C = c0 << 16 >> 16, t0 = d0 << 16 >> 16, c0 << 16 >> 16 > p0 << 16 >> 16 ? i0 = C : (i0 = j, j = (C | 0) < (j | 0) ? C : j), (i0 | 0) < (t0 | 0) ? s0 = i0 : s0 = (j | 0) > (t0 | 0) ? j : t0, j = e0 << 16 >> 16, i0 = w0 << 16 >> 16, C = d0 >> 16, w0 << 16 >> 16 > e0 << 16 >> 16 ? e0 = i0 : (e0 = j, j = (i0 | 0) < (j | 0) ? i0 : j), (e0 | 0) >= (C | 0) && (e0 = (j | 0) > (C | 0) ? j : C), j = s0 & 65535, e0 = e0 & 65535;
              }
            while (!1);
            if (j = (j & 65535) + (v0 & 65535) | 0, e0 = (e0 & 65535) + (m0 & 65535) | 0, ((j << 16 >> 16) + 8192 | 0) >>> 0 > 16383 || ((e0 << 16 >> 16) + 2048 | 0) >>> 0 > 4095 || (i0 = pe(l, S0) | 0, !i0))
              return U0 = 1, f0 = f2, U0 | 0;
            m0 = u + 132 | 0, A0 = u + 136 | 0, B0 = u + 140 | 0, v0 = u + 144 | 0, s0 = u + 148 | 0, t0 = u + 152 | 0, U0 = u + 156 | 0, k0 = u + 160 | 0, u0[u + 160 >> 1] = j, u0[u + 162 >> 1] = e0, k0 = b0[k0 >> 1] | b0[k0 + 2 >> 1] << 16, u0[U0 >> 1] = k0, u0[U0 + 2 >> 1] = k0 >>> 16, u0[t0 >> 1] = k0, u0[t0 + 2 >> 1] = k0 >>> 16, u0[s0 >> 1] = k0, u0[s0 + 2 >> 1] = k0 >>> 16, u0[v0 >> 1] = k0, u0[v0 + 2 >> 1] = k0 >>> 16, u0[B0 >> 1] = k0, u0[B0 + 2 >> 1] = k0 >>> 16, u0[A0 >> 1] = k0, u0[A0 + 2 >> 1] = k0 >>> 16, u0[m0 >> 1] = k0, u0[m0 + 2 >> 1] = k0 >>> 16, o[u + 100 >> 2] = S0, o[u + 104 >> 2] = S0, m0 = u + 116 | 0, o[m0 >> 2] = i0, o[u + 120 >> 2] = i0, A0 = u0[_ + 164 >> 1] | 0, B0 = u0[_ + 166 >> 1] | 0, v0 = o[_ + 148 >> 2] | 0, s0 = o[u + 200 >> 2] | 0, t0 = (s0 | 0) == 0, !t0 && (o[s0 + 4 >> 2] | 0) == (o[y0 >> 2] | 0) && (o[s0 >> 2] | 0) >>> 0 < 6 ? (w0 = s0 + 184 | 0, w0 = b0[w0 >> 1] | b0[w0 + 2 >> 1] << 16, c0 = w0 & 65535, w0 = w0 >>> 16 & 65535, e0 = o[s0 + 112 >> 2] | 0) : (c0 = 0, w0 = 0, e0 = -1);
            do
              if ((e0 | 0) != (v0 | 0)) {
                if (p0 = k0 & 65535, j = k0 >>> 16, h0 = j & 65535, !t0 && (o[s0 + 4 >> 2] | 0) == (o[y0 >> 2] | 0) && (o[s0 >> 2] | 0) >>> 0 < 6 ? (d0 = s0 + 160 | 0, t0 = o[s0 + 104 >> 2] | 0, d0 = b0[d0 >> 1] | b0[d0 + 2 >> 1] << 16) : (t0 = -1, d0 = 0), e0 = (S0 | 0) == (v0 | 0), (((t0 | 0) == (v0 | 0) & 1) + (e0 & 1) | 0) == 1) {
                  i0 = e0 ? k0 : d0, e0 = e0 ? j : d0 >>> 16;
                  break;
                }
                e0 = c0 << 16 >> 16, t0 = k0 << 16 >> 16, s0 = d0 << 16 >> 16, p0 << 16 >> 16 > c0 << 16 >> 16 ? i0 = t0 : (i0 = e0, e0 = (t0 | 0) < (e0 | 0) ? t0 : e0), (i0 | 0) >= (s0 | 0) && (i0 = (e0 | 0) > (s0 | 0) ? e0 : s0), j = w0 << 16 >> 16, C = k0 >> 16, t0 = d0 >> 16, h0 << 16 >> 16 > w0 << 16 >> 16 ? e0 = C : (e0 = j, j = (C | 0) < (j | 0) ? C : j), (e0 | 0) >= (t0 | 0) && (e0 = (j | 0) > (t0 | 0) ? j : t0);
              } else
                e0 = w0 & 65535, i0 = e0 << 16 | c0 & 65535;
            while (!1);
            if (i0 = (i0 & 65535) + (A0 & 65535) | 0, j = (e0 & 65535) + (B0 & 65535) | 0, ((i0 << 16 >> 16) + 8192 | 0) >>> 0 > 16383 || ((j << 16 >> 16) + 2048 | 0) >>> 0 > 4095)
              return U0 = 1, f0 = f2, U0 | 0;
            if (e0 = pe(l, v0) | 0, e0) {
              U0 = u + 164 | 0, T0 = u + 168 | 0, E0 = u + 172 | 0, S0 = u + 176 | 0, y0 = u + 180 | 0, B0 = u + 184 | 0, A0 = u + 188 | 0, g0 = u + 192 | 0, u0[u + 192 >> 1] = i0, u0[u + 194 >> 1] = j, g0 = b0[g0 >> 1] | b0[g0 + 2 >> 1] << 16, u0[A0 >> 1] = g0, u0[A0 + 2 >> 1] = g0 >>> 16, u0[B0 >> 1] = g0, u0[B0 + 2 >> 1] = g0 >>> 16, u0[y0 >> 1] = g0, u0[y0 + 2 >> 1] = g0 >>> 16, u0[S0 >> 1] = g0, u0[S0 + 2 >> 1] = g0 >>> 16, u0[E0 >> 1] = g0, u0[E0 + 2 >> 1] = g0 >>> 16, u0[T0 >> 1] = g0, u0[T0 + 2 >> 1] = g0 >>> 16, u0[U0 >> 1] = g0, u0[U0 + 2 >> 1] = g0 >>> 16, o[u + 108 >> 2] = v0, o[u + 112 >> 2] = v0, g0 = u + 124 | 0, o[g0 >> 2] = e0, o[u + 128 >> 2] = e0, o[n2 >> 2] = o[m0 >> 2], R2(q, u + 132 | 0, n2, x0, m2, 0, 0, 16, 8), o[n2 >> 2] = o[g0 >> 2], R2(q, U0, n2, x0, m2, 0, 8, 16, 8);
              break;
            } else
              return U0 = 1, f0 = f2, U0 | 0;
          } else {
            H2 = u + 4 | 0, L0 = 0;
            e: for (; ; ) {
              if (E0 = _ + (L0 << 2) + 176 | 0, U0 = Mr(o[E0 >> 2] | 0) | 0, T0 = _ + (L0 << 2) + 192 | 0, o[u + (L0 << 2) + 100 >> 2] = o[T0 >> 2], g0 = pe(l, o[T0 >> 2] | 0) | 0, o[u + (L0 << 2) + 116 >> 2] = g0, !g0) {
                C = 1, t2 = 212;
                break;
              }
              if (U0) {
                Y0 = L0 << 2, H0 = u + (Y0 << 2) + 132 | 0, $0 = u + (Y0 << 2) + 134 | 0, a2 = Y0 | 1, Q0 = u + (a2 << 2) + 132 | 0, a2 = u + (a2 << 2) + 134 | 0, V2 = Y0 | 2, N0 = u + (V2 << 2) + 132 | 0, V2 = u + (V2 << 2) + 134 | 0, F2 = Y0 | 3, J0 = u + (F2 << 2) + 132 | 0, F2 = u + (F2 << 2) + 134 | 0, O0 = 0;
                do {
                  S0 = u0[_ + (L0 << 4) + (O0 << 2) + 208 >> 1] | 0, y0 = u0[_ + (L0 << 4) + (O0 << 2) + 210 >> 1] | 0, g0 = k1(o[E0 >> 2] | 0) | 0, j = o[T0 >> 2] | 0, p0 = ne(
                    u,
                    o[6288 + (L0 << 7) + (g0 << 5) + (O0 << 3) >> 2] | 0
                  ) | 0, c0 = l0[6288 + (L0 << 7) + (g0 << 5) + (O0 << 3) + 4 >> 0] | 0, (p0 | 0) != 0 && (o[p0 + 4 >> 2] | 0) == (o[H2 >> 2] | 0) ? (o[p0 >> 2] | 0) >>> 0 < 6 ? (s0 = p0 + (c0 << 2) + 132 | 0, s0 = b0[s0 >> 1] | b0[s0 + 2 >> 1] << 16, m0 = o[p0 + (c0 >>> 2 << 2) + 100 >> 2] | 0, e0 = s0 & 65535, v0 = 1, s0 = s0 >>> 16 & 65535) : (m0 = -1, e0 = 0, v0 = 1, s0 = 0) : (m0 = -1, e0 = 0, v0 = 0, s0 = 0), k0 = ne(
                    u,
                    o[5776 + (L0 << 7) + (g0 << 5) + (O0 << 3) >> 2] | 0
                  ) | 0, C = l0[5776 + (L0 << 7) + (g0 << 5) + (O0 << 3) + 4 >> 0] | 0, (k0 | 0) != 0 && (o[k0 + 4 >> 2] | 0) == (o[H2 >> 2] | 0) ? (o[k0 >> 2] | 0) >>> 0 < 6 ? (t0 = k0 + (C << 2) + 132 | 0, t0 = b0[t0 >> 1] | b0[t0 + 2 >> 1] << 16, B0 = 1, A0 = o[k0 + (C >>> 2 << 2) + 100 >> 2] | 0, i0 = t0 & 65535, t0 = t0 >>> 16 & 65535) : (B0 = 1, A0 = -1, i0 = 0, t0 = 0) : (B0 = 0, A0 = -1, i0 = 0, t0 = 0), w0 = ne(
                    u,
                    o[5264 + (L0 << 7) + (g0 << 5) + (O0 << 3) >> 2] | 0
                  ) | 0, k0 = l0[5264 + (L0 << 7) + (g0 << 5) + (O0 << 3) + 4 >> 0] | 0, (w0 | 0) != 0 && (o[w0 + 4 >> 2] | 0) == (o[H2 >> 2] | 0) ? (o[w0 >> 2] | 0) >>> 0 < 6 ? (v0 = w0 + (k0 << 2) + 132 | 0, v0 = b0[v0 >> 1] | b0[v0 + 2 >> 1] << 16, k0 = o[w0 + (k0 >>> 2 << 2) + 100 >> 2] | 0, t2 = 180) : (v0 = 0, k0 = -1, t2 = 180) : t2 = 175;
                  do
                    if ((t2 | 0) == 175) {
                      if (t2 = 0, w0 = ne(
                        u,
                        o[4752 + (L0 << 7) + (g0 << 5) + (O0 << 3) >> 2] | 0
                      ) | 0, k0 = l0[4752 + (L0 << 7) + (g0 << 5) + (O0 << 3) + 4 >> 0] | 0, (w0 | 0) != 0 && (o[w0 + 4 >> 2] | 0) == (o[H2 >> 2] | 0)) {
                        if ((o[w0 >> 2] | 0) >>> 0 >= 6) {
                          v0 = 0, k0 = -1, t2 = 180;
                          break;
                        }
                        v0 = w0 + (k0 << 2) + 132 | 0, v0 = b0[v0 >> 1] | b0[v0 + 2 >> 1] << 16, k0 = o[w0 + (k0 >>> 2 << 2) + 100 >> 2] | 0, t2 = 180;
                        break;
                      }
                      (v0 | 0) == 0 | (B0 | 0) != 0 ? (v0 = 0, k0 = -1, t2 = 180) : (k0 = e0, d0 = s0);
                    }
                  while (!1);
                  do
                    if ((t2 | 0) == 180) {
                      if (C = (m0 | 0) == (j | 0), w0 = (A0 | 0) == (j | 0), ((w0 & 1) + (C & 1) + ((k0 | 0) == (j | 0) & 1) | 0) == 1) {
                        if (C | w0) {
                          k0 = C ? e0 : i0, d0 = C ? s0 : t0;
                          break;
                        }
                        k0 = v0 & 65535, d0 = v0 >>> 16 & 65535;
                        break;
                      }
                      h0 = e0 << 16 >> 16, w0 = i0 << 16 >> 16, C = v0 << 16 >> 16, i0 << 16 >> 16 > e0 << 16 >> 16 ? k0 = w0 : (k0 = h0, h0 = (w0 | 0) < (h0 | 0) ? w0 : h0), (k0 | 0) < (C | 0) ? w0 = k0 : w0 = (h0 | 0) > (C | 0) ? h0 : C, d0 = s0 << 16 >> 16, k0 = t0 << 16 >> 16, C = v0 >> 16, t0 << 16 >> 16 > s0 << 16 >> 16 ? p0 = k0 : (p0 = d0, d0 = (k0 | 0) < (d0 | 0) ? k0 : d0), (p0 | 0) >= (C | 0) && (p0 = (d0 | 0) > (C | 0) ? d0 : C), k0 = w0 & 65535, d0 = p0 & 65535;
                    }
                  while (!1);
                  if (S0 = (k0 & 65535) + (S0 & 65535) | 0, s0 = S0 & 65535, p0 = (d0 & 65535) + (y0 & 65535) | 0, c0 = p0 & 65535, ((S0 << 16 >> 16) + 8192 | 0) >>> 0 > 16383) {
                    C = 1, t2 = 212;
                    break e;
                  }
                  if (((p0 << 16 >> 16) + 2048 | 0) >>> 0 > 4095) {
                    C = 1, t2 = 212;
                    break e;
                  }
                  g0 ? (g0 | 0) == 1 ? (g0 = (O0 << 1) + Y0 | 0, u0[u + (g0 << 2) + 132 >> 1] = s0, u0[u + (g0 << 2) + 134 >> 1] = c0, g0 = g0 | 1, u0[u + (g0 << 2) + 132 >> 1] = s0, u0[u + (g0 << 2) + 134 >> 1] = c0) : (g0 | 0) == 2 ? (g0 = O0 + Y0 | 0, u0[u + (g0 << 2) + 132 >> 1] = s0, u0[u + (g0 << 2) + 134 >> 1] = c0, g0 = g0 + 2 | 0, u0[u + (g0 << 2) + 132 >> 1] = s0, u0[u + (g0 << 2) + 134 >> 1] = c0) : (g0 | 0) == 3 && (g0 = O0 + Y0 | 0, u0[u + (g0 << 2) + 132 >> 1] = s0, u0[u + (g0 << 2) + 134 >> 1] = c0) : (u0[H0 >> 1] = s0, u0[$0 >> 1] = c0, u0[Q0 >> 1] = s0, u0[a2 >> 1] = c0, u0[N0 >> 1] = s0, u0[V2 >> 1] = c0, u0[J0 >> 1] = s0, u0[F2 >> 1] = c0), O0 = O0 + 1 | 0;
                } while (O0 >>> 0 < U0 >>> 0);
              }
              if (L0 = L0 + 1 | 0, L0 >>> 0 >= 4) {
                t2 = 201;
                break;
              }
            }
            if ((t2 | 0) == 201) {
              e0 = 0;
              do
                o[n2 >> 2] = o[u + (e0 << 2) + 116 >> 2], i0 = k1(o[_ + (e0 << 2) + 176 >> 2] | 0) | 0, C = e0 << 3 & 8, j = e0 >>> 0 < 2 ? 0 : 8, i0 ? (i0 | 0) == 1 ? (U0 = e0 << 2, R2(
                  q,
                  u + (U0 << 2) + 132 | 0,
                  n2,
                  x0,
                  m2,
                  C,
                  j,
                  8,
                  4
                ), R2(
                  q,
                  u + ((U0 | 2) << 2) + 132 | 0,
                  n2,
                  x0,
                  m2,
                  C,
                  j | 4,
                  8,
                  4
                )) : (i0 | 0) == 2 ? (U0 = e0 << 2, R2(
                  q,
                  u + (U0 << 2) + 132 | 0,
                  n2,
                  x0,
                  m2,
                  C,
                  j,
                  4,
                  8
                ), R2(
                  q,
                  u + ((U0 | 1) << 2) + 132 | 0,
                  n2,
                  x0,
                  m2,
                  C | 4,
                  j,
                  4,
                  8
                )) : (T0 = e0 << 2, R2(
                  q,
                  u + (T0 << 2) + 132 | 0,
                  n2,
                  x0,
                  m2,
                  C,
                  j,
                  4,
                  4
                ), g0 = C | 4, R2(
                  q,
                  u + ((T0 | 1) << 2) + 132 | 0,
                  n2,
                  x0,
                  m2,
                  g0,
                  j,
                  4,
                  4
                ), U0 = j | 4, R2(
                  q,
                  u + ((T0 | 2) << 2) + 132 | 0,
                  n2,
                  x0,
                  m2,
                  C,
                  U0,
                  4,
                  4
                ), R2(
                  q,
                  u + ((T0 | 3) << 2) + 132 | 0,
                  n2,
                  x0,
                  m2,
                  g0,
                  U0,
                  4,
                  4
                )) : R2(
                  q,
                  u + (e0 << 2 << 2) + 132 | 0,
                  n2,
                  x0,
                  m2,
                  C,
                  j,
                  8,
                  8
                ), e0 = e0 + 1 | 0;
              while ((e0 | 0) != 4);
            } else if ((t2 | 0) == 212)
              return f0 = f2, C | 0;
          }
        while (!1);
        return (o[u + 196 >> 2] | 0) >>> 0 > 1 ? (U0 = 0, f0 = f2, U0 | 0) : o[u >> 2] | 0 ? (rr(T, P, q, _ + 328 | 0), U0 = 0, f0 = f2, U0 | 0) : (Le(T, q), U0 = 0, f0 = f2, U0 | 0);
      }
      function q1(u, _, l, P, T, q, C, i0, j) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, q = q | 0, C = C | 0, i0 = i0 | 0, j = j | 0;
        var e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0, y0 = 0, S0 = 0, E0 = 0, T0 = 0, g0 = 0, U0 = 0, L0 = 0;
        E0 = f0, f0 = f0 + 144 | 0, e0 = E0, (l | 0) >= 0 && !((l + 1 + i0 | 0) >>> 0 > T >>> 0 | (P | 0) < 0 | (j + P | 0) >>> 0 > q >>> 0) ? e0 = u : (S0 = i0 + 1 | 0, E2(u, e0, l, P, T, q, S0, j, S0), E2(
          u + (_0(q, T) | 0) | 0,
          e0 + (_0(S0, j) | 0) | 0,
          l,
          P,
          T,
          q,
          S0,
          j,
          S0
        ), q = j, T = S0, l = 0, P = 0), S0 = 8 - C | 0, A0 = j >>> 1, y0 = (A0 | 0) == 0, B0 = i0 >>> 1, m0 = (B0 | 0) == 0, v0 = 16 - i0 | 0, w0 = (T << 1) - i0 | 0, h0 = T + 1 | 0, k0 = T + 2 | 0, c0 = B0 << 1, d0 = 0;
        do {
          if (j = e0 + ((_0((_0(d0, q) | 0) + P | 0, T) | 0) + l) | 0, !(y0 | m0))
            for (p0 = _ + (d0 << 6) | 0, s0 = A0; ; ) {
              for (i0 = p0, u = j, t0 = B0; g0 = l0[u >> 0] | 0, U0 = l0[u + h0 >> 0] | 0, L0 = u, u = u + 2 | 0, T0 = l0[L0 + 1 >> 0] | 0, n0[i0 + 8 >> 0] = (((_0(U0, C) | 0) + (_0(l0[L0 + T >> 0] | 0, S0) | 0) << 3) + 32 | 0) >>> 6, n0[i0 >> 0] = (((_0(T0, C) | 0) + (_0(g0, S0) | 0) << 3) + 32 | 0) >>> 6, g0 = l0[u >> 0] | 0, n0[i0 + 9 >> 0] = (((_0(l0[L0 + k0 >> 0] | 0, C) | 0) + (_0(U0, S0) | 0) << 3) + 32 | 0) >>> 6, n0[i0 + 1 >> 0] = (((_0(g0, C) | 0) + (_0(T0, S0) | 0) << 3) + 32 | 0) >>> 6, t0 = t0 + -1 | 0, t0; )
                i0 = i0 + 2 | 0;
              if (s0 = s0 + -1 | 0, s0) p0 = p0 + (c0 + v0) | 0, j = j + (c0 + w0) | 0;
              else
                break;
            }
          d0 = d0 + 1 | 0;
        } while ((d0 | 0) != 2);
        f0 = E0;
      }
      function E2(u, _, l, P, T, q, C, i0, j) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, q = q | 0, C = C | 0, i0 = i0 | 0, j = j | 0;
        var e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0;
        if (A0 = f0, e0 = C + l | 0, p0 = i0 + P | 0, w0 = (l | 0) < 0 | (e0 | 0) > (T | 0) ? 2 : 1, s0 = (p0 | 0) < 0 ? 0 - i0 | 0 : P, P = (e0 | 0) < 0 ? 0 - C | 0 : l, s0 = (s0 | 0) > (q | 0) ? q : s0, P = (P | 0) > (T | 0) ? T : P, e0 = P + C | 0, t0 = s0 + i0 | 0, (P | 0) > 0 && (u = u + P | 0), (s0 | 0) > 0 && (u = u + (_0(s0, T) | 0) | 0), k0 = (P | 0) < 0 ? 0 - P | 0 : 0, h0 = (e0 | 0) > (T | 0) ? e0 - T | 0 : 0, d0 = C - k0 - h0 | 0, C = 0 - s0 | 0, s0 = (s0 | 0) < 0 ? C : 0, l = t0 - q | 0, c0 = (t0 | 0) > (q | 0) ? l : 0, e0 = i0 - s0 | 0, P = e0 - c0 | 0, s0) {
          for (s0 = i0 + -1 - ((p0 | 0) > 0 ? p0 : 0) | 0, t0 = ~q, t0 = (s0 | 0) > (t0 | 0) ? s0 : t0, s0 = ~t0, s0 = _0(t0 + ((s0 | 0) > 0 ? s0 : 0) + 1 | 0, j) | 0, t0 = _; Xe[w0 & 3](u, t0, k0, d0, h0), C = C + -1 | 0, C; )
            t0 = t0 + j | 0;
          _ = _ + s0 | 0;
        }
        if ((e0 | 0) != (c0 | 0)) {
          for (t0 = i0 + -1 | 0, C = t0 - ((p0 | 0) > 0 ? p0 : 0) | 0, e0 = ~q, e0 = (C | 0) > (e0 | 0) ? C : e0, t0 = t0 - e0 | 0, C = ~e0, C = i0 + q + -1 - ((t0 | 0) < (q | 0) ? q : t0) - e0 - ((C | 0) > 0 ? C : 0) | 0, e0 = _0(C, j) | 0, C = _0(C, T) | 0, t0 = _, s0 = u; Xe[w0 & 3](s0, t0, k0, d0, h0), P = P + -1 | 0, P; )
            t0 = t0 + j | 0, s0 = s0 + T | 0;
          _ = _ + e0 | 0, u = u + C | 0;
        }
        if (u = u + (0 - T) | 0, !c0) {
          f0 = A0;
          return;
        }
        for (; Xe[w0 & 3](u, _, k0, d0, h0), l = l + -1 | 0, l; )
          _ = _ + j | 0;
        f0 = A0;
      }
      function Y1(u, _, l, P, T, q, C, i0, j) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, q = q | 0, C = C | 0, i0 = i0 | 0, j = j | 0;
        var e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0, y0 = 0, S0 = 0, E0 = 0, T0 = 0, g0 = 0, U0 = 0;
        T0 = f0, f0 = f0 + 144 | 0, e0 = T0, (l | 0) >= 0 && !((i0 + l | 0) >>> 0 > T >>> 0 | (P | 0) < 0) && (P + 1 + j | 0) >>> 0 <= q >>> 0 ? e0 = u : (S0 = j + 1 | 0, E2(u, e0, l, P, T, q, i0, S0, i0), E2(
          u + (_0(q, T) | 0) | 0,
          e0 + (_0(S0, i0) | 0) | 0,
          l,
          P,
          T,
          q,
          i0,
          S0,
          i0
        ), q = S0, T = i0, l = 0, P = 0), E0 = 8 - C | 0, B0 = j >>> 1, S0 = (B0 | 0) == 0, v0 = i0 >>> 1, y0 = (v0 | 0) == 0, m0 = 16 - i0 | 0, A0 = T << 1, w0 = A0 - i0 | 0, k0 = A0 | 1, h0 = T + 1 | 0, c0 = v0 << 1, d0 = 0;
        do {
          if (j = e0 + ((_0((_0(d0, q) | 0) + P | 0, T) | 0) + l) | 0, !(S0 | y0))
            for (p0 = _ + (d0 << 6) | 0, s0 = B0; ; ) {
              for (i0 = p0, u = j, t0 = v0; g0 = l0[u + T >> 0] | 0, U0 = l0[u >> 0] | 0, n0[i0 + 8 >> 0] = (((_0(g0, E0) | 0) + (_0(l0[u + A0 >> 0] | 0, C) | 0) << 3) + 32 | 0) >>> 6, n0[i0 >> 0] = (((_0(U0, E0) | 0) + (_0(g0, C) | 0) << 3) + 32 | 0) >>> 6, g0 = l0[u + h0 >> 0] | 0, U0 = l0[u + 1 >> 0] | 0, n0[i0 + 9 >> 0] = (((_0(g0, E0) | 0) + (_0(l0[u + k0 >> 0] | 0, C) | 0) << 3) + 32 | 0) >>> 6, n0[i0 + 1 >> 0] = (((_0(U0, E0) | 0) + (_0(g0, C) | 0) << 3) + 32 | 0) >>> 6, t0 = t0 + -1 | 0, t0; )
                i0 = i0 + 2 | 0, u = u + 2 | 0;
              if (s0 = s0 + -1 | 0, s0) p0 = p0 + (c0 + m0) | 0, j = j + (c0 + w0) | 0;
              else
                break;
            }
          d0 = d0 + 1 | 0;
        } while ((d0 | 0) != 2);
        f0 = T0;
      }
      function V1(u, _, l, P, T, q, C, i0, j, e0) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, q = q | 0, C = C | 0, i0 = i0 | 0, j = j | 0, e0 = e0 | 0;
        var t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0, y0 = 0, S0 = 0, E0 = 0, T0 = 0, g0 = 0, U0 = 0, L0 = 0, O0 = 0, Y0 = 0, H0 = 0, Q0 = 0, N0 = 0, J0 = 0, $0 = 0;
        H0 = f0, f0 = f0 + 176 | 0, t0 = H0, (l | 0) >= 0 && !((l + 1 + j | 0) >>> 0 > T >>> 0 | (P | 0) < 0) && (P + 1 + e0 | 0) >>> 0 <= q >>> 0 ? t0 = u : (E0 = j + 1 | 0, S0 = e0 + 1 | 0, E2(u, t0, l, P, T, q, E0, S0, E0), E2(
          u + (_0(q, T) | 0) | 0,
          t0 + (_0(S0, E0) | 0) | 0,
          l,
          P,
          T,
          q,
          E0,
          S0,
          E0
        ), q = S0, T = E0, l = 0, P = 0), O0 = 8 - C | 0, Y0 = 8 - i0 | 0, E0 = e0 >>> 1, U0 = (E0 | 0) == 0, S0 = T << 1, T0 = j >>> 1, L0 = (T0 | 0) == 0, g0 = 16 - j | 0, y0 = S0 - j | 0, A0 = T + 1 | 0, B0 = S0 | 1, v0 = T + 2 | 0, m0 = S0 + 2 | 0, h0 = T0 << 1, w0 = 0;
        do {
          if (j = t0 + ((_0((_0(w0, q) | 0) + P | 0, T) | 0) + l) | 0, !(U0 | L0))
            for (k0 = _ + (w0 << 6) | 0, d0 = E0; ; ) {
              for (c0 = l0[j + T >> 0] | 0, e0 = k0, u = j, s0 = (_0(c0, i0) | 0) + (_0(l0[j >> 0] | 0, Y0) | 0) | 0, c0 = (_0(l0[j + S0 >> 0] | 0, i0) | 0) + (_0(c0, Y0) | 0) | 0, p0 = T0; N0 = l0[u + A0 >> 0] | 0, Q0 = (_0(N0, i0) | 0) + (_0(l0[u + 1 >> 0] | 0, Y0) | 0) | 0, N0 = (_0(l0[u + B0 >> 0] | 0, i0) | 0) + (_0(N0, Y0) | 0) | 0, $0 = ((_0(s0, O0) | 0) + 32 + (_0(Q0, C) | 0) | 0) >>> 6, n0[e0 + 8 >> 0] = ((_0(c0, O0) | 0) + 32 + (_0(N0, C) | 0) | 0) >>> 6, n0[e0 >> 0] = $0, $0 = u, u = u + 2 | 0, J0 = l0[$0 + v0 >> 0] | 0, s0 = (_0(J0, i0) | 0) + (_0(l0[u >> 0] | 0, Y0) | 0) | 0, c0 = (_0(l0[$0 + m0 >> 0] | 0, i0) | 0) + (_0(J0, Y0) | 0) | 0, Q0 = ((_0(Q0, O0) | 0) + 32 + (_0(s0, C) | 0) | 0) >>> 6, n0[e0 + 9 >> 0] = ((_0(N0, O0) | 0) + 32 + (_0(c0, C) | 0) | 0) >>> 6, n0[e0 + 1 >> 0] = Q0, p0 = p0 + -1 | 0, p0; )
                e0 = e0 + 2 | 0;
              if (d0 = d0 + -1 | 0, d0) k0 = k0 + (h0 + g0) | 0, j = j + (h0 + y0) | 0;
              else
                break;
            }
          w0 = w0 + 1 | 0;
        } while ((w0 | 0) != 2);
        f0 = H0;
      }
      function H1(u, _, l, P, T, q, C, i0) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, q = q | 0, C = C | 0, i0 = i0 | 0;
        var j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0;
        if (d0 = f0, f0 = f0 + 448 | 0, j = d0, (l | 0) >= 0 && !((C + l | 0) >>> 0 > T >>> 0 | (P | 0) < 0) && (P + 5 + i0 | 0) >>> 0 <= q >>> 0 ? j = u : (E2(u, j, l, P, T, q, C, i0 + 5 | 0, C), T = C, l = 0, P = 0), q = l + T + (_0(P, T) | 0) | 0, u = i0 >>> 2, !u) {
          f0 = d0;
          return;
        }
        if (t0 = T << 2, p0 = 0 - T | 0, s0 = p0 << 1, c0 = T << 1, C)
          e0 = j + q | 0, l = j + (q + (T * 5 | 0)) | 0;
        else {
          f0 = d0;
          return;
        }
        for (; ; ) {
          for (j = C, q = _, i0 = e0, P = l; w0 = l0[P + s0 >> 0] | 0, A0 = l0[P + p0 >> 0] | 0, B0 = l0[P + T >> 0] | 0, m0 = l0[P >> 0] | 0, v0 = B0 + w0 | 0, h0 = l0[i0 + c0 >> 0] | 0, n0[q + 48 >> 0] = n0[((l0[P + c0 >> 0] | 0) + 16 - v0 - (v0 << 2) + h0 + ((m0 + A0 | 0) * 20 | 0) >> 5) + 3984 >> 0] | 0, v0 = h0 + m0 | 0, k0 = l0[i0 + T >> 0] | 0, n0[q + 32 >> 0] = n0[(B0 + 16 - v0 - (v0 << 2) + k0 + ((A0 + w0 | 0) * 20 | 0) >> 5) + 3984 >> 0] | 0, v0 = k0 + A0 | 0, B0 = l0[i0 >> 0] | 0, n0[q + 16 >> 0] = n0[(m0 + 16 - v0 - (v0 << 2) + B0 + ((h0 + w0 | 0) * 20 | 0) >> 5) + 3984 >> 0] | 0, w0 = B0 + w0 | 0, n0[q >> 0] = n0[(A0 + 16 - w0 - (w0 << 2) + (l0[i0 + p0 >> 0] | 0) + ((k0 + h0 | 0) * 20 | 0) >> 5) + 3984 >> 0] | 0, j = j + -1 | 0, j; )
            q = q + 1 | 0, i0 = i0 + 1 | 0, P = P + 1 | 0;
          if (u = u + -1 | 0, u) _ = _ + 64 | 0, e0 = e0 + t0 | 0, l = l + t0 | 0;
          else
            break;
        }
        f0 = d0;
      }
      function t1(u, _, l, P, T, q, C, i0, j) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, q = q | 0, C = C | 0, i0 = i0 | 0, j = j | 0;
        var e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0, y0 = 0, S0 = 0, E0 = 0, T0 = 0;
        if (A0 = f0, f0 = f0 + 448 | 0, e0 = A0, (l | 0) >= 0 && !((C + l | 0) >>> 0 > T >>> 0 | (P | 0) < 0) && (P + 5 + i0 | 0) >>> 0 <= q >>> 0 ? e0 = u : (E2(u, e0, l, P, T, q, C, i0 + 5 | 0, C), T = C, l = 0, P = 0), q = l + T + (_0(P, T) | 0) | 0, u = i0 >>> 2, !u) {
          f0 = A0;
          return;
        }
        for (w0 = (C | 0) == 0, h0 = (T << 2) - C | 0, k0 = 64 - C | 0, d0 = 0 - T | 0, c0 = d0 << 1, p0 = T << 1, l = e0 + q | 0, P = e0 + (q + (_0(T, j + 2 | 0) | 0)) | 0, e0 = e0 + (q + (T * 5 | 0)) | 0; ; ) {
          if (w0)
            q = _, i0 = P;
          else {
            for (i0 = P + C | 0, q = _ + C | 0, j = C, s0 = l, t0 = e0; m0 = l0[t0 + c0 >> 0] | 0, y0 = l0[t0 + d0 >> 0] | 0, S0 = l0[t0 + T >> 0] | 0, T0 = l0[t0 >> 0] | 0, E0 = S0 + m0 | 0, B0 = l0[s0 + p0 >> 0] | 0, n0[_ + 48 >> 0] = ((l0[((l0[t0 + p0 >> 0] | 0) + 16 - E0 - (E0 << 2) + B0 + ((T0 + y0 | 0) * 20 | 0) >> 5) + 3984 >> 0] | 0) + 1 + (l0[P + p0 >> 0] | 0) | 0) >>> 1, E0 = B0 + T0 | 0, v0 = l0[s0 + T >> 0] | 0, n0[_ + 32 >> 0] = ((l0[(S0 + 16 - E0 - (E0 << 2) + v0 + ((y0 + m0 | 0) * 20 | 0) >> 5) + 3984 >> 0] | 0) + 1 + (l0[P + T >> 0] | 0) | 0) >>> 1, E0 = v0 + y0 | 0, S0 = l0[s0 >> 0] | 0, n0[_ + 16 >> 0] = ((l0[(T0 + 16 - E0 - (E0 << 2) + S0 + ((B0 + m0 | 0) * 20 | 0) >> 5) + 3984 >> 0] | 0) + 1 + (l0[P >> 0] | 0) | 0) >>> 1, m0 = S0 + m0 | 0, n0[_ >> 0] = ((l0[(y0 + 16 - m0 - (m0 << 2) + (l0[s0 + d0 >> 0] | 0) + ((v0 + B0 | 0) * 20 | 0) >> 5) + 3984 >> 0] | 0) + 1 + (l0[P + d0 >> 0] | 0) | 0) >>> 1, j = j + -1 | 0, j; )
              _ = _ + 1 | 0, s0 = s0 + 1 | 0, P = P + 1 | 0, t0 = t0 + 1 | 0;
            l = l + C | 0, e0 = e0 + C | 0;
          }
          if (u = u + -1 | 0, u) _ = q + k0 | 0, l = l + h0 | 0, P = i0 + h0 | 0, e0 = e0 + h0 | 0;
          else
            break;
        }
        f0 = A0;
      }
      function G1(u, _, l, P, T, q, C, i0) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, q = q | 0, C = C | 0, i0 = i0 | 0;
        var j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0;
        if (w0 = f0, f0 = f0 + 448 | 0, j = w0, (l | 0) >= 0 && !((l + 5 + C | 0) >>> 0 > T >>> 0 | (P | 0) < 0 | (i0 + P | 0) >>> 0 > q >>> 0) ? j = u : (t0 = C + 5 | 0, E2(u, j, l, P, T, q, t0, i0, t0), T = t0, l = 0, P = 0), !i0) {
          f0 = w0;
          return;
        }
        for (d0 = C >>> 2, k0 = (d0 | 0) == 0, h0 = T - C | 0, p0 = 16 - C | 0, c0 = d0 << 2, u = _, j = j + (l + 5 + (_0(P, T) | 0)) | 0, s0 = i0; ; ) {
          if (k0) q = u;
          else {
            for (q = u + c0 | 0, l = j, T = l0[j + -1 >> 0] | 0, i0 = l0[j + -2 >> 0] | 0, e0 = l0[j + -3 >> 0] | 0, t0 = l0[j + -4 >> 0] | 0, C = l0[j + -5 >> 0] | 0, _ = d0; P = t0 + T | 0, A0 = t0, t0 = l0[l >> 0] | 0, n0[u >> 0] = n0[(C + 16 - P - (P << 2) + t0 + ((e0 + i0 | 0) * 20 | 0) >> 5) + 3984 >> 0] | 0, C = t0 + e0 | 0, P = e0, e0 = l0[l + 1 >> 0] | 0, n0[u + 1 >> 0] = n0[(A0 + 16 - C - (C << 2) + e0 + ((i0 + T | 0) * 20 | 0) >> 5) + 3984 >> 0] | 0, C = e0 + i0 | 0, A0 = i0, i0 = l0[l + 2 >> 0] | 0, n0[u + 2 >> 0] = n0[(P + 16 - C - (C << 2) + i0 + ((t0 + T | 0) * 20 | 0) >> 5) + 3984 >> 0] | 0, C = i0 + T | 0, P = l0[l + 3 >> 0] | 0, n0[u + 3 >> 0] = n0[(A0 + 16 - C - (C << 2) + P + ((e0 + t0 | 0) * 20 | 0) >> 5) + 3984 >> 0] | 0, _ = _ + -1 | 0, _; )
              C = T, u = u + 4 | 0, l = l + 4 | 0, T = P;
            j = j + c0 | 0;
          }
          if (s0 = s0 + -1 | 0, s0) u = q + p0 | 0, j = j + h0 | 0;
          else
            break;
        }
        f0 = w0;
      }
      function n1(u, _, l, P, T, q, C, i0, j) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, q = q | 0, C = C | 0, i0 = i0 | 0, j = j | 0;
        var e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0;
        if (A0 = f0, f0 = f0 + 448 | 0, e0 = A0, (l | 0) >= 0 && !((l + 5 + C | 0) >>> 0 > T >>> 0 | (P | 0) < 0 | (i0 + P | 0) >>> 0 > q >>> 0) ? e0 = u : (s0 = C + 5 | 0, E2(u, e0, l, P, T, q, s0, i0, s0), T = s0, l = 0, P = 0), !i0) {
          f0 = A0;
          return;
        }
        for (h0 = C >>> 2, w0 = (h0 | 0) == 0, k0 = T - C | 0, d0 = 16 - C | 0, p0 = (j | 0) != 0, c0 = h0 << 2, u = _, e0 = e0 + (l + 5 + (_0(P, T) | 0)) | 0; ; ) {
          if (w0) q = u;
          else {
            for (q = u + c0 | 0, j = e0, l = l0[e0 + -1 >> 0] | 0, T = l0[e0 + -2 >> 0] | 0, t0 = l0[e0 + -3 >> 0] | 0, s0 = l0[e0 + -4 >> 0] | 0, C = l0[e0 + -5 >> 0] | 0, _ = h0; P = s0 + l | 0, B0 = s0, s0 = l0[j >> 0] | 0, n0[u >> 0] = ((p0 ? T : t0) + 1 + (l0[(C + 16 - P - (P << 2) + s0 + ((t0 + T | 0) * 20 | 0) >> 5) + 3984 >> 0] | 0) | 0) >>> 1, C = s0 + t0 | 0, P = t0, t0 = l0[j + 1 >> 0] | 0, n0[u + 1 >> 0] = ((p0 ? l : T) + 1 + (l0[(B0 + 16 - C - (C << 2) + t0 + ((T + l | 0) * 20 | 0) >> 5) + 3984 >> 0] | 0) | 0) >>> 1, C = t0 + T | 0, B0 = T, T = l0[j + 2 >> 0] | 0, n0[u + 2 >> 0] = ((p0 ? s0 : l) + 1 + (l0[(P + 16 - C - (C << 2) + T + ((s0 + l | 0) * 20 | 0) >> 5) + 3984 >> 0] | 0) | 0) >>> 1, C = T + l | 0, P = l0[j + 3 >> 0] | 0, n0[u + 3 >> 0] = ((p0 ? t0 : s0) + 1 + (l0[(B0 + 16 - C - (C << 2) + P + ((t0 + s0 | 0) * 20 | 0) >> 5) + 3984 >> 0] | 0) | 0) >>> 1, _ = _ + -1 | 0, _; )
              C = l, u = u + 4 | 0, j = j + 4 | 0, l = P;
            e0 = e0 + c0 | 0;
          }
          if (i0 = i0 + -1 | 0, i0) u = q + d0 | 0, e0 = e0 + k0 | 0;
          else
            break;
        }
        f0 = A0;
      }
      function qe(u, _, l, P, T, q, C, i0, j) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, q = q | 0, C = C | 0, i0 = i0 | 0, j = j | 0;
        var e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0, y0 = 0, S0 = 0, E0 = 0;
        if (y0 = f0, f0 = f0 + 448 | 0, e0 = y0, (l | 0) >= 0 && !((l + 5 + C | 0) >>> 0 > T >>> 0 | (P | 0) < 0) && (P + 5 + i0 | 0) >>> 0 <= q >>> 0 ? e0 = u : (m0 = C + 5 | 0, E2(u, e0, l, P, T, q, m0, i0 + 5 | 0, m0), T = m0, l = 0, P = 0), u = (_0(P, T) | 0) + l | 0, m0 = (j & 1 | 2) + T + u | 0, t0 = e0 + m0 | 0, !i0) {
          f0 = y0;
          return;
        }
        for (w0 = C >>> 2, B0 = (w0 | 0) == 0, A0 = T - C | 0, v0 = 16 - C | 0, k0 = w0 << 2, u = e0 + ((_0(T, j >>> 1 & 1 | 2) | 0) + 5 + u) | 0, h0 = i0; ; ) {
          if (!B0) {
            for (d0 = _ + k0 | 0, q = u, l = l0[u + -1 >> 0] | 0, P = l0[u + -2 >> 0] | 0, s0 = l0[u + -3 >> 0] | 0, c0 = l0[u + -4 >> 0] | 0, j = l0[u + -5 >> 0] | 0, p0 = w0; S0 = c0 + l | 0, E0 = c0, c0 = l0[q >> 0] | 0, n0[_ >> 0] = n0[(j + 16 - S0 - (S0 << 2) + c0 + ((s0 + P | 0) * 20 | 0) >> 5) + 3984 >> 0] | 0, S0 = c0 + s0 | 0, j = s0, s0 = l0[q + 1 >> 0] | 0, n0[_ + 1 >> 0] = n0[(E0 + 16 - S0 - (S0 << 2) + s0 + ((P + l | 0) * 20 | 0) >> 5) + 3984 >> 0] | 0, S0 = s0 + P | 0, E0 = P, P = l0[q + 2 >> 0] | 0, n0[_ + 2 >> 0] = n0[(j + 16 - S0 - (S0 << 2) + P + ((c0 + l | 0) * 20 | 0) >> 5) + 3984 >> 0] | 0, S0 = P + l | 0, j = l0[q + 3 >> 0] | 0, n0[_ + 3 >> 0] = n0[(E0 + 16 - S0 - (S0 << 2) + j + ((s0 + c0 | 0) * 20 | 0) >> 5) + 3984 >> 0] | 0, p0 = p0 + -1 | 0, p0; )
              S0 = l, _ = _ + 4 | 0, q = q + 4 | 0, l = j, j = S0;
            _ = d0, u = u + k0 | 0;
          }
          if (h0 = h0 + -1 | 0, h0) _ = _ + v0 | 0, u = u + A0 | 0;
          else
            break;
        }
        if (u = i0 >>> 2, !u) {
          f0 = y0;
          return;
        }
        for (k0 = (C | 0) == 0, c0 = (T << 2) - C | 0, s0 = 64 - C | 0, p0 = 0 - T | 0, h0 = p0 << 1, d0 = T << 1, _ = _ + (v0 - (i0 << 4)) | 0, q = e0 + (m0 + (T * 5 | 0)) | 0, j = u; ; ) {
          if (k0)
            u = _, e0 = t0;
          else {
            for (u = _ + C | 0, e0 = _, l = t0, P = q, _ = C; v0 = l0[P + h0 >> 0] | 0, B0 = l0[P + p0 >> 0] | 0, w0 = l0[P + T >> 0] | 0, E0 = l0[P >> 0] | 0, m0 = w0 + v0 | 0, i0 = l0[l + d0 >> 0] | 0, S0 = e0 + 48 | 0, n0[S0 >> 0] = ((l0[((l0[P + d0 >> 0] | 0) + 16 - m0 - (m0 << 2) + i0 + ((E0 + B0 | 0) * 20 | 0) >> 5) + 3984 >> 0] | 0) + 1 + (l0[S0 >> 0] | 0) | 0) >>> 1, S0 = i0 + E0 | 0, m0 = l0[l + T >> 0] | 0, A0 = e0 + 32 | 0, n0[A0 >> 0] = ((l0[(w0 + 16 - S0 - (S0 << 2) + m0 + ((B0 + v0 | 0) * 20 | 0) >> 5) + 3984 >> 0] | 0) + 1 + (l0[A0 >> 0] | 0) | 0) >>> 1, A0 = l0[l >> 0] | 0, S0 = m0 + B0 | 0, w0 = e0 + 16 | 0, n0[w0 >> 0] = ((l0[(E0 + 16 - S0 - (S0 << 2) + A0 + ((i0 + v0 | 0) * 20 | 0) >> 5) + 3984 >> 0] | 0) + 1 + (l0[w0 >> 0] | 0) | 0) >>> 1, v0 = A0 + v0 | 0, n0[e0 >> 0] = ((l0[(B0 + 16 - v0 - (v0 << 2) + (l0[l + p0 >> 0] | 0) + ((m0 + i0 | 0) * 20 | 0) >> 5) + 3984 >> 0] | 0) + 1 + (l0[e0 >> 0] | 0) | 0) >>> 1, _ = _ + -1 | 0, _; )
              e0 = e0 + 1 | 0, l = l + 1 | 0, P = P + 1 | 0;
            e0 = t0 + C | 0, q = q + C | 0;
          }
          if (j = j + -1 | 0, j) _ = u + s0 | 0, t0 = e0 + c0 | 0, q = q + c0 | 0;
          else
            break;
        }
        f0 = y0;
      }
      function K1(u, _, l, P, T, q, C, i0) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, q = q | 0, C = C | 0, i0 = i0 | 0;
        var j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0, y0 = 0;
        if (B0 = f0, f0 = f0 + 1792 | 0, j = B0 + 1344 | 0, A0 = B0, (l | 0) >= 0 && !((l + 5 + C | 0) >>> 0 > T >>> 0 | (P | 0) < 0) && (P + 5 + i0 | 0) >>> 0 <= q >>> 0 ? (t0 = i0 + 5 | 0, j = u, e0 = l + 5 | 0) : (e0 = C + 5 | 0, t0 = i0 + 5 | 0, E2(u, j, l, P, T, q, e0, t0, e0), T = e0, e0 = 5, P = 0), t0)
          for (h0 = C >>> 2, w0 = (h0 | 0) == 0, d0 = T - C | 0, k0 = h0 << 2, l = A0, j = j + (e0 + (_0(P, T) | 0)) | 0; ; ) {
            if (w0) u = l;
            else {
              for (u = l + (k0 << 2) | 0, P = j, T = l0[j + -1 >> 0] | 0, q = l0[j + -2 >> 0] | 0, s0 = l0[j + -3 >> 0] | 0, c0 = l0[j + -4 >> 0] | 0, e0 = l0[j + -5 >> 0] | 0, p0 = h0; v0 = c0 + T | 0, m0 = c0, c0 = l0[P >> 0] | 0, o[l >> 2] = e0 - v0 - (v0 << 2) + c0 + ((s0 + q | 0) * 20 | 0), v0 = c0 + s0 | 0, e0 = s0, s0 = l0[P + 1 >> 0] | 0, o[l + 4 >> 2] = m0 - v0 + s0 - (v0 << 2) + ((q + T | 0) * 20 | 0), v0 = s0 + q | 0, m0 = q, q = l0[P + 2 >> 0] | 0, o[l + 8 >> 2] = e0 - v0 + q - (v0 << 2) + ((c0 + T | 0) * 20 | 0), v0 = q + T | 0, e0 = l0[P + 3 >> 0] | 0, o[l + 12 >> 2] = m0 - v0 + e0 - (v0 << 2) + ((s0 + c0 | 0) * 20 | 0), p0 = p0 + -1 | 0, p0; )
                v0 = T, l = l + 16 | 0, P = P + 4 | 0, T = e0, e0 = v0;
              j = j + k0 | 0;
            }
            if (t0 = t0 + -1 | 0, t0) l = u, j = j + d0 | 0;
            else
              break;
          }
        if (T = i0 >>> 2, !T) {
          f0 = B0;
          return;
        }
        for (k0 = (C | 0) == 0, d0 = 64 - C | 0, s0 = C * 3 | 0, h0 = 0 - C | 0, c0 = h0 << 1, p0 = C << 1, P = _, u = A0 + (C << 2) | 0, j = A0 + (C * 6 << 2) | 0, t0 = T; ; ) {
          if (k0) T = P;
          else {
            for (T = P + C | 0, l = u, q = j, e0 = C; _ = o[q + (c0 << 2) >> 2] | 0, A0 = o[q + (h0 << 2) >> 2] | 0, m0 = o[q + (C << 2) >> 2] | 0, y0 = o[q >> 2] | 0, v0 = m0 + _ | 0, w0 = o[l + (p0 << 2) >> 2] | 0, n0[P + 48 >> 0] = n0[((o[q + (p0 << 2) >> 2] | 0) + 512 - v0 - (v0 << 2) + w0 + ((y0 + A0 | 0) * 20 | 0) >> 10) + 3984 >> 0] | 0, v0 = w0 + y0 | 0, i0 = o[l + (C << 2) >> 2] | 0, n0[P + 32 >> 0] = n0[(m0 + 512 - v0 - (v0 << 2) + i0 + ((A0 + _ | 0) * 20 | 0) >> 10) + 3984 >> 0] | 0, v0 = o[l >> 2] | 0, m0 = i0 + A0 | 0, n0[P + 16 >> 0] = n0[(y0 + 512 - m0 - (m0 << 2) + v0 + ((w0 + _ | 0) * 20 | 0) >> 10) + 3984 >> 0] | 0, _ = v0 + _ | 0, n0[P >> 0] = n0[(A0 + 512 - _ - (_ << 2) + (o[l + (h0 << 2) >> 2] | 0) + ((i0 + w0 | 0) * 20 | 0) >> 10) + 3984 >> 0] | 0, e0 = e0 + -1 | 0, e0; )
              P = P + 1 | 0, l = l + 4 | 0, q = q + 4 | 0;
            u = u + (C << 2) | 0, j = j + (C << 2) | 0;
          }
          if (t0 = t0 + -1 | 0, t0) P = T + d0 | 0, u = u + (s0 << 2) | 0, j = j + (s0 << 2) | 0;
          else
            break;
        }
        f0 = B0;
      }
      function o1(u, _, l, P, T, q, C, i0, j) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, q = q | 0, C = C | 0, i0 = i0 | 0, j = j | 0;
        var e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0, y0 = 0, S0 = 0, E0 = 0;
        if (v0 = f0, f0 = f0 + 1792 | 0, e0 = v0 + 1344 | 0, B0 = v0, (l | 0) >= 0 && !((l + 5 + C | 0) >>> 0 > T >>> 0 | (P | 0) < 0) && (P + 5 + i0 | 0) >>> 0 <= q >>> 0 ? (t0 = i0 + 5 | 0, e0 = u, l = l + 5 | 0) : (c0 = C + 5 | 0, t0 = i0 + 5 | 0, E2(u, e0, l, P, T, q, c0, t0, c0), T = c0, l = 5, P = 0), t0)
          for (w0 = C >>> 2, h0 = (w0 | 0) == 0, k0 = T - C | 0, A0 = w0 << 2, s0 = B0, e0 = e0 + (l + (_0(P, T) | 0)) | 0, d0 = t0; ; ) {
            if (h0) u = s0;
            else {
              for (u = s0 + (A0 << 2) | 0, P = e0, l = l0[e0 + -1 >> 0] | 0, T = l0[e0 + -2 >> 0] | 0, q = l0[e0 + -3 >> 0] | 0, c0 = l0[e0 + -4 >> 0] | 0, t0 = l0[e0 + -5 >> 0] | 0, p0 = w0; m0 = c0 + l | 0, y0 = c0, c0 = l0[P >> 0] | 0, o[s0 >> 2] = t0 - m0 - (m0 << 2) + c0 + ((q + T | 0) * 20 | 0), m0 = c0 + q | 0, t0 = q, q = l0[P + 1 >> 0] | 0, o[s0 + 4 >> 2] = y0 - m0 + q - (m0 << 2) + ((T + l | 0) * 20 | 0), m0 = q + T | 0, y0 = T, T = l0[P + 2 >> 0] | 0, o[s0 + 8 >> 2] = t0 - m0 + T - (m0 << 2) + ((c0 + l | 0) * 20 | 0), m0 = T + l | 0, t0 = l0[P + 3 >> 0] | 0, o[s0 + 12 >> 2] = y0 - m0 + t0 - (m0 << 2) + ((q + c0 | 0) * 20 | 0), p0 = p0 + -1 | 0, p0; )
                m0 = l, s0 = s0 + 16 | 0, P = P + 4 | 0, l = t0, t0 = m0;
              e0 = e0 + A0 | 0;
            }
            if (d0 = d0 + -1 | 0, d0) s0 = u, e0 = e0 + k0 | 0;
            else
              break;
          }
        if (l = i0 >>> 2, !l) {
          f0 = v0;
          return;
        }
        for (A0 = (C | 0) == 0, k0 = 64 - C | 0, c0 = C * 3 | 0, w0 = 0 - C | 0, h0 = w0 << 1, d0 = C << 1, u = B0 + (C << 2) | 0, e0 = B0 + ((_0(j + 2 | 0, C) | 0) + C << 2) | 0, T = B0 + (C * 6 << 2) | 0, p0 = l; ; ) {
          if (A0)
            P = _, l = e0;
          else {
            for (l = e0 + (C << 2) | 0, P = _ + C | 0, s0 = u, q = T, t0 = C; j = o[q + (h0 << 2) >> 2] | 0, i0 = o[q + (w0 << 2) >> 2] | 0, S0 = o[q + (C << 2) >> 2] | 0, E0 = o[q >> 2] | 0, y0 = S0 + j | 0, m0 = o[s0 + (d0 << 2) >> 2] | 0, n0[_ + 48 >> 0] = ((l0[((o[q + (d0 << 2) >> 2] | 0) + 512 - y0 - (y0 << 2) + m0 + ((E0 + i0 | 0) * 20 | 0) >> 10) + 3984 >> 0] | 0) + 1 + (l0[((o[e0 + (d0 << 2) >> 2] | 0) + 16 >> 5) + 3984 >> 0] | 0) | 0) >>> 1, y0 = m0 + E0 | 0, B0 = o[s0 + (C << 2) >> 2] | 0, n0[_ + 32 >> 0] = ((l0[(S0 + 512 - y0 - (y0 << 2) + B0 + ((i0 + j | 0) * 20 | 0) >> 10) + 3984 >> 0] | 0) + 1 + (l0[((o[e0 + (C << 2) >> 2] | 0) + 16 >> 5) + 3984 >> 0] | 0) | 0) >>> 1, y0 = o[s0 >> 2] | 0, S0 = B0 + i0 | 0, n0[_ + 16 >> 0] = ((l0[(E0 + 512 - S0 - (S0 << 2) + y0 + ((m0 + j | 0) * 20 | 0) >> 10) + 3984 >> 0] | 0) + 1 + (l0[((o[e0 >> 2] | 0) + 16 >> 5) + 3984 >> 0] | 0) | 0) >>> 1, j = y0 + j | 0, n0[_ >> 0] = ((l0[(i0 + 512 - j - (j << 2) + (o[s0 + (w0 << 2) >> 2] | 0) + ((B0 + m0 | 0) * 20 | 0) >> 10) + 3984 >> 0] | 0) + 1 + (l0[((o[e0 + (w0 << 2) >> 2] | 0) + 16 >> 5) + 3984 >> 0] | 0) | 0) >>> 1, t0 = t0 + -1 | 0, t0; )
              _ = _ + 1 | 0, s0 = s0 + 4 | 0, e0 = e0 + 4 | 0, q = q + 4 | 0;
            u = u + (C << 2) | 0, T = T + (C << 2) | 0;
          }
          if (p0 = p0 + -1 | 0, p0) _ = P + k0 | 0, u = u + (c0 << 2) | 0, e0 = l + (c0 << 2) | 0, T = T + (c0 << 2) | 0;
          else
            break;
        }
        f0 = v0;
      }
      function s1(u, _, l, P, T, q, C, i0, j) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, q = q | 0, C = C | 0, i0 = i0 | 0, j = j | 0;
        var e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0, y0 = 0, S0 = 0, E0 = 0, T0 = 0, g0 = 0, U0 = 0, L0 = 0, O0 = 0, Y0 = 0;
        if (S0 = f0, f0 = f0 + 1792 | 0, e0 = S0 + 1344 | 0, y0 = S0, m0 = C + 5 | 0, (l | 0) >= 0 && !((l + 5 + C | 0) >>> 0 > T >>> 0 | (P | 0) < 0) && (P + 5 + i0 | 0) >>> 0 <= q >>> 0 ? e0 = u : (E2(u, e0, l, P, T, q, m0, i0 + 5 | 0, m0), T = m0, l = 0, P = 0), d0 = l + T + (_0(P, T) | 0) | 0, P = i0 >>> 2, P)
          for (v0 = (m0 | 0) == 0, B0 = (T << 2) - C + -5 | 0, h0 = m0 * 3 | 0, s0 = 0 - T | 0, A0 = s0 << 1, w0 = T << 1, k0 = m0 << 1, c0 = -5 - C | 0, q = y0 + (m0 << 2) | 0, p0 = e0 + d0 | 0, l = e0 + (d0 + (T * 5 | 0)) | 0; ; ) {
            if (v0) d0 = q;
            else {
              for (d0 = q + (m0 << 2) | 0, e0 = p0, u = l, t0 = m0; g0 = l0[u + A0 >> 0] | 0, U0 = l0[u + s0 >> 0] | 0, O0 = l0[u + T >> 0] | 0, Y0 = l0[u >> 0] | 0, L0 = O0 + g0 | 0, E0 = l0[e0 + w0 >> 0] | 0, o[q + (k0 << 2) >> 2] = (l0[u + w0 >> 0] | 0) - L0 - (L0 << 2) + E0 + ((Y0 + U0 | 0) * 20 | 0), L0 = E0 + Y0 | 0, T0 = l0[e0 + T >> 0] | 0, o[q + (m0 << 2) >> 2] = O0 - L0 + T0 - (L0 << 2) + ((U0 + g0 | 0) * 20 | 0), L0 = l0[e0 >> 0] | 0, O0 = T0 + U0 | 0, o[q >> 2] = Y0 - O0 + L0 - (O0 << 2) + ((E0 + g0 | 0) * 20 | 0), g0 = L0 + g0 | 0, o[q + (c0 << 2) >> 2] = U0 - g0 + (l0[e0 + s0 >> 0] | 0) - (g0 << 2) + ((T0 + E0 | 0) * 20 | 0), t0 = t0 + -1 | 0, t0; )
                q = q + 4 | 0, e0 = e0 + 1 | 0, u = u + 1 | 0;
              p0 = p0 + m0 | 0, l = l + m0 | 0;
            }
            if (P = P + -1 | 0, P) q = d0 + (h0 << 2) | 0, p0 = p0 + B0 | 0, l = l + B0 | 0;
            else
              break;
          }
        if (!i0) {
          f0 = S0;
          return;
        }
        for (w0 = C >>> 2, A0 = (w0 | 0) == 0, k0 = 16 - C | 0, h0 = w0 << 2, T = y0 + (j + 2 << 2) | 0, P = y0 + 20 | 0; ; ) {
          if (A0) l = T;
          else {
            for (l = T + (h0 << 2) | 0, d0 = _, e0 = P, q = o[P + -4 >> 2] | 0, t0 = o[P + -8 >> 2] | 0, s0 = o[P + -12 >> 2] | 0, c0 = o[P + -16 >> 2] | 0, u = o[P + -20 >> 2] | 0, p0 = w0; j = c0 + q | 0, C = c0, c0 = o[e0 >> 2] | 0, n0[d0 >> 0] = ((l0[(u + 512 - j - (j << 2) + c0 + ((s0 + t0 | 0) * 20 | 0) >> 10) + 3984 >> 0] | 0) + 1 + (l0[((o[T >> 2] | 0) + 16 >> 5) + 3984 >> 0] | 0) | 0) >>> 1, j = c0 + s0 | 0, u = s0, s0 = o[e0 + 4 >> 2] | 0, n0[d0 + 1 >> 0] = ((l0[(C + 512 - j - (j << 2) + s0 + ((t0 + q | 0) * 20 | 0) >> 10) + 3984 >> 0] | 0) + 1 + (l0[((o[T + 4 >> 2] | 0) + 16 >> 5) + 3984 >> 0] | 0) | 0) >>> 1, j = s0 + t0 | 0, C = t0, t0 = o[e0 + 8 >> 2] | 0, n0[d0 + 2 >> 0] = ((l0[(u + 512 - j - (j << 2) + t0 + ((c0 + q | 0) * 20 | 0) >> 10) + 3984 >> 0] | 0) + 1 + (l0[((o[T + 8 >> 2] | 0) + 16 >> 5) + 3984 >> 0] | 0) | 0) >>> 1, j = t0 + q | 0, u = o[e0 + 12 >> 2] | 0, n0[d0 + 3 >> 0] = ((l0[(C + 512 - j - (j << 2) + u + ((s0 + c0 | 0) * 20 | 0) >> 10) + 3984 >> 0] | 0) + 1 + (l0[((o[T + 12 >> 2] | 0) + 16 >> 5) + 3984 >> 0] | 0) | 0) >>> 1, p0 = p0 + -1 | 0, p0; )
              j = q, d0 = d0 + 4 | 0, T = T + 16 | 0, e0 = e0 + 16 | 0, q = u, u = j;
            _ = _ + h0 | 0, P = P + (h0 << 2) | 0;
          }
          if (i0 = i0 + -1 | 0, i0) _ = _ + k0 | 0, T = l + 20 | 0, P = P + 20 | 0;
          else
            break;
        }
        f0 = S0;
      }
      function R2(u, _, l, P, T, q, C, i0, j) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, q = q | 0, C = C | 0, i0 = i0 | 0, j = j | 0;
        var e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0;
        v0 = f0, p0 = u + ((C << 4) + q) | 0, w0 = u0[_ >> 1] | 0, B0 = _ + 2 | 0, k0 = u0[B0 >> 1] | 0, h0 = l + 4 | 0, c0 = o[h0 >> 2] << 4, d0 = l + 8 | 0, s0 = o[d0 >> 2] << 4, P = q + P | 0, e0 = P + (w0 >> 2) | 0, T = C + T | 0, t0 = T + (k0 >> 2) | 0;
        do
          switch (o[6800 + ((w0 & 3) << 4) + ((k0 & 3) << 2) >> 2] | 0) {
            case 10: {
              K1(
                o[l >> 2] | 0,
                p0,
                e0 + -2 | 0,
                t0 + -2 | 0,
                c0,
                s0,
                i0,
                j
              );
              break;
            }
            case 6: {
              s1(
                o[l >> 2] | 0,
                p0,
                e0 + -2 | 0,
                t0 + -2 | 0,
                c0,
                s0,
                i0,
                j,
                0
              );
              break;
            }
            case 4: {
              n1(
                o[l >> 2] | 0,
                p0,
                e0 + -2 | 0,
                t0,
                c0,
                s0,
                i0,
                j,
                0
              );
              break;
            }
            case 1: {
              t1(
                o[l >> 2] | 0,
                p0,
                e0,
                t0 + -2 | 0,
                c0,
                s0,
                i0,
                j,
                0
              );
              break;
            }
            case 2: {
              H1(
                o[l >> 2] | 0,
                p0,
                e0,
                t0 + -2 | 0,
                c0,
                s0,
                i0,
                j
              );
              break;
            }
            case 12: {
              n1(
                o[l >> 2] | 0,
                p0,
                e0 + -2 | 0,
                t0,
                c0,
                s0,
                i0,
                j,
                1
              );
              break;
            }
            case 14: {
              s1(
                o[l >> 2] | 0,
                p0,
                e0 + -2 | 0,
                t0 + -2 | 0,
                c0,
                s0,
                i0,
                j,
                1
              );
              break;
            }
            case 7: {
              qe(
                o[l >> 2] | 0,
                p0,
                e0 + -2 | 0,
                t0 + -2 | 0,
                c0,
                s0,
                i0,
                j,
                2
              );
              break;
            }
            case 13: {
              qe(
                o[l >> 2] | 0,
                p0,
                e0 + -2 | 0,
                t0 + -2 | 0,
                c0,
                s0,
                i0,
                j,
                1
              );
              break;
            }
            case 5: {
              qe(
                o[l >> 2] | 0,
                p0,
                e0 + -2 | 0,
                t0 + -2 | 0,
                c0,
                s0,
                i0,
                j,
                0
              );
              break;
            }
            case 0: {
              E2(o[l >> 2] | 0, p0, e0, t0, c0, s0, i0, j, 16);
              break;
            }
            case 9: {
              o1(
                o[l >> 2] | 0,
                p0,
                e0 + -2 | 0,
                t0 + -2 | 0,
                c0,
                s0,
                i0,
                j,
                0
              );
              break;
            }
            case 8: {
              G1(
                o[l >> 2] | 0,
                p0,
                e0 + -2 | 0,
                t0,
                c0,
                s0,
                i0,
                j
              );
              break;
            }
            case 3: {
              t1(
                o[l >> 2] | 0,
                p0,
                e0,
                t0 + -2 | 0,
                c0,
                s0,
                i0,
                j,
                1
              );
              break;
            }
            case 11: {
              o1(
                o[l >> 2] | 0,
                p0,
                e0 + -2 | 0,
                t0 + -2 | 0,
                c0,
                s0,
                i0,
                j,
                1
              );
              break;
            }
            default:
              qe(
                o[l >> 2] | 0,
                p0,
                e0 + -2 | 0,
                t0 + -2 | 0,
                c0,
                s0,
                i0,
                j,
                3
              );
          }
        while (!1);
        if (w0 = (q >>> 1) + 256 + (C >>> 1 << 3) | 0, A0 = u + w0 | 0, k0 = o[l >> 2] | 0, e0 = o[h0 >> 2] | 0, C = o[d0 >> 2] | 0, d0 = e0 << 3, h0 = C << 3, c0 = u0[_ >> 1] | 0, l = (c0 >> 3) + (P >>> 1) | 0, p0 = u0[B0 >> 1] | 0, s0 = (p0 >> 3) + (T >>> 1) | 0, c0 = c0 & 7, p0 = p0 & 7, T = i0 >>> 1, q = j >>> 1, C = _0(e0 << 8, C) | 0, P = k0 + C | 0, e0 = (c0 | 0) != 0, t0 = (p0 | 0) != 0, e0 & t0) {
          V1(P, A0, l, s0, d0, h0, c0, p0, T, q), f0 = v0;
          return;
        }
        if (e0) {
          q1(P, A0, l, s0, d0, h0, c0, T, q), f0 = v0;
          return;
        }
        if (t0) {
          Y1(P, A0, l, s0, d0, h0, p0, T, q), f0 = v0;
          return;
        } else {
          E2(P, A0, l, s0, d0, h0, T, q, 8), E2(
            k0 + ((_0(h0, d0) | 0) + C) | 0,
            u + (w0 + 64) | 0,
            l,
            s0,
            d0,
            h0,
            T,
            q,
            8
          ), f0 = v0;
          return;
        }
      }
      function X1(u, _, l, P, T) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0;
        var q = 0, C = 0, i0 = 0;
        if (i0 = f0, l && (g2(_ | 0, n0[u >> 0] | 0, l | 0) | 0, _ = _ + l | 0), P) {
          for (C = _ + P | 0, q = P, l = u; n0[_ >> 0] = n0[l >> 0] | 0, q = q + -1 | 0, q; )
            _ = _ + 1 | 0, l = l + 1 | 0;
          _ = C, u = u + P | 0;
        }
        if (!T) {
          f0 = i0;
          return;
        }
        g2(_ | 0, n0[u + -1 >> 0] | 0, T | 0) | 0, f0 = i0;
      }
      function W1(u, _, l, P, T) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, l = f0, Qe(_, u, P), f0 = l;
      }
      function $1(u, _, l, P) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0;
        var T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0;
        if (d0 = f0, T = o[u + 40 >> 2] | 0, T) {
          C = o[u >> 2] | 0, j = u + 32 | 0, i0 = 0;
          do
            ((o[C + (i0 * 40 | 0) + 20 >> 2] | 0) + -1 | 0) >>> 0 < 2 && (q = o[C + (i0 * 40 | 0) + 12 >> 2] | 0, q >>> 0 > l >>> 0 && (q = q - (o[j >> 2] | 0) | 0), o[C + (i0 * 40 | 0) + 8 >> 2] = q), i0 = i0 + 1 | 0;
          while ((i0 | 0) != (T | 0));
        }
        if (!(o[_ >> 2] | 0) || (q = o[_ + 4 >> 2] | 0, q >>> 0 >= 3))
          return p0 = 0, f0 = d0, p0 | 0;
        c0 = u + 32 | 0, p0 = u + 24 | 0, s0 = u + 4 | 0, T = l, t0 = 0;
        e: for (; ; ) {
          r: do
            if (q >>> 0 < 2) {
              if (j = o[_ + (t0 * 12 | 0) + 8 >> 2] | 0, q ? (e0 = j + T | 0, q = o[c0 >> 2] | 0, q = e0 - ((e0 | 0) < (q | 0) ? 0 : q) | 0) : (q = T - j | 0, (q | 0) < 0 && (q = (o[c0 >> 2] | 0) + q | 0)), q >>> 0 > l >>> 0 ? T = q - (o[c0 >> 2] | 0) | 0 : T = q, i0 = o[p0 >> 2] | 0, !i0) {
                T = 1, q = 37;
                break e;
              }
              for (j = o[u >> 2] | 0, e0 = 0; ; ) {
                if (C = o[j + (e0 * 40 | 0) + 20 >> 2] | 0, (C + -1 | 0) >>> 0 < 2 && (o[j + (e0 * 40 | 0) + 8 >> 2] | 0) == (T | 0)) {
                  T = q;
                  break r;
                }
                if (e0 = e0 + 1 | 0, e0 >>> 0 >= i0 >>> 0) {
                  T = 1, q = 37;
                  break e;
                }
              }
            } else {
              if (i0 = o[_ + (t0 * 12 | 0) + 12 >> 2] | 0, C = o[p0 >> 2] | 0, !C) {
                T = 1, q = 37;
                break e;
              }
              for (j = o[u >> 2] | 0, q = 0; ; ) {
                if ((o[j + (q * 40 | 0) + 20 >> 2] | 0) == 3 && (o[j + (q * 40 | 0) + 8 >> 2] | 0) == (i0 | 0)) {
                  C = 3, e0 = q;
                  break r;
                }
                if (q = q + 1 | 0, q >>> 0 >= C >>> 0) {
                  T = 1, q = 37;
                  break e;
                }
              }
            }
          while (!1);
          if (!((e0 | 0) > -1 & C >>> 0 > 1)) {
            T = 1, q = 37;
            break;
          }
          if (t0 >>> 0 < P >>> 0) {
            j = P;
            do
              i0 = j, j = j + -1 | 0, C = o[s0 >> 2] | 0, o[C + (i0 << 2) >> 2] = o[C + (j << 2) >> 2];
            while (j >>> 0 > t0 >>> 0);
            j = o[u >> 2] | 0;
          }
          if (o[(o[s0 >> 2] | 0) + (t0 << 2) >> 2] = j + (e0 * 40 | 0), t0 = t0 + 1 | 0, t0 >>> 0 <= P >>> 0) {
            q = t0, j = t0;
            do
              i0 = o[s0 >> 2] | 0, C = o[i0 + (q << 2) >> 2] | 0, (C | 0) != ((o[u >> 2] | 0) + (e0 * 40 | 0) | 0) && (o[i0 + (j << 2) >> 2] = C, j = j + 1 | 0), q = q + 1 | 0;
            while (q >>> 0 <= P >>> 0);
          }
          if (q = o[_ + (t0 * 12 | 0) + 4 >> 2] | 0, q >>> 0 >= 3) {
            T = 0, q = 37;
            break;
          }
        }
        return (q | 0) == 37 ? (f0 = d0, T | 0) : 0;
      }
      function f1(u, _, l, P, T, q, C, i0) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, q = q | 0, C = C | 0, i0 = i0 | 0;
        var j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0, y0 = 0, S0 = 0, E0 = 0, T0 = 0, g0 = 0, U0 = 0, L0 = 0, O0 = 0, Y0 = 0, H0 = 0, Q0 = 0, N0 = 0, J0 = 0;
        if (J0 = f0, Q0 = o[l >> 2] | 0, N0 = o[u + 8 >> 2] | 0, (Q0 | 0) != (o[N0 >> 2] | 0))
          return U0 = 1, f0 = J0, U0 | 0;
        T0 = u + 52 | 0, o[T0 >> 2] = 0, Y0 = o[u + 56 >> 2] | 0, c0 = (Y0 | 0) == 0, H0 = c0 & 1;
        do
          if (!_)
            o[N0 + 20 >> 2] = 0, o[N0 + 12 >> 2] = P, o[N0 + 8 >> 2] = P, o[N0 + 16 >> 2] = T, o[N0 + 24 >> 2] = H0, c0 ? (l = u + 44 | 0, o[l >> 2] = (o[l >> 2] | 0) + 1, l = 0, h0 = 0) : (l = Y0, h0 = 0);
          else {
            if (q) {
              j = u + 20 | 0, o[j >> 2] = 0, e0 = u + 16 | 0, o[e0 >> 2] = 0, h0 = o[u >> 2] | 0, k0 = u + 44 | 0, d0 = 0;
              do
                p0 = h0 + (d0 * 40 | 0) + 20 | 0, (o[p0 >> 2] | 0) != 0 && (o[p0 >> 2] = 0, (o[h0 + (d0 * 40 | 0) + 24 >> 2] | 0) == 0) && (o[k0 >> 2] = (o[k0 >> 2] | 0) + -1), d0 = d0 + 1 | 0;
              while ((d0 | 0) != 16);
              e: do
                if (c0)
                  for (s0 = o[u + 28 >> 2] | 0, t0 = u + 12 | 0, d0 = 0; ; ) {
                    P = 0, p0 = 2147483647, c0 = 0;
                    do
                      o[h0 + (P * 40 | 0) + 24 >> 2] | 0 && (g0 = o[h0 + (P * 40 | 0) + 16 >> 2] | 0, U0 = (g0 | 0) < (p0 | 0), p0 = U0 ? g0 : p0, c0 = U0 ? h0 + (P * 40 | 0) | 0 : c0), P = P + 1 | 0;
                    while (P >>> 0 <= s0 >>> 0);
                    if (!c0) {
                      l = 0;
                      break e;
                    }
                    U0 = o[t0 >> 2] | 0, o[U0 + (d0 << 4) >> 2] = o[c0 >> 2], o[U0 + (d0 << 4) + 12 >> 2] = o[c0 + 36 >> 2], o[U0 + (d0 << 4) + 4 >> 2] = o[c0 + 28 >> 2], o[U0 + (d0 << 4) + 8 >> 2] = o[c0 + 32 >> 2], d0 = d0 + 1 | 0, o[e0 >> 2] = d0, o[c0 + 24 >> 2] = 0, !(o[c0 + 20 >> 2] | 0) && (o[k0 >> 2] = (o[k0 >> 2] | 0) + -1);
                  }
                else l = Y0;
              while (!1);
              p0 = u + 40 | 0, o[p0 >> 2] = 0, c0 = u + 36 | 0, o[c0 >> 2] = 65535, o[u + 48 >> 2] = 0, o[_ >> 2] | l ? (o[e0 >> 2] = 0, o[j >> 2] = 0) : l = 0, h0 = (o[_ + 4 >> 2] | 0) == 0, o[N0 + 20 >> 2] = h0 ? 2 : 3, o[c0 >> 2] = h0 ? 65535 : 0, o[N0 + 12 >> 2] = 0, o[N0 + 8 >> 2] = 0, o[N0 + 16 >> 2] = 0, o[N0 + 24 >> 2] = H0, o[k0 >> 2] = 1, o[p0 >> 2] = 1, h0 = 0;
              break;
            }
            if (o[_ + 8 >> 2] | 0) {
              L0 = u + 24 | 0, g0 = u + 40 | 0, B0 = u + 44 | 0, m0 = u + 36 | 0, E0 = u + 48 | 0, A0 = u + 28 | 0, y0 = u + 16 | 0, S0 = u + 12 | 0, h0 = Y0, l = Y0, w0 = 0, v0 = 0;
              e: for (; ; ) {
                switch (o[_ + (w0 * 20 | 0) + 12 >> 2] | 0) {
                  case 4: {
                    if (e0 = o[_ + (w0 * 20 | 0) + 28 >> 2] | 0, o[m0 >> 2] = e0, t0 = o[L0 >> 2] | 0, !t0) k0 = v0;
                    else {
                      s0 = o[u >> 2] | 0, k0 = e0, c0 = 0;
                      do {
                        j = s0 + (c0 * 40 | 0) + 20 | 0;
                        do
                          if ((o[j >> 2] | 0) == 3) {
                            if ((o[s0 + (c0 * 40 | 0) + 8 >> 2] | 0) >>> 0 <= e0 >>> 0)
                              if ((k0 | 0) == 65535)
                                k0 = 65535;
                              else break;
                            o[j >> 2] = 0, o[g0 >> 2] = (o[g0 >> 2] | 0) + -1, o[s0 + (c0 * 40 | 0) + 24 >> 2] | 0 || (o[B0 >> 2] = (o[B0 >> 2] | 0) + -1);
                          }
                        while (!1);
                        c0 = c0 + 1 | 0;
                      } while ((c0 | 0) != (t0 | 0));
                      k0 = v0;
                    }
                    break;
                  }
                  case 1: {
                    if (s0 = P - (o[_ + (w0 * 20 | 0) + 16 >> 2] | 0) | 0, e0 = o[L0 >> 2] | 0, !e0) {
                      s0 = 1;
                      break e;
                    }
                    for (t0 = o[u >> 2] | 0, k0 = 0; j = t0 + (k0 * 40 | 0) + 20 | 0, !(((o[j >> 2] | 0) + -1 | 0) >>> 0 < 2 && (o[t0 + (k0 * 40 | 0) + 8 >> 2] | 0) == (s0 | 0)); )
                      if (k0 = k0 + 1 | 0, k0 >>> 0 >= e0 >>> 0) {
                        s0 = 1;
                        break e;
                      }
                    if ((k0 | 0) < 0) {
                      s0 = 1;
                      break e;
                    }
                    o[j >> 2] = 0, o[g0 >> 2] = (o[g0 >> 2] | 0) + -1, o[t0 + (k0 * 40 | 0) + 24 >> 2] | 0 || (o[B0 >> 2] = (o[B0 >> 2] | 0) + -1), k0 = v0;
                    break;
                  }
                  case 6: {
                    if (t0 = o[_ + (w0 * 20 | 0) + 24 >> 2] | 0, k0 = o[m0 >> 2] | 0, (k0 | 0) == 65535 | k0 >>> 0 < t0 >>> 0) {
                      s0 = 1, O0 = 101;
                      break e;
                    }
                    h0 = o[L0 >> 2] | 0;
                    r: do
                      if (h0) {
                        for (e0 = o[u >> 2] | 0, k0 = 0; j = e0 + (k0 * 40 | 0) + 20 | 0, !((o[j >> 2] | 0) == 3 && (o[e0 + (k0 * 40 | 0) + 8 >> 2] | 0) == (t0 | 0)); )
                          if (k0 = k0 + 1 | 0, k0 >>> 0 >= h0 >>> 0) {
                            O0 = 88;
                            break r;
                          }
                        o[j >> 2] = 0, j = (o[g0 >> 2] | 0) + -1 | 0, o[g0 >> 2] = j, o[e0 + (k0 * 40 | 0) + 24 >> 2] | 0 || (o[B0 >> 2] = (o[B0 >> 2] | 0) + -1), k0 = j;
                      } else
                        h0 = 0, O0 = 88;
                    while (!1);
                    if ((O0 | 0) == 88 && (O0 = 0, k0 = o[g0 >> 2] | 0), k0 >>> 0 >= h0 >>> 0) {
                      s0 = 1, O0 = 101;
                      break e;
                    }
                    o[N0 + 12 >> 2] = P, o[N0 + 8 >> 2] = t0, o[N0 + 16 >> 2] = T, o[N0 + 20 >> 2] = 3, o[N0 + 24 >> 2] = H0, o[g0 >> 2] = k0 + 1, o[B0 >> 2] = (o[B0 >> 2] | 0) + 1, h0 = Y0, l = Y0, k0 = 1;
                    break;
                  }
                  case 2: {
                    if (e0 = o[_ + (w0 * 20 | 0) + 20 >> 2] | 0, t0 = o[L0 >> 2] | 0, !t0) {
                      s0 = 1;
                      break e;
                    }
                    for (s0 = o[u >> 2] | 0, k0 = 0; j = s0 + (k0 * 40 | 0) + 20 | 0, !((o[j >> 2] | 0) == 3 && (o[s0 + (k0 * 40 | 0) + 8 >> 2] | 0) == (e0 | 0)); )
                      if (k0 = k0 + 1 | 0, k0 >>> 0 >= t0 >>> 0) {
                        s0 = 1;
                        break e;
                      }
                    if ((k0 | 0) < 0) {
                      s0 = 1;
                      break e;
                    }
                    o[j >> 2] = 0, o[g0 >> 2] = (o[g0 >> 2] | 0) + -1, o[s0 + (k0 * 40 | 0) + 24 >> 2] | 0 || (o[B0 >> 2] = (o[B0 >> 2] | 0) + -1), k0 = v0;
                    break;
                  }
                  case 3: {
                    if (k0 = o[_ + (w0 * 20 | 0) + 16 >> 2] | 0, s0 = o[_ + (w0 * 20 | 0) + 24 >> 2] | 0, j = o[m0 >> 2] | 0, (j | 0) == 65535 | j >>> 0 < s0 >>> 0) {
                      s0 = 1;
                      break e;
                    }
                    if (c0 = o[L0 >> 2] | 0, !c0) {
                      s0 = 1;
                      break e;
                    }
                    for (p0 = o[u >> 2] | 0, j = 0; ; ) {
                      if (t0 = p0 + (j * 40 | 0) + 20 | 0, (o[t0 >> 2] | 0) == 3 && (o[p0 + (j * 40 | 0) + 8 >> 2] | 0) == (s0 | 0)) {
                        O0 = 47;
                        break;
                      }
                      if (e0 = j + 1 | 0, e0 >>> 0 < c0 >>> 0) j = e0;
                      else break;
                    }
                    for ((O0 | 0) == 47 && (O0 = 0, o[t0 >> 2] = 0, o[g0 >> 2] = (o[g0 >> 2] | 0) + -1, (o[p0 + (j * 40 | 0) + 24 >> 2] | 0) == 0) && (o[B0 >> 2] = (o[B0 >> 2] | 0) + -1), t0 = P - k0 | 0, k0 = 0; e0 = p0 + (k0 * 40 | 0) + 20 | 0, j = o[e0 >> 2] | 0, !((j + -1 | 0) >>> 0 < 2 && (U0 = p0 + (k0 * 40 | 0) + 8 | 0, (o[U0 >> 2] | 0) == (t0 | 0))); )
                      if (k0 = k0 + 1 | 0, k0 >>> 0 >= c0 >>> 0) {
                        s0 = 1;
                        break e;
                      }
                    if (!((k0 | 0) > -1 & j >>> 0 > 1)) {
                      s0 = 1;
                      break e;
                    }
                    o[e0 >> 2] = 3, o[U0 >> 2] = s0, k0 = v0;
                    break;
                  }
                  case 5: {
                    s0 = o[u >> 2] | 0, d0 = 0;
                    do
                      p0 = s0 + (d0 * 40 | 0) + 20 | 0, (o[p0 >> 2] | 0) != 0 && (o[p0 >> 2] = 0, (o[s0 + (d0 * 40 | 0) + 24 >> 2] | 0) == 0) && (o[B0 >> 2] = (o[B0 >> 2] | 0) + -1), d0 = d0 + 1 | 0;
                    while ((d0 | 0) != 16);
                    r: do
                      if (!l)
                        for (e0 = o[A0 >> 2] | 0, t0 = h0; ; ) {
                          l = 0, k0 = 2147483647, j = 0;
                          do
                            o[s0 + (l * 40 | 0) + 24 >> 2] | 0 && (c0 = o[s0 + (l * 40 | 0) + 16 >> 2] | 0, P = (c0 | 0) < (k0 | 0), k0 = P ? c0 : k0, j = P ? s0 + (l * 40 | 0) | 0 : j), l = l + 1 | 0;
                          while (l >>> 0 <= e0 >>> 0);
                          if (!j) {
                            h0 = t0, l = 0;
                            break r;
                          }
                          if (k0 = o[y0 >> 2] | 0, l = o[S0 >> 2] | 0, o[l + (k0 << 4) >> 2] = o[j >> 2], o[l + (k0 << 4) + 12 >> 2] = o[j + 36 >> 2], o[l + (k0 << 4) + 4 >> 2] = o[j + 28 >> 2], o[l + (k0 << 4) + 8 >> 2] = o[j + 32 >> 2], o[y0 >> 2] = k0 + 1, o[j + 24 >> 2] = 0, o[j + 20 >> 2] | 0 || (o[B0 >> 2] = (o[B0 >> 2] | 0) + -1), !t0) t0 = 0;
                          else {
                            h0 = t0, l = t0;
                            break;
                          }
                        }
                    while (!1);
                    o[g0 >> 2] = 0, o[m0 >> 2] = 65535, o[E0 >> 2] = 0, o[T0 >> 2] = 1, P = 0, k0 = v0;
                    break;
                  }
                  case 0: {
                    s0 = 0, O0 = 101;
                    break e;
                  }
                  default: {
                    s0 = 1;
                    break e;
                  }
                }
                w0 = w0 + 1 | 0, v0 = k0;
              }
              if (v0) {
                h0 = s0;
                break;
              }
              d0 = o[g0 >> 2] | 0, p0 = o[L0 >> 2] | 0;
            } else if (l = u + 40 | 0, d0 = o[l >> 2] | 0, p0 = o[u + 24 >> 2] | 0, d0 >>> 0 >= p0 >>> 0)
              if (d0) {
                e0 = o[u >> 2] | 0, t0 = 0, c0 = -1, s0 = 0;
                do
                  ((o[e0 + (t0 * 40 | 0) + 20 >> 2] | 0) + -1 | 0) >>> 0 < 2 && (U0 = o[e0 + (t0 * 40 | 0) + 8 >> 2] | 0, g0 = (U0 | 0) < (s0 | 0) | (c0 | 0) == -1, c0 = g0 ? t0 : c0, s0 = g0 ? U0 : s0), t0 = t0 + 1 | 0;
                while ((t0 | 0) != (d0 | 0));
                (c0 | 0) > -1 ? (d0 = d0 + -1 | 0, o[e0 + (c0 * 40 | 0) + 20 >> 2] = 0, o[l >> 2] = d0, o[e0 + (c0 * 40 | 0) + 24 >> 2] | 0 ? (l = Y0, s0 = 0) : (l = u + 44 | 0, o[l >> 2] = (o[l >> 2] | 0) + -1, l = Y0, s0 = 0)) : (l = Y0, s0 = 1);
              } else
                d0 = 0, l = Y0, s0 = 1;
            else
              l = Y0, s0 = 0;
            d0 >>> 0 < p0 >>> 0 ? (o[N0 + 12 >> 2] = P, o[N0 + 8 >> 2] = P, o[N0 + 16 >> 2] = T, o[N0 + 20 >> 2] = 2, o[N0 + 24 >> 2] = H0, h0 = u + 44 | 0, o[h0 >> 2] = (o[h0 >> 2] | 0) + 1, o[u + 40 >> 2] = d0 + 1, h0 = s0) : h0 = 1;
          }
        while (!1);
        if (o[N0 + 36 >> 2] = q, o[N0 + 28 >> 2] = C, o[N0 + 32 >> 2] = i0, l)
          j = u + 16 | 0, U0 = o[j >> 2] | 0, g0 = o[u + 12 >> 2] | 0, o[g0 + (U0 << 4) >> 2] = Q0, o[g0 + (U0 << 4) + 12 >> 2] = q, o[g0 + (U0 << 4) + 4 >> 2] = C, o[g0 + (U0 << 4) + 8 >> 2] = i0, o[j >> 2] = U0 + 1, j = o[u + 28 >> 2] | 0;
        else if (c0 = u + 44 | 0, l = o[c0 >> 2] | 0, j = o[u + 28 >> 2] | 0, l >>> 0 > j >>> 0) {
          p0 = u + 16 | 0, d0 = u + 12 | 0;
          do {
            s0 = o[u >> 2] | 0, P = 0, e0 = 2147483647, t0 = 0;
            do
              o[s0 + (P * 40 | 0) + 24 >> 2] | 0 && (g0 = o[s0 + (P * 40 | 0) + 16 >> 2] | 0, U0 = (g0 | 0) < (e0 | 0), e0 = U0 ? g0 : e0, t0 = U0 ? s0 + (P * 40 | 0) | 0 : t0), P = P + 1 | 0;
            while (P >>> 0 <= j >>> 0);
            (t0 | 0) != 0 && (U0 = o[p0 >> 2] | 0, g0 = o[d0 >> 2] | 0, o[g0 + (U0 << 4) >> 2] = o[t0 >> 2], o[g0 + (U0 << 4) + 12 >> 2] = o[t0 + 36 >> 2], o[g0 + (U0 << 4) + 4 >> 2] = o[t0 + 28 >> 2], o[g0 + (U0 << 4) + 8 >> 2] = o[t0 + 32 >> 2], o[p0 >> 2] = U0 + 1, o[t0 + 24 >> 2] = 0, (o[t0 + 20 >> 2] | 0) == 0) && (l = l + -1 | 0, o[c0 >> 2] = l);
          } while (l >>> 0 > j >>> 0);
        }
        return c1(o[u >> 2] | 0, j + 1 | 0), U0 = h0, f0 = J0, U0 | 0;
      }
      function pe(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0;
        return P = f0, _ >>> 0 <= 16 && (l = o[(o[u + 4 >> 2] | 0) + (_ << 2) >> 2] | 0, (l | 0) != 0) && (o[l + 20 >> 2] | 0) >>> 0 > 1 ? l = o[l >> 2] | 0 : l = 0, f0 = P, l | 0;
      }
      function u1(u) {
        u = u | 0;
        var _ = 0;
        return _ = (o[u >> 2] | 0) + ((o[u + 28 >> 2] | 0) * 40 | 0) | 0, o[u + 8 >> 2] = _, o[_ >> 2] | 0;
      }
      function J1(u, _, l, P, T, q) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, q = q | 0;
        var C = 0, i0 = 0;
        if (i0 = f0, o[u + 36 >> 2] = 65535, P = P >>> 0 > 1 ? P : 1, o[u + 24 >> 2] = P, C = u + 28 | 0, o[C >> 2] = (q | 0) == 0 ? l : P, o[u + 32 >> 2] = T, o[u + 56 >> 2] = q, o[u + 44 >> 2] = 0, o[u + 40 >> 2] = 0, o[u + 48 >> 2] = 0, q = M2(680) | 0, o[u >> 2] = q, !q)
          return q = 65535, f0 = i0, q | 0;
        U2(q, 0, 680);
        e: do
          if ((o[C >> 2] | 0) != -1) {
            for (T = _ * 384 | 47, P = 0; ; ) {
              if (l = M2(T) | 0, q = o[u >> 2] | 0, o[q + (P * 40 | 0) + 4 >> 2] = l, !l) {
                q = 65535;
                break;
              }
              if (o[q + (P * 40 | 0) >> 2] = l + (0 - l & 15), P = P + 1 | 0, P >>> 0 >= ((o[C >> 2] | 0) + 1 | 0) >>> 0)
                break e;
            }
            return f0 = i0, q | 0;
          }
        while (!1);
        return q = u + 4 | 0, o[q >> 2] = M2(68) | 0, T = M2((o[C >> 2] << 4) + 16 | 0) | 0, o[u + 12 >> 2] = T, q = o[q >> 2] | 0, (q | 0) == 0 | (T | 0) == 0 ? (q = 65535, f0 = i0, q | 0) : (U2(q, 0, 68), o[u + 20 >> 2] = 0, o[u + 16 >> 2] = 0, q = 0, f0 = i0, q | 0);
      }
      function Z1(u, _, l, P, T, q) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, q = q | 0;
        var C = 0, i0 = 0, j = 0, e0 = 0;
        if (e0 = f0, C = o[u >> 2] | 0, C) {
          if (j = u + 28 | 0, (o[j >> 2] | 0) != -1) {
            i0 = 0;
            do
              r2(o[C + (i0 * 40 | 0) + 4 >> 2] | 0), C = o[u >> 2] | 0, o[C + (i0 * 40 | 0) + 4 >> 2] = 0, i0 = i0 + 1 | 0;
            while (i0 >>> 0 < ((o[j >> 2] | 0) + 1 | 0) >>> 0);
          }
        } else C = 0;
        return r2(C), o[u >> 2] = 0, C = u + 4 | 0, r2(o[C >> 2] | 0), o[C >> 2] = 0, C = u + 12 | 0, r2(o[C >> 2] | 0), o[C >> 2] = 0, C = J1(u, _, l, P, T, q) | 0, f0 = e0, C | 0;
      }
      function Q1(u) {
        u = u | 0;
        var _ = 0, l = 0, P = 0, T = 0;
        if (T = f0, _ = o[u >> 2] | 0, _) {
          if (P = u + 28 | 0, (o[P >> 2] | 0) != -1) {
            l = 0;
            do
              r2(o[_ + (l * 40 | 0) + 4 >> 2] | 0), _ = o[u >> 2] | 0, o[_ + (l * 40 | 0) + 4 >> 2] = 0, l = l + 1 | 0;
            while (l >>> 0 < ((o[P >> 2] | 0) + 1 | 0) >>> 0);
          }
        } else _ = 0;
        r2(_), o[u >> 2] = 0, _ = u + 4 | 0, r2(o[_ >> 2] | 0), o[_ >> 2] = 0, _ = u + 12 | 0, r2(o[_ >> 2] | 0), o[_ >> 2] = 0, f0 = T;
      }
      function l1(u) {
        u = u | 0;
        var _ = 0, l = 0, P = 0, T = 0;
        if (T = f0, _ = o[u + 40 >> 2] | 0, !_) {
          f0 = T;
          return;
        }
        P = u + 4 | 0, l = 0;
        do
          o[(o[P >> 2] | 0) + (l << 2) >> 2] = (o[u >> 2] | 0) + (l * 40 | 0), l = l + 1 | 0;
        while (l >>> 0 < _ >>> 0);
        f0 = T;
      }
      function j1(u, _, l, P) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0;
        var T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0, y0 = 0, S0 = 0, E0 = 0;
        if (y0 = f0, B0 = u + 16 | 0, o[B0 >> 2] = 0, o[u + 20 >> 2] = 0, !P)
          return _ = 0, f0 = y0, _ | 0;
        m0 = u + 48 | 0, P = o[m0 >> 2] | 0, T = (P | 0) == (_ | 0);
        e: do
          if (!T && (A0 = u + 32 | 0, e0 = o[A0 >> 2] | 0, j = ((P + 1 | 0) >>> 0) % (e0 >>> 0) | 0, (j | 0) != (_ | 0))) {
            for (w0 = u + 28 | 0, v0 = o[(o[u >> 2] | 0) + ((o[w0 >> 2] | 0) * 40 | 0) >> 2] | 0, h0 = u + 40 | 0, p0 = u + 24 | 0, c0 = u + 44 | 0, d0 = u + 56 | 0, k0 = u + 12 | 0, s0 = j; ; ) {
              if (j = o[h0 >> 2] | 0, !j) j = 0;
              else {
                i0 = o[u >> 2] | 0, C = 0;
                do
                  ((o[i0 + (C * 40 | 0) + 20 >> 2] | 0) + -1 | 0) >>> 0 < 2 && (P = o[i0 + (C * 40 | 0) + 12 >> 2] | 0, o[i0 + (C * 40 | 0) + 8 >> 2] = P - (P >>> 0 > s0 >>> 0 ? e0 : 0)), C = C + 1 | 0;
                while ((C | 0) != (j | 0));
              }
              if (j >>> 0 >= (o[p0 >> 2] | 0) >>> 0) {
                if (!j) {
                  P = 1, q = 46;
                  break;
                }
                for (T = o[u >> 2] | 0, C = 0, e0 = -1, i0 = 0; ((o[T + (C * 40 | 0) + 20 >> 2] | 0) + -1 | 0) >>> 0 < 2 ? (P = o[T + (C * 40 | 0) + 8 >> 2] | 0, t0 = (P | 0) < (i0 | 0) | (e0 | 0) == -1, q = t0 ? C : e0, i0 = t0 ? P : i0) : q = e0, C = C + 1 | 0, (C | 0) != (j | 0); )
                  e0 = q;
                if ((q | 0) <= -1) {
                  P = 1, q = 46;
                  break;
                }
                e0 = j + -1 | 0, o[T + (q * 40 | 0) + 20 >> 2] = 0, o[h0 >> 2] = e0, o[T + (q * 40 | 0) + 24 >> 2] | 0 || (o[c0 >> 2] = (o[c0 >> 2] | 0) + -1), j = e0;
              }
              if (e0 = o[c0 >> 2] | 0, t0 = o[w0 >> 2] | 0, e0 >>> 0 >= t0 >>> 0) {
                P = (o[d0 >> 2] | 0) == 0;
                do
                  if (P) {
                    q = o[u >> 2] | 0, T = 0, i0 = 2147483647, C = 0;
                    do
                      o[q + (T * 40 | 0) + 24 >> 2] | 0 && (E0 = o[q + (T * 40 | 0) + 16 >> 2] | 0, S0 = (E0 | 0) < (i0 | 0), i0 = S0 ? E0 : i0, C = S0 ? q + (T * 40 | 0) | 0 : C), T = T + 1 | 0;
                    while (T >>> 0 <= t0 >>> 0);
                    (C | 0) != 0 && (T = o[B0 >> 2] | 0, q = o[k0 >> 2] | 0, o[q + (T << 4) >> 2] = o[C >> 2], o[q + (T << 4) + 12 >> 2] = o[C + 36 >> 2], o[q + (T << 4) + 4 >> 2] = o[C + 28 >> 2], o[q + (T << 4) + 8 >> 2] = o[C + 32 >> 2], o[B0 >> 2] = T + 1, o[C + 24 >> 2] = 0, (o[C + 20 >> 2] | 0) == 0) && (e0 = e0 + -1 | 0, o[c0 >> 2] = e0);
                  }
                while (e0 >>> 0 >= t0 >>> 0);
              }
              if (P = o[u >> 2] | 0, o[P + (t0 * 40 | 0) + 20 >> 2] = 1, o[P + (t0 * 40 | 0) + 12 >> 2] = s0, o[P + (t0 * 40 | 0) + 8 >> 2] = s0, o[P + (t0 * 40 | 0) + 16 >> 2] = 0, o[P + (t0 * 40 | 0) + 24 >> 2] = 0, o[c0 >> 2] = e0 + 1, o[h0 >> 2] = j + 1, c1(P, t0 + 1 | 0), e0 = o[A0 >> 2] | 0, s0 = ((s0 + 1 | 0) >>> 0) % (e0 >>> 0) | 0, (s0 | 0) == (_ | 0)) {
                q = 31;
                break;
              }
            }
            if ((q | 0) == 31) {
              if (q = o[B0 >> 2] | 0, !q) {
                q = 41;
                break;
              }
              for (P = o[k0 >> 2] | 0, C = o[w0 >> 2] | 0, i0 = o[u >> 2] | 0, e0 = i0 + (C * 40 | 0) | 0, j = o[e0 >> 2] | 0, T = 0; (o[P + (T << 4) >> 2] | 0) != (j | 0); )
                if (T = T + 1 | 0, T >>> 0 >= q >>> 0) {
                  q = 41;
                  break e;
                }
              if (C)
                P = 0;
              else {
                q = 41;
                break;
              }
              for (; T = i0 + (P * 40 | 0) | 0, P = P + 1 | 0, (o[T >> 2] | 0) != (v0 | 0); )
                if (P >>> 0 >= C >>> 0) {
                  q = 41;
                  break e;
                }
              o[T >> 2] = j, o[e0 >> 2] = v0, q = 41;
              break;
            } else if ((q | 0) == 46)
              return f0 = y0, P | 0;
          } else q = 39;
        while (!1);
        if ((q | 0) == 39 && l) {
          if (T)
            return _ = 1, f0 = y0, _ | 0;
          q = 41;
        }
        do
          if ((q | 0) == 41) {
            if (!l) {
              P = o[m0 >> 2] | 0;
              break;
            }
            return o[m0 >> 2] = _, _ = 0, f0 = y0, _ | 0;
          }
        while (!1);
        return (P | 0) == (_ | 0) ? (_ = 0, f0 = y0, _ | 0) : (u = o[u + 32 >> 2] | 0, o[m0 >> 2] = ((_ + -1 + u | 0) >>> 0) % (u >>> 0) | 0, _ = 0, f0 = y0, _ | 0);
      }
      function er(u) {
        u = u | 0;
        var _ = 0, l = 0, P = 0;
        return P = f0, l = u + 20 | 0, _ = o[l >> 2] | 0, _ >>> 0 >= (o[u + 16 >> 2] | 0) >>> 0 ? (_ = 0, f0 = P, _ | 0) : (u = o[u + 12 >> 2] | 0, o[l >> 2] = _ + 1, _ = u + (_ << 4) | 0, f0 = P, _ | 0);
      }
      function a1(u) {
        u = u | 0;
        var _ = 0, l = 0, P = 0, T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0;
        if (j = f0, T = o[u >> 2] | 0, !T) {
          f0 = j;
          return;
        }
        if (o[u + 60 >> 2] = 1, o[u + 56 >> 2] | 0) {
          f0 = j;
          return;
        }
        for (q = o[u + 28 >> 2] | 0, C = u + 16 | 0, i0 = u + 12 | 0, P = u + 44 | 0, u = 0, _ = 2147483647, l = 0; ; )
          if (o[T + (u * 40 | 0) + 24 >> 2] | 0 && (t0 = o[T + (u * 40 | 0) + 16 >> 2] | 0, e0 = (t0 | 0) < (_ | 0), _ = e0 ? t0 : _, l = e0 ? T + (u * 40 | 0) | 0 : l), u = u + 1 | 0, !(u >>> 0 <= q >>> 0)) {
            if (!l) break;
            if (e0 = o[C >> 2] | 0, _ = o[i0 >> 2] | 0, o[_ + (e0 << 4) >> 2] = o[l >> 2], o[_ + (e0 << 4) + 12 >> 2] = o[l + 36 >> 2], o[_ + (e0 << 4) + 4 >> 2] = o[l + 28 >> 2], o[_ + (e0 << 4) + 8 >> 2] = o[l + 32 >> 2], o[C >> 2] = e0 + 1, o[l + 24 >> 2] = 0, o[l + 20 >> 2] | 0) {
              u = 0, _ = 2147483647, l = 0;
              continue;
            }
            o[P >> 2] = (o[P >> 2] | 0) + -1, u = 0, _ = 2147483647, l = 0;
          }
        f0 = j;
      }
      function c1(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0, T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0;
        B0 = f0, f0 = f0 + 32 | 0, d0 = B0 + 16 | 0, w0 = B0, c0 = 7;
        do {
          if (c0 >>> 0 < _ >>> 0) {
            s0 = c0;
            do {
              t0 = u + (s0 * 40 | 0) | 0, e0 = o[t0 >> 2] | 0, t0 = o[t0 + 4 >> 2] | 0, p0 = o[u + (s0 * 40 | 0) + 8 >> 2] | 0, j = u + (s0 * 40 | 0) + 12 | 0, k0 = o[j + 4 >> 2] | 0, h0 = d0, o[h0 >> 2] = o[j >> 2], o[h0 + 4 >> 2] = k0, h0 = o[u + (s0 * 40 | 0) + 20 >> 2] | 0, k0 = o[u + (s0 * 40 | 0) + 24 >> 2] | 0, j = u + (s0 * 40 | 0) + 28 | 0, o[w0 + 0 >> 2] = o[j + 0 >> 2], o[w0 + 4 >> 2] = o[j + 4 >> 2], o[w0 + 8 >> 2] = o[j + 8 >> 2];
              e: do
                if (s0 >>> 0 < c0 >>> 0)
                  l = s0, A0 = 8;
                else {
                  T = (k0 | 0) == 0, i0 = h0 + -1 | 0, j = i0 >>> 0 < 2;
                  r: do
                    if (h0)
                      for (l = s0; ; ) {
                        T = l - c0 | 0, P = o[u + (T * 40 | 0) + 20 >> 2] | 0;
                        do
                          if (P) {
                            if (P = P + -1 | 0, (P | i0) >>> 0 < 2) {
                              if (P = o[u + (T * 40 | 0) + 8 >> 2] | 0, (P | 0) > (p0 | 0))
                                break r;
                              if (l = u + (l * 40 | 0) | 0, (P | 0) < (p0 | 0))
                                break;
                              break e;
                            }
                            if (P >>> 0 < 2 || !j && (o[u + (T * 40 | 0) + 8 >> 2] | 0) <= (p0 | 0))
                              break r;
                            A0 = 16;
                          } else A0 = 16;
                        while (!1);
                        (A0 | 0) == 16 && (A0 = 0, l = u + (l * 40 | 0) | 0), P = l + 0 | 0, q = u + (T * 40 | 0) + 0 | 0, C = P + 40 | 0;
                        do
                          o[P >> 2] = o[q >> 2], P = P + 4 | 0, q = q + 4 | 0;
                        while ((P | 0) < (C | 0));
                        if (T >>> 0 < c0 >>> 0) {
                          l = T, A0 = 8;
                          break e;
                        } else l = T;
                      }
                    else
                      for (P = s0; ; ) {
                        if (l = P - c0 | 0, o[u + (l * 40 | 0) + 20 >> 2] | 0) {
                          l = P;
                          break r;
                        }
                        if ((o[u + (l * 40 | 0) + 24 >> 2] | 0) != 0 | T) {
                          l = P;
                          break r;
                        }
                        P = u + (P * 40 | 0) + 0 | 0, q = u + (l * 40 | 0) + 0 | 0, C = P + 40 | 0;
                        do
                          o[P >> 2] = o[q >> 2], P = P + 4 | 0, q = q + 4 | 0;
                        while ((P | 0) < (C | 0));
                        if (l >>> 0 < c0 >>> 0) {
                          A0 = 8;
                          break e;
                        } else P = l;
                      }
                  while (!1);
                  l = u + (l * 40 | 0) | 0;
                }
              while (!1);
              (A0 | 0) == 8 && (A0 = 0, l = u + (l * 40 | 0) | 0), j = l, o[j >> 2] = e0, o[j + 4 >> 2] = t0, o[l + 8 >> 2] = p0, j = d0, e0 = o[j + 4 >> 2] | 0, t0 = l + 12 | 0, o[t0 >> 2] = o[j >> 2], o[t0 + 4 >> 2] = e0, o[l + 20 >> 2] = h0, o[l + 24 >> 2] = k0, t0 = l + 28 | 0, o[t0 + 0 >> 2] = o[w0 + 0 >> 2], o[t0 + 4 >> 2] = o[w0 + 4 >> 2], o[t0 + 8 >> 2] = o[w0 + 8 >> 2], s0 = s0 + 1 | 0;
            } while ((s0 | 0) != (_ | 0));
          }
          c0 = c0 >>> 1;
        } while ((c0 | 0) != 0);
        f0 = B0;
      }
      function Le(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0, T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0;
        for (e0 = f0, P = o[u + 4 >> 2] | 0, T = o[u + 16 >> 2] | 0, q = o[u + 20 >> 2] | 0, i0 = P << 2, j = _ + 256 | 0, C = 16, u = o[u + 12 >> 2] | 0, l = _; t0 = o[l + 4 >> 2] | 0, o[u >> 2] = o[l >> 2], o[u + 4 >> 2] = t0, t0 = o[l + 12 >> 2] | 0, o[u + 8 >> 2] = o[l + 8 >> 2], o[u + 12 >> 2] = t0, C = C + -1 | 0, C; )
          u = u + (i0 << 2) | 0, l = l + 16 | 0;
        i0 = P << 1 & 2147483646, C = o[_ + 260 >> 2] | 0, o[T >> 2] = o[j >> 2], o[T + 4 >> 2] = C, j = o[_ + 268 >> 2] | 0, o[T + (i0 << 2) >> 2] = o[_ + 264 >> 2], o[T + ((i0 | 1) << 2) >> 2] = j, j = P << 2, C = o[_ + 276 >> 2] | 0, o[T + (j << 2) >> 2] = o[_ + 272 >> 2], o[T + ((j | 1) << 2) >> 2] = C, j = j + i0 | 0, C = o[_ + 284 >> 2] | 0, o[T + (j << 2) >> 2] = o[_ + 280 >> 2], o[T + ((j | 1) << 2) >> 2] = C, j = j + i0 | 0, C = o[_ + 292 >> 2] | 0, o[T + (j << 2) >> 2] = o[_ + 288 >> 2], o[T + ((j | 1) << 2) >> 2] = C, j = j + i0 | 0, C = o[_ + 300 >> 2] | 0, o[T + (j << 2) >> 2] = o[_ + 296 >> 2], o[T + ((j | 1) << 2) >> 2] = C, j = j + i0 | 0, C = o[_ + 308 >> 2] | 0, o[T + (j << 2) >> 2] = o[_ + 304 >> 2], o[T + ((j | 1) << 2) >> 2] = C, j = j + i0 | 0, C = o[_ + 316 >> 2] | 0, o[T + (j << 2) >> 2] = o[_ + 312 >> 2], o[T + ((j | 1) << 2) >> 2] = C, j = o[_ + 324 >> 2] | 0, o[q >> 2] = o[_ + 320 >> 2], o[q + 4 >> 2] = j, j = o[_ + 332 >> 2] | 0, o[q + (i0 << 2) >> 2] = o[_ + 328 >> 2], o[q + ((i0 | 1) << 2) >> 2] = j, j = P << 2, C = o[_ + 340 >> 2] | 0, o[q + (j << 2) >> 2] = o[_ + 336 >> 2], o[q + ((j | 1) << 2) >> 2] = C, j = j + i0 | 0, C = o[_ + 348 >> 2] | 0, o[q + (j << 2) >> 2] = o[_ + 344 >> 2], o[q + ((j | 1) << 2) >> 2] = C, j = j + i0 | 0, C = o[_ + 356 >> 2] | 0, o[q + (j << 2) >> 2] = o[_ + 352 >> 2], o[q + ((j | 1) << 2) >> 2] = C, j = j + i0 | 0, C = o[_ + 364 >> 2] | 0, o[q + (j << 2) >> 2] = o[_ + 360 >> 2], o[q + ((j | 1) << 2) >> 2] = C, j = j + i0 | 0, C = o[_ + 372 >> 2] | 0, o[q + (j << 2) >> 2] = o[_ + 368 >> 2], o[q + ((j | 1) << 2) >> 2] = C, j = j + i0 | 0, i0 = o[_ + 380 >> 2] | 0, o[q + (j << 2) >> 2] = o[_ + 376 >> 2], o[q + ((j | 1) << 2) >> 2] = i0, f0 = e0;
      }
      function rr(u, _, l, P) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0;
        var T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0, y0 = 0;
        v0 = f0, p0 = o[u + 4 >> 2] | 0, d0 = _0(o[u + 8 >> 2] | 0, p0) | 0, A0 = (_ >>> 0) % (p0 >>> 0) | 0, B0 = o[u >> 2] | 0, k0 = _ - A0 | 0, u = (k0 << 8) + (A0 << 4) | 0, w0 = d0 << 8, A0 = A0 << 3, s0 = p0 << 4, t0 = p0 << 2 & 1073741820, i0 = t0 << 1, j = i0 + t0 | 0, e0 = 0;
        do
          C = o[3344 + (e0 << 2) >> 2] | 0, q = o[3408 + (e0 << 2) >> 2] | 0, _ = (q << 4) + C | 0, T = l + _ | 0, q = u + C + (_0(q, s0) | 0) | 0, C = B0 + q | 0, c0 = o[P + (e0 << 6) >> 2] | 0, (c0 | 0) == 16777215 ? (q = o[l + (_ + 16) >> 2] | 0, o[C >> 2] = o[T >> 2], o[C + (t0 << 2) >> 2] = q, q = o[l + (_ + 48) >> 2] | 0, o[C + (i0 << 2) >> 2] = o[l + (_ + 32) >> 2], o[C + (j << 2) >> 2] = q) : (y0 = l0[l + (_ + 1) >> 0] | 0, m0 = o[P + (e0 << 6) + 4 >> 2] | 0, n0[C >> 0] = n0[3472 + (c0 + 512 + (l0[T >> 0] | 0)) >> 0] | 0, c0 = l0[l + (_ + 2) >> 0] | 0, h0 = o[P + (e0 << 6) + 8 >> 2] | 0, n0[B0 + (q + 1) >> 0] = n0[3472 + ((y0 | 512) + m0) >> 0] | 0, C = l0[l + (_ + 3) >> 0] | 0, T = o[P + (e0 << 6) + 12 >> 2] | 0, n0[B0 + (q + 2) >> 0] = n0[3472 + (h0 + 512 + c0) >> 0] | 0, n0[B0 + (q + 3) >> 0] = n0[3472 + (T + 512 + C) >> 0] | 0, C = q + s0 | 0, T = l0[l + (_ + 17) >> 0] | 0, q = o[P + (e0 << 6) + 20 >> 2] | 0, n0[B0 + C >> 0] = n0[3472 + ((o[P + (e0 << 6) + 16 >> 2] | 0) + 512 + (l0[l + (_ + 16) >> 0] | 0)) >> 0] | 0, c0 = l0[l + (_ + 18) >> 0] | 0, h0 = o[P + (e0 << 6) + 24 >> 2] | 0, n0[B0 + (C + 1) >> 0] = n0[3472 + ((T | 512) + q) >> 0] | 0, q = l0[l + (_ + 19) >> 0] | 0, T = o[P + (e0 << 6) + 28 >> 2] | 0, n0[B0 + (C + 2) >> 0] = n0[3472 + (h0 + 512 + c0) >> 0] | 0, n0[B0 + (C + 3) >> 0] = n0[3472 + (T + 512 + q) >> 0] | 0, C = C + s0 | 0, q = l0[l + (_ + 33) >> 0] | 0, T = o[P + (e0 << 6) + 36 >> 2] | 0, n0[B0 + C >> 0] = n0[3472 + ((o[P + (e0 << 6) + 32 >> 2] | 0) + 512 + (l0[l + (_ + 32) >> 0] | 0)) >> 0] | 0, c0 = l0[l + (_ + 34) >> 0] | 0, h0 = o[P + (e0 << 6) + 40 >> 2] | 0, n0[B0 + (C + 1) >> 0] = n0[3472 + ((q | 512) + T) >> 0] | 0, T = l0[l + (_ + 35) >> 0] | 0, q = o[P + (e0 << 6) + 44 >> 2] | 0, n0[B0 + (C + 2) >> 0] = n0[3472 + (h0 + 512 + c0) >> 0] | 0, n0[B0 + (C + 3) >> 0] = n0[3472 + (q + 512 + T) >> 0] | 0, C = C + s0 | 0, T = l0[l + (_ + 49) >> 0] | 0, q = o[P + (e0 << 6) + 52 >> 2] | 0, n0[B0 + C >> 0] = n0[3472 + ((o[P + (e0 << 6) + 48 >> 2] | 0) + 512 + (l0[l + (_ + 48) >> 0] | 0)) >> 0] | 0, c0 = l0[l + (_ + 50) >> 0] | 0, h0 = o[P + (e0 << 6) + 56 >> 2] | 0, n0[B0 + (C + 1) >> 0] = n0[3472 + ((T | 512) + q) >> 0] | 0, q = l0[l + (_ + 51) >> 0] | 0, T = o[P + (e0 << 6) + 60 >> 2] | 0, n0[B0 + (C + 2) >> 0] = n0[3472 + (h0 + 512 + c0) >> 0] | 0, n0[B0 + (C + 3) >> 0] = n0[3472 + (T + 512 + q) >> 0] | 0), e0 = e0 + 1 | 0;
        while ((e0 | 0) != 16);
        h0 = d0 << 6, d0 = p0 << 3 & 2147483640, p0 = l + 256 | 0, l = l + 320 | 0, i0 = A0 + w0 + (k0 << 6) | 0, s0 = d0 >>> 2, q = d0 >>> 1, C = q + s0 | 0, t0 = 16;
        do
          c0 = t0 & 3, T = o[3344 + (c0 << 2) >> 2] | 0, c0 = o[3408 + (c0 << 2) >> 2] | 0, _ = t0 >>> 0 > 19, j = _ ? l : p0, e0 = (c0 << 3) + T | 0, u = j + e0 | 0, c0 = i0 + (_ ? h0 : 0) + T + (_0(c0, d0) | 0) | 0, T = B0 + c0 | 0, _ = o[P + (t0 << 6) >> 2] | 0, (_ | 0) == 16777215 ? (m0 = o[j + (e0 + 8) >> 2] | 0, o[T >> 2] = o[u >> 2], o[T + (s0 << 2) >> 2] = m0, m0 = o[j + (e0 + 24) >> 2] | 0, o[T + (q << 2) >> 2] = o[j + (e0 + 16) >> 2], o[T + (C << 2) >> 2] = m0) : (w0 = l0[j + (e0 + 1) >> 0] | 0, m0 = o[P + (t0 << 6) + 4 >> 2] | 0, n0[T >> 0] = n0[3472 + (_ + 512 + (l0[u >> 0] | 0)) >> 0] | 0, A0 = l0[j + (e0 + 2) >> 0] | 0, k0 = o[P + (t0 << 6) + 8 >> 2] | 0, n0[B0 + (c0 + 1) >> 0] = n0[3472 + ((w0 | 512) + m0) >> 0] | 0, m0 = l0[j + (e0 + 3) >> 0] | 0, w0 = o[P + (t0 << 6) + 12 >> 2] | 0, n0[B0 + (c0 + 2) >> 0] = n0[3472 + (k0 + 512 + A0) >> 0] | 0, n0[B0 + (c0 + 3) >> 0] = n0[3472 + (w0 + 512 + m0) >> 0] | 0, m0 = c0 + d0 | 0, w0 = l0[j + (e0 + 9) >> 0] | 0, A0 = o[P + (t0 << 6) + 20 >> 2] | 0, n0[B0 + m0 >> 0] = n0[3472 + ((o[P + (t0 << 6) + 16 >> 2] | 0) + 512 + (l0[j + (e0 + 8) >> 0] | 0)) >> 0] | 0, k0 = l0[j + (e0 + 10) >> 0] | 0, c0 = o[P + (t0 << 6) + 24 >> 2] | 0, n0[B0 + (m0 + 1) >> 0] = n0[3472 + ((w0 | 512) + A0) >> 0] | 0, A0 = l0[j + (e0 + 11) >> 0] | 0, w0 = o[P + (t0 << 6) + 28 >> 2] | 0, n0[B0 + (m0 + 2) >> 0] = n0[3472 + (c0 + 512 + k0) >> 0] | 0, n0[B0 + (m0 + 3) >> 0] = n0[3472 + (w0 + 512 + A0) >> 0] | 0, m0 = m0 + d0 | 0, A0 = l0[j + (e0 + 17) >> 0] | 0, w0 = o[P + (t0 << 6) + 36 >> 2] | 0, n0[B0 + m0 >> 0] = n0[3472 + ((o[P + (t0 << 6) + 32 >> 2] | 0) + 512 + (l0[j + (e0 + 16) >> 0] | 0)) >> 0] | 0, k0 = l0[j + (e0 + 18) >> 0] | 0, c0 = o[P + (t0 << 6) + 40 >> 2] | 0, n0[B0 + (m0 + 1) >> 0] = n0[3472 + ((A0 | 512) + w0) >> 0] | 0, w0 = l0[j + (e0 + 19) >> 0] | 0, A0 = o[P + (t0 << 6) + 44 >> 2] | 0, n0[B0 + (m0 + 2) >> 0] = n0[3472 + (c0 + 512 + k0) >> 0] | 0, n0[B0 + (m0 + 3) >> 0] = n0[3472 + (A0 + 512 + w0) >> 0] | 0, m0 = m0 + d0 | 0, w0 = l0[j + (e0 + 25) >> 0] | 0, A0 = o[P + (t0 << 6) + 52 >> 2] | 0, n0[B0 + m0 >> 0] = n0[3472 + ((o[P + (t0 << 6) + 48 >> 2] | 0) + 512 + (l0[j + (e0 + 24) >> 0] | 0)) >> 0] | 0, k0 = l0[j + (e0 + 26) >> 0] | 0, c0 = o[P + (t0 << 6) + 56 >> 2] | 0, n0[B0 + (m0 + 1) >> 0] = n0[3472 + ((w0 | 512) + A0) >> 0] | 0, A0 = l0[j + (e0 + 27) >> 0] | 0, w0 = o[P + (t0 << 6) + 60 >> 2] | 0, n0[B0 + (m0 + 2) >> 0] = n0[3472 + (c0 + 512 + k0) >> 0] | 0, n0[B0 + (m0 + 3) >> 0] = n0[3472 + (w0 + 512 + A0) >> 0] | 0), t0 = t0 + 1 | 0;
        while ((t0 | 0) != 24);
        f0 = v0;
      }
      function ir(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0, T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0, y0 = 0, S0 = 0, E0 = 0, T0 = 0, g0 = 0, U0 = 0, L0 = 0, O0 = 0, Y0 = 0, H0 = 0, Q0 = 0, N0 = 0, J0 = 0, $0 = 0, a2 = 0, V2 = 0, F2 = 0, H2 = 0, t2 = 0, m2 = 0, x0 = 0, n2 = 0, f2 = 0, z2 = 0, $2 = 0, w2 = 0, j0 = 0, Pe = 0, y2 = 0, fe = 0, G2 = 0, j2 = 0, I2 = 0, ue = 0, i2 = 0, le = 0, we = 0, Z2 = 0, he = 0, T2 = 0, c2 = 0, W2 = 0, J2 = 0, C2 = 0, W0 = 0, O2 = 0, Q2 = 0, ke = 0, me = 0, ve = 0, ye = 0, Be = 0, ge = 0, _1 = 0, r1 = 0, D2 = 0, M1 = 0, T1 = 0, R1 = 0, i1 = 0, ze = 0, Ie = 0, Oe = 0, p2 = 0, Ae = 0, xe = 0, be = 0, Se = 0, Ee = 0, Ue = 0, _e = 0, Me = 0, Te = 0, ee = 0, Re = 0, Fe = 0, We = 0, $e = 0, Je = 0, ae = 0, Ne = 0;
        if (Ne = f0, f0 = f0 + 176 | 0, i2 = Ne + 40 | 0, p2 = Ne, G2 = o[u + 4 >> 2] | 0, we = u + 8 | 0, ee = o[we >> 2] | 0, l = _0(ee, G2) | 0, !ee) {
          f0 = Ne;
          return;
        }
        for (We = i2 + 24 | 0, $e = i2 + 16 | 0, Je = i2 + 8 | 0, Z2 = i2 + 100 | 0, he = i2 + 68 | 0, T2 = i2 + 36 | 0, c2 = i2 + 4 | 0, Ae = i2 + 120 | 0, xe = i2 + 112 | 0, be = i2 + 104 | 0, Se = i2 + 96 | 0, Ee = i2 + 88 | 0, Ue = i2 + 80 | 0, _e = i2 + 72 | 0, Me = i2 + 64 | 0, Te = i2 + 56 | 0, ee = i2 + 48 | 0, Re = i2 + 40 | 0, Fe = i2 + 32 | 0, W2 = i2 + 124 | 0, J2 = i2 + 116 | 0, C2 = i2 + 108 | 0, W0 = i2 + 92 | 0, O2 = i2 + 84 | 0, Q2 = i2 + 76 | 0, ke = i2 + 60 | 0, me = i2 + 52 | 0, ve = i2 + 44 | 0, ye = i2 + 28 | 0, Be = i2 + 20 | 0, ge = i2 + 12 | 0, ue = p2 + 28 | 0, le = p2 + 32 | 0, Oe = p2 + 24 | 0, D2 = G2 << 4, Ie = 0 - D2 | 0, r1 = Ie << 1, i1 = _0(G2, -48) | 0, ze = G2 << 5, M1 = Ie << 2, R1 = G2 * 48 | 0, _1 = G2 << 6, I2 = p2 + 24 | 0, j2 = p2 + 12 | 0, T1 = l << 8, Pe = l << 6, y2 = G2 << 3, n2 = D2 | 4, z2 = p2 + 16 | 0, w2 = p2 + 20 | 0, fe = p2 + 12 | 0, f2 = p2 + 4 | 0, $2 = p2 + 8 | 0, m2 = 0, j0 = 0, x0 = _; ; ) {
          _ = o[x0 + 8 >> 2] | 0;
          do
            if ((_ | 0) != 1) {
              t2 = x0 + 200 | 0, j = o[t2 >> 2] | 0;
              do
                if (!j) l = 1;
                else {
                  if ((_ | 0) == 2 && (o[x0 + 4 >> 2] | 0) != (o[j + 4 >> 2] | 0)) {
                    l = 1;
                    break;
                  }
                  l = 5;
                }
              while (!1);
              H2 = x0 + 204 | 0, C = o[H2 >> 2] | 0;
              do
                if (C) {
                  if ((_ | 0) == 2 && (o[x0 + 4 >> 2] | 0) != (o[C + 4 >> 2] | 0))
                    break;
                  l = l | 2;
                }
              while (!1);
              F2 = (l & 2 | 0) == 0;
              do
                if (F2)
                  o[We >> 2] = 0, o[$e >> 2] = 0, o[Je >> 2] = 0, o[i2 >> 2] = 0, i0 = 0;
                else {
                  if ((o[x0 >> 2] | 0) >>> 0 <= 5 && (o[C >> 2] | 0) >>> 0 <= 5) {
                    (u0[x0 + 28 >> 1] | 0) == 0 && (u0[C + 48 >> 1] | 0) == 0 ? (o[x0 + 116 >> 2] | 0) == (o[C + 124 >> 2] | 0) && (y0 = (u0[x0 + 132 >> 1] | 0) - (u0[C + 172 >> 1] | 0) | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) <= 3) ? (P = (u0[x0 + 134 >> 1] | 0) - (u0[C + 174 >> 1] | 0) | 0, P = (((P | 0) > -1 ? P : 0 - P | 0) | 0) > 3 & 1) : P = 1 : P = 2, o[i2 >> 2] = P, (u0[x0 + 30 >> 1] | 0) == 0 && (u0[C + 50 >> 1] | 0) == 0 ? (o[x0 + 116 >> 2] | 0) == (o[C + 124 >> 2] | 0) && (y0 = (u0[x0 + 136 >> 1] | 0) - (u0[C + 176 >> 1] | 0) | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) <= 3) ? (T = (u0[x0 + 138 >> 1] | 0) - (u0[C + 178 >> 1] | 0) | 0, T = (((T | 0) > -1 ? T : 0 - T | 0) | 0) > 3 & 1) : T = 1 : T = 2, o[Je >> 2] = T, (u0[x0 + 36 >> 1] | 0) == 0 && (u0[C + 56 >> 1] | 0) == 0 ? (o[x0 + 120 >> 2] | 0) == (o[C + 128 >> 2] | 0) && (y0 = (u0[x0 + 148 >> 1] | 0) - (u0[C + 188 >> 1] | 0) | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) <= 3) ? (q = (u0[x0 + 150 >> 1] | 0) - (u0[C + 190 >> 1] | 0) | 0, q = (((q | 0) > -1 ? q : 0 - q | 0) | 0) > 3 & 1) : q = 1 : q = 2, o[$e >> 2] = q, (u0[x0 + 38 >> 1] | 0) == 0 && (u0[C + 58 >> 1] | 0) == 0 ? (o[x0 + 120 >> 2] | 0) == (o[C + 128 >> 2] | 0) && (y0 = (u0[x0 + 152 >> 1] | 0) - (u0[C + 192 >> 1] | 0) | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) <= 3) ? (_ = (u0[x0 + 154 >> 1] | 0) - (u0[C + 194 >> 1] | 0) | 0, _ = (((_ | 0) > -1 ? _ : 0 - _ | 0) | 0) > 3 & 1) : _ = 1 : _ = 2, o[We >> 2] = _, i0 = (T | P | q | _ | 0) != 0 & 1;
                    break;
                  }
                  o[We >> 2] = 4, o[$e >> 2] = 4, o[Je >> 2] = 4, o[i2 >> 2] = 4, i0 = 1;
                }
              while (!1);
              V2 = (l & 4 | 0) == 0;
              do
                if (V2)
                  o[Z2 >> 2] = 0, o[he >> 2] = 0, o[T2 >> 2] = 0, o[c2 >> 2] = 0, q = o[x0 >> 2] | 0;
                else {
                  if (q = o[x0 >> 2] | 0, q >>> 0 <= 5 && (o[j >> 2] | 0) >>> 0 <= 5) {
                    if ((u0[x0 + 28 >> 1] | 0) == 0 && (u0[j + 38 >> 1] | 0) == 0 ? (o[x0 + 116 >> 2] | 0) == (o[j + 120 >> 2] | 0) && (y0 = (u0[x0 + 132 >> 1] | 0) - (u0[j + 152 >> 1] | 0) | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) <= 3) ? (T = (u0[x0 + 134 >> 1] | 0) - (u0[j + 154 >> 1] | 0) | 0, T = (((T | 0) > -1 ? T : 0 - T | 0) | 0) > 3 & 1) : T = 1 : T = 2, o[c2 >> 2] = T, (u0[x0 + 32 >> 1] | 0) == 0 && (u0[j + 42 >> 1] | 0) == 0 ? (o[x0 + 116 >> 2] | 0) == (o[j + 120 >> 2] | 0) && (y0 = (u0[x0 + 140 >> 1] | 0) - (u0[j + 160 >> 1] | 0) | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) <= 3) ? (P = (u0[x0 + 142 >> 1] | 0) - (u0[j + 162 >> 1] | 0) | 0, P = (((P | 0) > -1 ? P : 0 - P | 0) | 0) > 3 & 1) : P = 1 : P = 2, o[T2 >> 2] = P, (u0[x0 + 44 >> 1] | 0) == 0 && (u0[j + 54 >> 1] | 0) == 0 ? (o[x0 + 124 >> 2] | 0) == (o[j + 128 >> 2] | 0) && (y0 = (u0[x0 + 164 >> 1] | 0) - (u0[j + 184 >> 1] | 0) | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) <= 3) ? (_ = (u0[x0 + 166 >> 1] | 0) - (u0[j + 186 >> 1] | 0) | 0, _ = (((_ | 0) > -1 ? _ : 0 - _ | 0) | 0) > 3 & 1) : _ = 1 : _ = 2, o[he >> 2] = _, (u0[x0 + 48 >> 1] | 0) == 0 && (u0[j + 58 >> 1] | 0) == 0 ? (o[x0 + 124 >> 2] | 0) == (o[j + 128 >> 2] | 0) && (y0 = (u0[x0 + 172 >> 1] | 0) - (u0[j + 192 >> 1] | 0) | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) <= 3) ? (C = (u0[x0 + 174 >> 1] | 0) - (u0[j + 194 >> 1] | 0) | 0, C = (((C | 0) > -1 ? C : 0 - C | 0) | 0) > 3 & 1) : C = 1 : C = 2, o[Z2 >> 2] = C, i0) break;
                    i0 = (P | T | _ | C | 0) != 0 & 1;
                    break;
                  }
                  o[Z2 >> 2] = 4, o[he >> 2] = 4, o[T2 >> 2] = 4, o[c2 >> 2] = 4, i0 = 1;
                }
              while (!1);
              if (q >>> 0 <= 5) {
                do
                  if ((_r(q) | 0) != 1)
                    if (_ = o[x0 >> 2] | 0, (_ | 0) == 2) {
                      w0 = x0 + 28 | 0, A0 = u0[x0 + 32 >> 1] | 0, A0 << 16 >> 16 ? _ = 2 : _ = (u0[w0 >> 1] | 0) != 0 ? 2 : 0, o[Fe >> 2] = _, s0 = u0[x0 + 34 >> 1] | 0, m0 = s0 << 16 >> 16 == 0, m0 ? _ = (u0[x0 + 30 >> 1] | 0) != 0 ? 2 : 0 : _ = 2, o[Re >> 2] = _, l = u0[x0 + 40 >> 1] | 0, v0 = l << 16 >> 16 == 0, v0 ? C = (u0[x0 + 36 >> 1] | 0) != 0 ? 2 : 0 : C = 2, o[ee >> 2] = C, k0 = u0[x0 + 42 >> 1] | 0, B0 = k0 << 16 >> 16 == 0, B0 ? C = (u0[x0 + 38 >> 1] | 0) != 0 ? 2 : 0 : C = 2, o[Te >> 2] = C, P = u0[x0 + 48 >> 1] | 0, P << 16 >> 16 ? C = 2 : C = (u0[x0 + 44 >> 1] | 0) != 0 ? 2 : 0, o[Se >> 2] = C, q = u0[x0 + 50 >> 1] | 0, y0 = q << 16 >> 16 == 0, y0 ? C = (u0[x0 + 46 >> 1] | 0) != 0 ? 2 : 0 : C = 2, o[be >> 2] = C, t0 = u0[x0 + 56 >> 1] | 0, _ = t0 << 16 >> 16 == 0, _ ? j = (u0[x0 + 52 >> 1] | 0) != 0 ? 2 : 0 : j = 2, o[xe >> 2] = j, T = (u0[x0 + 58 >> 1] | 0) == 0, T ? j = (u0[x0 + 54 >> 1] | 0) != 0 ? 2 : 0 : j = 2, o[Ae >> 2] = j, c0 = u0[x0 + 44 >> 1] | 0, e0 = u0[x0 + 166 >> 1] | 0, j = u0[x0 + 142 >> 1] | 0;
                      do
                        if ((c0 | A0) << 16 >> 16)
                          j = 2;
                        else {
                          if (h0 = (u0[x0 + 164 >> 1] | 0) - (u0[x0 + 140 >> 1] | 0) | 0, (((h0 | 0) > -1 ? h0 : 0 - h0 | 0) | 0) > 3) {
                            j = 1;
                            break;
                          }
                          if (h0 = e0 - j | 0, (((h0 | 0) > -1 ? h0 : 0 - h0 | 0) | 0) > 3) {
                            j = 1;
                            break;
                          }
                          j = (o[x0 + 124 >> 2] | 0) != (o[x0 + 116 >> 2] | 0) & 1;
                        }
                      while (!1);
                      o[Me >> 2] = j, p0 = u0[x0 + 46 >> 1] | 0, e0 = u0[x0 + 170 >> 1] | 0, j = u0[x0 + 146 >> 1] | 0;
                      do
                        if ((p0 | s0) << 16 >> 16)
                          e0 = 2;
                        else {
                          if (h0 = (u0[x0 + 168 >> 1] | 0) - (u0[x0 + 144 >> 1] | 0) | 0, (((h0 | 0) > -1 ? h0 : 0 - h0 | 0) | 0) > 3) {
                            e0 = 1;
                            break;
                          }
                          if (h0 = e0 - j | 0, (((h0 | 0) > -1 ? h0 : 0 - h0 | 0) | 0) > 3) {
                            e0 = 1;
                            break;
                          }
                          e0 = (o[x0 + 124 >> 2] | 0) != (o[x0 + 116 >> 2] | 0) & 1;
                        }
                      while (!1);
                      o[_e >> 2] = e0, d0 = u0[x0 + 52 >> 1] | 0, e0 = u0[x0 + 182 >> 1] | 0, j = u0[x0 + 158 >> 1] | 0;
                      do
                        if ((d0 | l) << 16 >> 16)
                          e0 = 2;
                        else {
                          if (h0 = (u0[x0 + 180 >> 1] | 0) - (u0[x0 + 156 >> 1] | 0) | 0, (((h0 | 0) > -1 ? h0 : 0 - h0 | 0) | 0) > 3) {
                            e0 = 1;
                            break;
                          }
                          if (h0 = e0 - j | 0, (((h0 | 0) > -1 ? h0 : 0 - h0 | 0) | 0) > 3) {
                            e0 = 1;
                            break;
                          }
                          e0 = (o[x0 + 128 >> 2] | 0) != (o[x0 + 120 >> 2] | 0) & 1;
                        }
                      while (!1);
                      o[Ue >> 2] = e0, h0 = u0[x0 + 54 >> 1] | 0, e0 = u0[x0 + 186 >> 1] | 0, j = u0[x0 + 162 >> 1] | 0;
                      do
                        if ((h0 | k0) << 16 >> 16)
                          e0 = 2;
                        else {
                          if (k0 = (u0[x0 + 184 >> 1] | 0) - (u0[x0 + 160 >> 1] | 0) | 0, (((k0 | 0) > -1 ? k0 : 0 - k0 | 0) | 0) > 3) {
                            e0 = 1;
                            break;
                          }
                          if (k0 = e0 - j | 0, (((k0 | 0) > -1 ? k0 : 0 - k0 | 0) | 0) > 3) {
                            e0 = 1;
                            break;
                          }
                          e0 = (o[x0 + 128 >> 2] | 0) != (o[x0 + 120 >> 2] | 0) & 1;
                        }
                      while (!1);
                      o[Ee >> 2] = e0, C = u0[x0 + 30 >> 1] | 0, C << 16 >> 16 ? e0 = 2 : e0 = (u0[w0 >> 1] | 0) != 0 ? 2 : 0, o[ge >> 2] = e0, j = u0[x0 + 36 >> 1] | 0, j << 16 >> 16 ? e0 = 2 : e0 = C << 16 >> 16 != 0 ? 2 : 0, o[Be >> 2] = e0, u0[x0 + 38 >> 1] | 0 ? e0 = 2 : e0 = j << 16 >> 16 != 0 ? 2 : 0, o[ye >> 2] = e0, m0 ? j = A0 << 16 >> 16 != 0 ? 2 : 0 : j = 2, o[ve >> 2] = j, v0 ? C = s0 << 16 >> 16 != 0 ? 2 : 0 : C = 2, o[me >> 2] = C, B0 ? C = l << 16 >> 16 != 0 ? 2 : 0 : C = 2, o[ke >> 2] = C, p0 << 16 >> 16 ? C = 2 : C = c0 << 16 >> 16 != 0 ? 2 : 0, o[Q2 >> 2] = C, d0 << 16 >> 16 ? C = 2 : C = p0 << 16 >> 16 != 0 ? 2 : 0, o[O2 >> 2] = C, h0 << 16 >> 16 ? C = 2 : C = d0 << 16 >> 16 != 0 ? 2 : 0, o[W0 >> 2] = C, y0 ? P = P << 16 >> 16 != 0 ? 2 : 0 : P = 2, o[C2 >> 2] = P, _ ? _ = q << 16 >> 16 != 0 ? 2 : 0 : _ = 2, o[J2 >> 2] = _, T ? _ = t0 << 16 >> 16 != 0 ? 2 : 0 : _ = 2, o[W2 >> 2] = _;
                      break;
                    } else if ((_ | 0) == 3) {
                      T = x0 + 28 | 0, k0 = u0[x0 + 32 >> 1] | 0, k0 << 16 >> 16 ? _ = 2 : _ = (u0[T >> 1] | 0) != 0 ? 2 : 0, o[Fe >> 2] = _, y0 = u0[x0 + 34 >> 1] | 0, t0 = y0 << 16 >> 16 == 0, t0 ? P = (u0[x0 + 30 >> 1] | 0) != 0 ? 2 : 0 : P = 2, o[Re >> 2] = P, v0 = u0[x0 + 40 >> 1] | 0, v0 << 16 >> 16 ? q = 2 : q = (u0[x0 + 36 >> 1] | 0) != 0 ? 2 : 0, o[ee >> 2] = q, e0 = u0[x0 + 42 >> 1] | 0, P = e0 << 16 >> 16 == 0, P ? C = (u0[x0 + 38 >> 1] | 0) != 0 ? 2 : 0 : C = 2, o[Te >> 2] = C, _ = u0[x0 + 44 >> 1] | 0, _ << 16 >> 16 ? C = 2 : C = k0 << 16 >> 16 != 0 ? 2 : 0, o[Me >> 2] = C, m0 = u0[x0 + 46 >> 1] | 0, l = m0 << 16 >> 16 == 0, l ? C = y0 << 16 >> 16 != 0 ? 2 : 0 : C = 2, o[_e >> 2] = C, B0 = u0[x0 + 52 >> 1] | 0, B0 << 16 >> 16 ? C = 2 : C = v0 << 16 >> 16 != 0 ? 2 : 0, o[Ue >> 2] = C, q = u0[x0 + 54 >> 1] | 0, s0 = q << 16 >> 16 == 0, s0 ? C = e0 << 16 >> 16 != 0 ? 2 : 0 : C = 2, o[Ee >> 2] = C, c0 = u0[x0 + 48 >> 1] | 0, c0 << 16 >> 16 ? j = 2 : j = _ << 16 >> 16 != 0 ? 2 : 0, o[Se >> 2] = j, A0 = u0[x0 + 50 >> 1] | 0, p0 = A0 << 16 >> 16 == 0, p0 ? j = m0 << 16 >> 16 != 0 ? 2 : 0 : j = 2, o[be >> 2] = j, w0 = u0[x0 + 56 >> 1] | 0, w0 << 16 >> 16 ? e0 = 2 : e0 = B0 << 16 >> 16 != 0 ? 2 : 0, o[xe >> 2] = e0, h0 = (u0[x0 + 58 >> 1] | 0) == 0, h0 ? e0 = q << 16 >> 16 != 0 ? 2 : 0 : e0 = 2, o[Ae >> 2] = e0, d0 = u0[x0 + 30 >> 1] | 0, d0 << 16 >> 16 ? e0 = 2 : e0 = (u0[T >> 1] | 0) != 0 ? 2 : 0, o[ge >> 2] = e0, u0[x0 + 38 >> 1] | 0 ? e0 = 2 : e0 = (u0[x0 + 36 >> 1] | 0) != 0 ? 2 : 0, o[ye >> 2] = e0, t0 ? j = k0 << 16 >> 16 != 0 ? 2 : 0 : j = 2, o[ve >> 2] = j, P ? j = v0 << 16 >> 16 != 0 ? 2 : 0 : j = 2, o[ke >> 2] = j, l ? C = _ << 16 >> 16 != 0 ? 2 : 0 : C = 2, o[Q2 >> 2] = C, s0 ? C = B0 << 16 >> 16 != 0 ? 2 : 0 : C = 2, o[W0 >> 2] = C, p0 ? C = c0 << 16 >> 16 != 0 ? 2 : 0 : C = 2, o[C2 >> 2] = C, h0 ? C = w0 << 16 >> 16 != 0 ? 2 : 0 : C = 2, o[W2 >> 2] = C, C = u0[x0 + 150 >> 1] | 0, q = u0[x0 + 138 >> 1] | 0;
                      do
                        if ((u0[x0 + 36 >> 1] | d0) << 16 >> 16)
                          C = 2;
                        else {
                          if (k0 = (u0[x0 + 148 >> 1] | 0) - (u0[x0 + 136 >> 1] | 0) | 0, (((k0 | 0) > -1 ? k0 : 0 - k0 | 0) | 0) > 3) {
                            C = 1;
                            break;
                          }
                          if (k0 = C - q | 0, (((k0 | 0) > -1 ? k0 : 0 - k0 | 0) | 0) > 3) {
                            C = 1;
                            break;
                          }
                          C = (o[x0 + 120 >> 2] | 0) != (o[x0 + 116 >> 2] | 0) & 1;
                        }
                      while (!1);
                      o[Be >> 2] = C, C = u0[x0 + 158 >> 1] | 0, q = u0[x0 + 146 >> 1] | 0;
                      do
                        if ((v0 | y0) << 16 >> 16)
                          q = 2;
                        else {
                          if (y0 = (u0[x0 + 156 >> 1] | 0) - (u0[x0 + 144 >> 1] | 0) | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) > 3) {
                            q = 1;
                            break;
                          }
                          if (y0 = C - q | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) > 3) {
                            q = 1;
                            break;
                          }
                          q = (o[x0 + 120 >> 2] | 0) != (o[x0 + 116 >> 2] | 0) & 1;
                        }
                      while (!1);
                      o[me >> 2] = q, C = u0[x0 + 182 >> 1] | 0, q = u0[x0 + 170 >> 1] | 0;
                      do
                        if ((B0 | m0) << 16 >> 16)
                          _ = 2;
                        else {
                          if (y0 = (u0[x0 + 180 >> 1] | 0) - (u0[x0 + 168 >> 1] | 0) | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) > 3) {
                            _ = 1;
                            break;
                          }
                          if (y0 = C - q | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) > 3) {
                            _ = 1;
                            break;
                          }
                          _ = (o[x0 + 128 >> 2] | 0) != (o[x0 + 124 >> 2] | 0) & 1;
                        }
                      while (!1);
                      o[O2 >> 2] = _, _ = u0[x0 + 190 >> 1] | 0, l = u0[x0 + 178 >> 1] | 0;
                      do
                        if ((w0 | A0) << 16 >> 16)
                          _ = 2;
                        else {
                          if (y0 = (u0[x0 + 188 >> 1] | 0) - (u0[x0 + 176 >> 1] | 0) | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) > 3) {
                            _ = 1;
                            break;
                          }
                          if (y0 = _ - l | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) > 3) {
                            _ = 1;
                            break;
                          }
                          _ = (o[x0 + 128 >> 2] | 0) != (o[x0 + 124 >> 2] | 0) & 1;
                        }
                      while (!1);
                      o[J2 >> 2] = _;
                      break;
                    } else {
                      H0 = u0[x0 + 32 >> 1] | 0, v0 = u0[x0 + 28 >> 1] | 0, a2 = u0[x0 + 142 >> 1] | 0, s0 = u0[x0 + 134 >> 1] | 0, (v0 | H0) << 16 >> 16 ? q = 2 : (y0 = (u0[x0 + 140 >> 1] | 0) - (u0[x0 + 132 >> 1] | 0) | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) > 3 ? q = 1 : (q = a2 - s0 | 0, q = (((q | 0) > -1 ? q : 0 - q | 0) | 0) > 3 & 1)), o[Fe >> 2] = q, Q0 = u0[x0 + 34 >> 1] | 0, B0 = u0[x0 + 30 >> 1] | 0, $0 = u0[x0 + 146 >> 1] | 0, c0 = u0[x0 + 138 >> 1] | 0, (B0 | Q0) << 16 >> 16 ? C = 2 : (y0 = (u0[x0 + 144 >> 1] | 0) - (u0[x0 + 136 >> 1] | 0) | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) > 3 ? C = 1 : (C = $0 - c0 | 0, C = (((C | 0) > -1 ? C : 0 - C | 0) | 0) > 3 & 1)), o[Re >> 2] = C, N0 = u0[x0 + 40 >> 1] | 0, A0 = u0[x0 + 36 >> 1] | 0, J0 = u0[x0 + 158 >> 1] | 0, p0 = u0[x0 + 150 >> 1] | 0, (A0 | N0) << 16 >> 16 ? j = 2 : (y0 = (u0[x0 + 156 >> 1] | 0) - (u0[x0 + 148 >> 1] | 0) | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) > 3 ? j = 1 : (j = J0 - p0 | 0, j = (((j | 0) > -1 ? j : 0 - j | 0) | 0) > 3 & 1)), o[ee >> 2] = j, j = u0[x0 + 42 >> 1] | 0, y0 = u0[x0 + 38 >> 1] | 0, Y0 = u0[x0 + 162 >> 1] | 0, m0 = u0[x0 + 154 >> 1] | 0, (y0 | j) << 16 >> 16 ? e0 = 2 : (w0 = (u0[x0 + 160 >> 1] | 0) - (u0[x0 + 152 >> 1] | 0) | 0, (((w0 | 0) > -1 ? w0 : 0 - w0 | 0) | 0) > 3 ? e0 = 1 : (e0 = Y0 - m0 | 0, e0 = (((e0 | 0) > -1 ? e0 : 0 - e0 | 0) | 0) > 3 & 1)), o[Te >> 2] = e0, E0 = u0[x0 + 44 >> 1] | 0, O0 = u0[x0 + 166 >> 1] | 0;
                      do
                        if ((E0 | H0) << 16 >> 16)
                          e0 = 2;
                        else if (w0 = (u0[x0 + 164 >> 1] | 0) - (u0[x0 + 140 >> 1] | 0) | 0, (((w0 | 0) > -1 ? w0 : 0 - w0 | 0) | 0) > 3)
                          e0 = 1;
                        else {
                          if (w0 = O0 - a2 | 0, (((w0 | 0) > -1 ? w0 : 0 - w0 | 0) | 0) > 3) {
                            e0 = 1;
                            break;
                          }
                          e0 = (o[x0 + 124 >> 2] | 0) != (o[x0 + 116 >> 2] | 0) & 1;
                        }
                      while (!1);
                      o[Me >> 2] = e0, T0 = u0[x0 + 46 >> 1] | 0, L0 = u0[x0 + 170 >> 1] | 0;
                      do
                        if ((T0 | Q0) << 16 >> 16)
                          e0 = 2;
                        else {
                          if (w0 = (u0[x0 + 168 >> 1] | 0) - (u0[x0 + 144 >> 1] | 0) | 0, (((w0 | 0) > -1 ? w0 : 0 - w0 | 0) | 0) > 3) {
                            e0 = 1;
                            break;
                          }
                          if (w0 = L0 - $0 | 0, (((w0 | 0) > -1 ? w0 : 0 - w0 | 0) | 0) > 3) {
                            e0 = 1;
                            break;
                          }
                          e0 = (o[x0 + 124 >> 2] | 0) != (o[x0 + 116 >> 2] | 0) & 1;
                        }
                      while (!1);
                      o[_e >> 2] = e0, g0 = u0[x0 + 52 >> 1] | 0, U0 = u0[x0 + 182 >> 1] | 0;
                      do
                        if ((g0 | N0) << 16 >> 16)
                          e0 = 2;
                        else {
                          if (w0 = (u0[x0 + 180 >> 1] | 0) - (u0[x0 + 156 >> 1] | 0) | 0, (((w0 | 0) > -1 ? w0 : 0 - w0 | 0) | 0) > 3) {
                            e0 = 1;
                            break;
                          }
                          if (w0 = U0 - J0 | 0, (((w0 | 0) > -1 ? w0 : 0 - w0 | 0) | 0) > 3) {
                            e0 = 1;
                            break;
                          }
                          e0 = (o[x0 + 128 >> 2] | 0) != (o[x0 + 120 >> 2] | 0) & 1;
                        }
                      while (!1);
                      o[Ue >> 2] = e0, l = u0[x0 + 54 >> 1] | 0, C = u0[x0 + 186 >> 1] | 0;
                      do
                        if ((l | j) << 16 >> 16)
                          h0 = 2;
                        else {
                          if (w0 = (u0[x0 + 184 >> 1] | 0) - (u0[x0 + 160 >> 1] | 0) | 0, (((w0 | 0) > -1 ? w0 : 0 - w0 | 0) | 0) > 3) {
                            h0 = 1;
                            break;
                          }
                          if (w0 = C - Y0 | 0, (((w0 | 0) > -1 ? w0 : 0 - w0 | 0) | 0) > 3) {
                            h0 = 1;
                            break;
                          }
                          h0 = (o[x0 + 128 >> 2] | 0) != (o[x0 + 120 >> 2] | 0) & 1;
                        }
                      while (!1);
                      o[Ee >> 2] = h0, _ = u0[x0 + 48 >> 1] | 0, S0 = u0[x0 + 174 >> 1] | 0;
                      do
                        if ((_ | E0) << 16 >> 16)
                          h0 = 2;
                        else {
                          if (w0 = (u0[x0 + 172 >> 1] | 0) - (u0[x0 + 164 >> 1] | 0) | 0, (((w0 | 0) > -1 ? w0 : 0 - w0 | 0) | 0) > 3) {
                            h0 = 1;
                            break;
                          }
                          h0 = S0 - O0 | 0, h0 = (((h0 | 0) > -1 ? h0 : 0 - h0 | 0) | 0) > 3 & 1;
                        }
                      while (!1);
                      o[Se >> 2] = h0, P = u0[x0 + 50 >> 1] | 0, q = u0[x0 + 178 >> 1] | 0;
                      do
                        if ((P | T0) << 16 >> 16)
                          h0 = 2;
                        else {
                          if (w0 = (u0[x0 + 176 >> 1] | 0) - (u0[x0 + 168 >> 1] | 0) | 0, (((w0 | 0) > -1 ? w0 : 0 - w0 | 0) | 0) > 3) {
                            h0 = 1;
                            break;
                          }
                          h0 = q - L0 | 0, h0 = (((h0 | 0) > -1 ? h0 : 0 - h0 | 0) | 0) > 3 & 1;
                        }
                      while (!1);
                      o[be >> 2] = h0, T = u0[x0 + 56 >> 1] | 0, t0 = u0[x0 + 190 >> 1] | 0;
                      do
                        if ((T | g0) << 16 >> 16)
                          h0 = 2;
                        else {
                          if (w0 = (u0[x0 + 188 >> 1] | 0) - (u0[x0 + 180 >> 1] | 0) | 0, (((w0 | 0) > -1 ? w0 : 0 - w0 | 0) | 0) > 3) {
                            h0 = 1;
                            break;
                          }
                          h0 = t0 - U0 | 0, h0 = (((h0 | 0) > -1 ? h0 : 0 - h0 | 0) | 0) > 3 & 1;
                        }
                      while (!1);
                      o[xe >> 2] = h0, w0 = u0[x0 + 58 >> 1] | 0, d0 = u0[x0 + 194 >> 1] | 0;
                      do
                        if ((w0 | l) << 16 >> 16)
                          k0 = 2;
                        else {
                          if (k0 = (u0[x0 + 192 >> 1] | 0) - (u0[x0 + 184 >> 1] | 0) | 0, (((k0 | 0) > -1 ? k0 : 0 - k0 | 0) | 0) > 3) {
                            k0 = 1;
                            break;
                          }
                          k0 = d0 - C | 0, k0 = (((k0 | 0) > -1 ? k0 : 0 - k0 | 0) | 0) > 3 & 1;
                        }
                      while (!1);
                      o[Ae >> 2] = k0;
                      do
                        if ((B0 | v0) << 16 >> 16)
                          h0 = 2;
                        else {
                          if (v0 = (u0[x0 + 136 >> 1] | 0) - (u0[x0 + 132 >> 1] | 0) | 0, (((v0 | 0) > -1 ? v0 : 0 - v0 | 0) | 0) > 3) {
                            h0 = 1;
                            break;
                          }
                          h0 = c0 - s0 | 0, h0 = (((h0 | 0) > -1 ? h0 : 0 - h0 | 0) | 0) > 3 & 1;
                        }
                      while (!1);
                      o[ge >> 2] = h0;
                      do
                        if ((A0 | B0) << 16 >> 16)
                          h0 = 2;
                        else {
                          if (v0 = (u0[x0 + 148 >> 1] | 0) - (u0[x0 + 136 >> 1] | 0) | 0, (((v0 | 0) > -1 ? v0 : 0 - v0 | 0) | 0) > 3) {
                            h0 = 1;
                            break;
                          }
                          if (v0 = p0 - c0 | 0, (((v0 | 0) > -1 ? v0 : 0 - v0 | 0) | 0) > 3) {
                            h0 = 1;
                            break;
                          }
                          h0 = (o[x0 + 120 >> 2] | 0) != (o[x0 + 116 >> 2] | 0) & 1;
                        }
                      while (!1);
                      o[Be >> 2] = h0;
                      do
                        if ((y0 | A0) << 16 >> 16)
                          h0 = 2;
                        else {
                          if (y0 = (u0[x0 + 152 >> 1] | 0) - (u0[x0 + 148 >> 1] | 0) | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) > 3) {
                            h0 = 1;
                            break;
                          }
                          h0 = m0 - p0 | 0, h0 = (((h0 | 0) > -1 ? h0 : 0 - h0 | 0) | 0) > 3 & 1;
                        }
                      while (!1);
                      o[ye >> 2] = h0;
                      do
                        if ((Q0 | H0) << 16 >> 16)
                          e0 = 2;
                        else {
                          if (y0 = (u0[x0 + 144 >> 1] | 0) - (u0[x0 + 140 >> 1] | 0) | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) > 3) {
                            e0 = 1;
                            break;
                          }
                          e0 = $0 - a2 | 0, e0 = (((e0 | 0) > -1 ? e0 : 0 - e0 | 0) | 0) > 3 & 1;
                        }
                      while (!1);
                      o[ve >> 2] = e0;
                      do
                        if ((N0 | Q0) << 16 >> 16)
                          e0 = 2;
                        else {
                          if (y0 = (u0[x0 + 156 >> 1] | 0) - (u0[x0 + 144 >> 1] | 0) | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) > 3) {
                            e0 = 1;
                            break;
                          }
                          if (y0 = J0 - $0 | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) > 3) {
                            e0 = 1;
                            break;
                          }
                          e0 = (o[x0 + 120 >> 2] | 0) != (o[x0 + 116 >> 2] | 0) & 1;
                        }
                      while (!1);
                      o[me >> 2] = e0;
                      do
                        if ((j | N0) << 16 >> 16)
                          e0 = 2;
                        else {
                          if (y0 = (u0[x0 + 160 >> 1] | 0) - (u0[x0 + 156 >> 1] | 0) | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) > 3) {
                            e0 = 1;
                            break;
                          }
                          e0 = Y0 - J0 | 0, e0 = (((e0 | 0) > -1 ? e0 : 0 - e0 | 0) | 0) > 3 & 1;
                        }
                      while (!1);
                      o[ke >> 2] = e0;
                      do
                        if ((T0 | E0) << 16 >> 16)
                          j = 2;
                        else {
                          if (y0 = (u0[x0 + 168 >> 1] | 0) - (u0[x0 + 164 >> 1] | 0) | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) > 3) {
                            j = 1;
                            break;
                          }
                          j = L0 - O0 | 0, j = (((j | 0) > -1 ? j : 0 - j | 0) | 0) > 3 & 1;
                        }
                      while (!1);
                      o[Q2 >> 2] = j;
                      do
                        if ((g0 | T0) << 16 >> 16)
                          j = 2;
                        else {
                          if (y0 = (u0[x0 + 180 >> 1] | 0) - (u0[x0 + 168 >> 1] | 0) | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) > 3) {
                            j = 1;
                            break;
                          }
                          if (y0 = U0 - L0 | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) > 3) {
                            j = 1;
                            break;
                          }
                          j = (o[x0 + 128 >> 2] | 0) != (o[x0 + 124 >> 2] | 0) & 1;
                        }
                      while (!1);
                      o[O2 >> 2] = j;
                      do
                        if ((l | g0) << 16 >> 16)
                          C = 2;
                        else {
                          if (y0 = (u0[x0 + 184 >> 1] | 0) - (u0[x0 + 180 >> 1] | 0) | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) > 3) {
                            C = 1;
                            break;
                          }
                          C = C - U0 | 0, C = (((C | 0) > -1 ? C : 0 - C | 0) | 0) > 3 & 1;
                        }
                      while (!1);
                      o[W0 >> 2] = C;
                      do
                        if ((P | _) << 16 >> 16)
                          C = 2;
                        else {
                          if (y0 = (u0[x0 + 176 >> 1] | 0) - (u0[x0 + 172 >> 1] | 0) | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) > 3) {
                            C = 1;
                            break;
                          }
                          C = q - S0 | 0, C = (((C | 0) > -1 ? C : 0 - C | 0) | 0) > 3 & 1;
                        }
                      while (!1);
                      o[C2 >> 2] = C;
                      do
                        if ((T | P) << 16 >> 16)
                          q = 2;
                        else {
                          if (y0 = (u0[x0 + 188 >> 1] | 0) - (u0[x0 + 176 >> 1] | 0) | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) > 3) {
                            q = 1;
                            break;
                          }
                          if (y0 = t0 - q | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) > 3) {
                            q = 1;
                            break;
                          }
                          q = (o[x0 + 128 >> 2] | 0) != (o[x0 + 124 >> 2] | 0) & 1;
                        }
                      while (!1);
                      o[J2 >> 2] = q;
                      do
                        if ((w0 | T) << 16 >> 16)
                          _ = 2;
                        else {
                          if (y0 = (u0[x0 + 192 >> 1] | 0) - (u0[x0 + 188 >> 1] | 0) | 0, (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) | 0) > 3) {
                            _ = 1;
                            break;
                          }
                          _ = d0 - t0 | 0, _ = (((_ | 0) > -1 ? _ : 0 - _ | 0) | 0) > 3 & 1;
                        }
                      while (!1);
                      o[W2 >> 2] = _;
                      break;
                    }
                  else tr(x0, i2);
                while (!1);
                if (!(i0 | o[Fe >> 2] | o[Re >> 2] | o[ee >> 2] | o[Te >> 2] | o[Me >> 2] | o[_e >> 2] | o[Ue >> 2] | o[Ee >> 2] | o[Se >> 2] | o[be >> 2] | o[xe >> 2] | o[Ae >> 2] | o[ge >> 2] | o[Be >> 2] | o[ye >> 2] | o[ve >> 2] | o[me >> 2] | o[ke >> 2] | o[Q2 >> 2] | o[O2 >> 2] | o[W0 >> 2] | o[C2 >> 2] | o[J2 >> 2] | o[W2 >> 2]))
                  break;
              } else
                o[Ae >> 2] = 3, o[xe >> 2] = 3, o[be >> 2] = 3, o[Se >> 2] = 3, o[Ee >> 2] = 3, o[Ue >> 2] = 3, o[_e >> 2] = 3, o[Me >> 2] = 3, o[Te >> 2] = 3, o[ee >> 2] = 3, o[Re >> 2] = 3, o[Fe >> 2] = 3, o[W2 >> 2] = 3, o[J2 >> 2] = 3, o[C2 >> 2] = 3, o[W0 >> 2] = 3, o[O2 >> 2] = 3, o[Q2 >> 2] = 3, o[ke >> 2] = 3, o[me >> 2] = 3, o[ve >> 2] = 3, o[ye >> 2] = 3, o[Be >> 2] = 3, o[ge >> 2] = 3;
              Y0 = x0 + 20 | 0, l = o[Y0 >> 2] | 0, Q0 = x0 + 12 | 0, q = l2(0, 51, (o[Q0 >> 2] | 0) + l | 0) | 0, H0 = x0 + 16 | 0, P = l2(0, 51, (o[H0 >> 2] | 0) + l | 0) | 0, T = l0[6864 + q >> 0] | 0, o[ue >> 2] = T, P = l0[6920 + P >> 0] | 0, o[le >> 2] = P, q = 6976 + (q * 3 | 0) | 0, o[Oe >> 2] = q;
              do
                if (!F2)
                  if (C = o[(o[H2 >> 2] | 0) + 20 >> 2] | 0, (C | 0) == (l | 0)) {
                    o[f2 >> 2] = T, o[$2 >> 2] = P, o[p2 >> 2] = q;
                    break;
                  } else {
                    m0 = (l + 1 + C | 0) >>> 1, y0 = l2(
                      0,
                      51,
                      (o[Q0 >> 2] | 0) + m0 | 0
                    ) | 0, m0 = l2(
                      0,
                      51,
                      (o[H0 >> 2] | 0) + m0 | 0
                    ) | 0, o[f2 >> 2] = l0[6864 + y0 >> 0], o[$2 >> 2] = l0[6920 + m0 >> 0], o[p2 >> 2] = 6976 + (y0 * 3 | 0);
                    break;
                  }
              while (!1);
              do
                if (!V2)
                  if (_ = o[(o[t2 >> 2] | 0) + 20 >> 2] | 0, (_ | 0) == (l | 0)) {
                    o[z2 >> 2] = o[ue >> 2], o[w2 >> 2] = o[le >> 2], o[fe >> 2] = o[Oe >> 2];
                    break;
                  } else {
                    m0 = (l + 1 + _ | 0) >>> 1, y0 = l2(
                      0,
                      51,
                      (o[Q0 >> 2] | 0) + m0 | 0
                    ) | 0, m0 = l2(
                      0,
                      51,
                      (o[H0 >> 2] | 0) + m0 | 0
                    ) | 0, o[z2 >> 2] = l0[6864 + y0 >> 0], o[w2 >> 2] = l0[6920 + m0 >> 0], o[fe >> 2] = 6976 + (y0 * 3 | 0);
                    break;
                  }
              while (!1);
              for (N0 = _0(j0, G2) | 0, a2 = 3, e0 = 0, $0 = (o[u >> 2] | 0) + ((N0 << 8) + (m2 << 4)) | 0, J0 = i2; ; ) {
                C = o[J0 + 4 >> 2] | 0, C && Ye($0, C, j2, D2), C = o[J0 + 12 >> 2] | 0, C && Ye($0 + 4 | 0, C, I2, D2), q = J0 + 16 | 0, i0 = o[J0 + 20 >> 2] | 0, i0 && Ye($0 + 8 | 0, i0, I2, D2), T = J0 + 24 | 0, i0 = o[J0 + 28 >> 2] | 0, i0 && Ye($0 + 12 | 0, i0, I2, D2), j = o[J0 >> 2] | 0, C = J0 + 8 | 0, i0 = o[C >> 2] | 0;
                e: do
                  if ((j | 0) == (i0 | 0) && (j | 0) == (o[q >> 2] | 0) && (j | 0) == (o[T >> 2] | 0)) {
                    if (!j) break;
                    if (B0 = o[p2 + (e0 * 12 | 0) + 4 >> 2] | 0, A0 = o[p2 + (e0 * 12 | 0) + 8 >> 2] | 0, j >>> 0 < 4)
                      for (d0 = l0[(o[p2 + (e0 * 12 | 0) >> 2] | 0) + (j + -1) >> 0] | 0, q = 0 - d0 | 0, T = d0 + 1 | 0, _ = $0, P = 16; ; ) {
                        e0 = _ + r1 | 0, p0 = l0[e0 >> 0] | 0, h0 = _ + Ie | 0, c0 = l0[h0 >> 0] | 0, s0 = l0[_ >> 0] | 0, i0 = _ + D2 | 0, l = l0[i0 >> 0] | 0, y0 = c0 - s0 | 0;
                        do
                          if (((y0 | 0) > -1 ? y0 : 0 - y0 | 0) >>> 0 < B0 >>> 0) {
                            if (y0 = p0 - c0 | 0, ((y0 | 0) > -1 ? y0 : 0 - y0 | 0) >>> 0 >= A0 >>> 0 || (y0 = l - s0 | 0, ((y0 | 0) > -1 ? y0 : 0 - y0 | 0) >>> 0 >= A0 >>> 0))
                              break;
                            j = l0[_ + i1 >> 0] | 0, y0 = j - c0 | 0, ((y0 | 0) > -1 ? y0 : 0 - y0 | 0) >>> 0 < A0 >>> 0 ? (n0[e0 >> 0] = (l2(
                              q,
                              d0,
                              ((c0 + 1 + s0 | 0) >>> 1) - (p0 << 1) + j >> 1
                            ) | 0) + p0, e0 = T) : e0 = d0, j = l0[_ + ze >> 0] | 0, y0 = j - s0 | 0, ((y0 | 0) > -1 ? y0 : 0 - y0 | 0) >>> 0 < A0 >>> 0 && (n0[i0 >> 0] = (l2(
                              q,
                              d0,
                              ((c0 + 1 + s0 | 0) >>> 1) - (l << 1) + j >> 1
                            ) | 0) + l, e0 = e0 + 1 | 0), m0 = l2(
                              0 - e0 | 0,
                              e0,
                              p0 + 4 - l + (s0 - c0 << 2) >> 3
                            ) | 0, y0 = n0[3472 + ((s0 | 512) - m0) >> 0] | 0, n0[h0 >> 0] = n0[3472 + (m0 + (c0 | 512)) >> 0] | 0, n0[_ >> 0] = y0;
                          }
                        while (!1);
                        if (P = P + -1 | 0, P) _ = _ + 1 | 0;
                        else break e;
                      }
                    for (j = (B0 >>> 2) + 2 | 0, d0 = $0, h0 = 16; ; ) {
                      i0 = d0 + r1 | 0, _ = l0[i0 >> 0] | 0, C = d0 + Ie | 0, l = l0[C >> 0] | 0, t0 = l0[d0 >> 0] | 0, q = d0 + D2 | 0, s0 = l0[q >> 0] | 0, e0 = l - t0 | 0, e0 = (e0 | 0) > -1 ? e0 : 0 - e0 | 0;
                      r: do
                        if (e0 >>> 0 < B0 >>> 0) {
                          if (y0 = _ - l | 0, ((y0 | 0) > -1 ? y0 : 0 - y0 | 0) >>> 0 >= A0 >>> 0 || (y0 = s0 - t0 | 0, ((y0 | 0) > -1 ? y0 : 0 - y0 | 0) >>> 0 >= A0 >>> 0))
                            break;
                          T = d0 + i1 | 0, c0 = l0[T >> 0] | 0, P = d0 + ze | 0, p0 = l0[P >> 0] | 0;
                          do
                            if (e0 >>> 0 < j >>> 0) {
                              if (y0 = c0 - l | 0, ((y0 | 0) > -1 ? y0 : 0 - y0 | 0) >>> 0 < A0 >>> 0 ? (y0 = l + _ + t0 | 0, n0[C >> 0] = (s0 + 4 + (y0 << 1) + c0 | 0) >>> 3, n0[i0 >> 0] = (y0 + 2 + c0 | 0) >>> 2, n0[T >> 0] = (y0 + 4 + (c0 * 3 | 0) + (l0[d0 + M1 >> 0] << 1) | 0) >>> 3) : n0[C >> 0] = (l + 2 + (_ << 1) + s0 | 0) >>> 2, y0 = p0 - t0 | 0, ((y0 | 0) > -1 ? y0 : 0 - y0 | 0) >>> 0 >= A0 >>> 0)
                                break;
                              y0 = t0 + l + s0 | 0, n0[d0 >> 0] = (_ + 4 + (y0 << 1) + p0 | 0) >>> 3, n0[q >> 0] = (y0 + 2 + p0 | 0) >>> 2, n0[P >> 0] = (y0 + 4 + (p0 * 3 | 0) + (l0[d0 + R1 >> 0] << 1) | 0) >>> 3;
                              break r;
                            } else
                              n0[C >> 0] = (l + 2 + (_ << 1) + s0 | 0) >>> 2;
                          while (!1);
                          n0[d0 >> 0] = (_ + 2 + t0 + (s0 << 1) | 0) >>> 2;
                        }
                      while (!1);
                      if (h0 = h0 + -1 | 0, h0) d0 = d0 + 1 | 0;
                      else break;
                    }
                  } else ae = 311;
                while (!1);
                do
                  if ((ae | 0) == 311) {
                    if (ae = 0, j && (Ve(
                      $0,
                      j,
                      p2 + (e0 * 12 | 0) | 0,
                      D2
                    ), i0 = o[C >> 2] | 0), i0 && Ve(
                      $0 + 4 | 0,
                      i0,
                      p2 + (e0 * 12 | 0) | 0,
                      D2
                    ), i0 = o[q >> 2] | 0, i0 && Ve(
                      $0 + 8 | 0,
                      i0,
                      p2 + (e0 * 12 | 0) | 0,
                      D2
                    ), C = o[T >> 2] | 0, !C) break;
                    Ve(
                      $0 + 12 | 0,
                      C,
                      p2 + (e0 * 12 | 0) | 0,
                      D2
                    );
                  }
                while (!1);
                if (a2) a2 = a2 + -1 | 0, e0 = 2, $0 = $0 + _1 | 0, J0 = J0 + 32 | 0;
                else
                  break;
              }
              P = o[x0 + 24 >> 2] | 0, l = o[192 + ((l2(
                0,
                51,
                (o[Y0 >> 2] | 0) + P | 0
              ) | 0) << 2) >> 2] | 0, i0 = l2(0, 51, (o[Q0 >> 2] | 0) + l | 0) | 0, T = l2(0, 51, (o[H0 >> 2] | 0) + l | 0) | 0, q = l0[6864 + i0 >> 0] | 0, o[ue >> 2] = q, T = l0[6920 + T >> 0] | 0, o[le >> 2] = T, i0 = 6976 + (i0 * 3 | 0) | 0, o[Oe >> 2] = i0;
              do
                if (!F2)
                  if (C = o[(o[H2 >> 2] | 0) + 20 >> 2] | 0, (C | 0) == (o[Y0 >> 2] | 0)) {
                    o[f2 >> 2] = q, o[$2 >> 2] = T, o[p2 >> 2] = i0;
                    break;
                  } else {
                    m0 = (l + 1 + (o[192 + ((l2(
                      0,
                      51,
                      C + P | 0
                    ) | 0) << 2) >> 2] | 0) | 0) >>> 1, y0 = l2(
                      0,
                      51,
                      m0 + (o[Q0 >> 2] | 0) | 0
                    ) | 0, m0 = l2(
                      0,
                      51,
                      (o[H0 >> 2] | 0) + m0 | 0
                    ) | 0, o[f2 >> 2] = l0[6864 + y0 >> 0], o[$2 >> 2] = l0[6920 + m0 >> 0], o[p2 >> 2] = 6976 + (y0 * 3 | 0);
                    break;
                  }
              while (!1);
              do
                if (!V2)
                  if (_ = o[(o[t2 >> 2] | 0) + 20 >> 2] | 0, (_ | 0) == (o[Y0 >> 2] | 0)) {
                    o[z2 >> 2] = o[ue >> 2], o[w2 >> 2] = o[le >> 2], o[fe >> 2] = o[Oe >> 2];
                    break;
                  } else {
                    m0 = (l + 1 + (o[192 + ((l2(
                      0,
                      51,
                      _ + P | 0
                    ) | 0) << 2) >> 2] | 0) | 0) >>> 1, y0 = l2(
                      0,
                      51,
                      m0 + (o[Q0 >> 2] | 0) | 0
                    ) | 0, m0 = l2(
                      0,
                      51,
                      (o[H0 >> 2] | 0) + m0 | 0
                    ) | 0, o[z2 >> 2] = l0[6864 + y0 >> 0], o[w2 >> 2] = l0[6920 + m0 >> 0], o[fe >> 2] = 6976 + (y0 * 3 | 0);
                    break;
                  }
              while (!1);
              for (T = o[u >> 2] | 0, C = (m2 << 3) + T1 + (N0 << 6) | 0, j = T + C | 0, C = T + (C + Pe) | 0, T = 0, P = i2, e0 = 0; ; ) {
                l = P + 4 | 0, _ = o[l >> 2] | 0, _ && (oe(j, _, j2, y2), oe(C, o[l >> 2] | 0, j2, y2)), l = P + 36 | 0, _ = o[l >> 2] | 0, _ && (oe(j + D2 | 0, _, j2, y2), oe(C + D2 | 0, o[l >> 2] | 0, j2, y2)), i0 = P + 16 | 0, l = P + 20 | 0, _ = o[l >> 2] | 0, _ && (oe(j + 4 | 0, _, I2, y2), oe(C + 4 | 0, o[l >> 2] | 0, I2, y2)), l = P + 52 | 0, _ = o[l >> 2] | 0, _ && (oe(j + n2 | 0, _, I2, y2), oe(C + n2 | 0, o[l >> 2] | 0, I2, y2)), l = o[P >> 2] | 0, q = P + 8 | 0, _ = o[q >> 2] | 0;
                do
                  if ((l | 0) == (_ | 0)) {
                    if ((l | 0) != (o[i0 >> 2] | 0)) {
                      ae = 342;
                      break;
                    }
                    if ((l | 0) != (o[P + 24 >> 2] | 0)) {
                      ae = 342;
                      break;
                    }
                    if (!l) break;
                    y0 = p2 + (T * 12 | 0) | 0, g1(j, l, y0, y2), g1(C, o[P >> 2] | 0, y0, y2);
                  } else ae = 342;
                while (!1);
                do
                  if ((ae | 0) == 342) {
                    if (ae = 0, l && (_ = p2 + (T * 12 | 0) | 0, se(j, l, _, y2), se(C, o[P >> 2] | 0, _, y2), _ = o[q >> 2] | 0), _ && (y0 = p2 + (T * 12 | 0) | 0, se(j + 2 | 0, _, y0, y2), se(
                      C + 2 | 0,
                      o[q >> 2] | 0,
                      y0,
                      y2
                    )), _ = o[i0 >> 2] | 0, _ && (y0 = p2 + (T * 12 | 0) | 0, se(j + 4 | 0, _, y0, y2), se(
                      C + 4 | 0,
                      o[i0 >> 2] | 0,
                      y0,
                      y2
                    )), l = P + 24 | 0, _ = o[l >> 2] | 0, !_) break;
                    y0 = p2 + (T * 12 | 0) | 0, se(j + 6 | 0, _, y0, y2), se(
                      C + 6 | 0,
                      o[l >> 2] | 0,
                      y0,
                      y2
                    );
                  }
                while (!1);
                if (e0 = e0 + 1 | 0, (e0 | 0) == 2) break;
                j = j + ze | 0, C = C + ze | 0, T = 2, P = P + 64 | 0;
              }
            }
          while (!1);
          if (_ = m2 + 1 | 0, l = (_ | 0) == (G2 | 0), j0 = (l & 1) + j0 | 0, j0 >>> 0 >= (o[we >> 2] | 0) >>> 0) break;
          m2 = l ? 0 : _, x0 = x0 + 216 | 0;
        }
        f0 = Ne;
      }
      function tr(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0, T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0, y0 = 0, S0 = 0, E0 = 0;
        if (E0 = f0, j = u + 28 | 0, m0 = u0[u + 32 >> 1] | 0, m0 << 16 >> 16 ? l = 2 : l = (u0[j >> 1] | 0) != 0 ? 2 : 0, o[_ + 32 >> 2] = l, y0 = u0[u + 34 >> 1] | 0, v0 = y0 << 16 >> 16 == 0, v0 ? l = (u0[u + 30 >> 1] | 0) != 0 ? 2 : 0 : l = 2, o[_ + 40 >> 2] = l, S0 = u0[u + 40 >> 1] | 0, A0 = S0 << 16 >> 16 == 0, A0 ? l = (u0[u + 36 >> 1] | 0) != 0 ? 2 : 0 : l = 2, o[_ + 48 >> 2] = l, P = u0[u + 42 >> 1] | 0, B0 = P << 16 >> 16 == 0, B0 ? l = (u0[u + 38 >> 1] | 0) != 0 ? 2 : 0 : l = 2, o[_ + 56 >> 2] = l, h0 = u0[u + 44 >> 1] | 0, h0 << 16 >> 16 ? l = 2 : l = m0 << 16 >> 16 != 0 ? 2 : 0, o[_ + 64 >> 2] = l, k0 = u0[u + 46 >> 1] | 0, c0 = k0 << 16 >> 16 == 0, c0 ? l = y0 << 16 >> 16 != 0 ? 2 : 0 : l = 2, o[_ + 72 >> 2] = l, w0 = u0[u + 52 >> 1] | 0, p0 = w0 << 16 >> 16 == 0, p0 ? l = S0 << 16 >> 16 != 0 ? 2 : 0 : l = 2, o[_ + 80 >> 2] = l, T = u0[u + 54 >> 1] | 0, d0 = T << 16 >> 16 == 0, d0 ? l = P << 16 >> 16 != 0 ? 2 : 0 : l = 2, o[_ + 88 >> 2] = l, e0 = u0[u + 48 >> 1] | 0, e0 << 16 >> 16 ? l = 2 : l = h0 << 16 >> 16 != 0 ? 2 : 0, o[_ + 96 >> 2] = l, t0 = u0[u + 50 >> 1] | 0, q = t0 << 16 >> 16 == 0, q ? l = k0 << 16 >> 16 != 0 ? 2 : 0 : l = 2, o[_ + 104 >> 2] = l, s0 = u0[u + 56 >> 1] | 0, C = s0 << 16 >> 16 == 0, C ? P = w0 << 16 >> 16 != 0 ? 2 : 0 : P = 2, o[_ + 112 >> 2] = P, i0 = (u0[u + 58 >> 1] | 0) == 0, i0 ? P = T << 16 >> 16 != 0 ? 2 : 0 : P = 2, o[_ + 120 >> 2] = P, T = u0[u + 30 >> 1] | 0, T << 16 >> 16 ? P = 2 : P = (u0[j >> 1] | 0) != 0 ? 2 : 0, o[_ + 12 >> 2] = P, l = u0[u + 36 >> 1] | 0, l << 16 >> 16 ? P = 2 : P = T << 16 >> 16 != 0 ? 2 : 0, o[_ + 20 >> 2] = P, u0[u + 38 >> 1] | 0 ? l = 2 : l = l << 16 >> 16 != 0 ? 2 : 0, o[_ + 28 >> 2] = l, v0 ? l = m0 << 16 >> 16 != 0 ? 2 : 0 : l = 2, o[_ + 44 >> 2] = l, A0 ? l = y0 << 16 >> 16 != 0 ? 2 : 0 : l = 2, o[_ + 52 >> 2] = l, B0 ? l = S0 << 16 >> 16 != 0 ? 2 : 0 : l = 2, o[_ + 60 >> 2] = l, c0 ? l = h0 << 16 >> 16 != 0 ? 2 : 0 : l = 2, o[_ + 76 >> 2] = l, p0 ? l = k0 << 16 >> 16 != 0 ? 2 : 0 : l = 2, o[_ + 84 >> 2] = l, d0 ? l = w0 << 16 >> 16 != 0 ? 2 : 0 : l = 2, o[_ + 92 >> 2] = l, q ? l = e0 << 16 >> 16 != 0 ? 2 : 0 : l = 2, o[_ + 108 >> 2] = l, C ? l = t0 << 16 >> 16 != 0 ? 2 : 0 : l = 2, o[_ + 116 >> 2] = l, !i0) {
          m0 = 2, y0 = _ + 124 | 0, o[y0 >> 2] = m0, f0 = E0;
          return;
        }
        m0 = s0 << 16 >> 16 != 0 ? 2 : 0, y0 = _ + 124 | 0, o[y0 >> 2] = m0, f0 = E0;
      }
      function Ye(u, _, l, P) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0;
        var T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0;
        if (A0 = f0, k0 = o[l + 4 >> 2] | 0, w0 = o[l + 8 >> 2] | 0, _ >>> 0 < 4) {
          for (i0 = l0[(o[l >> 2] | 0) + (_ + -1) >> 0] | 0, e0 = 0 - i0 | 0, j = i0 + 1 | 0, C = 4; l = u + -2 | 0, d0 = l0[l >> 0] | 0, h0 = u + -1 | 0, p0 = l0[h0 >> 0] | 0, c0 = l0[u >> 0] | 0, q = u + 1 | 0, T = l0[q >> 0] | 0, t0 = p0 - c0 | 0, ((t0 | 0) > -1 ? t0 : 0 - t0 | 0) >>> 0 < k0 >>> 0 && (t0 = d0 - p0 | 0, ((t0 | 0) > -1 ? t0 : 0 - t0 | 0) >>> 0 < w0 >>> 0) && (t0 = T - c0 | 0, ((t0 | 0) > -1 ? t0 : 0 - t0 | 0) >>> 0 < w0 >>> 0) && (_ = l0[u + -3 >> 0] | 0, s0 = l0[u + 2 >> 0] | 0, t0 = _ - p0 | 0, ((t0 | 0) > -1 ? t0 : 0 - t0 | 0) >>> 0 < w0 >>> 0 ? (n0[l >> 0] = (l2(
            e0,
            i0,
            ((p0 + 1 + c0 | 0) >>> 1) - (d0 << 1) + _ >> 1
          ) | 0) + d0, l = j) : l = i0, t0 = s0 - c0 | 0, ((t0 | 0) > -1 ? t0 : 0 - t0 | 0) >>> 0 < w0 >>> 0 && (n0[q >> 0] = (l2(
            e0,
            i0,
            ((p0 + 1 + c0 | 0) >>> 1) - (T << 1) + s0 >> 1
          ) | 0) + T, l = l + 1 | 0), q = l2(
            0 - l | 0,
            l,
            d0 + 4 - T + (c0 - p0 << 2) >> 3
          ) | 0, t0 = n0[3472 + ((c0 | 512) - q) >> 0] | 0, n0[h0 >> 0] = n0[3472 + ((p0 | 512) + q) >> 0] | 0, n0[u >> 0] = t0), C = C + -1 | 0, C; )
            u = u + P | 0;
          f0 = A0;
          return;
        }
        for (h0 = (k0 >>> 2) + 2 | 0, d0 = 4; ; ) {
          C = u + -2 | 0, c0 = l0[C >> 0] | 0, i0 = u + -1 | 0, p0 = l0[i0 >> 0] | 0, j = l0[u >> 0] | 0, _ = u + 1 | 0, e0 = l0[_ >> 0] | 0, l = p0 - j | 0, l = (l | 0) > -1 ? l : 0 - l | 0;
          do
            if (l >>> 0 < k0 >>> 0 && (t0 = c0 - p0 | 0, ((t0 | 0) > -1 ? t0 : 0 - t0 | 0) >>> 0 < w0 >>> 0) && (t0 = e0 - j | 0, ((t0 | 0) > -1 ? t0 : 0 - t0 | 0) >>> 0 < w0 >>> 0)) {
              if (T = u + -3 | 0, t0 = l0[T >> 0] | 0, q = u + 2 | 0, s0 = l0[q >> 0] | 0, l >>> 0 < h0 >>> 0) {
                if (l = t0 - p0 | 0, ((l | 0) > -1 ? l : 0 - l | 0) >>> 0 < w0 >>> 0 ? (l = p0 + c0 + j | 0, n0[i0 >> 0] = (e0 + 4 + (l << 1) + t0 | 0) >>> 3, n0[C >> 0] = (l + 2 + t0 | 0) >>> 2, n0[T >> 0] = (l + 4 + (t0 * 3 | 0) + ((l0[u + -4 >> 0] | 0) << 1) | 0) >>> 3) : n0[i0 >> 0] = (p0 + 2 + (c0 << 1) + e0 | 0) >>> 2, t0 = s0 - j | 0, ((t0 | 0) > -1 ? t0 : 0 - t0 | 0) >>> 0 < w0 >>> 0) {
                  t0 = j + p0 + e0 | 0, n0[u >> 0] = (c0 + 4 + (t0 << 1) + s0 | 0) >>> 3, n0[_ >> 0] = (t0 + 2 + s0 | 0) >>> 2, n0[q >> 0] = (t0 + 4 + (s0 * 3 | 0) + ((l0[u + 3 >> 0] | 0) << 1) | 0) >>> 3;
                  break;
                }
              } else
                n0[i0 >> 0] = (p0 + 2 + (c0 << 1) + e0 | 0) >>> 2;
              n0[u >> 0] = (c0 + 2 + j + (e0 << 1) | 0) >>> 2;
            }
          while (!1);
          if (d0 = d0 + -1 | 0, d0) u = u + P | 0;
          else break;
        }
        f0 = A0;
      }
      function Ve(u, _, l, P) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0;
        var T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0, y0 = 0, S0 = 0;
        for (y0 = f0, k0 = l0[(o[l >> 2] | 0) + (_ + -1) >> 0] | 0, A0 = 0 - P | 0, w0 = A0 << 1, h0 = l + 4 | 0, t0 = l + 8 | 0, c0 = _0(P, -3) | 0, d0 = 0 - k0 | 0, s0 = k0 + 1 | 0, p0 = P << 1, e0 = 4; _ = u + w0 | 0, C = u + A0 | 0, q = u + P | 0, l = n0[q >> 0] | 0, i0 = l0[C >> 0] | 0, j = l0[u >> 0] | 0, T = i0 - j | 0, ((T | 0) > -1 ? T : 0 - T | 0) >>> 0 < (o[h0 >> 2] | 0) >>> 0 && (v0 = l0[_ >> 0] | 0, T = v0 - i0 | 0, B0 = o[t0 >> 2] | 0, ((T | 0) > -1 ? T : 0 - T | 0) >>> 0 < B0 >>> 0) && (m0 = l & 255, l = m0 - j | 0, ((l | 0) > -1 ? l : 0 - l | 0) >>> 0 < B0 >>> 0) && (l = l0[u + c0 >> 0] | 0, T = l - i0 | 0, ((T | 0) > -1 ? T : 0 - T | 0) >>> 0 < B0 >>> 0 ? (n0[_ >> 0] = (l2(
          d0,
          k0,
          ((i0 + 1 + j | 0) >>> 1) - (v0 << 1) + l >> 1
        ) | 0) + v0, _ = o[t0 >> 2] | 0, l = s0) : (_ = B0, l = k0), T = l0[u + p0 >> 0] | 0, S0 = T - j | 0, ((S0 | 0) > -1 ? S0 : 0 - S0 | 0) >>> 0 < _ >>> 0 && (n0[q >> 0] = (l2(
          d0,
          k0,
          ((i0 + 1 + j | 0) >>> 1) - (m0 << 1) + T >> 1
        ) | 0) + m0, l = l + 1 | 0), l = l2(
          0 - l | 0,
          l,
          4 - m0 + (j - i0 << 2) + v0 >> 3
        ) | 0, _ = n0[3472 + ((j | 512) - l) >> 0] | 0, n0[C >> 0] = n0[3472 + ((i0 | 512) + l) >> 0] | 0, n0[u >> 0] = _), e0 = e0 + -1 | 0, e0; )
          u = u + 1 | 0;
        f0 = y0;
      }
      function nr(u) {
        u = u | 0;
        var _ = 0;
        return _ = f0, f0 = f0 + u | 0, f0 = f0 + 15 & -16, _ | 0;
      }
      function or() {
        return f0 | 0;
      }
      function sr(u) {
        u = u | 0, f0 = u;
      }
      function fr(u, _) {
        u = u | 0, _ = _ | 0, X0 || (X0 = u, D0 = _);
      }
      function ft(u) {
        u = u | 0, n0[C0 >> 0] = n0[u >> 0], n0[C0 + 1 >> 0] = n0[u + 1 >> 0], n0[C0 + 2 >> 0] = n0[u + 2 >> 0], n0[C0 + 3 >> 0] = n0[u + 3 >> 0];
      }
      function ut(u) {
        u = u | 0, n0[C0 >> 0] = n0[u >> 0], n0[C0 + 1 >> 0] = n0[u + 1 >> 0], n0[C0 + 2 >> 0] = n0[u + 2 >> 0], n0[C0 + 3 >> 0] = n0[u + 3 >> 0], n0[C0 + 4 >> 0] = n0[u + 4 >> 0], n0[C0 + 5 >> 0] = n0[u + 5 >> 0], n0[C0 + 6 >> 0] = n0[u + 6 >> 0], n0[C0 + 7 >> 0] = n0[u + 7 >> 0];
      }
      function ur(u) {
        u = u | 0, x2 = u;
      }
      function lr() {
        return x2 | 0;
      }
      function Ze(u, _, l, P) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0;
        var T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0, y0 = 0;
        i0 = f0, T = l0[8 + _ >> 0] | 0, C = l0[64 + _ >> 0] | 0, _ = o[120 + (C * 12 | 0) >> 2] << T, q = o[124 + (C * 12 | 0) >> 2] << T, T = o[128 + (C * 12 | 0) >> 2] << T, l || (o[u >> 2] = _0(o[u >> 2] | 0, _) | 0);
        e: do
          if (P & 65436) {
            for (y0 = u + 4 | 0, h0 = u + 56 | 0, B0 = u + 60 | 0, k0 = o[B0 >> 2] | 0, w0 = _0(o[y0 >> 2] | 0, q) | 0, o[h0 >> 2] = _0(o[h0 >> 2] | 0, q) | 0, o[B0 >> 2] = _0(k0, T) | 0, B0 = u + 8 | 0, k0 = o[B0 >> 2] | 0, h0 = u + 16 | 0, m0 = _0(o[u + 20 >> 2] | 0, _) | 0, s0 = _0(o[h0 >> 2] | 0, T) | 0, p0 = u + 12 | 0, c0 = o[p0 >> 2] | 0, P = _0(o[u + 32 >> 2] | 0, q) | 0, l = _0(o[u + 24 >> 2] | 0, q) | 0, d0 = o[u + 28 >> 2] | 0, C = _0(o[u + 48 >> 2] | 0, T) | 0, t0 = _0(o[u + 36 >> 2] | 0, q) | 0, j = o[u + 44 >> 2] | 0, e0 = _0(o[u + 40 >> 2] | 0, T) | 0, T = _0(o[u + 52 >> 2] | 0, q) | 0, v0 = o[u >> 2] | 0, A0 = m0 + v0 | 0, m0 = v0 - m0 | 0, v0 = (w0 >> 1) - l | 0, w0 = (l >> 1) + w0 | 0, l = w0 + A0 | 0, o[u >> 2] = l, o[y0 >> 2] = v0 + m0, o[B0 >> 2] = m0 - v0, o[p0 >> 2] = A0 - w0, p0 = _0(q, d0 + k0 | 0) | 0, d0 = _0(k0 - d0 | 0, q) | 0, q = (s0 >> 1) - C | 0, s0 = (C >> 1) + s0 | 0, C = s0 + p0 | 0, o[h0 >> 2] = C, o[u + 20 >> 2] = q + d0, o[u + 24 >> 2] = d0 - q, o[u + 28 >> 2] = p0 - s0, s0 = _0(_, j + c0 | 0) | 0, _ = _0(c0 - j | 0, _) | 0, j = (P >> 1) - T | 0, P = (T >> 1) + P | 0, q = P + s0 | 0, o[u + 32 >> 2] = q, o[u + 36 >> 2] = j + _, o[u + 40 >> 2] = _ - j, o[u + 44 >> 2] = s0 - P, P = u + 56 | 0, s0 = o[P >> 2] | 0, j = s0 + t0 | 0, s0 = t0 - s0 | 0, _ = u + 60 | 0, T = o[_ >> 2] | 0, t0 = (e0 >> 1) - T | 0, e0 = (T >> 1) + e0 | 0, T = e0 + j | 0, o[u + 48 >> 2] = T, o[u + 52 >> 2] = t0 + s0, o[P >> 2] = s0 - t0, o[_ >> 2] = j - e0, _ = C, C = 3; ; ) {
              if (A0 = (_ >> 1) - T | 0, T = (T >> 1) + _ | 0, B0 = q + l + 32 | 0, v0 = B0 + T >> 6, o[u >> 2] = v0, _ = l - q + 32 | 0, m0 = _ + A0 >> 6, o[u + 16 >> 2] = m0, _ = _ - A0 >> 6, o[u + 32 >> 2] = _, T = B0 - T >> 6, o[u + 48 >> 2] = T, (v0 + 512 | 0) >>> 0 > 1023 | (m0 + 512 | 0) >>> 0 > 1023) {
                T = 1, _ = 14;
                break;
              }
              if ((_ + 512 | 0) >>> 0 > 1023 | (T + 512 | 0) >>> 0 > 1023) {
                T = 1, _ = 14;
                break;
              }
              if (P = u + 4 | 0, !C) break e;
              l = o[P >> 2] | 0, q = o[u + 36 >> 2] | 0, _ = o[u + 20 >> 2] | 0, T = o[u + 52 >> 2] | 0, u = P, C = C + -1 | 0;
            }
            if ((_ | 0) == 14)
              return f0 = i0, T | 0;
          } else {
            if (P & 98) {
              if (t0 = u + 4 | 0, j = _0(o[t0 >> 2] | 0, q) | 0, C = u + 20 | 0, e0 = _0(o[C >> 2] | 0, _) | 0, l = u + 24 | 0, T = _0(o[l >> 2] | 0, q) | 0, q = o[u >> 2] | 0, _ = (j >> 1) - T | 0, T = j + (T >> 1) | 0, j = e0 + q + 32 | 0, P = j + T >> 6, o[u >> 2] = P, e0 = q - e0 + 32 | 0, q = e0 + _ >> 6, o[t0 >> 2] = q, _ = e0 - _ >> 6, o[u + 8 >> 2] = _, T = j - T >> 6, o[u + 12 >> 2] = T, o[u + 48 >> 2] = P, o[u + 32 >> 2] = P, o[u + 16 >> 2] = P, o[u + 52 >> 2] = q, o[u + 36 >> 2] = q, o[C >> 2] = q, o[u + 56 >> 2] = _, o[u + 40 >> 2] = _, o[l >> 2] = _, o[u + 60 >> 2] = T, o[u + 44 >> 2] = T, o[u + 28 >> 2] = T, (P + 512 | 0) >>> 0 > 1023 | (q + 512 | 0) >>> 0 > 1023 | (_ + 512 | 0) >>> 0 > 1023 | (T + 512 | 0) >>> 0 > 1023)
                T = 1;
              else break;
              return f0 = i0, T | 0;
            }
            if (T = (o[u >> 2] | 0) + 32 >> 6, (T + 512 | 0) >>> 0 > 1023)
              return e0 = 1, f0 = i0, e0 | 0;
            o[u + 60 >> 2] = T, o[u + 56 >> 2] = T, o[u + 52 >> 2] = T, o[u + 48 >> 2] = T, o[u + 44 >> 2] = T, o[u + 40 >> 2] = T, o[u + 36 >> 2] = T, o[u + 32 >> 2] = T, o[u + 28 >> 2] = T, o[u + 24 >> 2] = T, o[u + 20 >> 2] = T, o[u + 16 >> 2] = T, o[u + 12 >> 2] = T, o[u + 8 >> 2] = T, o[u + 4 >> 2] = T, o[u >> 2] = T;
            break;
          }
        while (!1);
        return m0 = 0, f0 = i0, m0 | 0;
      }
      function ar(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0, T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0, y0 = 0, S0 = 0, E0 = 0, T0 = 0, g0 = 0, U0 = 0, L0 = 0;
        if (E0 = f0, l = n0[64 + _ >> 0] | 0, h0 = n0[8 + _ >> 0] | 0, g0 = u + 8 | 0, w0 = o[g0 >> 2] | 0, C = o[u + 20 >> 2] | 0, p0 = u + 16 | 0, m0 = o[p0 >> 2] | 0, d0 = u + 32 | 0, y0 = o[d0 >> 2] | 0, U0 = u + 12 | 0, A0 = o[U0 >> 2] | 0, P = o[u + 24 >> 2] | 0, e0 = o[u + 28 >> 2] | 0, s0 = u + 48 | 0, T = o[s0 >> 2] | 0, T0 = o[u + 36 >> 2] | 0, S0 = o[u + 40 >> 2] | 0, L0 = o[u + 44 >> 2] | 0, q = o[u + 52 >> 2] | 0, c0 = o[u >> 2] | 0, j = C + c0 | 0, C = c0 - C | 0, c0 = u + 4 | 0, v0 = o[c0 >> 2] | 0, k0 = v0 - P | 0, v0 = P + v0 | 0, P = v0 + j | 0, o[u >> 2] = P, i0 = k0 + C | 0, o[c0 >> 2] = i0, k0 = C - k0 | 0, o[g0 >> 2] = k0, v0 = j - v0 | 0, o[U0 >> 2] = v0, U0 = e0 + w0 | 0, e0 = w0 - e0 | 0, w0 = m0 - T | 0, m0 = T + m0 | 0, T = m0 + U0 | 0, o[p0 >> 2] = T, j = w0 + e0 | 0, o[u + 20 >> 2] = j, w0 = e0 - w0 | 0, o[u + 24 >> 2] = w0, m0 = U0 - m0 | 0, o[u + 28 >> 2] = m0, U0 = L0 + A0 | 0, L0 = A0 - L0 | 0, A0 = y0 - q | 0, y0 = q + y0 | 0, q = y0 + U0 | 0, o[u + 32 >> 2] = q, e0 = A0 + L0 | 0, o[u + 36 >> 2] = e0, A0 = L0 - A0 | 0, o[u + 40 >> 2] = A0, y0 = U0 - y0 | 0, o[u + 44 >> 2] = y0, U0 = u + 56 | 0, L0 = o[U0 >> 2] | 0, g0 = L0 + T0 | 0, L0 = T0 - L0 | 0, T0 = u + 60 | 0, C = o[T0 >> 2] | 0, B0 = S0 - C | 0, S0 = C + S0 | 0, C = S0 + g0 | 0, o[u + 48 >> 2] = C, t0 = B0 + L0 | 0, o[u + 52 >> 2] = t0, B0 = L0 - B0 | 0, o[U0 >> 2] = B0, S0 = g0 - S0 | 0, o[T0 >> 2] = S0, h0 = h0 & 255, l = o[120 + ((l & 255) * 12 | 0) >> 2] | 0, _ >>> 0 > 11) {
          _ = l << h0 + -2, h0 = q + P | 0, q = P - q | 0, P = T - C | 0, l = C + T | 0, o[u >> 2] = _0(l + h0 | 0, _) | 0, o[p0 >> 2] = _0(P + q | 0, _) | 0, o[d0 >> 2] = _0(q - P | 0, _) | 0, o[s0 >> 2] = _0(h0 - l | 0, _) | 0, d0 = e0 + i0 | 0, l = i0 - e0 | 0, p0 = j - t0 | 0, h0 = t0 + j | 0, o[c0 >> 2] = _0(h0 + d0 | 0, _) | 0, o[u + 20 >> 2] = _0(p0 + l | 0, _) | 0, o[u + 36 >> 2] = _0(l - p0 | 0, _) | 0, o[u + 52 >> 2] = _0(d0 - h0 | 0, _) | 0, h0 = A0 + k0 | 0, k0 = k0 - A0 | 0, A0 = w0 - B0 | 0, B0 = B0 + w0 | 0, o[u + 8 >> 2] = _0(B0 + h0 | 0, _) | 0, o[u + 24 >> 2] = _0(A0 + k0 | 0, _) | 0, o[u + 40 >> 2] = _0(k0 - A0 | 0, _) | 0, o[u + 56 >> 2] = _0(h0 - B0 | 0, _) | 0, B0 = y0 + v0 | 0, A0 = v0 - y0 | 0, v0 = m0 - S0 | 0, m0 = S0 + m0 | 0, o[u + 12 >> 2] = _0(m0 + B0 | 0, _) | 0, o[u + 28 >> 2] = _0(v0 + A0 | 0, _) | 0, o[u + 44 >> 2] = _0(A0 - v0 | 0, _) | 0, o[u + 60 >> 2] = _0(B0 - m0 | 0, _) | 0, f0 = E0;
          return;
        } else {
          T0 = (_ + -6 | 0) >>> 0 < 6 ? 1 : 2, _ = 2 - h0 | 0, h0 = q + P | 0, g0 = P - q | 0, q = T - C | 0, P = C + T | 0, o[u >> 2] = (_0(P + h0 | 0, l) | 0) + T0 >> _, o[p0 >> 2] = (_0(q + g0 | 0, l) | 0) + T0 >> _, o[d0 >> 2] = (_0(g0 - q | 0, l) | 0) + T0 >> _, o[s0 >> 2] = (_0(h0 - P | 0, l) | 0) + T0 >> _, d0 = e0 + i0 | 0, P = i0 - e0 | 0, p0 = j - t0 | 0, h0 = t0 + j | 0, o[c0 >> 2] = (_0(h0 + d0 | 0, l) | 0) + T0 >> _, o[u + 20 >> 2] = (_0(p0 + P | 0, l) | 0) + T0 >> _, o[u + 36 >> 2] = (_0(P - p0 | 0, l) | 0) + T0 >> _, o[u + 52 >> 2] = (_0(d0 - h0 | 0, l) | 0) + T0 >> _, h0 = A0 + k0 | 0, k0 = k0 - A0 | 0, A0 = w0 - B0 | 0, B0 = B0 + w0 | 0, o[u + 8 >> 2] = (_0(B0 + h0 | 0, l) | 0) + T0 >> _, o[u + 24 >> 2] = (_0(A0 + k0 | 0, l) | 0) + T0 >> _, o[u + 40 >> 2] = (_0(k0 - A0 | 0, l) | 0) + T0 >> _, o[u + 56 >> 2] = (_0(h0 - B0 | 0, l) | 0) + T0 >> _, B0 = y0 + v0 | 0, A0 = v0 - y0 | 0, v0 = m0 - S0 | 0, m0 = S0 + m0 | 0, o[u + 12 >> 2] = (_0(m0 + B0 | 0, l) | 0) + T0 >> _, o[u + 28 >> 2] = (_0(v0 + A0 | 0, l) | 0) + T0 >> _, o[u + 44 >> 2] = (_0(A0 - v0 | 0, l) | 0) + T0 >> _, o[u + 60 >> 2] = (_0(B0 - m0 | 0, l) | 0) + T0 >> _, f0 = E0;
          return;
        }
      }
      function cr(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0, T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0;
        l = o[120 + ((l0[64 + _ >> 0] | 0) * 12 | 0) >> 2] | 0, _ >>> 0 > 5 ? (l = l << (l0[8 + _ >> 0] | 0) + -1, _ = 0) : _ = 1, j = o[u >> 2] | 0, T = u + 8 | 0, q = o[T >> 2] | 0, t0 = q + j | 0, q = j - q | 0, j = u + 4 | 0, i0 = o[j >> 2] | 0, e0 = u + 12 | 0, P = o[e0 >> 2] | 0, C = i0 - P | 0, i0 = P + i0 | 0, o[u >> 2] = (_0(i0 + t0 | 0, l) | 0) >> _, o[j >> 2] = (_0(t0 - i0 | 0, l) | 0) >> _, o[T >> 2] = (_0(C + q | 0, l) | 0) >> _, o[e0 >> 2] = (_0(q - C | 0, l) | 0) >> _, e0 = u + 16 | 0, C = o[e0 >> 2] | 0, q = u + 24 | 0, T = o[q >> 2] | 0, j = T + C | 0, T = C - T | 0, C = u + 20 | 0, i0 = o[C >> 2] | 0, u = u + 28 | 0, t0 = o[u >> 2] | 0, P = i0 - t0 | 0, i0 = t0 + i0 | 0, o[e0 >> 2] = (_0(i0 + j | 0, l) | 0) >> _, o[C >> 2] = (_0(j - i0 | 0, l) | 0) >> _, o[q >> 2] = (_0(P + T | 0, l) | 0) >> _, o[u >> 2] = (_0(T - P | 0, l) | 0) >> _;
      }
      function pr(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0;
        if (P = f0, _ = 1 << _ + -1, !(_ & u))
          l = _, _ = 0;
        else
          return _ = 0, f0 = P, _ | 0;
        do
          _ = _ + 1 | 0, l = l >>> 1;
        while ((l | 0) != 0 & (l & u | 0) == 0);
        return f0 = P, _ | 0;
      }
      function p1(u) {
        u = u | 0;
        var _ = 0, l = 0;
        return l = f0, _ = 8 - (o[u + 8 >> 2] | 0) | 0, u = q0(u, _) | 0, (u | 0) == -1 ? (u = 1, f0 = l, u | 0) : (u = (u | 0) != (o[400 + (_ + -1 << 2) >> 2] | 0) & 1, f0 = l, u | 0);
      }
      function hr(u) {
        u = u | 0;
        var _ = 0, l = 0, P = 0, T = 0;
        return l = f0, T = o[u + 12 >> 2] << 3, P = o[u + 16 >> 2] | 0, _ = T - P | 0, (T | 0) == (P | 0) ? (u = 0, f0 = l, u | 0) : _ >>> 0 > 8 ? (u = 1, f0 = l, u | 0) : (u = ((X2(u) | 0) >>> (32 - _ | 0) | 0) != (1 << _ + -1 | 0) & 1, f0 = l, u | 0);
      }
      function h1(u, _, l) {
        u = u | 0, _ = _ | 0, l = l | 0;
        var P = 0, T = 0;
        T = f0, P = o[u + (l << 2) >> 2] | 0;
        do
          if (l = l + 1 | 0, l >>> 0 >= _ >>> 0) break;
        while ((o[u + (l << 2) >> 2] | 0) != (P | 0));
        return f0 = T, ((l | 0) == (_ | 0) ? 0 : l) | 0;
      }
      function d1(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0, T = 0;
        P = o[u + 4 >> 2] | 0, T = (_ >>> 0) % (P >>> 0) | 0, l = _ - T | 0, _ = _0(o[u + 8 >> 2] | 0, P) | 0, P = o[u >> 2] | 0, o[u + 12 >> 2] = P + ((l << 8) + (T << 4)), l = (T << 3) + (_ << 8) + (l << 6) | 0, o[u + 16 >> 2] = P + l, o[u + 20 >> 2] = P + (l + (_ << 6));
      }
      function l2(u, _, l) {
        return u = u | 0, _ = _ | 0, l = l | 0, (l | 0) >= (u | 0) && (u = (l | 0) > (_ | 0) ? _ : l), u | 0;
      }
      function dr(u, _, l, P) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0;
        var T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0;
        d0 = f0;
        e: do
          if (_ >>> 0 > 3 && (n0[u >> 0] | 0) == 0 && (n0[u + 1 >> 0] | 0) == 0 && (T = n0[u + 2 >> 0] | 0, (T & 255) < 2)) {
            r: do
              if ((_ | 0) != 3) {
                for (s0 = -3, c0 = 3, C = u + 3 | 0, q = 2; ; ) {
                  if (T << 24 >> 24)
                    if (T << 24 >> 24 == 1 & q >>> 0 > 1) {
                      t0 = c0, T = 0, j = 0, i0 = 0;
                      break;
                    } else q = 0;
                  else q = q + 1 | 0;
                  if (i0 = c0 + 1 | 0, (i0 | 0) == (_ | 0)) break r;
                  T = n0[C >> 0] | 0, s0 = ~c0, c0 = i0, C = C + 1 | 0;
                }
                for (; ; ) {
                  if (p0 = n0[C >> 0] | 0, e0 = t0 + 1 | 0, q = p0 << 24 >> 24 != 0, i0 = (q & 1 ^ 1) + i0 | 0, T = p0 << 24 >> 24 == 3 & (i0 | 0) == 2 ? 1 : T, p0 << 24 >> 24 == 1 & i0 >>> 0 > 1) {
                    p0 = 14;
                    break;
                  }
                  if (q && (j = i0 >>> 0 > 2 ? 1 : j, i0 = 0), (e0 | 0) == (_ | 0)) {
                    p0 = 18;
                    break;
                  } else
                    t0 = e0, C = C + 1 | 0;
                }
                if ((p0 | 0) == 14) {
                  e0 = s0 + t0 - i0 | 0, o[l + 12 >> 2] = e0, q = c0, i0 = i0 - (i0 >>> 0 < 3 ? i0 : 3) | 0;
                  break e;
                } else if ((p0 | 0) == 18) {
                  e0 = s0 + _ - i0 | 0, o[l + 12 >> 2] = e0, q = c0;
                  break e;
                }
              }
            while (!1);
            return o[P >> 2] = _, c0 = 1, f0 = d0, c0 | 0;
          } else p0 = 19;
        while (!1);
        if ((p0 | 0) == 19 && (o[l + 12 >> 2] = _, e0 = _, T = 1, q = 0, j = 0, i0 = 0), C = u + q | 0, o[l >> 2] = C, o[l + 4 >> 2] = C, o[l + 8 >> 2] = 0, o[l + 16 >> 2] = 0, t0 = l + 12 | 0, o[P >> 2] = i0 + q + e0, j)
          return c0 = 1, f0 = d0, c0 | 0;
        if (!T)
          return c0 = 0, f0 = d0, c0 | 0;
        i0 = o[t0 >> 2] | 0, T = C, j = C, q = 0;
        e: for (; ; ) {
          for (; ; ) {
            if (c0 = i0, i0 = i0 + -1 | 0, !c0) {
              p0 = 31;
              break e;
            }
            if (C = n0[T >> 0] | 0, (q | 0) != 2) break;
            if (C << 24 >> 24 != 3) {
              p0 = 29;
              break;
            }
            if (!i0) {
              T = 1, p0 = 32;
              break e;
            }
            if (T = T + 1 | 0, (l0[T >> 0] | 0) > 3) {
              T = 1, p0 = 32;
              break e;
            } else q = 0;
          }
          if ((p0 | 0) == 29)
            if (p0 = 0, (C & 255) < 3) {
              T = 1, p0 = 32;
              break;
            } else q = 2;
          n0[j >> 0] = C, T = T + 1 | 0, j = j + 1 | 0, q = C << 24 >> 24 == 0 ? q + 1 | 0 : 0;
        }
        return (p0 | 0) == 31 ? (o[t0 >> 2] = j - T + (o[t0 >> 2] | 0), c0 = 0, f0 = d0, c0 | 0) : (p0 | 0) == 32 ? (f0 = d0, T | 0) : 0;
      }
      function wr(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0, T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0;
        c0 = f0, f0 = f0 + 16 | 0, s0 = c0, U2(_, 0, 92), T = q0(u, 8) | 0;
        e: do
          if ((T | 0) != -1 && (o[_ >> 2] = T, q0(u, 1) | 0, q0(u, 1) | 0, (q0(u, 1) | 0) != -1) && (q0(u, 5) | 0) != -1 && (P = q0(u, 8) | 0, (P | 0) != -1)) {
            if (t0 = _ + 4 | 0, o[t0 >> 2] = P, T = _ + 8 | 0, l = P0(u, T) | 0, !l)
              if ((o[T >> 2] | 0) >>> 0 <= 31) {
                if (l = P0(u, s0) | 0, !l)
                  if (T = o[s0 >> 2] | 0, T >>> 0 <= 12) {
                    if (o[_ + 12 >> 2] = 1 << T + 4, l = P0(u, s0) | 0, !l)
                      if (T = o[s0 >> 2] | 0, T >>> 0 <= 2) {
                        o[_ + 16 >> 2] = T;
                        r: do
                          if (T) {
                            if ((T | 0) == 1) {
                              if (T = q0(u, 1) | 0, (T | 0) == -1) {
                                l = 1;
                                break e;
                              }
                              if (o[_ + 24 >> 2] = (T | 0) == 1 & 1, l = v2(
                                u,
                                _ + 28 | 0
                              ) | 0, l || (l = v2(
                                u,
                                _ + 32 | 0
                              ) | 0, l) || (C = _ + 36 | 0, l = P0(u, C) | 0, l)) break e;
                              if (T = o[C >> 2] | 0, T >>> 0 > 255) {
                                l = 1;
                                break e;
                              }
                              if (!T) {
                                o[_ + 40 >> 2] = 0;
                                break;
                              }
                              if (T = M2(T << 2) | 0, q = _ + 40 | 0, o[q >> 2] = T, !T) {
                                l = 65535;
                                break e;
                              }
                              if (o[C >> 2] | 0)
                                for (P = 0; ; ) {
                                  if (l = v2(
                                    u,
                                    T + (P << 2) | 0
                                  ) | 0, P = P + 1 | 0, l)
                                    break e;
                                  if (P >>> 0 >= (o[C >> 2] | 0) >>> 0)
                                    break r;
                                  T = o[q >> 2] | 0;
                                }
                            }
                          } else {
                            if (l = P0(u, s0) | 0, l) break e;
                            if (T = o[s0 >> 2] | 0, T >>> 0 > 12) {
                              l = 1;
                              break e;
                            }
                            o[_ + 20 >> 2] = 1 << T + 4;
                          }
                        while (!1);
                        if (e0 = _ + 44 | 0, l = P0(u, e0) | 0, !l)
                          if ((o[e0 >> 2] | 0) >>> 0 <= 16 && (j = q0(u, 1) | 0, (j | 0) != -1)) {
                            if (o[_ + 48 >> 2] = (j | 0) == 1 & 1, l = P0(u, s0) | 0, !l && (P = _ + 52 | 0, o[P >> 2] = (o[s0 >> 2] | 0) + 1, l = P0(u, s0) | 0, !l))
                              if (j = _ + 56 | 0, o[j >> 2] = (o[s0 >> 2] | 0) + 1, C = q0(
                                u,
                                1
                              ) | 0, !((C | 0) == 0 | (C | 0) == -1) && (q0(
                                u,
                                1
                              ) | 0) != -1 && (i0 = q0(
                                u,
                                1
                              ) | 0, (i0 | 0) != -1)) {
                                if (i0 = (i0 | 0) == 1, o[_ + 60 >> 2] = i0 & 1, i0) {
                                  if (i0 = _ + 64 | 0, l = P0(
                                    u,
                                    i0
                                  ) | 0, l || (T = _ + 68 | 0, l = P0(
                                    u,
                                    T
                                  ) | 0, l) || (C = _ + 72 | 0, l = P0(
                                    u,
                                    C
                                  ) | 0, l) || (q = _ + 76 | 0, l = P0(
                                    u,
                                    q
                                  ) | 0, l))
                                    break;
                                  if (P = o[P >> 2] | 0, (o[i0 >> 2] | 0) > ((P << 3) + ~o[T >> 2] | 0)) {
                                    l = 1;
                                    break;
                                  }
                                  if (T = o[j >> 2] | 0, (o[C >> 2] | 0) > ((T << 3) + ~o[q >> 2] | 0)) {
                                    l = 1;
                                    break;
                                  }
                                } else
                                  P = o[P >> 2] | 0, T = o[j >> 2] | 0;
                                l = _0(
                                  T,
                                  P
                                ) | 0;
                                do
                                  switch (o[t0 >> 2] | 0) {
                                    case 11: {
                                      T = 396, P = 345600, q = 58;
                                      break;
                                    }
                                    case 12: {
                                      T = 396, P = 912384, q = 58;
                                      break;
                                    }
                                    case 13: {
                                      T = 396, P = 912384, q = 58;
                                      break;
                                    }
                                    case 20: {
                                      T = 396, P = 912384, q = 58;
                                      break;
                                    }
                                    case 21: {
                                      T = 792, P = 1824768, q = 58;
                                      break;
                                    }
                                    case 22: {
                                      T = 1620, P = 3110400, q = 58;
                                      break;
                                    }
                                    case 30: {
                                      T = 1620, P = 3110400, q = 58;
                                      break;
                                    }
                                    case 31: {
                                      T = 3600, P = 6912e3, q = 58;
                                      break;
                                    }
                                    case 32: {
                                      T = 5120, P = 7864320, q = 58;
                                      break;
                                    }
                                    case 40: {
                                      T = 8192, P = 12582912, q = 58;
                                      break;
                                    }
                                    case 41: {
                                      T = 8192, P = 12582912, q = 58;
                                      break;
                                    }
                                    case 42: {
                                      T = 8704, P = 13369344, q = 58;
                                      break;
                                    }
                                    case 50: {
                                      T = 22080, P = 42393600, q = 58;
                                      break;
                                    }
                                    case 51: {
                                      T = 36864, P = 70778880, q = 58;
                                      break;
                                    }
                                    case 10: {
                                      T = 99, P = 152064, q = 58;
                                      break;
                                    }
                                    default:
                                      q = 60;
                                  }
                                while (!1);
                                do
                                  if ((q | 0) == 58) {
                                    if (T >>> 0 < l >>> 0) {
                                      q = 60;
                                      break;
                                    }
                                    P = (P >>> 0) / ((l * 384 | 0) >>> 0) | 0, P = P >>> 0 < 16 ? P : 16, o[s0 >> 2] = P, T = o[e0 >> 2] | 0, T >>> 0 > P >>> 0 && (P = T, q = 61);
                                  }
                                while (!1);
                                if ((q | 0) == 60 && (o[s0 >> 2] = 2147483647, P = o[e0 >> 2] | 0, q = 61), (q | 0) == 61 && (o[s0 >> 2] = P), q = _ + 88 | 0, o[q >> 2] = P, P = q0(
                                  u,
                                  1
                                ) | 0, (P | 0) == -1) {
                                  l = 1;
                                  break;
                                }
                                s0 = (P | 0) == 1, o[_ + 80 >> 2] = s0 & 1;
                                do
                                  if (s0) {
                                    if (P = M2(
                                      952
                                    ) | 0, T = _ + 84 | 0, o[T >> 2] = P, !P) {
                                      l = 65535;
                                      break e;
                                    }
                                    if (l = ei(
                                      u,
                                      P
                                    ) | 0, l)
                                      break e;
                                    if (l = o[T >> 2] | 0, !(o[l + 920 >> 2] | 0))
                                      break;
                                    if (P = o[l + 948 >> 2] | 0, (o[l + 944 >> 2] | 0) >>> 0 > P >>> 0) {
                                      l = 1;
                                      break e;
                                    }
                                    if (P >>> 0 < (o[e0 >> 2] | 0) >>> 0) {
                                      l = 1;
                                      break e;
                                    }
                                    if (P >>> 0 > (o[q >> 2] | 0) >>> 0) {
                                      l = 1;
                                      break e;
                                    }
                                    o[q >> 2] = (P | 0) == 0 ? 1 : P;
                                  }
                                while (!1);
                                p1(u) | 0, l = 0;
                              } else l = 1;
                          } else l = 1;
                      } else l = 1;
                  } else l = 1;
              } else l = 1;
          } else l = 1;
        while (!1);
        return f0 = c0, l | 0;
      }
      function kr(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0, T = 0, q = 0, C = 0, i0 = 0;
        if (i0 = f0, (o[u >> 2] | 0) != (o[_ >> 2] | 0) || (o[u + 4 >> 2] | 0) != (o[_ + 4 >> 2] | 0) || (o[u + 12 >> 2] | 0) != (o[_ + 12 >> 2] | 0) || (l = o[u + 16 >> 2] | 0, (l | 0) != (o[_ + 16 >> 2] | 0)) || (o[u + 44 >> 2] | 0) != (o[_ + 44 >> 2] | 0) || (o[u + 48 >> 2] | 0) != (o[_ + 48 >> 2] | 0) || (o[u + 52 >> 2] | 0) != (o[_ + 52 >> 2] | 0) || (o[u + 56 >> 2] | 0) != (o[_ + 56 >> 2] | 0) || (C = o[u + 60 >> 2] | 0, (C | 0) != (o[_ + 60 >> 2] | 0)) || (o[u + 80 >> 2] | 0) != (o[_ + 80 >> 2] | 0))
          return l = 1, f0 = i0, l | 0;
        e: do
          if (l) {
            if ((l | 0) == 1) {
              if ((o[u + 24 >> 2] | 0) != (o[_ + 24 >> 2] | 0) || (o[u + 28 >> 2] | 0) != (o[_ + 28 >> 2] | 0) || (o[u + 32 >> 2] | 0) != (o[_ + 32 >> 2] | 0) || (l = o[u + 36 >> 2] | 0, (l | 0) != (o[_ + 36 >> 2] | 0)))
                return l = 1, f0 = i0, l | 0;
              if (l) {
                for (P = o[u + 40 >> 2] | 0, T = o[_ + 40 >> 2] | 0, q = 0; ; ) {
                  if ((o[P + (q << 2) >> 2] | 0) != (o[T + (q << 2) >> 2] | 0)) {
                    l = 1;
                    break;
                  }
                  if (q = q + 1 | 0, q >>> 0 >= l >>> 0) break e;
                }
                return f0 = i0, l | 0;
              }
            }
          } else if ((o[u + 20 >> 2] | 0) != (o[_ + 20 >> 2] | 0))
            return l = 1, f0 = i0, l | 0;
        while (!1);
        return C && ((o[u + 64 >> 2] | 0) != (o[_ + 64 >> 2] | 0) || (o[u + 68 >> 2] | 0) != (o[_ + 68 >> 2] | 0) || (o[u + 72 >> 2] | 0) != (o[_ + 72 >> 2] | 0) || (o[u + 76 >> 2] | 0) != (o[_ + 76 >> 2] | 0)) ? (l = 1, f0 = i0, l | 0) : (l = 0, f0 = i0, l | 0);
      }
      function mr(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0, T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0;
        if (e0 = f0, f0 = f0 + 16 | 0, i0 = e0 + 4 | 0, j = e0, U2(_, 0, 72), l = P0(u, _) | 0, l)
          return f0 = e0, l | 0;
        if ((o[_ >> 2] | 0) >>> 0 > 255)
          return l = 1, f0 = e0, l | 0;
        if (P = _ + 4 | 0, l = P0(u, P) | 0, l)
          return f0 = e0, l | 0;
        if ((o[P >> 2] | 0) >>> 0 > 31 || q0(u, 1) | 0 || (l = q0(u, 1) | 0, (l | 0) == -1))
          return l = 1, f0 = e0, l | 0;
        if (o[_ + 8 >> 2] = (l | 0) == 1 & 1, l = P0(u, i0) | 0, l)
          return f0 = e0, l | 0;
        if (l = (o[i0 >> 2] | 0) + 1 | 0, C = _ + 12 | 0, o[C >> 2] = l, l >>> 0 > 8)
          return l = 1, f0 = e0, l | 0;
        e: do
          if (l >>> 0 > 1) {
            if (l = _ + 16 | 0, P = P0(u, l) | 0, P)
              return l = P, f0 = e0, l | 0;
            if (l = o[l >> 2] | 0, l >>> 0 > 6)
              return l = 1, f0 = e0, l | 0;
            switch (l | 0) {
              case 5:
              case 4:
              case 3: {
                if (l = q0(u, 1) | 0, (l | 0) == -1)
                  return l = 1, f0 = e0, l | 0;
                if (o[_ + 32 >> 2] = (l | 0) == 1 & 1, l = P0(u, i0) | 0, l)
                  return f0 = e0, l | 0;
                o[_ + 36 >> 2] = (o[i0 >> 2] | 0) + 1;
                break e;
              }
              case 0: {
                if (l = M2(o[C >> 2] << 2) | 0, T = _ + 20 | 0, o[T >> 2] = l, !l)
                  return l = 65535, f0 = e0, l | 0;
                if (o[C >> 2] | 0) P = 0;
                else break e;
                for (; l = P0(u, i0) | 0, !l; )
                  if (o[(o[T >> 2] | 0) + (P << 2) >> 2] = (o[i0 >> 2] | 0) + 1, P = P + 1 | 0, P >>> 0 >= (o[C >> 2] | 0) >>> 0)
                    break e;
                return f0 = e0, l | 0;
              }
              case 2: {
                if (P = _ + 24 | 0, o[P >> 2] = M2((o[C >> 2] << 2) + -4 | 0) | 0, l = M2((o[C >> 2] << 2) + -4 | 0) | 0, q = _ + 28 | 0, o[q >> 2] = l, (o[P >> 2] | 0) == 0 | (l | 0) == 0)
                  return l = 65535, f0 = e0, l | 0;
                if ((o[C >> 2] | 0) == 1) break e;
                for (T = 0; ; ) {
                  if (l = P0(u, i0) | 0, l) {
                    P = 46;
                    break;
                  }
                  if (o[(o[P >> 2] | 0) + (T << 2) >> 2] = o[i0 >> 2], l = P0(u, i0) | 0, l) {
                    P = 46;
                    break;
                  }
                  if (o[(o[q >> 2] | 0) + (T << 2) >> 2] = o[i0 >> 2], T = T + 1 | 0, T >>> 0 >= ((o[C >> 2] | 0) + -1 | 0) >>> 0)
                    break e;
                }
                if ((P | 0) == 46)
                  return f0 = e0, l | 0;
                break;
              }
              case 6: {
                if (l = P0(u, i0) | 0, l)
                  return f0 = e0, l | 0;
                if (P = (o[i0 >> 2] | 0) + 1 | 0, l = _ + 40 | 0, o[l >> 2] = P, P = M2(P << 2) | 0, q = _ + 44 | 0, o[q >> 2] = P, !P)
                  return l = 65535, f0 = e0, l | 0;
                if (T = o[432 + ((o[C >> 2] | 0) + -1 << 2) >> 2] | 0, o[l >> 2] | 0) P = 0;
                else break e;
                for (; ; ) {
                  if (t0 = q0(u, T) | 0, o[(o[q >> 2] | 0) + (P << 2) >> 2] = t0, P = P + 1 | 0, t0 >>> 0 >= (o[C >> 2] | 0) >>> 0) {
                    l = 1;
                    break;
                  }
                  if (P >>> 0 >= (o[l >> 2] | 0) >>> 0)
                    break e;
                }
                return f0 = e0, l | 0;
              }
              default:
                break e;
            }
          }
        while (!1);
        return l = P0(u, i0) | 0, l ? (u = l, f0 = e0, u | 0) : (l = o[i0 >> 2] | 0, l >>> 0 > 31 ? (u = 1, f0 = e0, u | 0) : (o[_ + 48 >> 2] = l + 1, l = P0(u, i0) | 0, l ? (u = l, f0 = e0, u | 0) : (o[i0 >> 2] | 0) >>> 0 > 31 || q0(u, 1) | 0 || (q0(u, 2) | 0) >>> 0 > 2 ? (u = 1, f0 = e0, u | 0) : (l = v2(u, j) | 0, l ? (u = l, f0 = e0, u | 0) : (l = (o[j >> 2] | 0) + 26 | 0, l >>> 0 > 51 ? (u = 1, f0 = e0, u | 0) : (o[_ + 52 >> 2] = l, l = v2(u, j) | 0, l ? (u = l, f0 = e0, u | 0) : ((o[j >> 2] | 0) + 26 | 0) >>> 0 > 51 ? (u = 1, f0 = e0, u | 0) : (l = v2(u, j) | 0, l ? (u = l, f0 = e0, u | 0) : (l = o[j >> 2] | 0, (l + 12 | 0) >>> 0 > 24 || (o[_ + 56 >> 2] = l, l = q0(u, 1) | 0, (l | 0) == -1) || (o[_ + 60 >> 2] = (l | 0) == 1 & 1, l = q0(u, 1) | 0, (l | 0) == -1) || (o[_ + 64 >> 2] = (l | 0) == 1 & 1, l = q0(u, 1) | 0, (l | 0) == -1) ? (u = 1, f0 = e0, u | 0) : (o[_ + 68 >> 2] = (l | 0) == 1 & 1, p1(u) | 0, u = 0, f0 = e0, u | 0))))))));
      }
      function vr(u, _, l, P, T) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0;
        var q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0;
        if (v0 = f0, f0 = f0 + 32 | 0, k0 = v0 + 20 | 0, d0 = v0 + 16 | 0, c0 = v0 + 12 | 0, e0 = v0 + 8 | 0, B0 = v0 + 4 | 0, w0 = v0, U2(_, 0, 988), A0 = _0(o[l + 56 >> 2] | 0, o[l + 52 >> 2] | 0) | 0, j = P0(u, B0) | 0, j)
          return T = j, f0 = v0, T | 0;
        if (s0 = o[B0 >> 2] | 0, o[_ >> 2] = s0, s0 >>> 0 >= A0 >>> 0)
          return T = 1, f0 = v0, T | 0;
        if (j = P0(u, B0) | 0, j)
          return T = j, f0 = v0, T | 0;
        if (j = o[B0 >> 2] | 0, t0 = _ + 4 | 0, o[t0 >> 2] = j, (j | 0) == 5 | (j | 0) == 0) i0 = 5;
        else if (!((j | 0) == 7 | (j | 0) == 2))
          return T = 1, f0 = v0, T | 0;
        if ((i0 | 0) == 5 && ((o[T >> 2] | 0) == 5 || !(o[l + 44 >> 2] | 0)))
          return T = 1, f0 = v0, T | 0;
        if (j = P0(u, B0) | 0, j)
          return T = j, f0 = v0, T | 0;
        if (s0 = o[B0 >> 2] | 0, o[_ + 8 >> 2] = s0, (s0 | 0) != (o[P >> 2] | 0))
          return T = 1, f0 = v0, T | 0;
        for (s0 = l + 12 | 0, j = o[s0 >> 2] | 0, i0 = 0; j >>> i0; )
          i0 = i0 + 1 | 0;
        if (j = q0(u, i0 + -1 | 0) | 0, (j | 0) == -1 || (i0 = (o[T >> 2] | 0) == 5, i0 & (j | 0) != 0))
          return T = 1, f0 = v0, T | 0;
        if (o[_ + 12 >> 2] = j, i0) {
          if (j = P0(u, B0) | 0, j)
            return T = j, f0 = v0, T | 0;
          if (j = o[B0 >> 2] | 0, o[_ + 16 >> 2] = j, j >>> 0 > 65535)
            return T = 1, f0 = v0, T | 0;
        }
        if (q = l + 16 | 0, j = o[q >> 2] | 0, !j) {
          for (C = l + 20 | 0, j = o[C >> 2] | 0, i0 = 0; j >>> i0; )
            i0 = i0 + 1 | 0;
          if (j = q0(u, i0 + -1 | 0) | 0, (j | 0) == -1)
            return T = 1, f0 = v0, T | 0;
          i0 = _ + 20 | 0, o[i0 >> 2] = j;
          do
            if (o[P + 8 >> 2] | 0) {
              if (j = v2(u, w0) | 0, j)
                return T = j, f0 = v0, T | 0;
              o[_ + 24 >> 2] = o[w0 >> 2];
              break;
            }
          while (!1);
          if ((o[T >> 2] | 0) == 5 && (j = o[i0 >> 2] | 0, j >>> 0 > (o[C >> 2] | 0) >>> 1 >>> 0 || (i0 = o[_ + 24 >> 2] | 0, (j | 0) != (((i0 | 0) > 0 ? 0 : 0 - i0 | 0) | 0))))
            return T = 1, f0 = v0, T | 0;
          j = o[q >> 2] | 0;
        }
        if ((j | 0) == 1 && (o[l + 24 >> 2] | 0) == 0) {
          if (j = v2(u, w0) | 0, j)
            return T = j, f0 = v0, T | 0;
          j = _ + 28 | 0, o[j >> 2] = o[w0 >> 2];
          do
            if (o[P + 8 >> 2] | 0) {
              if (i0 = v2(u, w0) | 0, i0)
                return T = i0, f0 = v0, T | 0;
              o[_ + 32 >> 2] = o[w0 >> 2];
              break;
            }
          while (!1);
          if ((o[T >> 2] | 0) == 5 && (i0 = o[j >> 2] | 0, j = (o[l + 32 >> 2] | 0) + i0 + (o[_ + 32 >> 2] | 0) | 0, (((i0 | 0) < (j | 0) ? i0 : j) | 0) != 0))
            return T = 1, f0 = v0, T | 0;
        }
        if (o[P + 68 >> 2] | 0) {
          if (j = P0(u, B0) | 0, j)
            return T = j, f0 = v0, T | 0;
          if (j = o[B0 >> 2] | 0, o[_ + 36 >> 2] = j, j >>> 0 > 127)
            return T = 1, f0 = v0, T | 0;
        }
        if (j = o[t0 >> 2] | 0, (j | 0) == 5 | (j | 0) == 0) {
          if (j = q0(u, 1) | 0, (j | 0) == -1)
            return T = 1, f0 = v0, T | 0;
          o[_ + 40 >> 2] = j;
          do
            if (j) {
              if (j = P0(u, B0) | 0, j)
                return T = j, f0 = v0, T | 0;
              if (j = o[B0 >> 2] | 0, j >>> 0 > 15)
                return T = 1, f0 = v0, T | 0;
              o[_ + 44 >> 2] = j + 1;
              break;
            } else {
              if (j = o[P + 48 >> 2] | 0, j >>> 0 > 16)
                return T = 1, f0 = v0, T | 0;
              o[_ + 44 >> 2] = j;
              break;
            }
          while (!1);
          j = o[t0 >> 2] | 0;
        }
        do
          if ((j | 0) == 5 | (j | 0) == 0) {
            if (q = o[_ + 44 >> 2] | 0, i0 = o[s0 >> 2] | 0, j = q0(u, 1) | 0, (j | 0) == -1)
              return T = 1, f0 = v0, T | 0;
            if (o[_ + 68 >> 2] = j, j) {
              C = 0;
              e: for (; ; ) {
                if (C >>> 0 > q >>> 0) {
                  h0 = 1, i0 = 110;
                  break;
                }
                if (j = P0(u, e0) | 0, j) {
                  h0 = j, i0 = 110;
                  break;
                }
                if (j = o[e0 >> 2] | 0, j >>> 0 > 3) {
                  h0 = 1, i0 = 110;
                  break;
                }
                o[_ + (C * 12 | 0) + 72 >> 2] = j;
                do
                  if (j >>> 0 < 2) {
                    if (j = P0(u, c0) | 0, j) {
                      h0 = j, i0 = 110;
                      break e;
                    }
                    if (j = o[c0 >> 2] | 0, j >>> 0 >= i0 >>> 0) {
                      h0 = 1, i0 = 110;
                      break e;
                    }
                    o[_ + (C * 12 | 0) + 76 >> 2] = j + 1;
                  } else {
                    if ((j | 0) != 2) break;
                    if (j = P0(u, c0) | 0, j) {
                      h0 = j, i0 = 110;
                      break e;
                    }
                    o[_ + (C * 12 | 0) + 80 >> 2] = o[c0 >> 2];
                  }
                while (!1);
                if ((o[e0 >> 2] | 0) == 3) {
                  i0 = 61;
                  break;
                } else C = C + 1 | 0;
              }
              if ((i0 | 0) == 61) {
                if (!C) h0 = 1;
                else break;
                return f0 = v0, h0 | 0;
              } else if ((i0 | 0) == 110)
                return f0 = v0, h0 | 0;
            }
          }
        while (!1);
        do
          if (o[T + 4 >> 2] | 0) {
            if (s0 = o[l + 44 >> 2] | 0, T = (o[T >> 2] | 0) == 5, j = q0(u, 1) | 0, i0 = (j | 0) == -1, T) {
              if (i0 || (o[_ + 276 >> 2] = j, q = q0(u, 1) | 0, (q | 0) == -1))
                return T = 1, f0 = v0, T | 0;
              if (o[_ + 280 >> 2] = q, (s0 | 0) != 0 | (q | 0) == 0) break;
              return h0 = 1, f0 = v0, h0 | 0;
            }
            if (i0)
              return T = 1, f0 = v0, T | 0;
            if (o[_ + 284 >> 2] = j, j) {
              for (i0 = (s0 << 1) + 2 | 0, C = 0, l = 0, q = 0, e0 = 0, t0 = 0; ; ) {
                if (C >>> 0 > i0 >>> 0) {
                  h0 = 1, i0 = 110;
                  break;
                }
                if (j = P0(u, d0) | 0, j) {
                  h0 = j, i0 = 110;
                  break;
                }
                if (j = o[d0 >> 2] | 0, j >>> 0 > 6) {
                  h0 = 1, i0 = 110;
                  break;
                }
                if (o[_ + (C * 20 | 0) + 288 >> 2] = j, (j & -3 | 0) == 1) {
                  if (j = P0(u, k0) | 0, j) {
                    h0 = j, i0 = 110;
                    break;
                  }
                  o[_ + (C * 20 | 0) + 292 >> 2] = (o[k0 >> 2] | 0) + 1, j = o[d0 >> 2] | 0;
                }
                if ((j | 0) == 2) {
                  if (j = P0(u, k0) | 0, j) {
                    h0 = j, i0 = 110;
                    break;
                  }
                  o[_ + (C * 20 | 0) + 296 >> 2] = o[k0 >> 2], j = o[d0 >> 2] | 0;
                }
                if ((j | 0) == 3 | (j | 0) == 6) {
                  if (j = P0(u, k0) | 0, j) {
                    h0 = j, i0 = 110;
                    break;
                  }
                  o[_ + (C * 20 | 0) + 300 >> 2] = o[k0 >> 2], j = o[d0 >> 2] | 0;
                }
                if ((j | 0) == 4) {
                  if (j = P0(u, k0) | 0, j) {
                    h0 = j, i0 = 110;
                    break;
                  }
                  if (j = o[k0 >> 2] | 0, j >>> 0 > s0 >>> 0) {
                    h0 = 1, i0 = 110;
                    break;
                  }
                  j ? o[_ + (C * 20 | 0) + 304 >> 2] = j + -1 : o[_ + (C * 20 | 0) + 304 >> 2] = 65535, j = o[d0 >> 2] | 0, p0 = q + 1 | 0;
                } else p0 = q;
                if (e0 = ((j | 0) == 5 & 1) + e0 | 0, l = ((j | 0) != 0 & j >>> 0 < 4 & 1) + l | 0, t0 = ((j | 0) == 6 & 1) + t0 | 0, j)
                  C = C + 1 | 0, q = p0;
                else {
                  i0 = 90;
                  break;
                }
              }
              if ((i0 | 0) == 90) {
                if (p0 >>> 0 > 1 | e0 >>> 0 > 1 | t0 >>> 0 > 1)
                  return T = 1, f0 = v0, T | 0;
                if ((l | 0) != 0 & (e0 | 0) != 0) h0 = 1;
                else break;
                return f0 = v0, h0 | 0;
              } else if ((i0 | 0) == 110)
                return f0 = v0, h0 | 0;
            }
          }
        while (!1);
        if (q = v2(u, w0) | 0, q)
          return T = q, f0 = v0, T | 0;
        if (T = o[w0 >> 2] | 0, o[_ + 48 >> 2] = T, T = T + (o[P + 52 >> 2] | 0) | 0, o[w0 >> 2] = T, T >>> 0 > 51)
          return T = 1, f0 = v0, T | 0;
        do
          if (o[P + 60 >> 2] | 0) {
            if (q = P0(u, B0) | 0, q)
              return T = q, f0 = v0, T | 0;
            if (q = o[B0 >> 2] | 0, o[_ + 52 >> 2] = q, q >>> 0 > 2)
              return T = 1, f0 = v0, T | 0;
            if ((q | 0) == 1) break;
            if (q = v2(u, w0) | 0, q)
              return T = q, f0 = v0, T | 0;
            if (q = o[w0 >> 2] | 0, (q + 6 | 0) >>> 0 > 12)
              return T = 1, f0 = v0, T | 0;
            if (o[_ + 56 >> 2] = q << 1, q = v2(u, w0) | 0, q)
              return T = q, f0 = v0, T | 0;
            if (q = o[w0 >> 2] | 0, (q + 6 | 0) >>> 0 > 12)
              return T = 1, f0 = v0, T | 0;
            o[_ + 60 >> 2] = q << 1;
            break;
          }
        while (!1);
        do
          if ((o[P + 12 >> 2] | 0) >>> 0 > 1 && ((o[P + 16 >> 2] | 0) + -3 | 0) >>> 0 < 3) {
            for (j = P + 36 | 0, i0 = o[j >> 2] | 0, i0 = (((A0 >>> 0) % (i0 >>> 0) | 0 | 0) == 0 ? 1 : 2) + ((A0 >>> 0) / (i0 >>> 0) | 0) | 0, C = 0; q = C + 1 | 0, -1 << q & i0; )
              C = q;
            if (q = q0(
              u,
              ((1 << C) + -1 & i0 | 0) == 0 ? C : q
            ) | 0, o[B0 >> 2] = q, (q | 0) == -1)
              return T = 1, f0 = v0, T | 0;
            if (o[_ + 64 >> 2] = q, T = o[j >> 2] | 0, q >>> 0 > (((A0 + -1 + T | 0) >>> 0) / (T >>> 0) | 0) >>> 0)
              h0 = 1;
            else break;
            return f0 = v0, h0 | 0;
          }
        while (!1);
        return T = 0, f0 = v0, T | 0;
      }
      function w1(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0, T = 0;
        return T = f0, f0 = f0 + 32 | 0, P = T + 20 | 0, l = T, o[l + 0 >> 2] = o[u + 0 >> 2], o[l + 4 >> 2] = o[u + 4 >> 2], o[l + 8 >> 2] = o[u + 8 >> 2], o[l + 12 >> 2] = o[u + 12 >> 2], o[l + 16 >> 2] = o[u + 16 >> 2], u = P0(l, P) | 0, u || (u = P0(l, P) | 0, u || (u = P0(l, P) | 0, u || (u = o[P >> 2] | 0, u >>> 0 > 255 ? u = 1 : (o[_ >> 2] = u, u = 0)))), f0 = T, u | 0;
      }
      function yr(u, _, l) {
        u = u | 0, _ = _ | 0, l = l | 0;
        var P = 0, T = 0, q = 0;
        if (q = f0, f0 = f0 + 32 | 0, P = q + 20 | 0, T = q, o[T + 0 >> 2] = o[u + 0 >> 2], o[T + 4 >> 2] = o[u + 4 >> 2], o[T + 8 >> 2] = o[u + 8 >> 2], o[T + 12 >> 2] = o[u + 12 >> 2], o[T + 16 >> 2] = o[u + 16 >> 2], u = P0(T, P) | 0, u || (u = P0(T, P) | 0, u))
          return f0 = q, u | 0;
        if (u = P0(T, P) | 0, !u) u = 0;
        else
          return f0 = q, u | 0;
        for (; _ >>> u; )
          u = u + 1 | 0;
        return u = q0(T, u + -1 | 0) | 0, (u | 0) == -1 ? (u = 1, f0 = q, u | 0) : (o[l >> 2] = u, u = 0, f0 = q, u | 0);
      }
      function Br(u, _, l, P) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0;
        var T = 0, q = 0, C = 0;
        if (C = f0, f0 = f0 + 32 | 0, T = C + 20 | 0, q = C, (l | 0) != 5)
          return l = 1, f0 = C, l | 0;
        if (o[q + 0 >> 2] = o[u + 0 >> 2], o[q + 4 >> 2] = o[u + 4 >> 2], o[q + 8 >> 2] = o[u + 8 >> 2], o[q + 12 >> 2] = o[u + 12 >> 2], o[q + 16 >> 2] = o[u + 16 >> 2], l = P0(q, T) | 0, l || (l = P0(q, T) | 0, l))
          return f0 = C, l | 0;
        if (l = P0(q, T) | 0, !l) l = 0;
        else
          return f0 = C, l | 0;
        for (; _ >>> l; )
          l = l + 1 | 0;
        return (q0(q, l + -1 | 0) | 0) == -1 ? (l = 1, f0 = C, l | 0) : (l = P0(q, P) | 0, f0 = C, l | 0);
      }
      function gr(u, _, l, P) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0;
        var T = 0, q = 0, C = 0, i0 = 0, j = 0;
        if (j = f0, f0 = f0 + 32 | 0, C = j + 20 | 0, i0 = j, o[i0 + 0 >> 2] = o[u + 0 >> 2], o[i0 + 4 >> 2] = o[u + 4 >> 2], o[i0 + 8 >> 2] = o[u + 8 >> 2], o[i0 + 12 >> 2] = o[u + 12 >> 2], o[i0 + 16 >> 2] = o[u + 16 >> 2], u = P0(i0, C) | 0, u || (u = P0(i0, C) | 0, u) || (u = P0(i0, C) | 0, u))
          return T = u, f0 = j, T | 0;
        for (u = o[_ + 12 >> 2] | 0, T = 0; u >>> T; )
          T = T + 1 | 0;
        if ((q0(i0, T + -1 | 0) | 0) == -1)
          return T = 1, f0 = j, T | 0;
        if ((l | 0) == 5 && (q = P0(i0, C) | 0, (q | 0) != 0))
          return T = q, f0 = j, T | 0;
        for (T = o[_ + 20 >> 2] | 0, u = 0; T >>> u; )
          u = u + 1 | 0;
        return T = q0(i0, u + -1 | 0) | 0, (T | 0) == -1 ? (T = 1, f0 = j, T | 0) : (o[P >> 2] = T, T = 0, f0 = j, T | 0);
      }
      function Ar(u, _, l, P) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0;
        var T = 0, q = 0, C = 0, i0 = 0, j = 0;
        if (j = f0, f0 = f0 + 32 | 0, C = j + 20 | 0, i0 = j, o[i0 + 0 >> 2] = o[u + 0 >> 2], o[i0 + 4 >> 2] = o[u + 4 >> 2], o[i0 + 8 >> 2] = o[u + 8 >> 2], o[i0 + 12 >> 2] = o[u + 12 >> 2], o[i0 + 16 >> 2] = o[u + 16 >> 2], u = P0(i0, C) | 0, u || (u = P0(i0, C) | 0, u) || (u = P0(i0, C) | 0, u))
          return T = u, f0 = j, T | 0;
        for (u = o[_ + 12 >> 2] | 0, T = 0; u >>> T; )
          T = T + 1 | 0;
        if ((q0(i0, T + -1 | 0) | 0) == -1)
          return T = 1, f0 = j, T | 0;
        if ((l | 0) == 5 && (q = P0(i0, C) | 0, (q | 0) != 0))
          return T = q, f0 = j, T | 0;
        for (T = o[_ + 20 >> 2] | 0, u = 0; T >>> u; )
          u = u + 1 | 0;
        return (q0(i0, u + -1 | 0) | 0) == -1 ? (T = 1, f0 = j, T | 0) : (T = v2(i0, P) | 0, f0 = j, T | 0);
      }
      function xr(u, _, l, P, T) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0;
        var q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0;
        if (t0 = f0, f0 = f0 + 32 | 0, i0 = t0 + 20 | 0, e0 = t0, o[e0 + 0 >> 2] = o[u + 0 >> 2], o[e0 + 4 >> 2] = o[u + 4 >> 2], o[e0 + 8 >> 2] = o[u + 8 >> 2], o[e0 + 12 >> 2] = o[u + 12 >> 2], o[e0 + 16 >> 2] = o[u + 16 >> 2], q = P0(e0, i0) | 0, q || (q = P0(e0, i0) | 0, q) || (q = P0(e0, i0) | 0, q))
          return e0 = q, f0 = t0, e0 | 0;
        for (q = o[_ + 12 >> 2] | 0, u = 0; q >>> u; )
          u = u + 1 | 0;
        return (q0(e0, u + -1 | 0) | 0) == -1 ? (e0 = 1, f0 = t0, e0 | 0) : (l | 0) == 5 && (C = P0(e0, i0) | 0, (C | 0) != 0) ? (e0 = C, f0 = t0, e0 | 0) : (q = v2(e0, T) | 0, q ? (e0 = q, f0 = t0, e0 | 0) : (P | 0) != 0 && (j = v2(e0, T + 4 | 0) | 0, (j | 0) != 0) ? (e0 = j, f0 = t0, e0 | 0) : (e0 = 0, f0 = t0, e0 | 0));
      }
      function br(u, _, l, P, T) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0;
        var q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0;
        if (t0 = f0, f0 = f0 + 32 | 0, e0 = t0 + 24 | 0, i0 = t0 + 20 | 0, j = t0, o[j + 0 >> 2] = o[_ + 0 >> 2], o[j + 4 >> 2] = o[_ + 4 >> 2], o[j + 8 >> 2] = o[_ + 8 >> 2], o[j + 12 >> 2] = o[_ + 12 >> 2], o[j + 16 >> 2] = o[_ + 16 >> 2], T = P0(j, e0) | 0, T || (T = P0(j, e0) | 0, T) || (T = P0(j, e0) | 0, T))
          return s0 = T, f0 = t0, s0 | 0;
        for (T = o[l + 12 >> 2] | 0, _ = 0; T >>> _; )
          _ = _ + 1 | 0;
        if ((q0(j, _ + -1 | 0) | 0) == -1)
          return s0 = 1, f0 = t0, s0 | 0;
        if (T = P0(j, e0) | 0, T)
          return s0 = T, f0 = t0, s0 | 0;
        if (q = l + 16 | 0, T = o[q >> 2] | 0, !T) {
          for (_ = o[l + 20 >> 2] | 0, T = 0; _ >>> T; )
            T = T + 1 | 0;
          if ((q0(j, T + -1 | 0) | 0) == -1)
            return s0 = 1, f0 = t0, s0 | 0;
          if ((o[P + 8 >> 2] | 0) != 0 && (C = v2(j, i0) | 0, (C | 0) != 0))
            return s0 = C, f0 = t0, s0 | 0;
          T = o[q >> 2] | 0;
        }
        if ((T | 0) == 1 && (o[l + 24 >> 2] | 0) == 0) {
          if (T = v2(j, i0) | 0, T)
            return s0 = T, f0 = t0, s0 | 0;
          if ((o[P + 8 >> 2] | 0) != 0 && (s0 = v2(j, i0) | 0, (s0 | 0) != 0))
            return f0 = t0, s0 | 0;
        }
        return (o[P + 68 >> 2] | 0) != 0 && (c0 = P0(j, e0) | 0, (c0 | 0) != 0) ? (s0 = c0, f0 = t0, s0 | 0) : (s0 = q0(j, 1) | 0, o[u >> 2] = s0, s0 = (s0 | 0) == -1 & 1, f0 = t0, s0 | 0);
      }
      function Sr(u, _, l, P) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0;
        var T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0, y0 = 0, S0 = 0, E0 = 0, T0 = 0, g0 = 0, U0 = 0, L0 = 0, O0 = 0;
        for (g0 = f0, f0 = f0 + 448 | 0, p0 = g0 + 8 | 0, m0 = g0 + 4 | 0, B0 = g0, p0 = p0 + (0 - p0 & 15) | 0, s0 = o[_ + 3376 >> 2] | 0, i0 = o[P >> 2] | 0, o[m0 >> 2] = 0, y0 = _ + 1192 | 0, o[y0 >> 2] = (o[y0 >> 2] | 0) + 1, d0 = _ + 1200 | 0, o[d0 >> 2] = 0, c0 = _ + 12 | 0, o[B0 >> 2] = (o[P + 48 >> 2] | 0) + (o[(o[c0 >> 2] | 0) + 52 >> 2] | 0), v0 = P + 36 | 0, h0 = _ + 1212 | 0, k0 = P + 52 | 0, w0 = P + 56 | 0, A0 = P + 60 | 0, S0 = P + 4 | 0, e0 = P + 44 | 0, C = _ + 1220 | 0, t0 = _ + 1172 | 0, T0 = _ + 1176 | 0, j = s0 + 12 | 0, E0 = 0, T = 0; ; ) {
          if (P = o[h0 >> 2] | 0, (o[v0 >> 2] | 0) == 0 && (o[P + (i0 * 216 | 0) + 196 >> 2] | 0) != 0) {
            T = 1, P = 22;
            break;
          }
          if (q = o[(o[c0 >> 2] | 0) + 56 >> 2] | 0, O0 = o[k0 >> 2] | 0, L0 = o[w0 >> 2] | 0, U0 = o[A0 >> 2] | 0, o[P + (i0 * 216 | 0) + 4 >> 2] = o[y0 >> 2], o[P + (i0 * 216 | 0) + 8 >> 2] = O0, o[P + (i0 * 216 | 0) + 12 >> 2] = L0, o[P + (i0 * 216 | 0) + 16 >> 2] = U0, o[P + (i0 * 216 | 0) + 24 >> 2] = q, P = o[S0 >> 2] | 0, (P | 0) != 2 && !((P | 0) == 7 | (T | 0) != 0)) {
            if (T = P0(u, m0) | 0, T) {
              P = 22;
              break;
            }
            if (P = o[m0 >> 2] | 0, P >>> 0 > ((o[T0 >> 2] | 0) - i0 | 0) >>> 0) {
              T = 1, P = 22;
              break;
            }
            P ? (U2(j, 0, 164), o[s0 >> 2] = 0, T = 1) : T = 0;
          }
          if (P = o[m0 >> 2] | 0, P)
            o[m0 >> 2] = P + -1, q = T;
          else if (T = Ur(
            u,
            s0,
            (o[h0 >> 2] | 0) + (i0 * 216 | 0) | 0,
            o[S0 >> 2] | 0,
            o[e0 >> 2] | 0
          ) | 0, !T) q = 0;
          else {
            P = 22;
            break;
          }
          if (T = Rr(
            (o[h0 >> 2] | 0) + (i0 * 216 | 0) | 0,
            s0,
            l,
            C,
            B0,
            i0,
            o[(o[c0 >> 2] | 0) + 64 >> 2] | 0,
            p0
          ) | 0, T) {
            P = 22;
            break;
          }
          if (E0 = ((o[(o[h0 >> 2] | 0) + (i0 * 216 | 0) + 196 >> 2] | 0) == 1 & 1) + E0 | 0, hr(u) | 0 ? P = 1 : P = (o[m0 >> 2] | 0) != 0, T = o[S0 >> 2] | 0, (T | 0) == 7 | (T | 0) == 2 && (o[d0 >> 2] = i0), i0 = h1(o[t0 >> 2] | 0, o[T0 >> 2] | 0, i0) | 0, !((i0 | 0) != 0 | P ^ 1)) {
            T = 1, P = 22;
            break;
          }
          if (P)
            T = q;
          else {
            P = 20;
            break;
          }
        }
        return (P | 0) == 20 ? (P = _ + 1196 | 0, T = (o[P >> 2] | 0) + E0 | 0, T >>> 0 > (o[T0 >> 2] | 0) >>> 0 ? (y0 = 1, f0 = g0, y0 | 0) : (o[P >> 2] = T, y0 = 0, f0 = g0, y0 | 0)) : (P | 0) == 22 ? (f0 = g0, T | 0) : 0;
      }
      function Er(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0, T = 0, q = 0, C = 0, i0 = 0, j = 0;
        j = f0, C = o[u + 1192 >> 2] | 0, l = o[u + 1200 >> 2] | 0, i0 = u + 1212 | 0;
        e: do
          if (!l) l = _;
          else {
            P = u + 16 | 0, T = 0;
            do {
              do
                if (l = l + -1 | 0, l >>> 0 <= _ >>> 0) break e;
              while ((o[(o[i0 >> 2] | 0) + (l * 216 | 0) + 4 >> 2] | 0) != (C | 0));
              T = T + 1 | 0, q = o[(o[P >> 2] | 0) + 52 >> 2] | 0;
            } while (T >>> 0 < (q >>> 0 > 10 ? q : 10) >>> 0);
          }
        while (!1);
        for (q = u + 1172 | 0, _ = u + 1176 | 0; ; ) {
          if (P = o[i0 >> 2] | 0, (o[P + (l * 216 | 0) + 4 >> 2] | 0) != (C | 0)) {
            l = 11;
            break;
          }
          if (T = P + (l * 216 | 0) + 196 | 0, P = o[T >> 2] | 0, !P) {
            l = 11;
            break;
          }
          if (o[T >> 2] = P + -1, l = h1(o[q >> 2] | 0, o[_ >> 2] | 0, l) | 0, !l) {
            l = 11;
            break;
          }
        }
        if ((l | 0) == 11) {
          f0 = j;
          return;
        }
      }
      function Ur(u, _, l, P, T) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0;
        var q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0, y0 = 0, S0 = 0, E0 = 0;
        E0 = f0, f0 = f0 + 32 | 0, w0 = E0 + 20 | 0, A0 = E0 + 16 | 0, p0 = E0 + 12 | 0, c0 = E0 + 8 | 0, y0 = E0 + 4 | 0, m0 = E0, U2(_, 0, 2088), j = P0(u, y0) | 0, e0 = o[y0 >> 2] | 0;
        do
          if ((P | 0) == 2 | (P | 0) == 7) {
            if (e0 = e0 + 6 | 0, e0 >>> 0 > 31 | (j | 0) != 0)
              return l = 1, f0 = E0, l | 0;
            o[_ >> 2] = e0, s0 = e0;
            break;
          } else {
            if (e0 = e0 + 1 | 0, e0 >>> 0 > 31 | (j | 0) != 0)
              return l = 1, f0 = E0, l | 0;
            o[_ >> 2] = e0, s0 = e0;
            break;
          }
        while (!1);
        e: do
          if ((s0 | 0) != 31) {
            r: do
              if (s0 >>> 0 >= 6) {
                if (s0 = (s0 | 0) != 6, c0 = s0 & 1, c0)
                  (c0 | 0) == 1 && (k0 = 52);
                else for (o[A0 >> 2] = 0, p0 = 0; ; ) {
                  if (P = X2(u) | 0, o[w0 >> 2] = P, k0 = P >>> 31, o[_ + (p0 << 2) + 12 >> 2] = k0, k0 ? (e0 = P << 1, t0 = 0) : (o[_ + (p0 << 2) + 76 >> 2] = P >>> 28 & 7, e0 = P << 4, t0 = 1), P = p0 | 1, k0 = e0 >>> 31, o[_ + (P << 2) + 12 >> 2] = k0, k0 ? j = e0 << 1 : (o[_ + (P << 2) + 76 >> 2] = e0 >>> 28 & 7, j = e0 << 4, t0 = t0 + 1 | 0), e0 = P + 1 | 0, k0 = j >>> 31, o[_ + (e0 << 2) + 12 >> 2] = k0, k0 ? e0 = j << 1 : (o[_ + (e0 << 2) + 76 >> 2] = j >>> 28 & 7, e0 = j << 4, t0 = t0 + 1 | 0), j = p0 | 3, k0 = e0 >>> 31, o[_ + (j << 2) + 12 >> 2] = k0, k0 ? P = e0 << 1 : (o[_ + (j << 2) + 76 >> 2] = e0 >>> 28 & 7, P = e0 << 4, t0 = t0 + 1 | 0), e0 = j + 1 | 0, k0 = P >>> 31, o[_ + (e0 << 2) + 12 >> 2] = k0, k0 ? P = P << 1 : (o[_ + (e0 << 2) + 76 >> 2] = P >>> 28 & 7, P = P << 4, t0 = t0 + 1 | 0), e0 = j + 2 | 0, k0 = P >>> 31, o[_ + (e0 << 2) + 12 >> 2] = k0, k0 ? P = P << 1 : (o[_ + (e0 << 2) + 76 >> 2] = P >>> 28 & 7, P = P << 4, t0 = t0 + 1 | 0), e0 = j + 3 | 0, k0 = P >>> 31, o[_ + (e0 << 2) + 12 >> 2] = k0, k0 ? P = P << 1 : (o[_ + (e0 << 2) + 76 >> 2] = P >>> 28 & 7, P = P << 4, t0 = t0 + 1 | 0), e0 = p0 | 7, k0 = P >>> 31, o[_ + (e0 << 2) + 12 >> 2] = k0, k0 ? e0 = P << 1 : (o[_ + (e0 << 2) + 76 >> 2] = P >>> 28 & 7, e0 = P << 4, t0 = t0 + 1 | 0), o[w0 >> 2] = e0, (_2(
                    u,
                    (t0 * 3 | 0) + 8 | 0
                  ) | 0) == -1) {
                    B0 = 1, k0 = 68;
                    break r;
                  }
                  if (k0 = (o[A0 >> 2] | 0) + 1 | 0, o[A0 >> 2] = k0, (k0 | 0) < 2) p0 = p0 + 8 | 0;
                  else {
                    k0 = 52;
                    break;
                  }
                }
                if ((k0 | 0) == 52) {
                  if (A0 = (P0(u, w0) | 0) != 0, j = o[w0 >> 2] | 0, A0 | j >>> 0 > 3) {
                    B0 = 1, k0 = 68;
                    break;
                  }
                  o[_ + 140 >> 2] = j;
                }
                s0 ? (A0 = o[_ >> 2] | 0, h0 = A0 + -7 | 0, w0 = h0 >>> 2, o[_ + 4 >> 2] = (h0 >>> 0 > 11 ? w0 + 268435453 | 0 : w0) << 4 | (A0 >>> 0 > 18 ? 15 : 0)) : (v0 = c0, k0 = 70);
              } else {
                if ((s0 | 0) == 0 | (s0 | 0) == 1)
                  d0 = A0, h0 = w0;
                else if ((s0 | 0) == 3 | (s0 | 0) == 2)
                  d0 = A0, h0 = w0;
                else {
                  P = 0;
                  do {
                    if (j = (P0(u, p0) | 0) != 0, e0 = o[p0 >> 2] | 0, j | e0 >>> 0 > 3) {
                      t0 = 1, k0 = 96;
                      break;
                    }
                    o[_ + (P << 2) + 176 >> 2] = e0, P = P + 1 | 0;
                  } while (P >>> 0 < 4);
                  if ((k0 | 0) == 96)
                    return f0 = E0, t0 | 0;
                  i: do
                    if (T >>> 0 > 1 & (s0 | 0) != 5) {
                      for (e0 = T >>> 0 > 2 & 1, P = 0; ; ) {
                        if (m1(u, p0, e0) | 0) {
                          t0 = 1, k0 = 96;
                          break;
                        }
                        if (t0 = o[p0 >> 2] | 0, t0 >>> 0 >= T >>> 0) {
                          t0 = 1, k0 = 96;
                          break;
                        }
                        if (o[_ + (P << 2) + 192 >> 2] = t0, P = P + 1 | 0, P >>> 0 >= 4) {
                          q = 0;
                          break i;
                        }
                      }
                      if ((k0 | 0) == 96)
                        return f0 = E0, t0 | 0;
                    } else q = 0;
                  while (!1);
                  i: for (; ; ) {
                    for (t0 = o[_ + (q << 2) + 176 >> 2] | 0, t0 ? (t0 | 0) == 2 | (t0 | 0) == 1 ? t0 = 1 : t0 = 3 : t0 = 0, o[p0 >> 2] = t0, e0 = 0; ; ) {
                      if (t0 = v2(u, c0) | 0, t0) {
                        k0 = 96;
                        break i;
                      }
                      if (u0[_ + (q << 4) + (e0 << 2) + 208 >> 1] = o[c0 >> 2], t0 = v2(u, c0) | 0, t0) {
                        k0 = 96;
                        break i;
                      }
                      if (u0[_ + (q << 4) + (e0 << 2) + 210 >> 1] = o[c0 >> 2], k0 = o[p0 >> 2] | 0, o[p0 >> 2] = k0 + -1, k0) e0 = e0 + 1 | 0;
                      else break;
                    }
                    if (q = q + 1 | 0, q >>> 0 >= 4) {
                      v0 = 2, k0 = 70;
                      break r;
                    }
                  }
                  if ((k0 | 0) == 96)
                    return f0 = E0, t0 | 0;
                }
                if (T >>> 0 > 1)
                  for ((s0 | 0) == 0 | (s0 | 0) == 1 ? t0 = 0 : (s0 | 0) == 3 | (s0 | 0) == 2 ? t0 = 1 : t0 = 3, j = T >>> 0 > 2 & 1, P = 0; ; ) {
                    if (m1(u, w0, j) | 0) {
                      B0 = 1, k0 = 68;
                      break r;
                    }
                    if (e0 = o[w0 >> 2] | 0, e0 >>> 0 >= T >>> 0) {
                      B0 = 1, k0 = 68;
                      break r;
                    }
                    if (o[_ + (P << 2) + 144 >> 2] = e0, t0) t0 = t0 + -1 | 0, P = P + 1 | 0;
                    else
                      break;
                  }
                for ((s0 | 0) == 0 | (s0 | 0) == 1 ? (j = 0, e0 = 0) : (s0 | 0) == 3 | (s0 | 0) == 2 ? (j = 1, e0 = 0) : (j = 3, e0 = 0); ; ) {
                  if (P = v2(u, A0) | 0, P) {
                    B0 = P, k0 = 68;
                    break r;
                  }
                  if (u0[_ + (e0 << 2) + 160 >> 1] = o[A0 >> 2], P = v2(u, A0) | 0, P) {
                    B0 = P, k0 = 68;
                    break r;
                  }
                  if (u0[_ + (e0 << 2) + 162 >> 1] = o[A0 >> 2], j)
                    j = j + -1 | 0, e0 = e0 + 1 | 0;
                  else {
                    v0 = 2, k0 = 70;
                    break;
                  }
                }
              }
            while (!1);
            if ((k0 | 0) == 68)
              return l = B0, f0 = E0, l | 0;
            do
              if ((k0 | 0) == 70) {
                if (q = Cr(u, y0, (v0 | 0) == 0 & 1) | 0, q)
                  return l = q, f0 = E0, l | 0;
                if (y0 = o[y0 >> 2] | 0, o[_ + 4 >> 2] = y0, y0) break;
                break e;
              }
            while (!1);
            if (y0 = (v2(u, m0) | 0) != 0, q = o[m0 >> 2] | 0, y0 | (q | 0) < -26 | (q | 0) > 25)
              return l = 1, f0 = E0, l | 0;
            o[_ + 8 >> 2] = q, j = o[_ + 4 >> 2] | 0, s0 = _ + 272 | 0;
            r: do
              if ((o[_ >> 2] | 0) >>> 0 >= 7)
                if (q = de(
                  u,
                  _ + 1864 | 0,
                  He(l, 0, s0) | 0,
                  16
                ) | 0, q & 15)
                  C = q;
                else for (u0[_ + 320 >> 1] = q >>> 4 & 255, q = 0, e0 = 3; ; ) {
                  if (t0 = j >>> 1, !(j & 1)) q = q + 4 | 0;
                  else
                    for (P = 3; ; ) {
                      if (j = de(
                        u,
                        _ + (q << 6) + 332 | 0,
                        He(l, q, s0) | 0,
                        15
                      ) | 0, o[_ + (q << 2) + 1992 >> 2] = j >>> 15, j & 15) {
                        C = j;
                        break r;
                      }
                      if (u0[_ + (q << 1) + 272 >> 1] = j >>> 4 & 255, q = q + 1 | 0, P) P = P + -1 | 0;
                      else break;
                    }
                  if (e0)
                    j = t0, e0 = e0 + -1 | 0;
                  else {
                    i0 = q, S0 = t0, k0 = 87;
                    break;
                  }
                }
              else
                for (q = 0, e0 = 3; ; ) {
                  if (t0 = j >>> 1, !(j & 1)) q = q + 4 | 0;
                  else
                    for (P = 3; ; ) {
                      if (j = de(
                        u,
                        _ + (q << 6) + 328 | 0,
                        He(l, q, s0) | 0,
                        16
                      ) | 0, o[_ + (q << 2) + 1992 >> 2] = j >>> 16, j & 15) {
                        C = j;
                        break r;
                      }
                      if (u0[_ + (q << 1) + 272 >> 1] = j >>> 4 & 255, q = q + 1 | 0, P) P = P + -1 | 0;
                      else break;
                    }
                  if (e0)
                    j = t0, e0 = e0 + -1 | 0;
                  else {
                    i0 = q, S0 = t0, k0 = 87;
                    break;
                  }
                }
            while (!1);
            r: do
              if ((k0 | 0) == 87) {
                if (S0 & 3) {
                  if (C = de(u, _ + 1928 | 0, -1, 4) | 0, C & 15 || (u0[_ + 322 >> 1] = C >>> 4 & 255, C = de(u, _ + 1944 | 0, -1, 4) | 0, C & 15)) break;
                  u0[_ + 324 >> 1] = C >>> 4 & 255;
                }
                if (!(S0 & 2)) C = 0;
                else
                  for (q = 7; ; ) {
                    if (C = de(
                      u,
                      _ + (i0 << 6) + 332 | 0,
                      He(l, i0, s0) | 0,
                      15
                    ) | 0, C & 15) break r;
                    if (u0[_ + (i0 << 1) + 272 >> 1] = C >>> 4 & 255, o[_ + (i0 << 2) + 1992 >> 2] = C >>> 15, q)
                      i0 = i0 + 1 | 0, q = q + -1 | 0;
                    else {
                      C = 0;
                      break;
                    }
                  }
              }
            while (!1);
            if (o[u + 16 >> 2] = ((o[u + 4 >> 2] | 0) - (o[u >> 2] | 0) << 3) + (o[u + 8 >> 2] | 0), C)
              return l = C, f0 = E0, l | 0;
          } else {
            for (; !(Fr(u) | 0); )
              if (q0(u, 1) | 0) {
                t0 = 1, k0 = 96;
                break;
              }
            if ((k0 | 0) == 96)
              return f0 = E0, t0 | 0;
            for (i0 = 0, C = _ + 328 | 0; ; ) {
              if (q = q0(u, 8) | 0, o[y0 >> 2] = q, (q | 0) == -1) {
                t0 = 1;
                break;
              }
              if (o[C >> 2] = q, i0 = i0 + 1 | 0, i0 >>> 0 >= 384) break e;
              C = C + 4 | 0;
            }
            return f0 = E0, t0 | 0;
          }
        while (!1);
        return l = 0, f0 = E0, l | 0;
      }
      function Y2(u) {
        return u = u | 0, u >>> 0 < 6 ? u = 2 : u = (u | 0) != 6 & 1, u | 0;
      }
      function _r(u) {
        u = u | 0;
        var _ = 0;
        return _ = f0, (u | 0) == 0 | (u | 0) == 1 ? u = 1 : (u | 0) == 3 | (u | 0) == 2 ? u = 2 : u = 4, f0 = _, u | 0;
      }
      function Mr(u) {
        u = u | 0;
        var _ = 0;
        return _ = f0, u ? (u | 0) == 2 | (u | 0) == 1 ? u = 2 : u = 4 : u = 1, f0 = _, u | 0;
      }
      function Tr(u) {
        return u = u | 0, u + 1 & 3 | 0;
      }
      function Rr(u, _, l, P, T, q, C, i0) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, q = q | 0, C = C | 0, i0 = i0 | 0;
        var j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0;
        if (w0 = f0, d0 = o[_ >> 2] | 0, o[u >> 2] = d0, t0 = u + 196 | 0, o[t0 >> 2] = (o[t0 >> 2] | 0) + 1, d1(l, q), (d0 | 0) == 31) {
          if (j = u + 28 | 0, o[u + 20 >> 2] = 0, (o[t0 >> 2] | 0) >>> 0 > 1)
            return u0[j >> 1] = 16, u0[u + 30 >> 1] = 16, u0[u + 32 >> 1] = 16, u0[u + 34 >> 1] = 16, u0[u + 36 >> 1] = 16, u0[u + 38 >> 1] = 16, u0[u + 40 >> 1] = 16, u0[u + 42 >> 1] = 16, u0[u + 44 >> 1] = 16, u0[u + 46 >> 1] = 16, u0[u + 48 >> 1] = 16, u0[u + 50 >> 1] = 16, u0[u + 52 >> 1] = 16, u0[u + 54 >> 1] = 16, u0[u + 56 >> 1] = 16, u0[u + 58 >> 1] = 16, u0[u + 60 >> 1] = 16, u0[u + 62 >> 1] = 16, u0[u + 64 >> 1] = 16, u0[u + 66 >> 1] = 16, u0[u + 68 >> 1] = 16, u0[u + 70 >> 1] = 16, u0[u + 72 >> 1] = 16, u0[u + 74 >> 1] = 16, h0 = 0, f0 = w0, h0 | 0;
          for (t0 = 23, T = _ + 328 | 0, e0 = i0; u0[j >> 1] = 16, n0[e0 >> 0] = o[T >> 2], n0[e0 + 1 >> 0] = o[T + 4 >> 2], n0[e0 + 2 >> 0] = o[T + 8 >> 2], n0[e0 + 3 >> 0] = o[T + 12 >> 2], n0[e0 + 4 >> 0] = o[T + 16 >> 2], n0[e0 + 5 >> 0] = o[T + 20 >> 2], n0[e0 + 6 >> 0] = o[T + 24 >> 2], n0[e0 + 7 >> 0] = o[T + 28 >> 2], n0[e0 + 8 >> 0] = o[T + 32 >> 2], n0[e0 + 9 >> 0] = o[T + 36 >> 2], n0[e0 + 10 >> 0] = o[T + 40 >> 2], n0[e0 + 11 >> 0] = o[T + 44 >> 2], n0[e0 + 12 >> 0] = o[T + 48 >> 2], n0[e0 + 13 >> 0] = o[T + 52 >> 2], n0[e0 + 14 >> 0] = o[T + 56 >> 2], n0[e0 + 15 >> 0] = o[T + 60 >> 2], t0; )
            t0 = t0 + -1 | 0, T = T + 64 | 0, e0 = e0 + 16 | 0, j = j + 2 | 0;
          return Le(l, i0), h0 = 0, f0 = w0, h0 | 0;
        }
        if (j = u + 28 | 0, d0) {
          Qe(j, _ + 272 | 0, 54), e0 = o[_ + 8 >> 2] | 0, t0 = o[T >> 2] | 0;
          do
            if (e0) {
              if (t0 = t0 + e0 | 0, o[T >> 2] = t0, (t0 | 0) < 0) {
                t0 = t0 + 52 | 0, o[T >> 2] = t0;
                break;
              }
              (t0 | 0) > 51 && (t0 = t0 + -52 | 0, o[T >> 2] = t0);
            }
          while (!1);
          p0 = u + 20 | 0, o[p0 >> 2] = t0, e0 = _ + 328 | 0, T = _ + 1992 | 0;
          e: do
            if ((o[u >> 2] | 0) >>> 0 < 7) {
              for (c0 = 15, t0 = j; ; ) {
                if (u0[t0 >> 1] | 0) {
                  if (Ze(
                    e0,
                    o[p0 >> 2] | 0,
                    0,
                    o[T >> 2] | 0
                  ) | 0) {
                    j = 1;
                    break;
                  }
                } else o[e0 >> 2] = 16777215;
                if (e0 = e0 + 64 | 0, t0 = t0 + 2 | 0, T = T + 4 | 0, c0) c0 = c0 + -1 | 0;
                else break e;
              }
              return f0 = w0, j | 0;
            } else {
              for (u0[u + 76 >> 1] | 0 ? (ar(_ + 1864 | 0, t0), c0 = 464, s0 = 15, t0 = j) : (c0 = 464, s0 = 15, t0 = j); ; ) {
                if (j = o[_ + (o[c0 >> 2] << 2) + 1864 >> 2] | 0, c0 = c0 + 4 | 0, o[e0 >> 2] = j, (j | 0) == 0 && (u0[t0 >> 1] | 0) == 0 ? o[e0 >> 2] = 16777215 : k0 = 18, (k0 | 0) == 18 && (k0 = 0, (Ze(
                  e0,
                  o[p0 >> 2] | 0,
                  1,
                  o[T >> 2] | 0
                ) | 0) != 0)) {
                  j = 1;
                  break;
                }
                if (e0 = e0 + 64 | 0, t0 = t0 + 2 | 0, T = T + 4 | 0, s0) s0 = s0 + -1 | 0;
                else break e;
              }
              return f0 = w0, j | 0;
            }
          while (!1);
          for (c0 = o[192 + ((l2(
            0,
            51,
            (o[u + 24 >> 2] | 0) + (o[p0 >> 2] | 0) | 0
          ) | 0) << 2) >> 2] | 0, (u0[u + 78 >> 1] | 0) == 0 && (u0[u + 80 >> 1] | 0) == 0 ? (s0 = _ + 1928 | 0, j = 7) : (s0 = _ + 1928 | 0, cr(s0, c0), j = 7); ; ) {
            if (p0 = o[s0 >> 2] | 0, s0 = s0 + 4 | 0, o[e0 >> 2] = p0, (p0 | 0) == 0 && (u0[t0 >> 1] | 0) == 0 ? o[e0 >> 2] = 16777215 : k0 = 31, (k0 | 0) == 31 && (k0 = 0, (Ze(e0, c0, 1, o[T >> 2] | 0) | 0) != 0)) {
              j = 1, k0 = 39;
              break;
            }
            if (j) e0 = e0 + 64 | 0, T = T + 4 | 0, j = j + -1 | 0, t0 = t0 + 2 | 0;
            else
              break;
          }
          if ((k0 | 0) == 39)
            return f0 = w0, j | 0;
          if (d0 >>> 0 >= 6) {
            if (t0 = $r(u, _, l, q, C, i0) | 0, t0)
              return h0 = t0, f0 = w0, h0 | 0;
          } else k0 = 37;
        } else
          U2(j, 0, 54), o[u + 20 >> 2] = o[T >> 2], k0 = 37;
        return (k0 | 0) == 37 && (h0 = N1(u, _, P, q, l, i0) | 0, (h0 | 0) != 0) ? (f0 = w0, h0 | 0) : (h0 = 0, f0 = w0, h0 | 0);
      }
      function k1(u) {
        return u = u | 0, u | 0;
      }
      function He(u, _, l) {
        u = u | 0, _ = _ | 0, l = l | 0;
        var P = 0, T = 0, q = 0, C = 0, i0 = 0;
        return C = f0, i0 = v1(_) | 0, P = y1(_) | 0, T = n0[i0 + 4 >> 0] | 0, q = n0[P + 4 >> 0] | 0, P = (o[P >> 2] | 0) == 4, (o[i0 >> 2] | 0) == 4 ? (_ = u0[l + ((T & 255) << 1) >> 1] | 0, P ? (_ = _ + 1 + (u0[l + ((q & 255) << 1) >> 1] | 0) >> 1, f0 = C, _ | 0) : (P = u + 204 | 0, P2(u, o[P >> 2] | 0) | 0 ? (_ = _ + 1 + (u0[(o[P >> 2] | 0) + ((q & 255) << 1) + 28 >> 1] | 0) >> 1, f0 = C, _ | 0) : (f0 = C, _ | 0))) : P ? (_ = u0[l + ((q & 255) << 1) >> 1] | 0, P = u + 200 | 0, P2(u, o[P >> 2] | 0) | 0 ? (_ = _ + 1 + (u0[(o[P >> 2] | 0) + ((T & 255) << 1) + 28 >> 1] | 0) >> 1, f0 = C, _ | 0) : (f0 = C, _ | 0)) : (P = u + 200 | 0, P2(u, o[P >> 2] | 0) | 0 ? (T = u0[(o[P >> 2] | 0) + ((T & 255) << 1) + 28 >> 1] | 0, l = 1) : (T = 0, l = 0), P = u + 204 | 0, P2(u, o[P >> 2] | 0) | 0 ? (_ = u0[(o[P >> 2] | 0) + ((q & 255) << 1) + 28 >> 1] | 0, l ? (_ = T + 1 + _ >> 1, f0 = C, _ | 0) : (f0 = C, _ | 0)) : (_ = T, f0 = C, _ | 0));
      }
      function q0(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0, T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0;
        if (c0 = f0, t0 = u + 4 | 0, C = o[t0 >> 2] | 0, e0 = o[u + 12 >> 2] << 3, s0 = u + 16 | 0, j = o[s0 >> 2] | 0, T = e0 - j | 0, (T | 0) > 31)
          l = u + 8 | 0, T = o[l >> 2] | 0, P = (l0[C + 1 >> 0] | 0) << 16 | (l0[C >> 0] | 0) << 24 | (l0[C + 2 >> 0] | 0) << 8 | (l0[C + 3 >> 0] | 0), T ? (q = l, P = (l0[C + 4 >> 0] | 0) >>> (8 - T | 0) | P << T) : q = l;
        else if (q = u + 8 | 0, (T | 0) > 0) {
          if (l = o[q >> 2] | 0, i0 = l + 24 | 0, P = (l0[C >> 0] | 0) << i0, T = T + -8 + l | 0, (T | 0) > 0) {
            l = T, T = i0;
            do
              C = C + 1 | 0, T = T + -8 | 0, P = (l0[C >> 0] | 0) << T | P, l = l + -8 | 0;
            while ((l | 0) > 0);
          }
        } else P = 0;
        return l = j + _ | 0, o[s0 >> 2] = l, o[q >> 2] = l & 7, l >>> 0 > e0 >>> 0 ? (t0 = -1, f0 = c0, t0 | 0) : (o[t0 >> 2] = (o[u >> 2] | 0) + (l >>> 3), t0 = P >>> (32 - _ | 0), f0 = c0, t0 | 0);
      }
      function X2(u) {
        u = u | 0;
        var _ = 0, l = 0, P = 0, T = 0, q = 0;
        if (T = f0, P = o[u + 4 >> 2] | 0, l = (o[u + 12 >> 2] << 3) - (o[u + 16 >> 2] | 0) | 0, (l | 0) > 31)
          return _ = o[u + 8 >> 2] | 0, u = (l0[P + 1 >> 0] | 0) << 16 | (l0[P >> 0] | 0) << 24 | (l0[P + 2 >> 0] | 0) << 8 | (l0[P + 3 >> 0] | 0), _ ? (_ = (l0[P + 4 >> 0] | 0) >>> (8 - _ | 0) | u << _, f0 = T, _ | 0) : (_ = u, f0 = T, _ | 0);
        if ((l | 0) <= 0)
          return _ = 0, f0 = T, _ | 0;
        if (q = o[u + 8 >> 2] | 0, u = q + 24 | 0, _ = (l0[P >> 0] | 0) << u, l = l + -8 + q | 0, (l | 0) <= 0)
          return f0 = T, _ | 0;
        do
          P = P + 1 | 0, u = u + -8 | 0, _ = (l0[P >> 0] | 0) << u | _, l = l + -8 | 0;
        while ((l | 0) > 0);
        return f0 = T, _ | 0;
      }
      function _2(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0;
        return l = f0, P = u + 16 | 0, _ = (o[P >> 2] | 0) + _ | 0, o[P >> 2] = _, o[u + 8 >> 2] = _ & 7, _ >>> 0 > o[u + 12 >> 2] << 3 >>> 0 ? (_ = -1, f0 = l, _ | 0) : (o[u + 4 >> 2] = (o[u >> 2] | 0) + (_ >>> 3), _ = 0, f0 = l, _ | 0);
      }
      function Fr(u) {
        return u = u | 0, (o[u + 8 >> 2] | 0) == 0 | 0;
      }
      function P0(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0, T = 0, q = 0;
        q = f0, l = X2(u) | 0;
        do
          if ((l | 0) >= 0) {
            if (l >>> 0 > 1073741823) {
              if ((_2(u, 3) | 0) == -1) {
                l = 1;
                break;
              }
              o[_ >> 2] = (l >>> 29 & 1) + 1, l = 0;
              break;
            }
            if (l >>> 0 > 536870911) {
              if ((_2(u, 5) | 0) == -1) {
                l = 1;
                break;
              }
              o[_ >> 2] = (l >>> 27 & 3) + 3, l = 0;
              break;
            }
            if (l >>> 0 > 268435455) {
              if ((_2(u, 7) | 0) == -1) {
                l = 1;
                break;
              }
              o[_ >> 2] = (l >>> 25 & 7) + 7, l = 0;
              break;
            }
            if (l = pr(l, 28) | 0, P = l + 4 | 0, (P | 0) != 32) {
              if (_2(u, l + 5 | 0) | 0, l = q0(u, P) | 0, (l | 0) == -1) {
                l = 1;
                break;
              }
              o[_ >> 2] = (1 << P) + -1 + l, l = 0;
              break;
            }
            if (o[_ >> 2] = 0, _2(u, 32) | 0, (q0(u, 1) | 0) == 1 && (T = X2(u) | 0, (_2(u, 32) | 0) != -1))
              if ((T | 0) == 1) {
                o[_ >> 2] = -1, l = 1;
                break;
              } else if (T) {
                l = 1;
                break;
              } else {
                o[_ >> 2] = -1, l = 0;
                break;
              }
            else l = 1;
          } else
            _2(u, 1) | 0, o[_ >> 2] = 0, l = 0;
        while (!1);
        return f0 = q, l | 0;
      }
      function v2(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0, T = 0;
        return P = f0, f0 = f0 + 16 | 0, T = P, o[T >> 2] = 0, l = P0(u, T) | 0, u = o[T >> 2] | 0, l = (l | 0) == 0, (u | 0) == -1 ? l ? u = 1 : (o[_ >> 2] = -2147483648, u = 0) : l ? (l = (u + 1 | 0) >>> 1, o[_ >> 2] = (u & 1 | 0) != 0 ? l : 0 - l | 0, u = 0) : u = 1, f0 = P, u | 0;
      }
      function Cr(u, _, l) {
        u = u | 0, _ = _ | 0, l = l | 0;
        var P = 0, T = 0;
        return T = f0, f0 = f0 + 16 | 0, P = T, P0(u, P) | 0 || (P = o[P >> 2] | 0, P >>> 0 > 47) ? (P = 1, f0 = T, P | 0) : (o[_ >> 2] = l0[((l | 0) == 0 ? 576 : 528) + P >> 0], P = 0, f0 = T, P | 0);
      }
      function m1(u, _, l) {
        u = u | 0, _ = _ | 0, l = l | 0;
        var P = 0;
        return P = f0, l ? l = P0(u, _) | 0 : (l = q0(u, 1) | 0, o[_ >> 2] = l, (l | 0) == -1 ? l = 1 : (o[_ >> 2] = l ^ 1, l = 0)), f0 = P, l | 0;
      }
      function de(u, _, l, P) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0;
        var T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0, y0 = 0, S0 = 0, E0 = 0, T0 = 0, g0 = 0, U0 = 0, L0 = 0, O0 = 0, Y0 = 0, H0 = 0, Q0 = 0, N0 = 0, J0 = 0, $0 = 0, a2 = 0;
        a2 = f0, f0 = f0 + 128 | 0, J0 = a2 + 64 | 0, $0 = a2, e0 = X2(u) | 0, s0 = e0 >>> 16;
        do
          if (l >>> 0 < 2)
            if ((e0 | 0) >= 0) {
              if (e0 >>> 0 > 201326591) {
                t0 = b0[1264 + (e0 >>> 26 << 1) >> 1] | 0, C = 25;
                break;
              }
              if (e0 >>> 0 > 16777215) {
                t0 = b0[1328 + (e0 >>> 22 << 1) >> 1] | 0, C = 25;
                break;
              }
              if (e0 >>> 0 > 2097151) {
                t0 = b0[1424 + ((e0 >>> 18) + -8 << 1) >> 1] | 0, C = 25;
                break;
              } else {
                t0 = b0[1536 + (s0 << 1) >> 1] | 0, C = 25;
                break;
              }
            } else c0 = 1;
          else if (l >>> 0 < 4) {
            if ((e0 | 0) < 0) {
              c0 = (s0 & 16384 | 0) != 0 ? 2 : 2082;
              break;
            }
            if (e0 >>> 0 > 268435455) {
              t0 = b0[1600 + (e0 >>> 26 << 1) >> 1] | 0, C = 25;
              break;
            }
            if (e0 >>> 0 > 33554431) {
              t0 = b0[1664 + (e0 >>> 23 << 1) >> 1] | 0, C = 25;
              break;
            } else {
              t0 = b0[1728 + (e0 >>> 18 << 1) >> 1] | 0, C = 25;
              break;
            }
          } else {
            if (l >>> 0 < 8) {
              if (l = e0 >>> 26, (l + -8 | 0) >>> 0 < 56) {
                t0 = b0[1984 + (l << 1) >> 1] | 0, C = 25;
                break;
              }
              t0 = b0[2112 + (e0 >>> 22 << 1) >> 1] | 0, C = 25;
              break;
            }
            if (l >>> 0 < 17) {
              t0 = b0[2368 + (e0 >>> 26 << 1) >> 1] | 0, C = 25;
              break;
            }
            if (l = e0 >>> 29, l) {
              t0 = b0[2496 + (l << 1) >> 1] | 0, C = 25;
              break;
            }
            t0 = b0[2512 + (e0 >>> 24 << 1) >> 1] | 0, C = 25;
            break;
          }
        while (!1);
        if ((C | 0) == 25)
          if (t0)
            c0 = t0;
          else return E0 = 1, f0 = a2, E0 | 0;
        if (t0 = c0 & 31, l = e0 << t0, s0 = 32 - t0 | 0, Y0 = c0 >>> 11 & 31, Y0 >>> 0 > P >>> 0)
          return E0 = 1, f0 = a2, E0 | 0;
        w0 = c0 >>> 5 & 63;
        do
          if (Y0) {
            if (!w0) t0 = 0;
            else {
              do
                if (s0 >>> 0 < w0 >>> 0) {
                  if ((_2(u, t0) | 0) == -1)
                    return E0 = 1, f0 = a2, E0 | 0;
                  s0 = 32, l = X2(u) | 0;
                  break;
                }
              while (!1);
              e0 = l >>> (32 - w0 | 0), l = l << w0, C = 0, t0 = 1 << w0 + -1;
              do
                o[J0 + (C << 2) >> 2] = (t0 & e0 | 0) != 0 ? -1 : 1, t0 = t0 >>> 1, C = C + 1 | 0;
              while ((t0 | 0) != 0);
              s0 = s0 - w0 | 0, t0 = C;
            }
            k0 = w0 >>> 0 < 3;
            e: do
              if (t0 >>> 0 < Y0 >>> 0) {
                h0 = t0, d0 = Y0 >>> 0 > 10 & k0 & 1;
                r: for (; ; ) {
                  if (s0 >>> 0 < 16) {
                    if ((_2(u, 32 - s0 | 0) | 0) == -1) {
                      H0 = 1, C = 127;
                      break;
                    }
                    p0 = 32, l = X2(u) | 0;
                  } else p0 = s0;
                  do
                    if ((l | 0) >= 0)
                      if (l >>> 0 <= 1073741823)
                        if (l >>> 0 <= 536870911)
                          if (l >>> 0 <= 268435455)
                            if (l >>> 0 <= 134217727)
                              if (l >>> 0 <= 67108863)
                                if (l >>> 0 <= 33554431)
                                  if (l >>> 0 <= 16777215)
                                    if (l >>> 0 <= 8388607)
                                      if (l >>> 0 > 4194303)
                                        O0 = 9, C = 59;
                                      else {
                                        if (l >>> 0 > 2097151) {
                                          O0 = 10, C = 59;
                                          break;
                                        }
                                        if (l >>> 0 > 1048575) {
                                          O0 = 11, C = 59;
                                          break;
                                        }
                                        if (l >>> 0 > 524287) {
                                          O0 = 12, C = 59;
                                          break;
                                        }
                                        if (l >>> 0 > 262143) {
                                          O0 = 13, C = 59;
                                          break;
                                        }
                                        if (l >>> 0 > 131071)
                                          s0 = 14, t0 = l << 15, e0 = p0 + -15 | 0, c0 = d0, C = (d0 | 0) != 0 ? d0 : 4;
                                        else {
                                          if (l >>> 0 < 65536) {
                                            H0 = 1, C = 127;
                                            break r;
                                          }
                                          s0 = 15, t0 = l << 16, e0 = p0 + -16 | 0, c0 = (d0 | 0) != 0 ? d0 : 1, C = 12;
                                        }
                                        L0 = s0 << c0, S0 = t0, v0 = e0, m0 = c0, B0 = C, A0 = (c0 | 0) == 0, C = 60;
                                      }
                                    else
                                      O0 = 8, C = 59;
                                  else
                                    O0 = 7, C = 59;
                                else
                                  O0 = 6, C = 59;
                              else
                                O0 = 5, C = 59;
                            else
                              O0 = 4, C = 59;
                          else
                            O0 = 3, C = 59;
                        else
                          O0 = 2, C = 59;
                      else
                        O0 = 1, C = 59;
                    else
                      O0 = 0, C = 59;
                  while (!1);
                  if ((C | 0) == 59 && (C = 0, s0 = O0 + 1 | 0, t0 = l << s0, s0 = p0 - s0 | 0, l = O0 << d0, d0 ? (L0 = l, S0 = t0, v0 = s0, m0 = d0, B0 = d0, A0 = 0, C = 60) : (g0 = s0, U0 = t0, y0 = l, E0 = 0, T0 = 1)), (C | 0) == 60) {
                    if (v0 >>> 0 < B0 >>> 0) {
                      if ((_2(u, 32 - v0 | 0) | 0) == -1) {
                        H0 = 1, C = 127;
                        break;
                      }
                      t0 = 32, l = X2(u) | 0;
                    } else
                      t0 = v0, l = S0;
                    g0 = t0 - B0 | 0, U0 = l << B0, y0 = (l >>> (32 - B0 | 0)) + L0 | 0, E0 = m0, T0 = A0;
                  }
                  if (d0 = (h0 | 0) == (w0 | 0) & k0 ? y0 + 2 | 0 : y0, t0 = (d0 + 2 | 0) >>> 1, e0 = T0 ? 1 : E0, o[J0 + (h0 << 2) >> 2] = (d0 & 1 | 0) == 0 ? t0 : 0 - t0 | 0, h0 = h0 + 1 | 0, h0 >>> 0 >= Y0 >>> 0) {
                    i0 = g0, j = U0;
                    break e;
                  } else
                    s0 = g0, l = U0, d0 = ((t0 | 0) > (3 << e0 + -1 | 0) & e0 >>> 0 < 6 & 1) + e0 | 0;
                }
                if ((C | 0) == 127)
                  return f0 = a2, H0 | 0;
              } else
                i0 = s0, j = l;
            while (!1);
            if (Y0 >>> 0 < P >>> 0) {
              do
                if (i0 >>> 0 < 9) {
                  if ((_2(u, 32 - i0 | 0) | 0) == -1)
                    return E0 = 1, f0 = a2, E0 | 0;
                  i0 = 32, j = X2(u) | 0;
                  break;
                }
              while (!1);
              C = j >>> 23;
              e: do
                if ((P | 0) == 4)
                  (j | 0) >= 0 ? (Y0 | 0) != 3 ? j >>> 0 <= 1073741823 ? (Y0 | 0) == 2 ? C = 34 : C = j >>> 0 > 536870911 ? 35 : 51 : C = 18 : C = 17 : C = 1;
                else {
                  do
                    switch (Y0 | 0) {
                      case 8: {
                        C = l0[1056 + (j >>> 26) >> 0] | 0;
                        break;
                      }
                      case 9: {
                        C = l0[1120 + (j >>> 26) >> 0] | 0;
                        break;
                      }
                      case 2: {
                        C = l0[736 + (j >>> 26) >> 0] | 0;
                        break;
                      }
                      case 1: {
                        j >>> 0 > 268435455 ? C = l0[672 + (j >>> 27) >> 0] | 0 : C = l0[704 + C >> 0] | 0;
                        break;
                      }
                      case 13: {
                        C = l0[1248 + (j >>> 29) >> 0] | 0;
                        break;
                      }
                      case 14: {
                        C = l0[1256 + (j >>> 30) >> 0] | 0;
                        break;
                      }
                      case 3: {
                        C = l0[800 + (j >>> 26) >> 0] | 0;
                        break;
                      }
                      case 4: {
                        C = l0[864 + (j >>> 27) >> 0] | 0;
                        break;
                      }
                      case 5: {
                        C = l0[896 + (j >>> 27) >> 0] | 0;
                        break;
                      }
                      case 10: {
                        C = l0[1184 + (j >>> 27) >> 0] | 0;
                        break;
                      }
                      case 6: {
                        C = l0[928 + (j >>> 26) >> 0] | 0;
                        break;
                      }
                      case 7: {
                        C = l0[992 + (j >>> 26) >> 0] | 0;
                        break;
                      }
                      case 11: {
                        C = l0[1216 + (j >>> 28) >> 0] | 0;
                        break;
                      }
                      case 12: {
                        C = l0[1232 + (j >>> 28) >> 0] | 0;
                        break;
                      }
                      default: {
                        C = j >> 31 & 16 | 1;
                        break e;
                      }
                    }
                  while (!1);
                  if (!C)
                    return E0 = 1, f0 = a2, E0 | 0;
                }
              while (!1);
              e0 = C & 15, i0 = i0 - e0 | 0, j = j << e0, e0 = C >>> 4 & 15;
            } else e0 = 0;
            if (s0 = Y0 + -1 | 0, l = (s0 | 0) == 0, l) {
              o[_ + (e0 << 2) >> 2] = o[J0 + (s0 << 2) >> 2], Q0 = i0, T = 1 << e0;
              break;
            } else
              C = j, t0 = 0;
            e: for (; ; ) {
              if (!e0)
                o[$0 + (t0 << 2) >> 2] = 1, N0 = i0, q = 0;
              else {
                if (i0 >>> 0 < 11) {
                  if ((_2(u, 32 - i0 | 0) | 0) == -1) {
                    H0 = 1, C = 127;
                    break;
                  }
                  i0 = 32, C = X2(u) | 0;
                }
                switch (e0 | 0) {
                  case 4: {
                    j = l0[648 + (C >>> 29) >> 0] | 0;
                    break;
                  }
                  case 5: {
                    j = l0[656 + (C >>> 29) >> 0] | 0;
                    break;
                  }
                  case 6: {
                    j = l0[664 + (C >>> 29) >> 0] | 0;
                    break;
                  }
                  case 1: {
                    j = l0[624 + (C >>> 31) >> 0] | 0;
                    break;
                  }
                  case 2: {
                    j = l0[632 + (C >>> 30) >> 0] | 0;
                    break;
                  }
                  case 3: {
                    j = l0[640 + (C >>> 30) >> 0] | 0;
                    break;
                  }
                  default: {
                    do
                      if (C >>> 0 <= 536870911)
                        if (C >>> 0 <= 268435455)
                          if (C >>> 0 <= 134217727)
                            if (C >>> 0 <= 67108863)
                              if (C >>> 0 <= 33554431)
                                if (C >>> 0 > 16777215)
                                  j = 184;
                                else {
                                  if (C >>> 0 > 8388607) {
                                    j = 201;
                                    break;
                                  }
                                  if (C >>> 0 > 4194303) {
                                    j = 218;
                                    break;
                                  }
                                  j = C >>> 0 < 2097152 ? 0 : 235;
                                }
                              else j = 167;
                            else j = 150;
                          else j = 133;
                        else j = 116;
                      else j = C >>> 29 << 4 ^ 115;
                    while (!1);
                    if ((j >>> 4 & 15) >>> 0 > e0 >>> 0) {
                      H0 = 1, C = 127;
                      break e;
                    }
                  }
                }
                if (!j) {
                  H0 = 1, C = 127;
                  break;
                }
                E0 = j & 15, q = j >>> 4 & 15, o[$0 + (t0 << 2) >> 2] = q + 1, N0 = i0 - E0 | 0, C = C << E0, q = e0 - q | 0;
              }
              if (t0 = t0 + 1 | 0, t0 >>> 0 >= s0 >>> 0) {
                C = 122;
                break;
              } else
                i0 = N0, e0 = q;
            }
            if ((C | 0) == 122) {
              if (o[_ + (q << 2) >> 2] = o[J0 + (s0 << 2) >> 2], T = 1 << q, l) {
                Q0 = N0;
                break;
              }
              for (C = Y0 + -2 | 0; ; )
                if (q = (o[$0 + (C << 2) >> 2] | 0) + q | 0, T = 1 << q | T, o[_ + (q << 2) >> 2] = o[J0 + (C << 2) >> 2], C)
                  C = C + -1 | 0;
                else {
                  Q0 = N0;
                  break;
                }
            } else if ((C | 0) == 127)
              return f0 = a2, H0 | 0;
          } else
            Q0 = s0, T = 0;
        while (!1);
        return _2(u, 32 - Q0 | 0) | 0 ? (E0 = 1, f0 = a2, E0 | 0) : (E0 = T << 16 | Y0 << 4, f0 = a2, E0 | 0);
      }
      function Dr(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0, T = 0;
        T = f0;
        e: do
          if ((q0(u, 1) | 0) != -1 && (P = _ + 4 | 0, o[P >> 2] = q0(u, 2) | 0, l = q0(u, 5) | 0, o[_ >> 2] = l, (l + -2 | 0) >>> 0 >= 3)) {
            switch (l | 0) {
              case 6:
              case 9:
              case 10:
              case 11:
              case 12: {
                if (o[P >> 2] | 0) {
                  l = 1;
                  break e;
                }
                break;
              }
              case 5:
              case 7:
              case 8: {
                if (!(o[P >> 2] | 0)) {
                  l = 1;
                  break e;
                }
                switch (l | 0) {
                  case 6:
                  case 9:
                  case 10:
                  case 11:
                  case 12: {
                    l = 1;
                    break e;
                  }
                  default:
                }
                break;
              }
              default:
            }
            l = 0;
          } else l = 1;
        while (!1);
        return f0 = T, l | 0;
      }
      function Lr(u, _, l) {
        u = u | 0, _ = _ | 0, l = l | 0;
        var P = 0, T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0;
        if (c0 = f0, !l) {
          f0 = c0;
          return;
        }
        for (t0 = _ + -1 | 0, i0 = 1 - _ | 0, j = ~_, q = 0, C = 0, e0 = 0; T = (q | 0) != 0, T ? o[u + (C * 216 | 0) + 200 >> 2] = u + ((C + -1 | 0) * 216 | 0) : o[u + (C * 216 | 0) + 200 >> 2] = 0, P = (e0 | 0) != 0, P ? (o[u + (C * 216 | 0) + 204 >> 2] = u + ((C - _ | 0) * 216 | 0), q >>> 0 < t0 >>> 0 ? o[u + (C * 216 | 0) + 208 >> 2] = u + ((i0 + C | 0) * 216 | 0) : s0 = 10) : (o[u + (C * 216 | 0) + 204 >> 2] = 0, s0 = 10), (s0 | 0) == 10 && (s0 = 0, o[u + (C * 216 | 0) + 208 >> 2] = 0), P & T ? o[u + (C * 216 | 0) + 212 >> 2] = u + ((C + j | 0) * 216 | 0) : o[u + (C * 216 | 0) + 212 >> 2] = 0, P = q + 1 | 0, T = (P | 0) == (_ | 0), C = C + 1 | 0, (C | 0) != (l | 0); )
          q = T ? 0 : P, e0 = (T & 1) + e0 | 0;
        f0 = c0;
      }
      function ne(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0;
        switch (l = f0, _ | 0) {
          case 1: {
            u = o[u + 204 >> 2] | 0;
            break;
          }
          case 3: {
            u = o[u + 212 >> 2] | 0;
            break;
          }
          case 4:
            break;
          case 2: {
            u = o[u + 208 >> 2] | 0;
            break;
          }
          case 0: {
            u = o[u + 200 >> 2] | 0;
            break;
          }
          default:
            u = 0;
        }
        return f0 = l, u | 0;
      }
      function v1(u) {
        return u = u | 0, 3152 + (u << 3) | 0;
      }
      function y1(u) {
        return u = u | 0, 2960 + (u << 3) | 0;
      }
      function Pr(u) {
        return u = u | 0, 2768 + (u << 3) | 0;
      }
      function zr(u) {
        return u = u | 0, 2576 + (u << 3) | 0;
      }
      function P2(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0;
        return l = f0, _ ? (f0 = l, (o[u + 4 >> 2] | 0) == (o[_ + 4 >> 2] | 0) | 0) : (f0 = l, 0);
      }
      function Ir(u) {
        u = u | 0;
        var _ = 0;
        _ = f0, U2(u, 0, 3388), o[u + 8 >> 2] = 32, o[u + 4 >> 2] = 256, o[u + 1332 >> 2] = 1, f0 = _;
      }
      function Or(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0, T = 0, q = 0, C = 0;
        C = f0, T = o[_ + 8 >> 2] | 0, q = u + (T << 2) + 20 | 0, P = o[q >> 2] | 0;
        do
          if (P) {
            if (l = u + 8 | 0, (T | 0) != (o[l >> 2] | 0)) {
              r2(o[P + 40 >> 2] | 0), o[(o[q >> 2] | 0) + 40 >> 2] = 0, r2(o[(o[q >> 2] | 0) + 84 >> 2] | 0), o[(o[q >> 2] | 0) + 84 >> 2] = 0;
              break;
            }
            if (T = u + 16 | 0, kr(_, o[T >> 2] | 0) | 0) {
              r2(o[(o[q >> 2] | 0) + 40 >> 2] | 0), o[(o[q >> 2] | 0) + 40 >> 2] = 0, r2(o[(o[q >> 2] | 0) + 84 >> 2] | 0), o[(o[q >> 2] | 0) + 84 >> 2] = 0, o[l >> 2] = 33, o[u + 4 >> 2] = 257, o[T >> 2] = 0, o[u + 12 >> 2] = 0;
              break;
            }
            return l = _ + 40 | 0, r2(o[l >> 2] | 0), o[l >> 2] = 0, l = _ + 84 | 0, r2(o[l >> 2] | 0), o[l >> 2] = 0, l = 0, f0 = C, l | 0;
          } else if (l = M2(92) | 0, o[q >> 2] = l, !l)
            return l = 65535, f0 = C, l | 0;
        while (!1);
        T = (o[q >> 2] | 0) + 0 | 0, l = _ + 0 | 0, P = T + 92 | 0;
        do
          o[T >> 2] = o[l >> 2], T = T + 4 | 0, l = l + 4 | 0;
        while ((T | 0) < (P | 0));
        return l = 0, f0 = C, l | 0;
      }
      function Nr(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0, T = 0, q = 0, C = 0;
        C = f0, T = o[_ >> 2] | 0, q = u + (T << 2) + 148 | 0, l = o[q >> 2] | 0;
        do
          if (l) {
            if (P = u + 4 | 0, (T | 0) != (o[P >> 2] | 0)) {
              r2(o[l + 20 >> 2] | 0), o[(o[q >> 2] | 0) + 20 >> 2] = 0, r2(o[(o[q >> 2] | 0) + 24 >> 2] | 0), o[(o[q >> 2] | 0) + 24 >> 2] = 0, r2(o[(o[q >> 2] | 0) + 28 >> 2] | 0), o[(o[q >> 2] | 0) + 28 >> 2] = 0, r2(o[(o[q >> 2] | 0) + 44 >> 2] | 0), o[(o[q >> 2] | 0) + 44 >> 2] = 0;
              break;
            }
            (o[_ + 4 >> 2] | 0) != (o[u + 8 >> 2] | 0) && (o[P >> 2] = 257, l = o[q >> 2] | 0), r2(o[l + 20 >> 2] | 0), o[(o[q >> 2] | 0) + 20 >> 2] = 0, r2(o[(o[q >> 2] | 0) + 24 >> 2] | 0), o[(o[q >> 2] | 0) + 24 >> 2] = 0, r2(o[(o[q >> 2] | 0) + 28 >> 2] | 0), o[(o[q >> 2] | 0) + 28 >> 2] = 0, r2(o[(o[q >> 2] | 0) + 44 >> 2] | 0), o[(o[q >> 2] | 0) + 44 >> 2] = 0;
          } else if (l = M2(72) | 0, o[q >> 2] = l, !l)
            return l = 65535, f0 = C, l | 0;
        while (!1);
        T = (o[q >> 2] | 0) + 0 | 0, l = _ + 0 | 0, P = T + 72 | 0;
        do
          o[T >> 2] = o[l >> 2], T = T + 4 | 0, l = l + 4 | 0;
        while ((T | 0) < (P | 0));
        return l = 0, f0 = C, l | 0;
      }
      function qr(u, _, l) {
        u = u | 0, _ = _ | 0, l = l | 0;
        var P = 0, T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0;
        if (d0 = f0, c0 = u + (_ << 2) + 148 | 0, T = o[c0 >> 2] | 0, !T || (s0 = o[T + 4 >> 2] | 0, q = o[u + (s0 << 2) + 20 >> 2] | 0, !q))
          return c0 = 1, f0 = d0, c0 | 0;
        e0 = o[q + 52 >> 2] | 0, t0 = _0(o[q + 56 >> 2] | 0, e0) | 0, C = o[T + 12 >> 2] | 0;
        e: do
          if (C >>> 0 > 1)
            if (q = o[T + 16 >> 2] | 0, (q | 0) == 2) {
              for (j = o[T + 24 >> 2] | 0, i0 = o[T + 28 >> 2] | 0, C = C + -1 | 0, P = 0; ; ) {
                if (T = o[j + (P << 2) >> 2] | 0, q = o[i0 + (P << 2) >> 2] | 0, !(T >>> 0 <= q >>> 0 & q >>> 0 < t0 >>> 0)) {
                  P = 1, q = 33;
                  break;
                }
                if (P = P + 1 | 0, ((T >>> 0) % (e0 >>> 0) | 0) >>> 0 > ((q >>> 0) % (e0 >>> 0) | 0) >>> 0) {
                  P = 1, q = 33;
                  break;
                }
                if (P >>> 0 >= C >>> 0) break e;
              }
              if ((q | 0) == 33)
                return f0 = d0, P | 0;
            } else if (q) {
              if ((q + -3 | 0) >>> 0 < 3) {
                if ((o[T + 36 >> 2] | 0) >>> 0 > t0 >>> 0)
                  P = 1;
                else break;
                return f0 = d0, P | 0;
              }
              if ((q | 0) != 6) break;
              if ((o[T + 40 >> 2] | 0) >>> 0 < t0 >>> 0)
                P = 1;
              else break;
              return f0 = d0, P | 0;
            } else {
              for (q = o[T + 20 >> 2] | 0, T = 0; ; ) {
                if ((o[q + (T << 2) >> 2] | 0) >>> 0 > t0 >>> 0) {
                  P = 1;
                  break;
                }
                if (T = T + 1 | 0, T >>> 0 >= C >>> 0) break e;
              }
              return f0 = d0, P | 0;
            }
        while (!1);
        T = u + 4 | 0, q = o[T >> 2] | 0;
        do
          if ((q | 0) != 256) {
            if (P = u + 3380 | 0, !(o[P >> 2] | 0)) {
              if ((q | 0) == (_ | 0)) break;
              if (q = u + 8 | 0, (s0 | 0) == (o[q >> 2] | 0)) {
                o[T >> 2] = _, o[u + 12 >> 2] = o[c0 >> 2];
                break;
              }
              if (l) {
                o[T >> 2] = _, c0 = o[c0 >> 2] | 0, o[u + 12 >> 2] = c0, c0 = o[c0 + 4 >> 2] | 0, o[q >> 2] = c0, c0 = o[u + (c0 << 2) + 20 >> 2] | 0, o[u + 16 >> 2] = c0, s0 = o[c0 + 52 >> 2] | 0, c0 = o[c0 + 56 >> 2] | 0, o[u + 1176 >> 2] = _0(c0, s0) | 0, o[u + 1340 >> 2] = s0, o[u + 1344 >> 2] = c0, o[P >> 2] = 1;
                break;
              } else
                return c0 = 1, f0 = d0, c0 | 0;
            }
            if (o[P >> 2] = 0, P = u + 1212 | 0, r2(o[P >> 2] | 0), o[P >> 2] = 0, T = u + 1172 | 0, r2(o[T >> 2] | 0), o[T >> 2] = 0, q = u + 1176 | 0, o[P >> 2] = M2((o[q >> 2] | 0) * 216 | 0) | 0, c0 = M2(o[q >> 2] << 2) | 0, o[T >> 2] = c0, T = o[P >> 2] | 0, (T | 0) == 0 | (c0 | 0) == 0)
              return c0 = 65535, f0 = d0, c0 | 0;
            U2(T, 0, (o[q >> 2] | 0) * 216 | 0), T = u + 16 | 0, Lr(
              o[P >> 2] | 0,
              o[(o[T >> 2] | 0) + 52 >> 2] | 0,
              o[q >> 2] | 0
            ), T = o[T >> 2] | 0;
            do
              if ((o[u + 1216 >> 2] | 0) == 0 && (o[T + 16 >> 2] | 0) != 2) {
                if ((o[T + 80 >> 2] | 0) != 0 && (p0 = o[T + 84 >> 2] | 0, (o[p0 + 920 >> 2] | 0) != 0) && (o[p0 + 944 >> 2] | 0) == 0) {
                  P = 1;
                  break;
                }
                P = 0;
              } else P = 1;
            while (!1);
            if (c0 = _0(o[T + 56 >> 2] | 0, o[T + 52 >> 2] | 0) | 0, P = Z1(
              u + 1220 | 0,
              c0,
              o[T + 88 >> 2] | 0,
              o[T + 44 >> 2] | 0,
              o[T + 12 >> 2] | 0,
              P
            ) | 0, P)
              return c0 = P, f0 = d0, c0 | 0;
          } else
            o[T >> 2] = _, c0 = o[c0 >> 2] | 0, o[u + 12 >> 2] = c0, c0 = o[c0 + 4 >> 2] | 0, o[u + 8 >> 2] = c0, c0 = o[u + (c0 << 2) + 20 >> 2] | 0, o[u + 16 >> 2] = c0, s0 = o[c0 + 52 >> 2] | 0, c0 = o[c0 + 56 >> 2] | 0, o[u + 1176 >> 2] = _0(c0, s0) | 0, o[u + 1340 >> 2] = s0, o[u + 1344 >> 2] = c0, o[u + 3380 >> 2] = 1;
        while (!1);
        return c0 = 0, f0 = d0, c0 | 0;
      }
      function Yr(u) {
        u = u | 0;
        var _ = 0, l = 0, P = 0;
        if (P = f0, o[u + 1196 >> 2] = 0, o[u + 1192 >> 2] = 0, l = o[u + 1176 >> 2] | 0, !l) {
          f0 = P;
          return;
        }
        u = o[u + 1212 >> 2] | 0, _ = 0;
        do
          o[u + (_ * 216 | 0) + 4 >> 2] = 0, o[u + (_ * 216 | 0) + 196 >> 2] = 0, _ = _ + 1 | 0;
        while (_ >>> 0 < l >>> 0);
        f0 = P;
      }
      function B1(u) {
        return u = u | 0, (o[u + 1188 >> 2] | 0) == 0 | 0;
      }
      function Vr(u) {
        u = u | 0;
        var _ = 0, l = 0, P = 0, T = 0;
        if (T = f0, o[u + 1404 >> 2] | 0) {
          if (P = o[u + 1176 >> 2] | 0, !P)
            return u = 1, f0 = T, u | 0;
          u = o[u + 1212 >> 2] | 0, _ = 0, l = 0;
          do
            l = ((o[u + (_ * 216 | 0) + 196 >> 2] | 0) != 0 & 1) + l | 0, _ = _ + 1 | 0;
          while (_ >>> 0 < P >>> 0);
          if ((l | 0) == (P | 0))
            return u = 1, f0 = T, u | 0;
        } else if ((o[u + 1196 >> 2] | 0) == (o[u + 1176 >> 2] | 0))
          return u = 1, f0 = T, u | 0;
        return u = 0, f0 = T, u | 0;
      }
      function Hr(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0;
        l = f0, P = o[u + 16 >> 2] | 0, Xr(
          o[u + 1172 >> 2] | 0,
          o[u + 12 >> 2] | 0,
          _,
          o[P + 52 >> 2] | 0,
          o[P + 56 >> 2] | 0
        ), f0 = l;
      }
      function Gr(u, _, l, P) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0;
        var T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0;
        switch (w0 = f0, f0 = f0 + 32 | 0, q = w0 + 24 | 0, i0 = w0 + 20 | 0, j = w0 + 16 | 0, s0 = w0 + 12 | 0, h0 = w0 + 8 | 0, d0 = w0, o[P >> 2] = 0, o[_ >> 2] | 0) {
          case 5:
          case 1: {
            if (k0 = l + 1300 | 0, C = l + 1332 | 0, o[C >> 2] | 0 && (o[P >> 2] = 1, o[C >> 2] = 0), C = w1(u, q) | 0, C)
              return c0 = C, f0 = w0, c0 | 0;
            if (e0 = o[l + (o[q >> 2] << 2) + 148 >> 2] | 0, !e0 || (C = o[e0 + 4 >> 2] | 0, t0 = o[l + (C << 2) + 20 >> 2] | 0, !t0) || (q = o[l + 8 >> 2] | 0, !((q | 0) == 32 | (C | 0) == (q | 0)) && (o[_ >> 2] | 0) != 5))
              return c0 = 65520, f0 = w0, c0 | 0;
            if (q = o[l + 1304 >> 2] | 0, C = o[_ + 4 >> 2] | 0, (q | 0) != (C | 0) && (q | 0) == 0 | (C | 0) == 0 && (o[P >> 2] = 1), C = (o[_ >> 2] | 0) == 5, (o[k0 >> 2] | 0) == 5 ? C || (T = 16) : C && (T = 16), (T | 0) == 16 && (o[P >> 2] = 1), q = t0 + 12 | 0, yr(u, o[q >> 2] | 0, i0) | 0)
              return c0 = 1, f0 = w0, c0 | 0;
            if (T = l + 1308 | 0, C = o[i0 >> 2] | 0, (o[T >> 2] | 0) != (C | 0) && (o[T >> 2] = C, o[P >> 2] = 1), (o[_ >> 2] | 0) == 5) {
              if (Br(u, o[q >> 2] | 0, 5, j) | 0)
                return c0 = 1, f0 = w0, c0 | 0;
              (o[k0 >> 2] | 0) == 5 ? (C = l + 1312 | 0, T = o[C >> 2] | 0, q = o[j >> 2] | 0, (T | 0) == (q | 0) ? q = T : o[P >> 2] = 1) : (q = o[j >> 2] | 0, C = l + 1312 | 0), o[C >> 2] = q;
            }
            if (q = o[t0 + 16 >> 2] | 0, (q | 0) == 1) {
              if (!(o[t0 + 24 >> 2] | 0)) {
                if (C = e0 + 8 | 0, q = xr(
                  u,
                  t0,
                  o[_ >> 2] | 0,
                  o[C >> 2] | 0,
                  d0
                ) | 0, q)
                  return c0 = q, f0 = w0, c0 | 0;
                T = l + 1324 | 0, q = o[d0 >> 2] | 0, (o[T >> 2] | 0) != (q | 0) && (o[T >> 2] = q, o[P >> 2] = 1), (o[C >> 2] | 0) != 0 && (p0 = l + 1328 | 0, c0 = o[d0 + 4 >> 2] | 0, (o[p0 >> 2] | 0) != (c0 | 0)) && (o[p0 >> 2] = c0, o[P >> 2] = 1);
              }
            } else if (!q) {
              if (gr(u, t0, o[_ >> 2] | 0, s0) | 0)
                return c0 = 1, f0 = w0, c0 | 0;
              if (T = l + 1316 | 0, q = o[s0 >> 2] | 0, (o[T >> 2] | 0) != (q | 0) && (o[T >> 2] = q, o[P >> 2] = 1), o[e0 + 8 >> 2] | 0) {
                if (T = Ar(u, t0, o[_ >> 2] | 0, h0) | 0, T)
                  return c0 = T, f0 = w0, c0 | 0;
                q = l + 1320 | 0, T = o[h0 >> 2] | 0, (o[q >> 2] | 0) != (T | 0) && (o[q >> 2] = T, o[P >> 2] = 1);
              }
            }
            return s0 = _, u = o[s0 + 4 >> 2] | 0, c0 = k0, o[c0 >> 2] = o[s0 >> 2], o[c0 + 4 >> 2] = u, c0 = 0, f0 = w0, c0 | 0;
          }
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
          case 11:
          case 13:
          case 14:
          case 15:
          case 16:
          case 17:
          case 18:
            return o[P >> 2] = 1, c0 = 0, f0 = w0, c0 | 0;
          default:
            return c0 = 0, f0 = w0, c0 | 0;
        }
        return 0;
      }
      function Kr(u) {
        u = u | 0;
        var _ = 0, l = 0, P = 0, T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0;
        s0 = f0, e0 = 0;
        e: for (; ; ) {
          _ = o[u + (e0 << 2) + 148 >> 2] | 0;
          r: do
            if ((_ | 0) != 0 && (j = o[u + (o[_ + 4 >> 2] << 2) + 20 >> 2] | 0, (j | 0) != 0)) {
              if (i0 = o[j + 52 >> 2] | 0, t0 = _0(o[j + 56 >> 2] | 0, i0) | 0, T = o[_ + 12 >> 2] | 0, T >>> 0 <= 1) {
                _ = 0, l = 18;
                break e;
              }
              if (l = o[_ + 16 >> 2] | 0, (l | 0) == 2)
                for (C = o[_ + 24 >> 2] | 0, q = o[_ + 28 >> 2] | 0, T = T + -1 | 0, P = 0; ; ) {
                  if (_ = o[C + (P << 2) >> 2] | 0, l = o[q + (P << 2) >> 2] | 0, !(_ >>> 0 <= l >>> 0 & l >>> 0 < t0 >>> 0) || (P = P + 1 | 0, ((_ >>> 0) % (i0 >>> 0) | 0) >>> 0 > ((l >>> 0) % (i0 >>> 0) | 0) >>> 0))
                    break r;
                  if (P >>> 0 >= T >>> 0) {
                    _ = 0, l = 18;
                    break e;
                  }
                }
              else if (l) {
                if ((l + -3 | 0) >>> 0 < 3) {
                  if ((o[_ + 36 >> 2] | 0) >>> 0 > t0 >>> 0)
                    break;
                  _ = 0, l = 18;
                  break e;
                }
                if ((l | 0) != 6) {
                  _ = 0, l = 18;
                  break e;
                }
                if ((o[_ + 40 >> 2] | 0) >>> 0 < t0 >>> 0)
                  break;
                _ = 0, l = 18;
                break e;
              } else
                for (l = o[_ + 20 >> 2] | 0, _ = 0; ; ) {
                  if ((o[l + (_ << 2) >> 2] | 0) >>> 0 > t0 >>> 0)
                    break r;
                  if (_ = _ + 1 | 0, _ >>> 0 >= T >>> 0) {
                    _ = 0, l = 18;
                    break e;
                  }
                }
            }
          while (!1);
          if (e0 = e0 + 1 | 0, e0 >>> 0 >= 256) {
            _ = 1, l = 18;
            break;
          }
        }
        return (l | 0) == 18 ? (f0 = s0, _ | 0) : 0;
      }
      function Xr(u, _, l, P, T) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0;
        var q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0;
        if (B0 = f0, w0 = _0(T, P) | 0, c0 = o[_ + 12 >> 2] | 0, (c0 | 0) == 1) {
          U2(u, 0, w0 << 2), f0 = B0;
          return;
        }
        switch (j = o[_ + 16 >> 2] | 0, (j + -3 | 0) >>> 0 < 3 ? (l = _0(o[_ + 36 >> 2] | 0, l) | 0, l = l >>> 0 < w0 >>> 0 ? l : w0, (j & -2 | 0) == 4 ? (s0 = (o[_ + 32 >> 2] | 0) == 0 ? l : w0 - l | 0, A0 = l) : (s0 = 0, A0 = l)) : (s0 = 0, A0 = 0), j | 0) {
          case 0: {
            if (e0 = o[_ + 20 >> 2] | 0, w0)
              C = 0, i0 = 0;
            else {
              f0 = B0;
              return;
            }
            for (; ; ) {
              for (; !(C >>> 0 < c0 >>> 0); )
                C = 0;
              _ = e0 + (C << 2) | 0, l = o[_ >> 2] | 0;
              e: do
                if (!l) l = 0;
                else {
                  j = 0;
                  do {
                    if (q = j + i0 | 0, q >>> 0 >= w0 >>> 0) break e;
                    o[u + (q << 2) >> 2] = C, j = j + 1 | 0, l = o[_ >> 2] | 0;
                  } while (j >>> 0 < l >>> 0);
                }
              while (!1);
              if (i0 = l + i0 | 0, i0 >>> 0 >= w0 >>> 0) break;
              C = C + 1 | 0;
            }
            f0 = B0;
            return;
          }
          case 4: {
            if (C = o[_ + 32 >> 2] | 0, !w0) {
              f0 = B0;
              return;
            }
            l = 1 - C | 0, q = 0;
            do
              o[u + (q << 2) >> 2] = q >>> 0 < s0 >>> 0 ? C : l, q = q + 1 | 0;
            while ((q | 0) != (w0 | 0));
            f0 = B0;
            return;
          }
          case 1: {
            if (w0)
              C = 0;
            else {
              f0 = B0;
              return;
            }
            do
              o[u + (C << 2) >> 2] = ((((_0((C >>> 0) / (P >>> 0) | 0, c0) | 0) >>> 1) + ((C >>> 0) % (P >>> 0) | 0) | 0) >>> 0) % (c0 >>> 0) | 0, C = C + 1 | 0;
            while ((C | 0) != (w0 | 0));
            f0 = B0;
            return;
          }
          case 2: {
            if (s0 = o[_ + 24 >> 2] | 0, t0 = o[_ + 28 >> 2] | 0, C = c0 + -1 | 0, w0) {
              l = 0;
              do
                o[u + (l << 2) >> 2] = C, l = l + 1 | 0;
              while ((l | 0) != (w0 | 0));
            }
            if (!C) {
              f0 = B0;
              return;
            }
            for (q = c0 + -2 | 0; ; ) {
              i0 = o[s0 + (q << 2) >> 2] | 0, l = (i0 >>> 0) / (P >>> 0) | 0, i0 = (i0 >>> 0) % (P >>> 0) | 0, C = o[t0 + (q << 2) >> 2] | 0, e0 = (C >>> 0) / (P >>> 0) | 0, C = (C >>> 0) % (P >>> 0) | 0;
              e: do
                if (l >>> 0 <= e0 >>> 0) {
                  if (i0 >>> 0 > C >>> 0) {
                    for (; ; )
                      if (l = l + 1 | 0, l >>> 0 > e0 >>> 0) break e;
                  }
                  do {
                    j = _0(l, P) | 0, _ = i0;
                    do
                      o[u + (_ + j << 2) >> 2] = q, _ = _ + 1 | 0;
                    while (_ >>> 0 <= C >>> 0);
                    l = l + 1 | 0;
                  } while (l >>> 0 <= e0 >>> 0);
                }
              while (!1);
              if (q) q = q + -1 | 0;
              else break;
            }
            f0 = B0;
            return;
          }
          case 5: {
            if (l = o[_ + 32 >> 2] | 0, !P) {
              f0 = B0;
              return;
            }
            if (j = 1 - l | 0, T)
              q = 0, i0 = 0;
            else {
              f0 = B0;
              return;
            }
            for (; ; ) {
              for (C = 0, _ = i0; t0 = u + ((_0(C, P) | 0) + q << 2) | 0, o[t0 >> 2] = _ >>> 0 < s0 >>> 0 ? l : j, C = C + 1 | 0, (C | 0) != (T | 0); )
                _ = _ + 1 | 0;
              if (q = q + 1 | 0, (q | 0) == (P | 0)) break;
              i0 = i0 + T | 0;
            }
            f0 = B0;
            return;
          }
          case 3: {
            if (t0 = o[_ + 32 >> 2] | 0, w0) {
              l = 0;
              do
                o[u + (l << 2) >> 2] = 1, l = l + 1 | 0;
              while ((l | 0) != (w0 | 0));
            }
            if (e0 = (P - t0 | 0) >>> 1, s0 = (T - t0 | 0) >>> 1, !A0) {
              f0 = B0;
              return;
            }
            for (w0 = t0 << 1, h0 = w0 + -1 | 0, k0 = P + -1 | 0, w0 = 1 - w0 | 0, d0 = T + -1 | 0, c0 = s0, p0 = 0, q = e0, T = e0, j = s0, _ = e0, i0 = t0 + -1 | 0, l = s0; ; ) {
              s0 = u + ((_0(l, P) | 0) + _ << 2) | 0, e0 = (o[s0 >> 2] | 0) == 1, C = e0 & 1, e0 && (o[s0 >> 2] = 0);
              do
                if ((i0 | 0) == -1 & (_ | 0) == (q | 0))
                  _ = q + -1 | 0, _ = (_ | 0) > 0 ? _ : 0, s0 = c0, e0 = _, i0 = 0, t0 = h0;
                else {
                  if ((i0 | 0) == 1 & (_ | 0) == (T | 0)) {
                    _ = T + 1 | 0, _ = (_ | 0) < (k0 | 0) ? _ : k0, s0 = c0, e0 = q, T = _, i0 = 0, t0 = w0;
                    break;
                  }
                  if ((t0 | 0) == -1 & (l | 0) == (j | 0)) {
                    l = j + -1 | 0, l = (l | 0) > 0 ? l : 0, s0 = c0, e0 = q, j = l, i0 = w0, t0 = 0;
                    break;
                  }
                  if ((t0 | 0) == 1 & (l | 0) == (c0 | 0)) {
                    l = c0 + 1 | 0, l = (l | 0) < (d0 | 0) ? l : d0, s0 = l, e0 = q, i0 = h0, t0 = 0;
                    break;
                  } else {
                    s0 = c0, e0 = q, _ = _ + i0 | 0, l = l + t0 | 0;
                    break;
                  }
                }
              while (!1);
              if (p0 = C + p0 | 0, p0 >>> 0 >= A0 >>> 0) break;
              c0 = s0, q = e0;
            }
            f0 = B0;
            return;
          }
          default: {
            if (!w0) {
              f0 = B0;
              return;
            }
            q = o[_ + 44 >> 2] | 0, C = 0;
            do
              o[u + (C << 2) >> 2] = o[q + (C << 2) >> 2], C = C + 1 | 0;
            while ((C | 0) != (w0 | 0));
            f0 = B0;
            return;
          }
        }
      }
      function Wr() {
        return 3472;
      }
      function $r(u, _, l, P, T, q) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, q = q | 0;
        var C = 0, i0 = 0, j = 0;
        if (j = f0, f0 = f0 + 80 | 0, C = j + 32 | 0, i0 = j, Jr(l, C, i0, P), (Y2(o[u >> 2] | 0) | 0) == 1) {
          if (P = Zr(u, q, _ + 328 | 0, C, i0, T) | 0, P)
            return f0 = j, P | 0;
        } else if (P = Qr(u, q, _, C, i0, T) | 0, P)
          return f0 = j, P | 0;
        return P = jr(
          u,
          q + 256 | 0,
          _ + 1352 | 0,
          C + 21 | 0,
          i0 + 16 | 0,
          o[_ + 140 >> 2] | 0,
          T
        ) | 0, P ? (f0 = j, P | 0) : (o[u + 196 >> 2] | 0) >>> 0 > 1 ? (P = 0, f0 = j, P | 0) : (Le(l, q), P = 0, f0 = j, P | 0);
      }
      function Jr(u, _, l, P) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0;
        var T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0;
        if (h0 = f0, !P) {
          f0 = h0;
          return;
        }
        if (c0 = o[u + 4 >> 2] | 0, p0 = _0(o[u + 8 >> 2] | 0, c0) | 0, t0 = (P >>> 0) / (c0 >>> 0) | 0, T = _0(t0, c0) | 0, s0 = P - T | 0, i0 = c0 << 4, q = o[u >> 2] | 0, C = (s0 << 4) + (_0(c0 << 8, t0) | 0) | 0, d0 = (t0 | 0) != 0, d0 ? (e0 = C - (i0 | 1) | 0, n0[_ >> 0] = n0[q + e0 >> 0] | 0, n0[_ + 1 >> 0] = n0[q + (e0 + 1) >> 0] | 0, n0[_ + 2 >> 0] = n0[q + (e0 + 2) >> 0] | 0, n0[_ + 3 >> 0] = n0[q + (e0 + 3) >> 0] | 0, n0[_ + 4 >> 0] = n0[q + (e0 + 4) >> 0] | 0, n0[_ + 5 >> 0] = n0[q + (e0 + 5) >> 0] | 0, n0[_ + 6 >> 0] = n0[q + (e0 + 6) >> 0] | 0, n0[_ + 7 >> 0] = n0[q + (e0 + 7) >> 0] | 0, n0[_ + 8 >> 0] = n0[q + (e0 + 8) >> 0] | 0, n0[_ + 9 >> 0] = n0[q + (e0 + 9) >> 0] | 0, n0[_ + 10 >> 0] = n0[q + (e0 + 10) >> 0] | 0, n0[_ + 11 >> 0] = n0[q + (e0 + 11) >> 0] | 0, n0[_ + 12 >> 0] = n0[q + (e0 + 12) >> 0] | 0, n0[_ + 13 >> 0] = n0[q + (e0 + 13) >> 0] | 0, n0[_ + 14 >> 0] = n0[q + (e0 + 14) >> 0] | 0, n0[_ + 15 >> 0] = n0[q + (e0 + 15) >> 0] | 0, n0[_ + 16 >> 0] = n0[q + (e0 + 16) >> 0] | 0, n0[_ + 17 >> 0] = n0[q + (e0 + 17) >> 0] | 0, n0[_ + 18 >> 0] = n0[q + (e0 + 18) >> 0] | 0, n0[_ + 19 >> 0] = n0[q + (e0 + 19) >> 0] | 0, n0[_ + 20 >> 0] = n0[q + (e0 + 20) >> 0] | 0, e0 = _ + 21 | 0) : e0 = _, j = (T | 0) != (P | 0), j && (C = C + -1 | 0, n0[l >> 0] = n0[q + C >> 0] | 0, C = C + i0 | 0, n0[l + 1 >> 0] = n0[q + C >> 0] | 0, C = C + i0 | 0, n0[l + 2 >> 0] = n0[q + C >> 0] | 0, C = C + i0 | 0, n0[l + 3 >> 0] = n0[q + C >> 0] | 0, C = C + i0 | 0, n0[l + 4 >> 0] = n0[q + C >> 0] | 0, C = C + i0 | 0, n0[l + 5 >> 0] = n0[q + C >> 0] | 0, C = C + i0 | 0, n0[l + 6 >> 0] = n0[q + C >> 0] | 0, C = C + i0 | 0, n0[l + 7 >> 0] = n0[q + C >> 0] | 0, C = C + i0 | 0, n0[l + 8 >> 0] = n0[q + C >> 0] | 0, C = C + i0 | 0, n0[l + 9 >> 0] = n0[q + C >> 0] | 0, C = C + i0 | 0, n0[l + 10 >> 0] = n0[q + C >> 0] | 0, C = C + i0 | 0, n0[l + 11 >> 0] = n0[q + C >> 0] | 0, C = C + i0 | 0, n0[l + 12 >> 0] = n0[q + C >> 0] | 0, C = C + i0 | 0, n0[l + 13 >> 0] = n0[q + C >> 0] | 0, C = C + i0 | 0, n0[l + 14 >> 0] = n0[q + C >> 0] | 0, n0[l + 15 >> 0] = n0[q + (C + i0) >> 0] | 0, l = l + 16 | 0), _ = c0 << 3 & 2147483640, P = o[u >> 2] | 0, T = (_0(t0 << 3, _) | 0) + (p0 << 8) + (s0 << 3) | 0, d0 && (u = T - (_ | 1) | 0, n0[e0 >> 0] = n0[P + u >> 0] | 0, n0[e0 + 1 >> 0] = n0[P + (u + 1) >> 0] | 0, n0[e0 + 2 >> 0] = n0[P + (u + 2) >> 0] | 0, n0[e0 + 3 >> 0] = n0[P + (u + 3) >> 0] | 0, n0[e0 + 4 >> 0] = n0[P + (u + 4) >> 0] | 0, n0[e0 + 5 >> 0] = n0[P + (u + 5) >> 0] | 0, n0[e0 + 6 >> 0] = n0[P + (u + 6) >> 0] | 0, n0[e0 + 7 >> 0] = n0[P + (u + 7) >> 0] | 0, n0[e0 + 8 >> 0] = n0[P + (u + 8) >> 0] | 0, u = u + (p0 << 6) | 0, n0[e0 + 9 >> 0] = n0[P + u >> 0] | 0, n0[e0 + 10 >> 0] = n0[P + (u + 1) >> 0] | 0, n0[e0 + 11 >> 0] = n0[P + (u + 2) >> 0] | 0, n0[e0 + 12 >> 0] = n0[P + (u + 3) >> 0] | 0, n0[e0 + 13 >> 0] = n0[P + (u + 4) >> 0] | 0, n0[e0 + 14 >> 0] = n0[P + (u + 5) >> 0] | 0, n0[e0 + 15 >> 0] = n0[P + (u + 6) >> 0] | 0, n0[e0 + 16 >> 0] = n0[P + (u + 7) >> 0] | 0, n0[e0 + 17 >> 0] = n0[P + (u + 8) >> 0] | 0), !j) {
          f0 = h0;
          return;
        }
        e0 = T + -1 | 0, n0[l >> 0] = n0[P + e0 >> 0] | 0, e0 = e0 + _ | 0, n0[l + 1 >> 0] = n0[P + e0 >> 0] | 0, e0 = e0 + _ | 0, n0[l + 2 >> 0] = n0[P + e0 >> 0] | 0, e0 = e0 + _ | 0, n0[l + 3 >> 0] = n0[P + e0 >> 0] | 0, e0 = e0 + _ | 0, n0[l + 4 >> 0] = n0[P + e0 >> 0] | 0, e0 = e0 + _ | 0, n0[l + 5 >> 0] = n0[P + e0 >> 0] | 0, e0 = e0 + _ | 0, n0[l + 6 >> 0] = n0[P + e0 >> 0] | 0, e0 = e0 + _ | 0, n0[l + 7 >> 0] = n0[P + e0 >> 0] | 0, e0 = e0 + (_ + ((p0 << 6) - (c0 << 6))) | 0, n0[l + 8 >> 0] = n0[P + e0 >> 0] | 0, e0 = e0 + _ | 0, n0[l + 9 >> 0] = n0[P + e0 >> 0] | 0, e0 = e0 + _ | 0, n0[l + 10 >> 0] = n0[P + e0 >> 0] | 0, e0 = e0 + _ | 0, n0[l + 11 >> 0] = n0[P + e0 >> 0] | 0, e0 = e0 + _ | 0, n0[l + 12 >> 0] = n0[P + e0 >> 0] | 0, e0 = e0 + _ | 0, n0[l + 13 >> 0] = n0[P + e0 >> 0] | 0, e0 = e0 + _ | 0, n0[l + 14 >> 0] = n0[P + e0 >> 0] | 0, n0[l + 15 >> 0] = n0[P + (e0 + _) >> 0] | 0, f0 = h0;
      }
      function Zr(u, _, l, P, T, q) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, q = q | 0;
        var C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0;
        if (m0 = f0, C = u + 200 | 0, i0 = P2(u, o[C >> 2] | 0) | 0, t0 = (q | 0) != 0, (i0 | 0) != 0 & t0 ? (e0 = (Y2(o[o[C >> 2] >> 2] | 0) | 0) == 2, e0 = e0 ? 0 : i0) : e0 = i0, q = u + 204 | 0, i0 = P2(u, o[q >> 2] | 0) | 0, (i0 | 0) != 0 & t0 ? (s0 = (Y2(o[o[q >> 2] >> 2] | 0) | 0) == 2, s0 = s0 ? 0 : i0) : s0 = i0, q = u + 212 | 0, i0 = P2(u, o[q >> 2] | 0) | 0, (i0 | 0) != 0 & t0 && (p0 = (Y2(o[o[q >> 2] >> 2] | 0) | 0) == 2, i0 = p0 ? 0 : i0), q = Tr(o[u >> 2] | 0) | 0, q)
          if ((q | 0) == 2) {
            i0 = P + 1 | 0, C = (e0 | 0) != 0, q = (s0 | 0) != 0;
            do
              if (C & q) {
                q = 0, C = 0;
                do
                  p0 = q, q = q + 1 | 0, C = (l0[P + q >> 0] | 0) + C + (l0[T + p0 >> 0] | 0) | 0;
                while ((q | 0) != 16);
                C = (C + 16 | 0) >>> 5;
              } else {
                if (C) {
                  C = ((l0[T >> 0] | 0) + 8 + (l0[T + 1 >> 0] | 0) + (l0[T + 2 >> 0] | 0) + (l0[T + 3 >> 0] | 0) + (l0[T + 4 >> 0] | 0) + (l0[T + 5 >> 0] | 0) + (l0[T + 6 >> 0] | 0) + (l0[T + 7 >> 0] | 0) + (l0[T + 8 >> 0] | 0) + (l0[T + 9 >> 0] | 0) + (l0[T + 10 >> 0] | 0) + (l0[T + 11 >> 0] | 0) + (l0[T + 12 >> 0] | 0) + (l0[T + 13 >> 0] | 0) + (l0[T + 14 >> 0] | 0) + (l0[T + 15 >> 0] | 0) | 0) >>> 4;
                  break;
                }
                q ? C = ((l0[i0 >> 0] | 0) + 8 + (l0[P + 2 >> 0] | 0) + (l0[P + 3 >> 0] | 0) + (l0[P + 4 >> 0] | 0) + (l0[P + 5 >> 0] | 0) + (l0[P + 6 >> 0] | 0) + (l0[P + 7 >> 0] | 0) + (l0[P + 8 >> 0] | 0) + (l0[P + 9 >> 0] | 0) + (l0[P + 10 >> 0] | 0) + (l0[P + 11 >> 0] | 0) + (l0[P + 12 >> 0] | 0) + (l0[P + 13 >> 0] | 0) + (l0[P + 14 >> 0] | 0) + (l0[P + 15 >> 0] | 0) + (l0[P + 16 >> 0] | 0) | 0) >>> 4 : C = 128;
              }
            while (!1);
            g2(_ | 0, C & 255 | 0, 256) | 0;
          } else if ((q | 0) == 1)
            if (e0)
              for (C = _, q = 0; p0 = T + q | 0, n0[C >> 0] = n0[p0 >> 0] | 0, n0[C + 1 >> 0] = n0[p0 >> 0] | 0, n0[C + 2 >> 0] = n0[p0 >> 0] | 0, n0[C + 3 >> 0] = n0[p0 >> 0] | 0, n0[C + 4 >> 0] = n0[p0 >> 0] | 0, n0[C + 5 >> 0] = n0[p0 >> 0] | 0, n0[C + 6 >> 0] = n0[p0 >> 0] | 0, n0[C + 7 >> 0] = n0[p0 >> 0] | 0, n0[C + 8 >> 0] = n0[p0 >> 0] | 0, n0[C + 9 >> 0] = n0[p0 >> 0] | 0, n0[C + 10 >> 0] = n0[p0 >> 0] | 0, n0[C + 11 >> 0] = n0[p0 >> 0] | 0, n0[C + 12 >> 0] = n0[p0 >> 0] | 0, n0[C + 13 >> 0] = n0[p0 >> 0] | 0, n0[C + 14 >> 0] = n0[p0 >> 0] | 0, n0[C + 15 >> 0] = n0[p0 >> 0] | 0, q = q + 1 | 0, (q | 0) != 16; )
                C = C + 16 | 0;
            else
              return p0 = 1, f0 = m0, p0 | 0;
          else {
            if (!((e0 | 0) != 0 & (s0 | 0) != 0 & (i0 | 0) != 0))
              return p0 = 1, f0 = m0, p0 | 0;
            q = l0[P + 16 >> 0] | 0, j = l0[T + 15 >> 0] | 0, t0 = l0[P >> 0] | 0, s0 = (((l0[P + 9 >> 0] | 0) - (l0[P + 7 >> 0] | 0) + ((l0[P + 10 >> 0] | 0) - (l0[P + 6 >> 0] | 0) << 1) + (((l0[P + 11 >> 0] | 0) - (l0[P + 5 >> 0] | 0) | 0) * 3 | 0) + ((l0[P + 12 >> 0] | 0) - (l0[P + 4 >> 0] | 0) << 2) + (((l0[P + 13 >> 0] | 0) - (l0[P + 3 >> 0] | 0) | 0) * 5 | 0) + (((l0[P + 14 >> 0] | 0) - (l0[P + 2 >> 0] | 0) | 0) * 6 | 0) + (((l0[P + 15 >> 0] | 0) - (l0[P + 1 >> 0] | 0) | 0) * 7 | 0) + (q - t0 << 3) | 0) * 5 | 0) + 32 >> 6, t0 = (((l0[T + 8 >> 0] | 0) - (l0[T + 6 >> 0] | 0) + (j - t0 << 3) + ((l0[T + 9 >> 0] | 0) - (l0[T + 5 >> 0] | 0) << 1) + (((l0[T + 10 >> 0] | 0) - (l0[T + 4 >> 0] | 0) | 0) * 3 | 0) + ((l0[T + 11 >> 0] | 0) - (l0[T + 3 >> 0] | 0) << 2) + (((l0[T + 12 >> 0] | 0) - (l0[T + 2 >> 0] | 0) | 0) * 5 | 0) + (((l0[T + 13 >> 0] | 0) - (l0[T + 1 >> 0] | 0) | 0) * 6 | 0) + (((l0[T + 14 >> 0] | 0) - (l0[T >> 0] | 0) | 0) * 7 | 0) | 0) * 5 | 0) + 32 >> 6, q = (j + q << 4) + 16 | 0, j = 0;
            do {
              C = q + (_0(j + -7 | 0, t0) | 0) | 0, e0 = j << 4, u = 0;
              do
                i0 = C + (_0(u + -7 | 0, s0) | 0) >> 5, (i0 | 0) < 0 ? i0 = 0 : i0 = (i0 | 0) > 255 ? -1 : i0 & 255, n0[_ + (u + e0) >> 0] = i0, u = u + 1 | 0;
              while ((u | 0) != 16);
              j = j + 1 | 0;
            } while ((j | 0) != 16);
          }
        else {
          if (!s0)
            return p0 = 1, f0 = m0, p0 | 0;
          for (u = P + 1 | 0, j = P + 2 | 0, d0 = P + 3 | 0, h0 = P + 4 | 0, k0 = P + 5 | 0, w0 = P + 6 | 0, A0 = P + 7 | 0, B0 = P + 8 | 0, v0 = P + 9 | 0, T = P + 10 | 0, i0 = P + 11 | 0, q = P + 12 | 0, C = P + 13 | 0, c0 = P + 14 | 0, p0 = P + 15 | 0, s0 = P + 16 | 0, t0 = _, e0 = 0; n0[t0 >> 0] = n0[u >> 0] | 0, n0[t0 + 1 >> 0] = n0[j >> 0] | 0, n0[t0 + 2 >> 0] = n0[d0 >> 0] | 0, n0[t0 + 3 >> 0] = n0[h0 >> 0] | 0, n0[t0 + 4 >> 0] = n0[k0 >> 0] | 0, n0[t0 + 5 >> 0] = n0[w0 >> 0] | 0, n0[t0 + 6 >> 0] = n0[A0 >> 0] | 0, n0[t0 + 7 >> 0] = n0[B0 >> 0] | 0, n0[t0 + 8 >> 0] = n0[v0 >> 0] | 0, n0[t0 + 9 >> 0] = n0[T >> 0] | 0, n0[t0 + 10 >> 0] = n0[i0 >> 0] | 0, n0[t0 + 11 >> 0] = n0[q >> 0] | 0, n0[t0 + 12 >> 0] = n0[C >> 0] | 0, n0[t0 + 13 >> 0] = n0[c0 >> 0] | 0, n0[t0 + 14 >> 0] = n0[p0 >> 0] | 0, n0[t0 + 15 >> 0] = n0[s0 >> 0] | 0, e0 = e0 + 1 | 0, (e0 | 0) != 16; )
            t0 = t0 + 16 | 0;
        }
        return B2(_, l, 0), B2(_, l + 64 | 0, 1), B2(_, l + 128 | 0, 2), B2(_, l + 192 | 0, 3), B2(_, l + 256 | 0, 4), B2(_, l + 320 | 0, 5), B2(_, l + 384 | 0, 6), B2(_, l + 448 | 0, 7), B2(_, l + 512 | 0, 8), B2(_, l + 576 | 0, 9), B2(_, l + 640 | 0, 10), B2(_, l + 704 | 0, 11), B2(_, l + 768 | 0, 12), B2(_, l + 832 | 0, 13), B2(_, l + 896 | 0, 14), B2(_, l + 960 | 0, 15), p0 = 0, f0 = m0, p0 | 0;
      }
      function Qr(u, _, l, P, T, q) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, q = q | 0;
        var C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0, y0 = 0, S0 = 0, E0 = 0, T0 = 0, g0 = 0, U0 = 0, L0 = 0, O0 = 0, Y0 = 0, H0 = 0, Q0 = 0, N0 = 0, J0 = 0, $0 = 0;
        $0 = f0, J0 = (q | 0) != 0, N0 = 0;
        e: for (; ; ) {
          i0 = v1(N0) | 0, e0 = o[i0 + 4 >> 2] | 0, i0 = ne(u, o[i0 >> 2] | 0) | 0, q = P2(u, i0) | 0, (q | 0) != 0 & J0 && (g0 = (Y2(o[i0 >> 2] | 0) | 0) == 2, q = g0 ? 0 : q), t0 = y1(N0) | 0, j = o[t0 + 4 >> 2] | 0, t0 = ne(u, o[t0 >> 2] | 0) | 0, C = P2(u, t0) | 0, (C | 0) != 0 & J0 && (g0 = (Y2(o[t0 >> 2] | 0) | 0) == 2, C = g0 ? 0 : C), L0 = (q | 0) != 0, O0 = (C | 0) != 0, Y0 = L0 & O0, Y0 ? (Y2(o[i0 >> 2] | 0) | 0 ? e0 = 2 : e0 = l0[i0 + (e0 & 255) + 82 >> 0] | 0, Y2(o[t0 >> 2] | 0) | 0 ? q = 2 : q = l0[t0 + (j & 255) + 82 >> 0] | 0, q = e0 >>> 0 < q >>> 0 ? e0 : q) : q = 2, o[l + (N0 << 2) + 12 >> 2] | 0 || (g0 = o[l + (N0 << 2) + 76 >> 2] | 0, q = (g0 >>> 0 >= q >>> 0 & 1) + g0 | 0), n0[u + N0 + 82 >> 0] = q, i0 = o[(Pr(N0) | 0) >> 2] | 0, i0 = ne(u, i0) | 0, j = P2(u, i0) | 0, (j | 0) != 0 & J0 && (g0 = (Y2(o[i0 >> 2] | 0) | 0) == 2, j = g0 ? 0 : j), i0 = o[(zr(N0) | 0) >> 2] | 0, i0 = ne(u, i0) | 0, e0 = P2(u, i0) | 0, (e0 | 0) != 0 & J0 && (g0 = (Y2(o[i0 >> 2] | 0) | 0) == 2, e0 = g0 ? 0 : e0), H0 = o[3344 + (N0 << 2) >> 2] | 0, Q0 = o[3408 + (N0 << 2) >> 2] | 0, p0 = (1285 >>> N0 & 1 | 0) != 0, p0 ? (t0 = T + Q0 | 0, i0 = T + (Q0 + 1) | 0, s0 = T + (Q0 + 2) | 0, c0 = T + (Q0 + 3) | 0) : (c0 = (Q0 << 4) + H0 | 0, t0 = _ + (c0 + -1) | 0, i0 = _ + (c0 + 15) | 0, s0 = _ + (c0 + 31) | 0, c0 = _ + (c0 + 47) | 0), y0 = n0[t0 >> 0] | 0, v0 = n0[i0 >> 0] | 0, U0 = n0[s0 >> 0] | 0, g0 = n0[c0 >> 0] | 0;
          do
            if (51 >>> N0 & 1)
              T0 = n0[P + (H0 + 7) >> 0] | 0, E0 = n0[P + (H0 + 4) >> 0] | 0, h0 = n0[P + (H0 + 5) >> 0] | 0, i0 = n0[P + (H0 + 6) >> 0] | 0, t0 = n0[P + (H0 + 1) >> 0] | 0, k0 = n0[P + (H0 + 8) >> 0] | 0, S0 = n0[P + (H0 + 2) >> 0] | 0, m0 = n0[P + (H0 + 3) >> 0] | 0, w0 = P + H0 | 0;
            else if (B0 = Q0 + -1 | 0, A0 = (B0 << 4) + H0 | 0, t0 = n0[_ + A0 >> 0] | 0, c0 = n0[_ + (A0 + 1) >> 0] | 0, d0 = n0[_ + (A0 + 2) >> 0] | 0, k0 = n0[_ + (A0 + 3) >> 0] | 0, h0 = n0[_ + (A0 + 4) >> 0] | 0, i0 = n0[_ + (A0 + 5) >> 0] | 0, w0 = n0[_ + (A0 + 6) >> 0] | 0, s0 = n0[_ + (A0 + 7) >> 0] | 0, p0) {
              T0 = w0, E0 = k0, k0 = s0, S0 = c0, m0 = d0, w0 = T + B0 | 0;
              break;
            } else {
              T0 = w0, E0 = k0, k0 = s0, S0 = c0, m0 = d0, w0 = _ + (A0 + -1) | 0;
              break;
            }
          while (!1);
          switch (w0 = n0[w0 >> 0] | 0, q | 0) {
            case 4: {
              if (!(Y0 & (e0 | 0) != 0)) {
                C = 1, q = 51;
                break e;
              }
              q = t0 & 255, t0 = w0 & 255, c0 = y0 & 255, d0 = q + 2 | 0, T0 = (d0 + c0 + (t0 << 1) | 0) >>> 2, k0 = T0 & 255, C = S0 & 255, t0 = t0 + 2 | 0, w0 = ((q << 1) + C + t0 | 0) >>> 2 & 255, q = m0 & 255, d0 = ((C << 1) + q + d0 | 0) >>> 2 & 255, m0 = v0 & 255, t0 = (m0 + (c0 << 1) + t0 | 0) >>> 2, h0 = t0 & 255, y0 = U0 & 255, S0 = (c0 + 2 + (m0 << 1) + y0 | 0) >>> 2, c0 = k0, s0 = h0, e0 = S0 & 255, j = w0, i0 = d0, q = ((E0 & 255) + 2 + C + (q << 1) | 0) >>> 2 & 255, C = k0, p0 = w0, t0 = (m0 + 2 + (y0 << 1) + (g0 & 255) | 0) >>> 2 & 255 | S0 << 8 & 65280 | T0 << 24 | t0 << 16 & 16711680;
              break;
            }
            case 6: {
              if (!(Y0 & (e0 | 0) != 0)) {
                C = 1, q = 51;
                break e;
              }
              i0 = w0 & 255, d0 = y0 & 255, k0 = d0 + 1 | 0, p0 = (k0 + i0 | 0) >>> 1 & 255, E0 = v0 & 255, w0 = ((d0 << 1) + 2 + E0 + i0 | 0) >>> 2 & 255, k0 = (k0 + E0 | 0) >>> 1 & 255, T0 = U0 & 255, d0 = d0 + 2 | 0, v0 = (d0 + (E0 << 1) + T0 | 0) >>> 2, y0 = (E0 + 1 + T0 | 0) >>> 1, g0 = g0 & 255, q = t0 & 255, d0 = (d0 + q + (i0 << 1) | 0) >>> 2 & 255, C = S0 & 255, c0 = p0, s0 = k0, e0 = y0 & 255, j = d0, i0 = (C + 2 + (q << 1) + i0 | 0) >>> 2 & 255, q = ((m0 & 255) + 2 + (C << 1) + q | 0) >>> 2 & 255, C = w0, h0 = v0 & 255, t0 = v0 << 24 | y0 << 16 & 16711680 | (T0 + 1 + g0 | 0) >>> 1 & 255 | E0 + 2 + (T0 << 1) + g0 << 6 & 65280;
              break;
            }
            case 2: {
              do
                if (Y0)
                  q = ((y0 & 255) + 4 + (v0 & 255) + (U0 & 255) + (g0 & 255) + (E0 & 255) + (m0 & 255) + (S0 & 255) + (t0 & 255) | 0) >>> 3;
                else {
                  if (L0) {
                    q = ((y0 & 255) + 2 + (v0 & 255) + (U0 & 255) + (g0 & 255) | 0) >>> 2;
                    break;
                  }
                  O0 ? q = ((E0 & 255) + 2 + (m0 & 255) + (S0 & 255) + (t0 & 255) | 0) >>> 2 : q = 128;
                }
              while (!1);
              t0 = _0(q & 255, 16843009) | 0, e0 = t0 & 255, h0 = t0 >>> 8 & 255, k0 = t0 >>> 16 & 255, w0 = t0 >>> 24 & 255, c0 = e0, s0 = e0, j = h0, i0 = k0, q = w0, C = h0, p0 = k0, d0 = w0;
              break;
            }
            case 0: {
              if (!C) {
                C = 1, q = 51;
                break e;
              }
              c0 = t0, s0 = t0, e0 = t0, j = S0, i0 = m0, q = E0, C = S0, p0 = m0, d0 = E0, h0 = S0, k0 = m0, w0 = E0, t0 = (m0 & 255) << 16 | (E0 & 255) << 24 | (S0 & 255) << 8 | t0 & 255;
              break;
            }
            case 1: {
              if (!L0) {
                C = 1, q = 51;
                break e;
              }
              q = _0(y0 & 255, 16843009) | 0, d0 = _0(v0 & 255, 16843009) | 0, w0 = _0(U0 & 255, 16843009) | 0, c0 = q & 255, s0 = d0 & 255, e0 = w0 & 255, j = q >>> 8 & 255, i0 = q >>> 16 & 255, q = q >>> 24 & 255, C = d0 >>> 8 & 255, p0 = d0 >>> 16 & 255, d0 = d0 >>> 24 & 255, h0 = w0 >>> 8 & 255, k0 = w0 >>> 16 & 255, w0 = w0 >>> 24 & 255, t0 = _0(g0 & 255, 16843009) | 0;
              break;
            }
            case 7: {
              if (!C) {
                C = 1, q = 51;
                break e;
              }
              y0 = (j | 0) == 0, e0 = t0 & 255, s0 = S0 & 255, m0 = m0 & 255, j = (m0 + 1 + s0 | 0) >>> 1 & 255, t0 = E0 & 255, k0 = t0 + 1 | 0, w0 = (k0 + m0 | 0) >>> 1 & 255, S0 = (y0 ? E0 : h0) & 255, k0 = (k0 + S0 | 0) >>> 1 & 255, q = m0 + 2 | 0, v0 = t0 + 2 | 0, m0 = (v0 + s0 + (m0 << 1) | 0) >>> 2, t0 = (q + (t0 << 1) + S0 | 0) >>> 2, g0 = (y0 ? E0 : i0) & 255, v0 = (v0 + g0 + (S0 << 1) | 0) >>> 2, c0 = (s0 + 1 + e0 | 0) >>> 1 & 255, s0 = (q + e0 + (s0 << 1) | 0) >>> 2 & 255, e0 = j, i0 = w0, q = k0, C = m0 & 255, p0 = t0 & 255, d0 = v0 & 255, h0 = w0, w0 = (S0 + 1 + g0 | 0) >>> 1 & 255, t0 = v0 << 16 & 16711680 | m0 & 255 | (S0 + 2 + ((y0 ? E0 : T0) & 255) + (g0 << 1) | 0) >>> 2 << 24 | t0 << 8 & 65280;
              break;
            }
            case 3: {
              if (!C) {
                C = 1, q = 51;
                break e;
              }
              e0 = (j | 0) == 0, c0 = S0 & 255, j = m0 & 255, s0 = j + 2 | 0, C = E0 & 255, S0 = C + 2 | 0, j = (S0 + c0 + (j << 1) | 0) >>> 2 & 255, w0 = (e0 ? E0 : h0) & 255, C = (s0 + (C << 1) + w0 | 0) >>> 2 & 255, g0 = (e0 ? E0 : i0) & 255, S0 = (S0 + g0 + (w0 << 1) | 0) >>> 2, h0 = S0 & 255, y0 = (e0 ? E0 : T0) & 255, T0 = (w0 + 2 + y0 + (g0 << 1) | 0) >>> 2, w0 = T0 & 255, E0 = (e0 ? E0 : k0) & 255, g0 = (g0 + 2 + E0 + (y0 << 1) | 0) >>> 2, c0 = (s0 + (t0 & 255) + (c0 << 1) | 0) >>> 2 & 255, s0 = j, e0 = C, i0 = C, q = h0, p0 = h0, d0 = w0, k0 = w0, w0 = g0 & 255, t0 = (y0 + 2 + (E0 * 3 | 0) | 0) >>> 2 << 24 | S0 & 255 | T0 << 8 & 65280 | g0 << 16 & 16711680;
              break;
            }
            case 5: {
              if (!(Y0 & (e0 | 0) != 0)) {
                C = 1, q = 51;
                break e;
              }
              e0 = w0 & 255, k0 = t0 & 255, h0 = (k0 + 1 + e0 | 0) >>> 1 & 255, B0 = S0 & 255, g0 = (B0 + 2 + (k0 << 1) + e0 | 0) >>> 2, S0 = y0 & 255, y0 = k0 + 2 | 0, t0 = (y0 + S0 + (e0 << 1) | 0) >>> 2, k0 = (B0 + 1 + k0 | 0) >>> 1 & 255, d0 = m0 & 255, y0 = ((B0 << 1) + d0 + y0 | 0) >>> 2, w0 = (d0 + 1 + B0 | 0) >>> 1 & 255, E0 = E0 & 255, T0 = v0 & 255, c0 = h0, s0 = t0 & 255, e0 = (T0 + 2 + (S0 << 1) + e0 | 0) >>> 2 & 255, j = k0, i0 = w0, q = (E0 + 1 + d0 | 0) >>> 1 & 255, C = g0 & 255, p0 = y0 & 255, d0 = (E0 + 2 + B0 + (d0 << 1) | 0) >>> 2 & 255, t0 = y0 << 24 | (S0 + 2 + (U0 & 255) + (T0 << 1) | 0) >>> 2 & 255 | g0 << 16 & 16711680 | t0 << 8 & 65280;
              break;
            }
            default: {
              if (!L0) {
                C = 1, q = 51;
                break e;
              }
              d0 = y0 & 255, q = v0 & 255, j = U0 & 255, i0 = (q + 1 + j | 0) >>> 1 & 255, t0 = g0 & 255, C = (q + 2 + (j << 1) + t0 | 0) >>> 2 & 255, p0 = (j + 1 + t0 | 0) >>> 1 & 255, h0 = (j + 2 + (t0 * 3 | 0) | 0) >>> 2 & 255, c0 = (d0 + 1 + q | 0) >>> 1 & 255, s0 = i0, e0 = p0, j = (d0 + 2 + (q << 1) + j | 0) >>> 2 & 255, q = C, d0 = h0, k0 = g0, w0 = g0, t0 = t0 << 8 | t0 | t0 << 16 | t0 << 24;
            }
          }
          if (g0 = (Q0 << 4) + H0 | 0, o[_ + g0 >> 2] = (i0 & 255) << 16 | (q & 255) << 24 | (j & 255) << 8 | c0 & 255, o[_ + (g0 + 16) >> 2] = (p0 & 255) << 16 | (d0 & 255) << 24 | (C & 255) << 8 | s0 & 255, o[_ + (g0 + 32) >> 2] = (k0 & 255) << 16 | (w0 & 255) << 24 | (h0 & 255) << 8 | e0 & 255, o[_ + (g0 + 48) >> 2] = t0, B2(_, l + (N0 << 6) + 328 | 0, N0), N0 = N0 + 1 | 0, N0 >>> 0 >= 16) {
            C = 0, q = 51;
            break;
          }
        }
        return (q | 0) == 51 ? (f0 = $0, C | 0) : 0;
      }
      function jr(u, _, l, P, T, q, C) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, q = q | 0, C = C | 0;
        var i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0;
        for (v0 = f0, j = u + 200 | 0, i0 = P2(u, o[j >> 2] | 0) | 0, e0 = (C | 0) != 0, (i0 | 0) != 0 & e0 && (t0 = (Y2(o[o[j >> 2] >> 2] | 0) | 0) == 2, i0 = t0 ? 0 : i0), j = u + 204 | 0, C = P2(u, o[j >> 2] | 0) | 0, (C | 0) != 0 & e0 ? (t0 = (Y2(o[o[j >> 2] >> 2] | 0) | 0) == 2, t0 = t0 ? 0 : C) : t0 = C, j = u + 212 | 0, C = P2(u, o[j >> 2] | 0) | 0, (C | 0) != 0 & e0 && (e0 = (Y2(o[o[j >> 2] >> 2] | 0) | 0) == 2, C = e0 ? 0 : C), A0 = (i0 | 0) != 0, B0 = (t0 | 0) != 0, w0 = A0 & B0, k0 = w0 & (C | 0) != 0, h0 = (i0 | 0) == 0, d0 = (t0 | 0) == 0, s0 = P, c0 = 16, p0 = 0; ; ) {
          if ((q | 0) == 1) {
            if (h0) {
              i0 = 1, C = 29;
              break;
            } else
              e0 = _, u = 8, j = T;
            for (; u = u + -1 | 0, n0[e0 >> 0] = n0[j >> 0] | 0, n0[e0 + 1 >> 0] = n0[j >> 0] | 0, n0[e0 + 2 >> 0] = n0[j >> 0] | 0, n0[e0 + 3 >> 0] = n0[j >> 0] | 0, n0[e0 + 4 >> 0] = n0[j >> 0] | 0, n0[e0 + 5 >> 0] = n0[j >> 0] | 0, n0[e0 + 6 >> 0] = n0[j >> 0] | 0, n0[e0 + 7 >> 0] = n0[j >> 0] | 0, u; )
              e0 = e0 + 8 | 0, j = j + 1 | 0;
          } else if ((q | 0) == 2) {
            if (d0) {
              i0 = 1, C = 29;
              break;
            } else
              e0 = s0, u = _, j = 8;
            for (; e0 = e0 + 1 | 0, j = j + -1 | 0, n0[u >> 0] = n0[e0 >> 0] | 0, n0[u + 8 >> 0] = n0[e0 >> 0] | 0, n0[u + 16 >> 0] = n0[e0 >> 0] | 0, n0[u + 24 >> 0] = n0[e0 >> 0] | 0, n0[u + 32 >> 0] = n0[e0 >> 0] | 0, n0[u + 40 >> 0] = n0[e0 >> 0] | 0, n0[u + 48 >> 0] = n0[e0 >> 0] | 0, n0[u + 56 >> 0] = n0[e0 >> 0] | 0, j; )
              u = u + 1 | 0;
          } else if (q) {
            if (!k0) {
              i0 = 1, C = 29;
              break;
            }
            for (e0 = l0[s0 + 8 >> 0] | 0, u = l0[T + 7 >> 0] | 0, i0 = l0[s0 >> 0] | 0, C = (((l0[s0 + 5 >> 0] | 0) - (l0[s0 + 3 >> 0] | 0) + ((l0[s0 + 6 >> 0] | 0) - (l0[s0 + 2 >> 0] | 0) << 1) + (((l0[s0 + 7 >> 0] | 0) - (l0[s0 + 1 >> 0] | 0) | 0) * 3 | 0) + (e0 - i0 << 2) | 0) * 17 | 0) + 16 >> 5, i0 = (((l0[T + 4 >> 0] | 0) - (l0[T + 2 >> 0] | 0) + (u - i0 << 2) + ((l0[T + 5 >> 0] | 0) - (l0[T + 1 >> 0] | 0) << 1) + (((l0[T + 6 >> 0] | 0) - (l0[T >> 0] | 0) | 0) * 3 | 0) | 0) * 17 | 0) + 16 >> 5, t0 = _0(C, -3) | 0, e0 = (u + e0 << 4) + 16 + (_0(i0, -3) | 0) | 0, u = _, j = 8; j = j + -1 | 0, P = e0 + t0 | 0, n0[u >> 0] = n0[(P >> 5) + 3984 >> 0] | 0, P = P + C | 0, n0[u + 1 >> 0] = n0[(P >> 5) + 3984 >> 0] | 0, P = P + C | 0, n0[u + 2 >> 0] = n0[(P >> 5) + 3984 >> 0] | 0, P = P + C | 0, n0[u + 3 >> 0] = n0[(P >> 5) + 3984 >> 0] | 0, P = P + C | 0, n0[u + 4 >> 0] = n0[(P >> 5) + 3984 >> 0] | 0, P = P + C | 0, n0[u + 5 >> 0] = n0[(P >> 5) + 3984 >> 0] | 0, P = P + C | 0, n0[u + 6 >> 0] = n0[(P >> 5) + 3984 >> 0] | 0, n0[u + 7 >> 0] = n0[(P + C >> 5) + 3984 >> 0] | 0, j; )
              e0 = e0 + i0 | 0, u = u + 8 | 0;
          } else {
            j = s0 + 1 | 0;
            do
              if (w0)
                e0 = ((l0[j >> 0] | 0) + 4 + (l0[s0 + 2 >> 0] | 0) + (l0[s0 + 3 >> 0] | 0) + (l0[s0 + 4 >> 0] | 0) + (l0[T >> 0] | 0) + (l0[T + 1 >> 0] | 0) + (l0[T + 2 >> 0] | 0) + (l0[T + 3 >> 0] | 0) | 0) >>> 3, u = ((l0[s0 + 5 >> 0] | 0) + 2 + (l0[s0 + 6 >> 0] | 0) + (l0[s0 + 7 >> 0] | 0) + (l0[s0 + 8 >> 0] | 0) | 0) >>> 2;
              else {
                if (B0) {
                  e0 = ((l0[j >> 0] | 0) + 2 + (l0[s0 + 2 >> 0] | 0) + (l0[s0 + 3 >> 0] | 0) + (l0[s0 + 4 >> 0] | 0) | 0) >>> 2, u = ((l0[s0 + 5 >> 0] | 0) + 2 + (l0[s0 + 6 >> 0] | 0) + (l0[s0 + 7 >> 0] | 0) + (l0[s0 + 8 >> 0] | 0) | 0) >>> 2;
                  break;
                }
                A0 ? (u = ((l0[T >> 0] | 0) + 2 + (l0[T + 1 >> 0] | 0) + (l0[T + 2 >> 0] | 0) + (l0[T + 3 >> 0] | 0) | 0) >>> 2, e0 = u) : (e0 = 128, u = 128);
              }
            while (!1);
            e0 = e0 & 255, t0 = u & 255, g2(_ | 0, e0 | 0, 4) | 0, g2(_ + 4 | 0, t0 | 0, 4) | 0, g2(_ + 8 | 0, e0 | 0, 4) | 0, g2(_ + 12 | 0, t0 | 0, 4) | 0, g2(_ + 16 | 0, e0 | 0, 4) | 0, g2(_ + 20 | 0, t0 | 0, 4) | 0, P = _ + 32 | 0, g2(_ + 24 | 0, e0 | 0, 4) | 0, g2(_ + 28 | 0, t0 | 0, 4) | 0, A0 ? (t0 = l0[T + 4 >> 0] | 0, e0 = l0[T + 5 >> 0] | 0, u = l0[T + 6 >> 0] | 0, j = l0[T + 7 >> 0] | 0, C = (t0 + 2 + e0 + u + j | 0) >>> 2, B0 ? (i0 = C, e0 = (t0 + 4 + e0 + u + j + (l0[s0 + 5 >> 0] | 0) + (l0[s0 + 6 >> 0] | 0) + (l0[s0 + 7 >> 0] | 0) + (l0[s0 + 8 >> 0] | 0) | 0) >>> 3) : (i0 = C, e0 = C)) : B0 ? (i0 = ((l0[j >> 0] | 0) + 2 + (l0[s0 + 2 >> 0] | 0) + (l0[s0 + 3 >> 0] | 0) + (l0[s0 + 4 >> 0] | 0) | 0) >>> 2, e0 = ((l0[s0 + 5 >> 0] | 0) + 2 + (l0[s0 + 6 >> 0] | 0) + (l0[s0 + 7 >> 0] | 0) + (l0[s0 + 8 >> 0] | 0) | 0) >>> 2) : (i0 = 128, e0 = 128), u = i0 & 255, t0 = e0 & 255, g2(P | 0, u | 0, 4) | 0, g2(_ + 36 | 0, t0 | 0, 4) | 0, g2(_ + 40 | 0, u | 0, 4) | 0, g2(_ + 44 | 0, t0 | 0, 4) | 0, g2(_ + 48 | 0, u | 0, 4) | 0, g2(_ + 52 | 0, t0 | 0, 4) | 0, g2(_ + 56 | 0, u | 0, 4) | 0, g2(_ + 60 | 0, t0 | 0, 4) | 0;
          }
          if (B2(_, l, c0), P = c0 | 1, B2(_, l + 64 | 0, P), B2(_, l + 128 | 0, P + 1 | 0), B2(_, l + 192 | 0, c0 | 3), p0 = p0 + 1 | 0, p0 >>> 0 >= 2) {
            i0 = 0, C = 29;
            break;
          } else
            s0 = s0 + 9 | 0, c0 = c0 + 4 | 0, _ = _ + 64 | 0, T = T + 8 | 0, l = l + 256 | 0;
        }
        return (C | 0) == 29 ? (f0 = v0, i0 | 0) : 0;
      }
      function B2(u, _, l) {
        u = u | 0, _ = _ | 0, l = l | 0;
        var P = 0, T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0;
        if (T = f0, P = o[_ >> 2] | 0, (P | 0) == 16777215) {
          f0 = T;
          return;
        }
        j = l >>> 0 < 16, i0 = j ? 16 : 8, j = j ? l : l & 3, j = (_0(o[3408 + (j << 2) >> 2] | 0, i0) | 0) + (o[3344 + (j << 2) >> 2] | 0) | 0, e0 = u + j | 0, s0 = o[_ + 4 >> 2] | 0, q = u + (j + 1) | 0, l = l0[q >> 0] | 0, n0[e0 >> 0] = n0[3472 + (P + 512 + (l0[e0 >> 0] | 0)) >> 0] | 0, e0 = o[_ + 8 >> 2] | 0, C = u + (j + 2) | 0, t0 = l0[C >> 0] | 0, n0[q >> 0] = n0[3472 + (s0 + 512 + l) >> 0] | 0, P = u + (j + 3) | 0, q = n0[3472 + ((o[_ + 12 >> 2] | 0) + 512 + (l0[P >> 0] | 0)) >> 0] | 0, n0[C >> 0] = n0[3472 + (e0 + 512 + t0) >> 0] | 0, n0[P >> 0] = q, P = j + i0 | 0, j = u + P | 0, q = o[_ + 20 >> 2] | 0, C = u + (P + 1) | 0, t0 = l0[C >> 0] | 0, n0[j >> 0] = n0[3472 + ((o[_ + 16 >> 2] | 0) + 512 + (l0[j >> 0] | 0)) >> 0] | 0, j = o[_ + 24 >> 2] | 0, e0 = u + (P + 2) | 0, l = l0[e0 >> 0] | 0, n0[C >> 0] = n0[3472 + (q + 512 + t0) >> 0] | 0, C = u + (P + 3) | 0, t0 = n0[3472 + ((o[_ + 28 >> 2] | 0) + 512 + (l0[C >> 0] | 0)) >> 0] | 0, n0[e0 >> 0] = n0[3472 + (j + 512 + l) >> 0] | 0, n0[C >> 0] = t0, P = P + i0 | 0, C = u + P | 0, t0 = o[_ + 36 >> 2] | 0, e0 = u + (P + 1) | 0, l = l0[e0 >> 0] | 0, n0[C >> 0] = n0[3472 + ((o[_ + 32 >> 2] | 0) + 512 + (l0[C >> 0] | 0)) >> 0] | 0, C = o[_ + 40 >> 2] | 0, j = u + (P + 2) | 0, q = l0[j >> 0] | 0, n0[e0 >> 0] = n0[3472 + (t0 + 512 + l) >> 0] | 0, e0 = u + (P + 3) | 0, l = n0[3472 + ((o[_ + 44 >> 2] | 0) + 512 + (l0[e0 >> 0] | 0)) >> 0] | 0, n0[j >> 0] = n0[3472 + (C + 512 + q) >> 0] | 0, n0[e0 >> 0] = l, P = P + i0 | 0, i0 = u + P | 0, e0 = o[_ + 52 >> 2] | 0, l = u + (P + 1) | 0, j = l0[l >> 0] | 0, n0[i0 >> 0] = n0[3472 + ((o[_ + 48 >> 2] | 0) + 512 + (l0[i0 >> 0] | 0)) >> 0] | 0, i0 = o[_ + 56 >> 2] | 0, q = u + (P + 2) | 0, C = l0[q >> 0] | 0, n0[l >> 0] = n0[3472 + (e0 + 512 + j) >> 0] | 0, P = u + (P + 3) | 0, l = n0[3472 + ((o[_ + 60 >> 2] | 0) + 512 + (l0[P >> 0] | 0)) >> 0] | 0, n0[q >> 0] = n0[3472 + (i0 + 512 + C) >> 0] | 0, n0[P >> 0] = l, f0 = T;
      }
      function oe(u, _, l, P) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0;
        var T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0;
        c0 = f0, i0 = u + -1 | 0, C = n0[u + 1 >> 0] | 0, j = l0[i0 >> 0] | 0, e0 = l0[u >> 0] | 0, p0 = j - e0 | 0, s0 = l + 4 | 0;
        do
          if (((p0 | 0) > -1 ? p0 : 0 - p0 | 0) >>> 0 < (o[s0 >> 2] | 0) >>> 0 && (t0 = l0[u + -2 >> 0] | 0, p0 = t0 - j | 0, q = o[l + 8 >> 2] | 0, ((p0 | 0) > -1 ? p0 : 0 - p0 | 0) >>> 0 < q >>> 0) && (T = C & 255, C = T - e0 | 0, ((C | 0) > -1 ? C : 0 - C | 0) >>> 0 < q >>> 0))
            if (_ >>> 0 < 4) {
              C = l0[(o[l >> 2] | 0) + (_ + -1) >> 0] | 0, C = l2(
                ~C,
                C + 1 | 0,
                4 - T + (e0 - j << 2) + t0 >> 3
              ) | 0, t0 = n0[3472 + ((e0 | 512) - C) >> 0] | 0, n0[i0 >> 0] = n0[3472 + ((j | 512) + C) >> 0] | 0, n0[u >> 0] = t0;
              break;
            } else {
              n0[i0 >> 0] = (j + 2 + T + (t0 << 1) | 0) >>> 2, n0[u >> 0] = (e0 + 2 + (T << 1) + t0 | 0) >>> 2;
              break;
            }
        while (!1);
        if (i0 = u + P | 0, j = u + (P + -1) | 0, t0 = l0[j >> 0] | 0, e0 = l0[i0 >> 0] | 0, C = t0 - e0 | 0, ((C | 0) > -1 ? C : 0 - C | 0) >>> 0 >= (o[s0 >> 2] | 0) >>> 0) {
          f0 = c0;
          return;
        }
        if (C = l0[u + (P + -2) >> 0] | 0, s0 = C - t0 | 0, q = o[l + 8 >> 2] | 0, ((s0 | 0) > -1 ? s0 : 0 - s0 | 0) >>> 0 >= q >>> 0) {
          f0 = c0;
          return;
        }
        if (T = l0[u + (P + 1) >> 0] | 0, P = T - e0 | 0, ((P | 0) > -1 ? P : 0 - P | 0) >>> 0 >= q >>> 0) {
          f0 = c0;
          return;
        }
        if (_ >>> 0 < 4) {
          u = l0[(o[l >> 2] | 0) + (_ + -1) >> 0] | 0, u = l2(
            ~u,
            u + 1 | 0,
            4 - T + (e0 - t0 << 2) + C >> 3
          ) | 0, P = n0[3472 + ((e0 | 512) - u) >> 0] | 0, n0[j >> 0] = n0[3472 + ((t0 | 512) + u) >> 0] | 0, n0[i0 >> 0] = P, f0 = c0;
          return;
        } else {
          n0[j >> 0] = (t0 + 2 + T + (C << 1) | 0) >>> 2, n0[i0 >> 0] = (e0 + 2 + (T << 1) + C | 0) >>> 2, f0 = c0;
          return;
        }
      }
      function g1(u, _, l, P) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0;
        var T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0;
        if (w0 = f0, _ >>> 0 < 4) {
          for (e0 = l0[(o[l >> 2] | 0) + (_ + -1) >> 0] | 0, T = e0 + 1 | 0, c0 = 0 - P | 0, _ = l + 4 | 0, s0 = c0 << 1, t0 = l + 8 | 0, e0 = ~e0, q = 8; j = u + c0 | 0, l = n0[u + P >> 0] | 0, i0 = l0[j >> 0] | 0, C = l0[u >> 0] | 0, p0 = i0 - C | 0, ((p0 | 0) > -1 ? p0 : 0 - p0 | 0) >>> 0 < (o[_ >> 2] | 0) >>> 0 && (h0 = l0[u + s0 >> 0] | 0, p0 = h0 - i0 | 0, d0 = o[t0 >> 2] | 0, ((p0 | 0) > -1 ? p0 : 0 - p0 | 0) >>> 0 < d0 >>> 0) && (k0 = l & 255, l = k0 - C | 0, ((l | 0) > -1 ? l : 0 - l | 0) >>> 0 < d0 >>> 0) && (p0 = l2(
            e0,
            T,
            4 - k0 + (C - i0 << 2) + h0 >> 3
          ) | 0, l = n0[3472 + ((C | 512) - p0) >> 0] | 0, n0[j >> 0] = n0[3472 + ((i0 | 512) + p0) >> 0] | 0, n0[u >> 0] = l), q = q + -1 | 0, q; )
            u = u + 1 | 0;
          f0 = w0;
          return;
        } else {
          for (t0 = 0 - P | 0, j = l + 4 | 0, e0 = t0 << 1, l = l + 8 | 0, i0 = 8; T = u + t0 | 0, _ = n0[u + P >> 0] | 0, q = l0[T >> 0] | 0, C = l0[u >> 0] | 0, d0 = q - C | 0, ((d0 | 0) > -1 ? d0 : 0 - d0 | 0) >>> 0 < (o[j >> 2] | 0) >>> 0 && (s0 = l0[u + e0 >> 0] | 0, d0 = s0 - q | 0, c0 = o[l >> 2] | 0, ((d0 | 0) > -1 ? d0 : 0 - d0 | 0) >>> 0 < c0 >>> 0) && (p0 = _ & 255, _ = p0 - C | 0, ((_ | 0) > -1 ? _ : 0 - _ | 0) >>> 0 < c0 >>> 0) && (n0[T >> 0] = (q + 2 + p0 + (s0 << 1) | 0) >>> 2, n0[u >> 0] = (C + 2 + (p0 << 1) + s0 | 0) >>> 2), i0 = i0 + -1 | 0, i0; )
            u = u + 1 | 0;
          f0 = w0;
          return;
        }
      }
      function se(u, _, l, P) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0;
        var T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0;
        if (h0 = f0, p0 = l0[(o[l >> 2] | 0) + (_ + -1) >> 0] | 0, d0 = p0 + 1 | 0, i0 = 0 - P | 0, T = l + 4 | 0, c0 = i0 << 1, _ = l + 8 | 0, p0 = ~p0, i0 = u + i0 | 0, j = n0[u + P >> 0] | 0, C = l0[i0 >> 0] | 0, q = l0[u >> 0] | 0, k0 = C - q | 0, l = o[T >> 2] | 0, ((k0 | 0) > -1 ? k0 : 0 - k0 | 0) >>> 0 < l >>> 0 && (t0 = l0[u + c0 >> 0] | 0, k0 = t0 - C | 0, e0 = o[_ >> 2] | 0, ((k0 | 0) > -1 ? k0 : 0 - k0 | 0) >>> 0 < e0 >>> 0) && (s0 = j & 255, j = s0 - q | 0, ((j | 0) > -1 ? j : 0 - j | 0) >>> 0 < e0 >>> 0) && (s0 = l2(p0, d0, 4 - s0 + (q - C << 2) + t0 >> 3) | 0, l = n0[3472 + ((q | 512) - s0) >> 0] | 0, n0[i0 >> 0] = n0[3472 + ((C | 512) + s0) >> 0] | 0, n0[u >> 0] = l, l = o[T >> 2] | 0), j = u + 1 | 0, q = u + (1 - P) | 0, C = l0[q >> 0] | 0, i0 = l0[j >> 0] | 0, s0 = C - i0 | 0, ((s0 | 0) > -1 ? s0 : 0 - s0 | 0) >>> 0 >= l >>> 0) {
          f0 = h0;
          return;
        }
        if (T = l0[u + (c0 | 1) >> 0] | 0, s0 = T - C | 0, l = o[_ >> 2] | 0, ((s0 | 0) > -1 ? s0 : 0 - s0 | 0) >>> 0 >= l >>> 0) {
          f0 = h0;
          return;
        }
        if (_ = l0[u + (P + 1) >> 0] | 0, s0 = _ - i0 | 0, ((s0 | 0) > -1 ? s0 : 0 - s0 | 0) >>> 0 >= l >>> 0) {
          f0 = h0;
          return;
        }
        t0 = l2(p0, d0, 4 - _ + (i0 - C << 2) + T >> 3) | 0, s0 = n0[3472 + ((i0 | 512) - t0) >> 0] | 0, n0[q >> 0] = n0[3472 + ((C | 512) + t0) >> 0] | 0, n0[j >> 0] = s0, f0 = h0;
      }
      function A1(u, _, l) {
        u = u | 0, _ = _ | 0, l = l | 0;
        var P = 0, T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0;
        if (h0 = f0, p0 = o[_ + 4 >> 2] | 0, d0 = o[_ + 8 >> 2] | 0, !((l | 0) == 0 | (l | 0) == 5) && (o[u + 3384 >> 2] | 0) == 0)
          T = 0;
        else {
          q = u + 1220 | 0, P = 0;
          do
            T = pe(q, P) | 0, P = P + 1 | 0;
          while (P >>> 0 < 16 & (T | 0) == 0);
        }
        if (e0 = u + 1176 | 0, s0 = o[e0 >> 2] | 0, s0) {
          t0 = o[u + 1212 >> 2] | 0, P = 0, i0 = 0, q = 0;
          do {
            if (o[t0 + (i0 * 216 | 0) + 196 >> 2] | 0) break;
            i0 = i0 + 1 | 0, P = P + 1 | 0, c0 = (P | 0) == (p0 | 0), q = (c0 & 1) + q | 0, P = c0 ? 0 : P;
          } while (i0 >>> 0 < s0 >>> 0);
          if ((i0 | 0) != (s0 | 0)) {
            if (c0 = u + 1212 | 0, s0 = o[c0 >> 2] | 0, i0 = _0(q, p0) | 0, P) {
              e0 = u + 1204 | 0, C = P;
              do
                C = C + -1 | 0, t0 = C + i0 | 0, Ge(s0 + (t0 * 216 | 0) | 0, _, q, C, l, T), o[s0 + (t0 * 216 | 0) + 196 >> 2] = 1, o[e0 >> 2] = (o[e0 >> 2] | 0) + 1;
              while ((C | 0) != 0);
            }
            if (P = P + 1 | 0, P >>> 0 < p0 >>> 0) {
              t0 = u + 1204 | 0;
              do
                e0 = P + i0 | 0, j = s0 + (e0 * 216 | 0) + 196 | 0, o[j >> 2] | 0 || (Ge(
                  s0 + (e0 * 216 | 0) | 0,
                  _,
                  q,
                  P,
                  l,
                  T
                ), o[j >> 2] = 1, o[t0 >> 2] = (o[t0 >> 2] | 0) + 1), P = P + 1 | 0;
              while ((P | 0) != (p0 | 0));
            }
            if (q) {
              if (p0) {
                s0 = q + -1 | 0, C = _0(s0, p0) | 0, P = u + 1204 | 0, e0 = 0 - p0 | 0, j = 0;
                do {
                  for (t0 = s0, i0 = (o[c0 >> 2] | 0) + ((j + C | 0) * 216 | 0) | 0; Ge(i0, _, t0, j, l, T), o[i0 + 196 >> 2] = 1, o[P >> 2] = (o[P >> 2] | 0) + 1, t0; )
                    t0 = t0 + -1 | 0, i0 = i0 + (e0 * 216 | 0) | 0;
                  j = j + 1 | 0;
                } while ((j | 0) != (p0 | 0));
              }
            } else q = 0;
            if (q = q + 1 | 0, q >>> 0 >= d0 >>> 0 || (t0 = u + 1204 | 0, !p0))
              return f0 = h0, 0;
            do {
              P = o[c0 >> 2] | 0, e0 = _0(q, p0) | 0, j = 0;
              do
                C = j + e0 | 0, i0 = P + (C * 216 | 0) + 196 | 0, o[i0 >> 2] | 0 || (Ge(
                  P + (C * 216 | 0) | 0,
                  _,
                  q,
                  j,
                  l,
                  T
                ), o[i0 >> 2] = 1, o[t0 >> 2] = (o[t0 >> 2] | 0) + 1), j = j + 1 | 0;
              while ((j | 0) != (p0 | 0));
              q = q + 1 | 0;
            } while ((q | 0) != (d0 | 0));
            return f0 = h0, 0;
          }
        }
        if ((l | 0) == 2 | (l | 0) == 7 ? (o[u + 3384 >> 2] | 0) == 0 | (T | 0) == 0 ? q = 13 : q = 14 : T ? q = 14 : q = 13, (q | 0) == 13 ? U2(o[_ >> 2] | 0, 128, _0(p0 * 384 | 0, d0) | 0) : (q | 0) == 14 && Qe(o[_ >> 2] | 0, T, _0(p0 * 384 | 0, d0) | 0), q = o[e0 >> 2] | 0, o[u + 1204 >> 2] = q, !q)
          return f0 = h0, 0;
        P = o[u + 1212 >> 2] | 0, T = 0;
        do
          o[P + (T * 216 | 0) + 8 >> 2] = 1, T = T + 1 | 0;
        while (T >>> 0 < q >>> 0);
        return f0 = h0, 0;
      }
      function Ge(u, _, l, P, T, q) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, q = q | 0;
        var C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0, y0 = 0, S0 = 0, E0 = 0, T0 = 0, g0 = 0, U0 = 0, L0 = 0, O0 = 0, Y0 = 0, H0 = 0, Q0 = 0, N0 = 0, J0 = 0, $0 = 0, a2 = 0, V2 = 0, F2 = 0, H2 = 0, t2 = 0, m2 = 0, x0 = 0, n2 = 0, f2 = 0, z2 = 0, $2 = 0, w2 = 0, j0 = 0, Pe = 0, y2 = 0, fe = 0, G2 = 0, j2 = 0, I2 = 0, ue = 0, i2 = 0, le = 0, we = 0, Z2 = 0, he = 0, T2 = 0, c2 = 0, W2 = 0, J2 = 0, C2 = 0, W0 = 0, O2 = 0, Q2 = 0;
        O2 = f0, f0 = f0 + 480 | 0, C2 = O2 + 96 | 0, W0 = O2 + 32 | 0, j = O2 + 24 | 0, e0 = O2, c2 = o[_ + 4 >> 2] | 0, k0 = o[_ + 8 >> 2] | 0, d1(_, (_0(c2, l) | 0) + P | 0), s0 = o[_ >> 2] | 0, C = l << 4, i0 = P << 4, t0 = (_0(l << 8, c2) | 0) + i0 | 0, o[u + 20 >> 2] = 40, o[u + 8 >> 2] = 0, o[u >> 2] = 6, o[u + 12 >> 2] = 0, o[u + 16 >> 2] = 0, o[u + 24 >> 2] = 0;
        do
          if ((T | 0) == 2 | (T | 0) == 7) U2(C2, 0, 384);
          else {
            if (o[j >> 2] = 0, o[e0 + 4 >> 2] = c2, o[e0 + 8 >> 2] = k0, o[e0 >> 2] = q, !q) {
              U2(C2, 0, 384);
              break;
            }
            R2(C2, j, e0, i0, C, 0, 0, 16, 16), Le(_, C2), f0 = O2;
            return;
          }
        while (!1);
        U2(W0, 0, 64), (l | 0) != 0 && (o[u + ((0 - c2 | 0) * 216 | 0) + 196 >> 2] | 0) != 0 ? (w0 = t0 - (c2 << 4) | 0, g0 = w0 | 1, T0 = w0 | 3, g0 = (l0[s0 + g0 >> 0] | 0) + (l0[s0 + w0 >> 0] | 0) + (l0[s0 + (g0 + 1) >> 0] | 0) + (l0[s0 + T0 >> 0] | 0) | 0, j0 = w0 | 7, T0 = (l0[s0 + (T0 + 2) >> 0] | 0) + (l0[s0 + (T0 + 1) >> 0] | 0) + (l0[s0 + (T0 + 3) >> 0] | 0) + (l0[s0 + j0 >> 0] | 0) | 0, U0 = (l0[s0 + (j0 + 2) >> 0] | 0) + (l0[s0 + (j0 + 1) >> 0] | 0) + (l0[s0 + (j0 + 3) >> 0] | 0) + (l0[s0 + (j0 + 4) >> 0] | 0) | 0, w0 = (l0[s0 + (j0 + 6) >> 0] | 0) + (l0[s0 + (j0 + 5) >> 0] | 0) + (l0[s0 + (j0 + 7) >> 0] | 0) + (l0[s0 + (w0 | 15) >> 0] | 0) | 0, j0 = T0 + g0 | 0, o[W0 >> 2] = U0 + j0 + (o[W0 >> 2] | 0) + w0, d0 = W0 + 4 | 0, o[d0 >> 2] = j0 - U0 - w0 + (o[d0 >> 2] | 0), d0 = 1) : (g0 = 0, T0 = 0, U0 = 0, w0 = 0, d0 = 0), (k0 + -1 | 0) != (l | 0) && (o[u + (c2 * 216 | 0) + 196 >> 2] | 0) != 0 ? (m0 = t0 + (c2 << 8) | 0, A0 = m0 | 1, B0 = m0 | 3, A0 = (l0[s0 + A0 >> 0] | 0) + (l0[s0 + m0 >> 0] | 0) + (l0[s0 + (A0 + 1) >> 0] | 0) + (l0[s0 + B0 >> 0] | 0) | 0, p0 = m0 | 7, B0 = (l0[s0 + (B0 + 2) >> 0] | 0) + (l0[s0 + (B0 + 1) >> 0] | 0) + (l0[s0 + (B0 + 3) >> 0] | 0) + (l0[s0 + p0 >> 0] | 0) | 0, v0 = (l0[s0 + (p0 + 2) >> 0] | 0) + (l0[s0 + (p0 + 1) >> 0] | 0) + (l0[s0 + (p0 + 3) >> 0] | 0) + (l0[s0 + (p0 + 4) >> 0] | 0) | 0, m0 = (l0[s0 + (p0 + 6) >> 0] | 0) + (l0[s0 + (p0 + 5) >> 0] | 0) + (l0[s0 + (p0 + 7) >> 0] | 0) + (l0[s0 + (m0 | 15) >> 0] | 0) | 0, p0 = B0 + A0 | 0, o[W0 >> 2] = v0 + p0 + (o[W0 >> 2] | 0) + m0, h0 = W0 + 4 | 0, o[h0 >> 2] = p0 - v0 - m0 + (o[h0 >> 2] | 0), h0 = 1, p0 = d0 + 1 | 0) : (h0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0, p0 = d0), (P | 0) != 0 && (o[u + -20 >> 2] | 0) != 0 ? (w2 = t0 + -1 | 0, j0 = c2 << 4, q = c2 << 5, T2 = c2 * 48 | 0, E0 = (l0[s0 + (w2 + j0) >> 0] | 0) + (l0[s0 + w2 >> 0] | 0) + (l0[s0 + (w2 + q) >> 0] | 0) + (l0[s0 + (w2 + T2) >> 0] | 0) | 0, T = c2 << 6, w2 = w2 + T | 0, S0 = (l0[s0 + (w2 + j0) >> 0] | 0) + (l0[s0 + w2 >> 0] | 0) + (l0[s0 + (w2 + q) >> 0] | 0) + (l0[s0 + (w2 + T2) >> 0] | 0) | 0, w2 = w2 + T | 0, y0 = (l0[s0 + (w2 + j0) >> 0] | 0) + (l0[s0 + w2 >> 0] | 0) + (l0[s0 + (w2 + q) >> 0] | 0) + (l0[s0 + (w2 + T2) >> 0] | 0) | 0, T = w2 + T | 0, T2 = (l0[s0 + (T + j0) >> 0] | 0) + (l0[s0 + T >> 0] | 0) + (l0[s0 + (T + q) >> 0] | 0) + (l0[s0 + (T + T2) >> 0] | 0) | 0, T = S0 + E0 | 0, o[W0 >> 2] = y0 + T + (o[W0 >> 2] | 0) + T2, q = W0 + 16 | 0, o[q >> 2] = T - y0 - T2 + (o[q >> 2] | 0), q = p0 + 1 | 0, T = 1) : (q = p0, E0 = 0, S0 = 0, y0 = 0, T2 = 0, T = 0);
        do
          if ((c2 + -1 | 0) != (P | 0) && (o[u + 412 >> 2] | 0) != 0) {
            if (j0 = t0 + 16 | 0, e0 = c2 << 4, j = c2 << 5, t0 = c2 * 48 | 0, u = (l0[s0 + (j0 + e0) >> 0] | 0) + (l0[s0 + j0 >> 0] | 0) + (l0[s0 + (j0 + j) >> 0] | 0) + (l0[s0 + (j0 + t0) >> 0] | 0) | 0, c0 = c2 << 6, j0 = j0 + c0 | 0, i0 = (l0[s0 + (j0 + e0) >> 0] | 0) + (l0[s0 + j0 >> 0] | 0) + (l0[s0 + (j0 + j) >> 0] | 0) + (l0[s0 + (j0 + t0) >> 0] | 0) | 0, j0 = j0 + c0 | 0, C = (l0[s0 + (j0 + e0) >> 0] | 0) + (l0[s0 + j0 >> 0] | 0) + (l0[s0 + (j0 + j) >> 0] | 0) + (l0[s0 + (j0 + t0) >> 0] | 0) | 0, c0 = j0 + c0 | 0, t0 = (l0[s0 + (c0 + e0) >> 0] | 0) + (l0[s0 + c0 >> 0] | 0) + (l0[s0 + (c0 + j) >> 0] | 0) + (l0[s0 + (c0 + t0) >> 0] | 0) | 0, s0 = q + 1 | 0, c0 = T + 1 | 0, q = i0 + u | 0, o[W0 >> 2] = C + q + (o[W0 >> 2] | 0) + t0, j = W0 + 16 | 0, q = q - C - t0 + (o[j >> 2] | 0) | 0, o[j >> 2] = q, j = (p0 | 0) == 0, e0 = (T | 0) != 0, j & e0)
              o[W0 + 4 >> 2] = y0 + T2 + S0 + E0 - u - i0 - C - t0 >> 5;
            else if (!j) {
              j = 1, q = s0, T = c0, i0 = 21;
              break;
            }
            j = 1, t0 = (d0 | 0) != 0, u = (h0 | 0) != 0, T = c0, i0 = 27;
          } else i0 = 17;
        while (!1);
        (i0 | 0) == 17 && (e0 = (T | 0) != 0, p0 ? (j = 0, i0 = 21) : (j = 0, s0 = q, i0 = 23)), (i0 | 0) == 21 && (s0 = W0 + 4 | 0, o[s0 >> 2] = o[s0 >> 2] >> p0 + 3, s0 = q, i0 = 23);
        do
          if ((i0 | 0) == 23) {
            if (q = (T | 0) == 0, t0 = (d0 | 0) != 0, u = (h0 | 0) != 0, q & t0 & u) {
              o[W0 + 16 >> 2] = U0 + w0 + T0 + g0 - m0 - v0 - B0 - A0 >> 5, J2 = j, T = s0, W2 = e0, t0 = 1, u = 1;
              break;
            }
            q ? (J2 = j, T = s0, W2 = e0) : (q = o[W0 + 16 >> 2] | 0, i0 = 27);
          }
        while (!1);
        for ((i0 | 0) == 27 && (o[W0 + 16 >> 2] = q >> T + 3, J2 = j, T = s0, W2 = e0), (T | 0) == 1 ? o[W0 >> 2] = o[W0 >> 2] >> 4 : (T | 0) == 2 ? o[W0 >> 2] = o[W0 >> 2] >> 5 : (T | 0) == 3 ? o[W0 >> 2] = (o[W0 >> 2] | 0) * 21 >> 10 : o[W0 >> 2] = o[W0 >> 2] >> 6, x1(W0), e0 = 0, q = C2, j = W0; T = o[j + ((e0 >>> 2 & 3) << 2) >> 2] | 0, (T | 0) < 0 ? T = 0 : T = (T | 0) > 255 ? -1 : T & 255, n0[q >> 0] = T, T = e0 + 1 | 0, (T | 0) != 256; )
          e0 = T, q = q + 1 | 0, j = (T & 63 | 0) == 0 ? j + 16 | 0 : j;
        for (Q2 = _0(k0, c2) | 0, n2 = c2 << 3, $2 = 0 - n2 | 0, L0 = $2 | 1, w2 = L0 + 1 | 0, j0 = $2 | 3, Pe = j0 + 1 | 0, y2 = j0 + 2 | 0, fe = j0 + 3 | 0, G2 = $2 | 7, f2 = W0 + 4 | 0, Z2 = c2 << 6, O0 = Z2 | 1, j2 = O0 + 1 | 0, I2 = Z2 | 3, ue = I2 + 1 | 0, i2 = I2 + 2 | 0, le = I2 + 3 | 0, we = Z2 | 7, Y0 = n2 + -1 | 0, x0 = c2 << 4, H0 = x0 + -1 | 0, Q0 = H0 + n2 | 0, N0 = H0 + x0 | 0, J0 = N0 + n2 | 0, $0 = N0 + x0 | 0, a2 = $0 + n2 | 0, z2 = W0 + 16 | 0, V2 = n2 + 8 | 0, F2 = x0 | 8, H2 = F2 + n2 | 0, t2 = F2 + x0 | 0, m2 = t2 + n2 | 0, x0 = t2 + x0 | 0, n2 = x0 + n2 | 0, he = Q2 << 6, c0 = g0, s0 = T0, T = U0, h0 = w0, e0 = A0, q = B0, i0 = v0, k0 = m0, U0 = 0, j = E0, C = S0, p0 = y0, d0 = T2, g0 = (o[_ >> 2] | 0) + ((_0(l << 6, c2) | 0) + (P << 3) + (Q2 << 8)) | 0; ; ) {
          U2(W0, 0, 64), t0 ? (c0 = (l0[g0 + L0 >> 0] | 0) + (l0[g0 + $2 >> 0] | 0) | 0, s0 = (l0[g0 + j0 >> 0] | 0) + (l0[g0 + w2 >> 0] | 0) | 0, m0 = (l0[g0 + y2 >> 0] | 0) + (l0[g0 + Pe >> 0] | 0) | 0, y0 = (l0[g0 + G2 >> 0] | 0) + (l0[g0 + fe >> 0] | 0) | 0, h0 = s0 + c0 | 0, o[W0 >> 2] = m0 + h0 + (o[W0 >> 2] | 0) + y0, o[f2 >> 2] = h0 - m0 - y0 + (o[f2 >> 2] | 0), h0 = 1) : (m0 = T, y0 = h0, h0 = 0), u ? (S0 = (l0[g0 + O0 >> 0] | 0) + (l0[g0 + Z2 >> 0] | 0) | 0, E0 = (l0[g0 + I2 >> 0] | 0) + (l0[g0 + j2 >> 0] | 0) | 0, T0 = (l0[g0 + i2 >> 0] | 0) + (l0[g0 + ue >> 0] | 0) | 0, k0 = (l0[g0 + we >> 0] | 0) + (l0[g0 + le >> 0] | 0) | 0, T = E0 + S0 | 0, o[W0 >> 2] = T0 + T + (o[W0 >> 2] | 0) + k0, o[f2 >> 2] = T - T0 - k0 + (o[f2 >> 2] | 0), T = h0 + 1 | 0) : (S0 = e0, E0 = q, T0 = i0, T = h0), W2 ? (w0 = (l0[g0 + Y0 >> 0] | 0) + (l0[g0 + -1 >> 0] | 0) | 0, A0 = (l0[g0 + Q0 >> 0] | 0) + (l0[g0 + H0 >> 0] | 0) | 0, B0 = (l0[g0 + J0 >> 0] | 0) + (l0[g0 + N0 >> 0] | 0) | 0, v0 = (l0[g0 + a2 >> 0] | 0) + (l0[g0 + $0 >> 0] | 0) | 0, h0 = A0 + w0 | 0, o[W0 >> 2] = B0 + h0 + (o[W0 >> 2] | 0) + v0, o[z2 >> 2] = h0 - B0 - v0 + (o[z2 >> 2] | 0), h0 = T + 1 | 0, d0 = 1) : (h0 = T, w0 = j, A0 = C, B0 = p0, v0 = d0, d0 = 0);
          do
            if (J2)
              if (i0 = (l0[g0 + V2 >> 0] | 0) + (l0[g0 + 8 >> 0] | 0) | 0, j = (l0[g0 + H2 >> 0] | 0) + (l0[g0 + F2 >> 0] | 0) | 0, q = (l0[g0 + m2 >> 0] | 0) + (l0[g0 + t2 >> 0] | 0) | 0, e0 = (l0[g0 + n2 >> 0] | 0) + (l0[g0 + x0 >> 0] | 0) | 0, h0 = h0 + 1 | 0, d0 = d0 + 1 | 0, C = j + i0 | 0, o[W0 >> 2] = q + C + (o[W0 >> 2] | 0) + e0, C = C - q - e0 + (o[z2 >> 2] | 0) | 0, o[z2 >> 2] = C, p0 = (T | 0) == 0, p0 & W2) {
                o[f2 >> 2] = B0 + v0 + A0 + w0 - i0 - j - q - e0 >> 4, i0 = 54;
                break;
              } else if (p0) {
                i0 = 54;
                break;
              } else {
                i0 = 49;
                break;
              }
            else T ? i0 = 49 : (p0 = d0, i0 = 50);
          while (!1);
          (i0 | 0) == 49 && (o[f2 >> 2] = o[f2 >> 2] >> T + 2, p0 = d0, i0 = 50);
          do
            if ((i0 | 0) == 50) {
              if (i0 = 0, d0 = (p0 | 0) == 0, d0 & t0 & u) {
                o[z2 >> 2] = m0 + y0 + s0 + c0 - k0 - T0 - E0 - S0 >> 4;
                break;
              }
              d0 || (C = o[z2 >> 2] | 0, d0 = p0, i0 = 54);
            }
          while (!1);
          for ((i0 | 0) == 54 && (o[z2 >> 2] = C >> d0 + 2), (h0 | 0) == 1 ? o[W0 >> 2] = o[W0 >> 2] >> 3 : (h0 | 0) == 2 ? o[W0 >> 2] = o[W0 >> 2] >> 4 : (h0 | 0) == 3 ? o[W0 >> 2] = (o[W0 >> 2] | 0) * 21 >> 9 : o[W0 >> 2] = o[W0 >> 2] >> 5, x1(W0), d0 = 0, p0 = C2 + ((U0 << 6) + 256) | 0, C = W0; h0 = o[C + ((d0 >>> 1 & 3) << 2) >> 2] | 0, (h0 | 0) < 0 ? h0 = 0 : h0 = (h0 | 0) > 255 ? -1 : h0 & 255, n0[p0 >> 0] = h0, h0 = d0 + 1 | 0, (h0 | 0) != 64; )
            d0 = h0, p0 = p0 + 1 | 0, C = (h0 & 15 | 0) == 0 ? C + 16 | 0 : C;
          if (U0 = U0 + 1 | 0, (U0 | 0) == 2) break;
          T = m0, h0 = y0, e0 = S0, q = E0, i0 = T0, j = w0, C = A0, p0 = B0, d0 = v0, g0 = g0 + he | 0;
        }
        Le(_, C2), f0 = O2;
      }
      function x1(u) {
        u = u | 0;
        var _ = 0, l = 0, P = 0, T = 0, q = 0, C = 0, i0 = 0, j = 0;
        if (C = f0, T = u + 4 | 0, _ = o[T >> 2] | 0, q = u + 16 | 0, l = o[q >> 2] | 0, P = o[u >> 2] | 0, _ | l) {
          j = _ + P | 0, q = _ >> 1, i0 = q + P | 0, q = P - q | 0, _ = P - _ | 0, o[u >> 2] = l + j, P = l >> 1, o[u + 16 >> 2] = P + j, o[u + 32 >> 2] = j - P, o[u + 48 >> 2] = j - l, o[T >> 2] = l + i0, o[u + 20 >> 2] = P + i0, o[u + 36 >> 2] = i0 - P, o[u + 52 >> 2] = i0 - l, o[u + 8 >> 2] = l + q, o[u + 24 >> 2] = P + q, o[u + 40 >> 2] = q - P, o[u + 56 >> 2] = q - l, o[u + 12 >> 2] = l + _, o[u + 28 >> 2] = P + _, o[u + 44 >> 2] = _ - P, o[u + 60 >> 2] = _ - l, f0 = C;
          return;
        } else {
          o[u + 60 >> 2] = P, o[u + 56 >> 2] = P, o[u + 52 >> 2] = P, o[u + 48 >> 2] = P, o[u + 44 >> 2] = P, o[u + 40 >> 2] = P, o[u + 36 >> 2] = P, o[u + 32 >> 2] = P, o[u + 28 >> 2] = P, o[u + 24 >> 2] = P, o[u + 20 >> 2] = P, o[q >> 2] = P, o[u + 12 >> 2] = P, o[u + 8 >> 2] = P, o[T >> 2] = P, f0 = C;
          return;
        }
      }
      function ei(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0, T = 0, q = 0, C = 0;
        if (C = f0, U2(_, 0, 952), l = q0(u, 1) | 0, (l | 0) == -1)
          return l = 1, f0 = C, l | 0;
        l = (l | 0) == 1, o[_ >> 2] = l & 1;
        do
          if (l) {
            if (l = q0(u, 8) | 0, (l | 0) == -1)
              return l = 1, f0 = C, l | 0;
            if (o[_ + 4 >> 2] = l, (l | 0) == 255) {
              if (l = q0(u, 16) | 0, (l | 0) == -1 || (o[_ + 8 >> 2] = l, l = q0(u, 16) | 0, (l | 0) == -1))
                return l = 1, f0 = C, l | 0;
              o[_ + 12 >> 2] = l;
              break;
            }
          }
        while (!1);
        if (l = q0(u, 1) | 0, (l | 0) == -1)
          return l = 1, f0 = C, l | 0;
        l = (l | 0) == 1, o[_ + 16 >> 2] = l & 1;
        do
          if (l) {
            if (l = q0(u, 1) | 0, (l | 0) == -1)
              return l = 1, f0 = C, l | 0;
            o[_ + 20 >> 2] = (l | 0) == 1 & 1;
            break;
          }
        while (!1);
        if (l = q0(u, 1) | 0, (l | 0) == -1)
          return l = 1, f0 = C, l | 0;
        l = (l | 0) == 1, o[_ + 24 >> 2] = l & 1;
        do
          if (l) {
            if (l = q0(u, 3) | 0, (l | 0) == -1 || (o[_ + 28 >> 2] = l, l = q0(u, 1) | 0, (l | 0) == -1) || (o[_ + 32 >> 2] = (l | 0) == 1 & 1, l = q0(u, 1) | 0, (l | 0) == -1))
              return l = 1, f0 = C, l | 0;
            if (l = (l | 0) == 1, o[_ + 36 >> 2] = l & 1, !l) {
              o[_ + 40 >> 2] = 2, o[_ + 44 >> 2] = 2, o[_ + 48 >> 2] = 2;
              break;
            }
            if (l = q0(u, 8) | 0, (l | 0) == -1 || (o[_ + 40 >> 2] = l, l = q0(u, 8) | 0, (l | 0) == -1) || (o[_ + 44 >> 2] = l, l = q0(u, 8) | 0, (l | 0) == -1))
              return l = 1, f0 = C, l | 0;
            o[_ + 48 >> 2] = l;
            break;
          } else
            o[_ + 28 >> 2] = 5, o[_ + 40 >> 2] = 2, o[_ + 44 >> 2] = 2, o[_ + 48 >> 2] = 2;
        while (!1);
        if (l = q0(u, 1) | 0, (l | 0) == -1)
          return l = 1, f0 = C, l | 0;
        if (l = (l | 0) == 1, o[_ + 52 >> 2] = l & 1, l) {
          if (l = _ + 56 | 0, P = P0(u, l) | 0, P)
            return l = P, f0 = C, l | 0;
          if ((o[l >> 2] | 0) >>> 0 > 5)
            return l = 1, f0 = C, l | 0;
          if (l = _ + 60 | 0, P = P0(u, l) | 0, P)
            return l = P, f0 = C, l | 0;
          if ((o[l >> 2] | 0) >>> 0 > 5)
            return l = 1, f0 = C, l | 0;
        }
        if (l = q0(u, 1) | 0, (l | 0) == -1)
          return l = 1, f0 = C, l | 0;
        l = (l | 0) == 1, o[_ + 64 >> 2] = l & 1;
        do
          if (l) {
            if (l = X2(u) | 0, (_2(u, 32) | 0) == -1 | (l | 0) == 0 || (o[_ + 68 >> 2] = l, l = X2(u) | 0, (_2(u, 32) | 0) == -1 | (l | 0) == 0) || (o[_ + 72 >> 2] = l, l = q0(u, 1) | 0, (l | 0) == -1))
              return l = 1, f0 = C, l | 0;
            o[_ + 76 >> 2] = (l | 0) == 1 & 1;
            break;
          }
        while (!1);
        if (l = q0(u, 1) | 0, (l | 0) == -1)
          return l = 1, f0 = C, l | 0;
        if (l = (l | 0) == 1, T = _ + 80 | 0, o[T >> 2] = l & 1, l) {
          if (P = b1(u, _ + 84 | 0) | 0, P)
            return l = P, f0 = C, l | 0;
        } else
          o[_ + 84 >> 2] = 1, o[_ + 96 >> 2] = 288000001, o[_ + 224 >> 2] = 288000001, o[_ + 480 >> 2] = 24, o[_ + 484 >> 2] = 24, o[_ + 488 >> 2] = 24, o[_ + 492 >> 2] = 24;
        if (P = q0(u, 1) | 0, (P | 0) == -1)
          return l = 1, f0 = C, l | 0;
        if (P = (P | 0) == 1, l = _ + 496 | 0, o[l >> 2] = P & 1, P) {
          if (P = b1(u, _ + 500 | 0) | 0, P)
            return l = P, f0 = C, l | 0;
        } else
          o[_ + 500 >> 2] = 1, o[_ + 512 >> 2] = 240000001, o[_ + 640 >> 2] = 240000001, o[_ + 896 >> 2] = 24, o[_ + 900 >> 2] = 24, o[_ + 904 >> 2] = 24, o[_ + 908 >> 2] = 24;
        (o[T >> 2] | 0) == 0 && (o[l >> 2] | 0) == 0 || (q = 46);
        do
          if ((q | 0) == 46) {
            if (l = q0(u, 1) | 0, (l | 0) == -1)
              return l = 1, f0 = C, l | 0;
            o[_ + 912 >> 2] = (l | 0) == 1 & 1;
            break;
          }
        while (!1);
        if (l = q0(u, 1) | 0, (l | 0) == -1 || (o[_ + 916 >> 2] = (l | 0) == 1 & 1, l = q0(u, 1) | 0, (l | 0) == -1))
          return l = 1, f0 = C, l | 0;
        l = (l | 0) == 1, o[_ + 920 >> 2] = l & 1;
        do
          if (l) {
            if (l = q0(u, 1) | 0, (l | 0) == -1)
              return l = 1, f0 = C, l | 0;
            if (o[_ + 924 >> 2] = (l | 0) == 1 & 1, P = _ + 928 | 0, l = P0(u, P) | 0, l)
              return f0 = C, l | 0;
            if ((o[P >> 2] | 0) >>> 0 > 16)
              return l = 1, f0 = C, l | 0;
            if (P = _ + 932 | 0, l = P0(u, P) | 0, l)
              return f0 = C, l | 0;
            if ((o[P >> 2] | 0) >>> 0 > 16)
              return l = 1, f0 = C, l | 0;
            if (P = _ + 936 | 0, l = P0(u, P) | 0, l)
              return f0 = C, l | 0;
            if ((o[P >> 2] | 0) >>> 0 > 16)
              return l = 1, f0 = C, l | 0;
            if (P = _ + 940 | 0, l = P0(u, P) | 0, l)
              return f0 = C, l | 0;
            if ((o[P >> 2] | 0) >>> 0 > 16)
              return l = 1, f0 = C, l | 0;
            if (l = P0(u, _ + 944 | 0) | 0, l)
              return f0 = C, l | 0;
            if (l = P0(u, _ + 948 | 0) | 0, !l) break;
            return f0 = C, l | 0;
          } else
            o[_ + 924 >> 2] = 1, o[_ + 928 >> 2] = 2, o[_ + 932 >> 2] = 1, o[_ + 936 >> 2] = 16, o[_ + 940 >> 2] = 16, o[_ + 944 >> 2] = 16, o[_ + 948 >> 2] = 16;
        while (!1);
        return l = 0, f0 = C, l | 0;
      }
      function b1(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0, T = 0, q = 0, C = 0, i0 = 0, j = 0;
        if (j = f0, l = P0(u, _) | 0, l)
          return f0 = j, l | 0;
        if (l = (o[_ >> 2] | 0) + 1 | 0, o[_ >> 2] = l, l >>> 0 > 32 || (l = q0(u, 4) | 0, (l | 0) == -1) || (i0 = _ + 4 | 0, o[i0 >> 2] = l, P = q0(u, 4) | 0, (P | 0) == -1))
          return l = 1, f0 = j, l | 0;
        C = _ + 8 | 0, o[C >> 2] = P;
        e: do
          if (o[_ >> 2] | 0) {
            for (q = 0; ; ) {
              if (T = _ + (q << 2) + 12 | 0, l = P0(u, T) | 0, l) {
                P = 17;
                break;
              }
              if (P = o[T >> 2] | 0, (P | 0) == -1) {
                l = 1, P = 17;
                break;
              }
              if (l = P + 1 | 0, o[T >> 2] = l, o[T >> 2] = l << (o[i0 >> 2] | 0) + 6, T = _ + (q << 2) + 140 | 0, l = P0(u, T) | 0, l) {
                P = 17;
                break;
              }
              if (P = o[T >> 2] | 0, (P | 0) == -1) {
                l = 1, P = 17;
                break;
              }
              if (P = P + 1 | 0, o[T >> 2] = P, o[T >> 2] = P << (o[C >> 2] | 0) + 4, P = q0(u, 1) | 0, (P | 0) == -1) {
                l = 1, P = 17;
                break;
              }
              if (o[_ + (q << 2) + 268 >> 2] = (P | 0) == 1 & 1, q = q + 1 | 0, q >>> 0 >= (o[_ >> 2] | 0) >>> 0) break e;
            }
            if ((P | 0) == 17)
              return f0 = j, l | 0;
          }
        while (!1);
        return l = q0(u, 5) | 0, (l | 0) == -1 || (o[_ + 396 >> 2] = l + 1, l = q0(u, 5) | 0, (l | 0) == -1) || (o[_ + 400 >> 2] = l + 1, l = q0(u, 5) | 0, (l | 0) == -1) || (o[_ + 404 >> 2] = l + 1, l = q0(u, 5) | 0, (l | 0) == -1) ? (l = 1, f0 = j, l | 0) : (o[_ + 408 >> 2] = l, l = 0, f0 = j, l | 0);
      }
      function ri(u, _, l, P) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0;
        var T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0;
        p0 = f0;
        e: do
          if (!(o[l + 284 >> 2] | 0)) c0 = 0;
          else {
            for (C = 0; ; ) {
              if (i0 = o[l + (C * 20 | 0) + 288 >> 2] | 0, (i0 | 0) == 5) {
                c0 = 1;
                break e;
              } else if (!i0) break;
              C = C + 1 | 0;
            }
            c0 = 0;
          }
        while (!1);
        if (i0 = o[_ + 16 >> 2] | 0, (i0 | 0) == 1) {
          if ((o[P >> 2] | 0) != 5 ? (T = o[u + 12 >> 2] | 0, (o[u + 8 >> 2] | 0) >>> 0 > (o[l + 12 >> 2] | 0) >>> 0 && (T = (o[_ + 12 >> 2] | 0) + T | 0)) : T = 0, t0 = o[_ + 36 >> 2] | 0, C = (t0 | 0) == 0, C ? i0 = 0 : i0 = (o[l + 12 >> 2] | 0) + T | 0, P = (o[P + 4 >> 2] | 0) == 0, j = ((P & (i0 | 0) != 0) << 31 >> 31) + i0 | 0, e0 = (j | 0) != 0, e0 ? (q = j + -1 | 0, s0 = (q >>> 0) % (t0 >>> 0) | 0, q = (q >>> 0) / (t0 >>> 0) | 0) : (s0 = 0, q = 0), C) i0 = 0;
          else {
            j = o[_ + 40 >> 2] | 0, i0 = 0, C = 0;
            do
              i0 = (o[j + (C << 2) >> 2] | 0) + i0 | 0, C = C + 1 | 0;
            while (C >>> 0 < t0 >>> 0);
          }
          if (e0) {
            q = _0(i0, q) | 0, j = o[_ + 40 >> 2] | 0, i0 = 0;
            do
              q = (o[j + (i0 << 2) >> 2] | 0) + q | 0, i0 = i0 + 1 | 0;
            while (i0 >>> 0 <= s0 >>> 0);
          } else q = 0;
          return P ? i0 = (o[_ + 28 >> 2] | 0) + q | 0 : i0 = q, q = (o[l + 32 >> 2] | 0) + (o[_ + 32 >> 2] | 0) | 0, C = u + 12 | 0, c0 ? (o[C >> 2] = 0, o[u + 8 >> 2] = 0, _ = 0, f0 = p0, _ | 0) : (_ = ((q | 0) < 0 ? q : 0) + i0 + (o[l + 28 >> 2] | 0) | 0, o[C >> 2] = T, o[u + 8 >> 2] = o[l + 12 >> 2], f0 = p0, _ | 0);
        } else {
          if (i0)
            return (o[P >> 2] | 0) == 5 ? (j = 0, q = 0, T = u + 12 | 0) : (i0 = o[l + 12 >> 2] | 0, T = u + 12 | 0, C = o[T >> 2] | 0, (o[u + 8 >> 2] | 0) >>> 0 > i0 >>> 0 && (C = (o[_ + 12 >> 2] | 0) + C | 0), j = C, q = (i0 + C << 1) + (((o[P + 4 >> 2] | 0) == 0) << 31 >> 31) | 0), c0 ? (o[T >> 2] = 0, o[u + 8 >> 2] = 0, _ = 0, f0 = p0, _ | 0) : (o[T >> 2] = j, o[u + 8 >> 2] = o[l + 12 >> 2], _ = q, f0 = p0, _ | 0);
          (o[P >> 2] | 0) != 5 ? (C = o[u >> 2] | 0, i0 = o[l + 20 >> 2] | 0, C >>> 0 > i0 >>> 0 && (j = o[_ + 20 >> 2] | 0, (C - i0 | 0) >>> 0 >= j >>> 1 >>> 0) ? (C = (o[u + 4 >> 2] | 0) + j | 0, j = u) : (j = u, t0 = 11)) : (o[u + 4 >> 2] = 0, o[u >> 2] = 0, i0 = o[l + 20 >> 2] | 0, C = 0, j = u, t0 = 11);
          do
            if ((t0 | 0) == 11) {
              if (i0 >>> 0 > C >>> 0 && (q = o[_ + 20 >> 2] | 0, (i0 - C | 0) >>> 0 > q >>> 1 >>> 0)) {
                C = (o[u + 4 >> 2] | 0) - q | 0;
                break;
              }
              C = o[u + 4 >> 2] | 0;
            }
          while (!1);
          return o[P + 4 >> 2] | 0 ? (o[u + 4 >> 2] = C, T = o[l + 24 >> 2] | 0, q = (T | 0) < 0, c0 ? (o[u + 4 >> 2] = 0, o[j >> 2] = q ? 0 - T | 0 : 0, _ = 0, f0 = p0, _ | 0) : (o[j >> 2] = i0, _ = i0 + C + (q ? T : 0) | 0, f0 = p0, _ | 0)) : (_ = o[l + 24 >> 2] | 0, _ = i0 + C + ((_ | 0) < 0 ? _ : 0) | 0, f0 = p0, _ | 0);
        }
        return 0;
      }
      function ii(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0;
        return l = f0, Ir(u), P = M2(2112) | 0, o[u + 3376 >> 2] = P, P ? (_ && (o[u + 1216 >> 2] = 1), _ = 0) : _ = 1, f0 = l, _ | 0;
      }
      function ti(u, _, l, P, T) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0;
        var q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0;
        h0 = f0, f0 = f0 + 208 | 0, e0 = h0 + 204 | 0, p0 = h0, q = h0 + 112 | 0, C = h0 + 40 | 0, d0 = h0 + 16 | 0, i0 = h0 + 12 | 0, s0 = h0 + 8 | 0, o[i0 >> 2] = 0, c0 = u + 3344 | 0, (o[c0 >> 2] | 0) != 0 && (o[u + 3348 >> 2] | 0) == (_ | 0) ? (_ = u + 3356 | 0, o[d0 + 0 >> 2] = o[_ + 0 >> 2], o[d0 + 4 >> 2] = o[_ + 4 >> 2], o[d0 + 8 >> 2] = o[_ + 8 >> 2], o[d0 + 12 >> 2] = o[_ + 12 >> 2], o[d0 + 4 >> 2] = o[d0 >> 2], o[d0 + 8 >> 2] = 0, o[d0 + 16 >> 2] = 0, o[T >> 2] = o[u + 3352 >> 2]) : j = 4;
        do
          if ((j | 0) == 4) {
            if (dr(_, l, d0, T) | 0)
              return s0 = 3, f0 = h0, s0 | 0;
            l = u + 3356 | 0, o[l + 0 >> 2] = o[d0 + 0 >> 2], o[l + 4 >> 2] = o[d0 + 4 >> 2], o[l + 8 >> 2] = o[d0 + 8 >> 2], o[l + 12 >> 2] = o[d0 + 12 >> 2], o[l + 16 >> 2] = o[d0 + 16 >> 2], o[u + 3352 >> 2] = o[T >> 2], o[u + 3348 >> 2] = _;
            break;
          }
        while (!1);
        if (o[c0 >> 2] = 0, Dr(d0, p0) | 0)
          return s0 = 3, f0 = h0, s0 | 0;
        if (((o[p0 >> 2] | 0) + -1 | 0) >>> 0 > 11)
          return s0 = 0, f0 = h0, s0 | 0;
        if (_ = Gr(d0, p0, u, i0) | 0, _)
          return (_ | 0) == 65520 ? (s0 = 4, f0 = h0, s0 | 0) : (s0 = 3, f0 = h0, s0 | 0);
        do
          if (!(o[i0 >> 2] | 0)) j = 19;
          else {
            if ((o[u + 1184 >> 2] | 0) != 0 && (o[u + 16 >> 2] | 0) != 0) {
              if (o[u + 3380 >> 2] | 0)
                return s0 = 3, f0 = h0, s0 | 0;
              o[u + 1188 >> 2] | 0 ? A1(
                u,
                u + 1336 | 0,
                o[u + 1372 >> 2] | 0
              ) | 0 : (t0 = u + 1220 | 0, s0 = u + 1336 | 0, o[s0 >> 2] = u1(t0) | 0, l1(t0), A1(u, s0, 0) | 0), o[T >> 2] = 0, o[c0 >> 2] = 1, o[u + 1180 >> 2] = 0, q = u + 1336 | 0, _ = u + 1360 | 0;
              break;
            }
            o[u + 1188 >> 2] = 0, o[u + 1180 >> 2] = 0, j = 19;
          }
        while (!1);
        do
          if ((j | 0) == 19) {
            if (_ = o[p0 >> 2] | 0, (_ | 0) == 7)
              return wr(d0, q) | 0 ? (s0 = q + 40 | 0, r2(o[s0 >> 2] | 0), o[s0 >> 2] = 0, s0 = q + 84 | 0, r2(o[s0 >> 2] | 0), o[s0 >> 2] = 0, s0 = 3, f0 = h0, s0 | 0) : (Or(u, q) | 0, s0 = 0, f0 = h0, s0 | 0);
            if ((_ | 0) == 1 | (_ | 0) == 5) {
              if (j = u + 1180 | 0, o[u + 1180 >> 2] | 0)
                return s0 = 0, f0 = h0, s0 | 0;
              if (o[u + 1184 >> 2] = 1, B1(u) | 0) {
                if (o[u + 1204 >> 2] = 0, o[u + 1208 >> 2] = P, w1(d0, e0) | 0, i0 = u + 8 | 0, l = o[i0 >> 2] | 0, _ = qr(
                  u,
                  o[e0 >> 2] | 0,
                  (o[p0 >> 2] | 0) == 5 & 1
                ) | 0, _)
                  return o[u + 4 >> 2] = 256, o[u + 12 >> 2] = 0, o[i0 >> 2] = 32, o[u + 16 >> 2] = 0, o[u + 3380 >> 2] = 0, s0 = (_ | 0) == 65535 ? 5 : 4, f0 = h0, s0 | 0;
                if ((l | 0) != (o[i0 >> 2] | 0))
                  return l = o[u + 16 >> 2] | 0, o[s0 >> 2] = 1, _ = o[u >> 2] | 0, _ >>> 0 < 32 ? _ = o[u + (_ << 2) + 20 >> 2] | 0 : _ = 0, o[T >> 2] = 0, o[c0 >> 2] = 1, (o[p0 >> 2] | 0) == 5 && (e0 = br(
                    s0,
                    d0,
                    l,
                    o[u + 12 >> 2] | 0,
                    5
                  ) | 0, (o[s0 >> 2] | e0 | 0) == 0) && (t0 = u + 1220 | 0, !((o[u + 1276 >> 2] | 0) != 0 | (_ | 0) == 0)) && (o[_ + 52 >> 2] | 0) == (o[l + 52 >> 2] | 0) && (o[_ + 56 >> 2] | 0) == (o[l + 56 >> 2] | 0) && (o[_ + 88 >> 2] | 0) == (o[l + 88 >> 2] | 0) ? a1(t0) : o[u + 1280 >> 2] = 0, o[u >> 2] = o[i0 >> 2], s0 = 2, f0 = h0, s0 | 0;
              }
              if (o[u + 3380 >> 2] | 0 || (C = u + 1368 | 0, i0 = u + 2356 | 0, _ = u + 16 | 0, vr(
                d0,
                i0,
                o[_ >> 2] | 0,
                o[u + 12 >> 2] | 0,
                p0
              ) | 0))
                return s0 = 3, f0 = h0, s0 | 0;
              if (!(B1(u) | 0)) l = u + 1220 | 0;
              else {
                if (l = u + 1220 | 0, (o[p0 >> 2] | 0) != 5 && (j1(
                  l,
                  o[u + 2368 >> 2] | 0,
                  (o[p0 + 4 >> 2] | 0) != 0 & 1,
                  o[(o[_ >> 2] | 0) + 48 >> 2] | 0
                ) | 0) != 0)
                  return s0 = 3, f0 = h0, s0 | 0;
                o[u + 1336 >> 2] = u1(l) | 0;
              }
              if (e1(C | 0, i0 | 0, 988) | 0, o[u + 1188 >> 2] = 1, _ = u + 1360 | 0, e0 = p0, t0 = o[e0 + 4 >> 2] | 0, s0 = _, o[s0 >> 2] = o[e0 >> 2], o[s0 + 4 >> 2] = t0, Hr(u, o[u + 1432 >> 2] | 0), l1(l), $1(
                l,
                u + 1436 | 0,
                o[u + 1380 >> 2] | 0,
                o[u + 1412 >> 2] | 0
              ) | 0)
                return s0 = 3, f0 = h0, s0 | 0;
              if (q = u + 1336 | 0, Sr(d0, u, q, C) | 0)
                return Er(u, o[C >> 2] | 0), s0 = 3, f0 = h0, s0 | 0;
              if (Vr(u) | 0) {
                o[j >> 2] = 1;
                break;
              } else
                return s0 = 0, f0 = h0, s0 | 0;
            } else return (_ | 0) == 8 ? mr(d0, C) | 0 ? (s0 = C + 20 | 0, r2(o[s0 >> 2] | 0), o[s0 >> 2] = 0, s0 = C + 24 | 0, r2(o[s0 >> 2] | 0), o[s0 >> 2] = 0, s0 = C + 28 | 0, r2(o[s0 >> 2] | 0), o[s0 >> 2] = 0, s0 = C + 44 | 0, r2(o[s0 >> 2] | 0), o[s0 >> 2] = 0, s0 = 3, f0 = h0, s0 | 0) : (Nr(u, C) | 0, s0 = 0, f0 = h0, s0 | 0) : (s0 = 0, f0 = h0, s0 | 0);
          }
        while (!1);
        ir(q, o[u + 1212 >> 2] | 0), Yr(u), i0 = ri(
          u + 1284 | 0,
          o[u + 16 >> 2] | 0,
          u + 1368 | 0,
          _
        ) | 0, l = u + 1188 | 0;
        do
          if (o[l >> 2] | 0)
            if (C = u + 1220 | 0, o[u + 1364 >> 2] | 0) {
              f1(
                C,
                u + 1644 | 0,
                q,
                o[u + 1380 >> 2] | 0,
                i0,
                (o[_ >> 2] | 0) == 5 & 1,
                o[u + 1208 >> 2] | 0,
                o[u + 1204 >> 2] | 0
              ) | 0;
              break;
            } else {
              f1(
                C,
                0,
                q,
                o[u + 1380 >> 2] | 0,
                i0,
                (o[_ >> 2] | 0) == 5 & 1,
                o[u + 1208 >> 2] | 0,
                o[u + 1204 >> 2] | 0
              ) | 0;
              break;
            }
        while (!1);
        return o[u + 1184 >> 2] = 0, o[l >> 2] = 0, s0 = 1, f0 = h0, s0 | 0;
        return 0;
      }
      function ni(u) {
        u = u | 0;
        var _ = 0, l = 0, P = 0, T = 0;
        T = f0, P = 0;
        do
          l = u + (P << 2) + 20 | 0, _ = o[l >> 2] | 0, _ && (r2(o[_ + 40 >> 2] | 0), o[(o[l >> 2] | 0) + 40 >> 2] = 0, r2(o[(o[l >> 2] | 0) + 84 >> 2] | 0), o[(o[l >> 2] | 0) + 84 >> 2] = 0, r2(o[l >> 2] | 0), o[l >> 2] = 0), P = P + 1 | 0;
        while ((P | 0) != 32);
        P = 0;
        do
          l = u + (P << 2) + 148 | 0, _ = o[l >> 2] | 0, _ && (r2(o[_ + 20 >> 2] | 0), o[(o[l >> 2] | 0) + 20 >> 2] = 0, r2(o[(o[l >> 2] | 0) + 24 >> 2] | 0), o[(o[l >> 2] | 0) + 24 >> 2] = 0, r2(o[(o[l >> 2] | 0) + 28 >> 2] | 0), o[(o[l >> 2] | 0) + 28 >> 2] = 0, r2(o[(o[l >> 2] | 0) + 44 >> 2] | 0), o[(o[l >> 2] | 0) + 44 >> 2] = 0, r2(o[l >> 2] | 0), o[l >> 2] = 0), P = P + 1 | 0;
        while ((P | 0) != 256);
        _ = u + 3376 | 0, r2(o[_ >> 2] | 0), o[_ >> 2] = 0, _ = u + 1212 | 0, r2(o[_ >> 2] | 0), o[_ >> 2] = 0, _ = u + 1172 | 0, r2(o[_ >> 2] | 0), o[_ >> 2] = 0, Q1(u + 1220 | 0), f0 = T;
      }
      function oi(u, _, l, P) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0;
        var T = 0;
        return T = f0, u = er(u + 1220 | 0) | 0, u ? (o[_ >> 2] = o[u + 4 >> 2], o[l >> 2] = o[u + 12 >> 2], o[P >> 2] = o[u + 8 >> 2], u = o[u >> 2] | 0, f0 = T, u | 0) : (u = 0, f0 = T, u | 0);
      }
      function si(u) {
        u = u | 0;
        var _ = 0;
        return _ = f0, u = o[u + 16 >> 2] | 0, u ? (u = o[u + 52 >> 2] | 0, f0 = _, u | 0) : (u = 0, f0 = _, u | 0);
      }
      function fi(u) {
        u = u | 0;
        var _ = 0;
        return _ = f0, u = o[u + 16 >> 2] | 0, u ? (u = o[u + 56 >> 2] | 0, f0 = _, u | 0) : (u = 0, f0 = _, u | 0);
      }
      function ui(u) {
        u = u | 0;
        var _ = 0;
        _ = f0, a1(u + 1220 | 0), f0 = _;
      }
      function li(u) {
        u = u | 0;
        var _ = 0;
        return _ = f0, u = (Kr(u) | 0) == 0 & 1, f0 = _, u | 0;
      }
      function ai(u) {
        u = u | 0;
        var _ = 0, l = 0;
        return l = f0, u = o[u + 16 >> 2] | 0, (u | 0) != 0 && (o[u + 80 >> 2] | 0) != 0 && (_ = o[u + 84 >> 2] | 0, (_ | 0) != 0) && (o[_ + 24 >> 2] | 0) != 0 && (o[_ + 32 >> 2] | 0) != 0 ? (u = 1, f0 = l, u | 0) : (u = 0, f0 = l, u | 0);
      }
      function ci(u) {
        u = u | 0;
        var _ = 0, l = 0;
        return l = f0, u = o[u + 16 >> 2] | 0, (u | 0) != 0 && (o[u + 80 >> 2] | 0) != 0 && (_ = o[u + 84 >> 2] | 0, (_ | 0) != 0) && (o[_ + 24 >> 2] | 0) != 0 && (o[_ + 36 >> 2] | 0) != 0 ? u = o[_ + 48 >> 2] | 0 : u = 2, f0 = l, u | 0;
      }
      function pi(u, _, l, P, T, q) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, q = q | 0;
        var C = 0;
        if (C = f0, u = o[u + 16 >> 2] | 0, (u | 0) != 0 && (o[u + 60 >> 2] | 0) != 0) {
          o[_ >> 2] = 1, _ = u + 64 | 0, o[l >> 2] = o[_ >> 2] << 1, o[P >> 2] = (o[u + 52 >> 2] << 4) - ((o[u + 68 >> 2] | 0) + (o[_ >> 2] | 0) << 1), _ = u + 72 | 0, o[T >> 2] = o[_ >> 2] << 1, u = (o[u + 56 >> 2] << 4) - ((o[u + 76 >> 2] | 0) + (o[_ >> 2] | 0) << 1) | 0, o[q >> 2] = u, f0 = C;
          return;
        }
        o[_ >> 2] = 0, o[l >> 2] = 0, o[P >> 2] = 0, o[T >> 2] = 0, u = 0, o[q >> 2] = u, f0 = C;
      }
      function hi(u, _, l) {
        u = u | 0, _ = _ | 0, l = l | 0;
        var P = 0, T = 0, q = 0;
        T = f0, u = o[u + 16 >> 2] | 0;
        e: do
          if ((u | 0) != 0 && (o[u + 80 >> 2] | 0) != 0 && (P = o[u + 84 >> 2] | 0, (P | 0) != 0) && (o[P >> 2] | 0) != 0) {
            u = o[P + 4 >> 2] | 0;
            do
              switch (u | 0) {
                case 8: {
                  P = 11, u = 32;
                  break e;
                }
                case 13: {
                  P = 99, u = 160;
                  break e;
                }
                case 12: {
                  P = 33, u = 64;
                  break e;
                }
                case 6: {
                  P = 11, u = 24;
                  break e;
                }
                case 7: {
                  P = 11, u = 20;
                  break e;
                }
                case 255: {
                  u = o[P + 8 >> 2] | 0, P = o[P + 12 >> 2] | 0, q = (u | 0) == 0 | (P | 0) == 0, P = q ? 0 : P, u = q ? 0 : u;
                  break e;
                }
                case 5: {
                  P = 33, u = 40;
                  break e;
                }
                case 4: {
                  P = 11, u = 16;
                  break e;
                }
                case 3: {
                  P = 11, u = 10;
                  break e;
                }
                case 1:
                case 0: {
                  P = u;
                  break e;
                }
                case 2: {
                  P = 11, u = 12;
                  break e;
                }
                case 10: {
                  P = 11, u = 18;
                  break e;
                }
                case 9: {
                  P = 33, u = 80;
                  break e;
                }
                case 11: {
                  P = 11, u = 15;
                  break e;
                }
                default: {
                  P = 0, u = 0;
                  break e;
                }
              }
            while (!1);
          } else
            P = 1, u = 1;
        while (!1);
        o[_ >> 2] = u, o[l >> 2] = P, f0 = T;
      }
      function di(u) {
        return u = u | 0, u = o[u + 16 >> 2] | 0, u ? u = o[u >> 2] | 0 : u = 0, u | 0;
      }
      function wi(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0, T = 0;
        T = f0;
        do
          if (u)
            if (l = M2(3396) | 0, l)
              if (P = l + 8 | 0, ii(P, _) | 0) {
                ni(P), r2(l), l = -4;
                break;
              } else {
                o[l >> 2] = 1, o[l + 4 >> 2] = 0, o[u >> 2] = l, l = 0;
                break;
              }
            else l = -4;
          else l = -1;
        while (!1);
        return f0 = T, l | 0;
      }
      function ki(u, _) {
        u = u | 0, _ = _ | 0;
        var l = 0, P = 0;
        return P = f0, (u | 0) == 0 | (_ | 0) == 0 ? (u = -1, f0 = P, u | 0) : (l = u + 8 | 0, !(o[u + 24 >> 2] | 0) || !(o[u + 20 >> 2] | 0) ? (u = -6, f0 = P, u | 0) : (o[_ + 4 >> 2] = (si(l) | 0) << 4, o[_ + 8 >> 2] = (fi(l) | 0) << 4, o[_ + 12 >> 2] = ai(l) | 0, o[_ + 16 >> 2] = ci(l) | 0, pi(
          l,
          _ + 28 | 0,
          _ + 32 | 0,
          _ + 36 | 0,
          _ + 40 | 0,
          _ + 44 | 0
        ), hi(l, _ + 20 | 0, _ + 24 | 0), o[_ >> 2] = di(l) | 0, u = 0, f0 = P, u | 0));
      }
      function mi(u, _, l) {
        u = u | 0, _ = _ | 0, l = l | 0;
        var P = 0, T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0;
        t0 = f0, f0 = f0 + 16 | 0, i0 = t0;
        e: do
          if (!((_ | 0) == 0 | (l | 0) == 0) && (T = o[_ >> 2] | 0, (T | 0) != 0) && (q = o[_ + 4 >> 2] | 0, (q | 0) != 0))
            if ((u | 0) != 0 && (P = o[u >> 2] | 0, (P | 0) != 0)) {
              for (o[l >> 2] = 0, o[i0 >> 2] = 0, j = u + 8 | 0, o[u + 3392 >> 2] = o[_ + 12 >> 2], C = _ + 8 | 0, _ = 1; ; ) {
                if ((P | 0) == 2) {
                  e0 = 8;
                  break;
                }
                if (P = ti(j, T, q, o[C >> 2] | 0, i0) | 0, s0 = o[i0 >> 2] | 0, T = T + s0 | 0, q = q - s0 | 0, q = (q | 0) < 0 ? 0 : q, o[l >> 2] = T, (P | 0) == 5) {
                  _ = -4;
                  break e;
                } else if ((P | 0) == 4)
                  P = (li(j) | 0 | q | 0) == 0, _ = P ? -2 : _;
                else {
                  if ((P | 0) == 2) break;
                  if ((P | 0) == 1) {
                    e0 = 13;
                    break;
                  }
                }
                if (!q) break e;
                P = o[u >> 2] | 0;
              }
              if ((e0 | 0) == 8)
                o[u >> 2] = 1, o[l >> 2] = T + (o[i0 >> 2] | 0);
              else if ((e0 | 0) == 13) {
                _ = u + 4 | 0, o[_ >> 2] = (o[_ >> 2] | 0) + 1, _ = (q | 0) == 0 ? 2 : 3;
                break;
              }
              _ = u + 1288 | 0, (o[_ >> 2] | 0) != 0 && (o[u + 1244 >> 2] | 0) != (o[u + 1248 >> 2] | 0) ? (o[_ >> 2] = 0, o[u >> 2] = 2, _ = 3) : _ = 4;
            } else _ = -3;
          else _ = -1;
        while (!1);
        return f0 = t0, _ | 0;
      }
      function S1(u) {
        u = u | 0, o[u >> 2] = 2, o[u + 4 >> 2] = 3;
      }
      function E1(u, _, l) {
        u = u | 0, _ = _ | 0, l = l | 0;
        var P = 0, T = 0, q = 0, C = 0;
        return C = f0, f0 = f0 + 16 | 0, T = C + 8 | 0, P = C + 4 | 0, q = C, (u | 0) == 0 | (_ | 0) == 0 ? (u = -1, f0 = C, u | 0) : (u = u + 8 | 0, l && ui(u), u = oi(u, q, P, T) | 0, u ? (o[_ >> 2] = u, o[_ + 4 >> 2] = o[q >> 2], o[_ + 8 >> 2] = o[P >> 2], o[_ + 12 >> 2] = o[T >> 2], u = 2, f0 = C, u | 0) : (u = 0, f0 = C, u | 0));
      }
      function vi(u) {
        u = u | 0;
        var _ = 0, l = 0;
        return l = f0, _ = je(u) | 0, o[1792] = _, o[1791] = _, o[1790] = u, o[1793] = _ + u, f0 = l, _ | 0;
      }
      function yi(u) {
        u = u | 0, o[1790] = u;
      }
      function Bi() {
        var u = 0;
        u = f0, o[1786] = o[1791], o[1787] = o[1790];
        do
          Ai() | 0;
        while ((o[1787] | 0) != 0);
        f0 = u;
      }
      function gi() {
        var u = 0, _ = 0;
        return _ = f0, wi(7176, 0) | 0 ? (D1(7280) | 0, u = o[1784] | 0, u && Ke(u)) : (o[1796] = 1, o[1798] = 1), f0 = _, -1;
      }
      function Ai() {
        var u = 0, _ = 0, l = 0;
        switch (_ = f0, o[1788] = o[1798], u = mi(o[1794] | 0, 7144, 7200) | 0, u | 0) {
          case 1:
          case -2:
            return o[1787] = 0, f0 = _, u | 0;
          case 4:
            return ki(o[1794] | 0, 7208) | 0 ? (u = -1, f0 = _, u | 0) : (o[1814] = (_0((o[1803] | 0) * 3 | 0, o[1804] | 0) | 0) >>> 1, P1(), u = o[1800] | 0, o[1787] = (o[1786] | 0) - u + (o[1787] | 0), o[1786] = u, u = 0, f0 = _, u | 0);
          case 2: {
            o[1787] = 0;
            break;
          }
          case 3: {
            l = o[1800] | 0, o[1787] = (o[1786] | 0) - l + (o[1787] | 0), o[1786] = l;
            break;
          }
          default:
            return f0 = _, u | 0;
        }
        if (o[1798] = (o[1798] | 0) + 1, (E1(o[1794] | 0, 7264, 0) | 0) != 2)
          return f0 = _, u | 0;
        do
          o[1796] = (o[1796] | 0) + 1, C1(o[1816] | 0, o[1803] | 0, o[1804] | 0);
        while ((E1(o[1794] | 0, 7264, 0) | 0) == 2);
        return f0 = _, u | 0;
      }
      function xi() {
        var u = 0, _ = 0;
        _ = f0, u = o[1784] | 0, u && Ke(u), f0 = _;
      }
      function bi() {
        var u = 0, _ = 0;
        return _ = f0, f0 = f0 + 16 | 0, u = _, S1(u), f0 = _, o[u >> 2] | 0;
      }
      function Si() {
        var u = 0, _ = 0;
        return _ = f0, f0 = f0 + 16 | 0, u = _, S1(u), f0 = _, o[u + 4 >> 2] | 0;
      }
      function M2(u) {
        u = u | 0;
        var _ = 0;
        return _ = f0, u = je(u) | 0, f0 = _, u | 0;
      }
      function r2(u) {
        u = u | 0;
        var _ = 0;
        _ = f0, Ke(u), f0 = _;
      }
      function Qe(u, _, l) {
        u = u | 0, _ = _ | 0, l = l | 0;
        var P = 0;
        P = f0, e1(u | 0, _ | 0, l | 0) | 0, f0 = P;
      }
      function U2(u, _, l) {
        u = u | 0, _ = _ | 0, l = l | 0;
        var P = 0;
        P = f0, g2(u | 0, _ & 255 | 0, l | 0) | 0, f0 = P;
      }
      function je(u) {
        u = u | 0;
        var _ = 0, l = 0, P = 0, T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0, m0 = 0, y0 = 0, S0 = 0, E0 = 0, T0 = 0, g0 = 0, U0 = 0, L0 = 0, O0 = 0, Y0 = 0, H0 = 0, Q0 = 0, N0 = 0, J0 = 0, $0 = 0;
        $0 = f0;
        do
          if (u >>> 0 < 245) {
            if (u >>> 0 < 11 ? p0 = 16 : p0 = u + 11 & -8, u = p0 >>> 3, e0 = o[1828] | 0, j = e0 >>> u, j & 3) {
              q = (j & 1 ^ 1) + u | 0, _ = q << 1, C = 7352 + (_ << 2) | 0, _ = 7352 + (_ + 2 << 2) | 0, P = o[_ >> 2] | 0, i0 = P + 8 | 0, T = o[i0 >> 2] | 0;
              do
                if ((C | 0) != (T | 0))
                  if (T >>> 0 < (o[1832] | 0) >>> 0 && I0(), l = T + 12 | 0, (o[l >> 2] | 0) == (P | 0)) {
                    o[l >> 2] = C, o[_ >> 2] = T;
                    break;
                  } else I0();
                else o[1828] = e0 & ~(1 << q);
              while (!1);
              return m0 = q << 3, o[P + 4 >> 2] = m0 | 3, m0 = P + (m0 | 4) | 0, o[m0 >> 2] = o[m0 >> 2] | 1, m0 = i0, f0 = $0, m0 | 0;
            }
            if (i0 = o[1830] | 0, p0 >>> 0 > i0 >>> 0) {
              if (j) {
                q = 2 << u, q = j << u & (q | 0 - q), q = (q & 0 - q) + -1 | 0, u = q >>> 12 & 16, q = q >>> u, C = q >>> 5 & 8, q = q >>> C, l = q >>> 2 & 4, q = q >>> l, P = q >>> 1 & 2, q = q >>> P, T = q >>> 1 & 1, T = (C | u | l | P | T) + (q >>> T) | 0, q = T << 1, P = 7352 + (q << 2) | 0, q = 7352 + (q + 2 << 2) | 0, l = o[q >> 2] | 0, u = l + 8 | 0, C = o[u >> 2] | 0;
                do
                  if ((P | 0) != (C | 0))
                    if (C >>> 0 < (o[1832] | 0) >>> 0 && I0(), i0 = C + 12 | 0, (o[i0 >> 2] | 0) == (l | 0)) {
                      o[i0 >> 2] = P, o[q >> 2] = C, t0 = o[1830] | 0;
                      break;
                    } else I0();
                  else
                    o[1828] = e0 & ~(1 << T), t0 = i0;
                while (!1);
                return m0 = T << 3, j = m0 - p0 | 0, o[l + 4 >> 2] = p0 | 3, _ = l + p0 | 0, o[l + (p0 | 4) >> 2] = j | 1, o[l + m0 >> 2] = j, t0 && (P = o[1833] | 0, q = t0 >>> 3, C = q << 1, T = 7352 + (C << 2) | 0, i0 = o[1828] | 0, q = 1 << q, i0 & q ? (i0 = 7352 + (C + 2 << 2) | 0, C = o[i0 >> 2] | 0, C >>> 0 < (o[1832] | 0) >>> 0 ? I0() : (s0 = i0, c0 = C)) : (o[1828] = i0 | q, s0 = 7352 + (C + 2 << 2) | 0, c0 = T), o[s0 >> 2] = P, o[c0 + 12 >> 2] = P, o[P + 8 >> 2] = c0, o[P + 12 >> 2] = T), o[1830] = j, o[1833] = _, m0 = u, f0 = $0, m0 | 0;
              }
              if (j = o[1829] | 0, j) {
                for (e0 = (j & 0 - j) + -1 | 0, v0 = e0 >>> 12 & 16, e0 = e0 >>> v0, B0 = e0 >>> 5 & 8, e0 = e0 >>> B0, m0 = e0 >>> 2 & 4, e0 = e0 >>> m0, i0 = e0 >>> 1 & 2, e0 = e0 >>> i0, t0 = e0 >>> 1 & 1, t0 = o[7616 + ((B0 | v0 | m0 | i0 | t0) + (e0 >>> t0) << 2) >> 2] | 0, e0 = (o[t0 + 4 >> 2] & -8) - p0 | 0, i0 = t0; l = o[i0 + 16 >> 2] | 0, !(!l && (l = o[i0 + 20 >> 2] | 0, !l)); )
                  i0 = (o[l + 4 >> 2] & -8) - p0 | 0, m0 = i0 >>> 0 < e0 >>> 0, e0 = m0 ? i0 : e0, i0 = l, t0 = m0 ? l : t0;
                j = o[1832] | 0, t0 >>> 0 < j >>> 0 && I0(), _ = t0 + p0 | 0, t0 >>> 0 >= _ >>> 0 && I0(), u = o[t0 + 24 >> 2] | 0, q = o[t0 + 12 >> 2] | 0;
                do
                  if ((q | 0) == (t0 | 0)) {
                    if (C = t0 + 20 | 0, i0 = o[C >> 2] | 0, !i0 && (C = t0 + 16 | 0, i0 = o[C >> 2] | 0, !i0)) {
                      P = 0;
                      break;
                    }
                    for (; ; ) {
                      if (T = i0 + 20 | 0, q = o[T >> 2] | 0, q) {
                        i0 = q, C = T;
                        continue;
                      }
                      if (T = i0 + 16 | 0, q = o[T >> 2] | 0, q) i0 = q, C = T;
                      else
                        break;
                    }
                    if (C >>> 0 < j >>> 0) I0();
                    else {
                      o[C >> 2] = 0, P = i0;
                      break;
                    }
                  } else if (T = o[t0 + 8 >> 2] | 0, T >>> 0 < j >>> 0 && I0(), i0 = T + 12 | 0, (o[i0 >> 2] | 0) != (t0 | 0) && I0(), C = q + 8 | 0, (o[C >> 2] | 0) == (t0 | 0)) {
                    o[i0 >> 2] = q, o[C >> 2] = T, P = q;
                    break;
                  } else I0();
                while (!1);
                do
                  if (u) {
                    if (i0 = o[t0 + 28 >> 2] | 0, C = 7616 + (i0 << 2) | 0, (t0 | 0) == (o[C >> 2] | 0)) {
                      if (o[C >> 2] = P, !P) {
                        o[1829] = o[1829] & ~(1 << i0);
                        break;
                      }
                    } else if (u >>> 0 < (o[1832] | 0) >>> 0 && I0(), i0 = u + 16 | 0, (o[i0 >> 2] | 0) == (t0 | 0) ? o[i0 >> 2] = P : o[u + 20 >> 2] = P, !P) break;
                    C = o[1832] | 0, P >>> 0 < C >>> 0 && I0(), o[P + 24 >> 2] = u, i0 = o[t0 + 16 >> 2] | 0;
                    do
                      if (i0)
                        if (i0 >>> 0 < C >>> 0) I0();
                        else {
                          o[P + 16 >> 2] = i0, o[i0 + 24 >> 2] = P;
                          break;
                        }
                    while (!1);
                    if (T = o[t0 + 20 >> 2] | 0, T)
                      if (T >>> 0 < (o[1832] | 0) >>> 0)
                        I0();
                      else {
                        o[P + 20 >> 2] = T, o[T + 24 >> 2] = P;
                        break;
                      }
                  }
                while (!1);
                return e0 >>> 0 < 16 ? (m0 = e0 + p0 | 0, o[t0 + 4 >> 2] = m0 | 3, m0 = t0 + (m0 + 4) | 0, o[m0 >> 2] = o[m0 >> 2] | 1) : (o[t0 + 4 >> 2] = p0 | 3, o[t0 + (p0 | 4) >> 2] = e0 | 1, o[t0 + (e0 + p0) >> 2] = e0, l = o[1830] | 0, l && (P = o[1833] | 0, q = l >>> 3, C = q << 1, T = 7352 + (C << 2) | 0, i0 = o[1828] | 0, q = 1 << q, i0 & q ? (i0 = 7352 + (C + 2 << 2) | 0, C = o[i0 >> 2] | 0, C >>> 0 < (o[1832] | 0) >>> 0 ? I0() : (h0 = i0, d0 = C)) : (o[1828] = i0 | q, h0 = 7352 + (C + 2 << 2) | 0, d0 = T), o[h0 >> 2] = P, o[d0 + 12 >> 2] = P, o[P + 8 >> 2] = d0, o[P + 12 >> 2] = T), o[1830] = e0, o[1833] = _), m0 = t0 + 8 | 0, f0 = $0, m0 | 0;
              }
            }
          } else if (u >>> 0 <= 4294967231) {
            if (u = u + 11 | 0, p0 = u & -8, t0 = o[1829] | 0, t0) {
              C = 0 - p0 | 0, u = u >>> 8, u ? p0 >>> 0 > 16777215 ? e0 = 31 : (d0 = (u + 1048320 | 0) >>> 16 & 8, h0 = u << d0, c0 = (h0 + 520192 | 0) >>> 16 & 4, h0 = h0 << c0, e0 = (h0 + 245760 | 0) >>> 16 & 2, e0 = 14 - (c0 | d0 | e0) + (h0 << e0 >>> 15) | 0, e0 = p0 >>> (e0 + 7 | 0) & 1 | e0 << 1) : e0 = 0, i0 = o[7616 + (e0 << 2) >> 2] | 0;
              e: do
                if (!i0)
                  u = 0, j = 0;
                else
                  for ((e0 | 0) == 31 ? j = 0 : j = 25 - (e0 >>> 1) | 0, T = C, u = 0, P = p0 << j, j = 0; ; ) {
                    if (q = o[i0 + 4 >> 2] & -8, C = q - p0 | 0, C >>> 0 < T >>> 0)
                      if ((q | 0) == (p0 | 0)) {
                        u = i0, j = i0;
                        break e;
                      } else j = i0;
                    else C = T;
                    if (h0 = o[i0 + 20 >> 2] | 0, i0 = o[i0 + (P >>> 31 << 2) + 16 >> 2] | 0, u = (h0 | 0) == 0 | (h0 | 0) == (i0 | 0) ? u : h0, i0) T = C, P = P << 1;
                    else
                      break;
                  }
              while (!1);
              if ((u | 0) == 0 & (j | 0) == 0) {
                if (u = 2 << e0, u = t0 & (u | 0 - u), !u) break;
                h0 = (u & 0 - u) + -1 | 0, s0 = h0 >>> 12 & 16, h0 = h0 >>> s0, t0 = h0 >>> 5 & 8, h0 = h0 >>> t0, c0 = h0 >>> 2 & 4, h0 = h0 >>> c0, d0 = h0 >>> 1 & 2, h0 = h0 >>> d0, u = h0 >>> 1 & 1, u = o[7616 + ((t0 | s0 | c0 | d0 | u) + (h0 >>> u) << 2) >> 2] | 0;
              }
              if (!u)
                s0 = C, t0 = j;
              else
                for (; ; ) {
                  if (h0 = (o[u + 4 >> 2] & -8) - p0 | 0, i0 = h0 >>> 0 < C >>> 0, C = i0 ? h0 : C, j = i0 ? u : j, i0 = o[u + 16 >> 2] | 0, i0) {
                    u = i0;
                    continue;
                  }
                  if (u = o[u + 20 >> 2] | 0, !u) {
                    s0 = C, t0 = j;
                    break;
                  }
                }
              if ((t0 | 0) != 0 && s0 >>> 0 < ((o[1830] | 0) - p0 | 0) >>> 0) {
                j = o[1832] | 0, t0 >>> 0 < j >>> 0 && I0(), c0 = t0 + p0 | 0, t0 >>> 0 >= c0 >>> 0 && I0(), u = o[t0 + 24 >> 2] | 0, q = o[t0 + 12 >> 2] | 0;
                do
                  if ((q | 0) == (t0 | 0)) {
                    if (C = t0 + 20 | 0, i0 = o[C >> 2] | 0, !i0 && (C = t0 + 16 | 0, i0 = o[C >> 2] | 0, !i0)) {
                      _ = 0;
                      break;
                    }
                    for (; ; ) {
                      if (T = i0 + 20 | 0, q = o[T >> 2] | 0, q) {
                        i0 = q, C = T;
                        continue;
                      }
                      if (T = i0 + 16 | 0, q = o[T >> 2] | 0, q) i0 = q, C = T;
                      else
                        break;
                    }
                    if (C >>> 0 < j >>> 0) I0();
                    else {
                      o[C >> 2] = 0, _ = i0;
                      break;
                    }
                  } else if (T = o[t0 + 8 >> 2] | 0, T >>> 0 < j >>> 0 && I0(), i0 = T + 12 | 0, (o[i0 >> 2] | 0) != (t0 | 0) && I0(), C = q + 8 | 0, (o[C >> 2] | 0) == (t0 | 0)) {
                    o[i0 >> 2] = q, o[C >> 2] = T, _ = q;
                    break;
                  } else I0();
                while (!1);
                do
                  if (u) {
                    if (i0 = o[t0 + 28 >> 2] | 0, C = 7616 + (i0 << 2) | 0, (t0 | 0) == (o[C >> 2] | 0)) {
                      if (o[C >> 2] = _, !_) {
                        o[1829] = o[1829] & ~(1 << i0);
                        break;
                      }
                    } else if (u >>> 0 < (o[1832] | 0) >>> 0 && I0(), i0 = u + 16 | 0, (o[i0 >> 2] | 0) == (t0 | 0) ? o[i0 >> 2] = _ : o[u + 20 >> 2] = _, !_) break;
                    C = o[1832] | 0, _ >>> 0 < C >>> 0 && I0(), o[_ + 24 >> 2] = u, i0 = o[t0 + 16 >> 2] | 0;
                    do
                      if (i0)
                        if (i0 >>> 0 < C >>> 0) I0();
                        else {
                          o[_ + 16 >> 2] = i0, o[i0 + 24 >> 2] = _;
                          break;
                        }
                    while (!1);
                    if (i0 = o[t0 + 20 >> 2] | 0, i0)
                      if (i0 >>> 0 < (o[1832] | 0) >>> 0)
                        I0();
                      else {
                        o[_ + 20 >> 2] = i0, o[i0 + 24 >> 2] = _;
                        break;
                      }
                  }
                while (!1);
                e: do
                  if (s0 >>> 0 >= 16) {
                    if (o[t0 + 4 >> 2] = p0 | 3, o[t0 + (p0 | 4) >> 2] = s0 | 1, o[t0 + (s0 + p0) >> 2] = s0, i0 = s0 >>> 3, s0 >>> 0 < 256) {
                      q = i0 << 1, l = 7352 + (q << 2) | 0, C = o[1828] | 0, i0 = 1 << i0;
                      do
                        if (!(C & i0))
                          o[1828] = C | i0, w0 = 7352 + (q + 2 << 2) | 0, A0 = l;
                        else {
                          if (T = 7352 + (q + 2 << 2) | 0, P = o[T >> 2] | 0, P >>> 0 >= (o[1832] | 0) >>> 0) {
                            w0 = T, A0 = P;
                            break;
                          }
                          I0();
                        }
                      while (!1);
                      o[w0 >> 2] = c0, o[A0 + 12 >> 2] = c0, o[t0 + (p0 + 8) >> 2] = A0, o[t0 + (p0 + 12) >> 2] = l;
                      break;
                    }
                    if (l = s0 >>> 8, l ? s0 >>> 0 > 16777215 ? T = 31 : (v0 = (l + 1048320 | 0) >>> 16 & 8, m0 = l << v0, A0 = (m0 + 520192 | 0) >>> 16 & 4, m0 = m0 << A0, T = (m0 + 245760 | 0) >>> 16 & 2, T = 14 - (A0 | v0 | T) + (m0 << T >>> 15) | 0, T = s0 >>> (T + 7 | 0) & 1 | T << 1) : T = 0, C = 7616 + (T << 2) | 0, o[t0 + (p0 + 28) >> 2] = T, o[t0 + (p0 + 20) >> 2] = 0, o[t0 + (p0 + 16) >> 2] = 0, i0 = o[1829] | 0, q = 1 << T, !(i0 & q)) {
                      o[1829] = i0 | q, o[C >> 2] = c0, o[t0 + (p0 + 24) >> 2] = C, o[t0 + (p0 + 12) >> 2] = c0, o[t0 + (p0 + 8) >> 2] = c0;
                      break;
                    }
                    i0 = o[C >> 2] | 0, (T | 0) == 31 ? l = 0 : l = 25 - (T >>> 1) | 0;
                    r: do
                      if ((o[i0 + 4 >> 2] & -8 | 0) != (s0 | 0)) {
                        for (T = s0 << l; q = i0 + (T >>> 31 << 2) + 16 | 0, C = o[q >> 2] | 0, !!C; )
                          if ((o[C + 4 >> 2] & -8 | 0) == (s0 | 0)) {
                            B0 = C;
                            break r;
                          } else
                            T = T << 1, i0 = C;
                        if (q >>> 0 < (o[1832] | 0) >>> 0)
                          I0();
                        else {
                          o[q >> 2] = c0, o[t0 + (p0 + 24) >> 2] = i0, o[t0 + (p0 + 12) >> 2] = c0, o[t0 + (p0 + 8) >> 2] = c0;
                          break e;
                        }
                      } else B0 = i0;
                    while (!1);
                    if (_ = B0 + 8 | 0, l = o[_ >> 2] | 0, m0 = o[1832] | 0, B0 >>> 0 >= m0 >>> 0 & l >>> 0 >= m0 >>> 0) {
                      o[l + 12 >> 2] = c0, o[_ >> 2] = c0, o[t0 + (p0 + 8) >> 2] = l, o[t0 + (p0 + 12) >> 2] = B0, o[t0 + (p0 + 24) >> 2] = 0;
                      break;
                    } else I0();
                  } else
                    m0 = s0 + p0 | 0, o[t0 + 4 >> 2] = m0 | 3, m0 = t0 + (m0 + 4) | 0, o[m0 >> 2] = o[m0 >> 2] | 1;
                while (!1);
                return m0 = t0 + 8 | 0, f0 = $0, m0 | 0;
              }
            }
          } else p0 = -1;
        while (!1);
        if (j = o[1830] | 0, j >>> 0 >= p0 >>> 0)
          return l = j - p0 | 0, _ = o[1833] | 0, l >>> 0 > 15 ? (o[1833] = _ + p0, o[1830] = l, o[_ + (p0 + 4) >> 2] = l | 1, o[_ + j >> 2] = l, o[_ + 4 >> 2] = p0 | 3) : (o[1830] = 0, o[1833] = 0, o[_ + 4 >> 2] = j | 3, m0 = _ + (j + 4) | 0, o[m0 >> 2] = o[m0 >> 2] | 1), m0 = _ + 8 | 0, f0 = $0, m0 | 0;
        if (j = o[1831] | 0, j >>> 0 > p0 >>> 0)
          return v0 = j - p0 | 0, o[1831] = v0, m0 = o[1834] | 0, o[1834] = m0 + p0, o[m0 + (p0 + 4) >> 2] = v0 | 1, o[m0 + 4 >> 2] = p0 | 3, m0 = m0 + 8 | 0, f0 = $0, m0 | 0;
        do
          if (!(o[1946] | 0))
            if (j = I1(30) | 0, j + -1 & j)
              I0();
            else {
              o[1948] = j, o[1947] = j, o[1949] = -1, o[1950] = -1, o[1951] = 0, o[1939] = 0, o[1946] = (z1(0) | 0) & -16 ^ 1431655768;
              break;
            }
        while (!1);
        if (e0 = p0 + 48 | 0, q = o[1948] | 0, T = p0 + 47 | 0, C = q + T | 0, q = 0 - q | 0, t0 = C & q, t0 >>> 0 <= p0 >>> 0 || (u = o[1938] | 0, (u | 0) != 0 && (A0 = o[1936] | 0, B0 = A0 + t0 | 0, B0 >>> 0 <= A0 >>> 0 | B0 >>> 0 > u >>> 0)))
          return m0 = 0, f0 = $0, m0 | 0;
        e: do
          if (o[1939] & 4)
            j = 0, E0 = 198;
          else {
            i0 = o[1834] | 0;
            r: do
              if (i0) {
                for (u = 7760; j = o[u >> 2] | 0, !(j >>> 0 <= i0 >>> 0 && (k0 = u + 4 | 0, (j + (o[k0 >> 2] | 0) | 0) >>> 0 > i0 >>> 0)); )
                  if (u = o[u + 8 >> 2] | 0, !u) {
                    E0 = 181;
                    break r;
                  }
                u ? (j = C - (o[1831] | 0) & q, j >>> 0 < 2147483647 ? (i0 = ce(j | 0) | 0, (i0 | 0) == ((o[u >> 2] | 0) + (o[k0 >> 2] | 0) | 0) ? E0 = 190 : E0 = 191) : j = 0) : E0 = 181;
              } else E0 = 181;
            while (!1);
            do
              if ((E0 | 0) == 181)
                if (i0 = ce(0) | 0, (i0 | 0) != -1)
                  if (u = i0, j = o[1947] | 0, C = j + -1 | 0, C & u ? j = t0 - u + (C + u & 0 - j) | 0 : j = t0, u = o[1936] | 0, C = u + j | 0, j >>> 0 > p0 >>> 0 & j >>> 0 < 2147483647) {
                    if (B0 = o[1938] | 0, (B0 | 0) != 0 && C >>> 0 <= u >>> 0 | C >>> 0 > B0 >>> 0) {
                      j = 0;
                      break;
                    }
                    C = ce(j | 0) | 0, (C | 0) == (i0 | 0) ? E0 = 190 : (i0 = C, E0 = 191);
                  } else j = 0;
                else j = 0;
            while (!1);
            r: do
              if ((E0 | 0) == 190) {
                if ((i0 | 0) != -1) {
                  v0 = i0, k0 = j, E0 = 201;
                  break e;
                }
              } else if ((E0 | 0) == 191) {
                u = 0 - j | 0;
                do
                  if ((i0 | 0) != -1 & j >>> 0 < 2147483647 & e0 >>> 0 > j >>> 0 && (l = o[1948] | 0, l = T - j + l & 0 - l, l >>> 0 < 2147483647))
                    if ((ce(l | 0) | 0) == -1) {
                      ce(u | 0) | 0, j = 0;
                      break r;
                    } else {
                      j = l + j | 0;
                      break;
                    }
                while (!1);
                if ((i0 | 0) == -1) j = 0;
                else {
                  v0 = i0, k0 = j, E0 = 201;
                  break e;
                }
              }
            while (!1);
            o[1939] = o[1939] | 4, E0 = 198;
          }
        while (!1);
        if ((E0 | 0) == 198 && t0 >>> 0 < 2147483647 && (v0 = ce(t0 | 0) | 0, m0 = ce(0) | 0, (v0 | 0) != -1 & (m0 | 0) != -1 & v0 >>> 0 < m0 >>> 0) && (S0 = m0 - v0 | 0, y0 = S0 >>> 0 > (p0 + 40 | 0) >>> 0, y0) && (k0 = y0 ? S0 : j, E0 = 201), (E0 | 0) == 201) {
          i0 = (o[1936] | 0) + k0 | 0, o[1936] = i0, i0 >>> 0 > (o[1937] | 0) >>> 0 && (o[1937] = i0), c0 = o[1834] | 0;
          e: do
            if (c0) {
              for (T = 7760; ; ) {
                if (j = o[T >> 2] | 0, q = T + 4 | 0, i0 = o[q >> 2] | 0, (v0 | 0) == (j + i0 | 0)) {
                  E0 = 213;
                  break;
                }
                if (C = o[T + 8 >> 2] | 0, C) T = C;
                else break;
              }
              if ((E0 | 0) == 213 && (o[T + 12 >> 2] & 8 | 0) == 0 && c0 >>> 0 >= j >>> 0 & c0 >>> 0 < v0 >>> 0) {
                o[q >> 2] = i0 + k0, l = (o[1831] | 0) + k0 | 0, _ = c0 + 8 | 0, _ & 7 ? _ = 0 - _ & 7 : _ = 0, m0 = l - _ | 0, o[1834] = c0 + _, o[1831] = m0, o[c0 + (_ + 4) >> 2] = m0 | 1, o[c0 + (l + 4) >> 2] = 40, o[1835] = o[1950];
                break;
              }
              for (j = o[1832] | 0, v0 >>> 0 < j >>> 0 && (o[1832] = v0, j = v0), C = v0 + k0 | 0, q = 7760; ; ) {
                if ((o[q >> 2] | 0) == (C | 0)) {
                  E0 = 223;
                  break;
                }
                if (i0 = o[q + 8 >> 2] | 0, i0) q = i0;
                else break;
              }
              if ((E0 | 0) == 223 && (o[q + 12 >> 2] & 8 | 0) == 0) {
                o[q >> 2] = v0, i0 = q + 4 | 0, o[i0 >> 2] = (o[i0 >> 2] | 0) + k0, i0 = v0 + 8 | 0, i0 & 7 ? h0 = 0 - i0 & 7 : h0 = 0, i0 = v0 + (k0 + 8) | 0, i0 & 7 ? _ = 0 - i0 & 7 : _ = 0, i0 = v0 + (_ + k0) | 0, d0 = h0 + p0 | 0, s0 = v0 + d0 | 0, l = i0 - (v0 + h0) - p0 | 0, o[v0 + (h0 + 4) >> 2] = p0 | 3;
                r: do
                  if ((i0 | 0) != (c0 | 0)) {
                    if ((i0 | 0) == (o[1833] | 0)) {
                      m0 = (o[1830] | 0) + l | 0, o[1830] = m0, o[1833] = s0, o[v0 + (d0 + 4) >> 2] = m0 | 1, o[v0 + (m0 + d0) >> 2] = m0;
                      break;
                    }
                    if (e0 = k0 + 4 | 0, C = o[v0 + (e0 + _) >> 2] | 0, (C & 3 | 0) == 1) {
                      t0 = C & -8, P = C >>> 3;
                      i: do
                        if (C >>> 0 >= 256) {
                          u = o[v0 + ((_ | 24) + k0) >> 2] | 0, q = o[v0 + (k0 + 12 + _) >> 2] | 0;
                          do
                            if ((q | 0) == (i0 | 0)) {
                              if (q = _ | 16, T = v0 + (e0 + q) | 0, C = o[T >> 2] | 0, C)
                                q = T;
                              else if (q = v0 + (q + k0) | 0, C = o[q >> 2] | 0, !C) {
                                H0 = 0;
                                break;
                              }
                              for (; ; ) {
                                if (P = C + 20 | 0, T = o[P >> 2] | 0, T) {
                                  C = T, q = P;
                                  continue;
                                }
                                if (P = C + 16 | 0, T = o[P >> 2] | 0, T)
                                  C = T, q = P;
                                else
                                  break;
                              }
                              if (q >>> 0 < j >>> 0)
                                I0();
                              else {
                                o[q >> 2] = 0, H0 = C;
                                break;
                              }
                            } else if (T = o[v0 + ((_ | 8) + k0) >> 2] | 0, T >>> 0 < j >>> 0 && I0(), j = T + 12 | 0, (o[j >> 2] | 0) != (i0 | 0) && I0(), C = q + 8 | 0, (o[C >> 2] | 0) == (i0 | 0)) {
                              o[j >> 2] = q, o[C >> 2] = T, H0 = q;
                              break;
                            } else I0();
                          while (!1);
                          if (!u) break;
                          j = o[v0 + (k0 + 28 + _) >> 2] | 0, C = 7616 + (j << 2) | 0;
                          do
                            if ((i0 | 0) != (o[C >> 2] | 0)) {
                              if (u >>> 0 < (o[1832] | 0) >>> 0 && I0(), j = u + 16 | 0, (o[j >> 2] | 0) == (i0 | 0) ? o[j >> 2] = H0 : o[u + 20 >> 2] = H0, !H0) break i;
                            } else {
                              if (o[C >> 2] = H0, H0) break;
                              o[1829] = o[1829] & ~(1 << j);
                              break i;
                            }
                          while (!1);
                          C = o[1832] | 0, H0 >>> 0 < C >>> 0 && I0(), o[H0 + 24 >> 2] = u, i0 = _ | 16, j = o[v0 + (i0 + k0) >> 2] | 0;
                          do
                            if (j)
                              if (j >>> 0 < C >>> 0)
                                I0();
                              else {
                                o[H0 + 16 >> 2] = j, o[j + 24 >> 2] = H0;
                                break;
                              }
                          while (!1);
                          if (i0 = o[v0 + (e0 + i0) >> 2] | 0, !i0) break;
                          if (i0 >>> 0 < (o[1832] | 0) >>> 0)
                            I0();
                          else {
                            o[H0 + 20 >> 2] = i0, o[i0 + 24 >> 2] = H0;
                            break;
                          }
                        } else {
                          q = o[v0 + ((_ | 8) + k0) >> 2] | 0, T = o[v0 + (k0 + 12 + _) >> 2] | 0, C = 7352 + (P << 1 << 2) | 0;
                          do
                            if ((q | 0) != (C | 0)) {
                              if (q >>> 0 < j >>> 0 && I0(), (o[q + 12 >> 2] | 0) == (i0 | 0))
                                break;
                              I0();
                            }
                          while (!1);
                          if ((T | 0) == (q | 0)) {
                            o[1828] = o[1828] & ~(1 << P);
                            break;
                          }
                          do
                            if ((T | 0) == (C | 0))
                              U0 = T + 8 | 0;
                            else {
                              if (T >>> 0 < j >>> 0 && I0(), j = T + 8 | 0, (o[j >> 2] | 0) == (i0 | 0)) {
                                U0 = j;
                                break;
                              }
                              I0();
                            }
                          while (!1);
                          o[q + 12 >> 2] = T, o[U0 >> 2] = q;
                        }
                      while (!1);
                      i0 = v0 + ((t0 | _) + k0) | 0, j = t0 + l | 0;
                    } else j = l;
                    if (i0 = i0 + 4 | 0, o[i0 >> 2] = o[i0 >> 2] & -2, o[v0 + (d0 + 4) >> 2] = j | 1, o[v0 + (j + d0) >> 2] = j, i0 = j >>> 3, j >>> 0 < 256) {
                      q = i0 << 1, T = 7352 + (q << 2) | 0, C = o[1828] | 0, i0 = 1 << i0;
                      do
                        if (!(C & i0))
                          o[1828] = C | i0, Q0 = 7352 + (q + 2 << 2) | 0, N0 = T;
                        else {
                          if (i0 = 7352 + (q + 2 << 2) | 0, C = o[i0 >> 2] | 0, C >>> 0 >= (o[1832] | 0) >>> 0) {
                            Q0 = i0, N0 = C;
                            break;
                          }
                          I0();
                        }
                      while (!1);
                      o[Q0 >> 2] = s0, o[N0 + 12 >> 2] = s0, o[v0 + (d0 + 8) >> 2] = N0, o[v0 + (d0 + 12) >> 2] = T;
                      break;
                    }
                    l = j >>> 8;
                    do
                      if (!l) T = 0;
                      else {
                        if (j >>> 0 > 16777215) {
                          T = 31;
                          break;
                        }
                        B0 = (l + 1048320 | 0) >>> 16 & 8, m0 = l << B0, A0 = (m0 + 520192 | 0) >>> 16 & 4, m0 = m0 << A0, T = (m0 + 245760 | 0) >>> 16 & 2, T = 14 - (A0 | B0 | T) + (m0 << T >>> 15) | 0, T = j >>> (T + 7 | 0) & 1 | T << 1;
                      }
                    while (!1);
                    if (C = 7616 + (T << 2) | 0, o[v0 + (d0 + 28) >> 2] = T, o[v0 + (d0 + 20) >> 2] = 0, o[v0 + (d0 + 16) >> 2] = 0, i0 = o[1829] | 0, q = 1 << T, !(i0 & q)) {
                      o[1829] = i0 | q, o[C >> 2] = s0, o[v0 + (d0 + 24) >> 2] = C, o[v0 + (d0 + 12) >> 2] = s0, o[v0 + (d0 + 8) >> 2] = s0;
                      break;
                    }
                    i0 = o[C >> 2] | 0, (T | 0) == 31 ? C = 0 : C = 25 - (T >>> 1) | 0;
                    i: do
                      if ((o[i0 + 4 >> 2] & -8 | 0) != (j | 0)) {
                        for (T = j << C; q = i0 + (T >>> 31 << 2) + 16 | 0, C = o[q >> 2] | 0, !!C; )
                          if ((o[C + 4 >> 2] & -8 | 0) == (j | 0)) {
                            J0 = C;
                            break i;
                          } else
                            T = T << 1, i0 = C;
                        if (q >>> 0 < (o[1832] | 0) >>> 0)
                          I0();
                        else {
                          o[q >> 2] = s0, o[v0 + (d0 + 24) >> 2] = i0, o[v0 + (d0 + 12) >> 2] = s0, o[v0 + (d0 + 8) >> 2] = s0;
                          break r;
                        }
                      } else J0 = i0;
                    while (!1);
                    if (_ = J0 + 8 | 0, l = o[_ >> 2] | 0, m0 = o[1832] | 0, J0 >>> 0 >= m0 >>> 0 & l >>> 0 >= m0 >>> 0) {
                      o[l + 12 >> 2] = s0, o[_ >> 2] = s0, o[v0 + (d0 + 8) >> 2] = l, o[v0 + (d0 + 12) >> 2] = J0, o[v0 + (d0 + 24) >> 2] = 0;
                      break;
                    } else I0();
                  } else
                    m0 = (o[1831] | 0) + l | 0, o[1831] = m0, o[1834] = s0, o[v0 + (d0 + 4) >> 2] = m0 | 1;
                while (!1);
                return m0 = v0 + (h0 | 8) | 0, f0 = $0, m0 | 0;
              }
              for (i0 = 7760; C = o[i0 >> 2] | 0, !(C >>> 0 <= c0 >>> 0 && (T0 = o[i0 + 4 >> 2] | 0, g0 = C + T0 | 0, g0 >>> 0 > c0 >>> 0)); )
                i0 = o[i0 + 8 >> 2] | 0;
              if (i0 = C + (T0 + -39) | 0, i0 & 7 ? i0 = 0 - i0 & 7 : i0 = 0, q = C + (T0 + -47 + i0) | 0, q = q >>> 0 < (c0 + 16 | 0) >>> 0 ? c0 : q, C = q + 8 | 0, i0 = v0 + 8 | 0, i0 & 7 ? i0 = 0 - i0 & 7 : i0 = 0, T = k0 + -40 - i0 | 0, o[1834] = v0 + i0, o[1831] = T, o[v0 + (i0 + 4) >> 2] = T | 1, o[v0 + (k0 + -36) >> 2] = 40, o[1835] = o[1950], o[q + 4 >> 2] = 27, o[C + 0 >> 2] = o[1940], o[C + 4 >> 2] = o[1941], o[C + 8 >> 2] = o[1942], o[C + 12 >> 2] = o[1943], o[1940] = v0, o[1941] = k0, o[1943] = 0, o[1942] = C, T = q + 28 | 0, o[T >> 2] = 7, (q + 32 | 0) >>> 0 < g0 >>> 0)
                do
                  m0 = T, T = T + 4 | 0, o[T >> 2] = 7;
                while ((m0 + 8 | 0) >>> 0 < g0 >>> 0);
              if ((q | 0) != (c0 | 0)) {
                if (j = q - c0 | 0, i0 = c0 + (j + 4) | 0, o[i0 >> 2] = o[i0 >> 2] & -2, o[c0 + 4 >> 2] = j | 1, o[c0 + j >> 2] = j, i0 = j >>> 3, j >>> 0 < 256) {
                  q = i0 << 1, T = 7352 + (q << 2) | 0, C = o[1828] | 0, i0 = 1 << i0;
                  do
                    if (!(C & i0))
                      o[1828] = C | i0, L0 = 7352 + (q + 2 << 2) | 0, O0 = T;
                    else {
                      if (l = 7352 + (q + 2 << 2) | 0, _ = o[l >> 2] | 0, _ >>> 0 >= (o[1832] | 0) >>> 0) {
                        L0 = l, O0 = _;
                        break;
                      }
                      I0();
                    }
                  while (!1);
                  o[L0 >> 2] = c0, o[O0 + 12 >> 2] = c0, o[c0 + 8 >> 2] = O0, o[c0 + 12 >> 2] = T;
                  break;
                }
                if (l = j >>> 8, l ? j >>> 0 > 16777215 ? q = 31 : (v0 = (l + 1048320 | 0) >>> 16 & 8, m0 = l << v0, B0 = (m0 + 520192 | 0) >>> 16 & 4, m0 = m0 << B0, q = (m0 + 245760 | 0) >>> 16 & 2, q = 14 - (B0 | v0 | q) + (m0 << q >>> 15) | 0, q = j >>> (q + 7 | 0) & 1 | q << 1) : q = 0, C = 7616 + (q << 2) | 0, o[c0 + 28 >> 2] = q, o[c0 + 20 >> 2] = 0, o[c0 + 16 >> 2] = 0, P = o[1829] | 0, i0 = 1 << q, !(P & i0)) {
                  o[1829] = P | i0, o[C >> 2] = c0, o[c0 + 24 >> 2] = C, o[c0 + 12 >> 2] = c0, o[c0 + 8 >> 2] = c0;
                  break;
                }
                P = o[C >> 2] | 0, (q | 0) == 31 ? l = 0 : l = 25 - (q >>> 1) | 0;
                r: do
                  if ((o[P + 4 >> 2] & -8 | 0) != (j | 0)) {
                    for (i0 = j << l; C = P + (i0 >>> 31 << 2) + 16 | 0, l = o[C >> 2] | 0, !!l; )
                      if ((o[l + 4 >> 2] & -8 | 0) == (j | 0)) {
                        Y0 = l;
                        break r;
                      } else
                        i0 = i0 << 1, P = l;
                    if (C >>> 0 < (o[1832] | 0) >>> 0)
                      I0();
                    else {
                      o[C >> 2] = c0, o[c0 + 24 >> 2] = P, o[c0 + 12 >> 2] = c0, o[c0 + 8 >> 2] = c0;
                      break e;
                    }
                  } else Y0 = P;
                while (!1);
                if (_ = Y0 + 8 | 0, l = o[_ >> 2] | 0, m0 = o[1832] | 0, Y0 >>> 0 >= m0 >>> 0 & l >>> 0 >= m0 >>> 0) {
                  o[l + 12 >> 2] = c0, o[_ >> 2] = c0, o[c0 + 8 >> 2] = l, o[c0 + 12 >> 2] = Y0, o[c0 + 24 >> 2] = 0;
                  break;
                } else I0();
              }
            } else {
              m0 = o[1832] | 0, (m0 | 0) == 0 | v0 >>> 0 < m0 >>> 0 && (o[1832] = v0), o[1940] = v0, o[1941] = k0, o[1943] = 0, o[1837] = o[1946], o[1836] = -1, _ = 0;
              do
                m0 = _ << 1, B0 = 7352 + (m0 << 2) | 0, o[7352 + (m0 + 3 << 2) >> 2] = B0, o[7352 + (m0 + 2 << 2) >> 2] = B0, _ = _ + 1 | 0;
              while ((_ | 0) != 32);
              _ = v0 + 8 | 0, _ & 7 ? _ = 0 - _ & 7 : _ = 0, m0 = k0 + -40 - _ | 0, o[1834] = v0 + _, o[1831] = m0, o[v0 + (_ + 4) >> 2] = m0 | 1, o[v0 + (k0 + -36) >> 2] = 40, o[1835] = o[1950];
            }
          while (!1);
          if (_ = o[1831] | 0, _ >>> 0 > p0 >>> 0)
            return v0 = _ - p0 | 0, o[1831] = v0, m0 = o[1834] | 0, o[1834] = m0 + p0, o[m0 + (p0 + 4) >> 2] = v0 | 1, o[m0 + 4 >> 2] = p0 | 3, m0 = m0 + 8 | 0, f0 = $0, m0 | 0;
        }
        return o[(O1() | 0) >> 2] = 12, m0 = 0, f0 = $0, m0 | 0;
      }
      function Ke(u) {
        u = u | 0;
        var _ = 0, l = 0, P = 0, T = 0, q = 0, C = 0, i0 = 0, j = 0, e0 = 0, t0 = 0, s0 = 0, c0 = 0, p0 = 0, d0 = 0, h0 = 0, k0 = 0, w0 = 0, A0 = 0, B0 = 0, v0 = 0;
        if (v0 = f0, !u) {
          f0 = v0;
          return;
        }
        T = u + -8 | 0, C = o[1832] | 0, T >>> 0 < C >>> 0 && I0(), q = o[u + -4 >> 2] | 0, P = q & 3, (P | 0) == 1 && I0(), d0 = q & -8, h0 = u + (d0 + -8) | 0;
        do
          if (q & 1)
            B0 = T, e0 = d0;
          else {
            if (q = o[T >> 2] | 0, !P) {
              f0 = v0;
              return;
            }
            if (i0 = -8 - q | 0, t0 = u + i0 | 0, s0 = q + d0 | 0, t0 >>> 0 < C >>> 0 && I0(), (t0 | 0) == (o[1833] | 0)) {
              if (T = u + (d0 + -4) | 0, q = o[T >> 2] | 0, (q & 3 | 0) != 3) {
                B0 = t0, e0 = s0;
                break;
              }
              o[1830] = s0, o[T >> 2] = q & -2, o[u + (i0 + 4) >> 2] = s0 | 1, o[h0 >> 2] = s0, f0 = v0;
              return;
            }
            if (l = q >>> 3, q >>> 0 < 256) {
              if (P = o[u + (i0 + 8) >> 2] | 0, T = o[u + (i0 + 12) >> 2] | 0, q = 7352 + (l << 1 << 2) | 0, (P | 0) != (q | 0) && (P >>> 0 < C >>> 0 && I0(), (o[P + 12 >> 2] | 0) != (t0 | 0) && I0()), (T | 0) == (P | 0)) {
                o[1828] = o[1828] & ~(1 << l), B0 = t0, e0 = s0;
                break;
              }
              (T | 0) != (q | 0) ? (T >>> 0 < C >>> 0 && I0(), q = T + 8 | 0, (o[q >> 2] | 0) == (t0 | 0) ? _ = q : I0()) : _ = T + 8 | 0, o[P + 12 >> 2] = T, o[_ >> 2] = P, B0 = t0, e0 = s0;
              break;
            }
            _ = o[u + (i0 + 24) >> 2] | 0, P = o[u + (i0 + 12) >> 2] | 0;
            do
              if ((P | 0) == (t0 | 0)) {
                if (T = u + (i0 + 20) | 0, q = o[T >> 2] | 0, !q && (T = u + (i0 + 16) | 0, q = o[T >> 2] | 0, !q)) {
                  j = 0;
                  break;
                }
                for (; ; ) {
                  if (l = q + 20 | 0, P = o[l >> 2] | 0, P) {
                    q = P, T = l;
                    continue;
                  }
                  if (l = q + 16 | 0, P = o[l >> 2] | 0, P) q = P, T = l;
                  else
                    break;
                }
                if (T >>> 0 < C >>> 0) I0();
                else {
                  o[T >> 2] = 0, j = q;
                  break;
                }
              } else if (l = o[u + (i0 + 8) >> 2] | 0, l >>> 0 < C >>> 0 && I0(), q = l + 12 | 0, (o[q >> 2] | 0) != (t0 | 0) && I0(), T = P + 8 | 0, (o[T >> 2] | 0) == (t0 | 0)) {
                o[q >> 2] = P, o[T >> 2] = l, j = P;
                break;
              } else I0();
            while (!1);
            if (_) {
              if (q = o[u + (i0 + 28) >> 2] | 0, T = 7616 + (q << 2) | 0, (t0 | 0) == (o[T >> 2] | 0)) {
                if (o[T >> 2] = j, !j) {
                  o[1829] = o[1829] & ~(1 << q), B0 = t0, e0 = s0;
                  break;
                }
              } else if (_ >>> 0 < (o[1832] | 0) >>> 0 && I0(), q = _ + 16 | 0, (o[q >> 2] | 0) == (t0 | 0) ? o[q >> 2] = j : o[_ + 20 >> 2] = j, !j) {
                B0 = t0, e0 = s0;
                break;
              }
              T = o[1832] | 0, j >>> 0 < T >>> 0 && I0(), o[j + 24 >> 2] = _, q = o[u + (i0 + 16) >> 2] | 0;
              do
                if (q)
                  if (q >>> 0 < T >>> 0) I0();
                  else {
                    o[j + 16 >> 2] = q, o[q + 24 >> 2] = j;
                    break;
                  }
              while (!1);
              if (q = o[u + (i0 + 20) >> 2] | 0, q)
                if (q >>> 0 < (o[1832] | 0) >>> 0) I0();
                else {
                  o[j + 20 >> 2] = q, o[q + 24 >> 2] = j, B0 = t0, e0 = s0;
                  break;
                }
              else
                B0 = t0, e0 = s0;
            } else
              B0 = t0, e0 = s0;
          }
        while (!1);
        if (B0 >>> 0 >= h0 >>> 0 && I0(), q = u + (d0 + -4) | 0, T = o[q >> 2] | 0, T & 1 || I0(), T & 2)
          o[q >> 2] = T & -2, o[B0 + 4 >> 2] = e0 | 1, o[B0 + e0 >> 2] = e0, q = e0;
        else {
          if ((h0 | 0) == (o[1834] | 0)) {
            if (t0 = (o[1831] | 0) + e0 | 0, o[1831] = t0, o[1834] = B0, o[B0 + 4 >> 2] = t0 | 1, (B0 | 0) != (o[1833] | 0)) {
              f0 = v0;
              return;
            }
            o[1833] = 0, o[1830] = 0, f0 = v0;
            return;
          }
          if ((h0 | 0) == (o[1833] | 0)) {
            t0 = (o[1830] | 0) + e0 | 0, o[1830] = t0, o[1833] = B0, o[B0 + 4 >> 2] = t0 | 1, o[B0 + t0 >> 2] = t0, f0 = v0;
            return;
          }
          C = (T & -8) + e0 | 0, l = T >>> 3;
          do
            if (T >>> 0 >= 256) {
              _ = o[u + (d0 + 16) >> 2] | 0, q = o[u + (d0 | 4) >> 2] | 0;
              do
                if ((q | 0) == (h0 | 0)) {
                  if (T = u + (d0 + 12) | 0, q = o[T >> 2] | 0, !q && (T = u + (d0 + 8) | 0, q = o[T >> 2] | 0, !q)) {
                    p0 = 0;
                    break;
                  }
                  for (; ; ) {
                    if (l = q + 20 | 0, P = o[l >> 2] | 0, P) {
                      q = P, T = l;
                      continue;
                    }
                    if (l = q + 16 | 0, P = o[l >> 2] | 0, P) q = P, T = l;
                    else
                      break;
                  }
                  if (T >>> 0 < (o[1832] | 0) >>> 0) I0();
                  else {
                    o[T >> 2] = 0, p0 = q;
                    break;
                  }
                } else if (T = o[u + d0 >> 2] | 0, T >>> 0 < (o[1832] | 0) >>> 0 && I0(), P = T + 12 | 0, (o[P >> 2] | 0) != (h0 | 0) && I0(), l = q + 8 | 0, (o[l >> 2] | 0) == (h0 | 0)) {
                  o[P >> 2] = q, o[l >> 2] = T, p0 = q;
                  break;
                } else I0();
              while (!1);
              if (_) {
                if (q = o[u + (d0 + 20) >> 2] | 0, T = 7616 + (q << 2) | 0, (h0 | 0) == (o[T >> 2] | 0)) {
                  if (o[T >> 2] = p0, !p0) {
                    o[1829] = o[1829] & ~(1 << q);
                    break;
                  }
                } else if (_ >>> 0 < (o[1832] | 0) >>> 0 && I0(), q = _ + 16 | 0, (o[q >> 2] | 0) == (h0 | 0) ? o[q >> 2] = p0 : o[_ + 20 >> 2] = p0, !p0) break;
                q = o[1832] | 0, p0 >>> 0 < q >>> 0 && I0(), o[p0 + 24 >> 2] = _, T = o[u + (d0 + 8) >> 2] | 0;
                do
                  if (T)
                    if (T >>> 0 < q >>> 0) I0();
                    else {
                      o[p0 + 16 >> 2] = T, o[T + 24 >> 2] = p0;
                      break;
                    }
                while (!1);
                if (l = o[u + (d0 + 12) >> 2] | 0, l)
                  if (l >>> 0 < (o[1832] | 0) >>> 0) I0();
                  else {
                    o[p0 + 20 >> 2] = l, o[l + 24 >> 2] = p0;
                    break;
                  }
              }
            } else {
              if (P = o[u + d0 >> 2] | 0, T = o[u + (d0 | 4) >> 2] | 0, q = 7352 + (l << 1 << 2) | 0, (P | 0) != (q | 0) && (P >>> 0 < (o[1832] | 0) >>> 0 && I0(), (o[P + 12 >> 2] | 0) != (h0 | 0) && I0()), (T | 0) == (P | 0)) {
                o[1828] = o[1828] & ~(1 << l);
                break;
              }
              (T | 0) != (q | 0) ? (T >>> 0 < (o[1832] | 0) >>> 0 && I0(), q = T + 8 | 0, (o[q >> 2] | 0) == (h0 | 0) ? c0 = q : I0()) : c0 = T + 8 | 0, o[P + 12 >> 2] = T, o[c0 >> 2] = P;
            }
          while (!1);
          if (o[B0 + 4 >> 2] = C | 1, o[B0 + C >> 2] = C, (B0 | 0) == (o[1833] | 0)) {
            o[1830] = C, f0 = v0;
            return;
          } else q = C;
        }
        if (P = q >>> 3, q >>> 0 < 256) {
          T = P << 1, q = 7352 + (T << 2) | 0, l = o[1828] | 0, P = 1 << P, l & P ? (l = 7352 + (T + 2 << 2) | 0, _ = o[l >> 2] | 0, _ >>> 0 < (o[1832] | 0) >>> 0 ? I0() : (k0 = l, w0 = _)) : (o[1828] = l | P, k0 = 7352 + (T + 2 << 2) | 0, w0 = q), o[k0 >> 2] = B0, o[w0 + 12 >> 2] = B0, o[B0 + 8 >> 2] = w0, o[B0 + 12 >> 2] = q, f0 = v0;
          return;
        }
        l = q >>> 8, l ? q >>> 0 > 16777215 ? T = 31 : (e0 = (l + 1048320 | 0) >>> 16 & 8, t0 = l << e0, j = (t0 + 520192 | 0) >>> 16 & 4, t0 = t0 << j, T = (t0 + 245760 | 0) >>> 16 & 2, T = 14 - (j | e0 | T) + (t0 << T >>> 15) | 0, T = q >>> (T + 7 | 0) & 1 | T << 1) : T = 0, _ = 7616 + (T << 2) | 0, o[B0 + 28 >> 2] = T, o[B0 + 20 >> 2] = 0, o[B0 + 16 >> 2] = 0, l = o[1829] | 0, P = 1 << T;
        e: do
          if (l & P) {
            _ = o[_ >> 2] | 0, (T | 0) == 31 ? l = 0 : l = 25 - (T >>> 1) | 0;
            r: do
              if ((o[_ + 4 >> 2] & -8 | 0) != (q | 0)) {
                for (T = q << l; P = _ + (T >>> 31 << 2) + 16 | 0, l = o[P >> 2] | 0, !!l; )
                  if ((o[l + 4 >> 2] & -8 | 0) == (q | 0)) {
                    A0 = l;
                    break r;
                  } else
                    T = T << 1, _ = l;
                if (P >>> 0 < (o[1832] | 0) >>> 0) I0();
                else {
                  o[P >> 2] = B0, o[B0 + 24 >> 2] = _, o[B0 + 12 >> 2] = B0, o[B0 + 8 >> 2] = B0;
                  break e;
                }
              } else A0 = _;
            while (!1);
            if (l = A0 + 8 | 0, _ = o[l >> 2] | 0, t0 = o[1832] | 0, A0 >>> 0 >= t0 >>> 0 & _ >>> 0 >= t0 >>> 0) {
              o[_ + 12 >> 2] = B0, o[l >> 2] = B0, o[B0 + 8 >> 2] = _, o[B0 + 12 >> 2] = A0, o[B0 + 24 >> 2] = 0;
              break;
            } else I0();
          } else
            o[1829] = l | P, o[_ >> 2] = B0, o[B0 + 24 >> 2] = _, o[B0 + 12 >> 2] = B0, o[B0 + 8 >> 2] = B0;
        while (!1);
        if (t0 = (o[1836] | 0) + -1 | 0, o[1836] = t0, !t0) _ = 7768;
        else {
          f0 = v0;
          return;
        }
        for (; _ = o[_ >> 2] | 0, _; )
          _ = _ + 8 | 0;
        o[1836] = -1, f0 = v0;
      }
      function Ei() {
      }
      function Ui(u) {
        u = u | 0;
        var _ = 0;
        for (_ = u; n0[_ >> 0] | 0; ) _ = _ + 1 | 0;
        return _ - u | 0;
      }
      function g2(u, _, l) {
        u = u | 0, _ = _ | 0, l = l | 0;
        var P = 0, T = 0, q = 0, C = 0;
        if (P = u + l | 0, (l | 0) >= 20) {
          if (_ = _ & 255, q = u & 3, C = _ | _ << 8 | _ << 16 | _ << 24, T = P & -4, q)
            for (q = u + 4 - q | 0; (u | 0) < (q | 0); )
              n0[u >> 0] = _, u = u + 1 | 0;
          for (; (u | 0) < (T | 0); )
            o[u >> 2] = C, u = u + 4 | 0;
        }
        for (; (u | 0) < (P | 0); )
          n0[u >> 0] = _, u = u + 1 | 0;
        return u - l | 0;
      }
      function e1(u, _, l) {
        u = u | 0, _ = _ | 0, l = l | 0;
        var P = 0;
        if ((l | 0) >= 4096) return L1(u | 0, _ | 0, l | 0) | 0;
        if (P = u | 0, (u & 3) == (_ & 3)) {
          for (; u & 3; ) {
            if (!l) return P | 0;
            n0[u >> 0] = n0[_ >> 0] | 0, u = u + 1 | 0, _ = _ + 1 | 0, l = l - 1 | 0;
          }
          for (; (l | 0) >= 4; )
            o[u >> 2] = o[_ >> 2], u = u + 4 | 0, _ = _ + 4 | 0, l = l - 4 | 0;
        }
        for (; (l | 0) > 0; )
          n0[u >> 0] = n0[_ >> 0] | 0, u = u + 1 | 0, _ = _ + 1 | 0, l = l - 1 | 0;
        return P | 0;
      }
      function _i(u, _, l, P, T, q) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, q = q | 0, Xe[u & 3](_ | 0, l | 0, P | 0, T | 0, q | 0);
      }
      function U1(u, _, l, P, T) {
        u = u | 0, _ = _ | 0, l = l | 0, P = P | 0, T = T | 0, F1(0);
      }
      var Xe = [U1, W1, X1, U1];
      return {
        _strlen: Ui,
        _free: Ke,
        _broadwayGetMajorVersion: bi,
        _get_h264bsdClip: Wr,
        _broadwayExit: xi,
        _memset: g2,
        _broadwayCreateStream: vi,
        _malloc: je,
        _memcpy: e1,
        _broadwayGetMinorVersion: Si,
        _broadwayPlayStream: Bi,
        _broadwaySetStreamLength: yi,
        _broadwayInit: gi,
        runPostSets: Ei,
        stackAlloc: nr,
        stackSave: or,
        stackRestore: sr,
        setThrew: fr,
        setTempRet0: ur,
        getTempRet0: lr,
        dynCall_viiiii: _i
      };
    }(
      // EMSCRIPTEN_END_ASM
      p.Xc,
      p.Yc,
      Q
    ), Bb = p._strlen = $._strlen, Ea = p._free = $._free;
    p._broadwayGetMajorVersion = $._broadwayGetMajorVersion, p._get_h264bsdClip = $._get_h264bsdClip, p._broadwayExit = $._broadwayExit;
    var Gb = p._memset = $._memset;
    p._broadwayCreateStream = $._broadwayCreateStream;
    var Ca = p._malloc = $._malloc, gc = p._memcpy = $._memcpy;
    p._broadwayGetMinorVersion = $._broadwayGetMinorVersion, p._broadwayPlayStream = $._broadwayPlayStream, p._broadwaySetStreamLength = $._broadwaySetStreamLength, p._broadwayInit = $._broadwayInit, p.runPostSets = $.runPostSets, p.dynCall_viiiii = $.dynCall_viiiii, z.pb = $.stackAlloc, z.Tb = $.stackSave, z.Sb = $.stackRestore, z.Yd = $.setTempRet0, z.xd = $.getTempRet0;
    function ia(r0) {
      this.name = "ExitStatus", this.message = "Program terminated with exit(" + r0 + ")", this.status = r0;
    }
    ia.prototype = Error();
    var ic, jc = k, Xa = function r0() {
      !p.calledRun && lc && mc(), p.calledRun || (Xa = r0);
    };
    p.callMain = p.ag = function(r0) {
      function o0() {
        for (var l0 = 0; 3 > l0; l0++) n0.push(0);
      }
      w(
        S == 0,
        "cannot call main when async dependencies remain! (listen on __ATMAIN__)"
      ), w(
        Oa.length == 0,
        "cannot call main when preRun functions remain to be called"
      ), r0 = r0 || [], Sa || (Sa = i, Na(R));
      var a0 = r0.length + 1, n0 = [M(Va(p.thisProgram), "i8", 0)];
      o0();
      for (var u0 = 0; u0 < a0 - 1; u0 += 1) n0.push(M(Va(r0[u0]), "i8", 0)), o0();
      n0.push(0), n0 = M(n0, "i32", 0), ic = y;
      try {
        var o = p._main(a0, n0, 0);
        nc(o);
      } catch (l0) {
        l0 instanceof ia || (l0 == "SimulateInfiniteLoop" ? p.noExitRuntime = i : (l0 && typeof l0 == "object" && l0.stack && p.fa("exception thrown: " + [l0, l0.stack]), d(l0)));
      } finally {
      }
    };
    function mc(r0) {
      function o0() {
        if (!p.calledRun && (p.calledRun = i, !H)) {
          if (Sa || (Sa = i, Na(R)), Na(Pa), ba && jc !== k && p.fa("pre-main prep time: " + (Date.now() - jc) + " ms"), p.onRuntimeInitialized && p.onRuntimeInitialized(), p._main && lc && p.callMain(r0), p.postRun)
            for (typeof p.postRun == "function" && (p.postRun = [p.postRun]); p.postRun.length; )
              Ua(p.postRun.shift());
          Na(Ra);
        }
      }
      if (r0 = r0 || p.arguments, jc === k && (jc = Date.now()), !(0 < S)) {
        if (p.preRun)
          for (typeof p.preRun == "function" && (p.preRun = [p.preRun]); p.preRun.length; )
            Ta(p.preRun.shift());
        Na(Oa), !(0 < S) && !p.calledRun && (p.setStatus ? (p.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            p.setStatus("");
          }, 1), o0();
        }, 1)) : o0());
      }
    }
    p.run = p.Ng = mc;
    function nc(r0) {
      p.noExitRuntime || (H = i, y = ic, Na(Qa), da && typeof quit == "function" && quit(r0), d(new ia(r0)));
    }
    p.exit = p.hg = nc;
    function A(r0) {
      r0 && (p.print(r0), p.fa(r0)), H = i, d(
        "abort() at " + Fa() + `
If this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.`
      );
    }
    if (p.abort = p.abort = A, p.preInit)
      for (typeof p.preInit == "function" && (p.preInit = [p.preInit]); 0 < p.preInit.length; )
        p.preInit.pop()();
    var lc = m;
    p.noInitialRun && (lc = m), mc();
    var resultModule = window.Module || global.Module || Module;
    return resultModule;
  }, nowValue = function() {
    return (/* @__PURE__ */ new Date()).getTime();
  };
  typeof performance < "u" && performance.now && (nowValue = function() {
    return performance.now();
  });
  var Broadway = function(r0) {
    this.options = r0 || {}, this.now = nowValue;
    var o0, a0 = {}, n0 = getModule.apply(a0, [
      function() {
      },
      (function(b0, F0, M0) {
        var R0 = this.pictureBuffers[b0];
        R0 || (R0 = this.pictureBuffers[b0] = l0(
          b0,
          F0 * M0 * 3 / 2
        ));
        var f0, V0 = !1;
        if (this.infoAr.length && (V0 = !0, f0 = this.infoAr), this.infoAr = [], this.options.rgb) {
          o0 || (o0 = getAsm(F0, M0)), o0.inp.set(R0), o0.doit();
          var C0 = new Uint8Array(o0.outSize);
          C0.set(o0.out), V0 && (f0[0].finishDecoding = nowValue()), this.onPictureDecoded(C0, F0, M0, f0);
          return;
        }
        V0 && (f0[0].finishDecoding = nowValue()), this.onPictureDecoded(R0, F0, M0, f0);
      }).bind(this)
    ]);
    n0.HEAP8;
    var u0 = n0.HEAPU8;
    n0.HEAP16, n0.HEAP32, n0._get_h264bsdClip();
    var o = 1024 * 1024;
    n0._broadwayInit();
    function l0(b0, F0) {
      return u0.subarray(b0, b0 + F0);
    }
    this.streamBuffer = l0(
      n0._broadwayCreateStream(o),
      o
    ), this.pictureBuffers = {}, this.infoAr = [], this.onPictureDecoded = function(b0, F0, M0, R0) {
    }, this.decode = function(F0, M0) {
      M0 && (this.infoAr.push(M0), M0.startDecoding = nowValue()), this.streamBuffer.set(F0), n0._broadwaySetStreamLength(F0.length), n0._broadwayPlayStream();
    };
  };
  Broadway.prototype = {
    configure: function(r0) {
      console.info("Broadway Configured: " + JSON.stringify(r0));
    }
  };
  var asmInstances = {}, getAsm = function(r0, o0) {
    var a0 = "" + r0 + "x" + o0;
    if (asmInstances[a0])
      return asmInstances[a0];
    for (var n0 = r0 * o0, u0 = (n0 | 0) >> 2, o = n0 + u0 + u0, l0 = r0 * o0 * 4, b0 = Math.pow(2, 24) * 4, F0 = o + l0 + b0, M0 = Math.pow(2, 24), R0 = M0; R0 < F0; )
      R0 += M0;
    var f0 = new ArrayBuffer(R0), V0 = asmFactory(global, {}, f0);
    return V0.init(r0, o0), asmInstances[a0] = V0, V0.heap = f0, V0.out = new Uint8Array(f0, 0, l0), V0.inp = new Uint8Array(f0, l0, o), V0.outSize = l0, V0;
  };
  function asmFactory(r0, o0, a0) {
    var n0 = r0.Math.imul, u0 = r0.Math.min, o = r0.Math.max, l0 = r0.Math.pow, b0 = new r0.Uint8Array(a0), F0 = new r0.Uint32Array(a0), M0 = new r0.Uint8Array(a0), R0 = new r0.Uint8Array(a0), f0 = new r0.Uint32Array(a0), V0 = 0, C0 = 0, z0 = 0, X0 = 0, D0 = 0, G0 = 0, Z0 = 0, K0 = 0, o2 = 0, e2 = 0;
    function u2(h2, b2) {
      h2 = h2 | 0, b2 = b2 | 0;
      var S2 = 0, A2 = 0;
      for (V0 = h2, o2 = n0(h2, 4) | 0, C0 = b2, z0 = n0(V0 | 0, C0 | 0) | 0, X0 = (z0 | 0) >> 2, G0 = n0(n0(V0, C0) | 0, 4) | 0, D0 = z0 + X0 | 0 + X0 | 0, K0 = 0, Z0 = K0 + G0 | 0, e2 = Z0 + D0 | 0, A2 = ~~+l0(2, 24), A2 = n0(A2, 4) | 0, S2 = 0; (S2 | 0) < (A2 | 0) | 0; S2 = S2 + 4 | 0)
        f0[(e2 + S2 | 0) >> 2] = 0;
    }
    function re() {
      var h2 = 0, b2 = 0, S2 = 0, A2 = 0, L2 = 0, x2 = 0, k2 = 0, d2 = 0, ie = 0, te = 0, Ce = 0, De = 0, K2 = 0, q2 = 0;
      for (K2 = K0 | 0, h2 = Z0 | 0, b2 = h2 + z0 | 0 | 0, S2 = b2 + X0 | 0, ie = 0; (ie | 0) < (C0 | 0); ie = ie + 2 | 0) {
        for (Ce = b2, De = S2, te = 0; (te | 0) < (V0 | 0); te = te + 2 | 0)
          A2 = M0[h2 >> 0] | 0, L2 = M0[(h2 + V0 | 0) >> 0] | 0, x2 = M0[b2 >> 0] | 0, k2 = M0[S2 >> 0] | 0, q2 = ((A2 << 16 | 0) + (x2 << 8 | 0) | 0) + k2 | 0, d2 = f0[(e2 + q2 | 0) >> 2] | 0, d2 || (d2 = N2(A2, x2, k2) | 0, f0[(e2 + q2 | 0) >> 2] = d2 | 0), f0[K2 >> 2] = d2, q2 = ((L2 << 16 | 0) + (x2 << 8 | 0) | 0) + k2 | 0, d2 = f0[(e2 + q2 | 0) >> 2] | 0, d2 || (d2 = N2(L2, x2, k2) | 0, f0[(e2 + q2 | 0) >> 2] = d2 | 0), f0[(K2 + o2 | 0) >> 2] = d2, K2 = K2 + 4 | 0, h2 = h2 + 1 | 0, A2 = M0[h2 >> 0] | 0, L2 = M0[(h2 + V0 | 0) >> 0] | 0, q2 = ((A2 << 16 | 0) + (x2 << 8 | 0) | 0) + k2 | 0, d2 = f0[(e2 + q2 | 0) >> 2] | 0, d2 || (d2 = N2(A2, x2, k2) | 0, f0[(e2 + q2 | 0) >> 2] = d2 | 0), f0[K2 >> 2] = d2, q2 = ((L2 << 16 | 0) + (x2 << 8 | 0) | 0) + k2 | 0, d2 = f0[(e2 + q2 | 0) >> 2] | 0, d2 || (d2 = N2(L2, x2, k2) | 0, f0[(e2 + q2 | 0) >> 2] = d2 | 0), f0[(K2 + o2 | 0) >> 2] = d2, K2 = K2 + 4 | 0, h2 = h2 + 1 | 0, b2 = b2 + 1 | 0, S2 = S2 + 1 | 0;
        K2 = K2 + o2 | 0, h2 = h2 + V0 | 0;
      }
    }
    function N2(h2, b2, S2) {
      h2 = h2 | 0, b2 = b2 | 0, S2 = S2 | 0;
      var A2 = 0, L2 = 0, x2 = 0, k2 = 0, d2 = 0, ie = 0, te = 0, Ce = 0, De = 0;
      return d2 = n0(1192, h2 - 16 | 0) | 0, ie = n0(1634, S2 - 128 | 0) | 0, te = n0(832, S2 - 128 | 0) | 0, Ce = n0(400, b2 - 128 | 0) | 0, De = n0(2066, b2 - 128 | 0) | 0, A2 = (d2 + ie | 0) >> 10 | 0, L2 = ((d2 - te | 0) - Ce | 0) >> 10 | 0, x2 = (d2 + De | 0) >> 10 | 0, (A2 & 255 | 0) != (A2 | 0) | 0 && (A2 = u0(255, o(0, A2 | 0) | 0) | 0), (L2 & 255 | 0) != (L2 | 0) | 0 && (L2 = u0(255, o(0, L2 | 0) | 0) | 0), (x2 & 255 | 0) != (x2 | 0) | 0 && (x2 = u0(255, o(0, x2 | 0) | 0) | 0), k2 = 255, k2 = k2 << 8 | 0, k2 = k2 + x2 | 0, k2 = k2 << 8 | 0, k2 = k2 + L2 | 0, k2 = k2 << 8 | 0, k2 = k2 + A2 | 0, k2 | 0;
    }
    return {
      init: u2,
      doit: re
    };
  }
  if (typeof self < "u") {
    var isWorker = !1, decoder, reuseMemory = !1, memAr = [], getMem = function(r0) {
      if (memAr.length) {
        for (var o0 = memAr.shift(); o0 && o0.byteLength !== r0; )
          o0 = memAr.shift();
        if (o0)
          return o0;
      }
      return new ArrayBuffer(r0);
    };
    self.addEventListener(
      "message",
      function(r0) {
        isWorker ? (reuseMemory && r0.data.reuse && memAr.push(r0.data.reuse), r0.data.buf && decoder.decode(
          new Uint8Array(
            r0.data.buf,
            r0.data.offset || 0,
            r0.data.length
          ),
          r0.data.info
        )) : r0.data && r0.data.type === "Broadway.js - Worker init" && (isWorker = !0, decoder = new Broadway(r0.data.options), r0.data.options.reuseMemory ? (reuseMemory = !0, decoder.onPictureDecoded = function(o0, a0, n0, u0) {
          var o = new Uint8Array(
            getMem(o0.length)
          );
          o.set(o0, 0, o0.length), postMessage(
            {
              buf: o.buffer,
              length: o0.length,
              width: a0,
              height: n0,
              infos: u0
            },
            [o.buffer]
          );
        }) : decoder.onPictureDecoded = function(o0, a0, n0, u0) {
          o0 && (o0 = new Uint8Array(o0));
          var o = new Uint8Array(o0.length);
          o.set(o0, 0, o0.length), postMessage(
            {
              buf: o.buffer,
              length: o0.length,
              width: a0,
              height: n0,
              infos: u0
            },
            [o.buffer]
          );
        }, postMessage({
          consoleLog: "broadway worker initialized"
        }));
      },
      !1
    );
  }
  return Broadway.nowValue = nowValue, Broadway;
}();
function error(r0) {
  console.error(r0), console.trace();
}
function assert(r0, o0) {
  r0 || error(o0);
}
class Program {
  constructor(o0) {
    s2(this, "gl");
    s2(this, "program");
    this.gl = o0, this.program = this.gl.createProgram();
  }
  attach(o0) {
    this.gl.attachShader(this.program, o0.shader);
  }
  link() {
    this.gl.linkProgram(this.program), assert(
      this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS),
      "Unable to initialize the shader program."
    );
  }
  use() {
    this.gl.useProgram(this.program);
  }
  getAttributeLocation(o0) {
    return this.gl.getAttribLocation(this.program, o0);
  }
  setMatrixUniform(o0, a0) {
    const n0 = this.gl.getUniformLocation(this.program, o0);
    this.gl.uniformMatrix4fv(n0, !1, a0);
  }
}
class Shader {
  constructor(o0, a0) {
    s2(this, "shader");
    if (a0.type === "x-shader/x-fragment")
      this.shader = o0.createShader(o0.FRAGMENT_SHADER);
    else if (a0.type === "x-shader/x-vertex")
      this.shader = o0.createShader(o0.VERTEX_SHADER);
    else {
      error("Unknown shader type: " + a0.type);
      return;
    }
    if (o0.shaderSource(this.shader, a0.source), o0.compileShader(this.shader), !o0.getShaderParameter(this.shader, o0.COMPILE_STATUS)) {
      error(
        "An error occurred compiling the shaders: " + o0.getShaderInfoLog(this.shader)
      );
      return;
    }
  }
}
let textureIDs = null;
class Texture {
  constructor(o0, a0, n0) {
    s2(this, "gl");
    s2(this, "size");
    s2(this, "format");
    s2(this, "texture");
    this.gl = o0, this.size = a0, this.texture = o0.createTexture(), o0.bindTexture(o0.TEXTURE_2D, this.texture), this.format = n0 || o0.LUMINANCE, o0.texImage2D(
      o0.TEXTURE_2D,
      0,
      this.format,
      a0.w,
      a0.h,
      0,
      this.format,
      o0.UNSIGNED_BYTE,
      null
    ), o0.texParameteri(o0.TEXTURE_2D, o0.TEXTURE_MAG_FILTER, o0.NEAREST), o0.texParameteri(o0.TEXTURE_2D, o0.TEXTURE_MIN_FILTER, o0.NEAREST), o0.texParameteri(o0.TEXTURE_2D, o0.TEXTURE_WRAP_S, o0.CLAMP_TO_EDGE), o0.texParameteri(o0.TEXTURE_2D, o0.TEXTURE_WRAP_T, o0.CLAMP_TO_EDGE);
  }
  fill(o0, a0) {
    const n0 = this.gl;
    assert(
      o0.length >= this.size.w * this.size.h,
      "Texture size mismatch, data:" + o0.length + ", texture: " + this.size.w * this.size.h
    ), n0.bindTexture(n0.TEXTURE_2D, this.texture), a0 ? n0.texSubImage2D(
      n0.TEXTURE_2D,
      0,
      0,
      0,
      this.size.w,
      this.size.h,
      this.format,
      n0.UNSIGNED_BYTE,
      o0
    ) : n0.texImage2D(
      n0.TEXTURE_2D,
      0,
      this.format,
      this.size.w,
      this.size.h,
      0,
      this.format,
      n0.UNSIGNED_BYTE,
      o0
    );
  }
  bind(o0, a0, n0) {
    const u0 = this.gl;
    textureIDs || (textureIDs = [u0.TEXTURE0, u0.TEXTURE1, u0.TEXTURE2]), u0.activeTexture(textureIDs[o0]), u0.bindTexture(u0.TEXTURE_2D, this.texture), u0.uniform1i(u0.getUniformLocation(a0.program, n0), o0);
  }
}
class Script {
  constructor() {
    s2(this, "type");
    s2(this, "source");
  }
  static createFromElementId(o0) {
    const a0 = document.getElementById(o0);
    assert(a0 !== null, "Could not find shader with ID: " + o0);
    let n0 = "", u0 = a0.firstChild;
    for (; u0; )
      u0.nodeType === 3 && (n0 += u0.textContent), u0 = u0.nextSibling;
    const o = new Script();
    return o.type = a0.type, o.source = n0, o;
  }
  static createFromSource(o0, a0) {
    const n0 = new Script();
    return n0.type = o0, n0.source = a0, n0;
  }
}
var ARRAY_TYPE = typeof Float32Array < "u" ? Float32Array : Array;
Math.hypot || (Math.hypot = function() {
  for (var r0 = 0, o0 = arguments.length; o0--; )
    r0 += arguments[o0] * arguments[o0];
  return Math.sqrt(r0);
});
function create() {
  var r0 = new ARRAY_TYPE(16);
  return ARRAY_TYPE != Float32Array && (r0[1] = 0, r0[2] = 0, r0[3] = 0, r0[4] = 0, r0[6] = 0, r0[7] = 0, r0[8] = 0, r0[9] = 0, r0[11] = 0, r0[12] = 0, r0[13] = 0, r0[14] = 0), r0[0] = 1, r0[5] = 1, r0[10] = 1, r0[15] = 1, r0;
}
function identity(r0) {
  return r0[0] = 1, r0[1] = 0, r0[2] = 0, r0[3] = 0, r0[4] = 0, r0[5] = 1, r0[6] = 0, r0[7] = 0, r0[8] = 0, r0[9] = 0, r0[10] = 1, r0[11] = 0, r0[12] = 0, r0[13] = 0, r0[14] = 0, r0[15] = 1, r0;
}
function multiply(r0, o0, a0) {
  var n0 = o0[0], u0 = o0[1], o = o0[2], l0 = o0[3], b0 = o0[4], F0 = o0[5], M0 = o0[6], R0 = o0[7], f0 = o0[8], V0 = o0[9], C0 = o0[10], z0 = o0[11], X0 = o0[12], D0 = o0[13], G0 = o0[14], Z0 = o0[15], K0 = a0[0], o2 = a0[1], e2 = a0[2], u2 = a0[3];
  return r0[0] = K0 * n0 + o2 * b0 + e2 * f0 + u2 * X0, r0[1] = K0 * u0 + o2 * F0 + e2 * V0 + u2 * D0, r0[2] = K0 * o + o2 * M0 + e2 * C0 + u2 * G0, r0[3] = K0 * l0 + o2 * R0 + e2 * z0 + u2 * Z0, K0 = a0[4], o2 = a0[5], e2 = a0[6], u2 = a0[7], r0[4] = K0 * n0 + o2 * b0 + e2 * f0 + u2 * X0, r0[5] = K0 * u0 + o2 * F0 + e2 * V0 + u2 * D0, r0[6] = K0 * o + o2 * M0 + e2 * C0 + u2 * G0, r0[7] = K0 * l0 + o2 * R0 + e2 * z0 + u2 * Z0, K0 = a0[8], o2 = a0[9], e2 = a0[10], u2 = a0[11], r0[8] = K0 * n0 + o2 * b0 + e2 * f0 + u2 * X0, r0[9] = K0 * u0 + o2 * F0 + e2 * V0 + u2 * D0, r0[10] = K0 * o + o2 * M0 + e2 * C0 + u2 * G0, r0[11] = K0 * l0 + o2 * R0 + e2 * z0 + u2 * Z0, K0 = a0[12], o2 = a0[13], e2 = a0[14], u2 = a0[15], r0[12] = K0 * n0 + o2 * b0 + e2 * f0 + u2 * X0, r0[13] = K0 * u0 + o2 * F0 + e2 * V0 + u2 * D0, r0[14] = K0 * o + o2 * M0 + e2 * C0 + u2 * G0, r0[15] = K0 * l0 + o2 * R0 + e2 * z0 + u2 * Z0, r0;
}
function translate(r0, o0, a0) {
  var n0 = a0[0], u0 = a0[1], o = a0[2], l0, b0, F0, M0, R0, f0, V0, C0, z0, X0, D0, G0;
  return o0 === r0 ? (r0[12] = o0[0] * n0 + o0[4] * u0 + o0[8] * o + o0[12], r0[13] = o0[1] * n0 + o0[5] * u0 + o0[9] * o + o0[13], r0[14] = o0[2] * n0 + o0[6] * u0 + o0[10] * o + o0[14], r0[15] = o0[3] * n0 + o0[7] * u0 + o0[11] * o + o0[15]) : (l0 = o0[0], b0 = o0[1], F0 = o0[2], M0 = o0[3], R0 = o0[4], f0 = o0[5], V0 = o0[6], C0 = o0[7], z0 = o0[8], X0 = o0[9], D0 = o0[10], G0 = o0[11], r0[0] = l0, r0[1] = b0, r0[2] = F0, r0[3] = M0, r0[4] = R0, r0[5] = f0, r0[6] = V0, r0[7] = C0, r0[8] = z0, r0[9] = X0, r0[10] = D0, r0[11] = G0, r0[12] = l0 * n0 + R0 * u0 + z0 * o + o0[12], r0[13] = b0 * n0 + f0 * u0 + X0 * o + o0[13], r0[14] = F0 * n0 + V0 * u0 + D0 * o + o0[14], r0[15] = M0 * n0 + C0 * u0 + G0 * o + o0[15]), r0;
}
function perspectiveNO(r0, o0, a0, n0, u0) {
  var o = 1 / Math.tan(o0 / 2), l0;
  return r0[0] = o / a0, r0[1] = 0, r0[2] = 0, r0[3] = 0, r0[4] = 0, r0[5] = o, r0[6] = 0, r0[7] = 0, r0[8] = 0, r0[9] = 0, r0[11] = -1, r0[12] = 0, r0[13] = 0, r0[15] = 0, u0 != null && u0 !== 1 / 0 ? (l0 = 1 / (n0 - u0), r0[10] = (u0 + n0) * l0, r0[14] = 2 * u0 * n0 * l0) : (r0[10] = -1, r0[14] = -2 * n0), r0;
}
var perspective = perspectiveNO;
const vertexShaderScript$1 = Script.createFromSource(
  "x-shader/x-vertex",
  `
  attribute vec3 aVertexPosition;
  attribute vec2 aTextureCoord;
  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;
  varying highp vec2 vTextureCoord;
  void main(void) {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    vTextureCoord = aTextureCoord;
  }
`
), fragmentShaderScript$1 = Script.createFromSource(
  "x-shader/x-fragment",
  `
  precision highp float;
  varying highp vec2 vTextureCoord;
  uniform sampler2D texture;
  void main(void) {
    gl_FragColor = texture2D(texture, vTextureCoord);
  }
`
);
class WebGLCanvas {
  constructor(o0, a0, n0) {
    s2(this, "canvas");
    s2(this, "size");
    s2(this, "gl");
    s2(this, "framebuffer");
    s2(this, "framebufferTexture");
    s2(this, "quadVPBuffer");
    s2(this, "quadVTCBuffer");
    s2(this, "mvMatrix");
    s2(this, "program");
    s2(this, "vertexPositionAttribute");
    s2(this, "textureCoordAttribute");
    s2(this, "texture");
    s2(this, "glNames");
    s2(this, "perspectiveMatrix");
    this.canvas = o0, this.size = a0, this.canvas.width = a0.w, this.canvas.height = a0.h, this.mvMatrix = create(), this.perspectiveMatrix = create(), this.onInitWebGL(), this.onInitShaders(), this.initBuffers(), n0 && this.initFramebuffer(), this.onInitTextures();
  }
  initFramebuffer() {
    const o0 = this.gl;
    this.framebuffer = o0.createFramebuffer(), o0.bindFramebuffer(o0.FRAMEBUFFER, this.framebuffer), this.framebufferTexture = new Texture(this.gl, this.size, o0.RGBA);
    const a0 = o0.createRenderbuffer();
    o0.bindRenderbuffer(o0.RENDERBUFFER, a0), o0.renderbufferStorage(
      o0.RENDERBUFFER,
      o0.DEPTH_COMPONENT16,
      this.size.w,
      this.size.h
    ), o0.framebufferTexture2D(
      o0.FRAMEBUFFER,
      o0.COLOR_ATTACHMENT0,
      o0.TEXTURE_2D,
      this.framebufferTexture.texture,
      0
    ), o0.framebufferRenderbuffer(
      o0.FRAMEBUFFER,
      o0.DEPTH_ATTACHMENT,
      o0.RENDERBUFFER,
      a0
    );
  }
  initBuffers() {
    let o0;
    const a0 = this.gl;
    this.quadVPBuffer = a0.createBuffer(), a0.bindBuffer(a0.ARRAY_BUFFER, this.quadVPBuffer), o0 = [1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0], a0.bufferData(a0.ARRAY_BUFFER, new Float32Array(o0), a0.STATIC_DRAW);
    const n0 = 1, u0 = 1;
    this.quadVTCBuffer = a0.createBuffer(), a0.bindBuffer(a0.ARRAY_BUFFER, this.quadVTCBuffer), o0 = [n0, 0, 0, 0, n0, u0, 0, u0], a0.bufferData(a0.ARRAY_BUFFER, new Float32Array(o0), a0.STATIC_DRAW);
  }
  mvIdentity() {
    identity(this.mvMatrix);
  }
  mvMultiply(o0) {
    multiply(this.mvMatrix, this.mvMatrix, o0);
  }
  mvTranslate(o0) {
    translate(this.mvMatrix, this.mvMatrix, o0);
  }
  setMatrixUniforms() {
    this.program.setMatrixUniform("uPMatrix", this.perspectiveMatrix), this.program.setMatrixUniform("uMVMatrix", this.mvMatrix);
  }
  initScene() {
    const o0 = this.gl;
    perspective(
      this.perspectiveMatrix,
      45 * Math.PI / 180,
      1,
      0.1,
      100
    ), this.mvIdentity(), this.mvTranslate([0, 0, -2.4]), o0.bindBuffer(o0.ARRAY_BUFFER, this.quadVPBuffer), o0.vertexAttribPointer(
      this.vertexPositionAttribute,
      3,
      o0.FLOAT,
      !1,
      0,
      0
    ), o0.bindBuffer(o0.ARRAY_BUFFER, this.quadVTCBuffer), o0.vertexAttribPointer(
      this.textureCoordAttribute,
      2,
      o0.FLOAT,
      !1,
      0,
      0
    ), this.setMatrixUniforms(), this.framebuffer && (console.log("Bound Frame Buffer"), o0.bindFramebuffer(o0.FRAMEBUFFER, this.framebuffer));
  }
  toString() {
    return "WebGLCanvas Size: " + this.size;
  }
  checkLastError(o0) {
    const a0 = this.gl.getError();
    if (a0 !== this.gl.NO_ERROR) {
      let n0 = this.glNames[a0];
      n0 = n0 !== void 0 ? n0 + "(" + a0 + ")" : "Unknown WebGL ENUM (0x" + a0.toString(16) + ")", o0 ? console.log("WebGL Error: %s, %s", o0, n0) : console.log("WebGL Error: %s", n0), console.trace();
    }
  }
  onInitWebGL() {
    try {
      this.gl = this.canvas.getContext("webgl");
    } catch {
    }
    if (this.gl || error(
      "Unable to initialize WebGL. Your browser may not support it."
    ), this.glNames)
      return;
    this.glNames = {};
    const o0 = this.gl;
    for (const a0 in o0)
      typeof o0[a0] == "number" && (this.glNames[o0[a0]] = a0);
  }
  onInitShaders() {
    this.program = new Program(this.gl), this.program.attach(new Shader(this.gl, vertexShaderScript$1)), this.program.attach(new Shader(this.gl, fragmentShaderScript$1)), this.program.link(), this.program.use(), this.vertexPositionAttribute = this.program.getAttributeLocation("aVertexPosition"), this.gl.enableVertexAttribArray(this.vertexPositionAttribute), this.textureCoordAttribute = this.program.getAttributeLocation("aTextureCoord"), this.gl.enableVertexAttribArray(this.textureCoordAttribute);
  }
  onInitTextures() {
    const o0 = this.gl;
    this.texture = new Texture(o0, this.size, o0.RGBA), this.texture.bind(0, this.program, "texture");
  }
  drawScene() {
    this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
  }
  readPixels(o0) {
    const a0 = this.gl;
    a0.readPixels(
      0,
      0,
      this.size.w,
      this.size.h,
      a0.RGBA,
      a0.UNSIGNED_BYTE,
      o0
    );
  }
}
const vertexShaderScript = Script.createFromSource(
  "x-shader/x-vertex",
  `
  attribute vec3 aVertexPosition;
  attribute vec2 aTextureCoord;
  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;
  varying highp vec2 vTextureCoord;
  void main(void) {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    vTextureCoord = aTextureCoord;
  }
`
), fragmentShaderScript = Script.createFromSource(
  "x-shader/x-fragment",
  `
  precision highp float;
  varying highp vec2 vTextureCoord;
  uniform sampler2D YTexture;
  uniform sampler2D UTexture;
  uniform sampler2D VTexture;
  const mat4 YUV2RGB = mat4
  (
    1.1643828125, 0, 1.59602734375, -.87078515625,
    1.1643828125, -.39176171875, -.81296875, .52959375,
    1.1643828125, 2.017234375, 0, -1.081390625,
    0, 0, 0, 1
  );

  void main(void) {
    gl_FragColor = vec4( texture2D(YTexture, vTextureCoord).x, texture2D(UTexture, vTextureCoord).x, texture2D(VTexture, vTextureCoord).x, 1) * YUV2RGB;
  }
`
);
class YUVWebGLCanvas extends WebGLCanvas {
  constructor(a0, n0) {
    super(a0, n0, !1);
    s2(this, "YTexture");
    s2(this, "UTexture");
    s2(this, "VTexture");
    this.decode = this.decode.bind(this), this.onInitYUVTextures();
  }
  onInitShaders() {
    this.program = new Program(this.gl), this.program.attach(new Shader(this.gl, vertexShaderScript)), this.program.attach(new Shader(this.gl, fragmentShaderScript)), this.program.link(), this.program.use(), this.vertexPositionAttribute = this.program.getAttributeLocation("aVertexPosition"), this.gl.enableVertexAttribArray(this.vertexPositionAttribute), this.textureCoordAttribute = this.program.getAttributeLocation("aTextureCoord"), this.gl.enableVertexAttribArray(this.textureCoordAttribute);
  }
  onInitYUVTextures() {
    console.log("creatingTextures: size: " + this.size), this.YTexture = new Texture(this.gl, this.size), this.UTexture = new Texture(this.gl, this.size.getHalfSize()), this.VTexture = new Texture(this.gl, this.size.getHalfSize()), this.YTexture.bind(0, this.program, "YTexture"), this.UTexture.bind(1, this.program, "UTexture"), this.VTexture.bind(2, this.program, "VTexture");
  }
  fillYUVTextures(a0, n0, u0) {
    this.YTexture.fill(a0), this.UTexture.fill(n0), this.VTexture.fill(u0);
  }
  decode(a0, n0, u0) {
    if (!a0)
      return;
    const o = n0 * u0, l0 = o >> 2;
    this.YTexture.fill(a0.subarray(0, o)), this.UTexture.fill(a0.subarray(o, o + l0)), this.VTexture.fill(
      a0.subarray(o + l0, o + 2 * l0)
    ), this.drawScene();
  }
  toString() {
    return "YUVCanvas Size: " + this.size;
  }
}
class YUVCanvas {
  constructor(o0, a0) {
    s2(this, "canvas");
    s2(this, "canvasCtx");
    s2(this, "canvasBuffer");
    this.canvas = o0, this.canvasCtx = this.canvas.getContext("2d"), this.canvasBuffer = this.canvasCtx.createImageData(a0.w, a0.h);
  }
  decode(o0, a0, n0) {
    if (!o0)
      return;
    const u0 = a0 * n0, o = u0 >> 2, l0 = o0.subarray(0, u0), b0 = o0.subarray(u0, u0 + o), F0 = o0.subarray(
      u0 + o,
      u0 + 2 * o
    );
    for (let M0 = 0; M0 < n0; M0++)
      for (let R0 = 0; R0 < a0; R0++) {
        const f0 = R0 + M0 * a0, V0 = Math.floor(M0 / 2) * Math.floor(a0 / 2) + Math.floor(R0 / 2), C0 = Math.floor(M0 / 2) * Math.floor(a0 / 2) + Math.floor(R0 / 2);
        let z0 = 1.164 * (l0[f0] - 16) + 1.596 * (F0[C0] - 128), X0 = 1.164 * (l0[f0] - 16) - 0.813 * (F0[C0] - 128) - 0.391 * (b0[V0] - 128), D0 = 1.164 * (l0[f0] - 16) + 2.018 * (b0[V0] - 128);
        z0 = Math.min(255, Math.max(0, z0)), X0 = Math.min(255, Math.max(0, X0)), D0 = Math.min(255, Math.max(0, D0));
        const G0 = f0 * 4;
        this.canvasBuffer.data[G0 + 0] = z0, this.canvasBuffer.data[G0 + 1] = X0, this.canvasBuffer.data[G0 + 2] = D0, this.canvasBuffer.data[G0 + 3] = 255;
      }
    this.canvasCtx.putImageData(this.canvasBuffer, 0, 0);
  }
}
class Size {
  constructor(o0, a0) {
    s2(this, "w");
    s2(this, "h");
    this.w = o0, this.h = a0;
  }
  toString() {
    return `(${this.w}, ${this.h})`;
  }
  getHalfSize() {
    return new Size(this.w >>> 1, this.h >>> 1);
  }
  length() {
    return this.w * this.h;
  }
}
function getDefaultExportFromCjs(r0) {
  return r0 && r0.__esModule && Object.prototype.hasOwnProperty.call(r0, "default") ? r0.default : r0;
}
var eventemitter3 = { exports: {} }, hasRequiredEventemitter3;
function requireEventemitter3() {
  return hasRequiredEventemitter3 || (hasRequiredEventemitter3 = 1, function(r0) {
    var o0 = Object.prototype.hasOwnProperty, a0 = "~";
    function n0() {
    }
    Object.create && (n0.prototype = /* @__PURE__ */ Object.create(null), new n0().__proto__ || (a0 = !1));
    function u0(F0, M0, R0) {
      this.fn = F0, this.context = M0, this.once = R0 || !1;
    }
    function o(F0, M0, R0, f0, V0) {
      if (typeof R0 != "function")
        throw new TypeError("The listener must be a function");
      var C0 = new u0(R0, f0 || F0, V0), z0 = a0 ? a0 + M0 : M0;
      return F0._events[z0] ? F0._events[z0].fn ? F0._events[z0] = [F0._events[z0], C0] : F0._events[z0].push(C0) : (F0._events[z0] = C0, F0._eventsCount++), F0;
    }
    function l0(F0, M0) {
      --F0._eventsCount === 0 ? F0._events = new n0() : delete F0._events[M0];
    }
    function b0() {
      this._events = new n0(), this._eventsCount = 0;
    }
    b0.prototype.eventNames = function() {
      var M0 = [], R0, f0;
      if (this._eventsCount === 0) return M0;
      for (f0 in R0 = this._events)
        o0.call(R0, f0) && M0.push(a0 ? f0.slice(1) : f0);
      return Object.getOwnPropertySymbols ? M0.concat(Object.getOwnPropertySymbols(R0)) : M0;
    }, b0.prototype.listeners = function(M0) {
      var R0 = a0 ? a0 + M0 : M0, f0 = this._events[R0];
      if (!f0) return [];
      if (f0.fn) return [f0.fn];
      for (var V0 = 0, C0 = f0.length, z0 = new Array(C0); V0 < C0; V0++)
        z0[V0] = f0[V0].fn;
      return z0;
    }, b0.prototype.listenerCount = function(M0) {
      var R0 = a0 ? a0 + M0 : M0, f0 = this._events[R0];
      return f0 ? f0.fn ? 1 : f0.length : 0;
    }, b0.prototype.emit = function(M0, R0, f0, V0, C0, z0) {
      var X0 = a0 ? a0 + M0 : M0;
      if (!this._events[X0]) return !1;
      var D0 = this._events[X0], G0 = arguments.length, Z0, K0;
      if (D0.fn) {
        switch (D0.once && this.removeListener(M0, D0.fn, void 0, !0), G0) {
          case 1:
            return D0.fn.call(D0.context), !0;
          case 2:
            return D0.fn.call(D0.context, R0), !0;
          case 3:
            return D0.fn.call(D0.context, R0, f0), !0;
          case 4:
            return D0.fn.call(D0.context, R0, f0, V0), !0;
          case 5:
            return D0.fn.call(D0.context, R0, f0, V0, C0), !0;
          case 6:
            return D0.fn.call(D0.context, R0, f0, V0, C0, z0), !0;
        }
        for (K0 = 1, Z0 = new Array(G0 - 1); K0 < G0; K0++)
          Z0[K0 - 1] = arguments[K0];
        D0.fn.apply(D0.context, Z0);
      } else {
        var o2 = D0.length, e2;
        for (K0 = 0; K0 < o2; K0++)
          switch (D0[K0].once && this.removeListener(M0, D0[K0].fn, void 0, !0), G0) {
            case 1:
              D0[K0].fn.call(D0[K0].context);
              break;
            case 2:
              D0[K0].fn.call(D0[K0].context, R0);
              break;
            case 3:
              D0[K0].fn.call(D0[K0].context, R0, f0);
              break;
            case 4:
              D0[K0].fn.call(D0[K0].context, R0, f0, V0);
              break;
            default:
              if (!Z0) for (e2 = 1, Z0 = new Array(G0 - 1); e2 < G0; e2++)
                Z0[e2 - 1] = arguments[e2];
              D0[K0].fn.apply(D0[K0].context, Z0);
          }
      }
      return !0;
    }, b0.prototype.on = function(M0, R0, f0) {
      return o(this, M0, R0, f0, !1);
    }, b0.prototype.once = function(M0, R0, f0) {
      return o(this, M0, R0, f0, !0);
    }, b0.prototype.removeListener = function(M0, R0, f0, V0) {
      var C0 = a0 ? a0 + M0 : M0;
      if (!this._events[C0]) return this;
      if (!R0)
        return l0(this, C0), this;
      var z0 = this._events[C0];
      if (z0.fn)
        z0.fn === R0 && (!V0 || z0.once) && (!f0 || z0.context === f0) && l0(this, C0);
      else {
        for (var X0 = 0, D0 = [], G0 = z0.length; X0 < G0; X0++)
          (z0[X0].fn !== R0 || V0 && !z0[X0].once || f0 && z0[X0].context !== f0) && D0.push(z0[X0]);
        D0.length ? this._events[C0] = D0.length === 1 ? D0[0] : D0 : l0(this, C0);
      }
      return this;
    }, b0.prototype.removeAllListeners = function(M0) {
      var R0;
      return M0 ? (R0 = a0 ? a0 + M0 : M0, this._events[R0] && l0(this, R0)) : (this._events = new n0(), this._eventsCount = 0), this;
    }, b0.prototype.off = b0.prototype.removeListener, b0.prototype.addListener = b0.prototype.on, b0.prefixed = a0, b0.EventEmitter = b0, r0.exports = b0;
  }(eventemitter3)), eventemitter3.exports;
}
var eventemitter3Exports = requireEventemitter3();
const EventEmitter = /* @__PURE__ */ getDefaultExportFromCjs(eventemitter3Exports), log = console.log;
class WSAvcPlayer extends EventEmitter {
  constructor(a0, n0) {
    super();
    s2(this, "canvas");
    s2(this, "canvastype");
    s2(this, "avc");
    s2(this, "ws");
    s2(this, "pktnum");
    this.canvas = a0, this.canvastype = n0, this.avc = new Avc(), this.ws = void 0, this.pktnum = 0;
  }
  decode(a0) {
    a0.length > 4 && (a0[4] === 101 || a0[4] === 65 || a0[4] === 103 || a0[4]), this.avc.decode(a0);
  }
  connect(a0) {
    this.ws !== void 0 && (this.ws.close(), this.ws = void 0), this.ws = new WebSocket(a0), this.ws.binaryType = "arraybuffer", this.ws.onopen = () => {
      log("Connected to " + a0);
    };
    const n0 = [];
    this.ws.onmessage = (l0) => {
      if (typeof l0.data == "string")
        return this.cmd(JSON.parse(l0.data));
      this.pktnum++;
      const b0 = new Uint8Array(l0.data);
      n0.push(b0);
    };
    let u0 = !0;
    const o = () => {
      if (!u0)
        return;
      n0.length > 10 && (log("Dropping frames", n0.length), n0.length = 0);
      const l0 = n0.shift();
      l0 && this.decode(l0), requestAnimationFrame(o);
    };
    o(), this.ws.onclose = () => {
      u0 = !1, log("WSAvcPlayer: Connection closed");
    };
  }
  initCanvas(a0, n0) {
    if (this.canvastype === "webgl" || this.canvastype === "YUVWebGLCanvas") {
      const u0 = new YUVWebGLCanvas(
        this.canvas,
        new Size(a0, n0)
      );
      u0.initScene(), this.avc.onPictureDecoded = u0.decode;
    } else {
      const u0 = new YUVCanvas(this.canvas, new Size(a0, n0));
      this.avc.onPictureDecoded = u0.decode;
    }
    this.emit("canvasReady", a0, n0);
  }
  cmd(a0) {
    log("Incoming request", a0), a0.action === "init" && (this.initCanvas(a0.width, a0.height), this.canvas.width = a0.width, this.canvas.height = a0.height);
  }
  disconnect() {
    var a0;
    (a0 = this.ws) == null || a0.close();
  }
  playStream() {
    var n0;
    const a0 = "REQUESTSTREAM ";
    (n0 = this.ws) == null || n0.send(a0), log("Sent " + a0);
  }
  stopStream() {
    var a0;
    (a0 = this.ws) == null || a0.send("STOPSTREAM"), log("Sent STOPSTREAM");
  }
}
export {
  WSAvcPlayer as default
};
