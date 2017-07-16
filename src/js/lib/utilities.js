'use strict';

const _util_ = {
    handleTime:(duration) => {
        let sec_num = parseInt(duration, 10);
        let hours   = Math.floor(sec_num / 3600);
        let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        let seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours < 10 && hours > 0) {
            hours = '0' + hours + ':';
        } else {
            hours = '';
        };

        if (minutes < 10) {
            minutes = '0' + minutes;
        };

        if (seconds < 10) {
            seconds = '0' + seconds;
        };

        return hours + minutes + ':' + seconds;
    },

    handleOffsetParent:(node) => {
        let n = node;
        let o = 0;

        while (n.offsetParent !== null) {
            o = o + n.offsetLeft;
            n = n.offsetParent;
        };

        return o;
    }
};

module.exports = _util_;
