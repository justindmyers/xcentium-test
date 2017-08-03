class AudioPanelController {
    constructor($element) {
        'ngInject';

        $element.addClass('audio-panel');
    }

    $onInit() {
        this.players = [];
    }

    $onChanges(changes) {
        if (changes.audioSamples && angular.isDefined(changes.audioSamples.currentValue)) {
            this.audioSamples = angular.copy(this.audioSamples);

            if(this.audioSamples.length) {
                this.audioSamplesContext = this.audioSamples.map(sample => {
                    return {
                        title: sample.title,
                        context: new Audio(sample.url)
                    };
                });
            }
        }
    }

    playAll() {
        this.players.forEach(player => {
            player.play();
        });
    }

    registerPlayer(player) {
        this.players.push(player);
    }
}

export default AudioPanelController;
