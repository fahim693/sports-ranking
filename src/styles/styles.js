import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        fontSize: 25
    },
    teamCardView: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 10,
        paddingRight: 20,
    },
    team: {
        fontSize: 19,
        fontWeight: '600'
    },
    point: {
        color: '#9e9e9e'
    },
    rankComparison: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontWeight: '400'
    }
});

export default styles