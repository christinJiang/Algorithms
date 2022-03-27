import cx from 'classnames';
import { Component } from 'react';

export default class LikeButton extends Component {
    state = {
        number: 100,
        initalState: true,
    };
    onClick = () => {
      this.setState({
          number: this.state.initalState ? ++this.state.number : --this.state.number,
          initalState: !this.state.initalState,
      });
    }
    render() {
        return (
            <>
                <div>
                    <h2>
                    <button className={cx('like-button', !this.state.initalState && 'liked')} onClick={this.onClick}>Like Button | <span>{this.state.number}</span>
                    </button>
                    </h2>
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
            </>
        );
    }
}