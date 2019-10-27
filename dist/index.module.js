import e from 'uuid'
import { useTransition as t, animated as n } from 'react-spring'
import r from 'react-dom'
import i, {
  useCallback as o,
  useEffect as a,
  useRef as c,
  useState as u,
  useContext as s,
} from 'react'
import f, { css as d } from 'styled-components'
var l = function(e) {
  this.events = e || {}
}
;(l.prototype.subscribe = function(e, t) {
  var n = this
  return (
    (this.events[e] || (this.events[e] = [])).push(t),
    {
      unsubscribe: function() {
        return (
          n.events[e] && n.events[e].splice(n.events[e].indexOf(t) >>> 0, 1)
        )
      },
    }
  )
}),
  (l.prototype.emit = function(e) {
    for (var t = [], n = arguments.length - 1; n-- > 0; )
      t[n] = arguments[n + 1]
    ;(this.events[e] || []).forEach(function(e) {
      return e.apply(void 0, t)
    })
  })
var b = function() {
  this._eventEmitter = new l()
}
function v(e) {
  return r.createPortal(i.createElement('div', null, e.children), document.body)
}
;(b.prototype.subscribeToAddNotification = function(e) {
  return this._eventEmitter.subscribe('addNotification', e)
}),
  (b.prototype.addNotification = function(e) {
    var t = e.id
    return this._eventEmitter.emit('addNotification', e), t
  })
var h = {
    base: {
      white: '#FFF',
      black: '#000',
      default: '#252529',
      gray: '#4E5974',
      grayLight: '#A0AAAD',
      grayLightest: '#E1E6EA',
      purple: '#662482',
      purpleLight: '#d1c1ff',
      blueDark: '#097093',
      blue: '#3BC0F2',
      blueLight: '#DBF4FD',
      greenDark: '#00946e',
      green: '#3FD5AE',
      greenLight: '#aaf3e0',
      yellowDark: '#987800',
      yellow: '#FFC900',
      yellowLight: '#ffeca4',
      redDark: '#a22b31',
      red: '#FE6068',
      redLight: '#ffbbbe',
    },
  },
  g = Object.freeze(['\n      color: ', ';\n    ']),
  p = Object.freeze([
    '\n  font-family: ',
    ';\n  font-size: ',
    ';\n  font-weight: ',
    ';\n  color: ',
    ';\n  ',
    '\n',
  ]),
  m = function(e) {
    var t = e.white
    return (
      void 0 === t && (t = !1), i.createElement(y, { white: t }, e.children)
    )
  },
  y = f.span(
    p,
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;',
    '14px',
    400,
    h.base.default,
    function(e) {
      return e.white && d(g, h.base.white)
    },
  ),
  w = Object.freeze([
    '\n  svg {\n    opacity: 1;\n    cursor: pointer;\n    transition: opacity 0.3s ease 0s;\n  }\n  svg:hover {\n    opacity: 0.75;\n  }\n',
  ]),
  x = Object.freeze([
    '\n  background: ',
    ';\n  color: ',
    ';\n  width: 420px;\n  min-height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 0px none;\n  border-radius: 5px;\n  padding: ',
    ' ',
    ';\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n',
  ]),
  E = Object.freeze([
    '\n  width: 420px;\n  transition: all 0.4s ease 0s;\n  box-sizing: border-box;\n  &:focus {\n    outline: none;\n  }\n',
  ])
function k(e) {
  var t = e.notification,
    n = e.remove,
    r = e.getRef,
    o = (function(e) {
      var n = { color: h.base.white }
      switch (t.status) {
        case 'default':
          return { color: h.base.default, background: h.base.white }
        case 'success':
          return Object.assign({}, n, { background: h.base.green })
        case 'warning':
          return Object.assign({}, n, { background: h.base.yellow })
        case 'error':
          return Object.assign({}, n, { background: h.base.red })
      }
    })(),
    a = 'default' !== t.status ? { white: !0 } : {}
  return i.createElement(
    j,
    { ref: r },
    i.createElement(
      z,
      Object.assign({}, o, { 'data-testid': 'content-div' }),
      i.createElement(m, a, t.message),
      i.createElement(
        F,
        {
          onClick: function() {
            n(t.id)
          },
          'data-testid': 'close-div',
        },
        i.createElement(
          'svg',
          {
            fill: 'currentColor',
            height: '1em',
            width: '1em',
            viewBox: '0 0 40 40',
          },
          i.createElement('path', {
            d:
              'm31.6 10.7l-9.3 9.3 9.3 9.3-2.3 2.3-9.3-9.3-9.3 9.3-2.3-2.3 9.3-9.3-9.3-9.3 2.3-2.3 9.3 9.3 9.3-9.3z',
          }),
        ),
      ),
    ),
  )
}
var j = f.div(E),
  z = f.div(
    x,
    function(e) {
      return e.background
    },
    function(e) {
      return e.color
    },
    '8px',
    '16px',
  ),
  F = f.div(w),
  O = Object.freeze([
    '\n  position: fixed;\n  bottom: 10px;\n  right: 20px;\n  max-width: 420px;\n  z-index: 2000;\n  box-sizing: border-box;\n',
  ])
function D(e) {
  var r = e.state,
    s = u([]),
    f = s[0],
    d = s[1],
    l = u(function() {
      return new WeakMap()
    })[0],
    b = c(!1),
    h = t(
      f,
      function(e) {
        return e.id
      },
      {
        from: { opacity: 0, height: 0 },
        enter: function(e) {
          return function(t) {
            try {
              return Promise.resolve(
                t({
                  opacity: 1,
                  height: l.get(e) ? l.get(e).offsetHeight + 10 : 0,
                }),
              )
            } catch (e) {
              return Promise.reject(e)
            }
          }
        },
        leave: { opacity: 0, height: 0 },
      },
    ),
    g = o(function(e) {
      d(function(t) {
        var n = t.filter(function(t) {
          return t.id !== e
        })
        return n.length !== t.length ? n : t
      })
    }, [])
  return (
    a(
      function() {
        var e = r.subscribeToAddNotification(function(e) {
          d(function(t) {
            return t.concat([e])
          })
        })
        return function() {
          e.unsubscribe()
        }
      },
      [r],
    ),
    a(function() {
      var e = setInterval(function() {
        b.current ||
          d(function(e) {
            var t = e.filter(function(e) {
              return Date.now() < e.createdAt + 1e4
            })
            return t.length !== e.length ? t : e
          })
      }, 100)
      return function() {
        clearInterval(e)
      }
    }, []),
    i.createElement(
      v,
      null,
      i.createElement(
        A,
        {
          onMouseEnter: function() {
            b.current = !0
          },
          onMouseLeave: function() {
            b.current = !1
          },
        },
        h.map(function(e) {
          var t = e.item
          return i.createElement(
            n.div,
            { key: e.key, style: e.props },
            i.createElement(k, {
              getRef: function(e) {
                return e && l.set(t, e)
              },
              notification: t,
              remove: g,
            }),
          )
        }),
      ),
    )
  )
}
var A = f.div(O),
  N = i.createContext(void 0)
function L(t) {
  var n = t.children,
    r = t.state
  return i.createElement(
    N.Provider,
    {
      value: {
        notify: function(t, n) {
          void 0 === n && (n = 'default'),
            r.addNotification({
              id: e(),
              createdAt: Date.now(),
              message: t,
              status: n,
            })
        },
      },
    },
    i.createElement(D, { state: r }),
    n,
  )
}
function C() {
  var e = s(N)
  if (void 0 === e)
    throw new Error(
      'useNotification must be used within a NotificationProvider',
    )
  return e
}
export {
  b as NotificationState,
  L as NotificationProvider,
  C as useNotification,
}
//# sourceMappingURL=index.module.js.map
