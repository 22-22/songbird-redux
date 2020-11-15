import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../index.scss';
import { connect } from 'react-redux';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.player = React.createRef();
    }

    render() {
        if (this.props.isGuessed) {
            this.player.current.audio.current.pause();
        }
        
        return (
            <AudioPlayer
                ref={this.player}
                autoPlayAfterSrcChange={false}
                src={this.props.audio}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, null)(Player);