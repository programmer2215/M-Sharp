// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "program", "symbols": ["var_assignment"], "postprocess": id},
    {"name": "program", "symbols": ["number"], "postprocess": id},
    {"name": "program", "symbols": ["print_statement"], "postprocess": id},
    {"name": "var_assignment$string$1", "symbols": [{"literal":"-"}, {"literal":">"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "var_assignment$subexpression$1", "symbols": ["number"]},
    {"name": "var_assignment$subexpression$1", "symbols": ["identifier"]},
    {"name": "var_assignment", "symbols": ["identifier", "_", "var_assignment$string$1", "_", "var_assignment$subexpression$1"], "postprocess":  
        data => {
            return {
                type : "var_assignment",
                varname : data[0],
                value : data[4]
            }
        }
        },
    {"name": "print_statement$string$1", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "print_statement", "symbols": ["print_statement$string$1", "__", "expression"], "postprocess": 
        data => {
            return {
                type : "print_statement",
                expression : data[2]
            }
        }
        },
    {"name": "expression", "symbols": ["unary_expression"], "postprocess": id},
    {"name": "expression", "symbols": ["binary_expression"], "postprocess": id},
    {"name": "unary_expression", "symbols": ["number"], "postprocess": id},
    {"name": "unary_expression", "symbols": ["identifier"], "postprocess": id},
    {"name": "binary_expression", "symbols": ["unary_expression", "_", "operator", "_", "unary_expression"], "postprocess":  
        data => {
            return {
                type : "binary_expression",
                left : data[0],
                operator : data[2],
                right : data[4]
            }
        }
             },
    {"name": "operator", "symbols": [{"literal":"+"}], "postprocess": id},
    {"name": "operator", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "operator", "symbols": [{"literal":"*"}], "postprocess": id},
    {"name": "operator", "symbols": [{"literal":"/"}], "postprocess": id},
    {"name": "identifier$ebnf$1", "symbols": [/[a-zA-z]/]},
    {"name": "identifier$ebnf$1", "symbols": ["identifier$ebnf$1", /[a-zA-z]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "identifier", "symbols": ["identifier$ebnf$1"], "postprocess": id},
    {"name": "number", "symbols": ["digits", {"literal":"."}, "digits"], "postprocess": 
        data => Number(data[0] + "." + data[2])
            },
    {"name": "number", "symbols": ["digits"], "postprocess":  
        data => Number(data)
             },
    {"name": "digits$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "digits$ebnf$1", "symbols": ["digits$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "digits", "symbols": ["digits$ebnf$1"], "postprocess":  
        data => data[0].join("")
        },
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"]},
    {"name": "__$ebnf$1", "symbols": [/[ ]/]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"]}
]
  , ParserStart: "program"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
