import React from 'react';
import { View, FlatList } from 'react-native';
import TeamCard from '../components/TeamCard';
import { fifaRanking } from '../data/Fifa'

const FifaRanking = () => {
    return (
        <View>
            <FlatList
                data={fifaRanking}
                renderItem={({ item }) => <TeamCard
                    flag='fifa'
                    item={item}
                />}
            />
        </View>
    )
}

export default FifaRanking;