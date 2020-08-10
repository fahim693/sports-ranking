import React from 'react';
import { View, FlatList } from 'react-native';
import TeamCard from '../components/TeamCard';
import { nbaRanking } from '../data/Nba'

const NbaRanking = () => {
    return (
        <View>
            <FlatList
                data={nbaRanking}
                renderItem={({ item }) => <TeamCard
                    flag='nba'
                    item={item}
                />}
            />
        </View>
    )
}

export default NbaRanking;