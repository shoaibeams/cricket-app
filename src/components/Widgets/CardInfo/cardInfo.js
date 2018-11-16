import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './cardInfo.css';

import moment from 'moment';

const CardInfo = (props) => {

    const teamName = (teams, team) => {
        let data = teams.find((item) => {
            return item.teamId === team
        });
        if (data)
            return data.name
    }

    const formatDate = (date) => {
        return moment(date).format("MMM Do YY");
    }

    return (
        <div className={styles.cardInfo}>
            <span className={styles.teamName}>
                {teamName(props.teams, props.team)}
            </span>
            <span className={styles.data}>
                <FontAwesome name="clock-o" />
                {formatDate(props.date)}
            </span>
        </div>
    );
};

export default CardInfo;