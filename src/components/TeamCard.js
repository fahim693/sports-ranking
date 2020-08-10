import React from 'react'
import { Card } from 'react-native-paper';
import { View, Text, Image } from 'react-native';
import styles from '../styles/styles';
import { AntDesign } from '@expo/vector-icons';

const TeamCard = (props) => {
    let positionColor, positionIcon;
    if (props.flag === 'fifa' || props.flag === 'tennis') {
        if (props.item.status === '+') {
            positionColor = '#0ea136'
            positionIcon = 'caretup'
        } else if (props.item.status === '-') {
            positionColor = '#c90c0c'
            positionIcon = 'caretdown'
        } else {
            positionColor = '#5c5c5c'
            positionIcon = 'minus'
        }
    }

    return (
        <Card style={{ marginLeft: 6, marginRight: 6, marginBottom: 1, marginTop: 2 }}>
            <View style={styles.teamCardView}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, marginRight: 6 }}>{props.item.rank}.</Text>
                    <Image source={props.item.flag} style={{ width: 45, height: 45, marginRight: 8 }} />
                    <View>
                        <Text style={styles.team}>{props.item.country}</Text>
                        <Text style={styles.point}>{props.item.points}</Text>
                    </View>
                </View>
                <View style={styles.rankComparison} >
                    {
                        props.flag === 'fifa' || props.flag === 'tennis' ?
                            <React.Fragment>
                                <AntDesign name={positionIcon} size={10} color={positionColor} />
                                <Text style={{ fontSize: 17, marginLeft: 3, color: positionColor }}>{props.item.position}</Text>
                            </React.Fragment> :
                            props.flag === 'cricket' || props.flag === 'nba' ?
                                <Text style={{ fontSize: 17, marginLeft: 3, color: '#000' }}>{props.item.rating}</Text> : ''
                    }
                </View>
            </View>
        </Card>

    )
}

export default TeamCard;