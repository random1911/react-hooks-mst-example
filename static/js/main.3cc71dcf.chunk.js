(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    101: function(e, t, n) {},
    102: function(e, t, n) {},
    112: function(e, t, n) {
      e.exports = n(177);
    },
    122: function(e, t, n) {},
    123: function(e, t, n) {},
    124: function(e, t, n) {},
    125: function(e, t, n) {},
    126: function(e, t, n) {},
    130: function(e, t, n) {
      var a = {
        "./ar": 45,
        "./ar.js": 45,
        "./az": 46,
        "./az.js": 46,
        "./be": 47,
        "./be.js": 47,
        "./bg": 48,
        "./bg.js": 48,
        "./bs": 49,
        "./bs.js": 49,
        "./ca": 50,
        "./ca.js": 50,
        "./cs": 51,
        "./cs.js": 51,
        "./cy": 52,
        "./cy.js": 52,
        "./da": 53,
        "./da.js": 53,
        "./de": 54,
        "./de.js": 54,
        "./el": 55,
        "./el.js": 55,
        "./en": 33,
        "./en.js": 33,
        "./es": 56,
        "./es.js": 56,
        "./et": 57,
        "./et.js": 57,
        "./eu": 58,
        "./eu.js": 58,
        "./fa": 59,
        "./fa.js": 59,
        "./fi": 60,
        "./fi.js": 60,
        "./fr": 61,
        "./fr.js": 61,
        "./hr": 62,
        "./hr.js": 62,
        "./hu": 63,
        "./hu.js": 63,
        "./id": 64,
        "./id.js": 64,
        "./it": 65,
        "./it.js": 65,
        "./ja": 66,
        "./ja.js": 66,
        "./ka": 67,
        "./ka.js": 67,
        "./ko": 68,
        "./ko.js": 68,
        "./lt": 69,
        "./lt.js": 69,
        "./lv": 70,
        "./lv.js": 70,
        "./mk": 71,
        "./mk.js": 71,
        "./mn": 72,
        "./mn.js": 72,
        "./ms": 73,
        "./ms.js": 73,
        "./nb_NO": 74,
        "./nb_NO.js": 74,
        "./nl": 75,
        "./nl.js": 75,
        "./pl": 76,
        "./pl.js": 76,
        "./pt": 77,
        "./pt.js": 77,
        "./pt_BR": 78,
        "./pt_BR.js": 78,
        "./ro": 79,
        "./ro.js": 79,
        "./ru": 80,
        "./ru.js": 80,
        "./sl": 81,
        "./sl.js": 81,
        "./sq": 82,
        "./sq.js": 82,
        "./sr": 83,
        "./sr.js": 83,
        "./sv": 84,
        "./sv.js": 84,
        "./tr": 85,
        "./tr.js": 85,
        "./ua": 86,
        "./ua.js": 86,
        "./uk": 87,
        "./uk.js": 87,
        "./vi": 88,
        "./vi.js": 88,
        "./zh": 89,
        "./zh.js": 89,
        "./zh_TW": 90,
        "./zh_TW.js": 90
      };
      function r(e) {
        var t = o(e);
        return n(t);
      }
      function o(e) {
        if (!n.o(a, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return a[e];
      }
      (r.keys = function() {
        return Object.keys(a);
      }),
        (r.resolve = o),
        (e.exports = r),
        (r.id = 130);
    },
    134: function(e, t, n) {},
    135: function(e, t, n) {},
    136: function(e, t, n) {},
    137: function(e, t, n) {},
    138: function(e, t, n) {},
    139: function(e, t, n) {},
    176: function(e, t, n) {},
    177: function(e, t, n) {
      "use strict";
      n.r(t);
      var a,
        r = n(0),
        o = n.n(r),
        i = n(6),
        c = n.n(i),
        s = n(1),
        l = n(103),
        u = n(3),
        d = n.n(u),
        m = n(8),
        p = n(4),
        f = n(30),
        h = n(179),
        g = n(12),
        v = function(e) {
          return e.charAt(0).toUpperCase() + e.slice(1);
        },
        b = function(e) {
          return e.replace(/([A-Z])/g, function(e) {
            return "_".concat(e[0].toLowerCase());
          });
        },
        E = function e(t) {
          var n,
            a =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            r = {};
          return Array.isArray(t)
            ? t.map(function(t) {
                return e(t, a);
              })
            : "string" === typeof t || "number" === typeof t || null === t
            ? t
            : (Object.keys(t).forEach(function(o) {
                try {
                  var i = a
                    ? "_" === (c = o)[0]
                      ? c
                      : c
                          .split("_")
                          .map(function(e, t) {
                            return 0 === t ? e : v(e);
                          })
                          .join("")
                    : b(o);
                  (n = t[o]),
                    Array.isArray(n)
                      ? (n = n.map(function(t) {
                          return e(t, a);
                        }))
                      : "object" === typeof n && null !== n && (n = e(n, a)),
                    (r[i] = null === n ? void 0 : n);
                } catch (s) {
                  console.error(s, t);
                }
                var c;
              }),
              r);
        },
        y = function(e) {
          return !Number.isNaN(parseFloat(e));
        },
        C = function(e) {
          return Object.keys(e)
            .filter(function(t) {
              return void 0 !== e[t];
            })
            .map(function(t) {
              var n = b(t),
                a = e[t];
              return Array.isArray(a)
                ? "".concat(
                    a
                      .map(function(e) {
                        return ""
                          .concat(encodeURIComponent(n), "[]=")
                          .concat(e);
                      })
                      .join("&")
                  )
                : ""
                    .concat(encodeURIComponent(n), "=")
                    .concat(encodeURIComponent(a));
            })
            .join("&");
        },
        O = function(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = Object.keys(t)
              .filter(function(e) {
                return t[e];
              })
              .map(function(t) {
                return "".concat(e, "_").concat(b(t));
              })
              .join(" ");
          return ""
            .concat(e, " ")
            .concat(n)
            .trim();
        },
        j = function(e, t) {
          return !!e && new RegExp(e, "i").test(t);
        },
        w =
          (n(41),
          function(e) {
            var t = e.caption,
              n = void 0 === t ? "" : t,
              a = e.onCloseClick;
            return o.a.createElement(
              "header",
              { className: "modal-header" },
              o.a.createElement(
                "h3",
                { className: "modal-header__caption" },
                n
              ),
              o.a.createElement("button", {
                className: "modal-header__close-button",
                title: "Close",
                onClick: a
              })
            );
          }),
        x = function(e) {
          var t = e.hideHeader,
            n = e.isOpen,
            a = void 0 !== n && n,
            c = e.isTopLevel,
            s = e.closeFunction,
            l = e.children,
            u = e.caption,
            d = e.isClosing,
            m = e.shouldReactOnEsc,
            p = function(e) {
              "Escape" === e.key && (e.stopPropagation(), s());
            };
          Object(r.useEffect)(
            function() {
              return (
                m && document.addEventListener("keydown", p),
                !m && document.removeEventListener("keydown", p),
                function() {
                  document.removeEventListener("keydown", p);
                }
              );
            },
            [m]
          );
          var g = o.a.createElement(
              f.a,
              null,
              o.a.createElement(
                h.a,
                null,
                o.a.createElement(
                  "div",
                  { className: "modal-holder" },
                  c &&
                    o.a.createElement("div", {
                      className: "modal-overlay",
                      onClick: s
                    }),
                  o.a.createElement(
                    "div",
                    { className: O("modal", { isClosing: d }) },
                    !t && o.a.createElement(w, { caption: u, onCloseClick: s }),
                    l
                  )
                )
              )
            ),
            v = document.getElementById("modal-root");
          return v && a ? Object(i.createPortal)(g, v) : null;
        },
        N = Object(p.a)(function(e) {
          var t = e.hideHeader,
            n = e.id,
            a = e.caption,
            i = e.children,
            c = e.openOnInit,
            s = e.customCloseFunction,
            l = Re().ui,
            u = l.addModal,
            d = l.removeModal,
            m = l.getModal,
            p = l.openModal,
            f = l.closeModal;
          Object(r.useEffect)(function() {
            return (
              u(n),
              c && p(n),
              function() {
                d(n);
              }
            );
          }, []);
          var h = m(n);
          return h && h.isOpen
            ? o.a.createElement(
                x,
                {
                  hideHeader: t,
                  caption: a,
                  isClosing: h.isClosing,
                  isOpen: h.isOpen,
                  closeFunction: function() {
                    s ? s() : f(n);
                  },
                  isTopLevel: h.isTopLevel,
                  shouldReactOnEsc: h.shouldReactOnEsc
                },
                i
              )
            : null;
        }),
        k = n(7),
        L =
          (n(122),
          Object(r.memo)(function(e) {
            var t = e.imageUrl,
              n = e.name,
              a = e.isLarge,
              i = Object(r.useState)(!1),
              c = Object(k.a)(i, 2),
              s = c[0],
              l = c[1],
              u = function() {
                l(!0);
              };
            return o.a.createElement(
              "div",
              { className: O("avatar", { isLarge: a }) },
              o.a.createElement(
                "div",
                { className: "avatar__letters" },
                (function() {
                  var e = n.split(" "),
                    t = Object(k.a)(e, 2),
                    a = t[0],
                    r = t[1];
                  return ""
                    .concat(a[0])
                    .concat(r ? r[0] : "")
                    .toUpperCase();
                })()
              ),
              t
                ? o.a.createElement("img", {
                    onLoad: u,
                    className: O("avatar__image", { isLoaded: s, isLarge: a }),
                    src: t,
                    alt: n
                  })
                : null
            );
          })),
        P =
          (n(123),
          function(e) {
            var t = e.type,
              n = void 0 === t ? "button" : t,
              a = e.onClick,
              r = e.icon,
              i = e.primary,
              c = e.isPending,
              s = e.disabled,
              l = e.children,
              u = e.title,
              d = e.collapsible,
              m = r && !l;
            return o.a.createElement(
              "button",
              {
                type: n,
                onClick: function() {
                  a && a();
                },
                title: u,
                disabled: s || c,
                className: O("button", {
                  isPending: c,
                  primary: i,
                  onlyIcon: m,
                  collapsible: d
                })
              },
              r &&
                o.a.createElement("span", {
                  role: "img",
                  className: "button__icon button__icon_".concat(r)
                }),
              l && o.a.createElement("span", { className: "button__text" }, l)
            );
          }),
        _ =
          (n(124),
          n(125),
          n(126),
          function(e) {
            var t = e.small;
            return o.a.createElement(
              "div",
              { className: "spinner".concat(t ? " spinner_small" : "") },
              o.a.createElement(
                "div",
                { className: "visually-hidden" },
                "Loading..."
              )
            );
          }),
        S = function() {
          return o.a.createElement(
            "div",
            { className: "loader-overlay" },
            o.a.createElement(_, null)
          );
        },
        I = function(e) {
          var t = e.name,
            n = e.avatarUrl,
            a = e.phone,
            i = e.email,
            c = e.organization,
            s = e.assistant,
            l = e.groups,
            u = e.location,
            d = e.additionalEmails,
            m = e.additionalPhones,
            p = e.onCloseClick,
            f = e.onEditClick,
            h = e.onDeleteClick,
            g = e.pendingDelete,
            v = e.incompleteData,
            b = [
              { label: "Email", value: i },
              { label: "Organization", value: c },
              { label: "Assistant", value: s },
              { label: "Groups", value: l },
              { label: "Location", value: u },
              { label: "Additional emails", value: d },
              { label: "Additional phones", value: m }
            ].filter(function(e) {
              return e.value;
            }),
            E = function() {
              !g && p();
            };
          return o.a.createElement(
            N,
            {
              openOnInit: !0,
              id: "personDetails",
              caption: "Person Information",
              customCloseFunction: E
            },
            o.a.createElement(
              "div",
              { className: "modal-content" },
              v && o.a.createElement(S, null),
              o.a.createElement(
                "section",
                { className: "person-details" },
                o.a.createElement(
                  "header",
                  { className: "person-details__top" },
                  o.a.createElement(L, { isLarge: !0, name: t, imageUrl: n }),
                  o.a.createElement(
                    "h4",
                    { className: "person-details__name" },
                    t
                  ),
                  a &&
                    o.a.createElement(
                      "p",
                      { className: "person-details__phone" },
                      a
                    )
                ),
                o.a.createElement(
                  "div",
                  { className: "person-details__bottom" },
                  o.a.createElement(
                    "dl",
                    { className: "person-additional-details" },
                    b.map(function(e) {
                      var t = e.label,
                        n = e.value;
                      return o.a.createElement(
                        r.Fragment,
                        { key: t },
                        o.a.createElement(
                          "dt",
                          { className: "person-additional-details__label" },
                          t
                        ),
                        o.a.createElement(
                          "dd",
                          { className: "person-additional-details__value" },
                          n
                        )
                      );
                    })
                  )
                )
              )
            ),
            o.a.createElement(
              "div",
              { className: "modal-footer" },
              o.a.createElement(
                "div",
                { className: "modal-footer__left" },
                o.a.createElement(P, {
                  icon: "delete",
                  title: "Delete",
                  isPending: g,
                  disabled: v,
                  onClick: h
                })
              ),
              o.a.createElement(
                "div",
                { className: "modal-footer__right" },
                o.a.createElement(
                  P,
                  { primary: !0, disabled: g || v, onClick: f },
                  "Edit"
                ),
                o.a.createElement(P, { disabled: g, onClick: E }, "Back")
              )
            )
          );
        },
        D = Object(p.a)(function() {
          var e = Re().peopleList;
          if (!e.selectedPerson) return null;
          var t = e.selectedPerson,
            n = t.name,
            a = t.pictureId,
            r = t.primaryEmail,
            i = t.primaryPhone,
            c = t.assistant,
            s = t.organization,
            l = t.location,
            u = t.groups,
            d = t.additionalEmails,
            m = t.additionalPhones,
            p = t.closeDetails,
            f = t.editPerson,
            h = t.askForDeleteCurrentPerson,
            g = t.pendingDelete,
            v = t.incompleteData;
          return o.a.createElement(I, {
            name: n,
            location: l,
            assistant: c,
            email: r,
            organization: s,
            avatarUrl: a,
            groups: u,
            phone: i,
            additionalEmails: d,
            additionalPhones: m,
            onCloseClick: p,
            onEditClick: f,
            onDeleteClick: h,
            pendingDelete: g,
            incompleteData: v
          });
        }),
        T = n(109),
        M =
          (n(42),
          function(e) {
            var t = e.id,
              n = e.type,
              a = void 0 === n ? "text" : n,
              i = e.value,
              c = e.disabled,
              s = e.readonly,
              l = e.onChange,
              u = e.onFocus,
              d = e.onBlur,
              m = e.isInvalid,
              p = e.autoComplete,
              f = void 0 === p ? "off" : p,
              h = e.cssModifiers,
              g = e.autofocus,
              v = e.placeholder,
              b = Object(r.useRef)(null);
            Object(r.useEffect)(function() {
              g && b && b.current && b.current.focus();
            }, []);
            return o.a.createElement("input", {
              ref: b,
              id: t,
              onChange: function(e) {
                l && l(e);
              },
              onFocus: function() {
                u && u();
              },
              onBlur: function() {
                d && d();
              },
              type: a,
              value: i,
              disabled: c,
              readOnly: s,
              className: O(
                "text-input",
                (function() {
                  var e = { isInvalid: m };
                  return h
                    ? ((Array.isArray(h) ? h : [h]).forEach(function(t) {
                        e[t] = !0;
                      }),
                      e)
                    : e;
                })()
              ),
              autoComplete: f,
              placeholder: v
            });
          }),
        R = function(e) {
          var t = e.label,
            n = e.error,
            a = e.id,
            r = Object(T.a)(e, ["label", "error", "id"]),
            i = !!n;
          return o.a.createElement(
            "div",
            { className: "text-field" },
            t &&
              o.a.createElement(
                "label",
                { className: "text-field__label", htmlFor: a },
                t
              ),
            o.a.createElement(
              "div",
              { className: "text-field__input" },
              o.a.createElement(
                M,
                Object.assign({ id: a }, r, { isInvalid: i })
              )
            ),
            n && o.a.createElement("p", { className: "text-field__error" }, n)
          );
        },
        A =
          (n(43),
          n(18),
          function(e) {
            var t = e.children,
              n = e.closeCallback,
              a = e.onOpen,
              i = e.onClose,
              s = e.params,
              l = void 0 === s ? { left: 0, top: 0 } : s,
              u = Object(r.useRef)(null),
              d = Object(r.useState)({}),
              m = Object(k.a)(d, 2),
              p = m[0],
              v = m[1],
              b = Object(r.useState)(!1),
              E = Object(k.a)(b, 2),
              C = E[0],
              j = E[1],
              w = function() {
                n && n();
              },
              x = function(e) {
                "Escape" === e.key &&
                  (e.stopPropagation(), "Escape" === e.key && w());
              },
              N = function(e) {
                u &&
                  u.current &&
                  e.target &&
                  ((function(e, t) {
                    if (e === t) return !0;
                    for (; e.parentElement && e !== document.body; )
                      if ((e = e.parentElement) === t) return !0;
                    return !1;
                  })(e.target, u.current) ||
                    w());
              },
              L = function(e) {
                if (e) {
                  var t = e.minWidth,
                    n = e.top,
                    a = e.left,
                    r = e.height,
                    o = y(t) ? "".concat(t, "px") : 0,
                    i = y(a) ? "".concat(a, "px") : "auto",
                    c = y(n) ? n : 0,
                    s = y(r) ? r : 0,
                    l = window,
                    d = l.innerHeight,
                    m = l.pageYOffset,
                    p = u.current && u.current.offsetHeight,
                    f = p && y(p) ? p : 0,
                    h = d - (c || 0) <= d / 3;
                  j(h);
                  var b = Object(g.a)(
                    { minWidth: o, left: i },
                    (function() {
                      if (!h)
                        return {
                          top: "".concat((c || 0) + (s || 0) + m - 1, "px"),
                          maxHeight: "".concat(d - (s || 0) - (c || 0), "px")
                        };
                      if (!(f <= (c || 0)))
                        return {
                          top: "".concat(m, "px"),
                          maxHeight: c ? "".concat(c + 1, "px") : 0
                        };
                      var e = "".concat(f, "px");
                      return {
                        top: "".concat((c || 0) + m - f + 1, "px"),
                        maxHeight: e
                      };
                    })()
                  );
                  v(b);
                }
              };
            Object(r.useEffect)(function() {
              return (
                document.body.addEventListener("click", N),
                a && a(),
                document.addEventListener("keydown", x),
                function() {
                  document.body.removeEventListener("click", N),
                    document.removeEventListener("keydown", x),
                    i && i();
                }
              );
            }, []),
              Object(r.useEffect)(
                function() {
                  L(l),
                    (function() {
                      if (u.current) {
                        var e = u.current.offsetWidth,
                          t = y(l.left) ? l.left : 0,
                          n = window.innerWidth;
                        if (e && t) {
                          var a = e + t - n;
                          if (a > 0) {
                            var r = Number(l.left) - a,
                              o = Object(g.a)({}, l, { left: r });
                            L(o);
                          }
                        }
                      }
                    })();
                },
                [l]
              );
            var P = document.getElementById("dropdown-root");
            if (!P) return null;
            var _ = o.a.createElement(
              f.a,
              null,
              o.a.createElement(
                h.a,
                null,
                o.a.createElement(
                  "div",
                  {
                    className: O("dropdown-drop-wrapper", { isAbove: C }),
                    ref: u,
                    style: p
                  },
                  t
                )
              )
            );
            return c.a.createPortal(_, P);
          }),
        F = ["mousewheel", "scroll", "touchmove"],
        z = function(e) {
          var t = e.closeTimeout,
            n = void 0 === t ? 100 : t,
            a = e.withTranslate,
            i = e.selected,
            c = e.children,
            s = e.onSelect,
            l = e.toggleButton,
            u = e.toggleButtonText,
            d = e.fullWidth,
            m = e.options,
            p = e.onOpen,
            f = e.onClose,
            h = e.allowSearch,
            g = e.label,
            v = e.disabled,
            b = e.small,
            E = e.haveError,
            y = Object(r.useRef)(null),
            C = Object(r.useState)(!1),
            j = Object(k.a)(C, 2),
            w = j[0],
            x = j[1],
            N = Object(r.useState)(!1),
            L = Object(k.a)(N, 2),
            P = L[0],
            _ = L[1],
            S = Object(r.useState)({}),
            I = Object(k.a)(S, 2),
            D = I[0],
            T = I[1],
            M = Object(r.useRef)(null),
            R = Object(r.useRef)(null),
            z = null,
            U = function(e) {
              e.preventDefault();
            },
            B = function() {
              var e = y.current;
              if (!e) return {};
              var t = e.getBoundingClientRect();
              return {
                minWidth: e.offsetWidth,
                height: e.offsetHeight,
                top: t.top,
                left: Math.round(t.left)
              };
            },
            Q = function() {
              P || (x(!0), T(B()));
            },
            W = function() {
              x(!1),
                _(!0),
                setTimeout(function() {
                  R && R.current && R.current.focus(), _(!1);
                }, n);
            },
            V = function() {
              w &&
                (z && clearTimeout(z),
                (z = window.setTimeout(function() {
                  T(B());
                }, 300)));
            };
          Object(r.useEffect)(
            function() {
              return (
                !M.current &&
                  (function(e) {
                    if (e)
                      for (; e.parentElement && e !== document.body; )
                        if (
                          (e = e.parentElement).classList.contains(
                            "modal-content"
                          ) ||
                          (e.id && "modal-root" === e.id)
                        )
                          return void (M.current = e);
                  })(y.current),
                window.addEventListener("resize", V),
                w &&
                  ((function() {
                    if ((!R || !R.current) && y.current) {
                      var e = y.current.querySelector("button");
                      e && (R.current = e);
                    }
                  })(),
                  (function() {
                    var e = M && M.current;
                    e &&
                      F.forEach(function(t) {
                        e.addEventListener(t, U);
                      });
                  })()),
                function() {
                  !(function() {
                    var e = M && M.current;
                    e &&
                      F.forEach(function(t) {
                        e.removeEventListener(t, U);
                      });
                  })(),
                    window.removeEventListener("resize", V);
                }
              );
            },
            [w]
          );
          return o.a.createElement(
            r.Fragment,
            null,
            o.a.createElement(
              "div",
              {
                className: O("dropdown-button-container", { fullWidth: d }),
                ref: y
              },
              (function() {
                var e = {
                  withTranslate: a,
                  text: u,
                  fillParent: !!d,
                  isOpen: w,
                  label: g,
                  disabled: v,
                  small: b,
                  haveError: E,
                  onClick: Q
                };
                return o.a.cloneElement(l, e);
              })()
            ),
            w &&
              o.a.createElement(
                A,
                { onClose: f, onOpen: p, closeCallback: W, params: D },
                (function() {
                  var e = {
                    withTranslate: a,
                    options: m,
                    onSelect: s,
                    selected: i,
                    closeCallback: W,
                    allowSearch: h,
                    small: b
                  };
                  return o.a.cloneElement(c, e);
                })()
              )
          );
        },
        U = o.a.memo(function(e) {
          var t = e.text,
            n = e.isOpen,
            a = e.onClick,
            r = e.disabled,
            i = e.haveError,
            c = e.fullWidth;
          return o.a.createElement(
            "button",
            {
              className: O("dropdown-toggle-button", {
                isOpen: n,
                isError: i,
                fullWidth: c
              }),
              disabled: r,
              onClick: a,
              type: "button"
            },
            o.a.createElement(
              "span",
              { className: "dropdown-toggle-button__text" },
              t
            ),
            o.a.createElement("span", {
              className: O("dropdown-toggle-button__arrow", { isOpen: n })
            })
          );
        }),
        B = function(e) {
          var t = e.query,
            n = e.value,
            a = e.matchedClassName;
          if (!t) return o.a.createElement(r.Fragment, null, n);
          if (t && j(t, n)) {
            var i = n.toLowerCase().search(t.toLowerCase()),
              c = n.slice(0, i),
              s = n.slice(i, i + t.length),
              l = n.slice(i + s.length, n.length);
            return o.a.createElement(
              r.Fragment,
              null,
              c,
              o.a.createElement("span", { className: a }, s),
              l
            );
          }
          return o.a.createElement(r.Fragment, null, n);
        },
        Q = function() {
          return o.a.createElement(
            "li",
            { className: "select-option" },
            o.a.createElement(
              "div",
              { className: "select-option__button_not_found" },
              "Nothing found"
            )
          );
        },
        W = function(e) {
          var t = e.onClick,
            n = e.value,
            a = e.label,
            i = e.disabled,
            c = e.isSelected,
            s = e.search,
            l = e.shouldAutofocus,
            u = Object(r.useRef)(null);
          return o.a.createElement(
            "li",
            { className: "select-option" },
            o.a.createElement(
              "button",
              {
                ref: u,
                onMouseEnter: function() {
                  l && u && u.current && u.current.focus();
                },
                className: O("select-option__button", { isSelected: c }),
                onClick: function() {
                  t && t(n);
                },
                disabled: i
              },
              o.a.createElement(B, {
                value: a || "",
                query: s,
                matchedClassName: "select-option__match"
              })
            )
          );
        },
        V = function(e) {
          var t = e.value,
            n = e.onChange,
            a = e.onClear,
            r = e.onInputFocus,
            i = e.onInputBlur;
          return o.a.createElement(
            "div",
            { className: "dropdown-search" },
            o.a.createElement("input", {
              className: "dropdown-search__input",
              type: "text",
              value: t,
              onChange: function(e) {
                n && n(e);
              },
              placeholder: "Search",
              onFocus: r,
              onBlur: i
            }),
            t &&
              o.a.createElement("button", {
                className: "dropdown-search__clear",
                type: "button",
                onClick: function() {
                  a && a();
                },
                title: "Clear"
              })
          );
        },
        H = function(e) {
          var t = e.closeCallback,
            n = e.options,
            a = void 0 === n ? [] : n,
            i = e.onSelect,
            c = e.selected,
            s = e.allowSearch,
            l = Object(r.useState)(""),
            u = Object(k.a)(l, 2),
            d = u[0],
            m = u[1],
            p = Object(r.useState)(!1),
            f = Object(k.a)(p, 2),
            h = f[0],
            g = f[1],
            v = d.length > 2,
            b = v
              ? a.filter(function(e) {
                  return j(d, e.label || "");
                })
              : a,
            E = v && !b.length;
          return o.a.createElement(
            "div",
            { className: "dropdown-select" },
            s &&
              o.a.createElement(V, {
                onClear: function() {
                  return m("");
                },
                onChange: function(e) {
                  var t = e.target.value;
                  m(t);
                },
                value: d,
                onInputFocus: function() {
                  g(!0);
                },
                onInputBlur: function() {
                  g(!1);
                }
              }),
            o.a.createElement(
              "ul",
              { className: "dropdown-select__list" },
              b &&
                b.map(function(e) {
                  var n = e.label,
                    a = e.disabled,
                    r = e.value,
                    s = r === c;
                  return o.a.createElement(W, {
                    search: v ? d : void 0,
                    key: r,
                    onClick: function() {
                      i && "undefined" !== typeof r && i(r), t && t();
                    },
                    value: r,
                    label: n,
                    isSelected: s,
                    disabled: a,
                    shouldAutofocus: !h
                  });
                }),
              E && o.a.createElement(Q, null)
            )
          );
        },
        q = function(e) {
          return o.a.createElement(
            z,
            Object.assign(
              {
                toggleButtonText: (function() {
                  var t = e.options,
                    n = e.selected,
                    a = t.find(function(e) {
                      return e.value === n;
                    });
                  return a && a.label;
                })()
              },
              e,
              { toggleButton: o.a.createElement(U, null) }
            ),
            o.a.createElement(H, null)
          );
        },
        K = function(e) {
          var t = Re().ui,
            n = t.onDropdownOpen,
            a = t.onDropdownClose,
            r = Object(g.a)({ onOpen: n, onClose: a }, e);
          return o.a.createElement(q, r);
        },
        G = function(e) {
          var t = e.id,
            n = e.value,
            a = e.error,
            r = e.onValueChange,
            i = e.type,
            c = e.label,
            s = e.onLabelChange,
            l = e.labelOptions,
            u = e.isSingle,
            d = e.onRemove,
            m = !!a,
            p = "".concat(i).concat(t);
          return o.a.createElement(
            "div",
            { className: "contact-field-row" },
            o.a.createElement(
              "div",
              { className: "contact-field-row__inner" },
              o.a.createElement(M, {
                id: p,
                value: n,
                isInvalid: m,
                onChange: r,
                type: i
              }),
              o.a.createElement(K, { selected: c, options: l, onSelect: s }),
              !u &&
                o.a.createElement("button", {
                  type: "button",
                  onClick: function() {
                    d(t);
                  },
                  className: "contact-field-row__remove",
                  title: "Remove"
                })
            ),
            a &&
              o.a.createElement(
                "p",
                { className: "contact-field-row__error" },
                a
              )
          );
        },
        J = Object(p.a)(function(e) {
          var t = e.fieldLabel,
            n = e.addListItem,
            a = e.removeListItem,
            r = e.labelOptions,
            i = e.type,
            c = e.isSingle,
            s = e.list;
          return o.a.createElement(
            "div",
            { className: "contact-field" },
            t &&
              o.a.createElement(
                "span",
                { className: "contact-field__label" },
                t
              ),
            s.map(function(e) {
              var t = e.id,
                n = e.label,
                s = e.value,
                l = e.error,
                u = e.onLabelChange,
                d = e.onValueChange;
              return o.a.createElement(G, {
                key: t,
                id: t,
                label: n,
                labelOptions: r,
                onRemove: a,
                type: i,
                value: s,
                error: l,
                isSingle: c,
                onLabelChange: u,
                onValueChange: d
              });
            }),
            o.a.createElement(
              "button",
              { type: "button", onClick: n, className: "contact-field__add" },
              "+ ",
              o.a.createElement(
                "span",
                { className: "contact-field__add-label" },
                "add one more"
              )
            )
          );
        }),
        Y = function(e) {
          var t = e.label,
            n = e.error,
            a = e.options,
            r = e.disabled,
            i = e.onSelect,
            c = e.selected,
            s = e.allowSearch,
            l = !!n;
          return o.a.createElement(
            "div",
            { className: "text-field" },
            t &&
              o.a.createElement("span", { className: "text-field__label" }, t),
            o.a.createElement(
              "div",
              { className: "text-field__input" },
              o.a.createElement(K, {
                selected: c,
                options: a,
                onSelect: i,
                disabled: r,
                haveError: l,
                allowSearch: s,
                fullWidth: !0
              })
            ),
            n && o.a.createElement("p", { className: "text-field__error" }, n)
          );
        },
        Z = function(e) {
          var t = e.caption,
            n = e.name,
            a = e.nameError,
            r = e.onNameChange,
            i = e.organization,
            c = e.organizationOptions,
            s = e.onOrganizationChange,
            l = e.groups,
            u = e.onGroupsChange,
            d = e.assistant,
            m = e.onAssistantChange,
            p = e.onSubmit,
            f = e.emailFieldLabel,
            h = e.emailList,
            g = e.addEmail,
            v = e.removeEmail,
            b = e.emailLabelOptions,
            E = e.singleEmail,
            y = e.phoneFieldLabel,
            C = e.phoneList,
            O = e.phoneLabelOptions,
            j = e.addPhone,
            w = e.removePhone,
            x = e.singlePhone,
            k = e.onClose,
            L = e.isPending,
            _ = function() {
              !L && k();
            };
          return o.a.createElement(
            N,
            {
              openOnInit: !0,
              id: "editPerson",
              caption: t,
              customCloseFunction: _
            },
            o.a.createElement(
              "form",
              {
                onSubmit: function(e) {
                  e && e.preventDefault(), p();
                },
                className: "modal-form"
              },
              o.a.createElement(
                "div",
                { className: "modal-content modal-padding" },
                o.a.createElement(R, {
                  autofocus: !0,
                  id: "name",
                  onChange: r,
                  value: n,
                  error: a,
                  label: "Name"
                }),
                o.a.createElement(Y, {
                  onSelect: s,
                  options: c,
                  selected: i,
                  label: "Organization",
                  allowSearch: !0
                }),
                o.a.createElement(R, {
                  id: "assistant",
                  onChange: m,
                  value: d,
                  label: "Assistant"
                }),
                o.a.createElement(J, {
                  fieldLabel: f,
                  type: "email",
                  labelOptions: b,
                  list: h,
                  addListItem: g,
                  removeListItem: v,
                  isSingle: E
                }),
                o.a.createElement(J, {
                  fieldLabel: y,
                  type: "tel",
                  labelOptions: O,
                  list: C,
                  addListItem: j,
                  removeListItem: w,
                  isSingle: x
                }),
                o.a.createElement(R, {
                  id: "groups",
                  onChange: u,
                  value: l,
                  label: "Groups"
                })
              ),
              o.a.createElement(
                "div",
                { className: "modal-footer" },
                o.a.createElement(
                  "div",
                  { className: "modal-footer__right" },
                  o.a.createElement(
                    P,
                    { isPending: L, primary: !0, onClick: p },
                    "Save"
                  ),
                  o.a.createElement(P, { disabled: L, onClick: _ }, "Cancel")
                )
              )
            )
          );
        },
        $ = Object(p.a)(function() {
          var e = Re().peopleList.editPerson;
          if (!e) return null;
          var t = e.caption,
            n = e.name,
            a = e.submit,
            r = e.organization,
            i = e.onOrganizationChange,
            c = e.organizationOptions,
            s = e.groups,
            l = e.assistant,
            u = e.emails,
            d = e.phones,
            m = e.handleClose,
            p = e.isPending;
          return o.a.createElement(Z, {
            caption: t,
            onSubmit: a,
            name: n.value,
            onNameChange: n.onChange,
            nameError: n.error,
            organization: r,
            onOrganizationChange: i,
            organizationOptions: c,
            groups: s.value,
            onGroupsChange: s.onChange,
            assistant: l.value,
            onAssistantChange: l.onChange,
            emailFieldLabel: u.fieldLabel,
            emailList: u.list,
            emailLabelOptions: u.formattedLabelOptions,
            addEmail: u.addListItem,
            removeEmail: u.removeListItem,
            singleEmail: u.isSingle,
            phoneFieldLabel: d.fieldLabel,
            phoneList: d.list,
            phoneLabelOptions: d.formattedLabelOptions,
            addPhone: d.addListItem,
            removePhone: d.removeListItem,
            singlePhone: d.isSingle,
            onClose: m,
            isPending: p
          });
        }),
        X = n(104),
        ee = (function() {
          var e = Object(X.a)(
            d.a.mark(function e(t) {
              var n, a, r, o, i, c, s, l, u;
              return d.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = t.endpoint),
                        (a = t.method),
                        (r = void 0 === a ? "GET" : a),
                        (o = t.params),
                        (i = t.body),
                        (c = t.signal),
                        "https://react-hooks-mst.herokuapp.com",
                        "nope",
                        (s = {
                          method: r,
                          mode: "cors",
                          cache: "no-cache",
                          headers: { "Content-Type": "application/json" },
                          body: i ? JSON.stringify(i) : void 0,
                          signal: c
                        }),
                        (l = o ? "".concat(C(o), "&") : ""),
                        (u = ""
                          .concat("https://react-hooks-mst.herokuapp.com")
                          .concat(n, "?")
                          .concat(l, "api_token=")
                          .concat("nope")),
                        (e.next = 8),
                        fetch(u, s)
                      );
                    case 8:
                      return e.abrupt("return", e.sent);
                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        te = s.h.model("OrganizationInfoModel", {
          name: s.h.maybe(s.h.string),
          address: s.h.maybe(s.h.string),
          id: s.h.maybe(s.h.string)
        }),
        ne = s.h.model("ContactModel", {
          label: s.h.maybe(s.h.string),
          value: s.h.maybe(s.h.string)
        }),
        ae = function(e) {
          if (e.length) return e[0].value;
        },
        re = function(e) {
          if (e.length) {
            var t = e.slice(1, e.length);
            if (t.length)
              return t
                .map(function(e) {
                  return e.value;
                })
                .join(", ");
          }
        },
        oe = s.h
          .model("PersonModel", {
            id: s.h.identifier,
            name: s.h.string,
            assistant: s.h.maybe(s.h.string),
            groups: s.h.maybe(s.h.string),
            orderingId: s.h.maybe(s.h.number),
            organizationInfo: s.h.maybe(te),
            phones: s.h.optional(s.h.array(ne), []),
            emails: s.h.optional(s.h.array(ne), []),
            pictureId: s.h.maybe(s.h.string),
            incompleteData: !1
          })
          .views(function(e) {
            return {
              get store() {
                return Object(s.f)(e);
              },
              get pendingDelete() {
                return this.store.peopleList.pendingDelete;
              },
              get primaryPhone() {
                return ae(e.phones);
              },
              get primaryEmail() {
                return ae(e.emails);
              },
              get additionalEmails() {
                return re(e.emails);
              },
              get additionalPhones() {
                return re(e.phones);
              },
              get organization() {
                return (e.organizationInfo && e.organizationInfo.name) || "";
              },
              get location() {
                return (e.organizationInfo && e.organizationInfo.address) || "";
              },
              get searchQuery() {
                return this.store.peopleList.searchQuery;
              },
              get validSearch() {
                return this.store.peopleList.haveValidSearch;
              }
            };
          })
          .actions(function(e) {
            var t = Object(s.d)(
                d.a.mark(function t() {
                  var n, a, r, o, i;
                  return d.a.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (n = "/persons/".concat(e.id)),
                            (t.next = 3),
                            ee({ endpoint: n })
                          );
                        case 3:
                          if (!(a = t.sent) || !a.ok) {
                            t.next = 10;
                            break;
                          }
                          return (t.next = 7), a.json();
                        case 7:
                          return (
                            (r = t.sent),
                            (o = E(r)),
                            (i = o.data),
                            t.abrupt("return", i)
                          );
                        case 10:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              ),
              n = function(t) {
                try {
                  Object(s.a)(e, t);
                } catch (n) {
                  console.error(n);
                }
              },
              a = Object(s.d)(
                d.a.mark(function e() {
                  var a;
                  return d.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), t();
                        case 2:
                          if ((a = e.sent)) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt("return");
                        case 5:
                          n(a);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
            return {
              setSelected: function() {
                e.incompleteData && a(),
                  e.store.peopleList.showPersonDetails(e.id);
              },
              closeDetails: function() {
                e.store.peopleList.hidePeronDetailsDialog();
              },
              editPerson: function() {
                e.store.peopleList.openEditPersonModal(!0);
              },
              askForDeleteCurrentPerson: function() {
                e.store.peopleList.askForDeleteCurrentPerson();
              }
            };
          }),
        ie = s.h
          .model("PaginationModel", { limit: 10, currentPage: 1 })
          .views(function(e) {
            return {
              get peopleList() {
                return Object(s.e)(e, 1);
              },
              get total() {
                return this.peopleList.totalCount;
              },
              get pagesCount() {
                return 0 === this.total ? 1 : Math.ceil(this.total / e.limit);
              },
              get currentStartIndex() {
                return (e.currentPage - 1) * e.limit;
              },
              get onTheFirstPage() {
                return 0 === e.currentPage;
              },
              get onTheLastPage() {
                return e.currentPage === this.pagesCount;
              },
              get currentMaxCount() {
                return e.currentPage * e.limit;
              }
            };
          })
          .actions(function(e) {
            var t = function(t) {
              !(function(t) {
                e.currentPage = t;
              })(t);
              var n = (t - 1) * e.limit;
              e.peopleList.getFromCache(t) || e.peopleList.getList(n);
            };
            return {
              goToPage: t,
              goToPrev: function() {
                var n = e.currentPage - 1;
                n < 1 || t(n);
              }
            };
          }),
        ce = n(13),
        se = n(28),
        le = n.n(se),
        ue = {
          email: "email|min:3",
          text: "string",
          name: "required|string|max:60",
          tel: "string|regex:/^[^A-ZA-z]*$/g"
        },
        de = s.h
          .model("InputModel", {
            id: s.h.identifier,
            name: s.h.maybe(s.h.string),
            label: s.h.maybe(s.h.string),
            value: "",
            error: s.h.maybe(s.h.string),
            customRules: s.h.maybe(s.h.string),
            inputType: s.h.optional(
              s.h.enumeration("InputType", ["text", "email", "tel"]),
              "text"
            ),
            isDirty: !1
          })
          .actions(function(e) {
            var t = function(t) {
                (e.value = t), (e.error = "");
              },
              n = function(t) {
                e.error = t;
              };
            return {
              setValue: t,
              onChange: function(n) {
                !e.isDirty && (e.isDirty = !0), t(n.target.value);
              },
              setError: n,
              validate: function() {
                var t = new le.a(
                    Object(ce.a)({}, e.id, e.value),
                    Object(ce.a)({}, e.id, e.customRules || ue[e.inputType])
                  ),
                  a = t.passes(),
                  r = t.errors.first(e.id);
                return r && n(r), a;
              },
              reset: function() {
                (e.value = ""), (e.error = ""), (e.isDirty = !1);
              }
            };
          }),
        me = s.h
          .model("ContactItem", {
            id: s.h.identifierNumber,
            value: "",
            error: s.h.maybe(s.h.string),
            label: "work"
          })
          .views(function(e) {
            return {
              get list() {
                return Object(s.e)(e, 2);
              },
              get type() {
                return this.list.type;
              },
              get name() {
                return this.list.fieldLabel.toLocaleLowerCase();
              }
            };
          })
          .actions(function(e) {
            return {
              onValueChange: function(t) {
                !e.list.isDirty && e.list.setDirty(),
                  (e.value = t.target.value),
                  (e.error = "");
              },
              onLabelChange: function(t) {
                !e.list.isDirty && e.list.setDirty(), (e.label = t);
              },
              validate: function() {
                var t = new le.a(
                    Object(ce.a)({}, e.name, e.value),
                    Object(ce.a)({}, e.name, ue[e.type])
                  ),
                  n = t.passes(),
                  a = t.errors.first(e.name);
                return (
                  a &&
                    (function(t) {
                      e.error = t;
                    })(a),
                  n
                );
              }
            };
          }),
        pe = s.h
          .model("ContactModel", {
            fieldLabel: s.h.string,
            counter: 0,
            type: s.h.enumeration("InputTypes", ["string", "tel", "email"]),
            labelOptions: s.h.array(s.h.string),
            list: s.h.optional(s.h.array(me), [{ id: 0 }]),
            isDirty: !1
          })
          .views(function(e) {
            return {
              get isSingle() {
                return 1 === e.list.length;
              },
              get formattedLabelOptions() {
                return e.labelOptions.map(function(e) {
                  return { value: e, label: v(e) };
                });
              }
            };
          })
          .actions(function(e) {
            return {
              addListItem: function() {
                (e.counter += 1), e.list.push({ id: e.counter });
              },
              removeListItem: function(t) {
                var n = e.list.filter(function(e) {
                  return e.id !== t;
                });
                try {
                  Object(s.a)(e.list, n);
                } catch (a) {
                  console.error(a);
                }
              },
              validate: function() {
                return e.list
                  .map(function(e) {
                    return e.validate();
                  })
                  .every(function(e) {
                    return !0 === e;
                  });
              },
              setDirty: function() {
                e.isDirty = !0;
              },
              getValue: function() {
                return e.list
                  .toJSON()
                  .filter(function(e) {
                    return e.value;
                  })
                  .map(function(e, t) {
                    return { value: e.value, label: e.label, primary: 0 === t };
                  });
              }
            };
          });
      !(function(e) {
        (e.DELETE_CURRENT_PERSON = "deleteCurrentPerson"),
          (e.CLOSE_EDIT_PERSON_FORM = "closeEditPersonForm");
      })(a || (a = {}));
      var fe,
        he = s.h
          .model("WarningModel", {
            text: s.h.maybe(s.h.string),
            confirmText: s.h.maybe(s.h.string),
            cancelText: s.h.maybe(s.h.string),
            confirmAction: s.h.maybe(s.h.string),
            cancelAction: s.h.maybe(s.h.string)
          })
          .views(function(e) {
            return {
              get store() {
                return Object(s.f)(e);
              },
              get ui() {
                return Object(s.e)(e, 1);
              }
            };
          })
          .actions(function(e) {
            var t = Object(s.d)(
                d.a.mark(function t() {
                  return d.a.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), e.ui.hideWarningDialog();
                        case 2:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              ),
              n = Object(s.d)(
                d.a.mark(function n() {
                  return d.a.wrap(function(n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), t();
                        case 2:
                          e.store.peopleList.closeEditPersonModal();
                        case 3:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              ),
              r = Object(s.d)(
                d.a.mark(function n() {
                  return d.a.wrap(function(n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), t();
                        case 2:
                          e.store.peopleList.deleteCurrentPerson();
                        case 3:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              );
            return {
              handleAction: function(e) {
                switch (e) {
                  case a.DELETE_CURRENT_PERSON:
                    return r();
                  case a.CLOSE_EDIT_PERSON_FORM:
                    return n();
                  default:
                    return t();
                }
              }
            };
          }),
        ge = ["work", "home", "mobile", "other"],
        ve = ["work", "home", "other"],
        be = ["emails", "phones"],
        Ee = [].concat(["name", "groups", "assistant"], be),
        ye = { id: "name", name: "name", customRules: ue.name },
        Ce = {
          fieldLabel: "Email",
          type: "email",
          labelOptions: ve,
          list: [{ id: 0 }]
        },
        Oe = {
          fieldLabel: "Phone",
          type: "tel",
          labelOptions: ge,
          list: [{ id: 0 }]
        },
        je = { value: "none", label: "(not selected)" },
        we = s.h
          .model("EditPersonModel", {
            isEditMode: !1,
            caption: "Add person",
            id: s.h.maybe(s.h.string),
            orderingId: s.h.maybe(s.h.number),
            name: s.h.optional(de, ye),
            organization: je.value,
            groups: s.h.optional(de, { id: "groups" }),
            assistant: s.h.optional(de, { id: "assistant" }),
            emails: s.h.optional(pe, Ce),
            phones: s.h.optional(pe, Oe),
            isPending: !1
          })
          .views(function(e) {
            return {
              get store() {
                return Object(s.f)(e);
              },
              get validationKeys() {
                return ["name"].concat(be);
              },
              get inputKeys() {
                return Ee;
              },
              get isClear() {
                return (
                  !e.isEditMode &&
                  this.inputKeys
                    .map(function(t) {
                      return e[t].value;
                    })
                    .every(function(e) {
                      return !e;
                    })
                );
              },
              get isDirty() {
                return this.inputKeys
                  .map(function(t) {
                    return e[t].isDirty;
                  })
                  .some(function(e) {
                    return !0 === e;
                  });
              },
              get shouldBlockClose() {
                return e.isEditMode ? this.isDirty : !this.isClear;
              },
              get organizationOptions() {
                return [je].concat(
                  Object(m.a)(this.store.organizationsList.options)
                );
              }
            };
          })
          .actions(function(e) {
            var t = function(t, n) {
              var a = n.map(function(e, t) {
                return { id: t, value: e.value, label: e.label };
              });
              e[t].list = a;
            };
            return {
              setPendingStatus: function(t) {
                e.isPending = t;
              },
              onOrganizationChange: function(t) {
                e.organization = t;
              },
              submit: function() {
                if (
                  e.validationKeys
                    .map(function(t) {
                      return e[t].validate();
                    })
                    .every(function(e) {
                      return !0 === e;
                    })
                ) {
                  var t = (function() {
                      var t = {};
                      return (
                        e.inputKeys.forEach(function(n) {
                          var a = e[n];
                          a.isDirty && void 0 !== a.value && (t[n] = a.value);
                        }),
                        be.forEach(function(n) {
                          var a = e[n].getValue();
                          a && a.length && (t[n] = a);
                        }),
                        e.organization !== je.value &&
                          (t.organizationInfo = e.organization),
                        e.orderingId && (t.orderingId = e.orderingId),
                        t
                      );
                    })(),
                    n = e.store.peopleList,
                    a = n.updateSelectedPerson,
                    r = n.createNewPerson;
                  e.isEditMode ? a(t) : r(t);
                }
              },
              setValues: function(t) {
                Object.keys(t).forEach(function(n) {
                  void 0 !== t[n] && (e[n].value = t[n]);
                });
              },
              setPhones: function(e) {
                t("phones", e);
              },
              setEmails: function(e) {
                t("emails", e);
              },
              handleClose: function() {
                e.isPending ||
                  (e.shouldBlockClose
                    ? (function() {
                        var t = {
                          text:
                            "Are you sure you want to close this form without saving? All changes will be lost",
                          confirmText: "Yes, close form",
                          cancelText: "No, stay here",
                          confirmAction: a.CLOSE_EDIT_PERSON_FORM
                        };
                        e.store.ui.showWarningDialog(t);
                      })()
                    : e.store.peopleList.closeEditPersonModal());
              }
            };
          }),
        xe = s.h
          .model("ListCacheModel", {
            pageId: s.h.number,
            content: s.h.array(oe)
          })
          .actions(function(e) {
            return {
              updateList: function(t) {
                try {
                  Object(s.a)(e.content, t);
                } catch (n) {
                  console.error(n);
                }
              }
            };
          }),
        Ne = s.h
          .model("PeopleListModel", {
            defaultCaption: "People list",
            addLabel: "Add person",
            cache: s.h.array(xe),
            searchResult: s.h.array(oe),
            isLoadingList: !0,
            isLoadingAdditionalItems: !1,
            selectedPerson: s.h.maybe(s.h.reference(oe)),
            editPerson: s.h.maybe(we),
            pagination: s.h.optional(ie, {}),
            pendingDelete: !1,
            totalCount: 0,
            searchQuery: ""
          })
          .views(function(e) {
            return {
              get store() {
                return Object(s.f)(e);
              },
              get caption() {
                return this.haveValidSearch
                  ? 'Search result for "'.concat(e.searchQuery, '"')
                  : e.defaultCaption;
              },
              getFromCache: function(t) {
                return e.cache.find(function(e) {
                  return e.pageId === t;
                });
              },
              get currentListFragment() {
                return e.cache.find(function(t) {
                  return t.pageId === e.pagination.currentPage;
                });
              },
              get list() {
                return this.haveValidSearch
                  ? this.totalSearchResult
                  : this.currentListFragment
                  ? this.currentListFragment.content
                  : [];
              },
              get allItems() {
                return e.cache
                  .map(function(e) {
                    return e.content;
                  })
                  .flat();
              },
              get isEmpty() {
                return this.haveValidSearch
                  ? !e.isLoadingAdditionalItems &&
                      !this.totalSearchResult.length
                  : !e.isLoadingList && !this.allItems.length;
              },
              get shouldAddToEnd() {
                return (
                  !this.haveValidSearch &&
                  (e.pagination.onTheLastPage &&
                    this.list.length < e.pagination.limit)
                );
              },
              get haveValidSearch() {
                return e.searchQuery.length > 2;
              },
              get allItemsByQuery() {
                return this.haveValidSearch
                  ? this.allItems.filter(function(t) {
                      return j(e.searchQuery, t.name);
                    })
                  : [];
              },
              get itemsByQueryIds() {
                return this.allItemsByQuery.map(function(e) {
                  return e.id;
                });
              },
              get totalSearchResult() {
                return [].concat(
                  Object(m.a)(this.allItemsByQuery),
                  Object(m.a)(e.searchResult)
                );
              },
              get canFillCurrentFragment() {
                return (
                  !e.pagination.onTheLastPage &&
                  !this.haveValidSearch &&
                  e.pagination.currentMaxCount < e.totalCount
                );
              }
            };
          })
          .actions(function(e) {
            var t,
              n,
              r = null,
              o = function(t) {
                e.totalCount = t;
              },
              i = Object(s.d)(
                d.a.mark(function t() {
                  return d.a.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2), e.store.ui.closeModal("personDetails")
                          );
                        case 2:
                          e.selectedPerson = void 0;
                        case 3:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              ),
              c = function(t) {
                e.isLoadingList = t;
              },
              u = function(t) {
                e.isLoadingAdditionalItems = t;
              },
              p = function(t) {
                var n = { content: t, pageId: e.pagination.currentPage };
                try {
                  e.cache.push(n);
                } catch (a) {
                  console.error(a);
                }
              },
              f = function(t) {
                try {
                  Object(s.a)(e.cache, t);
                } catch (n) {
                  console.error(n);
                }
              },
              h = Object(s.d)(
                d.a.mark(function n() {
                  var a,
                    r,
                    o,
                    i,
                    c,
                    s = arguments;
                  return d.a.wrap(
                    function(n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (a = s.length > 0 && void 0 !== s[0] ? s[0] : 0),
                              (r =
                                s.length > 1 && void 0 !== s[1]
                                  ? s[1]
                                  : e.pagination.limit),
                              t && t.abort(),
                              (t = AbortController && new AbortController()),
                              "/persons",
                              (n.prev = 5),
                              (o = { from: a, limit: r }),
                              (n.next = 9),
                              ee({
                                endpoint: "/persons",
                                params: o,
                                signal: t.signal
                              })
                            );
                          case 9:
                            if (!(i = n.sent) || !i.ok) {
                              n.next = 15;
                              break;
                            }
                            return (n.next = 13), i.json();
                          case 13:
                            return (c = n.sent), n.abrupt("return", E(c));
                          case 15:
                            n.next = 20;
                            break;
                          case 17:
                            (n.prev = 17),
                              (n.t0 = n.catch(5)),
                              20 !== n.t0.code &&
                                (console.error(n.t0),
                                e.store.ui.addErrorNotification(
                                  "Unable to load People list"
                                ));
                          case 20:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[5, 17]]
                  );
                })
              ),
              g = Object(s.d)(
                d.a.mark(function t() {
                  var n,
                    a,
                    r,
                    i,
                    s,
                    l = arguments;
                  return d.a.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (n = l.length > 0 && void 0 !== l[0] ? l[0] : 0),
                            (a =
                              l.length > 1 && void 0 !== l[1]
                                ? l[1]
                                : e.pagination.limit),
                            c(!0),
                            (t.next = 5),
                            h(n, a)
                          );
                        case 5:
                          if (((r = t.sent), c(!1), r)) {
                            t.next = 9;
                            break;
                          }
                          return t.abrupt("return");
                        case 9:
                          (i = r.persons), (s = r.count), o(s), p(i);
                        case 12:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              ),
              v = function() {
                var t = e.cache.filter(function(t) {
                  return t.pageId <= e.pagination.currentPage;
                });
                f(t);
              },
              b = function() {
                var t = e.cache.filter(function(t) {
                  return t.pageId !== e.pagination.pagesCount;
                });
                f(t);
              },
              y = function(t, n) {
                var a = e.list.find(function(e) {
                  return e.id === t;
                });
                if (a)
                  try {
                    Object(s.a)(a, n);
                  } catch (r) {
                    console.error(r);
                  }
              },
              C = function(t) {
                try {
                  if (!e.currentListFragment || !t) return;
                  var n = [].concat(
                    Object(m.a)(e.currentListFragment.content),
                    [t]
                  );
                  Object(s.a)(e.currentListFragment.content, n);
                } catch (a) {
                  console.log(a);
                }
              },
              O = Object(s.d)(
                d.a.mark(function t() {
                  var n, a;
                  return d.a.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (n =
                              e.pagination.currentStartIndex + e.list.length),
                            u(!0),
                            (t.next = 4),
                            h(n, 1)
                          );
                        case 4:
                          if (((a = t.sent), u(!1), a)) {
                            t.next = 8;
                            break;
                          }
                          return t.abrupt("return");
                        case 8:
                          try {
                            C(a.persons[0]);
                          } catch (r) {
                            console.error(r);
                          }
                        case 9:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              ),
              j = Object(s.d)(
                d.a.mark(function e(t) {
                  var n, a, r, o, i, c;
                  return d.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t.id),
                            (a = t.isEdit),
                            (r = t.body),
                            (o = a ? "PUT" : "POST"),
                            (i = a ? "/persons/".concat(n) : "/persons"),
                            (c = E(r, !1)),
                            (e.next = 6),
                            ee({ endpoint: i, method: o, body: c })
                          );
                        case 6:
                          return e.abrupt("return", e.sent);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              w = Object(s.d)(
                d.a.mark(function t() {
                  return d.a.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2), e.store.ui.closeModal("editPerson")
                          );
                        case 2:
                          e.editPerson && Object(s.c)(e.editPerson);
                        case 3:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              ),
              x = function(t) {
                e.pendingDelete = t;
              },
              N = function(e) {
                var t = "/persons/".concat(e);
                return ee({ endpoint: t, method: "DELETE" });
              },
              k = Object(s.d)(
                d.a.mark(function t() {
                  var n, a, r, c;
                  return d.a.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (e.selectedPerson) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt("return");
                        case 2:
                          return (
                            (n = e.selectedPerson.id), x(!0), (t.next = 6), N(n)
                          );
                        case 6:
                          if (((a = t.sent), x(!1), a)) {
                            t.next = 11;
                            break;
                          }
                          return (
                            e.store.ui.addErrorNotification(
                              "Delete request failed"
                            ),
                            t.abrupt("return")
                          );
                        case 11:
                          return (t.next = 13), i();
                        case 13:
                          e.haveValidSearch &&
                          e.searchResult.find(function(e) {
                            return e.id === n;
                          })
                            ? ((r = e.searchResult.filter(function(e) {
                                return e.id !== n;
                              })),
                              S(r))
                            : e.currentListFragment &&
                              e.currentListFragment.content.length
                            ? ((c = e.currentListFragment.content.filter(
                                function(e) {
                                  return e.id !== n;
                                }
                              )),
                              e.currentListFragment.updateList(c),
                              e.canFillCurrentFragment && O(),
                              v())
                            : e.pagination.goToPrev(),
                            o(e.totalCount - 1),
                            e.store.ui.addSuccessNotification(
                              "Person was deleted"
                            );
                        case 17:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              ),
              L = Object(s.d)(
                d.a.mark(function t(n) {
                  var a, r, o, i;
                  return d.a.wrap(
                    function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (e.selectedPerson) {
                              t.next = 2;
                              break;
                            }
                            return t.abrupt("return");
                          case 2:
                            return (
                              (a = e.selectedPerson.id),
                              e.editPerson && e.editPerson.setPendingStatus(!0),
                              (t.next = 6),
                              j({ id: a, isEdit: !0, body: n })
                            );
                          case 6:
                            if (
                              ((r = t.sent),
                              e.editPerson && e.editPerson.setPendingStatus(!1),
                              r && r.ok)
                            ) {
                              t.next = 11;
                              break;
                            }
                            return (
                              e.store.ui.addErrorNotification(
                                "Update request failed"
                              ),
                              t.abrupt("return")
                            );
                          case 11:
                            return (t.prev = 11), (t.next = 14), r.json();
                          case 14:
                            (o = t.sent),
                              (i = E(o)),
                              y(a, i),
                              e.store.ui.addSuccessNotification(
                                "Person changed"
                              ),
                              w(),
                              (t.next = 25);
                            break;
                          case 21:
                            (t.prev = 21),
                              (t.t0 = t.catch(11)),
                              console.error(t.t0),
                              e.store.ui.addErrorNotification(
                                "An error encountered in updating a person"
                              );
                          case 25:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[11, 21]]
                  );
                })
              ),
              P = Object(s.d)(
                d.a.mark(function t(n) {
                  var a, r, i;
                  return d.a.wrap(
                    function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              e.editPerson && e.editPerson.setPendingStatus(!0),
                              (t.next = 3),
                              j({ isEdit: !1, body: n })
                            );
                          case 3:
                            if (
                              ((a = t.sent),
                              e.editPerson && e.editPerson.setPendingStatus(!1),
                              a && a.ok)
                            ) {
                              t.next = 8;
                              break;
                            }
                            return (
                              e.store.ui.addErrorNotification(
                                "Create person request failed"
                              ),
                              t.abrupt("return")
                            );
                          case 8:
                            return (t.prev = 8), (t.next = 11), a.json();
                          case 11:
                            (r = t.sent),
                              (i = E(r)),
                              e.shouldAddToEnd
                                ? (C(i), o(e.totalCount + 1))
                                : (o(e.totalCount + 1), b()),
                              e.store.ui.addSuccessNotification("Person added"),
                              w(),
                              (t.next = 22);
                            break;
                          case 18:
                            (t.prev = 18),
                              (t.t0 = t.catch(8)),
                              console.error(t.t0),
                              e.store.ui.addErrorNotification(
                                "An error encountered in creating a person"
                              );
                          case 22:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[8, 18]]
                  );
                })
              ),
              _ = function(e) {
                var t = e.id,
                  n = e.name,
                  a = e.orgName;
                return {
                  id: t,
                  name: n,
                  organizationInfo: a ? { name: a } : void 0,
                  pictureId: e.picture,
                  incompleteData: !0
                };
              },
              S = function(t) {
                var n = t.filter(function(t) {
                  return !e.itemsByQueryIds.includes(t.id);
                });
                try {
                  Object(s.a)(e.searchResult, n);
                } catch (a) {
                  console.error(a);
                }
              },
              I = Object(s.d)(
                d.a.mark(function t() {
                  var a, r, o, i, c;
                  return d.a.wrap(
                    function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              n && n.abort(),
                              (n = AbortController && new AbortController()),
                              "/persons/find",
                              (a = {
                                term: e.searchQuery,
                                start: 0,
                                limit: 500
                              }),
                              (t.prev = 4),
                              (t.next = 7),
                              ee({
                                endpoint: "/persons/find",
                                params: a,
                                signal: n.signal
                              })
                            );
                          case 7:
                            if (!(r = t.sent).ok) {
                              t.next = 15;
                              break;
                            }
                            return (t.next = 11), r.json();
                          case 11:
                            if (
                              ((o = t.sent),
                              (i = E(o)),
                              !(c = i.data) || !Array.isArray(c))
                            ) {
                              t.next = 15;
                              break;
                            }
                            return t.abrupt("return", c.map(_));
                          case 15:
                            t.next = 20;
                            break;
                          case 17:
                            (t.prev = 17),
                              (t.t0 = t.catch(4)),
                              20 !== t.t0.code && console.error(t.t0);
                          case 20:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[4, 17]]
                  );
                })
              ),
              D = function(t) {
                e.searchQuery = t;
              },
              T = Object(s.d)(
                d.a.mark(function e() {
                  return d.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            "/delete-all-persons",
                            (e.next = 3),
                            ee({
                              endpoint: "/delete-all-persons",
                              method: "DELETE"
                            })
                          );
                        case 3:
                          return e.abrupt("return", e.sent);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              M = Object(s.d)(
                d.a.mark(function e() {
                  return d.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return f([]), (e.next = 3), g();
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              R = Object(s.d)(
                d.a.mark(function t() {
                  return d.a.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return c(!0), (t.next = 3), T();
                        case 3:
                          if (t.sent.ok) {
                            t.next = 8;
                            break;
                          }
                          return (
                            c(!1),
                            e.store.ui.addErrorNotification(
                              "Unable to clear list"
                            ),
                            t.abrupt("return")
                          );
                        case 8:
                          return (t.next = 10), M();
                        case 10:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              ),
              A = Object(s.d)(
                d.a.mark(function e() {
                  return d.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            "/restore-default-data",
                            (e.next = 3),
                            ee({
                              endpoint: "/restore-default-data",
                              method: "POST"
                            })
                          );
                        case 3:
                          return e.abrupt("return", e.sent);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              F = Object(s.d)(
                d.a.mark(function t() {
                  return d.a.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return c(!0), (t.next = 3), A();
                        case 3:
                          if (t.sent.ok) {
                            t.next = 8;
                            break;
                          }
                          return (
                            c(!1),
                            e.store.ui.addErrorNotification(
                              "Unable to restore default data"
                            ),
                            t.abrupt("return")
                          );
                        case 8:
                          return (t.next = 10), M();
                        case 10:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
            return {
              getList: g,
              afterAttach: function() {
                g();
              },
              onDragEnd: function(t, n) {
                var a = Object(m.a)(e.list),
                  r = Math.min(t, n),
                  o = Math.max(t, n),
                  i = a.slice(0, r),
                  c = a.slice(o + 1, a.length),
                  s = a.slice(r, o + 1),
                  u = (a[r] && a[r].orderingId) || 1;
                if (t > n) {
                  var d = s.pop();
                  d && (s = [d].concat(Object(m.a)(s)));
                } else {
                  var p = s,
                    f = Object(l.a)(p),
                    h = f[0],
                    g = f.slice(1);
                  s = [].concat(Object(m.a)(g), [h]);
                }
                var v = 0;
                s.forEach(function(e) {
                  (e.orderingId = u),
                    (u += 1),
                    setTimeout(function() {
                      !(function(e, t) {
                        var n = "/persons/".concat(e);
                        ee({
                          endpoint: n,
                          method: "PUT",
                          body: { orderingId: t }
                        });
                      })(e.id, e.orderingId);
                    }, v),
                    (v += 60);
                });
                var b = [].concat(
                  Object(m.a)(i),
                  Object(m.a)(s),
                  Object(m.a)(c)
                );
                e.currentListFragment && e.currentListFragment.updateList(b);
              },
              showPersonDetails: function(t) {
                !(function(t) {
                  try {
                    e.selectedPerson = t;
                  } catch (n) {
                    console.error(n),
                      e.store.ui.addErrorNotification(
                        "Congratulations! You got an error I can't reproduce \ud83d\ude2b"
                      );
                  }
                })(t),
                  e.store.ui.openModal("personDetails");
              },
              hidePeronDetailsDialog: i,
              openEditPersonModal: function() {
                !(function(t) {
                  if (t) {
                    if (e.selectedPerson) {
                      var n = e.selectedPerson,
                        a = n.name,
                        r = n.orderingId,
                        o = n.groups,
                        i = n.id,
                        c = n.emails,
                        l = n.phones,
                        u = n.assistant,
                        d = n.organizationInfo,
                        m = {
                          isEditMode: !0,
                          id: i,
                          caption: "Edit person: ".concat(a),
                          orderingId: r
                        };
                      d && d.id && (m.organization = "".concat(d.id)),
                        (e.editPerson = m);
                      var p = { name: a, groups: o, assistant: u };
                      if ((e.editPerson.setValues(p), c.length)) {
                        var f = Object(s.g)(c);
                        e.editPerson.setEmails(f);
                      }
                      if (l.length) {
                        var h = Object(s.g)(l);
                        e.editPerson.setPhones(h);
                      }
                    }
                  } else
                    e.editPerson = {
                      orderingId: e.totalCount ? e.totalCount + 1 : void 0
                    };
                })(
                  arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0]
                ),
                  e.store.ui.openModal("editPerson");
              },
              closeEditPersonModal: w,
              askForDeleteCurrentPerson: function() {
                if (e.selectedPerson) {
                  var t = {
                    text: "Are you sure you want to delete ".concat(
                      e.selectedPerson.name,
                      "?"
                    ),
                    confirmText: "Yes, proceed",
                    confirmAction: a.DELETE_CURRENT_PERSON
                  };
                  e.store.ui.showWarningDialog(t);
                }
              },
              deleteCurrentPerson: k,
              updateSelectedPerson: L,
              createNewPerson: P,
              clearSearchQuery: function() {
                D(""), S([]);
              },
              performSearch: Object(s.d)(
                d.a.mark(function e() {
                  var t;
                  return d.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return u(!0), (e.next = 3), I();
                        case 3:
                          (t = e.sent), u(!1), t && S(t);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              handleSearchInputChange: function(t) {
                var n = this;
                D(t.target.value),
                  e.haveValidSearch &&
                    (r && clearTimeout(r),
                    (r = window.setTimeout(function() {
                      n.performSearch();
                    }, 200)));
              },
              clearWholeList: R,
              restoreDefaultData: F
            };
          }),
        ke = s.h
          .model("ModalModel", {
            id: s.h.identifier,
            isClosing: !1,
            isOpen: !1
          })
          .views(function(e) {
            return {
              get ui() {
                return Object(s.e)(e, 2);
              },
              get isTopLevel() {
                return this.ui.topModalId === e.id;
              },
              get shouldReactOnEsc() {
                return (
                  this.isTopLevel && this.isTopLevel && !this.ui.dropdownIsOpen
                );
              }
            };
          })
          .actions(function(e) {
            return {
              delayedClose: function() {
                (e.isClosing = !1), (e.isOpen = !1);
              },
              open: function() {
                (e.isOpen = !0), (e.isClosing = !1);
              },
              close: function() {
                var t = this;
                return (
                  (e.isClosing = !0),
                  new Promise(function(e) {
                    setTimeout(function() {
                      t.delayedClose(), e();
                    }, 250);
                  })
                );
              }
            };
          });
      !(function(e) {
        (e.ERROR = "error"), (e.SUCCESS = "success");
      })(fe || (fe = {}));
      var Le,
        Pe = s.h
          .model("Notification", {
            id: s.h.identifierNumber,
            type: s.h.enumeration("NotificationTypes", [fe.ERROR, fe.SUCCESS]),
            text: "",
            isHidden: !1,
            autoClose: !0,
            timeout: 5e3
          })
          .views(function(e) {
            return {
              get ui() {
                return Object(s.e)(e, 2);
              }
            };
          })
          .actions(function(e) {
            return {
              destroy: function() {
                (e.isHidden = !0),
                  setTimeout(function() {
                    e.ui.destroyNotification(e.id);
                  }, 500);
              },
              afterCreate: function() {
                e.autoClose && setTimeout(this.destroy, e.timeout);
              }
            };
          }),
        _e =
          (n(134),
          function(e) {
            var t = e.text,
              n = e.onConfirm,
              a = e.onCancel,
              r = e.confirmText,
              i = void 0 === r ? "Ok" : r,
              c = e.cancelText,
              s = void 0 === c ? "Cancel" : c;
            return o.a.createElement(
              N,
              {
                id: "warning-modal",
                openOnInit: !0,
                hideHeader: !0,
                customCloseFunction: a
              },
              o.a.createElement(
                "div",
                { className: "modal-content" },
                o.a.createElement(
                  "div",
                  { className: "warning-container" },
                  o.a.createElement("div", {
                    className: "warning-container__image",
                    role: "img"
                  }),
                  o.a.createElement(
                    "div",
                    { className: "warning-container__text" },
                    t
                  )
                )
              ),
              o.a.createElement(
                "div",
                { className: "modal-footer" },
                o.a.createElement(
                  "div",
                  { className: "modal-footer__right" },
                  o.a.createElement(P, { primary: !0, onClick: n }, i),
                  o.a.createElement(P, { onClick: a }, s)
                )
              )
            );
          }),
        Se = Object(p.a)(function() {
          var e = Re().ui.warning;
          if (!e) return null;
          var t = e.text,
            n = e.confirmAction,
            a = e.confirmText,
            r = e.cancelAction,
            i = e.cancelText,
            c = e.handleAction;
          return o.a.createElement(_e, {
            onCancel: function() {
              c(r);
            },
            onConfirm: function() {
              c(n);
            },
            text: t,
            cancelText: i,
            confirmText: a
          });
        }),
        Ie = s.h
          .model("UiModel", {
            modals: s.h.array(ke),
            notifications: s.h.array(Pe),
            dropdownIsOpen: !1,
            openedModals: s.h.array(s.h.string),
            warning: s.h.maybe(he),
            notificationsCount: 0
          })
          .views(function(e) {
            return {
              getModal: function(t) {
                return e.modals.find(function(e) {
                  return t === e.id;
                });
              },
              get topModalId() {
                return e.openedModals[e.openedModals.length - 1];
              },
              get haveOpenedPopups() {
                return !!e.openedModals.length;
              },
              getNotification: function(t) {
                return e.notifications.find(function(e) {
                  return e.id === t;
                });
              }
            };
          })
          .actions(function(e) {
            var t = function() {
                document.body.classList.add("disable-scroll");
              },
              n = function() {
                document.body.classList.remove("disable-scroll");
              },
              a = function(t) {
                var n = e.openedModals.filter(function(e) {
                  return e !== t;
                });
                Object(s.a)(e.openedModals, n);
              },
              r = function(n) {
                var a = e.getModal(n);
                a &&
                  (a.open(),
                  (function(t) {
                    e.openedModals.push(t);
                  })(n),
                  t());
              },
              o = Object(s.d)(
                d.a.mark(function t(r) {
                  var o;
                  return d.a.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!(o = e.getModal(r))) {
                            t.next = 6;
                            break;
                          }
                          return (t.next = 4), o.close();
                        case 4:
                          a(r), !e.openedModals.length && n();
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              ),
              i = Object(s.d)(
                d.a.mark(function e() {
                  return d.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), o("warning-modal");
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              c = function(t) {
                var n = t.type,
                  a = t.text;
                e.notifications.push({
                  id: e.notificationsCount,
                  type: n,
                  text: a
                }),
                  (e.notificationsCount += 1);
              };
            return {
              addModal: function(t) {
                e.getModal(t) || e.modals.push({ id: t });
              },
              removeModal: function(t) {
                var n = e.modals.filter(function(e) {
                  return e.id !== t;
                });
                Object(s.a)(e.modals, n);
              },
              openModal: r,
              closeModal: o,
              onDropdownOpen: function() {
                (e.dropdownIsOpen = !0), !e.haveOpenedPopups && t();
              },
              onDropdownClose: function() {
                (e.dropdownIsOpen = !1), !e.haveOpenedPopups && n();
              },
              showWarningDialog: function(t) {
                !(function(t) {
                  try {
                    e.warning = Object(s.b)(t);
                  } catch (n) {
                    console.error(n);
                  }
                })(t),
                  r("warning-modal");
              },
              hideWarningDialog: i,
              addSuccessNotification: function(e) {
                c({ text: e, type: fe.SUCCESS });
              },
              addErrorNotification: function(e) {
                c({ text: e, type: fe.ERROR });
              },
              destroyNotification: function(t) {
                var n = e.getNotification(t);
                n && Object(s.c)(n);
              }
            };
          }),
        De = s.h.model("OrganizationModel", {
          id: s.h.identifier,
          name: s.h.string
        }),
        Te = s.h
          .model("OrganizationsLIst", { list: s.h.optional(s.h.array(De), []) })
          .views(function(e) {
            return {
              get options() {
                return e.list.map(function(e) {
                  return { value: "".concat(e.id), label: e.name };
                });
              }
            };
          })
          .actions(function(e) {
            var t = function(t) {
                try {
                  Object(s.a)(e.list, t);
                } catch (n) {
                  console.error(n);
                }
              },
              n = Object(s.d)(
                d.a.mark(function e() {
                  var t;
                  return d.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            "/organizations",
                            (t = { start: 0, limit: 1e4, sort: "name" }),
                            (e.next = 4),
                            ee({ endpoint: "/organizations", params: t })
                          );
                        case 4:
                          return e.abrupt("return", e.sent);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              a = Object(s.d)(
                d.a.mark(function e() {
                  var a, r, o;
                  return d.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), n();
                          case 3:
                            if ((a = e.sent) && a.ok) {
                              e.next = 6;
                              break;
                            }
                            return e.abrupt("return");
                          case 6:
                            return (e.next = 8), a.json();
                          case 8:
                            (r = e.sent), (o = E(r)), t(o), (e.next = 16);
                            break;
                          case 13:
                            (e.prev = 13),
                              (e.t0 = e.catch(0)),
                              console.error(e.t0);
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 13]]
                  );
                })
              );
            return {
              afterAttach: function() {
                a();
              }
            };
          }),
        Me = s.h.model("MainStore", {
          peopleList: s.h.optional(Ne, {}),
          organizationsList: s.h.optional(Te, {}),
          ui: s.h.optional(Ie, {})
        }),
        Re = function() {
          return Object(r.useContext)(Le);
        },
        Ae =
          (n(135),
          n(136),
          function() {
            return o.a.createElement(
              "header",
              { className: "app-header" },
              o.a.createElement(
                "a",
                { href: "/", className: "app-header__link" },
                o.a.createElement(
                  "h1",
                  { className: "app-header__logo" },
                  o.a.createElement(
                    "span",
                    { className: "visually-hidden" },
                    "Company name was here"
                  )
                )
              )
            );
          }),
        Fe =
          (n(137),
          function() {
            return o.a.createElement(
              "footer",
              { className: "app-footer" },
              "Pointless footer here"
            );
          }),
        ze = n(20),
        Ue =
          (n(138),
          n(139),
          Object(p.a)(function(e) {
            var t = e.id,
              n = e.index,
              a = e.name,
              r = e.imageUrl,
              i = e.organization,
              c = e.setSelected,
              s = e.searchQuery,
              l = e.validSearch,
              u = function(e) {
                e && e.preventDefault(), c();
              },
              d = function(e) {
                "Space" === e.code && (e && e.preventDefault(), c());
              },
              m = function() {
                document.addEventListener("keypress", d);
              },
              p = function() {
                document.removeEventListener("keypress", d);
              },
              f = l ? s : "";
            return o.a.createElement(
              ze.b,
              { key: t, draggableId: "".concat(t), index: n },
              function(e, n) {
                var c = n.isDragging;
                return o.a.createElement(
                  "li",
                  Object.assign(
                    {
                      className: O("people-list-item", { isDragging: c }),
                      ref: e.innerRef
                    },
                    e.draggableProps
                  ),
                  o.a.createElement(
                    "div",
                    Object.assign(
                      {
                        className: O("people-list-item__drag", { isHidden: l })
                      },
                      e.dragHandleProps
                    )
                  ),
                  o.a.createElement(
                    "a",
                    {
                      href: "#".concat(t),
                      onClick: u,
                      onFocus: m,
                      onBlur: p,
                      role: "button",
                      className: O("people-list-item__button", { isOnly: l })
                    },
                    o.a.createElement(
                      "div",
                      { className: "people-list-item__left" },
                      o.a.createElement(
                        "p",
                        { className: "people-list-item-name" },
                        o.a.createElement(B, {
                          value: a,
                          query: f,
                          matchedClassName:
                            "people-list-item-name__matched-search"
                        })
                      ),
                      i &&
                        o.a.createElement(
                          "p",
                          { className: "people-list-item-org" },
                          i
                        )
                    ),
                    o.a.createElement(
                      "div",
                      { className: "people-list-item__right" },
                      o.a.createElement(L, { name: a, imageUrl: r })
                    )
                  )
                );
              }
            );
          })),
        Be =
          (n(101),
          function(e) {
            var t = e.isActive,
              n = e.onClick,
              a = e.text,
              r = e.pageId,
              i = e.disabled,
              c = e.isNext,
              s = e.isPrev,
              l = c || s;
            return o.a.createElement(
              "li",
              {
                className: O("pagination__item", {
                  isActive: t,
                  isPrev: s,
                  isNext: c
                })
              },
              o.a.createElement(
                "button",
                {
                  onClick: function() {
                    !t && n(r);
                  },
                  disabled: i,
                  className: O("pagination__button", {
                    isActive: t,
                    isPrev: s,
                    isNext: c
                  })
                },
                o.a.createElement(
                  "span",
                  { className: l ? "visually-hidden" : void 0 },
                  a
                )
              )
            );
          }),
        Qe = function(e) {
          for (
            var t = e.total,
              n = e.pagesCount,
              a = e.onPaginationClick,
              r = e.currentPage,
              i = r < 2,
              c = r >= n,
              s = [],
              l = 1;
            l <= n;
            l++
          )
            s.push(l);
          return o.a.createElement(
            "div",
            { className: "pagination" },
            o.a.createElement(
              "ul",
              { className: "pagination__list" },
              o.a.createElement(Be, {
                text: "Prev",
                isPrev: !0,
                onClick: a,
                pageId: r - 1,
                disabled: i
              }),
              s.map(function(e) {
                return o.a.createElement(Be, {
                  key: e,
                  pageId: e,
                  onClick: a,
                  text: "".concat(e),
                  isActive: e === r
                });
              }),
              o.a.createElement(Be, {
                text: "Next",
                isNext: !0,
                onClick: a,
                pageId: r + 1,
                disabled: c
              })
            ),
            o.a.createElement(
              "p",
              { className: "pagination__total" },
              "Total: ",
              t
            )
          );
        },
        We =
          (n(176),
          function(e) {
            var t = e.searchQuery,
              n = e.onSearchInputChange,
              a = e.onSearchClear;
            return o.a.createElement(
              "form",
              {
                onSubmit: function(e) {
                  e && e.preventDefault();
                },
                onReset: function(e) {
                  e && e.preventDefault(), a();
                },
                className: "search-bar"
              },
              o.a.createElement(M, {
                id: "Search",
                value: t,
                onChange: n,
                placeholder: "Search by name"
              }),
              o.a.createElement("button", {
                type: "reset",
                className: "search-bar__clear",
                title: "Clear"
              })
            );
          }),
        Ve = Object(p.a)(function(e) {
          var t = e.list;
          return o.a.createElement(
            r.Fragment,
            null,
            t.map(function(e, t) {
              var n = e.name,
                a = e.id,
                r = e.organization,
                i = e.setSelected,
                c = e.pictureId,
                s = e.searchQuery,
                l = e.validSearch;
              return o.a.createElement(Ue, {
                id: a,
                key: a,
                index: t,
                name: n,
                organization: r,
                setSelected: i,
                imageUrl: c,
                searchQuery: s,
                validSearch: l
              });
            })
          );
        }),
        He = function(e) {
          var t = e.caption,
            n = e.isLoadingList,
            a = e.isLoadingAdditionalItems,
            r = e.isEmpty,
            i = e.list,
            c = e.onDragEnd,
            s = e.onAddClick,
            l = e.addLabel,
            u = e.total,
            d = e.pagesCount,
            m = e.onPaginationClick,
            p = e.currentPage,
            f = e.searchQuery,
            h = e.onSearchClear,
            g = e.onSearchInputChange,
            v = e.isSearchMode,
            b = e.clearWholeList,
            E = e.restoreDefaultData;
          return o.a.createElement(
            "main",
            { className: "view-container" },
            o.a.createElement(
              "header",
              { className: "view-header" },
              o.a.createElement("h2", { className: "view-caption" }, t)
            ),
            o.a.createElement(
              "div",
              { className: "toolbar" },
              o.a.createElement(
                "div",
                { className: "toolbar__left" },
                o.a.createElement(P, { primary: !0, onClick: s }, l),
                o.a.createElement(We, {
                  onSearchInputChange: g,
                  onSearchClear: h,
                  searchQuery: f
                }),
                o.a.createElement(
                  P,
                  { collapsible: !0, icon: "delete", disabled: n, onClick: b },
                  "Clear all"
                ),
                o.a.createElement(
                  P,
                  { collapsible: !0, icon: "restore", disabled: n, onClick: E },
                  "Restore defaults"
                )
              ),
              o.a.createElement(
                "div",
                { className: "toolbar__right" },
                !v &&
                  o.a.createElement(Qe, {
                    total: u,
                    onPaginationClick: m,
                    currentPage: p,
                    pagesCount: d
                  })
              )
            ),
            o.a.createElement(
              "div",
              { className: O("view-content", { isEmpty: r }) },
              n && o.a.createElement(S, null),
              r &&
                o.a.createElement(
                  "div",
                  { className: "view-content__empty-message" },
                  v ? "No items found" : "This list is empty"
                ),
              !r &&
                o.a.createElement(
                  ze.a,
                  {
                    onDragEnd: function(e) {
                      var t = e.destination,
                        n = e.source;
                      t &&
                        ((t.droppableId === n.droppableId &&
                          t.index === n.index) ||
                          c(n.index, t.index));
                    }
                  },
                  o.a.createElement(ze.c, { droppableId: "list" }, function(
                    e,
                    t
                  ) {
                    return o.a.createElement(
                      "ul",
                      Object.assign(
                        { className: "view-content__list", ref: e.innerRef },
                        e.droppableProps
                      ),
                      o.a.createElement(Ve, { list: i }),
                      e.placeholder,
                      a &&
                        o.a.createElement(
                          "li",
                          { className: "view-content__list-placeholder" },
                          o.a.createElement(_, { small: !0 })
                        )
                    );
                  })
                )
            )
          );
        },
        qe = Object(p.a)(function() {
          var e = Re().peopleList,
            t = e.isLoadingList,
            n = e.isLoadingAdditionalItems,
            a = e.caption,
            r = e.isEmpty,
            i = e.list,
            c = e.onDragEnd,
            s = e.addLabel,
            l = e.openEditPersonModal,
            u = e.pagination,
            d = e.searchQuery,
            m = e.handleSearchInputChange,
            p = e.clearSearchQuery,
            f = e.haveValidSearch,
            h = e.clearWholeList,
            g = e.restoreDefaultData,
            v = u.total,
            b = u.goToPage,
            E = u.pagesCount,
            y = u.currentPage;
          return o.a.createElement(He, {
            isSearchMode: f,
            caption: a,
            isLoadingList: t,
            isLoadingAdditionalItems: n,
            isEmpty: r,
            list: i,
            onDragEnd: c,
            onAddClick: l,
            addLabel: s,
            total: v,
            onPaginationClick: b,
            currentPage: y,
            pagesCount: E,
            searchQuery: d,
            onSearchInputChange: m,
            onSearchClear: p,
            clearWholeList: h,
            restoreDefaultData: g
          });
        }),
        Ke = function() {
          return o.a.createElement(
            r.Fragment,
            null,
            o.a.createElement(D, null),
            o.a.createElement($, null),
            o.a.createElement(Se, null)
          );
        },
        Ge =
          (n(102),
          function(e) {
            var t = e.type,
              n = e.isHidden,
              a = e.text;
            return o.a.createElement(
              "li",
              {
                className: ""
                  .concat(O("notification", { isHidden: n }), " ")
                  .concat("notification", "_")
                  .concat(t)
              },
              o.a.createElement("span", {
                className: "notification__icon notification__icon_".concat(t)
              }),
              o.a.createElement("p", { className: "notification__text" }, a)
            );
          }),
        Je = Object(p.a)(function(e) {
          var t = e.list,
            n = o.a.createElement(
              "ul",
              { className: "notifications-list" },
              t.map(function(e) {
                var t = e.type,
                  n = e.text,
                  a = e.id,
                  r = e.isHidden;
                return o.a.createElement(Ge, {
                  key: a,
                  type: t,
                  text: n,
                  isHidden: r
                });
              })
            ),
            a = document.getElementById("dropdown-root");
          return a ? Object(i.createPortal)(n, a) : null;
        }),
        Ye = Object(p.a)(function() {
          var e = Re().ui.notifications;
          return o.a.createElement(Je, { list: e });
        }),
        Ze = function() {
          return o.a.createElement(
            "div",
            { className: "app-wrapper" },
            o.a.createElement(Ae, null),
            o.a.createElement(qe, null),
            o.a.createElement(Fe, null),
            o.a.createElement(Ke, null),
            o.a.createElement(Ye, null)
          );
        };
      !(function() {
        var e = Me.create({});
        Le = Object(r.createContext)(e);
      })(),
        Object(i.render)(
          o.a.createElement(Ze, null),
          document.getElementById("root")
        );
    },
    18: function(e, t, n) {},
    41: function(e, t, n) {},
    42: function(e, t, n) {},
    43: function(e, t, n) {}
  },
  [[112, 1, 2]]
]);
//# sourceMappingURL=main.3cc71dcf.chunk.js.map
