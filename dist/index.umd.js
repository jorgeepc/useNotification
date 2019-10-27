!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(
        exports,
        require('uuid'),
        require('react-spring'),
        require('react-dom'),
        require('react'),
        require('styled-components'),
      )
    : 'function' == typeof define && define.amd
    ? define([
        'exports',
        'uuid',
        'react-spring',
        'react-dom',
        'react',
        'styled-components',
      ], t)
    : t(
        (e.reactUseNotification = {}),
        e.uuid,
        e.reactSpring,
        e.ReactDom,
        e.react,
        e.styled,
      )
})(this, function(e, t, n, r, i, o) {
  ;(t = t && t.hasOwnProperty('default') ? t.default : t),
    (r = r && r.hasOwnProperty('default') ? r.default : r)
  var a = 'default' in i ? i.default : i,
    c = 'default' in o ? o.default : o,
    u = function(e) {
      this.events = e || {}
    }
  ;(u.prototype.subscribe = function(e, t) {
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
    (u.prototype.emit = function(e) {
      for (var t = [], n = arguments.length - 1; n-- > 0; )
        t[n] = arguments[n + 1]
      ;(this.events[e] || []).forEach(function(e) {
        return e.apply(void 0, t)
      })
    })
  var s = function() {
    this._eventEmitter = new u()
  }
  function f(e) {
    return r.createPortal(
      a.createElement('div', null, e.children),
      document.body,
    )
  }
  ;(s.prototype.subscribeToAddNotification = function(e) {
    return this._eventEmitter.subscribe('addNotification', e)
  }),
    (s.prototype.addNotification = function(e) {
      var t = e.id
      return this._eventEmitter.emit('addNotification', e), t
    })
  var d = {
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
    l = Object.freeze(['\n      color: ', ';\n    ']),
    b = Object.freeze([
      '\n  font-family: ',
      ';\n  font-size: ',
      ';\n  font-weight: ',
      ';\n  color: ',
      ';\n  ',
      '\n',
    ]),
    p = function(e) {
      var t = e.white
      return (
        void 0 === t && (t = !1), a.createElement(h, { white: t }, e.children)
      )
    },
    h = c.span(
      b,
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;',
      '14px',
      400,
      d.base.default,
      function(e) {
        return e.white && o.css(l, d.base.white)
      },
    ),
    v = Object.freeze([
      '\n  svg {\n    opacity: 1;\n    cursor: pointer;\n    transition: opacity 0.3s ease 0s;\n  }\n  svg:hover {\n    opacity: 0.75;\n  }\n',
    ]),
    g = Object.freeze([
      '\n  background: ',
      ';\n  color: ',
      ';\n  width: 420px;\n  min-height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 0px none;\n  border-radius: 5px;\n  padding: ',
      ' ',
      ';\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n',
    ]),
    m = Object.freeze([
      '\n  width: 420px;\n  transition: all 0.4s ease 0s;\n  box-sizing: border-box;\n  &:focus {\n    outline: none;\n  }\n',
    ])
  function y(e) {
    var t = e.notification,
      n = e.remove,
      r = e.getRef,
      i = (function(e) {
        var n = { color: d.base.white }
        switch (t.status) {
          case 'default':
            return { color: d.base.default, background: d.base.white }
          case 'success':
            return Object.assign({}, n, { background: d.base.green })
          case 'warning':
            return Object.assign({}, n, { background: d.base.yellow })
          case 'error':
            return Object.assign({}, n, { background: d.base.red })
        }
      })(),
      o = 'default' !== t.status ? { white: !0 } : {}
    return a.createElement(
      x,
      { ref: r },
      a.createElement(
        w,
        Object.assign({}, i, { 'data-testid': 'content-div' }),
        a.createElement(p, o, t.message),
        a.createElement(
          E,
          {
            onClick: function() {
              n(t.id)
            },
            'data-testid': 'close-div',
          },
          a.createElement(
            'svg',
            {
              fill: 'currentColor',
              height: '1em',
              width: '1em',
              viewBox: '0 0 40 40',
            },
            a.createElement('path', {
              d:
                'm31.6 10.7l-9.3 9.3 9.3 9.3-2.3 2.3-9.3-9.3-9.3 9.3-2.3-2.3 9.3-9.3-9.3-9.3 2.3-2.3 9.3 9.3 9.3-9.3z',
            }),
          ),
        ),
      ),
    )
  }
  var x = c.div(m),
    w = c.div(
      g,
      function(e) {
        return e.background
      },
      function(e) {
        return e.color
      },
      '8px',
      '16px',
    ),
    E = c.div(v),
    k = Object.freeze([
      '\n  position: fixed;\n  bottom: 10px;\n  right: 20px;\n  max-width: 420px;\n  z-index: 2000;\n  box-sizing: border-box;\n',
    ])
  function O(e) {
    var t = e.state,
      r = i.useState([]),
      o = r[0],
      c = r[1],
      u = i.useState(function() {
        return new WeakMap()
      })[0],
      s = i.useRef(!1),
      d = n.useTransition(
        o,
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
                    height: u.get(e) ? u.get(e).offsetHeight + 10 : 0,
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
      l = i.useCallback(function(e) {
        c(function(t) {
          var n = t.filter(function(t) {
            return t.id !== e
          })
          return n.length !== t.length ? n : t
        })
      }, [])
    return (
      i.useEffect(
        function() {
          var e = t.subscribeToAddNotification(function(e) {
            c(function(t) {
              return t.concat([e])
            })
          })
          return function() {
            e.unsubscribe()
          }
        },
        [t],
      ),
      i.useEffect(function() {
        var e = setInterval(function() {
          s.current ||
            c(function(e) {
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
      a.createElement(
        f,
        null,
        a.createElement(
          j,
          {
            onMouseEnter: function() {
              s.current = !0
            },
            onMouseLeave: function() {
              s.current = !1
            },
          },
          d.map(function(e) {
            var t = e.item
            return a.createElement(
              n.animated.div,
              { key: e.key, style: e.props },
              a.createElement(y, {
                getRef: function(e) {
                  return e && u.set(t, e)
                },
                notification: t,
                remove: l,
              }),
            )
          }),
        ),
      )
    )
  }
  var j = c.div(k),
    N = a.createContext(void 0)
  ;(e.NotificationState = s),
    (e.NotificationProvider = function(e) {
      var n = e.children,
        r = e.state
      return a.createElement(
        N.Provider,
        {
          value: {
            notify: function(e, n) {
              void 0 === n && (n = 'default'),
                r.addNotification({
                  id: t(),
                  createdAt: Date.now(),
                  message: e,
                  status: n,
                })
            },
          },
        },
        a.createElement(O, { state: r }),
        n,
      )
    }),
    (e.useNotification = function() {
      var e = i.useContext(N)
      if (void 0 === e)
        throw new Error(
          'useNotification must be used within a NotificationProvider',
        )
      return e
    })
})
//# sourceMappingURL=index.umd.js.map
