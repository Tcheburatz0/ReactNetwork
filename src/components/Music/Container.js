import PlayButton from "./MyMusic";
import React from "react";

class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state={isMusicPlaying:false};
    }

    handleClick() {
        if (this.state.isMusicPlaying) {
            this.audio.pause();
        } else {
            this.audio.play();
        }
        this.setState(prevState => {
            return {
                isMusicPlaying: !prevState.isMusicPlaying
            };
        });
    };
    render() {
        let status = this.state.isMusicPlaying ? 'Playing :)' : 'Not playing :(';
        return (
            <div>
                <PlayButton
                    onClick={this.handleClick.bind(this)}
                    isMusicPlaying={this.state.isMusicPlaying}
                />
                <audio id="audio" ref={(audioTag) => { this.audio = audioTag }} />
                <br/>
                <h1>{ status }</h1>
                <br/>
                <div id="container">
                    <div id="hook"></div>
                    <h1>Play Music</h1>
                    <input type="file" id="files" name="files[]" multiple />
                </div>
            </div>
        );
    }
}

export default Container;