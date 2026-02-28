(function () {
  "use strict";

  // ===== DETERMINISTIC HASH =====
  function hashString(str) {
    var h1 = 0xdeadbeef;
    var h2 = 0x41c6ce57;
    for (var i = 0; i < str.length; i++) {
      var ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
    h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
    h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return [h1 >>> 0, h2 >>> 0];
  }

  function hashFloat(title, index) {
    var h = hashString(title + ":" + index);
    return ((h[0] ^ h[1]) >>> 0) / 4294967296;
  }

  function hashInt(title, index, max) {
    return Math.floor(hashFloat(title, index) * max);
  }

  // ===== RENDER NOISE SWATCH =====
  function renderNoiseSwatch(canvas) {
    var title = canvas.getAttribute("data-title");
    if (!title) return;

    var ctx = canvas.getContext("2d");
    var w = canvas.width;
    var h = canvas.height;

    // Hue mapped to green-teal-yellow range (90-160)
    var hue1 = 90 + hashFloat(title, 0) * 70;
    var hue2 = 90 + hashFloat(title, 1) * 70;

    // Gradient direction
    var angle = hashFloat(title, 2) * Math.PI * 2;
    var gx1 = w / 2 + (Math.cos(angle) * w) / 2;
    var gy1 = h / 2 + (Math.sin(angle) * h) / 2;
    var gx2 = w / 2 - (Math.cos(angle) * w) / 2;
    var gy2 = h / 2 - (Math.sin(angle) * h) / 2;

    // Rich base gradient
    var grad = ctx.createLinearGradient(gx1, gy1, gx2, gy2);
    grad.addColorStop(0, "hsla(" + hue1 + ", 58%, 23%, 1)");
    grad.addColorStop(0.5, "hsla(" + (hue1 + hue2) / 2 + ", 50%, 18%, 1)");
    grad.addColorStop(1, "hsla(" + hue2 + ", 45%, 14%, 1)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Deterministic noise overlay
    var imageData = ctx.getImageData(0, 0, w, h);
    var data = imageData.data;

    var seed = hashString(title)[0];
    function seededRandom() {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      return seed / 0x7fffffff;
    }

    // 2x2 pixel blocks for visible grain
    for (var y = 0; y < h; y += 2) {
      for (var x = 0; x < w; x += 2) {
        var noise = (seededRandom() - 0.5) * 50;
        for (var dy = 0; dy < 2 && y + dy < h; dy++) {
          for (var dx = 0; dx < 2 && x + dx < w; dx++) {
            var idx = ((y + dy) * w + (x + dx)) * 4;
            data[idx] = Math.max(0, Math.min(255, data[idx] + noise));
            data[idx + 1] = Math.max(0, Math.min(255, data[idx + 1] + noise));
            data[idx + 2] = Math.max(0, Math.min(255, data[idx + 2] + noise));
          }
        }
      }
    }
    ctx.putImageData(imageData, 0, 0);

    // Soft vignette
    var vig = ctx.createRadialGradient(
      w / 2,
      h / 2,
      w * 0.15,
      w / 2,
      h / 2,
      w * 0.65,
    );
    vig.addColorStop(0, "rgba(0,0,0,0)");
    vig.addColorStop(1, "rgba(0,0,0,0.25)");
    ctx.fillStyle = vig;
    ctx.fillRect(0, 0, w, h);

    // Subtle inner border
    canvas.style.boxShadow = "inset 0 0 0 1px rgba(255,255,255,0.06)";
  }

  // ===== RENDER ARTICLE HERO =====
  function renderArticleHero() {
    var hero = document.getElementById("article-hero");
    var canvas = document.getElementById("article-hero-canvas");
    if (!canvas || !hero) return;

    var title = canvas.getAttribute("data-title");
    if (!title) return;

    var rect = hero.getBoundingClientRect();
    var w = Math.round(rect.width);
    var h = Math.round(rect.height);
    var scale = 2;

    canvas.width = w * scale;
    canvas.height = h * scale;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";

    var ctx = canvas.getContext("2d");
    var cw = canvas.width;
    var ch = canvas.height;

    // Background: dark base
    ctx.fillStyle = "#0a0a0a";
    ctx.fillRect(0, 0, cw, ch);

    // Subtle noise texture
    var noiseData = ctx.getImageData(0, 0, cw, ch);
    var nd = noiseData.data;
    var seed = hashString(title)[0];
    function seededRandom() {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      return seed / 0x7fffffff;
    }

    // 4x4 blocks for subtle grain
    for (var y = 0; y < ch; y += 4) {
      for (var x = 0; x < cw; x += 4) {
        var noise = (seededRandom() - 0.5) * 18;
        for (var dy = 0; dy < 4 && y + dy < ch; dy++) {
          for (var dx = 0; dx < 4 && x + dx < cw; dx++) {
            var idx = ((y + dy) * cw + (x + dx)) * 4;
            nd[idx] = Math.max(0, Math.min(255, nd[idx] + noise));
            nd[idx + 1] = Math.max(0, Math.min(255, nd[idx + 1] + noise));
            nd[idx + 2] = Math.max(0, Math.min(255, nd[idx + 2] + noise));
          }
        }
      }
    }
    ctx.putImageData(noiseData, 0, 0);

    // Generate bezier curves
    var pad = 40 * scale;

    function generateCurve(hashOffset) {
      var startEdge = hashInt(title, hashOffset, 4);
      var endEdge = (startEdge + 1 + hashInt(title, hashOffset + 1, 3)) % 4;

      function edgePoint(edge, t) {
        switch (edge) {
          case 0:
            return [pad + t * (cw - pad * 2), pad];
          case 1:
            return [cw - pad, pad + t * (ch - pad * 2)];
          case 2:
            return [pad + t * (cw - pad * 2), ch - pad];
          case 3:
            return [pad, pad + t * (ch - pad * 2)];
        }
      }

      var sp = edgePoint(startEdge, hashFloat(title, hashOffset + 2));
      var ep = edgePoint(endEdge, hashFloat(title, hashOffset + 3));

      var mx = cw / 2;
      var my = ch / 2;
      var spreadX = (cw - pad * 2) * 0.45;
      var spreadY = (ch - pad * 2) * 0.45;

      return {
        sx: sp[0],
        sy: sp[1],
        cx1: mx + (hashFloat(title, hashOffset + 4) - 0.5) * spreadX,
        cy1: my + (hashFloat(title, hashOffset + 5) - 0.5) * spreadY,
        cx2: mx + (hashFloat(title, hashOffset + 6) - 0.5) * spreadX,
        cy2: my + (hashFloat(title, hashOffset + 7) - 0.5) * spreadY,
        ex: ep[0],
        ey: ep[1],
      };
    }

    var main = generateCurve(10);
    var comp1 = generateCurve(20);
    var comp2 = generateCurve(30);

    // Radial glow at the apex of the main curve
    var apexX =
      0.125 * main.sx + 0.375 * main.cx1 + 0.375 * main.cx2 + 0.125 * main.ex;
    var apexY =
      0.125 * main.sy + 0.375 * main.cy1 + 0.375 * main.cy2 + 0.125 * main.ey;

    var glowRadius = Math.min(cw, ch) * 0.45;
    var glow = ctx.createRadialGradient(
      apexX,
      apexY,
      0,
      apexX,
      apexY,
      glowRadius,
    );
    glow.addColorStop(0, "rgba(74, 222, 128, 0.06)");
    glow.addColorStop(0.4, "rgba(74, 222, 128, 0.03)");
    glow.addColorStop(1, "rgba(74, 222, 128, 0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, cw, ch);

    // Draw companion curves
    ctx.lineCap = "round";

    ctx.beginPath();
    ctx.moveTo(comp1.sx, comp1.sy);
    ctx.bezierCurveTo(
      comp1.cx1,
      comp1.cy1,
      comp1.cx2,
      comp1.cy2,
      comp1.ex,
      comp1.ey,
    );
    ctx.strokeStyle = "rgba(74, 222, 128, 0.06)";
    ctx.lineWidth = 1.5 * scale;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(comp2.sx, comp2.sy);
    ctx.bezierCurveTo(
      comp2.cx1,
      comp2.cy1,
      comp2.cx2,
      comp2.cy2,
      comp2.ex,
      comp2.ey,
    );
    ctx.strokeStyle = "rgba(74, 222, 128, 0.05)";
    ctx.lineWidth = 1 * scale;
    ctx.stroke();

    // Draw main curve
    ctx.beginPath();
    ctx.moveTo(main.sx, main.sy);
    ctx.bezierCurveTo(main.cx1, main.cy1, main.cx2, main.cy2, main.ex, main.ey);
    ctx.strokeStyle = "rgba(74, 222, 128, 0.12)";
    ctx.lineWidth = 3 * scale;
    ctx.stroke();

    // Lighter inner stroke for depth
    ctx.beginPath();
    ctx.moveTo(main.sx, main.sy);
    ctx.bezierCurveTo(main.cx1, main.cy1, main.cx2, main.cy2, main.ex, main.ey);
    ctx.strokeStyle = "rgba(74, 222, 128, 0.06)";
    ctx.lineWidth = 6 * scale;
    ctx.stroke();

    // End dot
    ctx.beginPath();
    ctx.arc(main.ex, main.ey, 4 * scale, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(74, 222, 128, 0.18)";
    ctx.fill();

    // Start dot (subtler)
    ctx.beginPath();
    ctx.arc(main.sx, main.sy, 3 * scale, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(74, 222, 128, 0.10)";
    ctx.fill();
  }

  // ===== DEDENT CODE BLOCKS =====
  function dedentCodeBlocks() {
    var blocks = document.querySelectorAll("pre code, .highlight pre code");
    for (var i = 0; i < blocks.length; i++) {
      var code = blocks[i];
      var text = code.innerHTML;
      var lines = text.split("\n");

      // Strip leading/trailing empty lines
      while (lines.length && lines[0].trim() === "") lines.shift();
      while (lines.length && lines[lines.length - 1].trim() === "") lines.pop();

      if (!lines.length) continue;

      // Find minimum leading whitespace (tabs or spaces) across non-empty lines
      var minIndent = Infinity;
      for (var j = 0; j < lines.length; j++) {
        if (lines[j].trim() === "") continue;
        var match = lines[j].match(/^[\t ]+/);
        var indent = match ? match[0].length : 0;
        if (indent < minIndent) minIndent = indent;
      }

      // Strip common indent
      if (minIndent > 0 && minIndent < Infinity) {
        for (var k = 0; k < lines.length; k++) {
          lines[k] = lines[k].substring(minIndent);
        }
        code.innerHTML = lines.join("\n");
      }
    }
  }

  // ===== INIT =====
  function init() {
    dedentCodeBlocks();
    var swatches = document.querySelectorAll(".noise-swatch");
    var idx = 0;
    function renderNext() {
      if (idx < swatches.length) {
        renderNoiseSwatch(swatches[idx++]);
        requestAnimationFrame(renderNext);
      } else {
        requestAnimationFrame(renderArticleHero);
      }
    }
    if (swatches.length) {
      requestAnimationFrame(renderNext);
    } else {
      requestAnimationFrame(renderArticleHero);
    }
  }

  // ===== DEBOUNCED RESIZE =====
  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      renderArticleHero();
    }, 150);
  });

  // ===== RUN ON DOM READY =====
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
