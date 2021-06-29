export class MusicPlayer {
    _musicLevel: number = 0;
    _oldMusicLevel: number = 50;

    constructor(musicLevel: number, oldMusiclevel: number) {
        this._musicLevel = musicLevel;
        this._oldMusicLevel = oldMusiclevel;
    }

    get musicLevel(): number {
        return this._musicLevel;
    }

    set oldMusicLevel(): number {
        return this._oldMusicLevel;
    }

    turnMusicOn() {
        this._musicLevel = this._oldMusicLevel;
    }

    turnMusicOff() {
        this._musicLevel = 0;
    }

}