import React from 'react';
import { View, FlatList } from 'react-native';
import TeamCard from '../components/TeamCard';
import { tennisRanking } from '../data/Tennis'

const TennisRanking = () => {
    return (
        <View>
            <FlatList
                data={tennisRanking}
                renderItem={({ item }) => <TeamCard
                    flag='tennis'
                    item={item}
                />}
            />
        </View>
    )
}

export default TennisRanking;