// (function () {
    'use strict';

    var arrowDegrees = new ArrowDegrees();
    var clock = new Clock();
    // var bbb = new Clock();
    // console.dir(bbb);
    function Clock() {
        this.secondHand = document.getElementById('secondString');
        this.minuteHand = document.getElementById('minuteString');
        this.hourHand = document.getElementById('hourString');
        this.lines = document.getElementById('www').children;
        this.minuteCircle = document.getElementById('vvv').children;
        this.gear18 = document.getElementById('z18');
        this.gear10 = document.getElementById('z10');
        this.gear6 = document.getElementById('z6');
    }

    function ArrowDegrees() {
        this.second = 0;
        this.minute = 0;
        this.hour = 0;
    }

    ArrowDegrees.prototype.getCurrentDegrees = function () {
        var date = new Date();
        this.second = date.getSeconds();
        this.minute = date.getMinutes();
        this.hour = date.getHours();
    };

    Clock.prototype.getIllumination = function () {

        for (var i = 0; i < arrowDegrees.second; i++) {
            this.lines[i].style.fill = '#1e8bf7';
        }

        this.lines[arrowDegrees.second].style.fill = '#1e8bf7';
    };

    // Clock.prototype.circleIllumination = function () {
    //     if (arrowDegrees.second % 5 === 0) {
    //         this.minuteCircle[arrowDegrees.second / 5].style.fill = 'yellowgreen';
    //     }
    // };

    Clock.prototype.resetRotation = function () {
        var that = this;

        function reset() {
            that.secondHand.style.transition = "0s all";
            that.secondHand.style.transform = "rotate(" + 0 + "deg)";
            that.gear18.style.transition = "0s all";
            that.gear18.style.transform = "rotate(" + 0 + "deg)";
            that.gear10.style.transition = "0s all";
            that.gear10.style.transform = "rotate(" + 360 + "deg)";
            that.gear6.style.transition = "0s all";
            that.gear6.style.transform = "rotate(" + 360 + "deg)";
        }

        this.secondHand.style.transform = "rotate(" + 360 + "deg)";
        this.gear18.style.transform = "rotate(" + 360 + "deg)";
        this.gear10.style.transform = "rotate(" + "-288" + "deg)";
        this.gear6.style.transform = "rotate(" + "-720" + "deg)";

        var j;
        var linesLength = this.lines.length;
        for (j = 1; j < linesLength; j++) {
                this.lines[j].style.fill = 'gray';
            }
        setTimeout(reset, 300);
    };

    Clock.prototype.moveSecondString = function () {
        this.secondHand.style.transition = "0.2s all cubic-bezier(.53, 1.47, .62, 1.47)";
        this.secondHand.style.transform = "rotate(" + arrowDegrees.second * 6 + "deg)";
    };

    Clock.prototype.moveMinuteString = function () {
        this.minuteHand.style.transition = "0.2s all cubic-bezier(.53, 1.47, .62, 1.47)";
        this.minuteHand.style.transform = "rotate(" + (arrowDegrees.minute * 6 + (arrowDegrees.second / 60) * 6) + "deg)";
    };

    Clock.prototype.moveHourString = function () {
        this.hourHand.style.transition = "0.2s all cubic-bezier(.53, 1.47, .62, 1.47)";
        this.hourHand.style.transform = "rotate(" + (arrowDegrees.hour * 30 + (arrowDegrees.minute / 60) * 30) + "deg)";
    };

    Clock.prototype.moveGear18 = function () {
        this.gear18.style.transition = "0.2s all cubic-bezier(.53, 1.47, .62, 1.47)";
        this.gear18.style.transform = "rotate(" + arrowDegrees.second * 6 + "deg)";
    };

    Clock.prototype.moveGear10 = function () {
        this.gear10.style.transition = "0.2s all cubic-bezier(.53, 1.47, .62, 1.47)";
        this.gear10.style.transform = "rotate(" + (360 - arrowDegrees.second * 6 * 1.8) + "deg)";
    };

    Clock.prototype.moveGear6 = function () {
        this.gear6.style.transition = "0.2s all cubic-bezier(.53, 1.47, .62, 1.47)";
        this.gear6.style.transform = "rotate(" + (360 - arrowDegrees.second * 6 * 3) + "deg)";
    };

    Clock.prototype.moveString = function () {
        this.moveMinuteString();
        this.moveSecondString();
        this.moveHourString();
        this.moveGear18();
        this.moveGear10();
        this.moveGear6();
    };

    setInterval(function () {
        arrowDegrees.getCurrentDegrees();
        if(arrowDegrees.second === 0) {
            clock.resetRotation();
        } else {
            clock.getIllumination();
            // clock.circleIllumination();
            clock.moveString();
        }
    }, 1000);
// }());