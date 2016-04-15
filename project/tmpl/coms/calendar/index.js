/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require('magix');
var $ = require('$');
var GetNumOfDays = function(year, month) {
    return 32 - new Date(year, month - 1, 32).getDate();
};
var Days = ['日', '一', '二', '三', '四', '五', '六'];
var PadZero = function(str) {
    return ('0' + str).slice(-2);
};
var GetWeekText = function(weekStart) {
    var a = [];
    for (var i = 0; i < 7; i++) {
        a[i] = Days[(i + weekStart) % 7];
    }
    return a;
};
var DateDisabled = function(current, start, end) {
    var ts = current.getTime(),
        flag;
    if (start) {
        flag = ts < start.getTime();
    }
    if (!flag && end) {
        flag = ts > end.getTime();
    }
    return flag;
};
var MonthDisabled = function(year, month, start, end) {
    var flag, current = parseInt(year + PadZero(month), 10);
    if (start) {
        start = parseInt(start.getFullYear() + PadZero(start.getMonth()), 10);
        flag = current < start;
    }
    if (!flag && end) {
        end = parseInt(end.getFullYear() + PadZero(end.getMonth()), 10);
        flag = current > end;
    }
    return flag;
};
var YearDisabled = function(year, start, end) {
    var flag;
    if (start) {
        flag = year < start.getFullYear();
    }
    if (!flag && end) {
        flag = year > end.getFullYear();
    }
    return flag;
};
var DateReg = {
    y: {
        reg: /y+/gi,
        fn: function(m, d) {
            return String(d.getFullYear()).slice(-m.length);
        }
    },
    M: {
        reg: /M+/g,
        fn: function(m, d, t) {
            t = d.getMonth() + 1;
            return PadZero(t).slice(-m.length);
        }
    },
    d: {
        reg: /d+/gi,
        fn: function(m, d, t) {
            t = d.getDate();
            return PadZero(t).slice(-m.length);
        }
    },
    h: {
        reg: /h+/gi,
        fn: function(m, d, t) {
            t = d.getHours();
            return PadZero(t).slice(-m.length);
        }
    },
    m: {
        reg: /m+/g,
        fn: function(m, d, t) {
            t = d.getMinutes();
            return PadZero(t).slice(-m.length);
        }
    },
    s: {
        reg: /s+/g,
        fn: function(m, d, t) {
            t = d.getSeconds();
            return PadZero(t).slice(-m.length);
        }
    },
    S: {
        reg: /S+/g,
        fn: function(m, d, t) {
            t = d.getMilliseconds();
            return String(t).substring(0, m.length);
        }
    }
};
var Date_Parse = function(date) {
    if (date instanceof Date) {
        return date;
    } else {
        date = new Date(Date.parse(String(date).replace(/-/g, '/')));
    }
    if (date instanceof Date && (date != 'Invalid Date') && !isNaN(date)) {
        return date;
    }
    return null;
};
var Date_Format = function(date, format) {
    date = Date_Parse(date);
    format = format || 'YYYY/MM/dd hh:mm:ss';
    var replacement = function(match) {
        return DateReg[p].fn(match, date);
    };
    for (var p in DateReg) {
        format = format.replace(DateReg[p].reg, replacement);
    }
    return format;
};
var DefaultFormatter = 'YYYY-MM-dd';
var CSSNames = 'names@index.css';
Magix.applyStyle('@index.css');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    update: function(ops) {
        ops = ops || {};
        var weekStart = ops.weekStart || 0;
        var selected = Date_Parse(ops.selected);
        var today = new Date();
        var me = this;
        var date = selected || today;
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var data = me.data;
        var max = Date_Parse(ops.max);
        var min = Date_Parse(ops.min);
        me.$picked = ops.picked;
        data.set({
            max: max,
            min: min,
            year: year,
            month: month,
            id: me.id,
            weekStart: weekStart,
            weekText: GetWeekText(weekStart)
        });
        me.updateSelected(selected);
        me.updateYears();
        me.updateMonths();
        me.updateDays(true);
    },
    updateSelected: function(selected) {
        var me = this,
            data = me.data;
        selected = Date_Parse(selected);
        if (selected) {
            data.set({
                selectedYear: selected.getFullYear(),
                selectedMonth: selected.getMonth() + 1,
                selected: Date_Format(selected, DefaultFormatter)
            });
        }
    },
    updateYears: function(render) {
        var me = this;
        var data = me.data;
        var json = data.get();
        var year = json.year;
        var min = json.min;
        var max = json.max;
        var startYear = year - year % 10 - 1;
        var endYear = startYear + 11;
        var rows = [];
        for (var i = startYear; i <= endYear; i++) {
            rows.push({
                year: i,
                selected: i == json.selectedYear,
                disabled: YearDisabled(i, min, max)
            });
        }
        data.set({
            startYear: startYear,
            endYear: endYear,
            years: rows
        });
        if (render) {
            data.digest();
        }
    },
    updateMonths: function(render) {
        var rows = [],
            data = this.data,
            json = data.get(),
            year = json.year,
            min = json.min,
            max = json.max;
        for (var i = 1; i <= 12; i++) {
            rows.push({
                month: i,
                selected: year == json.selectedYear && i == json.selectedMonth,
                disabled: MonthDisabled(year, i - 1, min, max)
            });
        }
        data.set({
            months: rows
        });
        if (render) {
            data.digest();
        }
    },
    updateDays: function(render) {
        var me = this;
        var trs = [];
        var data = me.data;
        var weekStart = data.get('weekStart');
        var year = data.get('year');
        var month = data.get('month');
        var startOffset = (7 - weekStart + new Date(year, month - 1, 1).getDay()) % 7;
        var tds = [];
        var days = GetNumOfDays(year, month),
            i;
        var preDays = GetNumOfDays(year, month - 1);
        var max = data.get('max');
        var min = data.get('min');
        var selected = data.get('selected');
        var day, date, formatDay;
        for (i = 1; i <= startOffset; i++) {
            day = preDays - (startOffset - i);
            date = new Date(year, month - 2, day);
            tds.push({
                month: month - 1,
                full: Date_Format(date, DefaultFormatter),
                day: day,
                otherMonth: true,
                disabled: DateDisabled(date, min, max)
            });
        }
        for (i = 1; i <= days; i++) {
            date = new Date(year, month - 1, i);
            formatDay = Date_Format(date, DefaultFormatter);
            tds.push({
                selected: formatDay == selected,
                day: i,
                month: month,
                full: formatDay,
                disabled: DateDisabled(date, min, max)
            });
            if (((i + startOffset) % 7) === 0) {
                trs.push(tds);
                tds = [];
            }
        }
        var fillStart = tds.length; //补充
        var fillEnd = 14; //2周
        for (i = fillStart; i < fillEnd; i++) {
            day = i - fillStart + 1;
            date = new Date(year, month, day);
            tds.push({
                month: month + 1,
                day: day,
                otherMonth: true,
                full: Date_Format(date, DefaultFormatter),
                disabled: DateDisabled(date, min, max)
            });
            if ((i + 1) % 7 === 0) {
                trs.push(tds);
                tds = [];
                if (trs.length == 6) break;
            }
        }
        data.set({
            days: trs
        });
        if (render) {
            data.digest();
        }
    },
    render: function() {
        var me = this;
        me.endUpdate();
    },
    changeMonth: function(toNext) {
        var me = this,
            data = me.data,
            month = data.get('month'),
            year = data.get('year');
        if (toNext) {
            month += 1;
            if (month > 12) {
                month = 1;
                year++;
            }
        } else {
            month -= 1;
            if (month < 1) {
                month = 12;
                year--;
            }
        }
        data.set({
            year: year,
            month: month
        });
        me.updateDays(true);
    },
    toDaysPannel: function() {
        var me = this;
        $('#months_' + me.id).addClass(CSSNames.none);
        $('#days_' + me.id).removeClass(CSSNames.none);
        $('#years_' + me.id).addClass(CSSNames.none);
    },
    'changeMonth<click>': function(e) {
        this.changeMonth(e.params.next);
    },
    'changeYear<click>': function(e) {
        var me = this;
        var params = e.params;
        var data = me.data,
            year = data.get('year');
        if (params.range) {
            year = year + (params.next ? 10 : -10);
        } else {
            year = year + (params.next ? 1 : -1);
        }
        data.set({
            year: year
        });
        if (params.range) {
            me.updateYears(true);
        } else {
            me.updateMonths(true);
        }
    },
    'showMonths<click>': function() {
        var me = this;
        $('#days_' + me.id).addClass(CSSNames.none);
        $('#months_' + me.id).removeClass(CSSNames.none);
        me.updateMonths(true);
    },
    'showYears<click>': function() {
        var me = this;
        $('#months_' + me.id).addClass(CSSNames.none);
        $('#years_' + me.id).removeClass(CSSNames.none);
        me.updateYears(true);
    },
    'pickYear<click>': function(e) {
        var year = e.params.year;
        var me = this;
        me.data.set({
            year: +year
        });
        $('#months_' + me.id).removeClass(CSSNames.none);
        $('#years_' + me.id).addClass(CSSNames.none);
        me.updateMonths(true);
    },
    'pickMonth<click>': function(e) {
        var month = e.params.month;
        var me = this;
        me.data.set({
            month: +month
        });
        $('#months_' + me.id).addClass(CSSNames.none);
        $('#days_' + me.id).removeClass(CSSNames.none);
        me.updateDays(true);
    },
    'choose<click>': function(e) {
        var me = this;
        $('#days_' + me.id + ' td').removeClass(CSSNames.selected);
        $(e.current).addClass(CSSNames.selected);
        var data = me.data;
        me.updateSelected(e.params.date);
        if (e.params.toMonth != data.get('month')) {
            me.changeMonth(e.params.toMonth - data.get('month') > 0);
        }
        if (me.$picked) {
            me.$picked({
                date: e.params.date
            });
        }
    }
}, {
    parse: Date_Parse,
    format: Date_Format,
    dateDisabled: DateDisabled
});