import { ff as l, fk as s, fh as L, bF as k, fg as x, em as c, _ as j$1, bG as x$1, dp as m$1, dn as m$2, cr as M } from "./vendor.74d5941c.js";
import { h, d, N, a as N$1, D, o, J, I, B, S, b as a, c as N$2, T, e as b, _, j, t, u, f as N$3, m, p, A, g as S$1, O, K, Z, F, E, i as h$1, k as g, l as k$1, w, v, X, q, y as ye$1, P, n as e, s as s$1, r as D$1, x as te$1, z as i, C as h$2 } from "./arcadeUtils.f4f7c393.js";
import { registerFunctions as on } from "./geomasync.c75fd02c.js";
import "./number.c0719e5d.js";
import "./FeatureSetReader.a91e3e2d.js";
import "./centroid.93c1b848.js";
import "./geometryEngineAsync.6e91af62.js";
function te(e2) {
  return e2 && typeof e2.then == "function";
}
const re = 100;
function ne(e2) {
  return e2 instanceof Error ? L(e2) : L(new Error(e2));
}
function oe(e2) {
  return x(e2);
}
function ae(e2, r) {
  const n = [];
  for (let t2 = 0; t2 < r.arguments.length; t2++)
    n.push(se(e2, r.arguments[t2]));
  return s(n);
}
function ce(t2, r, n) {
  return l((e2, o2) => {
    ae(t2, r).then((a2) => {
      try {
        e2(n(t2, r, a2));
      } catch (c2) {
        o2(c2);
      }
    }, o2);
  });
}
function ie(e2, t2, r) {
  try {
    return ae(e2, t2).then((o2) => {
      try {
        const a2 = r(e2, t2, o2);
        return te(a2) ? a2 : x(a2);
      } catch (a2) {
        return ne(a2);
      }
    });
  } catch (o2) {
    return ne(o2);
  }
}
function se(e2, t2, r) {
  try {
    if (t2.breakpoint && r !== true) {
      return t2.breakpoint().then(() => se(e2, t2, true));
    }
    switch (t2.type) {
      case "VariableDeclarator":
        return Me(e2, t2);
      case "VariableDeclaration":
        return Fe(e2, t2, 0);
      case "BlockStatement":
        return Oe(e2, t2);
      case "FunctionDeclaration":
        return Ce(e2, t2);
      case "ReturnStatement":
        return Ue(e2, t2);
      case "IfStatement":
        return Re(e2, t2);
      case "ExpressionStatement":
        return Se(e2, t2);
      case "UpdateExpression":
        return Ie(e2, t2);
      case "AssignmentExpression":
        return Te(e2, t2);
      case "ForStatement":
        return de(e2, t2);
      case "ForInStatement":
        return Ne(e2, t2);
      case "BreakStatement":
        return x(_);
      case "EmptyStatement":
        return x(b);
      case "ContinueStatement":
        return x(j);
      case "TemplateElement":
        return Ye(e2, t2);
      case "TemplateLiteral":
        return Ge(e2, t2);
      case "Identifier":
        return Ve(e2, t2);
      case "MemberExpression":
        return De(e2, t2);
      case "Literal":
        return oe(t2.value);
      case "CallExpression":
        return Be(e2, t2);
      case "UnaryExpression":
        return je(e2, t2);
      case "BinaryExpression":
        return Le(e2, t2);
      case "LogicalExpression":
        return _e(e2, t2);
      case "ConditionalExpression":
        return ne(S$1(t2, "RUNTIME", "NOTSUPPORTED"));
      case "ArrayExpression":
        return ke(e2, t2);
      case "ObjectExpression":
        return le(e2, t2);
      case "Property":
        return ue(e2, t2);
      default:
        return ne(S$1(t2, "RUNTIME", "UNREOGNISED"));
    }
  } catch (o2) {
    return ne(o2);
  }
}
function le(r, n) {
  try {
    const o2 = [];
    for (let e2 = 0; e2 < n.properties.length; e2++)
      o2.push(se(r, n.properties[e2]));
    return s(o2).then((t2) => l((e2) => {
      const r2 = {};
      for (let o3 = 0; o3 < t2.length; o3++) {
        const e3 = t2[o3];
        if (v(e3.value))
          throw new Error("Illegal Argument");
        if (F(e3.key) === false)
          throw new Error("Illegal Argument");
        e3.value === b ? r2[e3.key.toString()] = null : r2[e3.key.toString()] = e3.value;
      }
      const n2 = new h$1(r2);
      n2.immutable = false, e2(n2);
    }));
  } catch (o2) {
    return ne(o2);
  }
}
function ue(t2, n) {
  try {
    return se(t2, n.value).then((r) => l((e2) => {
      n.key.type === "Identifier" ? e2({ key: n.key.name, value: r }) : se(t2, n.key).then((t3) => {
        e2({ key: t3, value: r });
      });
    }));
  } catch (o2) {
    return L(o2);
  }
}
function fe(e2, t2, o2) {
  try {
    return se(e2, t2.body).then((a2) => {
      try {
        return o2.lastAction = a2, o2.lastAction === _ || o2.lastAction instanceof N$2 ? (o2.testResult = false, x(o2)) : t2.update !== null ? se(e2, t2.update).then(() => x(o2)) : x(o2);
      } catch (c2) {
        return L(c2);
      }
    });
  } catch (a2) {
    return L(a2);
  }
}
function he(e2, t2, o2) {
  try {
    return t2.test !== null ? se(e2, t2.test).then((a2) => {
      try {
        return e2.abortSignal.aborted === true ? L(new Error("Cancelled")) : (o2.testResult = a2, o2.testResult === false ? x(o2) : o2.testResult !== true ? L(new Error(S$1(t2, "RUNTIME", "CANNOT_USE_NONBOOLEAN_IN_CONDITION"))) : fe(e2, t2, o2));
      } catch (c2) {
        return L(c2);
      }
    }) : fe(e2, t2, o2);
  } catch (a2) {
    return L(a2);
  }
}
function pe(e2, t2, r, n, o2, a2) {
  try {
    he(e2, t2, r).then(() => {
      try {
        r.testResult === true ? ++a2 > re ? (a2 = 0, setTimeout(() => {
          pe(e2, t2, r, n, o2, a2);
        }, 0)) : pe(e2, t2, r, n, o2, a2) : r.lastAction instanceof N$2 ? n(r.lastAction) : n(b);
      } catch (c2) {
        o2(c2);
      }
    }, (e3) => {
      o2(e3);
    });
  } catch (c2) {
    o2(c2);
  }
}
function de(t2, n) {
  try {
    return n.init !== null ? se(t2, n.init).then(() => l((e2, r) => {
      pe(t2, n, { testResult: true, lastAction: b }, (t3) => {
        e2(t3);
      }, (e3) => {
        r(e3);
      }, 0);
    })) : l((e2, r) => {
      pe(t2, n, { testResult: true, lastAction: b }, (t3) => {
        e2(t3);
      }, (e3) => {
        r(e3);
      }, 0);
    });
  } catch (o2) {
    return L(o2);
  }
}
function me(e2, t2, r, n, o2, a2, c2, i2, s2, l2) {
  try {
    if (n <= a2)
      return void i2(b);
    o2.value = c2 === "k" ? r[a2] : a2, se(e2, t2.body).then((u2) => {
      try {
        u2 instanceof N$2 ? i2(u2) : u2 === _ ? i2(b) : ++l2 > re ? (l2 = 0, setTimeout(() => {
          me(e2, t2, r, n, o2, a2 + 1, c2, i2, s2, l2);
        }, 0)) : me(e2, t2, r, n, o2, a2 + 1, c2, i2, s2, l2);
      } catch (f) {
        s2(f);
      }
    }, (e3) => {
      s2(e3);
    });
  } catch (u2) {
    s2(u2);
  }
}
function ge(e2, t2, r, n, o2, a2, c2, i2, s2) {
  try {
    if (r.length() <= o2)
      return void c2(b);
    n.value = a2 === "k" ? r.get(o2) : o2, se(e2, t2.body).then((l2) => {
      l2 instanceof N$2 ? c2(l2) : l2 === _ ? c2(b) : ++s2 > re ? (s2 = 0, setTimeout(() => {
        ge(e2, t2, r, n, o2 + 1, a2, c2, i2, s2);
      }, 0)) : ge(e2, t2, r, n, o2 + 1, a2, c2, i2, s2);
    }, (e3) => {
      i2(e3);
    });
  } catch (l2) {
    i2(l2);
  }
}
function ye(e2, t2, r, n, o2, a2) {
  try {
    if (a2 === void 0 && (a2 = "i"), r.length === 0)
      return void n.resolve(b);
    me(e2, t2, r, r.length, o2, 0, a2, (e3) => {
      n.resolve(e3);
    }, (e3) => {
      n.reject(e3);
    }, 0);
  } catch (c2) {
    n.reject(c2);
  }
}
function Ee(e2, t2, r, n, o2, a2) {
  try {
    if (a2 === void 0 && (a2 = "i"), r.length === 0)
      return void n.resolve(b);
    ge(e2, t2, r, o2, 0, a2, (e3) => {
      n.resolve(e3);
    }, (e3) => {
      n.reject(e3);
    }, 0);
  } catch (c2) {
    n.reject(c2);
  }
}
function we(e2, t2, r, n, o2) {
  try {
    ye(e2, t2, r.keys(), n, o2, "k");
  } catch (a2) {
    n.reject(a2);
  }
}
function ve(e2, t2, r, n, o2, a2, c2, i2) {
  try {
    e2.next().then((s2) => {
      try {
        if (s2 === null)
          a2(b);
        else {
          const l2 = g.createFromGraphicLikeObject(s2.geometry, s2.attributes, n);
          l2._underlyingGraphic = s2, o2.value = l2;
          se(t2, r.body).then((s3) => {
            try {
              s3 === _ ? a2(b) : s3 instanceof N$2 ? a2(s3) : ++i2 > re ? (i2 = 0, setTimeout(() => {
                ve(e2, t2, r, n, o2, a2, c2, i2);
              }, 0)) : ve(e2, t2, r, n, o2, a2, c2, i2);
            } catch (l3) {
              c2(l3);
            }
          }, (e3) => {
            c2(e3);
          });
        }
      } catch (l2) {
        c2(l2);
      }
    }, (e3) => {
      c2(e3);
    });
  } catch (s2) {
    c2(s2);
  }
}
function Ne(t2, r) {
  return l((e2, o2) => {
    se(t2, r.right).then((a2) => {
      try {
        let c2 = null;
        c2 = r.left.type === "VariableDeclaration" ? se(t2, r.left) : x(), c2.then(() => {
          try {
            let n = "";
            if (r.left.type === "VariableDeclaration") {
              const e3 = r.left.declarations[0].id;
              e3.type === "Identifier" && (n = e3.name);
            } else
              r.left.type === "Identifier" && (n = r.left.name);
            if (!n)
              throw new Error(S$1(r, "RUNTIME", "INVALIDVARIABLE"));
            n = n.toLowerCase();
            let c3 = null;
            if (t2.localScope !== null && t2.localScope[n] !== void 0 && (c3 = t2.localScope[n]), c3 === null && t2.globalScope[n] !== void 0 && (c3 = t2.globalScope[n]), c3 === null)
              return void o2(new Error(S$1(r, "RUNTIME", "VARIABLENOTDECLARED")));
            Z(a2) || F(a2) ? ye(t2, r, a2, { reject: o2, resolve: e2 }, c3) : E(a2) ? Ee(t2, r, a2, { reject: o2, resolve: e2 }, c3) : a2 instanceof h$1 || a2 instanceof g ? we(t2, r, a2, { reject: o2, resolve: e2 }, c3) : k$1(a2) ? ve(a2.iterator(t2.abortSignal), t2, r, a2, c3, (t3) => {
              e2(t3);
            }, (e3) => {
              o2(e3);
            }, 0) : ye(t2, r, [], { reject: o2, resolve: e2 }, c3);
          } catch (n) {
            o2(n);
          }
        }, o2);
      } catch (c2) {
        o2(c2);
      }
    }, o2);
  });
}
function Ie(t2, o2) {
  try {
    const r = o2.argument;
    if (r.type === "MemberExpression") {
      const a2 = { t: null };
      return se(t2, r.object).then((e2) => {
        let o3 = null;
        return a2.t = e2, r.computed === true ? o3 = se(t2, r.property) : r.property.type === "Identifier" && (o3 = x(r.property.name)), o3;
      }).then((t3) => l((e2) => {
        const r2 = a2.t;
        let n;
        if (Z(r2)) {
          if (!w(t3))
            throw new Error("Invalid Parameter");
          if (t3 < 0 && (t3 = r2.length + t3), t3 < 0 || t3 >= r2.length)
            throw new Error("Assignment outside of array bounds");
          n = X(r2[t3]), r2[t3] = o2.operator === "++" ? n + 1 : n - 1;
        } else if (r2 instanceof h$1) {
          if (F(t3) === false)
            throw new Error("Dictionary accessor must be a string");
          if (r2.hasField(t3) !== true)
            throw new Error("Invalid Parameter");
          n = X(r2.field(t3)), r2.setField(t3, o2.operator === "++" ? n + 1 : n - 1);
        } else {
          if (!(r2 instanceof g))
            throw E(r2) ? new Error("Array is Immutable") : new Error("Invalid Parameter");
          if (F(t3) === false)
            throw new Error("Feature accessor must be a string");
          if (r2.hasField(t3) !== true)
            throw new Error("Invalid Parameter");
          n = X(r2.field(t3)), r2.setField(t3, o2.operator === "++" ? n + 1 : n - 1);
        }
        o2.prefix === false ? e2(n) : e2(o2.operator === "++" ? n + 1 : n - 1);
      }));
    }
    return l((e2, r2) => {
      const n = o2.argument.type === "Identifier" ? o2.argument.name.toLowerCase() : "";
      if (!n)
        throw new Error("Invalid identifier");
      let a2;
      return t2.localScope !== null && t2.localScope[n] !== void 0 ? (a2 = X(t2.localScope[n].value), t2.localScope[n] = { value: o2.operator === "++" ? a2 + 1 : a2 - 1, valueset: true, node: o2 }, void (o2.prefix === false ? e2(a2) : e2(o2.operator === "++" ? a2 + 1 : a2 - 1))) : t2.globalScope[n] !== void 0 ? (a2 = X(t2.globalScope[n].value), t2.globalScope[n] = { value: o2.operator === "++" ? a2 + 1 : a2 - 1, valueset: true, node: o2 }, void (o2.prefix === false ? e2(a2) : e2(o2.operator === "++" ? a2 + 1 : a2 - 1))) : void r2(new Error("Variable not recognised"));
    });
  } catch (a2) {
    return L(a2);
  }
}
function be(e2, t2, r, n) {
  switch (t2) {
    case "=":
      return e2 === b ? null : e2;
    case "/=":
      return X(r) / X(e2);
    case "*=":
      return X(r) * X(e2);
    case "-=":
      return X(r) - X(e2);
    case "+=":
      return F(r) || F(e2) ? K(r) + K(e2) : X(r) + X(e2);
    case "%=":
      return X(r) % X(e2);
    default:
      throw new Error(S$1(n, "RUNTIME", "OPERATORNOTRECOGNISED"));
  }
}
function Te(t2, r) {
  return l((e2, o2) => {
    const a2 = r.left;
    if (a2.type === "MemberExpression")
      se(t2, r.right).then((c2) => {
        try {
          se(t2, a2.object).then((i2) => {
            try {
              let s2 = null;
              if (a2.computed === true)
                s2 = se(t2, a2.property);
              else {
                if (a2.property.type !== "Identifier")
                  throw new Error("Expected computed or identifier for assignemnt target");
                s2 = x(a2.property.name);
              }
              s2.then((t3) => {
                try {
                  if (Z(i2)) {
                    if (!w(t3))
                      throw new Error("Invalid Parameter");
                    if (t3 < 0 && (t3 = i2.length + t3), t3 < 0 || t3 > i2.length)
                      throw new Error("Assignment outside of array bounds");
                    if (t3 === i2.length) {
                      if (r.operator !== "=")
                        throw new Error("Invalid Parameter");
                      i2[t3] = be(c2, r.operator, i2[t3], r);
                    } else
                      i2[t3] = be(c2, r.operator, i2[t3], r);
                  } else if (i2 instanceof h$1) {
                    if (F(t3) === false)
                      throw new Error("Dictionary accessor must be a string");
                    if (i2.hasField(t3) === true)
                      i2.setField(t3, be(c2, r.operator, i2.field(t3), r));
                    else {
                      if (r.operator !== "=")
                        throw new Error("Invalid Parameter");
                      i2.setField(t3, be(c2, r.operator, null, r));
                    }
                  } else {
                    if (!(i2 instanceof g))
                      throw E(i2) ? new Error("Array is Immutable") : new Error("Invalid Parameter");
                    if (F(t3) === false)
                      throw new Error("Feature accessor must be a string");
                    if (i2.hasField(t3) === true)
                      i2.setField(t3, be(c2, r.operator, i2.field(t3), r));
                    else {
                      if (r.operator !== "=")
                        throw new Error("Invalid Parameter");
                      i2.setField(t3, be(c2, r.operator, null, r));
                    }
                  }
                  e2(b);
                } catch (n) {
                  o2(n);
                }
              }, o2);
            } catch (s2) {
              o2(s2);
            }
          }, o2);
        } catch (i2) {
          o2(i2);
        }
      }, o2);
    else {
      const n = a2.name.toLowerCase();
      if (t2.localScope !== null && t2.localScope[n] !== void 0)
        return void se(t2, r.right).then((a3) => {
          try {
            t2.localScope[n] = { value: be(a3, r.operator, t2.localScope[n].value, r), valueset: true, node: r.right }, e2(b);
          } catch (c2) {
            o2(c2);
          }
        }, o2);
      t2.globalScope[n] !== void 0 ? se(t2, r.right).then((a3) => {
        try {
          t2.globalScope[n] = { value: be(a3, r.operator, t2.globalScope[n].value, r), valueset: true, node: r.right }, e2(b);
        } catch (c2) {
          o2(c2);
        }
      }, o2) : o2(new Error("Cannot assign undeclared variable"));
    }
  });
}
function Se(t2, n) {
  try {
    return n.expression.type === "AssignmentExpression" ? se(t2, n.expression) : (n.expression.type, se(t2, n.expression).then((t3) => l((e2) => {
      e2(t3 === b ? b : new T(t3));
    })));
  } catch (o2) {
    return L(o2);
  }
}
function Re(t2, r) {
  return l((e2, n) => {
    r.test.type !== "AssignmentExpression" && r.test.type !== "UpdateExpression" ? se(t2, r.test).then((o2) => {
      try {
        o2 === true ? se(t2, r.consequent).then(e2, n) : o2 === false ? r.alternate !== null ? se(t2, r.alternate).then(e2, n) : e2(b) : n(new Error(S$1(r.test, "RUNTIME", "CANNOT_USE_NONBOOLEAN_IN_CONDITION")));
      } catch (a2) {
        n(a2);
      }
    }, n) : n(new Error(S$1(r.test, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION")));
  });
}
function Oe(e2, t2) {
  try {
    return Ae(e2, t2, 0);
  } catch (r) {
    return ne(r);
  }
}
function Ae(t2, r, o2) {
  try {
    return o2 >= r.body.length ? x(b) : l((e2, n) => {
      se(t2, r.body[o2]).then((a2) => {
        try {
          a2 instanceof N$2 || a2 === _ || a2 === j || o2 === r.body.length - 1 ? e2(a2) : Ae(t2, r, o2 + 1).then(e2, n);
        } catch (c2) {
          n(c2);
        }
      }, n);
    });
  } catch (a2) {
    return ne(a2);
  }
}
function Ue(t2, r) {
  return l((e2, n) => {
    r.argument === null ? e2(new N$2(b)) : se(t2, r.argument).then((t3) => {
      try {
        e2(new N$2(t3));
      } catch (r2) {
        n(r2);
      }
    }, n);
  });
}
function Ce(e2, t$1) {
  try {
    const r = t$1.id.name.toLowerCase();
    return e2.globalScope[r] = { valueset: true, node: null, value: new t(t$1, e2) }, x(b);
  } catch (r) {
    return ne(r);
  }
}
function Fe(t2, r, n) {
  return l((e2, o2) => {
    n >= r.declarations.length ? e2(b) : se(t2, r.declarations[n]).then(() => {
      n === r.declarations.length - 1 ? e2(b) : Fe(t2, r, n + 1).then(() => {
        e2(b);
      }, o2);
    }, o2);
  });
}
function Me(t2, r) {
  try {
    let o2 = null;
    return o2 = r.init === null ? x(null) : se(t2, r.init), t2.localScope !== null ? o2.then((n) => l((e2) => {
      if (n === b && (n = null), r.id.type !== "Identifier")
        throw new Error("Can only assign a regular variable");
      const o3 = r.id.name.toLowerCase();
      t2.localScope[o3] = { value: n, valueset: true, node: r.init }, e2(b);
    })) : o2.then((n) => l((e2) => {
      if (r.id.type !== "Identifier")
        throw new Error("Can only assign a regular variable");
      const o3 = r.id.name.toLowerCase();
      n === b && (n = null), t2.globalScope[o3] = { value: n, valueset: true, node: r.init }, e2(b);
    }));
  } catch (o2) {
    return ne(o2);
  }
}
let xe = 0;
function Pe(e2, t2, r, n) {
  let o2;
  switch (t2 = t2.toLowerCase()) {
    case "hasz": {
      const t3 = e2.hasZ;
      return t3 !== void 0 && t3;
    }
    case "hasm": {
      const t3 = e2.hasM;
      return t3 !== void 0 && t3;
    }
    case "spatialreference": {
      let t3 = e2.spatialReference._arcadeCacheId;
      if (t3 === void 0) {
        let r3 = true;
        Object.freeze && Object.isFrozen(e2.spatialReference) && (r3 = false), r3 && (xe++, e2.spatialReference._arcadeCacheId = xe, t3 = xe);
      }
      const r2 = new h$1({ wkt: e2.spatialReference.wkt, wkid: e2.spatialReference.wkid });
      return t3 !== void 0 && (r2._arcadeCacheId = "SPREF" + t3.toString()), r2;
    }
  }
  switch (e2.type) {
    case "extent":
      switch (t2) {
        case "xmin":
        case "xmax":
        case "ymin":
        case "ymax":
        case "zmin":
        case "zmax":
        case "mmin":
        case "mmax": {
          const r2 = e2[t2];
          return r2 !== void 0 ? r2 : null;
        }
        case "type":
          return "Extent";
      }
      break;
    case "polygon":
      switch (t2) {
        case "rings":
          o2 = e2.cache._arcadeCacheId, o2 === void 0 && (xe++, o2 = xe, e2.cache._arcadeCacheId = o2);
          return new h$2(e2.rings, e2.spatialReference, e2.hasZ === true, e2.hasM === true, o2);
        case "type":
          return "Polygon";
      }
      break;
    case "point":
      switch (t2) {
        case "x":
        case "y":
        case "z":
        case "m":
          return e2[t2] !== void 0 ? e2[t2] : null;
        case "type":
          return "Point";
      }
      break;
    case "polyline":
      switch (t2) {
        case "paths":
          o2 = e2.cache._arcadeCacheId, o2 === void 0 && (xe++, o2 = xe, e2.cache._arcadeCacheId = o2);
          return new h$2(e2.paths, e2.spatialReference, e2.hasZ === true, e2.hasM === true, o2);
        case "type":
          return "Polyline";
      }
      break;
    case "multipoint":
      switch (t2) {
        case "points":
          o2 = e2.cache._arcadeCacheId, o2 === void 0 && (xe++, o2 = xe, e2.cache._arcadeCacheId = o2);
          return new i(e2.points, e2.spatialReference, e2.hasZ === true, e2.hasM === true, o2, 1);
        case "type":
          return "Multipoint";
      }
  }
  throw new Error(S$1(n, "RUNTIME", "PROPERTYNOTFOUND"));
}
function De(t2, o2) {
  try {
    return se(t2, o2.object).then((c$1) => {
      try {
        return c$1 === null ? L(new Error(S$1(o2, "RUNTIME", "NOTFOUND"))) : o2.computed === false ? o2.property.type === "Identifier" ? c$1 instanceof h$1 || c$1 instanceof g ? x(c$1.field(o2.property.name)) : c$1 instanceof c ? x(Pe(c$1, o2.property.name, t2, o2)) : L(new Error(S$1(o2, "RUNTIME", "INVALIDTYPE"))) : L(new Error(S$1(o2, "RUNTIME", "INVALIDTYPE"))) : se(t2, o2.property).then((r) => l((e2, n) => {
          if (c$1 instanceof h$1 || c$1 instanceof g)
            F(r) ? e2(c$1.field(r)) : n(new Error(S$1(o2, "RUNTIME", "INVALIDTYPE")));
          else if (c$1 instanceof c)
            F(r) ? e2(Pe(c$1, r, t2, o2)) : n(new Error(S$1(o2, "RUNTIME", "INVALIDTYPE")));
          else if (Z(c$1))
            if (w(r) && isFinite(r) && Math.floor(r) === r) {
              if (r < 0 && (r = c$1.length + r), r >= c$1.length || r < 0)
                throw new Error(S$1(o2, "RUNTIME", "OUTOFBOUNDS"));
              e2(c$1[r]);
            } else
              n(new Error(S$1(o2, "RUNTIME", "INVALIDTYPE")));
          else if (E(c$1))
            if (w(r) && isFinite(r) && Math.floor(r) === r) {
              if (r < 0 && (r = c$1.length() + r), r >= c$1.length() || r < 0)
                throw new Error(S$1(o2, "RUNTIME", "OUTOFBOUNDS"));
              e2(c$1.get(r));
            } else
              n(new Error(S$1(o2, "RUNTIME", "INVALIDTYPE")));
          else if (F(c$1))
            if (w(r) && isFinite(r) && Math.floor(r) === r) {
              if (r < 0 && (r = c$1.length + r), r >= c$1.length || r < 0)
                throw new Error(S$1(o2, "RUNTIME", "OUTOFBOUNDS"));
              e2(c$1[r]);
            } else
              n(new Error(S$1(o2, "RUNTIME", "INVALIDTYPE")));
          else
            n(new Error(S$1(o2, "RUNTIME", "INVALIDTYPE")));
        }));
      } catch (i2) {
        return ne(i2);
      }
    });
  } catch (c2) {
    return ne(c2);
  }
}
function je(t2, r) {
  try {
    return se(t2, r.argument).then((t3) => l((e2, n) => {
      I(t3) && r.operator === "!" ? e2(!t3) : r.operator === "-" ? e2(-1 * X(t3)) : r.operator === "+" ? e2(1 * X(t3)) : r.operator === "~" ? e2(~X(t3)) : n(new Error(S$1(r, "RUNTIME", "NOTSUPPORTEDUNARYOPERATOR")));
    }));
  } catch (n) {
    return ne(n);
  }
}
function ke(r, n) {
  try {
    const o2 = [];
    for (let e2 = 0; e2 < n.elements.length; e2++)
      o2.push(se(r, n.elements[e2]));
    return s(o2).then((t2) => l((e2, r2) => {
      for (let o3 = 0; o3 < t2.length; o3++) {
        if (v(t2[o3]))
          return void r2(new Error(S$1(n, "RUNTIME", "FUNCTIONCONTEXTILLEGAL")));
        t2[o3] === b && (t2[o3] = null);
      }
      e2(t2);
    }));
  } catch (o2) {
    return ne(o2);
  }
}
function Le(r, n) {
  try {
    return s([se(r, n.left), se(r, n.right)]).then((t2) => l((e2, r2) => {
      const o2 = t2[0], a2 = t2[1];
      switch (n.operator) {
        case "|":
        case "<<":
        case ">>":
        case ">>>":
        case "^":
        case "&":
          e2(ye$1(X(o2), X(a2), n.operator));
        case "==":
          e2(B(o2, a2));
          break;
        case "!=":
          e2(!B(o2, a2));
          break;
        case "<":
        case ">":
        case "<=":
        case ">=":
          e2(q(o2, a2, n.operator));
          break;
        case "+":
          F(o2) || F(a2) ? e2(K(o2) + K(a2)) : e2(X(o2) + X(a2));
          break;
        case "-":
          e2(X(o2) - X(a2));
          break;
        case "*":
          e2(X(o2) * X(a2));
          break;
        case "/":
          e2(X(o2) / X(a2));
          break;
        case "%":
          e2(X(o2) % X(a2));
          break;
        default:
          r2(new Error(S$1(n, "RUNTIME", "OPERATORNOTRECOGNISED")));
      }
    }));
  } catch (o2) {
    return ne(o2);
  }
}
function _e(t2, r) {
  return l((e2, n) => {
    r.left.type !== "AssignmentExpression" && r.left.type !== "UpdateExpression" ? r.right.type !== "AssignmentExpression" && r.right.type !== "UpdateExpression" ? se(t2, r.left).then((o2) => {
      try {
        if (!I(o2))
          throw new Error(S$1(r, "RUNTIME", "ONLYBOOLEAN"));
        switch (r.operator) {
          case "||":
            o2 === true ? e2(o2) : se(t2, r.right).then((t3) => {
              try {
                if (!I(t3))
                  throw new Error(S$1(r, "RUNTIME", "ONLYORORAND"));
                e2(t3);
              } catch (o3) {
                n(o3);
              }
            }, n);
            break;
          case "&&":
            o2 === false ? e2(o2) : se(t2, r.right).then((t3) => {
              try {
                if (!I(t3))
                  throw new Error(S$1(r, "RUNTIME", "ONLYORORAND"));
                e2(t3);
              } catch (o3) {
                n(o3);
              }
            }, n);
            break;
          default:
            throw new Error(S$1(r, "RUNTIME", "ONLYORORAND"));
        }
      } catch (a2) {
        n(a2);
      }
    }, n) : n(new Error(S$1(r.right, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION"))) : n(new Error(S$1(r.left, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION")));
  });
}
function Ve(t2, r) {
  return l((e2, n) => {
    const o2 = r.name.toLowerCase();
    if (t2.localScope === null || t2.localScope[o2] === void 0)
      if (t2.globalScope[o2] === void 0)
        n(new Error(S$1(r, "RUNTIME", "VARIABLENOTFOUND")));
      else {
        const r2 = t2.globalScope[o2];
        r2.valueset === true ? e2(r2.value) : r2.d !== null ? r2.d.then(e2, n) : (r2.d = se(t2, r2.node), r2.d.then((t3) => {
          try {
            r2.value = t3, r2.valueset = true, e2(t3);
          } catch (o3) {
            n(o3);
          }
        }, n));
      }
    else {
      const r2 = t2.localScope[o2];
      r2.valueset === true ? e2(r2.value) : r2.d !== null ? r2.d.then(e2, n) : (r2.d = se(t2, r2.node), r2.d.then((t3) => {
        try {
          r2.value = t3, r2.valueset = true, e2(t3);
        } catch (o3) {
          n(o3);
        }
      }, n));
    }
  });
}
function Be(e2, t$1) {
  try {
    if (t$1.callee.type !== "Identifier")
      return ne(S$1(t$1, "RUNTIME", "ONLYNODESSUPPORTED"));
    if (e2.localScope !== null && e2.localScope[t$1.callee.name.toLowerCase()] !== void 0) {
      const r = e2.localScope[t$1.callee.name.toLowerCase()];
      return r.value instanceof S ? r.value.fn(e2, t$1) : r.value instanceof t ? $e(e2, t$1, r.value.definition) : ne(S$1(t$1, "RUNTIME", "NOTAFUNCTION"));
    }
    if (e2.globalScope[t$1.callee.name.toLowerCase()] !== void 0) {
      const r = e2.globalScope[t$1.callee.name.toLowerCase()];
      return r.value instanceof S ? r.value.fn(e2, t$1) : r.value instanceof t ? $e(e2, t$1, r.value.definition) : ne(S$1(t$1, "RUNTIME", "NOTAFUNCTION"));
    }
    return ne(S$1(t$1, "RUNTIME", "NOTFOUND"));
  } catch (r) {
    return ne(r);
  }
}
function Ye(e2, t2) {
  return x(t2.value ? t2.value.cooked : "");
}
function Ge(t2, r) {
  return l((e2) => {
    const n = [];
    O(r.expressions, (e3, r2, o2, a2) => se(t2, r2).then((e4) => {
      n[o2] = K(e4);
    })).then(() => {
      let t3 = "", o2 = 0;
      for (const e3 of r.quasis)
        if (t3 += e3.value ? e3.value.cooked : "", e3.tail === false) {
          t3 += n[o2] ? n[o2] : "", o2++;
        }
      e2(t3);
    });
  });
}
const ze = {};
function qe(e$1) {
  return e$1 === null ? "" : Z(e$1) || E(e$1) ? "Array" : P(e$1) ? "Date" : F(e$1) ? "String" : I(e$1) ? "Boolean" : w(e$1) ? "Number" : e$1 instanceof e ? "Attachment" : e$1 instanceof s$1 ? "Portal" : e$1 instanceof h$1 ? "Dictionary" : e$1 instanceof g ? "Feature" : e$1 instanceof j$1 ? "Point" : e$1 instanceof x$1 ? "Polygon" : e$1 instanceof m$1 ? "Polyline" : e$1 instanceof m$2 ? "Multipoint" : e$1 instanceof M ? "Extent" : v(e$1) ? "Function" : k$1(e$1) ? "FeatureSet" : D$1(e$1) ? "FeatureSetCollection" : e$1 === b ? "" : typeof e$1 == "number" && isNaN(e$1) ? "Number" : "Unrecognised Type";
}
function He(t2, r, n, o2) {
  return l((e2, a2) => {
    se(t2, r.arguments[n]).then((c2) => {
      try {
        if (B(c2, o2))
          return void se(t2, r.arguments[n + 1]).then(e2, a2);
        {
          const c3 = r.arguments.length - n;
          return c3 === 1 ? void se(t2, r.arguments[n]).then(e2, a2) : (c3 === 2 && e2(null), c3 === 3 ? void se(t2, r.arguments[n + 2]).then(e2, a2) : void He(t2, r, n + 2, o2).then(e2, a2));
        }
      } catch (i2) {
        a2(i2);
      }
    }, a2);
  });
}
function Ze(t2, r, n, o2) {
  return l((e2, a2) => {
    if (o2 === true)
      se(t2, r.arguments[n + 1]).then(e2, a2);
    else {
      r.arguments.length - n === 3 ? se(t2, r.arguments[n + 2]).then(e2, a2) : se(t2, r.arguments[n + 2]).then((o3) => {
        try {
          if (I(o3) === false)
            return void a2(new Error("WHEN needs boolean test conditions"));
          Ze(t2, r, n + 2, o3).then(e2, a2);
        } catch (c2) {
          a2(c2);
        }
      });
    }
  });
}
function We(r, o2) {
  try {
    const a2 = r.length, c2 = Math.floor(a2 / 2);
    return a2 === 0 ? x([]) : a2 === 1 ? x([r[0]]) : l((e2, n) => {
      const i2 = [We(r.slice(0, c2), o2), We(r.slice(c2, a2), o2)];
      s(i2).then((t2) => {
        try {
          Ke(t2[0], t2[1], o2, []).then(e2, n);
        } catch (r2) {
          n(r2);
        }
      }, n);
    });
  } catch (a2) {
    return ne(a2);
  }
}
function Ke(t2, r, n, o2) {
  return l((e2, a2) => {
    const c2 = o2;
    t2.length > 0 || r.length > 0 ? t2.length > 0 && r.length > 0 ? n(t2[0], r[0]).then((i2) => {
      try {
        isNaN(i2) && (i2 = 1), i2 <= 0 ? (c2.push(t2[0]), t2 = t2.slice(1)) : (c2.push(r[0]), r = r.slice(1)), Ke(t2, r, n, o2).then(e2, a2);
      } catch (s2) {
        a2(s2);
      }
    }, a2) : t2.length > 0 ? (c2.push(t2[0]), Ke(t2 = t2.slice(1), r, n, o2).then(e2, a2)) : r.length > 0 && (c2.push(r[0]), r = r.slice(1), Ke(t2, r, n, o2).then(e2, a2)) : e2(o2);
  });
}
function Xe(e2, t2) {
  const r = e2.length, n = Math.floor(r / 2);
  return t2 || (t2 = function(e3, t3) {
    return e3 < t3 ? -1 : e3 === t3 ? 0 : 1;
  }), r === 0 ? [] : r === 1 ? [e2[0]] : Je(Xe(e2.slice(0, n), t2), Xe(e2.slice(n, r), t2), t2);
}
function Je(e2, t2, r) {
  const n = [];
  for (; e2.length > 0 || t2.length > 0; )
    if (e2.length > 0 && t2.length > 0) {
      let o2 = r(e2[0], t2[0]);
      isNaN(o2) && (o2 = 1), o2 <= 0 ? (n.push(e2[0]), e2 = e2.slice(1)) : (n.push(t2[0]), t2 = t2.slice(1));
    } else
      e2.length > 0 ? (n.push(e2[0]), e2 = e2.slice(1)) : t2.length > 0 && (n.push(t2[0]), t2 = t2.slice(1));
  return n;
}
function Qe(t2, n, o2) {
  try {
    const r = t2.body;
    if (o2.length !== t2.params.length)
      return ne(new Error("Invalid Parameter calls to function."));
    for (let e2 = 0; e2 < o2.length; e2++) {
      const r2 = t2.params[e2];
      r2.type === "Identifier" && (n.localScope[r2.name.toLowerCase()] = { d: null, value: o2[e2], valueset: true, node: null });
    }
    return se(n, r).then((t3) => l((e2, r2) => {
      t3 instanceof N$2 ? e2(t3.value) : t3 !== _ ? t3 !== j ? e2(t3 instanceof T ? t3.value : t3) : r2(new Error("Cannot Continue from a Function")) : r2(new Error("Cannot Break from a Function"));
    }));
  } catch (a2) {
    return L(a2);
  }
}
function $e(e2, t2, r) {
  return ie(e2, t2, function(t3, n, o2) {
    const a2 = { spatialReference: e2.spatialReference, services: e2.services, console: e2.console, lrucache: e2.lrucache, interceptor: e2.interceptor, localScope: {}, abortSignal: e2.abortSignal, globalScope: e2.globalScope, depthCounter: e2.depthCounter + 1 };
    if (a2.depthCounter > 64)
      throw new Error("Exceeded maximum function depth");
    return Qe(r, a2, o2);
  });
}
function et(e2) {
  return function() {
    const t2 = { abortSignal: e2.context.abortSignal, spatialReference: e2.context.spatialReference, console: e2.context.console, lrucache: e2.context.lrucache, interceptor: e2.context.interceptor, services: e2.context.services, localScope: {}, globalScope: e2.context.globalScope, depthCounter: e2.context.depthCounter + 1 };
    if (t2.depthCounter > 64)
      throw new Error("Exceeded maximum function depth");
    return Qe(e2.definition, t2, arguments);
  };
}
h(ze, ce), d(ze, ce), N(ze, ce), N$1(ze, ce), D(ze, ce), o(ze, ce), on({ functions: ze, compiled: false, signatures: null, failDefferred: null, evaluateIdentifier: null, arcadeCustomFunctionHandler: null, mode: "async", standardFunction: ce, standardFunctionAsync: ie }), ze.typeof = function(e2, t2) {
  return ce(e2, t2, function(e3, t3, r) {
    J(r, 1, 1);
    const n = qe(r[0]);
    if (n === "Unrecognised Type")
      throw new Error("Unrecognised Type");
    return n;
  });
}, ze.iif = function(r, n) {
  return l((e2, o2) => {
    J(n.arguments === null ? [] : n.arguments, 3, 3), se(r, n.arguments[0]).then((a2) => {
      try {
        if (I(a2) === false)
          return void o2(new Error("IF Function must have a boolean test condition"));
        s([se(r, n.arguments[1]), se(r, n.arguments[2])]).then((t2) => {
          e2(a2 ? t2[0] : t2[1]);
        }, o2);
      } catch (c2) {
        o2(c2);
      }
    }, o2);
  });
}, ze.decode = function(t2, r) {
  return l((e2, n) => {
    r.arguments.length < 2 ? n(new Error("Missing Parameters")) : r.arguments.length !== 2 ? (r.arguments.length - 1) % 2 != 0 ? se(t2, r.arguments[0]).then((o2) => {
      try {
        He(t2, r, 1, o2).then(e2, n);
      } catch (a2) {
        n(a2);
      }
    }, n) : n(new Error("Must have a default value result.")) : se(t2, r.arguments[1]).then(e2, n);
  });
}, ze.when = function(t2, r) {
  try {
    return r.arguments.length < 3 ? ne("Missing Parameters") : r.arguments.length % 2 == 0 ? ne("Must have a default value result.") : se(t2, r.arguments[0]).then((n) => l((e2, o2) => {
      if (I(n) === false)
        return void o2(new Error("WHEN needs boolean test conditions"));
      Ze(t2, r, 0, n).then(e2, o2);
    }));
  } catch (n) {
    return ne(n);
  }
}, ze.sort = function(e2, t2) {
  return ie(e2, t2, function(e3, t3, r) {
    J(r, 1, 2);
    let o2 = r[0];
    if (E(o2) && (o2 = o2.toArray()), Z(o2) === false)
      return ne(Error("Illegal Argument"));
    if (r.length > 1) {
      if (v(r[1]) === false)
        return ne(Error("Illegal Argument"));
      return We(o2, et(r[1]));
    }
    {
      let e4 = o2;
      if (e4.length === 0)
        return x([]);
      const t4 = {};
      for (let n = 0; n < e4.length; n++) {
        const r3 = qe(e4[n]);
        r3 !== "" && (t4[r3] = true);
      }
      if (t4.Array === true || t4.Dictionary === true || t4.Feature === true || t4.Point === true || t4.Polygon === true || t4.Polyline === true || t4.Multipoint === true || t4.Extent === true || t4.Function === true)
        return x(e4.slice(0));
      let r2 = 0, a2 = "";
      for (const n in t4)
        r2++, a2 = n;
      return r2 > 1 || a2 === "String" ? e4 = Xe(e4, function(e5, t5) {
        if (e5 == null || e5 === b)
          return t5 == null || t5 === b ? 0 : 1;
        if (t5 == null || t5 === b)
          return -1;
        const r3 = K(e5), n = K(t5);
        return r3 < n ? -1 : r3 === n ? 0 : 1;
      }) : a2 === "Number" ? e4 = Xe(e4, function(e5, t5) {
        return e5 - t5;
      }) : a2 === "Boolean" ? e4 = Xe(e4, function(e5, t5) {
        return e5 === t5 ? 0 : t5 ? -1 : 1;
      }) : a2 === "Date" && (e4 = Xe(e4, function(e5, t5) {
        return t5 - e5;
      })), x(e4);
    }
  });
};
const tt = { failDefferred: ne, resolveDeffered: oe, fixSpatialReference: te$1, parseArguments: ae, standardFunction: ce, standardFunctionAsync: ie, evaluateIdentifier: Ve, arcadeCustomFunction: et };
for (const pt in ze)
  ze[pt] = { value: new S(ze[pt]), valueset: true, node: null };
const rt = function() {
};
function nt(e2, t2) {
  const r = new rt();
  e2 == null && (e2 = {}), t2 == null && (t2 = {});
  const n = new h$1({ newline: "\n", tab: "	", singlequote: "'", doublequote: '"', forwardslash: "/", backwardslash: "\\" });
  n.immutable = false, r.textformatting = { value: n, valueset: true, node: null };
  for (const o2 in t2)
    r[o2] = { value: new S(t2[o2]), native: true, valueset: true, node: null };
  for (const o2 in e2)
    e2[o2] && e2[o2].declaredClass === "esri.Graphic" ? r[o2] = { value: g.createFromGraphic(e2[o2]), valueset: true, node: null } : r[o2] = { value: e2[o2], valueset: true, node: null };
  return r;
}
function ot(e2) {
  console.log(e2);
}
rt.prototype = ze, rt.prototype.infinity = { value: Number.POSITIVE_INFINITY, valueset: true, node: null }, rt.prototype.pi = { value: Math.PI, valueset: true, node: null };
const at = tt;
function ct(e2) {
  const t2 = { mode: "async", compiled: false, functions: {}, signatures: [], standardFunction: ce, standardFunctionAsync: ie, failDefferred: ne, evaluateIdentifier: Ve, arcadeCustomFunctionHandler: et };
  for (let r = 0; r < e2.length; r++)
    e2[r].registerFunctions(t2);
  for (const r in t2.functions)
    ze[r] = { value: new S(t2.functions[r]), valueset: true, node: null }, rt.prototype[r] = ze[r];
  for (let r = 0; r < t2.signatures.length; r++)
    a(t2.signatures[r], "async");
}
function it(t$1, r) {
  let n = r.spatialReference;
  n == null && (n = new k({ wkid: 102100 }));
  const a2 = nt(r.vars, r.customfunctions);
  return se({ spatialReference: n, services: r.services, abortSignal: r.abortSignal === void 0 || r.abortSignal === null ? { aborted: false } : r.abortSignal, globalScope: a2, console: r.console ? r.console : ot, lrucache: r.lrucache, interceptor: r.interceptor, localScope: null, depthCounter: 1 }, t$1.body[0].body).then((t$12) => l((e2, r2) => {
    t$12 instanceof N$2 && (t$12 = t$12.value), t$12 instanceof T && (t$12 = t$12.value), t$12 === b && (t$12 = null), t$12 !== _ ? t$12 !== j ? t$12 instanceof S || t$12 instanceof t ? r2(new Error("Cannot return FUNCTION")) : e2(t$12) : r2(new Error("Cannot return CONTINUE")) : r2(new Error("Cannot return BREAK"));
  }));
}
function st(e2, t2) {
  return u(e2);
}
function lt(e2, t2) {
  return N$3(e2, t2, "full");
}
function ut(e2, t2) {
  return m(e2, t2);
}
function ft(e2, t2) {
  return p(e2, t2);
}
function ht(e2) {
  return A(e2);
}
export { it as executeScript, ct as extend, st as extractFieldLiterals, ht as findFunctionCalls, at as functionHelper, ft as referencesFunction, ut as referencesMember, lt as validateScript };
