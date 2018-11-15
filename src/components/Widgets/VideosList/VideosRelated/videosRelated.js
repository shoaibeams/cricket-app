import React from 'react';
import styles from '../videosList.css';
import VideosListTemplete from '../videosListTemplate';

const videosRelated = (props) => (

    <div className={styles.relatedWrapper}>
        <VideosListTemplete
        data={props.teams}
        teams={props.teams} 
        />
    </div>

)


export default videosRelated;