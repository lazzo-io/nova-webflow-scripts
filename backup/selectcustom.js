"use strict";
(() => {
  var St = Object.create;
  var k = Object.defineProperty;
  var _t = Object.getOwnPropertyDescriptor;
  var xt = Object.getOwnPropertyNames;
  var Rt = Object.getPrototypeOf,
    wt = Object.prototype.hasOwnProperty;
  var yt = (t, e) => () => (
    e || t((e = { exports: {} }).exports, e), e.exports
  );
  var It = (t, e, o, r) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let n of xt(e))
        !wt.call(t, n) &&
          n !== o &&
          k(t, n, {
            get: () => e[n],
            enumerable: !(r = _t(e, n)) || r.enumerable,
          });
    return t;
  };
  var gt = (t, e, o) => (
    (o = t != null ? St(Rt(t)) : {}),
    It(
      e || !t || !t.__esModule
        ? k(o, "default", { value: t, enumerable: !0 })
        : o,
      t
    )
  );
  var lt = yt((Ge, pt) => {
    pt.exports = $t;
    function $t(t, e, o, r) {
      var n, s, c;
      return function () {
        if (
          ((c = this),
          (s = Array.prototype.slice.call(arguments)),
          n && (o || r))
        )
          return;
        if (!o) return a(), (n = setTimeout(p, e)), n;
        (n = setTimeout(a, e)), t.apply(c, s);
        function p() {
          a(), t.apply(c, s);
        }
        function a() {
          clearTimeout(n), (n = null);
        }
      };
    }
  });
  var E = "fs-attributes";
  var V = "cmsattribute";
  var Y = "cmsselect";
  var A = "selectcustom";
  var F = async (...t) => {
    var o;
    let e = [];
    for (let r of t) {
      let n = await ((o = window.fsAttributes[r]) == null ? void 0 : o.loading);
      e.push(n);
    }
    return e;
  };
  var T = () => {};
  function m(t, e, o, r) {
    return t
      ? (t.addEventListener(e, o, r), () => t.removeEventListener(e, o, r))
      : T;
  }
  var $ = "w--current";
  var y = {
    dropdown: "w-dropdown",
    dropdownToggle: "w-dropdown-toggle",
    dropdownList: "w-dropdown-list",
  };
  var b = (t, e) => (
    Array.isArray(e) || (e = [e]),
    e.map((r) => t.dispatchEvent(new Event(r, { bubbles: !0 }))).every((r) => r)
  );
  var I = (t, e = !0) => t.cloneNode(e);
  var f = (t) => {
    var o;
    let e;
    for (let r of t.childNodes)
      if (
        (r instanceof HTMLElement && r.childNodes.length
          ? (e = f(r))
          : r.nodeType === Node.TEXT_NODE &&
            ((o = r.textContent) == null ? void 0 : o.trim()) &&
            (e = r),
        e)
      )
        break;
    return e;
  };
  var U = (t, e) => {
    let { type: o } = t,
      r = o === "radio";
    if (r || o === "checkbox") {
      if (
        !(t instanceof HTMLInputElement) ||
        typeof e != "boolean" ||
        e === t.checked ||
        (r && e === !1)
      )
        return;
      t.checked = e;
    } else {
      if (t.value === e) return;
      t.value = e.toString();
    }
    b(t, ["click", "input", "change"]);
  };
  var D = (t) => t != null;
  function H(t, e, o) {
    var n;
    let r = window.fsAttributes[t];
    return (r.destroy = o || T), (n = r.resolve) == null || n.call(r, e), e;
  }
  var vt = `${E}-support`,
    Lt =
      "https://cdn.jsdelivr.net/npm/@finsweet/attributes-support@1/support.js",
    W = async () => {
      let { fsAttributes: t, location: e } = window,
        { host: o, searchParams: r } = new URL(e.href);
      t.support || (t.support = {});
      let { support: n } = t;
      if (!o.includes("webflow.io") || !r.has(vt)) return !1;
      if (n.import) return n.import;
      try {
        n.import = new Promise((s, c) => {
          let i = document.createElement("script");
          (i.src = Lt),
            (i.onload = () => s(!0)),
            (i.onerror = c),
            document.head.append(i);
        });
      } catch (s) {
        return !1;
      }
      return n.import;
    };
  var g = (t) => {
    let e = (r, n, s) => {
      let c = t[r],
        { key: i, values: p } = c,
        a;
      if (!n) return `[${i}]`;
      let u = p == null ? void 0 : p[n];
      typeof u == "string"
        ? (a = u)
        : (a = u(s && "instanceIndex" in s ? s.instanceIndex : void 0));
      let l = s && "caseInsensitive" in s && s.caseInsensitive ? "i" : "";
      if (!(s != null && s.operator)) return `[${i}="${a}"${l}]`;
      switch (s.operator) {
        case "prefixed":
          return `[${i}^="${a}"${l}]`;
        case "suffixed":
          return `[${i}$="${a}"${l}]`;
        case "contains":
          return `[${i}*="${a}"${l}]`;
      }
    };
    function o(r, n) {
      let s = e("element", r, n),
        c = (n == null ? void 0 : n.scope) || document;
      return n != null && n.all
        ? [...c.querySelectorAll(s)]
        : c.querySelector(s);
    }
    return [e, o];
  };
  var S = {
      preventLoad: { key: `${E}-preventload` },
      debugMode: { key: `${E}-debug` },
      src: { key: "src", values: { finsweet: "@finsweet/attributes" } },
      dev: { key: `${E}-dev` },
    },
    [B, we] = g(S);
  var q = (t) => {
    let { currentScript: e } = document,
      o = {};
    if (!e) return { attributes: o, preventsLoad: !1 };
    let n = {
      preventsLoad: typeof e.getAttribute(S.preventLoad.key) == "string",
      attributes: o,
    };
    for (let s in t) {
      let c = e.getAttribute(t[s]);
      n.attributes[s] = c;
    }
    return n;
  };
  var j = ({ scriptAttributes: t, attributeKey: e, version: o, init: r }) => {
      var i;
      Ct(), (i = window.fsAttributes)[e] || (i[e] = {});
      let { preventsLoad: n, attributes: s } = q(t),
        c = window.fsAttributes[e];
      (c.version = o),
        (c.init = r),
        n ||
          (window.Webflow || (window.Webflow = []),
          window.Webflow.push(() => r(s)));
    },
    Ct = () => {
      let t = Ot();
      if (window.fsAttributes && !Array.isArray(window.fsAttributes)) {
        X(window.fsAttributes, t);
        return;
      }
      let e = {
        cms: {},
        push(...o) {
          var r, n;
          for (let [s, c] of o)
            (n = (r = this[s]) == null ? void 0 : r.loading) == null ||
              n.then(c);
        },
        destroy() {
          var o, r;
          for (let n of t)
            (r = (o = window.fsAttributes[n]) == null ? void 0 : o.destroy) ==
              null || r.call(o);
        },
      };
      X(e, t),
        ht(e),
        (window.fsAttributes = e),
        (window.FsAttributes = window.fsAttributes),
        W();
    },
    Ot = () => {
      let t = B("src", "finsweet", { operator: "contains" }),
        e = B("dev");
      return [...document.querySelectorAll(`script${t}, script${e}`)].reduce(
        (n, s) => {
          var i;
          let c =
            s.getAttribute(S.dev.key) ||
            ((i = s.src.match(/[\w-. ]+(?=(\.js)$)/)) == null ? void 0 : i[0]);
          return c && !n.includes(c) && n.push(c), n;
        },
        []
      );
    },
    X = (t, e) => {
      for (let o of e) {
        if (t[o]) continue;
        t[o] = {};
        let r = t[o];
        r.loading = new Promise((n) => {
          r.resolve = (s) => {
            n(s), delete r.resolve;
          };
        });
      }
    },
    ht = (t) => {
      let e = Array.isArray(window.fsAttributes) ? window.fsAttributes : [];
      t.push(...e);
    };
  var G = "1.7.0";
  var v = " ";
  var L = "Tab",
    _ = "ArrowUp",
    x = "ArrowDown";
  var N = (t, e = !0) => {
    e && t.focus(), b(t, ["click", "mouseup"]);
  };
  var z = `fs-${A}`,
    Ut = "dropdown",
    Dt = "label",
    Bt = "option-reset",
    Nt = "hideinitial",
    Mt = { true: "true" },
    C = {
      element: {
        key: `${z}-element`,
        values: { dropdown: Ut, label: Dt, resetOption: Bt },
      },
      hideInitial: { key: `${z}-${Nt}`, values: Mt },
    },
    [Q, R] = g(C),
    J = [v, L, _, x];
  var M = "role",
    Z = {
      slider: "slider",
      listbox: "listbox",
      option: "option",
      columnheader: "columnheader",
      link: "link",
    },
    O = "tabindex";
  var tt = "aria-selected",
    et = "aria-haspopup",
    ot = "aria-multiselectable",
    rt = "aria-expanded",
    nt = "aria-current";
  var w = (t, e) => {
      let { selectElement: o, optionsStore: r, label: n } = t;
      e && U(o, e.value);
      for (let s of r) {
        let { element: c } = s,
          i = c === (e == null ? void 0 : e.element);
        (s.selected = i),
          c.classList[i ? "add" : "remove"]($),
          c.setAttribute(tt, `${i}`),
          c.setAttribute(O, i ? "0" : "-1");
      }
      e && (n.textContent = e.text);
    },
    h = (t, { optionsStore: e }) => {
      let o = e.find(({ value: r }) => !r);
      !o || ((o.hidden = !t), (o.element.style.display = t ? "" : "none"));
    };
  var it = (t, { optionsStore: e }) => {
      let { target: o } = t;
      if (!(o instanceof Element)) return;
      let r = o.closest("a");
      if (!r) return;
      let n = e.find(({ element: s }) => s === r);
      if (!!n) return n;
    },
    ct = (t, e) => {
      if (t.target === e.selectElement) return;
      t.preventDefault();
      let o = it(t, e);
      !o || (o.selected || w(e, o), N(e.dropdownToggle));
    },
    Pt = (t, { dropdownToggle: e }) => {
      let { shiftKey: o } = t;
      o && t.preventDefault(), N(e, o);
    },
    kt = ({ key: t }, { optionsStore: e }) => {
      let o = e.findIndex(({ focused: n }) => n);
      if (o < 0) return;
      let r = e[t === _ ? o - 1 : o + 1];
      r == null || r.element.focus();
    },
    Vt = (t, e) => {
      let { key: o } = t;
      !J.includes(o) ||
        (o === v
          ? ct(t, e)
          : o === L
          ? Pt(t, e)
          : (o === _ || o === x) && kt(t, e));
    },
    st = (t, e, o) => {
      let r = it(t, o);
      !r || (r.focused = e);
    },
    Yt = ({ key: t }, { optionsStore: e }) => {
      if (t !== x) return;
      let o = e.find(({ hidden: r }) => !r);
      !o || o.element.focus();
    },
    Ft = (t) => {
      let { selectElement: e, optionsStore: o } = t,
        r = o.find(({ value: n }) => n === e.value);
      !r || w(t, r);
    },
    at = (t) => {
      let { dropdownToggle: e, dropdownList: o, selectElement: r } = t,
        n = [
          m(e, "keydown", (s) => Yt(s, t)),
          m(o, "click", (s) => ct(s, t)),
          m(o, "keydown", (s) => Vt(s, t)),
          m(o, "focusin", (s) => st(s, !0, t)),
          m(o, "focusout", (s) => st(s, !1, t)),
          m(r, "change", () => Ft(t)),
        ];
      return () => {
        for (let s of n) s();
      };
    };
  var Et = gt(lt(), 1);
  var { listbox: ut, option: Ht } = Z,
    dt = (t, e) => {
      t.setAttribute(et, ut),
        e.setAttribute(M, ut),
        e.setAttribute(ot, "false");
    },
    mt = (t) => {
      t.setAttribute(M, Ht);
    };
  var K = (t) => {
    let {
      optionsStore: e,
      optionTemplate: o,
      optionsList: r,
      emptyOption: n,
      hideInitial: s,
      selectElement: { options: c, value: i },
    } = t;
    for (let { element: a } of e.values()) a.remove();
    e.splice(0, e.length);
    let p;
    for (let { value: a, text: u } of c) {
      let l;
      if (!a && n) l = I(n);
      else {
        l = I(o);
        let bt = f(l) || l;
        bt.textContent = u;
      }
      mt(l), r.appendChild(l);
      let d = a === i,
        P = { text: u, value: a, element: l, selected: d, focused: !1 };
      d && (p = P), e.push(P);
    }
    w(t, p), s && h(!!(p != null && p.value), t);
  };
  var Wt = (t) => {
      let {
          dropdownToggle: e,
          dropdownList: o,
          optionsStore: r,
          hideInitial: n,
        } = t,
        s = (0, Et.default)(() => {
          let i = r.find(({ selected: u }) => u),
            p = r.find(({ hidden: u }) => !u);
          if (!i || !p) return;
          if (e.getAttribute(rt) === "true") {
            i.hidden ? p.element.focus() : i.element.focus();
            return;
          }
          n && window.requestAnimationFrame(() => h(!!i.value, t));
        }, 20),
        c = new MutationObserver(s);
      return (
        c.observe(o, { attributes: !0, attributeFilter: ["class", "style"] }), c
      );
    },
    qt = (t) => {
      let { selectElement: e } = t,
        o = new MutationObserver((r) => {
          r.some(({ addedNodes: s, removedNodes: c }) =>
            [...s, ...c].some((i) => i instanceof HTMLOptionElement)
          ) && K(t);
        });
      return o.observe(e, { childList: !0 }), o;
    },
    At = (t) => {
      let e = Wt(t),
        o = qt(t);
      return () => {
        e.disconnect(), o.disconnect();
      };
    };
  var ft = (t) => {
    let e = [],
      o = t.closest(`.${y.dropdown}`);
    if (!o) return;
    let r = o.querySelector("select");
    if (!r) return;
    let n = o.querySelector(`.${y.dropdownToggle}`),
      s = o.querySelector(`.${y.dropdownList}`);
    if (!n || !s) return;
    dt(n, s);
    let c = R("label", { operator: "prefixed", scope: n }) || f(n) || n,
      i = s.querySelector(
        `a:not(${Q("element", "resetOption", { operator: "prefixed" })})`
      );
    if (!(i instanceof HTMLAnchorElement)) return;
    let p = i.parentElement;
    if (!p) return;
    let a = R("resetOption", { operator: "prefixed", scope: s }),
      u = a instanceof HTMLAnchorElement ? a : void 0;
    for (let d of [i, u])
      !d ||
        ((d.href = "#"),
        d.setAttribute(O, "-1"),
        d.removeAttribute(nt),
        d.remove());
    let l = t.getAttribute(C.hideInitial.key) === C.hideInitial.values.true;
    return {
      optionsStore: e,
      selectElement: r,
      dropdownToggle: n,
      dropdownList: s,
      label: c,
      optionTemplate: i,
      optionsList: p,
      emptyOption: u,
      hideInitial: l,
    };
  };
  var Tt = async () => {
      await F(V, Y);
      let t = R("dropdown", { all: !0, operator: "prefixed" }),
        e = t.map(Xt).filter(D);
      return H(A, t, () => {
        for (let o of e) o();
      });
    },
    Xt = (t) => {
      let e = ft(t);
      if (!e) return;
      K(e);
      let o = At(e),
        r = at(e);
      return () => {
        o(), r();
      };
    };
  j({ init: Tt, version: G, attributeKey: A });
})();
