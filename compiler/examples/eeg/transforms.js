const Transform = require("../../src/index").Transform;


var mainTransform = new Transform("sampleddata",
    "select * from sampled where x < 200000;",
    "temp",
    function (row, width, height) {
        var ret = [];
        ret.push(row[0]);
        ret.push(d3.scaleLinear().domain([0, 500000]).range([0, width])(row[1]));
        var yscale = d3.scaleLinear().domain([-8000, 40000]).range([0, height / 21])(row[2]);
        ret.push(yscale + height / 21 * (row[4]-1));
        ret.push(row[3]);
        ret.push(row[4]);

        return Java.to(ret, "java.lang.String[]");
    },
    ["id", "x", "y", "channel_name", "channel_id"],
    true);
//
var realTransform = new Transform("realdata",
    "select * from sampled where x < 200000;",
    "temp",
    function (row, width, height) {
        var ret = [];
        ret.push(row[0]);
        ret.push(d3.scaleLinear().domain([0, 500000]).range([0, width])(row[1]));
        var yscale = d3.scaleLinear().domain([-8000, 40000]).range([0, height / 21])(row[2]);
        ret.push(yscale + height / 21 * (row[4]-1));
        ret.push(row[3]);
        ret.push(row[4]);

        return Java.to(ret, "java.lang.String[]");
    },
    ["id", "x", "y", "channel_name", "channel_id"],
    true);


var yaxisTransform = new Transform("yaxis",
    "select distinct channel from sampled;",
    "temp",
    function (row){
        var ret = [];
        ret.push(row[0]);

        return Java.to(ret, "java.lang.String[]");
    },
    ["channel_name"],
    true);

module.exports = {
    mainTransform : mainTransform,
    realTransform : realTransform,
    yaxisTransform : yaxisTransform
};
