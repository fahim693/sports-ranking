import React from 'react';
import { View, FlatList } from 'react-native';
import TeamCard from '../components/TeamCard';
import { iccRanking } from '../data/Cricket'

const IccRanking = () => {
    return (
        <View>
            <FlatList
                data={iccRanking}
                renderItem={({ item }) => <TeamCard
                    flag="cricket"
                    item={item}
                />}
            />
        </View>
    )
}

export default IccRanking;