class AudioPlayerController {
    constructor($element, $timeout, $interval) {
        'ngInject';

        this.$timeout = $timeout;
        this.$interval = $interval;

        $element.addClass('audio-player');
    }

    $onInit() {
        this.isPaused = true;
        this.timerInterval = undefined;
        this.durationPercentage = 0;

        if(angular.isDefined(this.audioPanel.registerPlayer)) {
            this.audioPanel.registerPlayer({
                play: () => this.play(),
                pause: () => this.pause()
            });
        }
    }

    play() {
        this.audioSample.play();
        this.isPaused = false;

        this.audioTiming = this.$timeout(() => {
            this.isPaused = true;
            this.durationPercentage = 0;
            this.$interval.cancel(this.timerInterval);
            this.timerInterval = undefined;
        }, (this.audioSample.duration - this.audioSample.currentTime) * 1000);

        if(angular.isUndefined(this.timerInterval)) {
            this.timerInterval = this.$interval(() => {
                this.durationPercentage = 100 - (((this.audioSample.duration - this.audioSample.currentTime) / this.audioSample.duration) * 100);
            }, 100);
        }
    }

    pause() {
        this.$timeout.cancel(this.audioTiming);

        this.audioSample.pause();
        this.isPaused = true;
    }
}

export default AudioPlayerController;
