import React, { Component } from 'react'
import './Detail.css'

export default class Detail extends Component {

    componentDidMount() {
        const { location, history } = this.props;
        if( location.state === undefined ){
            history.push('/');
        }
    }

    render() {
        
        const { location } = this.props;
        
        if( location.state ){
            return (
                <div className="datail">
                    <img src={ location.state.poster } alt={ location.state.title } title={ location.state.title }></img>
                    <div className="datail_data">
                        <h3 className="datail_title" style={ { backgroundColor : '#eee' } }>{ location.state.title }</h3>
                        <h4 className="datail_year">{ location.state.year }</h4>
                        <ul className="datail_genres">
                            { location.state.genres.map( ( genre, index ) => {
                                return (
                                    <li key={ index } className="datail_genre">{ genre }</li>
                                );
                            } ) }
                        </ul>
                        <p className="datail_summary">{ location.state.summary.slice(0,180) } ...</p> {/* .slice() -> 0~179글자를 추출 */}
                    </div>
                </div>
            )
        }else{
            return null;
        }
    }
}
