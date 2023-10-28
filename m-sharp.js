// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "program", "symbols": ["var_assignment"], "postprocess": id},
    {"name": "program", "symbols": ["number"], "postprocess": id},
    {"name": "var_assignment$ebnf$1", "symbols": []},
    {"name": "var_assignment$ebnf$1", "symbols": ["var_assignment$ebnf$1", {"literal":" "}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "var_assignment$string$1", "symbols": [{"literal":"-"}, {"literal":">"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "var_assignment$ebnf$2", "symbols": []},
    {"name": "var_assignment$ebnf$2", "symbols": ["var_assignment$ebnf$2", {"literal":" "}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "var_assignment", "symbols": ["identifier", "var_assignment$ebnf$1", "var_assignment$string$1", "var_assignment$ebnf$2", "number"], "postprocess":  
        data => {
            return {
                type : "var_assignment",
                varname : data[0],
                value : data[4]
            }
        }
        },
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
        }
]
  , ParserStart: "program"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
