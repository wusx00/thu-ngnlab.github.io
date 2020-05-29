/*
 * @Author: NoserQJH
 * @LastEditors: NoserQJH
 * @Date: 2019-08-30 10:13:51
 * @LastEditTime: 2019-08-31 18:13:15
 * @Description:
 */
var imageId2size = {
    "image1": 1.5,
    "image2": 1,
    "image34": 2.05,
    "image5": 1.8,
    "image6": 1.5,
    "image7": 2.1,
}

function setSize() {
    var banner = document.getElementById("banner");
    banner.style.height = window.innerHeight + "px";

    var abstract = document.getElementById("abstract");
    abstract.style.height = window.innerHeight + "px";
    abstract.style.fontSize = window.innerHeight / 40 + "px";

    var image = document.getElementsByClassName("image");
    for (i = 0, len = image.length; i < len; i++) {
        image[i].style.color = "#000";
        image[i].style.height = window.innerHeight * imageId2size[image[i].id] + "px";
        image[i].style.fontSize = window.innerHeight / 40 + "px";
    }
}
window.onresize = function () {
    var banner = document.getElementById("banner");
    banner.style.height = window.innerHeight + "px";

    var abstract = document.getElementById("abstract");
    abstract.style.height = window.innerHeight + "px";
    abstract.style.fontSize = window.innerHeight / 40 + "px";

    var image = document.getElementsByClassName("image");
    for (i = 0, len = image.length; i < len; i++) {
        image[i].style.color = "#000";
        image[i].style.height = window.innerHeight * imageId2size[image[i].id] + "px";
        image[i].style.fontSize = window.innerHeight / 40 + "px";
    }
}
setSize();

$.getJSON('/libs/nature/data/data_1.json', function (data) {
var myChart = echarts.init(document.getElementById('imageContent1'));
var xAxisData = [];
var data1 = [];
var data2 = [];

option = {
    xAxis: {
        min: 1859,
        max: 2019,
        silent: false,
        splitLine: {
            show: false
        },
        axisPointer: {
            show: true,
            type: 'shadow'
        }
    },
    yAxis: {
        type: 'log',
        min: 1e-11,
        max: 1e-6,
        axisLabel: {
            formatter: function (value) {
                if (value == 1e-6) {
                    return '1e-6'
                }
                if (value == 1e-7) {
                    return '1e-7'
                }
                if (value == 1e-8) {
                    return '1e-8'
                }
                if (value == 1e-9) {
                    return '1e-9'
                }
                if (value == 1e-10) {
                    return '1e-10'
                }
            }
        }

    },

    series: [{
            name: 'Sir Joseph Norman Lockyer',
            data: data.NormanLockyer,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            lineStyle: {
                opacity: 0.5,
                color: 'red'
            },
            markLine: {
                symbol:'none',
                label: {
                    formatter: '{b}',
                    fontSize: '7',
                },
                data: [{
                    name: "1869-11-11",
                    xAxis: 1870,
                }, {
                    name: "1919-11-06",
                    xAxis: 1920,
                }, {
                    name: "1938-12",
                    xAxis: 1939,
                }, {
                    name: "61-12",
                    xAxis: 1962,
                }, {
                    name: "",
                    xAxis: 1965,
                }, {
                    name: "73-05",
                    xAxis: 1973,
                }, {
                    name: "79-12",
                    xAxis: 1980,
                }, {
                    name: "1995-12-08",
                    xAxis: 1996,
                }],
                animationDelay: 0,
                animationDuration: 0,
                type: 'dotted',
                lineStyle: {
                    color: 'black'
                }
            },
            markArea: {
                itemStyle: {
                    color: 'transparent'
                },
                label: {
                    position: 'inside',
                    fontWeight: 'bold',
                    rotate: 90,
                    color: 'black'
                },
                data: [
                    [{
                        name: 'Sir Joseph Norman Lockyer',
                        xAxis: 1870
                    }, {
                        xAxis: 1920
                    }]
                ]
            },
        },
        {
            name: 'Sir Joseph Norman Lockyer High Light',
            data: data.NormanLockyerHighLight,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            lineStyle: {
                opacity: 1,
                color: 'red',
                width: 3
            },
            markLine: {
                symbol:'none',
                label: {
                    formatter: '{b}',
                    fontSize: '7',
                    position: 'middle',
                    fontWeight: 'bold'
                },
                data: [{
                    name: "R.J.Fifield(1965-11~1966-02)",
                    xAxis: 1966,
                }, {
                    name: "Alun Jones(1973-05-18~08-20)",
                    xAxis: 1974,
                }, {
                    name: "Peter NewMark(1979-12-27~1980-05-13)",
                    xAxis: 1980,
                }],
                animationDelay: 0,
                animationDuration: 0,
                type: 'dotted',
                lineStyle: {
                    color: 'black'
                }
            },
        },
        {
            name: 'Sir Richard Gregory',
            data: data.SirRichardGregory,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            lineStyle: {
                color: 'orange',
                opacity: 0.5
            },
            markArea: {
                itemStyle: {
                    color: 'transparent'
                },
                label: {
                    position: 'inside',
                    fontWeight: 'bold',
                    rotate: 90,
                    color: 'black'
                },
                data: [
                    [{
                        name: 'Sir Richard Arman Gregory',
                        xAxis: 1920
                    }, {
                        xAxis: 1939
                    }]
                ]
            },
        },
        {
            name: 'Sir Richard Gregory High Light',
            data: data.SirRichardGregoryHighLight,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            lineStyle: {
                color: 'orange',
                opacity: 1,
                width: 3
            }
        },
        {
            name: 'L.J.F.Brimble',
            data: data.LJFBrimble,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            lineStyle: {
                color: 'blue',
                opacity: 0.5
            },
            markArea: {
                itemStyle: {
                    color: 'transparent'
                },
                label: {
                    position: 'inside',
                    fontWeight: 'bold',
                    rotate: 90,
                    color: 'black'
                },
                data: [
                    [{
                        name: 'A.J.V.Gale\nL.J.F.Brimble',
                        xAxis: 1939
                    }, {
                        xAxis: 1962
                    }]
                ]
            },
        },
        {
            name: 'L.J.F.Brimble High Light',
            data: data.LJFBrimbleHighLight,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            lineStyle: {
                color: 'blue',
                opacity: 1,
                width: 3
            }
        },
        {
            name: 'A.J.V.Gale',
            data: data.AJVGale,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            lineStyle: {
                color: 'green',
                opacity: 0.5
            }
        }, {
            name: 'A.J.V.Gale High Light',
            data: data.AJVGaleHighLight,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            lineStyle: {
                color: 'green',
                opacity: 1,
                widht: 5
            }
        },
        {
            name: 'Sir John Royden Maddox',
            data: data.JohnMaddox,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            lineStyle: {
                color: '#4BD',
                opacity: 0.5
            },
            markArea: {
                itemStyle: {
                    color: 'transparent'
                },
                label: {
                    position: 'inside',
                    fontWeight: 'bold',
                    rotate: 90,
                    color: 'black'
                },
                data: [
                    [{
                        name: 'Sir John Royden Maddox',
                        xAxis: 1965
                    }, {
                        xAxis: 1973
                    }]
                ]
            },
        }, {
            name: 'Sir John Royden Maddox High Light 1',
            data: data.JohnMaddoxHighLight1,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            lineStyle: {
                color: '#4BD',
                opacity: 1,
                width: 5
            },
            markArea: {
                itemStyle: {
                    color: 'transparent'
                },
                label: {
                    position: 'inside',
                    fontWeight: 'bold',
                    rotate: 90,
                    color: 'black'
                },
                data: [
                    [{
                        name: 'Sir John Royden Maddox',
                        xAxis: 1980
                    }, {
                        xAxis: 1996
                    }]
                ]
            },
        }, {
            name: 'Sir John Royden Maddox High Light 2',
            data: data.JohnMaddoxHighLight2,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            lineStyle: {
                color: '#4BD',
                opacity: 1,
                width: 5
            }
        },
        {
            name: 'David Dai Davies',
            data: data.DaiDavies,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            lineStyle: {
                color: 'purple',
                opacity: 0.5
            },
            markArea: {
                itemStyle: {
                    color: 'transparent'
                },
                label: {
                    position: 'inside',
                    fontWeight: 'bold',
                    rotate: 90,
                    color: 'black'
                },
                data: [
                    [{
                        name: 'David Dai Davies',
                        xAxis: 1973
                    }, {
                        xAxis: 1980
                    }]
                ]
            },
        }, {
            name: 'David Dai Davies High Light',
            data: data.DaiDaviesHighLight,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            lineStyle: {
                color: 'purple',
                opacity: 1,
                width: 5
            }
        },
        {
            name: 'Philip Campbell',
            data: data.PhilipCampbell,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            lineStyle: {
                color: 'gray',
                opacity: 0.5
            },
            markArea: {
                itemStyle: {
                    color: 'transparent'
                },
                label: {
                    position: 'inside',
                    fontWeight: 'bold',
                    rotate: 90,
                    color: 'black'
                },
                data: [
                    [{
                        name: 'Philip Campbell',
                        xAxis: 1996
                    }, {
                        xAxis: 2018
                    }]
                ]
            },
        },
        {
            name: 'Philip Campbell High Light',
            data: data.PhilipCampbellHighLight,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            lineStyle: {
                color: 'gray',
                opacity: 1,
                width: 5
            }
        }
    ],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
        return idx * 5;
    }
};
myChart.setOption(option);
});

$.getJSON('/libs/nature/data/data2.json', function (data) {
    var myChart = echarts.init(document.getElementById('imageContent5'));


    option = {
        xAxis: {
            min: 1900,
            max: 2019,
            splitLine: {
                show: false
            },
            axisPointer: {
                show: true,
                type: 'shadow'
            }
        },
        yAxis: {

        },

        series: [{
                name: 'Sir Joseph Norman Lockyer',
                data: data.Line1,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                lineStyle: {
                    opacity: 0.5,
                    color: 'red'
                },
                markLine: {
                    symbol:'none',
                    label: {
                        formatter: '',
                        fontSize: '7',
                    },
                    data: [{
                        name: "1869-11-11",
                        xAxis: 1870,
                    }, {
                        name: "1919-11-06",
                        xAxis: 1920,
                    }, {
                        name: "1938-12",
                        xAxis: 1939,
                    }, {
                        name: "61-12",
                        xAxis: 1962,
                    }, {
                        name: "",
                        xAxis: 1965,
                    }, {
                        name: "73-05",
                        xAxis: 1973,
                    }, {
                        name: "79-12",
                        xAxis: 1980,
                    }, {
                        name: "1995-12-08",
                        xAxis: 1996,
                    }],
                    animationDelay: 0,
                    animationDuration: 0,
                    type: 'dotted',
                    lineStyle: {
                        color: 'black'
                    }
                },
                markArea: {
                    itemStyle: {
                        color: 'transparent'
                    },
                    label: {
                        position: 'inside',
                        fontWeight: 'bold',
                        rotate: 90,
                        color: 'black'
                    },
                    data: [
                        [{
                            name: 'Sir Joseph Norman Lockyer',
                            xAxis: 1870
                        }, {
                            xAxis: 1920
                        }]
                    ]
                },
            },{
                name: 'Sir Joseph Norman Lockyer High Light',
                data: data.Line1HighLight1,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                lineStyle: {
                    opacity: 1,
                    color: 'red',
                    width: 3
                },
                markLine: {
                    symbol:'none',
                    label: {
                        formatter: '{b}',
                        fontSize: '7',
                        position: 'middle',
                        fontWeight: 'bold'
                    },
                    data: [{
                        name: "R.J.Fifield(1965-11~1966-02)",
                        xAxis: 1966,
                    }, {
                        name: "Alun Jones(1973-05-18~08-20)",
                        xAxis: 1974,
                    }, {
                        name: "Peter NewMark(1979-12-27~1980-05-13)",
                        xAxis: 1980,
                    }],
                    animationDelay: 0,
                    animationDuration: 0,
                    type: 'dotted',
                    lineStyle: {
                        color: 'black'
                    }
                },
                markArea: {
                    itemStyle: {
                        color: 'rgba(100,100,100,0.2)'
                    },
                    label: {
                        position: 'inside',
                        fontWeight: 'bold',
                        rotate: 90,
                        color: 'black'
                    },
                    data: [
                        [{
                            name: 'WW I',
                            xAxis: 1914
                        }, {
                            xAxis: 1919
                        }],
                        [{
                            name: 'WW II',
                            xAxis: 1939
                        }, {
                            xAxis: 1945
                        }]
                    ]
                },
            },{
                name: 'Sir Joseph Norman Lockyer High Light2',
                data: data.Line1HighLight2,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                lineStyle: {
                    opacity: 1,
                    color: 'red',
                    width: 3
                },
            },
            {
                name: 'Sir Richard Gregory',
                data: data.Line2,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                lineStyle: {
                    color: 'orange',
                    opacity: 0.5
                },
                markArea: {
                    itemStyle: {
                        color: 'transparent'
                    },
                    label: {
                        position: 'inside',
                        fontWeight: 'bold',
                        rotate: 90,
                        color: 'black'
                    },
                    data: [
                        [{
                            name: 'Sir Richard Arman Gregory',
                            xAxis: 1920
                        }, {
                            xAxis: 1939
                        }]
                    ]
                },
            },
            {
                name: 'L.J.F.Brimble',
                data: data.Line3,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                lineStyle: {
                    color: 'blue',
                    opacity: 0.5
                },
                markArea: {
                    itemStyle: {
                        color: 'transparent'
                    },
                    label: {
                        position: 'inside',
                        fontWeight: 'bold',
                        rotate: 90,
                        color: 'black'
                    },
                    data: [
                        [{
                            name: 'A.J.V.Gale\nL.J.F.Brimble',
                            xAxis: 1939
                        }, {
                            xAxis: 1962
                        }]
                    ]
                },
            },
            {
                name: 'A.J.V.Gale',
                data: data.Line4,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                lineStyle: {
                    color: 'green',
                    opacity: 0.5
                }
            },
            {
                name: 'Sir John Royden Maddox',
                data: data.Line5,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                lineStyle: {
                    color: '#4BD',
                    opacity: 0.5
                },
                markArea: {
                    itemStyle: {
                        color: 'transparent'
                    },
                    label: {
                        position: 'inside',
                        fontWeight: 'bold',
                        rotate: 90,
                        color: 'black'
                    },
                    data: [
                        [{
                            name: 'Sir John Royden Maddox',
                            xAxis: 1965
                        }, {
                            xAxis: 1973
                        }]
                    ]
                },
            },
            {
                name: 'David Dai Davies',
                data: data.Line6,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                lineStyle: {
                    color: 'purple',
                    opacity: 0.5
                },
                markArea: {
                    itemStyle: {
                        color: 'transparent'
                    },
                    label: {
                        position: 'inside',
                        fontWeight: 'bold',
                        rotate: 90,
                        color: 'black'
                    },
                    data: [
                        [{
                            name: 'David Dai Davies',
                            xAxis: 1973
                        }, {
                            xAxis: 1980
                        }]
                    ]
                },
            },
            {
                name: 'Philip Campbell',
                data: data.Line7,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                lineStyle: {
                    color: 'gray',
                    opacity: 0.5
                },
                markArea: {
                    itemStyle: {
                        color: 'transparent'
                    },
                    label: {
                        position: 'inside',
                        fontWeight: 'bold',
                        rotate: 90,
                        color: 'black'
                    },
                    data: [
                        [{
                            name: 'Philip Campbell',
                            xAxis: 1996
                        }, {
                            xAxis: 2018
                        }]
                    ]
                },
            },
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };
    myChart.setOption(option);
});
